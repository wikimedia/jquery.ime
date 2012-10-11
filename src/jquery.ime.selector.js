( function ( $ ) {
	'use strict';

	function IMESelector ( element, options ) {
		this.$element = $( element );
		this.options = $.extend( {}, IMESelector.defaults, options );
		this.active = false;
		this.$imeSetting = $( selectorTemplate );
		this.$menu = $( '<ul class="imeselector-menu" role="menu">' );
		this.inputmethod = null;
		this.shown = false;
		this.init();
		this.listen();
	}

	IMESelector.prototype = {
		constructor: IMESelector,

		init: function () {
			this.prepareInputMethods( this.options.defaultLanguage );
			this.$menu.append( toggleMenuItem() );
			this.$menu.append( divider() );
			this.$menu.append( languageListTitle() );
			this.prepareLanguageList();
			this.$menu.append( divider() );
			this.$menu.append( helpLink() );
			this.$imeSetting.append( this.$menu );
			this.$element.after( this.$imeSetting );
			this.position();
			this.$imeSetting.hide();
		},

		focus: function () {
			// Hide all other IME settings
			$( 'div.imeselector' ).hide();
			this.$imeSetting.show();// .css( 'opacity', 0.5 );
		},

		toggle: function () {
			var isActive = this.$menu.hasClass( 'open' );
			this.$menu.removeClass( 'open' );

			if ( !isActive ) {
				this.$menu.toggleClass( 'open' );
			}

			return false;
		},

		/**
		 * Bind the events and listen
		 */
		listen: function () {
			var imeselector = this;

			$( 'html' ).on( 'click', function () {
				imeselector.$menu.removeClass( 'open' );
			} );

			imeselector.$menu.on( 'click', 'li.ime-im', function ( e ) {
				var inputmethodId = $( this ).data( 'ime-inputmethod' );
				imeselector.selectIM( inputmethodId );
				e.stopPropagation();
			} );
			imeselector.$menu.on( 'click', 'li.ime-lang', function ( e ) {
				var language = $( this ).attr( 'lang' );
				imeselector.selectLanguage( language );
				$( this ).addClass( 'checked' );
				e.stopPropagation();
			} );
			imeselector.$menu.on( 'click', 'li.ime-disable-link', function ( e ) {
				imeselector.disableIM();
				e.stopPropagation();
			} );

			imeselector.$element.on( 'focus', $.proxy( this.focus, this ) );
			// Possible resize of textarea
			imeselector.$element.on( 'mouseup', $.proxy( this.position, this ) );
			imeselector.$element.on( 'keydown', $.proxy( this.keydown, this ) );

			imeselector.$imeSetting.on( 'click', $.proxy( this.toggle, this ) );

		},

		/**
		 * Keydown event handler. Handles shortcut key presses
		 *
		 * @context {HTMLElement}
		 * @param {jQuery.Event} e
		 */
		keydown: function ( e ) {
			var imeselector, ime;

			imeselector = this;
			ime = $( e.target ).data( 'ime' );
			if ( isShortcutKey( e ) ) {
				ime.toggle();
				if ( !ime.isActive() ) {
					imeselector.disableIM();
				} else {
					imeselector.selectIM( imeselector.inputmethod.id );
				}
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
			return true;
		},

		/**
		 * Position the im selector relative to the edit area
		 */
		position: function () {
			var position = this.$element.position();

			this.$imeSetting.css( 'top', position.top + this.$element.outerHeight() );
			this.$imeSetting.css( 'left', position.left + this.$element.outerWidth()
				- this.$imeSetting.outerWidth() );
		},

		/**
		 * Select a language
		 *
		 * @param languageCode
		 */
		selectLanguage: function ( languageCode ) {
			var imeselector = this, language;

			this.$menu.find( 'li.ime-lang.checked' ).removeClass( 'checked' );
			imeselector.$menu.find( 'li.ime-im' ).remove();
			this.prepareInputMethods( languageCode );
			imeselector.toggle();
			// And select the default inputmethod
			language = $.ime.languages[languageCode];
			imeselector.selectIM( language.inputmethods[0] );
		},

		/**
		 * Select an input method
		 *
		 * @param inputmethodId
		 */
		selectIM: function ( inputmethodId ) {
			var imeselector = this, ime;

			this.$menu.find( 'li.ime-im.checked' ).removeClass( 'checked' );
			this.$menu.find( 'li.ime-disable-link' ).removeClass( 'checked' );
			this.$menu.find( 'li[data-ime-inputmethod=' + inputmethodId + ']' )
				.addClass( 'checked' );
			ime = this.$element.data( 'ime' );

			ime.load( inputmethodId, function () {
				var name;

				imeselector.inputmethod = $.ime.inputmethods[inputmethodId];
				imeselector.$element.focus();
				imeselector.$menu.removeClass( 'open' );
				ime.enable();
				name = imeselector.inputmethod.name;
				ime.setIM( inputmethodId );
				imeselector.$imeSetting.find( 'a.ime-name' ).text( name );

				imeselector.position();
			} );

		},

		/**
		 * Disable the inputmethods( Use system input method )
		 */
		disableIM: function () {
			var imeselector = this, ime;

			ime = imeselector.$element.data( 'ime' );
			this.$menu.find( 'li.ime-im.checked' ).removeClass( 'checked' );
			this.$menu.find( 'li.ime-disable-link' ).addClass( 'checked' );
			ime.disable();
			imeselector.$imeSetting.find( 'a.ime-name' ).text( '' );
			this.$menu.removeClass( 'open' );
			imeselector.position();
		},

		/**
		 * Prepare language list
		 */
		prepareLanguageList: function () {
			var imeselector = this, $languageList;
			// Language list can be very long. So we use a container with
			// overflow auto.
			$languageList = $( '<div class="ime-language-list">' );

			$.each( $.ime.languages, function ( languageCode, language ) {
				var $languageItem, $language;

				$languageItem = $( '<a>' ).attr( 'href', '#' ).text( language.autonym );
				$language = $( '<li class="ime-lang">' ).attr( 'lang', languageCode );
				$language.append( $languageItem );
				$languageList.append( $language );
			} );

			imeselector.$menu.append( $languageList );
		},

		/**
		 * Prepare input methods in menu for the given language code
		 *
		 * @param languageCode
		 */
		prepareInputMethods: function ( languageCode ) {
			var imeselector = this, language = $.ime.languages[languageCode];

			$.each( language.inputmethods, function ( index, inputmethod ) {
				var name, $imeItem, $inputMethod;

				name = $.ime.sources[inputmethod].name;
				$imeItem = $( '<a>' ).attr( 'href', '#' ).text( name );
				$inputMethod = $( '<li  data-ime-inputmethod=' + inputmethod + '>' );
				$inputMethod.append( '<span class="ime-im-check">' ).append( $imeItem );
				$inputMethod.addClass( 'ime-im' );
				imeselector.$menu.prepend( $inputMethod );
			} );
		}
	};

	IMESelector.defaults = {
		defaultLanguage: 'en'
	};

	/*
	 * imeselector PLUGIN DEFINITION
	 */

	$.fn.imeselector = function ( option ) {
		return this.each( function () {
			var $this = $( this ), data = $this.data( 'imeselector' );

			if ( !data ) {
				$this.data( 'imeselector', ( data = new IMESelector( this ) ) );
			}

			if ( typeof option === 'string' ) {
				data[option].call( $this );
			}
		} );
	};

	$.fn.imeselector.Constructor = IMESelector;

	// Private functions
	function helpLink () {
		return $( '<li>' ).append( $( '<a>' ).attr( 'href', '#' ).text( 'Help' ) );
	}

	function languageListTitle  () {
		return $( '<li class="ime-lang-title">' ).text( 'Change input language' );
	}

	function divider () {
		return $( '<li class="divider">' );
	}

	function toggleMenuItem () {
		return $( '<li class="ime-disable-link">' ).append(
			$( '<a>' ).attr( 'href', '#' ).text( 'System input method' ).append(
				'<span>CTRL+M</span>' ) );
	}

	var selectorTemplate = '<div class="imeselector">'
		+ '<a class="ime-name imeselector-toggle" href="#"></a>'
		+ '<b class="caret"></b></div>';

	/**
	 * Check whether a keypress event corresponds to the shortcut key
	 *
	 * @param event Event object
	 * @return bool
	 */
	function isShortcutKey ( event ) {
		return event.ctrlKey && ( event.which === 77 || event.which === 13 );
	}

}( jQuery ) );
