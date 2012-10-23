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
			this.prepareSelectorMenu();
			this.$imeSetting.append( this.$menu );
			this.$element.after( this.$imeSetting );
			this.position();
			this.$imeSetting.hide();
		},

		prepareSelectorMenu: function() {
			this.$menu.append( imeList() );
			this.$menu.append( toggleMenuItem() );
			this.$menu.append( languageListTitle() );
			this.prepareLanguageList();
			this.$menu.append( helpLink() );
		},

		focus: function ( ) {
			// Hide all other IME settings
			$( 'div.imeselector' ).hide();
			this.$imeSetting.show();
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
				e.stopPropagation();
			} );

			imeselector.$menu.on( 'click', 'li.ime-disable-link', function ( e ) {
				imeselector.disableIM();
				e.stopPropagation();
			} );

			imeselector.$element.on( 'focus', function() {
				imeselector.selectLanguage( $.ime.preferences.getLanguage() );
				imeselector.focus( );
			} );

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
			var ime = $( e.target ).data( 'ime' );

			if ( isShortcutKey( e ) ) {
				ime.toggle();

				if ( ime.isActive() ) {
					if ( this.inputmethod !== null ) {
						this.selectIM( this.inputmethod.id );
					}
				} else {
					this.disableIM();
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
			var imeselector = this,
				ime = this.$element.data( 'ime' ),
				languageName = $.ime.languages[languageCode].autonym;

			this.$menu.find( 'li.ime-lang' ).show();
			this.$menu.find( 'li[lang=' + languageCode + ']' ).hide();

			//imeselector.$menu.find( 'li.ime-im' ).remove();
			this.$menu.find( 'li.ime-list-title' ).text( languageName );
			this.prepareInputMethods( languageCode );
			imeselector.$menu.removeClass( 'open' );

			// And select the default inputmethod
			imeselector.selectIM( $.ime.preferences.getIM( languageCode ) );
			ime.setLanguage( languageCode );
		},

		/**
		 * Select an input method
		 *
		 * @param inputmethodId
		 */
		selectIM: function ( inputmethodId ) {
			var imeselector = this,
				ime;

			this.$menu.find( 'li.ime-im.checked' ).removeClass( 'checked' );
			this.$menu.find( 'li.ime-disable-link' ).removeClass( 'checked' );
			this.$menu.find( 'li[data-ime-inputmethod=' + inputmethodId + ']' )
				.addClass( 'checked' );
			ime = this.$element.data( 'ime' );

			if ( inputmethodId === 'system' ) {
				this.disableIM();
				return;
			}

			if ( !inputmethodId ) {
				return;
			}

			ime.load( inputmethodId, function () {
				var name;

				imeselector.inputmethod = $.ime.inputmethods[inputmethodId];
				//imeselector.$element.focus();
				imeselector.$menu.removeClass( 'open' );
				ime.enable();
				name = imeselector.inputmethod.name;
				ime.setIM( inputmethodId );
				imeselector.$imeSetting.find( 'a.ime-name' ).text( name );

				imeselector.position();
			} );

		},

		/**
		 * Disable the inputmethods (Use the system input method)
		 */
		disableIM: function () {
			var imeselector = this,
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
			var imeselector = this, languageCodeIndex = 0, $languageListDiv, $languageList, languageList;

			// Language list can be very long. So we use a container with
			// overflow auto.
			$languageListDiv = $( '<div class="ime-language-list">' );
			$languageList = $( '<ul class="ime-language-list">' );

			if ( $.isFunction( this.options.languages ) ) {
				languageList = this.options.languages();
			} else {
				languageList = this.options.languages;
			}

			for( languageCodeIndex in languageList ) {
				var $languageItem, $language, languageCode, language;

				languageCode = languageList[languageCodeIndex];
				language = $.ime.languages[languageCode];

				$languageItem = $( '<a>' ).attr( 'href', '#' ).text( language.autonym );
				$language = $( '<li class="ime-lang">' ).attr( 'lang', languageCode );
				$language.append( $languageItem );
				$languageList.append( $language );
			};

			$languageListDiv.append( $languageList );
			imeselector.$menu.append( $languageListDiv );
		},

		/**
		 * Prepare input methods in menu for the given language code
		 *
		 * @param languageCode
		 */
		prepareInputMethods: function ( languageCode ) {
			var imeselector = this,
				language = $.ime.languages[languageCode],
				$imeList;

			$imeList = imeselector.$menu.find( 'div.ime-list' );
			$imeList.empty();

			$.each( language.inputmethods, function ( index, inputmethod ) {
				var name = $.ime.sources[inputmethod].name,
					$imeItem = $( '<a>' ).attr( 'href', '#' ).text( name ),
					$inputMethod = $( '<li data-ime-inputmethod=' + inputmethod + '>' );

				$inputMethod.append( '<span class="ime-im-check">' ).append( $imeItem );
				$inputMethod.addClass( 'ime-im' );
				$imeList.append( $inputMethod );
			} );
		}
	};

	IMESelector.defaults = {
		defaultLanguage: 'en'
	};

	/*
	 * imeselector PLUGIN DEFINITION
	 */

	$.fn.imeselector = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'imeselector' );
			if ( !data ) {
				$this.data( 'imeselector', ( data = new IMESelector( this, options ) ) );
			}

			if ( typeof option === 'string' ) {
				data[option].call( $this );
			}
		} );
	};

	$.fn.imeselector.Constructor = IMESelector;

	// Private functions
	function helpLink () {
		return $( '<li class="ime-help-link">' )
			.append( $( '<a>' )
			.attr( 'href', '#' )
			.text( 'Help' ) ); // TODO i18n
	}

	function languageListTitle () {
		return $( '<li class="ime-lang-title">' )
			.text( 'Other languages' ); // TODO i18n
	}

	function imeList () {
		return $( '<li class="ime-list-title"></li><li><div class="ime-list"/></li>' );
	}

	function toggleMenuItem () {
		return $( '<li class="ime-disable-link">' )
			.append( $( '<a>' )
				.attr( 'href', '#' )
				.text( 'System input method' )
				.append( '<span>CTRL+M</span>' )
			);
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
		// 77 - The letter M, for Ctrl-M
		// 13 - The Enter key
		return event.ctrlKey && ( event.which === 77 || event.which === 13 );
	}

}( jQuery ) );
