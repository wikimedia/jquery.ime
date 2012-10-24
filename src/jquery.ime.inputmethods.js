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
		'as-avro': {
			name: 'Avro',
			source: 'rules/as/as-avro.js'
		},
		'as-bornona': {
			name: 'Bornona',
			source: 'rules/as/as-bornona.js'
		},
		'as-inscript': {
			name: 'InScript',
			source: 'rules/as/as-inscript.js'
		},
		'as-transliteration': {
			name: 'Transliteration',
			source: 'rules/as/as-transliteration.js'
		},
		'ber-tfng': {
			name: 'Tifinagh',
			source: 'rules/ber/ber-tfng.js'
		},
		'bn-avro': {
			name: 'Avro',
			source: 'rules/bn/bn-avro.js'
		},
		'bn-inscript': {
			name: 'InScript',
			source: 'rules/bn/bn-inscript.js'
		},
		'bn-nkb': {
			name: 'National Keyboard',
			source: 'rules/bn/bn-nkb.js'
		},
		'bn-probhat': {
			name: 'Probhat',
			source: 'rules/bn/bn-probhat.js'
		},
		'brx-inscript': {
			name: 'Inscript',
			source: 'rules/brx/brx-inscript.js'
		},
		'cyrl-palochka': {
			name: 'Palochka',
			source: 'rules/cyrl/cyrl-palochka.js'
		},
		'eo-transliteration': {
			name: 'Transliteration',
			source: 'rules/eo/eo-transliteration.js'
		},
		'hi-transliteration': {
			name: 'Transliteration',
			source: 'rules/hi/hi-transliteration.js'
		},
		'hi-inscript': {
			name: 'InScript',
			source: 'rules/hi/hi-inscript.js'
		},
		'mai-inscript': {
			name: 'InScript',
			source: 'rules/mai/mai-inscript.js',
			depends: 'hi-inscript'
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
		'he-standard-2012': {
			name: 'Hebrew 2012 (from English)',
			source: 'rules/he/he-standard-2012.js'
		},
		'he-standard-2012-extonly': {
			name: 'Hebrew 2012',
			source: 'rules/he/he-standard-2012-extonly.js'
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
		},
		'mr-inscript': {
			name: 'Inscript',
			source: 'rules/mr/mr-inscript.js'
		},
		'mr-transliteration': {
			name: 'Transliteration',
			source: 'rules/mr/mr-transliteration.js'
		},
		'ne-inscript': {
			name: 'Inscript',
			source: 'rules/ne/ne-inscript.js'
		},
		'ne-transliteration': {
			name: 'Transliteration',
			source: 'rules/ne/ne-transliteration.js'
		},
		'or-transliteration': {
			name: 'Transliteration',
			source: 'rules/or/or-transliteration.js'
		},
		'or-inscript': {
			name: 'Inscript',
			source: 'rules/or/or-inscript.js'
		},
		'or-lekhani': {
			name: 'Lekhani',
			source: 'rules/or/or-lekhani.js'
		},
		'te-inscript': {
			name: 'Inscript',
			source: 'rules/te/te-inscript.js'
		},
		'te-transliteration': {
			name: 'Transliteration',
			source: 'rules/te/te-transliteration.js'
		},
		'pa-inscript': {
			name: 'Inscript',
			source: 'rules/pa/pa-inscript.js'
		},
		'pa-transliteration': {
			name: 'Transliteration',
			source: 'rules/pa/pa-transliteration.js'
		},
		'pa-phonetic': {
			name: 'Phonetic',
			source: 'rules/pa/pa-phonetic.js'
		},
		'ru-transliteration': {
			name: 'Transliteration',
			source: 'rules/ru/ru-transliteration.js'
		},
		'sa-inscript': {
			name: 'Inscript',
			source: 'rules/sa/sa-inscript.js'
		},
		'sa-transliteration': {
			name: 'Transliteration',
			source: 'rules/sa/sa-transliteration.js'
		},
		'sah-transliteration': {
			name: 'Transliteration',
			source: 'rules/sah/sah-transliteration.js'
		},
		'si-singlish': {
			name: 'Singlish',
			source: 'rules/si/si-singlish.js'
		},
		'si-wijesekara': {
			name: 'Wijesekara',
			source: 'rules/si/si-wijesekara.js'
		},
		'ur-transliteration': {
			name: 'Transliteration',
			source: 'rules/ur/ur-transliteration.js'
		}
	} );

	$.extend( $.ime.languages, {
		'ady': {
			autonym: 'адыгэбзэ',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'ahr': {
			autonym: 'अहिराणी',
			inputmethods: [ 'mr-transliteration', 'mr-inscript' ]
		},
		'am': {
			autonym: 'አማርኛ',
			inputmethods: [ 'am-transliteration' ]
		},
		'as': {
			autonym: 'অসমীয়া',
			inputmethods: [ 'as-transliteration', 'as-avro', 'as-bornona', 'as-inscript' ]
		},
		'av': {
			autonym: 'авар',
			inputmethods: [ 'cyrl-palochka' ]
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
			inputmethods: [ 'brx-inscript' ]
		},
		'ce': {
			autonym: 'нохчийн',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'de': {
			autonym: 'Deutsch',
			inputmethods: [ 'de' ]
		},
		'en': {
			autonym: 'English',
			inputmethods: [ 'en-capitalize' ]
		},
		'eo': {
			autonym: 'Esperanto',
			inputmethods: [ 'eo-transliteration' ]
		},
		'gom': {
			autonym: 'कोंकणी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript' ]
		},
		'gu': {
			autonym: 'ગુજરાતી',
			inputmethods: [ 'gu-transliteration', 'gu-inscript' ]
		},
		'he': {
			autonym: 'עברית',
			inputmethods: [ 'he-standard-2012-extonly', 'he-standard-2012' ]
		},
		'hi': {
			autonym: 'हिन्दी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri' ]
		},
		'hne': {
			autonym: 'छत्तीसगढ़ी',
			inputmethods: [ 'hi-transliteration' ]
		},
		'ka': {
			autonym: 'ქართული ენა',
			inputmethods: [ 'ka-transliteration' ]
		},
		'kbd': {
			autonym: 'адыгэбзэ (къэбэрдеибзэ)',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'kn': {
			autonym: 'ಕನ್ನಡ',
			inputmethods: [ 'kn-transliteration', 'kn-inscript' ]
		},
		'lbe': {
			autonym: 'лакку',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'lez': {
			autonym: 'лезги',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'mai': {
			autonym: 'मैथिली',
			inputmethods: [ 'mai-inscript' ]
		},
		'ml': {
			autonym: 'മലയാളം',
			inputmethods: [ 'ml-transliteration', 'ml-inscript' ]
		},
		'mr': {
			autonym: 'मराठी',
			inputmethods: [ 'mr-transliteration', 'mr-inscript' ]
		},
		'ne': {
			autonym: 'नेपाली',
			inputmethods: [ 'ne-transliteration', 'ne-inscript' ]
		},
		'new': {
			autonym: 'नेपाल भाषा',
			inputmethods: [ 'hi-transliteration', 'hi-inscript' ]
		},
		'or': {
			autonym: 'ଓଡ଼ିଆ',
			inputmethods: [ 'or-transliteration', 'or-lekhani', 'or-inscript' ]
		},
		'pa': {
			autonym: 'ਪੰਜਾਬੀ',
			inputmethods: [ 'pa-transliteration', 'pa-inscript', 'pa-phonetic' ]
		},
		'rif': {
			autonym: 'ⵜⵉⴼⵉⵏⴰⵖ',
			inputmethods: [ 'ber-tfng' ]
		},
		'ru': {
			autonym: 'русский',
			inputmethods: [ 'ru-transliteration' ]
		},
		'sah': {
			autonym: 'саха тыла',
			inputmethods: [ 'sah-transliteration' ]
		},
		'sa': {
			autonym: 'संस्कृत',
			inputmethods: [ 'sa-transliteration', 'sa-inscript' ]
		},
		'shi': {
			autonym: 'ⵜⵉⴼⵉⵏⴰⵖ',
			inputmethods: [ 'ber-tfng' ]
		},
		'si': {
			autonym: 'සිංහල',
			inputmethods: [ 'si-singlish', 'si-wijesekara' ]
		},
		'ta': {
			autonym: 'தமிழ்',
			inputmethods: [ 'ta-transliteration', 'ta-99', 'ta-inscript', 'ta-bamini' ]
		},
		'tcy': {
			autonym: 'ತುಳು',
			inputmethods: [ 'kn-transliteration' ]
		},
		'te': {
			autonym: 'తెలుగు',
			inputmethods: [ 'te-transliteration', 'te-inscript' ]
		},
		'tkr': {
			autonym: 'цӀаӀхна миз',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'ur': {
			autonym: 'اردو',
			inputmethods: [ 'ur-transliteration' ]
		}
	} );

}( jQuery ) );
