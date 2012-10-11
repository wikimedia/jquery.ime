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

		setIM: function ( inputMethod ) {
			var language = this.getLanguage();
			this.registry.languages[language] = inputMethod;
		},

		getIM: function ( language ) {
			return this.registry.languages[language] || $.ime.languages[language].inputmethods[0];
		},

		getLanguage: function () {
			return this.registry.language;
		},

		save: function () {
			// save registry in cookies or localstorage
		},

		load: function () {
			// load registry from cookies or localstorage
		}
	} );

}( jQuery ) );
