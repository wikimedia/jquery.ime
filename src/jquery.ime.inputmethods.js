( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'en-capitalize': {
			name: "Capitalize", // XXX This can be the name written in its own script?
			source: 'rules/en/capitalize.js'
		},
		'ml-transliteration': {
			name: "Transliteration",
			source: 'rules/ml/ml-transliteration.js'
		},
		'ml-inscript': {
			name: "Inscript",
			source: 'rules/ml/ml-inscript.js'
		},
		'ta-inscript': {
			name: "Inscript",
			source: 'rules/ta/ta-inscript.js'
		},
		'ta-transliteration': {
			name: "Transliteration",
			source: 'rules/ta/ta-transliteration.js'
		},
		'ta-99': {
			name: "Tamil 99",
			source: 'rules/ta/ta-99.js'
		},
		'ta-bamini': {
			name: "Bamini",
			source: 'rules/ta/ta-bamini.js'
		},
		'de': {
			name: "Deutsch",
			source: 'rules/de/de.js'
		}
	} );

	$.extend( $.ime.languages, {
		'en': {
			autonym: "English",
			inputmethods: [ 'en-capitalize' ]
		},
		'ml': {
			autonym: "മലയാളം",
			inputmethods: [ 'ml-transliteration', 'ml-inscript' ]
		},
		'ta': {
			autonym: "தமிழ்",
			inputmethods: [ 'ta-transliteration', 'ta-inscript', 'ta-99', 'ta-bamini' ]
		},
		'de': {
			autonym: "Deutsch",
			inputmethods: [ 'de' ]
		}
	} );

}( jQuery ) );
