( function ( $ ) {
	'use strict';

	var selectorTemplate, MutationObserver;

	function IMESelector( element, options ) {
		this.$element = $( element );
		this.options = $.extend( {}, IMESelector.defaults, options );
		this.active = false;
		this.$imeSetting = null;
		this.$menu = null;
		this.inputmethod = null;
		this.timer = null;
		this.init();
		this.listen();
	}

	IMESelector.prototype = {
		constructor: IMESelector,

		init: function () {
			this.prepareSelectorMenu();
			this.position();
			this.$imeSetting.hide();
		},

		prepareSelectorMenu: function () {
			// TODO: In this approach there is a menu for each editable area.
			// With correct event mapping we can probably reduce it to one menu.
			this.$imeSetting = $( selectorTemplate );
			this.$menu = $( '<div class="imeselector-menu" role="menu">' );
			this.$menu.append(
				imeListTitle(),
				imeList(),
				toggleMenuItem(),
				languageListTitle()
			);

			this.prepareLanguageList();
			this.$menu.append( this.helpLink() );

			if ( $.i18n ) {
				this.$menu.i18n();
			}

			this.$imeSetting.append( this.$menu );
			$( 'body' ).append( this.$imeSetting );
		},

		stopTimer: function () {
			if ( this.timer ) {
				clearTimeout( this.timer );
				this.timer = null;
			}

			this.$imeSetting.stop( true, true );
		},

		resetTimer: function () {
			var imeselector = this;

			this.stopTimer();

			this.timer = setTimeout(
				function () {
					imeselector.$imeSetting.animate( {
						'opacity': 0,
						'marginTop': '-20px'
					}, 500, function () {
						imeselector.$imeSetting.hide();
						// Restore properties for the next time it becomes visible:
						imeselector.$imeSetting.css( 'opacity', 1 );
						imeselector.$imeSetting.css( 'margin-top', 0 );
					} );
				}, 2500
			);
		},

		focus: function () {
			// Hide all other IME settings and collapse open menus
			$( 'div.imeselector' ).hide();
			$( 'div.imeselector-menu' ).removeClass( 'open' );
			this.$imeSetting.show();
			this.resetTimer();
		},

		show: function () {
			this.$menu.addClass( 'open' );
			this.stopTimer();
			this.$imeSetting.show();

			return false;
		},

		hide: function () {
			this.$menu.removeClass( 'open' );
			this.resetTimer();

			return false;
		},

		toggle: function () {
			if ( this.$menu.hasClass( 'open' ) ) {
				this.hide();
			} else {
				this.show();
			}
		},

		/**
		 * Bind the events and listen
		 */
		listen: function () {
			var imeselector = this;

			imeselector.$imeSetting.on( 'click.ime', function ( e ) {
				var t = $( e.target );

				if ( t.hasClass( 'imeselector-toggle' ) ) {
					imeselector.toggle();
				}

				return false;
			} );

			imeselector.$element.on( 'blur.ime', function () {
				if ( !imeselector.$imeSetting.hasClass( 'onfocus' ) ) {
					imeselector.$imeSetting.hide();
					imeselector.hide();
				}
			} );

			imeselector.$imeSetting.mouseenter( function () {
				// We don't want the selector to disappear
				// while the user is trying to click it
				imeselector.stopTimer();
				imeselector.$imeSetting.addClass( 'onfocus' );
			} ).mouseleave( function () {
				imeselector.resetTimer();
				imeselector.$imeSetting.removeClass( 'onfocus' );
			} );

			imeselector.$menu.on( 'click.ime', 'li', function() {
				imeselector.$element.focus();

				return false;
			} );

			imeselector.$menu.on( 'click.ime', 'li.ime-im', function () {
				imeselector.selectIM( $( this ).data( 'ime-inputmethod' ) );

				return false;
			} );

			imeselector.$menu.on( 'click.ime', 'li.ime-lang', function () {
				imeselector.selectLanguage( $( this ).attr( 'lang' ) );

				return false;
			} );

			imeselector.$menu.on( 'click.ime', 'div.ime-disable', function () {
				imeselector.disableIM();

				return false;
			} );

			// Just make it work as a regular link
			imeselector.$menu.on( 'click.ime', '.ime-help-link', function ( e ) {
				e.stopPropagation();
			} );

			imeselector.$element.on( 'focus.ime', function ( e ) {
				imeselector.selectLanguage( imeselector.decideLanguage() );
				imeselector.focus();
				e.stopPropagation();
			} );

			imeselector.$element.attrchange( function ( ) {
				if ( imeselector.$element.is( ':hidden' ) ) {
					imeselector.$imeSetting.hide();
				}
			} );

			// Possible resize of textarea
			imeselector.$element.on( 'mouseup.ime', $.proxy( this.position, this ) );
			imeselector.$element.on( 'keydown.ime', $.proxy( this.keydown, this ) );

			// Update IM selector position when the window is resized
			// or the browser window is zoomed in or zoomed out
			$( window ).resize( function () {
				imeselector.position();
			} );
		},

		/**
		 * Keydown event handler. Handles shortcut key presses
		 *
		 * @context {HTMLElement}
		 * @param {jQuery.Event} e
		 */
		keydown: function ( e ) {
			var ime = $( e.target ).data( 'ime' ),
				firstInputmethod,
				previousInputMethods,
				languageCode;

			this.focus(); // shows the trigger in case it is hidden

			if ( isShortcutKey( e ) ) {
				if ( ime.isActive() ) {
					this.disableIM();
				} else {
					if ( this.inputmethod !== null ) {
						this.selectIM( this.inputmethod.id );
					} else {
						languageCode = this.decideLanguage();
						this.selectLanguage( languageCode );

						if ( !ime.isActive() && $.ime.languages[languageCode] ) {
							// Even after pressing toggle shortcut again, it is still disabled
							// Check if there is a previously used input method.
							previousInputMethods = $.ime.preferences.getPreviousInputMethods();

							if ( previousInputMethods[0] ) {
								this.selectIM( previousInputMethods[0] );
							} else {
								// Provide the default input method in this case.
								firstInputmethod = $.ime.languages[languageCode].inputmethods[0];
								this.selectIM( firstInputmethod );
							}
						}
					}
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
			var imeSelector = this,
				menutop, position, top, left, room;

			this.focus(); // shows the trigger in case it is hidden

			position = this.$element.offset();
			top = position.top + this.$element.outerHeight();
			left = position.left;

			// RTL element position fix
			if ( this.$element.css( 'direction' ) === 'ltr' ) {
				left = position.left + this.$element.outerWidth() -
					this.$imeSetting.outerWidth();
			}

			// While determining whether to place the selector above or below the input box,
			// take into account the value of scrollTop, to avoid the selector from always
			// getting placed above the input box since window.height would be less than top
			// if the page has been scrolled.
			room = $( window ).height() + $( document ).scrollTop() - top;

			if ( room < this.$imeSetting.outerHeight() ) {
				top = position.top - this.$imeSetting.outerHeight();
				menutop = this.$menu.outerHeight() +
					this.$imeSetting.outerHeight();

				// Flip the menu to the top only if it can fit in the space there
				if ( menutop < top ) {
					this.$menu
						.addClass( 'position-top' )
						.css( 'top', -menutop );
				}
			}

			this.$element.parents().each( function() {
				if ( $( this ).css( 'position' ) === 'fixed' ) {
					imeSelector.$imeSetting.css( 'position', 'fixed' );

					return false;
				}
			} );

			this.$imeSetting.css( {
				top: top,
				left: left
			} );

			if ( parseInt( this.$menu.css( 'min-width' ), 10 ) > left ) {
				// RTL element position fix
				if ( this.$element.css( 'direction' ) === 'rtl' ) {
					this.$menu
					.css( 'left', 0 )
					.addClass( 'left' );
				} else {
					this.$menu
					.css( 'left', position.left )
					.addClass( 'right' );
				}
			}
		},

		/**
		 * Select a language
		 *
		 * @param languageCode
		 */
		selectLanguage: function ( languageCode ) {
			var ime,
				imePref = $.ime.preferences.getIM( languageCode ),
				language = $.ime.languages[languageCode];

			if ( !language ) {
				return false;
			}

			ime = this.$element.data( 'ime' );

			if ( ime.getLanguage() === languageCode ) {
				// Nothing to do. It is same as the current language,
				// but check whether the input method changed.
				if ( ime.inputmethod && ime.inputmethod.id !== imePref ) {
					this.selectIM( $.ime.preferences.getIM( languageCode ) );
				}

				return false;
			}

			this.$menu.find( 'li.ime-lang' ).show();
			this.$menu.find( 'li[lang=' + languageCode + ']' ).hide();

			this.$menu.find( '.ime-list-title' ).text( language.autonym );
			this.prepareInputMethods( languageCode );
			this.hide();
			// And select the default inputmethod
			ime.setLanguage( languageCode );
			this.inputmethod = null;
			this.selectIM( $.ime.preferences.getIM( languageCode ) );
		},

		/**
		 * Decide on initial language to select
		 */
		decideLanguage: function () {
			if ( $.ime.preferences.getLanguage() ) {
				// There has been an override by the user,
				// so return the language selected by user
				return $.ime.preferences.getLanguage();
			}

			if ( this.$element.attr('lang' ) &&
				$.ime.languages[ this.$element.attr( 'lang' ) ]
			) {
				return this.$element.attr( 'lang' );
			}

			// There is either no IMs for the given language attr
			// or there is no lang attr at all.
			return $.ime.preferences.getDefaultLanguage();
		},

		/**
		 * Select an input method
		 *
		 * @param inputmethodId
		 */
		selectIM: function ( inputmethodId ) {
			var imeselector = this,
				ime;

			if ( !inputmethodId ) {
				return;
			}

			this.$menu.find( '.checked' ).removeClass( 'checked' );
			this.$menu.find( 'li.ime-disable' ).removeClass( 'checked' );
			this.$menu.find( 'li[data-ime-inputmethod=' + inputmethodId + ']' )
				.addClass( 'checked' );
			ime = this.$element.data( 'ime' );

			if ( inputmethodId === 'system' ) {
				this.disableIM();

				return;
			}

			ime.load( inputmethodId, function () {
				imeselector.inputmethod = $.ime.inputmethods[inputmethodId];
				imeselector.hide();
				ime.enable();
				ime.setIM( inputmethodId );
				imeselector.$imeSetting.find( 'a.ime-name' ).text(
					imeselector.inputmethod.name
				);

				imeselector.position();

				// Save this preference
				$.ime.preferences.save();
			} );
		},

		/**
		 * Disable the inputmethods (Use the system input method)
		 */
		disableIM: function () {
			this.$menu.find( '.checked' ).removeClass( 'checked' );
			this.$menu.find( 'div.ime-disable' ).addClass( 'checked' );
			this.$element.data( 'ime' ).disable();
			this.$imeSetting.find( 'a.ime-name' ).text( '' );
			this.hide();
			this.position();

			// Save this preference
			$.ime.preferences.save();
		},

		/**
		 * Prepare language list
		 */
		prepareLanguageList: function () {
			var languageCodeIndex,
				$languageListWrapper,
				$languageList,
				languageList,
				$languageItem,
				$language,
				languageCode,
				language;

			// Language list can be very long, so we use a container with
			// overflow auto
			$languageListWrapper = $( '<div class="ime-language-list-wrapper">' );
			$languageList = $( '<ul class="ime-language-list">' );

			if ( $.isFunction( this.options.languages ) ) {
				languageList = this.options.languages();
			} else {
				languageList = this.options.languages;
			}

			for ( languageCodeIndex in languageList ) {
				languageCode = languageList[languageCodeIndex];
				language = $.ime.languages[languageCode];

				if ( !language ) {
					continue;
				}

				$languageItem = $( '<a>' ).attr( 'href', '#' ).text( language.autonym );
				$language = $( '<li class="ime-lang">' ).attr( 'lang', languageCode );
				$language.append( $languageItem );
				$languageList.append( $language );
			}

			$languageListWrapper.append( $languageList );
			this.$menu.append( $languageListWrapper );

			if ( this.options.languageSelector ) {
				this.$menu.append( this.options.languageSelector() );
			}
		},

		/**
		 * Prepare input methods in menu for the given language code
		 *
		 * @param languageCode
		 */
		prepareInputMethods: function ( languageCode ) {
			var language = $.ime.languages[languageCode],
				$imeList = this.$menu.find( '.ime-list' );

			$imeList.empty();

			$.each( language.inputmethods, function ( index, inputmethod ) {
				var name = $.ime.sources[inputmethod].name,
					$imeItem = $( '<a>' ).attr( 'href', '#' ).text( name ),
					$inputMethod = $( '<li data-ime-inputmethod=' + inputmethod + '>' );

				$inputMethod
					.append(
						'<span class="ime-im-check">',
						$imeItem
					)
					.addClass( 'ime-im' );
				$imeList.append( $inputMethod );
			} );
		},

		helpLink: function () {
			return $( '<div class="ime-help-link">' )
				.append( $( '<a>' ).text( 'Help' )
					.attr( {
						'href': 'http://github.com/wikimedia/jquery.ime',
						'target': '_blank',
						'data-i18n': 'jquery-ime-help'
					} )
				);
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

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};

	$.fn.imeselector.Constructor = IMESelector;

	function languageListTitle() {
		return $( '<h3>' )
			.addClass( 'ime-lang-title' )
			.attr( 'data-i18n', 'jquery-ime-other-languages' )
			.text( 'Other languages' );
	}

	function imeList() {
		return  $( '<ul>' ).addClass( 'ime-list' );
	}

	function imeListTitle() {
		return  $( '<h3>' ).addClass( 'ime-list-title' );
	}

	function toggleMenuItem() {
		return $( '<div class="ime-disable">' ).append(
			$( '<span>' )
				.attr( {
					'class': 'ime-disable-link',
					'data-i18n': 'jquery-ime-disable-text'
				} )
				.text( 'System input method' ),
			$( '<span>' )
				.addClass( 'ime-disable-shortcut' )
				.text( 'CTRL+M' )
		);
	}

	selectorTemplate = '<div class="imeselector imeselector-toggle">' +
		'<a class="ime-name imeselector-toggle" href="#"></a>' +
		'<b class="ime-setting-caret imeselector-toggle"></b></div>';

	MutationObserver = window.MutationObserver ||
		window.WebKitMutationObserver ||
		window.MozMutationObserver;

	/**
	 * Check whether a keypress event corresponds to the shortcut key
	 *
	 * @param event Event object
	 * @return bool
	 */
	function isShortcutKey( event ) {
		// 77 - The letter M, for Ctrl-M
		// 13 - The Enter key
		return event.ctrlKey && !event.altKey && ( event.which === 77 || event.which === 13 );
	}

	function isDOMAttrModifiedSupported() {
		var p = document.createElement( 'p' ),
			flag = false;

		if ( p.addEventListener ) {
			p.addEventListener( 'DOMAttrModified', function () {
				flag = true;
			}, false );
		} else if ( p.attachEvent ) {
			p.attachEvent( 'onDOMAttrModified', function () {
				flag = true;
			} );
		} else {
			return false;
		}

		p.setAttribute( 'id', 'target' );

		return flag;
	}

	$.fn.attrchange = function ( callback ) {
		if ( MutationObserver ) {
			var observer;

			observer = new MutationObserver( function ( mutations ) {
				mutations.forEach( function ( e ) {
					callback.call( e.target, e.attributeName );
				} );
			} );

			return this.each( function () {
				observer.observe( this, {
					subtree: false,
					attributes: true
				} );
			} );
		} else if ( isDOMAttrModifiedSupported() ) {
			return this.on( 'DOMAttrModified', function ( e ) {
				callback.call( this, e.attrName );
			} );
		} else if ( 'onpropertychange' in document.body ) {
			return this.on( 'propertychange', function () {
				callback.call( this, window.event.propertyName );
			} );
		}
	};
}( jQuery ) );
