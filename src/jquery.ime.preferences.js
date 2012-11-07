( function ( $ ) {
	'use strict';

	$.extend( $.ime.preferences, {
		registry: {
			language : 'en',
			previousLanguages: [], // array of previous languages
			imes: {
				'en': 'system'
			}
		},

		setLanguage: function ( language ) {
			this.registry.language = language;
			if ( !this.registry.previousLanguages ) {
				this.registry.previousLanguages = [];
			}
			//Add to the previous languages, but avoid duplicates.
			if ( $.inArray( language, this.registry.previousLanguages ) === -1 ) {
				this.registry.previousLanguages.push( language );
			}
		},

		getLanguage: function () {
			return this.registry.language;
		},

		getPreviousLanguages: function () {
			return this.registry.previousLanguages;
		},

		// Set the given IM as the last used for the language
		setIM: function ( inputMethod ) {
			if( !this.registry.imes ){
				this.registry.imes= {};
			}
			this.registry.imes[this.getLanguage()] = inputMethod;
		},

		// Return the last used or the default IM for language
		getIM: function ( language ) {
			if( !this.registry.imes ){
				this.registry.imes= {};
			}
			return this.registry.imes[language] || $.ime.languages[language].inputmethods[0];
		},

		save: function () {
			// save registry in cookies or localstorage
		},

		load: function () {
			// load registry from cookies or localstorage
		}
	} );
}( jQuery ) );