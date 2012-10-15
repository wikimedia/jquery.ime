( function ( $ ) {
	'use strict';

	$.extend( $.ime.preferences, {
		registry: {
			'language': 'en',
			'previous': [], // array of previous languages
			'languages': {
				'en': 'system'
			}
		},

		setLanguage: function ( language ) {
			this.registry.language = language;
		},

		getLanguage: function () {
			return this.registry.language;
		},

		// Set the given IM as the last used for the language
		setIM: function ( inputMethod ) {
			this.registry.languages[this.getLanguage()] = inputMethod;
		},

		// Return the last used or the default IM for language
		getIM: function ( language ) {
			return this.registry.languages[language] || $.ime.languages[language].inputmethods[0];
		},

		save: function () {
			// save registry in cookies or localstorage
		},

		load: function () {
			// load registry from cookies or localstorage
		}
	} );
}( jQuery ) );
