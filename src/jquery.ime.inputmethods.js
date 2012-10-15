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
			name: 'InScript',
			source: 'rules/as/as-inscript.js'
		},
		'as-transliteration' : {
			name: 'Transliteration',
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
			name: 'InScript',
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
		'brx-inscript': {
			name: 'Inscript',
			source: 'rules/brx/brx-inscript.js'
		},
		'hi-transliteration': {
			name: 'Transliteration',
			source: 'rules/hi/hi-transliteration.js'
		},
		'hi-inscript': {
			name: 'InScript',
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
			name: 'InScript',
			source: 'rules/ml/ml-inscript.js'
		},
		'ta-inscript': {
			name: 'InScript',
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
		},
		'he-standard-2011-extonly': {
			name: 'Hebrew Standard 2011',
			source: 'rules/he/he-standard-2011-extonly.js'
		},
		'gu-inscript': {
			name: 'Inscript',
			source: 'rules/gu/gu-inscript.js'
		},
		'gu-transliteration': {
			name: 'Transliteration',
			source: 'rules/gu/gu-transliteration.js'
		},
		'ka-transliteration': {
			name: 'Transliteration',
			source: 'rules/ka/ka-transliteration.js'
		},
		'kn-inscript': {
			name: 'Inscript',
			source: 'rules/kn/kn-inscript.js'
		},
		'kn-transliteration': {
			name: 'Transliteration',
			source: 'rules/kn/kn-transliteration.js'
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
			inputmethods: [ 'bn-avro', 'bn-inscript', 'bn-nkb', 'bn-probhat' ]
		},
		'brx': {
			autonym: 'बड़ो',
			inputmethods: ['brx-inscript']
		},
		'de': {
			autonym: 'Deutsch',
			inputmethods: [ 'de' ]
		},
		'en': {
			autonym: 'English',
			inputmethods: [ 'en-capitalize' ]
		},
		'gom': {
			autonym: 'कोंकणी',
			inputmethods: ['hi-transliteration', 'hi-inscript']
		},
		'gu': {
			autonym: 'ગુજરાતી',
			inputmethods: ['gu-transliteration', 'gu-inscript']
		},
		'he': {
			autonym: 'עִבְרִית',
			inputmethods: [ 'he-standard-2011', 'he-standard-2011-extonly' ]
		},
		'hi': {
			autonym: 'हिन्दी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri' ]
		},
		'hne': {
			autonym: 'छत्तीसगढ़ी',
			inputmethods: ['hi-transliteration']
		},
		'ka': {
			autonym: 'ქართული ენა',
			inputmethods: [ 'ka-transliteration' ]
		},
		'kn': {
			autonym: 'ಕನ್ನಡ',
			inputmethods: [ 'kn-transliteration', 'kn-inscript' ]
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
