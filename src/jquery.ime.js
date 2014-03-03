( function ( $ ) {
	'use strict';

	// rangy is defined in the rangy library
	/*global rangy */

	/**
	 * IME Class
	 * @param {Function} [options.helpHandler] Called for each input method row in the selector
	 * @param {Object} options.helpHandler.imeSelector
	 * @param {String} options.helpHandler.ime Id of the input method
	 */
	function IME( element, options ) {
		this.$element = $( element );
		// This needs to be delayed here since extending language list happens at DOM ready
		$.ime.defaults.languages = arrayKeys( $.ime.languages );
		this.options = $.extend( {}, $.ime.defaults, options );
		this.active = false;
		this.shifted = false;
		this.inputmethod = null;
		this.language = null;
		this.context = '';
		this.selector = this.$element.imeselector( this.options );
		this.listen();
	}

	IME.prototype = {
		constructor: IME,

		/**
		 * Listen for events and bind to handlers
		 */
		listen: function () {
			this.$element.on( 'keypress.ime', $.proxy( this.keypress, this ) );
			this.$element.on( 'keyup.ime', $.proxy( this.keyup, this ) );
			this.$element.on( 'keydown.ime', $.proxy( this.keydown, this ) );
			this.$element.on( 'destroy.ime', $.proxy( this.destroy, this ) );
			this.$element.on( 'enable.ime', $.proxy( this.enable, this ) );
			this.$element.on( 'disable.ime', $.proxy( this.disable, this ) );
		},

		/**
		 * Transliterate a given string input based on context and input method definition.
		 * If there are no matching rules defined, returns the original string.
		 *
		 * @param {string} input
		 * @param {string} context
		 * @param {boolean} altGr whether altGr key is pressed or not
		 * @returns {object} transliteration object
		 * @returns {bool} return.noop Whether to consider input processed or passed through.
		 * @returns {string} return.output the transliterated input or input unmodified.
		 */
		transliterate: function ( input, context, altGr ) {
			var patterns, regex, rule, replacement, i, retval;

			if ( altGr ) {
				patterns = this.inputmethod.patterns_x || [];
			} else {
				patterns = this.inputmethod.patterns || [];
			}

			if ( this.shifted ) {
				// if shift is pressed give priority for the patterns_shift
				// if exists.
				// Example: Shift+space where shift does not alter the keycode
				patterns = ( this.inputmethod.patterns_shift || [] )
					.concat( patterns );
			}

			if ( $.isFunction( patterns ) ) {
				// For backwards compatibility, allow the rule functions to return plain
				// string. Determine noop by checking whether input is different from
				// output. If the rule function returns object, just return it as-is.
				retval = patterns.call( this, input, context );
				if ( typeof retval === 'string' ) {
					return { noop: input === retval, output: retval };
				}

				return retval;
			}

			for ( i = 0; i < patterns.length; i++ ) {
				rule = patterns[i];
				regex = new RegExp( rule[0] + '$' );

				// Last item in the rules.
				// It can also be a function, because the replace
				// method can have a function as the second argument.
				replacement = rule.slice( -1 )[0];

				// Input string match test
				if ( regex.test( input ) ) {
					// Context test required?
					if ( rule.length === 3 ) {
						if ( new RegExp( rule[1] + '$' ).test( context ) ) {
							return { noop: false, output: input.replace( regex, replacement ) };
						}
					} else {
						return { noop: false, output: input.replace( regex, replacement ) };
					}
				}
			}

			// No matches, return the input
			return { noop: true, output: input };
		},

		keyup: function ( e ) {
			if ( e.which === 16 ) { // shift key
				this.shifted = false;
			}
		},

		keydown: function ( e ) {
			if ( e.which === 16 ) { // shift key
				this.shifted = true;
			}
		},

		/**
		 * Keypress handler
		 * @param {jQuery.Event} e Event
		 * @returns {Boolean}
		 */
		keypress: function ( e ) {
			var altGr = false,
				c, startPos, pos, endPos, divergingPos, input, replacement;

			if ( !this.active ) {
				return true;
			}

			if ( !this.inputmethod ) {
				return true;
			}

			// handle backspace
			if ( e.which === 8 ) {
				// Blank the context
				this.context = '';
				return true;
			}

			if ( e.altKey || e.altGraphKey ) {
				altGr = true;
			}

			// Don't process ASCII control characters except linefeed,
			// as well as anything involving Ctrl, Meta and Alt,
			// but do process extended keymaps
			if ( ( e.which < 32 && e.which !== 13 && !altGr ) || e.ctrlKey || e.metaKey ) {
				// Blank the context
				this.context = '';

				return true;
			}

			c = String.fromCharCode( e.which );

			// Get the current caret position. The user may have selected text to overwrite,
			// so get both the start and end position of the selection. If there is no selection,
			// startPos and endPos will be equal.
			pos = this.getCaretPosition( this.$element );
			startPos = pos[0];
			endPos = pos[1];

			// Get the last few characters before the one the user just typed,
			// to provide context for the transliteration regexes.
			// We need to append c because it hasn't been added to $this.val() yet
			input = this.lastNChars(
				this.$element.val() || this.$element.text(),
				startPos,
				this.inputmethod.maxKeyLength
			);
			input += c;

			replacement = this.transliterate( input, this.context, altGr );

			// Update the context
			this.context += c;

			if ( this.context.length > this.inputmethod.contextLength ) {
				// The buffer is longer than needed, truncate it at the front
				this.context = this.context.substring(
					this.context.length - this.inputmethod.contextLength
				);
			}

			// Allow rules to explicitly define whether we match something.
			// Otherwise we cannot distinguish between no matching rule and
			// rule that provides identical output but consumes the event
			// to prevent normal behavior. See Udmurt layout which uses
			// altgr rules to allow typing the original character.
			if ( replacement.noop ) {
				return true;
			}

			// Drop a common prefix, if any
			divergingPos = this.firstDivergence( input, replacement.output );
			input = input.substring( divergingPos );
			replacement.output = replacement.output.substring( divergingPos );
			replaceText( this.$element, replacement.output, startPos - input.length + 1, endPos );

			e.stopPropagation();

			return false;
		},

		/**
		 * Check whether the input method is active or not
		 * @returns {Boolean}
		 */
		isActive: function () {
			return this.active;
		},

		/**
		 * Disable the input method
		 */
		disable: function () {
			this.active = false;
			$.ime.preferences.setIM( 'system' );
		},

		/**
		 * Enable the input method
		 */
		enable: function () {
			this.active = true;
		},

		/**
		 * Toggle the active state of input method
		 */
		toggle: function () {
			this.active = !this.active;
		},

		/**
		 * Destroy the binding of ime to the editable element
		 */
		destroy: function () {
			$( 'body' ).off( '.ime' );
			this.$element.off( '.ime' ).removeData( 'ime' ).removeData( 'imeselector' );
		},

		/**
		 * Get the current input method
		 * @returns {string} Current input method id
		 */
		getIM: function () {
			return this.inputmethod;
		},

		/**
		 * Set the current input method
		 * @param {string} inputmethodId
		 */
		setIM: function ( inputmethodId ) {
			this.inputmethod = $.ime.inputmethods[inputmethodId];
			$.ime.preferences.setIM( inputmethodId );
		},

		/**
		 * Set the current Language
		 * @param {string} languageCode
		 * @returns {Boolean}
		 */
		setLanguage: function ( languageCode ) {
			if ( !$.ime.languages[languageCode] ) {
				debug( 'Language ' + languageCode + ' is not known to jquery.ime.' );

				return false;
			}

			this.language = languageCode;
			$.ime.preferences.setLanguage( languageCode );
			return true;
		},

		/**
		 * Get current language
		 * @returns {string}
		 */
		getLanguage: function () {
			return this.language;
		},

		/**
		 * load an input method by given id
		 * @param {string} inputmethodId
		 * @return {jQuery.Promise}
		 */
		load: function ( inputmethodId ) {
			var ime = this,
				deferred = $.Deferred(),
				dependency;

			if ( $.ime.inputmethods[inputmethodId] ) {
				return deferred.resolve();
			}

			// Validate the input method id.
			if ( !$.ime.sources[inputmethodId] ) {
				return deferred.reject();
			}

			dependency = $.ime.sources[inputmethodId].depends;
			if ( dependency && !$.ime.inputmethods[dependency] ) {
				ime.load( dependency ).done( function () {
					ime.load( inputmethodId ).done( function () {
						deferred.resolve();
					} );
				} );

				return deferred;
			}

			debug( 'Loading ' + inputmethodId );
			deferred = $.ajax( {
				url: ime.options.imePath + $.ime.sources[inputmethodId].source,
				dataType: 'script',
				cache: true
			} ).done( function () {
				debug( inputmethodId + ' loaded' );
			} ).fail( function ( jqxhr, settings, exception ) {
				debug( 'Error in loading inputmethod ' + inputmethodId + ' Exception: ' + exception );
			} );

			return deferred.promise();
		},

		/**
		 * Returns an array [start, end] of the beginning
		 * and the end of the current selection in $element
		 * @returns {Array}
		 */
		getCaretPosition: function ( $element ) {
			return getCaretPosition( $element );
		},

		/**
		 * Set the caret position in the div.
		 * @param {jQuery} $element The content editable div element
		 * @param {Object} position An object with start and end properties.
		 * @return {Array} If the cursor could not be placed at given position, how
		 * many characters had to go back to place the cursor
		 */
		setCaretPosition: function ( $element, position ) {
			return setCaretPosition( $element, position );
		},

		/**
		 * Find the point at which a and b diverge, i.e. the first position
		 * at which they don't have matching characters.
		 *
		 * @param a String
		 * @param b String
		 * @return Position at which a and b diverge, or -1 if a === b
		 */
		firstDivergence: function ( a, b ) {
			return firstDivergence( a, b );
		},

		/**
		 * Get the n characters in str that immediately precede pos
		 * Example: lastNChars( 'foobarbaz', 5, 2 ) === 'ba'
		 *
		 * @param str String to search in
		 * @param pos Position in str
		 * @param n Number of characters to go back from pos
		 * @return Substring of str, at most n characters long, immediately preceding pos
		 */
		lastNChars: function ( str, pos, n ) {
			return lastNChars( str, pos, n );
		}
	};

	/**
	 * jQuery plugin ime
	 * @param {Object} option
	 */
	$.fn.ime = function ( option ) {
		return this.each( function () {
			var data,
				$this = $( this ),
				options = typeof option === 'object' && option;

			// Some exclusions: IME shouldn't be applied to textareas with
			// these properties.
			if ( $this.prop( 'readonly' ) ||
				$this.prop( 'disabled' ) ||
				$this.hasClass( 'noime' ) ) {
				return;
			}

			data = $this.data( 'ime' );

			if ( !data ) {
				data = new IME( this, options );
				$this.data( 'ime', data );
			}

			if ( typeof option === 'string' ) {
				data[option]();
			}
		} );
	};

	$.ime = {};
	$.ime.inputmethods = {};
	$.ime.sources = {};
	$.ime.preferences = {};
	$.ime.languages = {};

	var defaultInputMethod = {
		contextLength: 0,
		maxKeyLength: 1
	};

	$.ime.register = function ( inputMethod ) {
		$.ime.inputmethods[inputMethod.id] = $.extend( {}, defaultInputMethod, inputMethod );
	};

	// default options
	$.ime.defaults = {
		imePath: '../', // Relative/Absolute path for the rules folder of jquery.ime
		languages: [], // Languages to be used- by default all languages
		helpHandler: null // Called for each ime option in the menu
	};

	/**
	 * private function for debugging
	 */
	function debug( $obj ) {
		if ( window.console && window.console.log ) {
			window.console.log( $obj );
		}
	}

	/**
	 * Returns an array [start, end] of the beginning
	 * and the end of the current selection in $element
	 */
	function getCaretPosition( $element ) {
		var el = $element.get( 0 ),
			start = 0,
			end = 0,
			normalizedValue,
			range,
			textInputRange,
			len,
			newLines,
			endRange;

		if ( $element.is( '[contenteditable]' ) ) {
			return getDivCaretPosition( el );
		}

		if ( typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number' ) {
			start = el.selectionStart;
			end = el.selectionEnd;
		} else {
			// IE
			range = document.selection.createRange();

			if ( range && range.parentElement() === el ) {
				len = el.value.length;
				normalizedValue = el.value.replace( /\r\n/g, '\n' );
				newLines = normalizedValue.match( /\n/g );

				// Create a working TextRange that lives only in the input
				textInputRange = el.createTextRange();
				textInputRange.moveToBookmark( range.getBookmark() );

				// Check if the start and end of the selection are at the very end
				// of the input, since moveStart/moveEnd doesn't return what we want
				// in those cases
				endRange = el.createTextRange();
				endRange.collapse( false );

				if ( textInputRange.compareEndPoints( 'StartToEnd', endRange ) > -1 ) {
					if ( newLines ) {
						start = end = len - newLines.length;
					} else {
						start = end = len;
					}
				} else {
					start = -textInputRange.moveStart( 'character', -len );

					if ( textInputRange.compareEndPoints( 'EndToEnd', endRange ) > -1 ) {
						end = len;
					} else {
						end = -textInputRange.moveEnd( 'character', -len );
					}
				}
			}
		}

		return [start, end];
	}

	/**
	 * Helper function to get an IE TextRange object for an element
	 */
	function rangeForElementIE( element ) {
		var selection;

		if ( element.nodeName.toLowerCase() === 'input' ) {
			selection = element.createTextRange();
		} else {
			selection = document.body.createTextRange();
			selection.moveToElementText( element );
		}

		return selection;
	}

	function replaceText( $element, replacement, start, end ) {
		var selection,
			length,
			newLines,
			scrollTop,
			range,
			correction,
			textNode,
			element = $element.get( 0 );

		if ( $element.is( '[contenteditable]' ) ) {
			correction = setCaretPosition( $element, {
				start: start,
				end: end
			} );

			selection = rangy.getSelection();
			range = selection.getRangeAt( 0 );

			if ( correction[0] > 0 ) {
				replacement = selection.toString().substring( 0, correction[0] ) + replacement;
			}

			textNode = document.createTextNode( replacement );
			range.deleteContents();
			range.insertNode( textNode );
			range.commonAncestorContainer.normalize();
			start = end = start + replacement.length - correction[0];
			setCaretPosition( $element, {
				start: start,
				end: end
			} );

			return;
		}

		if ( typeof element.selectionStart === 'number' && typeof element.selectionEnd === 'number' ) {
			// IE9+ and all other browsers
			scrollTop = element.scrollTop;

			// Replace the whole text of the text area:
			// text before + replacement + text after.
			// This could be made better if range selection worked on browsers.
			// But for complex scripts, browsers place cursor in unexpected places
			// and it's not possible to fix cursor programmatically.
			// Ref Bug https://bugs.webkit.org/show_bug.cgi?id=66630
			element.value = element.value.substring( 0, start ) +
				replacement +
				element.value.substring( end, element.value.length );

			// restore scroll
			element.scrollTop = scrollTop;
			// set selection
			element.selectionStart = element.selectionEnd = start + replacement.length;
		} else {
			// IE8 and lower
			selection = rangeForElementIE(element);
			length = element.value.length;
			// IE doesn't count \n when computing the offset, so we won't either
			newLines = element.value.match( /\n/g );

			if ( newLines ) {
				length = length - newLines.length;
			}

			selection.moveStart( 'character', start );
			selection.moveEnd( 'character', end - length );

			selection.text = replacement;
			selection.collapse( false );
			selection.select();
		}
	}

	function getDivCaretPosition( element ) {
		var charIndex = 0,
			start = 0,
			end = 0,
			foundStart = false,
			foundEnd = false,
			sel = rangy.getSelection();

		function traverseTextNodes( node, range ) {
			var i, childNodesCount;

			if ( node.nodeType === Node.TEXT_NODE ) {
				if ( !foundStart && node === range.startContainer ) {
					start = charIndex + range.startOffset;
					foundStart = true;
				}

				if ( foundStart && node === range.endContainer ) {
					end = charIndex + range.endOffset;
					foundEnd = true;
				}

				charIndex += node.length;
			} else {
				childNodesCount = node.childNodes.length;

				for ( i = 0; i < childNodesCount; ++i ) {
					traverseTextNodes( node.childNodes[i], range );
					if ( foundEnd ) {
						break;
					}
				}
			}
		}

		if ( sel.rangeCount ) {
			traverseTextNodes( element, sel.getRangeAt( 0 ) );
		}

		return [ start, end ];
	}

	function setCaretPosition( $element, position ) {
		var currentPosition,
			startCorrection = 0,
			endCorrection = 0,
			element = $element[0];

		setDivCaretPosition( element, position );
		currentPosition = getDivCaretPosition( element );
		// see Bug https://bugs.webkit.org/show_bug.cgi?id=66630
		while ( position.start !== currentPosition[0] ) {
			position.start -= 1; // go back one more position.
			if ( position.start < 0 ) {
				// never go beyond 0
				break;
			}
			setDivCaretPosition( element, position );
			currentPosition = getDivCaretPosition( element );
			startCorrection += 1;
		}

		while ( position.end !== currentPosition[1] ) {
			position.end += 1; // go forward one more position.
			setDivCaretPosition( element, position );
			currentPosition = getDivCaretPosition( element );
			endCorrection += 1;
			if ( endCorrection > 10 ) {
				// XXX avoid rare case of infinite loop here.
				break;
			}
		}

		return [startCorrection, endCorrection];
	}

	/**
	 * Set the caret position in the div.
	 * @param {Element} element The content editable div element
	 * @param position
	 */
	function setDivCaretPosition( element, position ) {
		var nextCharIndex,
			charIndex = 0,
			range = rangy.createRange(),
			foundStart = false,
			foundEnd = false;

		range.collapseToPoint( element, 0 );

		function traverseTextNodes( node ) {
			var i, len;

			if ( node.nodeType === 3 ) {
				nextCharIndex = charIndex + node.length;

				if ( !foundStart && position.start >= charIndex && position.start <= nextCharIndex ) {
					range.setStart( node, position.start - charIndex );
					foundStart = true;
				}

				if ( foundStart && position.end >= charIndex && position.end <= nextCharIndex ) {
					range.setEnd( node, position.end - charIndex );
					foundEnd = true;
				}

				charIndex = nextCharIndex;
			} else {
				for ( i = 0, len = node.childNodes.length; i < len; ++i ) {
					traverseTextNodes( node.childNodes[i] );
					if ( foundEnd ) {
						rangy.getSelection().setSingleRange( range );
						break;
					}
				}
			}
		}

		traverseTextNodes( element );

	}

	/**
	 * Find the point at which a and b diverge, i.e. the first position
	 * at which they don't have matching characters.
	 *
	 * @param a String
	 * @param b String
	 * @return Position at which a and b diverge, or -1 if a === b
	 */
	function firstDivergence( a, b ) {
		var minLength, i;

		minLength = a.length < b.length ? a.length : b.length;

		for ( i = 0; i < minLength; i++ ) {
			if ( a.charCodeAt( i ) !== b.charCodeAt( i ) ) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Get the n characters in str that immediately precede pos
	 * Example: lastNChars( 'foobarbaz', 5, 2 ) === 'ba'
	 *
	 * @param str String to search in
	 * @param pos Position in str
	 * @param n Number of characters to go back from pos
	 * @return Substring of str, at most n characters long, immediately preceding pos
	 */
	function lastNChars( str, pos, n ) {
		if ( n === 0 ) {
			return '';
		} else if ( pos <= n ) {
			return str.substr( 0, pos );
		} else {
			return str.substr( pos - n, n );
		}
	}

	function arrayKeys ( obj ) {
		return $.map( obj, function( element, index ) {
			return index;
		} );
	}
}( jQuery ) );
