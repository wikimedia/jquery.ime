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
		'ber-tfng' : {
			name: 'Tifinagh',
			source: 'rules/ber/ber-tfng.js'
		},
		'bn-avro' : {
			name: 'Avro',
			source: 'rules/bn/bn-avro.js'
		},
		'bn-inscript' : {
			name: 'Inscript',
			source: 'rules/bn/bn-inscript.js'
		},
		'bn-nkb' : {
			name: 'National Keyboard',
			source: 'rules/bn/bn-nkb.js'
		},
		'bn-probhat' : {
			name: 'Probhat',
			source: 'rules/bn/bn-probhat.js'
		},
		'hi-transliteration': {
			name: 'Transliteration',
			source: 'rules/hi/hi-transliteration.js'
		},
		'hi-inscript': {
			name: 'Inscript',
			source: 'rules/hi/hi-inscript.js'
		},
		'hi-bolnagri': {
			name: 'BolNagri',
			source: 'rules/hi/hi-bolnagri.js'
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
		'ber': {
			autonym: 'ⵜⵉⴼⵉⵏⴰⵖ',
			inputmethods: [ 'ber-tfng' ]
		},
		'bn': {
			autonym: 'বাংলা',
			inputmethods: ['bn-avro', 'bn-inscript', 'bn-nkb', 'bn-probhat']
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
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri' ]
		},
		'ml': {
			autonym: 'മലയാളം',
			inputmethods: [ 'ml-transliteration', 'ml-inscript' ]
		},
		'mr': {
			autonym: 'मराठी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri' ]
		},
		'sa': {
			autonym: 'संस्कृत',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri' ]
		},
		'ta': {
			autonym: 'தமிழ்',
			inputmethods: [ 'ta-transliteration', 'ta-inscript', 'ta-99', 'ta-bamini' ]
		}
	} );

}( jQuery ) );
