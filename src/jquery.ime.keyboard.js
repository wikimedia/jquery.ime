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
		key : '<li class="keyboard-key"></li>'
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
						caps:  this.transliterate( ( key.text ) ? key.caps || key.text : ( key[0] || key ).toUpperCase() ),
						shift:  this.transliterate( ( key.text ) ? key.shift || key.text : ( key[1] || key ).toUpperCase() ),
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

			this.$keyboard  = $( '#ime-osk' );
			this.$keyboard.empty();
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
		},

		listen: function () {
		},

		show: function () {
			this.build();
			this.$keyboard.show();
		},

		keypress: function( key ) {
			var code, replacementSkipped;

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
					code = key.charCodeAt(0);

					replacementSkipped = this.$input.triggerHandler( new jQuery.Event( 'keypress', {
						keyCode: code,
						which: code,
						charCode: code
					} ) );

					if ( replacementSkipped ) {
						this.$input.val( this.$input.val() + key );
					}
			}
		}
	};

	function buildKey ( key, state) {
		var $key = $( templates.key ),
			keyText;

		$key.text( key.text );

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

}( jQuery ) );
