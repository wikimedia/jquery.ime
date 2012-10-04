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
			this.prepareInputMethods( "en" ); // TODO This should be from context.
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

		reveal: function () {
			this.$imeSetting.show().css( 'opacity', 1 );
		},

		toggle: function () {
			var isActive = this.$menu.hasClass( 'open' );
			this.$menu.removeClass( 'open' );

			if ( !isActive ) {
				this.$menu.toggleClass( 'open' );
			}

			return false;
		},

		listen: function () {
			var imeselector = this;
			imeselector.$menu.on( 'click', 'li.ime-im', $.proxy( this.selectIM, this ) );
			imeselector.$menu.on( 'click', 'li.ime-lang', $.proxy( this.selectLanguage, this ) );
			imeselector.$element.on( 'focus', $.proxy( this.focus, this ) );
			// Possible resize of textarea
			imeselector.$element.on( 'mouseup', $.proxy( this.position, this ) );
			imeselector.$imeSetting.on( 'click', $.proxy( this.toggle, this ) );
			$( 'html' ).on( 'click', function () {
				imeselector.$menu.removeClass( 'open' );
			} );
		},

		position: function () {
			var position = this.$element.position();

			this.$imeSetting.css( 'top', position.top + this.$element.outerHeight() );
			this.$imeSetting.css( 'left', position.left + this.$element.outerWidth()
					- this.$imeSetting.outerWidth() );
		},

		selectLanguage: function ( e ) {
			var imeselector = this;
			var language = $( e.target ).attr( 'lang' );

			imeselector.$menu.find( 'li.ime-im' ).remove();
			this.prepareInputMethods( language );
			imeselector.toggle();
			e.stopPropagation();
		},

		selectIM: function ( e ) {
			var imeselector = this;
			var inputmethodId = $( e.target ).data( 'ime-inputmethod' );
			this.$menu.find( 'li.checked' ).removeClass( 'checked' );

			$( e.target ).closest( 'li' ).addClass( 'checked' );

			var ime = this.$element.data( 'ime' );

			if ( !inputmethodId ) {
				imeselector.$menu.hide();
				e.stopPropagation();
				return;
			}

			ime.load( inputmethodId, function () {
				imeselector.inputmethod = $.ime.inputmethods[inputmethodId];
				imeselector.$element.focus();
				imeselector.toggle();

				var name = imeselector.inputmethod.name;
				imeselector.$element.data( 'ime-inputmethod', inputmethodId );
				imeselector.$imeSetting.find( 'a.ime-name' ).text( name );

				imeselector.position();
			} );

			e.stopPropagation();
		},

		prepareLanguageList: function () {
			var imeselector = this;
			// Language list can be very long. So we use a container with
			// overflow auto.
			var $languageList = $( '<div class="ime-language-list">' );
			$.each( $.ime.languages, function ( languageCode, language ) {
				var $languageItem = $( '<a>' ).attr( 'href', '#' ).attr( 'lang', languageCode )
						.text( language.autonym );
				var $language = $( '<li class="ime-lang">' ).append( $languageItem );
				$languageList.append( $language );
			} );
			imeselector.$menu.append( $languageList );
		},

		prepareInputMethods: function ( languageCode ) {
			var imeselector = this;
			var language = $.ime.languages[languageCode];

			$.each( language.inputmethods, function ( index, inputmethod ) {
				var name = $.ime.sources[inputmethod].name;
				var $imeItem = $( '<a>' ).attr( 'href', '#' ).data( 'ime-inputmethod', inputmethod )
						.text( name );
				var $inputMethod = $( '<li class="ime-im">' )
						.append( '<span class="ime-im-check">' ).append( $imeItem );

				imeselector.$menu.prepend( $inputMethod );
			} );
		}
	};

	IMESelector.defaults = {};
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
	var helpLink = function () {
		return $( "<li>" ).append( $( '<a>' ).attr( 'href', '#' ).text( "Help" ) );
	};
	var languageListTitle = function () {
		return $( '<li class="ime-lang-title">' ).text( "Change input language" );
	};
	var divider = function () {
		return $( '<li class="divider">' );
	};
	var toggleMenuItem = function () {
		return $( '<li class="ime-disable-link">' ).append(
				$( '<a>' ).attr( 'href', '#' ).text( "Disable Input Method" ).append(
						'<span>CTRL+M</span>' ) );
	};
	var selectorTemplate = '<div class="imeselector">'
			+ '<a class="ime-name imeselector-toggle" data-target=".imeselector-menu" href="#"></a>'
			+ '<b class="caret"></b>' + '</div>';

}( jQuery ) );
