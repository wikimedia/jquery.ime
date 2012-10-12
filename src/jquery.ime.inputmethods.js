( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'en-capitalize': {
			name: 'Capitalize', // XXX This can be the name written in its own script?
			source: 'rules/en/capitalize.js'
		},
		'am-transliteration': {
			name: 'Transliteration',
			source: 'rules/am/am-transliteration.js'
		},
		'as-avro' : {
			name: 'Avro',
			source: 'rules/as/as-avro.js'
		},
		'as-bornona' : {
			name: 'Bornona',
			source: 'rules/as/as-bornona.js'
		},
		'as-inscript' : {
			name: 'Inscript',
			source: 'rules/as/as-inscript.js'
		},
		'as-transliteration' : {
			name: 'Avro',
			source: 'rules/as/as-transliteration.js'
		},
		'hi-transliteration': {
			name: 'Transliteration',
			source: 'rules/hi/hi-transliteration.js'
		},
		'hi-inscript': {
			name: 'Inscript',
			source: 'rules/hi/hi-inscript.js'
		},
		'hi-bolnagari': {
			name: 'Bolnagari',
			source: 'rules/hi/hi-bolnagari.js'
		},
		'ml-transliteration': {
			name: 'Transliteration',
			source: 'rules/ml/ml-transliteration.js'
		},
		'ml-inscript': {
			name: 'Inscript',
			source: 'rules/ml/ml-inscript.js'
		},
		'ta-inscript': {
			name: 'Inscript',
			source: 'rules/ta/ta-inscript.js'
		},
		'ta-transliteration': {
			name: 'Transliteration',
			source: 'rules/ta/ta-transliteration.js'
		},
		'ta-99': {
			name: 'Tamil 99',
			source: 'rules/ta/ta-99.js'
		},
		'ta-bamini': {
			name: 'Bamini',
			source: 'rules/ta/ta-bamini.js'
		},
		'de': {
			name: 'Deutsch',
			source: 'rules/de/de.js'
		},
		'he-standard-2011': {
			name: 'Hebrew Standard 2011',
			source: 'rules/he/he-standard-2011.js'
		}
	} );

	$.extend( $.ime.languages, {
		'am': {
			autonym: 'አማርኛ',
			inputmethods: [ 'am-transliteration' ]
		},
		'as': {
			autonym: 'অসমীয়া',
			inputmethods: [ 'as-transliteration', 'as-avro', 'as-bornona', 'as-inscript' ]
		},
		'en': {
			autonym: 'English',
			inputmethods: [ 'en-capitalize' ]
		},
		'de': {
			autonym: 'Deutsch',
			inputmethods: [ 'de' ]
		},
		'he': {
			autonym: 'עִבְרִית',
			inputmethods: [ 'he-standard-2011' ]
		},
		'hi': {
			autonym: 'हिन्दी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagari' ]
		},
		'ml': {
			autonym: 'മലയാളം',
			inputmethods: [ 'ml-transliteration', 'ml-inscript' ]
		},
		'mr': {
			autonym: 'मराठी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagari' ]
		},
		'sa': {
			autonym: 'संस्कृत',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagari' ]
		},
		'ta': {
			autonym: 'தமிழ்',
			inputmethods: [ 'ta-transliteration', 'ta-inscript', 'ta-99', 'ta-bamini' ]
		}
	} );

}( jQuery ) );
