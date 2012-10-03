( function ( $ ) {
	'use strict';

	var helpLink = function () {
		return $( "<li>" ).append( $( '<a>' ).attr( 'href', '#' ).text( "Help" ) );
	};

	var toggleMenuItem = function () {
		return $( "<li>" ).append( $( '<a>' ).attr( 'href', '#' ).text( "Enable IME" ) );
	};

	/**
	 *
	 */
	var getCaretPosition = function ( $element ) {
		var el = $element.get( 0 );
		var start = 0, end = 0, normalizedValue, range, textInputRange, len, endRange;

		if ( typeof el.selectionStart == "number" && typeof el.selectionEnd == "number" ) {
			start = el.selectionStart;
			end = el.selectionEnd;
		} else {
			// IE
			range = document.selection.createRange();
			if ( range && range.parentElement() == el ) {
				len = el.value.length;
				normalizedValue = el.value.replace( /\r\n/g, "\n" );

				// Create a working TextRange that lives only in the input
				textInputRange = el.createTextRange();
				textInputRange.moveToBookmark( range.getBookmark() );

				// Check if the start and end of the selection are at the very end
				// of the input, since moveStart/moveEnd doesn't return what we want
				// in those cases
				endRange = el.createTextRange();
				endRange.collapse( false );

				if ( textInputRange.compareEndPoints( "StartToEnd", endRange ) > -1 ) {
					start = end = len;
				} else {
					start = -textInputRange.moveStart( "character", -len );
					start += normalizedValue.slice( 0, start ).split( "\n" ).length - 1;

					if ( textInputRange.compareEndPoints( "EndToEnd", endRange ) > -1 ) {
						end = len;
					} else {
						end = -textInputRange.moveEnd( "character", -len );
						end += normalizedValue.slice( 0, end ).split( "\n" ).length - 1;
					}
				}
			}
		}
		return [ start, end ];

	};

	/**
	 *
	 */
	function replaceText ( $element, replacement, start, end ) {
		var element = $element.get( 0 );
		if ( document.selection ) {
			var range = document.selection.createRange();
			range.text = replacement;
			range.collapse( false );
			range.select();
		} else {
			var scrollTop = element.scrollTop;
			element.value = element.value.substring( 0, start ) + replacement
					+ element.value.substring( end, element.value.length );
			// restore scroll
			element.scrollTop = scrollTop;
			// set selection
			element.selectionStart = element.selectionEnd = start + replacement.length;
		}
	}

	/**
	 * Find the point at which a and b diverge, i.e. the first position at which they don't have matching characters.
	 *
	 * @param a String
	 * @param b String
	 * @return Position at which a and b diverge, or -1 if a === b
	 */
	var firstDivergence = function ( a, b ) {
		var minLength = a.length < b.length ? a.length : b.length;
		for ( var i = 0; i < minLength; i++) {
			if ( a.charCodeAt( i ) !== b.charCodeAt( i ) ) {
				return i;
			}
		}
		return -1;
	};

	/**
	 * Get the n characters in str that immediately precede pos Example: lastNChars( "foobarbaz", 5, 2 ) === "ba"
	 *
	 * @param str String to search in
	 * @param pos Position in str
	 * @param n Number of characters to go back from pos
	 * @return Substring of str, at most n characters long, immediately preceding pos
	 */
	var lastNChars = function ( str, pos, n ) {
		if ( n === 0 ) {
			return '';
		} else if ( pos <= n ) {
			return str.substr( 0, pos );
		} else {
			return str.substr( pos - n, n );
		}
	};

	function IME ( element, options ) {
		this.$element = $( element );
		this.options = $.extend( {}, IME.defaults, options );
		this.active = false;
		this.$imeSetting = $( '<div>' ).addClass( 'ime-setting dropdown' ).append(
				$( '<a>' ).addClass( 'ime-name' ).attr( 'href', '#' ).addClass( 'dropdown-toggle' )
						.text( "Select" ) );
		this.$menu = $( '<ul>' ).addClass( "ime-menu dropdown-menu" );
		this.inputmethod = null;
		this.context = '';
		this.shown = false;
		this.init();
		this.listen();
	}
	;

	IME.prototype = {
		constructor: IME,
		_positionSettings: function () {
			var position = this.$element.position();
			this.$imeSetting.css( 'top', position.top + this.$element.outerHeight() );
			this.$imeSetting.css( 'left', position.left + this.$element.outerWidth()
					- this.$imeSetting.outerWidth() );
		},

		select: function ( e ) {
			var ime = this;
			var inputmethodId = $( e.target ).data( 'ime-inputmethod' );
			if ( !inputmethodId ) {
				ime.$menu.hide();
				e.stopPropagation();
				return;
			}
			this.load( inputmethodId, function () {
				ime.inputmethod = $.ime.inputmethods[inputmethodId];
				ime.$element.focus();
				$( '.ime-menu' ).hide();
				var name = ime.inputmethod.name;
				ime.$imeSetting.find( 'a.ime-name' ).text( name );
				ime.$menu.hide();
			} );
			e.stopPropagation();
		},

		prepareInputMethods: function () {
			var ime = this;
			$.each( $.ime.languages, function ( languageCode, language ) {
				var $language = $( '<li>' ).addClass( 'dropdown' ).append(
						$( '<a>' ).attr( 'href', '#' ).addClass( 'dropdown-toggle' ).text(
								language.autonym ) );
				var $inputMethods = $( '<ul>' ).addClass( 'dropdown-menu sub-menu' );
				$.each( language.inputmethods, function ( index, inputmethod ) {
					var name = $.ime.sources[inputmethod].name;
					var $inputMethod = $( '<li>' ).append(
							$( '<a>' ).attr( 'href', '#' ).data( 'ime-inputmethod', inputmethod )
									.text( name ) );
					$inputMethods.append( $inputMethod );
				} );
				$language.append( $inputMethods );
				ime.$menu.append( $language );
			} );
		},

		init: function () {
			this.$menu.append( toggleMenuItem() );
			this.prepareInputMethods();
			this.$menu.append( helpLink() );
			this.$imeSetting.append( this.$menu );
			this.$element.after( this.$imeSetting );
			this._positionSettings();
		},

		listen: function () {
			this.$menu.on( 'click', 'li', $.proxy( this.select, this ) );
			this.$element.on( 'focus', $.proxy( this.focus, this ) ).on( 'keypress',
					$.proxy( this.keypress, this ) ).on( 'keyup', $.proxy( this.keyup, this ) );
			this.$imeSetting.on( 'click', $.proxy( this.settings, this ) );
		},

		focus: function ( e ) {
			$( '.ime-setting' ).hide();
			this.$imeSetting.show();
		},

		/**
		 *
		 * @param input
		 * @param context
		 * @returns
		 */
		transliterate: function ( input, context ) {
			var patterns, regex, rule, replacement;
			patterns = this.inputmethod.patterns;

			if ( $.isFunction( patterns ) ) {
				return patterns.call( this, input, context );
			}

			for ( var i = 0; i < patterns.length; i++) {
				rule = patterns[i];
				regex = new RegExp( rule[0] + '$' );

				// Last item in the rules. It can be a function too
				// since replace method can have second argument a function
				replacement = rule.slice( -1 )[0];

				// Input string match test
				if ( regex.test( input ) ) {
					// Context test required?
					if ( rule.length === 3 ) {
						if ( new RegExp( rule[1] + '$' ).test( context ) ) {
							return input.replace( regex, replacement );
						}
					} else {
						// No context test required. Just replace.
						return input.replace( regex, replacement );
					}
				}
			}

			// No matches, return the input
			return input;
		},

		keypress: function ( e ) {
			var startPos, c, pos, endPos, divergingPos, input, replacement;

			if ( !this.inputmethod ) {
				return true;
			}

			// handle backspace
			if ( e.which === 8 ) {
				// Blank the context
				this.context = '';
				return true;
			}

			c = String.fromCharCode( e.which );

			// Get the current caret position. The user may have selected text to overwrite,
			// so get both the start and end position of the selection. If there is no selection,
			// startPos and endPos will be equal.
			pos = getCaretPosition( this.$element ), startPos = pos[0];
			endPos = pos[1];

			// Get the last few characters before the one the user just typed,
			// to provide context for the transliteration regexes.
			// We need to append c because it hasn't been added to $this.val() yet
			input = lastNChars( this.$element.val() || this.$element.text(), startPos,
					this.inputmethod.lookbackLength )
					+ c;

			replacement = this.transliterate( input, this.context );

			// Update the context
			this.context += c;
			if ( this.context.length > this.inputmethod.keyBufferLength ) {
				// The buffer is longer than needed, truncate it at the front
				this.context = this.context.substring( this.context.length
						- this.inputmethod.keyBufferLength );
			}

			// textSelection() magic is expensive, so we avoid it as much as we can
			if ( replacement === input ) {
				return true;
			}

			// Drop a common prefix, if any
			divergingPos = firstDivergence( input, replacement );
			input = input.substring( divergingPos );
			replacement = replacement.substring( divergingPos );
			replaceText( this.$element, replacement, startPos - input.length + 1, endPos );

			e.stopPropagation();
			return false;
		},

		isActive: function () {
			return this.active;
		},

		settings: function ( e ) {
			this.$menu.show();
		},

		load: function ( name, callback ) {
			var ime = this;
			if ( $.ime.inputmethods[name] ) {
				if ( callback ) {
					callback.call( ime );
				}
				return true;
			}

			$.ajax( {
				url: ime.options.imePath + $.ime.sources[name].source,
				dataType: "script",
			} ).done( function () {
				console.log( name + " loaded" );
				if ( callback ) {
					callback.call( ime );
				}
			} ).fail(
					function ( jqxhr, settings, exception ) {
						console.log( "Error in loading inputmethod from " + url + " Exception: "
								+ exception );
					} );
		},
	};

	$.fn.ime = function ( option ) {
		return this.each( function () {
			var $this = $( this );
			var data = $this.data( 'ime' );
			var options = typeof option === 'object' && option;

			if ( !data ) {
				$this.data( 'ime', ( data = new IME( this, options ) ) );
			}

			if ( typeof option === 'string' ) {
				data[option]();
			}

		} );

	};

	$.ime = {};
	$.ime.inputmethods = {};
	$.ime.sources = {};
	$.ime.languages = {};

	$.ime.register = function ( inputMethod ) {
		$.ime.inputmethods[inputMethod.id] = inputMethod;
	};

	// default options
	IME.defaults = {
		imePath: "../" // Relative/Absolute path for the rules folder of jquery.ime
	};

	// private function for debugging
	function debug ( $obj ) {
		if ( window.console && window.console.log ) {
			window.console.log( $obj );
		}
	}

}( jQuery ) );
