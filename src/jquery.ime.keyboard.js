( function ( $ ) {
	'use strict';

	var templates, keyboards, keys, layouts;

	keys = {
		backspace: {
			text: '⌫',
			name: 'backSpace',
			style: 'keyboard-key-backSpace'
		},
		tab: {
			text : 'tab',
			name : 'tab',
			style: 'keyboard-key-tab',
			action : false
		},
		enter:{
			text : '⏎',
			name : 'return',
			style: 'keyboard-key-return',
			action : false
		},
		capslock: {
			text : 'caps',
			name : 'capsLock',
			style: 'keyboard-key-capsLock'
		},
		comma: {
			text : ',',
			shift : '<'
		},
		period: {
			text : '.',
			shift : '>'
		},
		leftsquarebracket: {
			text : '[',
			shift : '{'
		},
		rightsquarebracket: {
			text : ']',
			shift : '}'
		},
		semicolumn: {
			text : ';',
			shift : ':'
		},
		quote: {
			text: '\'',
			shift : '"'
		},
		backslash: {
			text: '\\',
			style: 'keyboard-key-backslash',
			shift : '|'
		},
		forwardslash: {
			text: '/',
			shift : '?'
		},
		space: {
			text: ' ',
			name: 'space',
			style: 'keyboard-key-space'
		},
		leftshift: {
			text : 'shift',
			name : 'leftShift',
			style: 'keyboard-key-leftshift'
		},
		rightshift: {
			text : 'shift',
			name : 'leftShift',
			style: 'keyboard-key-rightshift'
		},
		alt: {
			text : 'alt',
			name : 'leftalt',
			style: 'keyboard-key-leftalt'
		},
		altgr: {
			text : 'alt',
			name : 'altgr',
			style: 'keyboard-key-rightalt'
		}
	};

	keyboards = {
		qwerty: [
			[['`', '~'], ['1','!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], keys.backspace],
			[keys.tab, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', keys.leftsquarebracket, keys.rightsquarebracket, keys.backslash],
			[keys.capslock, 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', keys.semicolumn, keys.quote, keys.enter],
			[keys.leftshift, 'z', 'x', 'c', 'v', 'b', 'n', 'm', keys.comma, keys.period, keys.forwardslash, keys.rightshift],
			[keys.alt, keys.space, keys.altgr ]
		]
	};

	templates = {
		row : '<ul class="keyboard-row"></ul>',
		key : '<li class="keyboard-key"></li>',
		closeKey : '<span id="osk-close" class="osk-icon-close"></span>'
	};

	// cached layouts
	layouts = {}

	function Keyboard( element, options ) {
		this.options = $.extend( {}, Keyboard.defaults, options );
		this.$keyboard = $( [] );
		this.state = {};
		this.init();
		this.listen();
	}

	Keyboard.prototype = {
		constructor: Keyboard,

		init: function () {
			this.$keyboard = $( '<div>' )
				.attr( 'id', 'ime-osk' )
				.addClass( 'keyboard' );
			$( 'body' ).append( this.$keyboard );
		},

		build: function () {
			var inputmethod;
			this.layout = this.buildLayout( inputmethod || 'system' );
			this.buildKeyboard();
			this.listen();
		},

		buildLayout: function ( inputmethod ) {
			var layout = [],
				baseLayout = this.options.layout, // base layout,
				rowIndex,
				columnIndex,
				baseRow,
				row,
				layoutKey,
				rowsCount,
				key;

			if ( layouts.inputmethod ) {
				return layouts.inputmethod;
			}

			rowsCount = baseLayout.length;
			for ( rowIndex = 0; rowIndex < rowsCount; rowIndex += 1 ) {
				baseRow = baseLayout[rowIndex];
				row = [];
				for ( columnIndex = 0; columnIndex < baseRow.length; columnIndex += 1 ) {
					key = baseRow[columnIndex];
					layoutKey = {
						text: this.transliterate( key.text || key[0] || key ),
						name: key.name || key[0] || key,
						caps: this.transliterate( ( key.text ) ? key.caps || key.text : ( key[0] || key ).toUpperCase() ),
						shift: this.transliterate( ( key.text ) ? key.shift || key.text : ( key[1] || key ).toUpperCase() ),
						style: key.style
					};
					row[columnIndex] = layoutKey;
				}
				layout[rowIndex] = row;
			}

			layouts[inputmethod] = layout;
			return layout;
		},

		transliterate: function ( text ) {
			if ( text.length === 1
				&& this.$input.data( 'ime' ).inputmethod
				&& this.$input.data( 'ime' ).inputmethod.maxKeyLength <= 2 ) {
				return this.$input.data( 'ime' ).transliterate( text );
			}
			return text;
		},

		buildKeyboard: function () {
			var rowIndex,
				columnIndex,
				row,
				$row,
				key,
				$key,
				osk = this,
				layout = this.layout,
				rowsCount = layout.length;

			this.$keyboard = $( '#ime-osk' );
			this.$keyboard.empty();
			this.$keyboard.append( templates.closeKey );
			for ( rowIndex = 0; rowIndex < rowsCount; rowIndex += 1 ) {
				row = layout[rowIndex];
				$row = $( templates.row );
				for ( columnIndex = 0; columnIndex < row.length; columnIndex += 1 ) {
					key = row[columnIndex];
					$key = buildKey( key, this.state );
					$key.on( 'mouseup.osk', function () {
						osk.keypress( $( this ).text() );
					} );
					$row.append( $key );
				}
				this.$keyboard.append( $row );
			}
		},

		bind: function ( $input ) {
			this.$input = $input;

			// make osk draggable if jQuery.ui draggable widget is available
			if ( jQuery.ui && jQuery.ui.draggable ) {
				this.$keyboard.draggable( {
					drag: function ( event, ui ) {
						$( this ).addClass( 'bottom-auto' );
					}
				} );
			}
		},

		listen: function () {
			var osk = this;

			osk.$keyboard.find( '#osk-close' ).on( 'mouseup.osk', function () {
				osk.toggle();
			} );
		},

		show: function () {
			this.build();
			this.$keyboard.show();
		},

		hide: function () {
			this.$keyboard.hide();

			// reset osk position if it has been dragged
			if ( jQuery.ui && jQuery.ui.draggable ) {
				this.$keyboard
					.removeClass( 'bottom-auto' )
					.css( {
						top: 'auto',
						left: 'auto'
					} );
			}
		},

		toggle: function () {
			var imeselector = this.$input.data( 'imeselector' ),
				$oskToggleItem = imeselector.$menu.find( 'div.ime-osk-link' ),
				$oskToggleLink = $( '<a>' ).addClass( 'selectable-row-item' );

			$oskToggleItem.empty();

			if ( this.$keyboard.is( ':hidden' ) || this.$keyboard.is( ':empty' ) ) {
				this.show();
				$oskToggleLink.text( 'Hide keyboard' );
			} else {
				this.hide();
				$oskToggleLink.text( 'Show keyboard' );
			}

			$oskToggleItem.append( $oskToggleLink );
		},

		keypress: function( key ) {
			var code,
				replacementSkipped,
				pos,
				ime = this.$input.data( 'ime' ),
				osk = this;

			switch ( key ) {
				case 'caps':
					if ( this.state.caps ) {
						this.state.caps = false;
						this.build();
						this.$keyboard.find( '.keyboard-key-capsLock' )
							.removeClass( 'down' );
					} else {
						this.state['caps'] = true;
						this.build();
						this.$keyboard.find( '.keyboard-key-capsLock' )
							.addClass( 'down' );
					}
					break;
				case 'shift':
					if ( this.state.shift ) {
						this.state.shift = false;
						this.state.caps = false;
						this.build();
						this.$keyboard.find( '.keyboard-key-leftshift, .keyboard-key-rightshift' )
							.removeClass( 'down' );
					} else {
						this.state['shift'] = true;
						this.state.caps = true;
						this.build();
						this.$keyboard.find( '.keyboard-key-leftshift, .keyboard-key-rightshift' )
							.addClass( 'down' );
					}
					break;
				default:
					// Get the key code. Events use codes and not chars.
					code = key.charCodeAt( 0 );
					replacementSkipped = this.$input.triggerHandler( new jQuery.Event( 'keypress.ime', {
						keyCode: code,
						which: code,
						charCode: code
					} ) );

					if ( replacementSkipped ) {
						pos = ime.getCaretPosition( osk.$input );
						replaceText( osk.$input, key, pos[0], pos[1] );
					}
			}
		},

		simulateKeypress: function ( e ) {

			// Simulate keypress in osk only when physical keyboard is used.
			if ( e.originalEvent === undefined ) {
				return
			}

			var osk = this,
				keyCode = e.charCode,
				$keyElement;

			$keyElement = $( '#osk-key-' + keyCode );

			if ( $keyElement ) {
				$keyElement.addClass( 'down keyboard-key-simulate-active' );
				setTimeout( function () {
					$keyElement.removeClass( 'down keyboard-key-simulate-active' );
				}, 100 );
			}
		},

		oskHandler: function () {
			return $( '<div class="ime-osk-link selectable-row">' )
				.append( $( '<a>' ).text( 'Show keyboard' )
					.addClass( 'selectable-row-item' )
				);
		}
	};

	function buildKey ( key, state) {
		var $key = $( templates.key ),
			keyText,
			keyCode = key.text.charCodeAt( 0 );

		$key.text( key.text );

		$key.attr( 'id', 'osk-key-' + keyCode );

		if( state.caps ) {
			$key.text( key.caps );
		}

		if( state.shift ) {
			$key.text( key.shift );
		}
		if ( key.style ) {
			$key.addClass( key.style );
		}
		return $key;
	}

	Keyboard.defaults = {
		layout: keyboards.qwerty
	};

	/*
	 * Keyboard PLUGIN DEFINITION
	 */

	$.fn.osk = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'Keyboard' );

			if ( !data ) {
				$this.data( 'Keyboard', ( data = new Keyboard( this, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};

	$.fn.osk.Constructor = Keyboard;

	// replicating replaceText method from jquery.ime.js
	// need a better way rather than duplicating the code
	function replaceText( $element, replacement, start, end ) {
		var selection,
			length,
			newLines,
			scrollTop,
			element = $element.get( 0 );

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

}( jQuery ) );
