( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'am-transliteration': {
			name: 'Transliteration',
			source: 'rules/am/am-transliteration.js'
		},
		'as-avro': {
			name: 'অভ্ৰ',
			source: 'rules/as/as-avro.js'
		},
		'as-bornona': {
			name: 'বৰ্ণনা',
			source: 'rules/as/as-bornona.js'
		},
		'as-inscript': {
			name: 'ইন্‌স্ক্ৰিপ্ত',
			source: 'rules/as/as-inscript.js'
		},
		'as-transliteration': {
			name: 'প্ৰতিৰূপান্তৰণ',
			source: 'rules/as/as-transliteration.js'
		},
		'be-latin': {
			name: 'Łacinka',
			source: 'rules/be/be-latin.js'
		},
		'be-transliteration': {
			name: 'Transliteration',
			source: 'rules/be/be-transliteration.js'
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
			name: 'ইন্‌স্ক্ৰিপ্ত',
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
		'fi-transliteration': {
			name: 'translitterointi',
			source: 'rules/fi/fi-transliteration.js'
		},
		'hi-transliteration': {
			name: 'लिप्यंतरण',
			source: 'rules/hi/hi-transliteration.js'
		},
		'hi-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/hi/hi-inscript.js'
		},
		'mai-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/mai/mai-inscript.js',
			depends: 'hi-inscript'
		},
		'hi-bolnagri': {
			name: 'बोलनागरी',
			source: 'rules/hi/hi-bolnagri.js'
		},
		'ml-transliteration': {
			name: 'ലിപ്യന്തരണം',
			source: 'rules/ml/ml-transliteration.js'
		},
		'ml-inscript': {
			name: 'ഇൻസ്ക്രിപ്റ്റ്',
			source: 'rules/ml/ml-inscript.js'
		},
		'ta-inscript': {
			name: 'இன்ஸ்கிரிப்ட்',
			source: 'rules/ta/ta-inscript.js'
		},
		'ta-transliteration': {
			name: 'எழுத்துப்பெயர்ப்பு',
			source: 'rules/ta/ta-transliteration.js'
		},
		'ta-99': {
			name: 'தமிழ்99',
			source: 'rules/ta/ta-99.js'
		},
		'ta-bamini': {
			name: 'பாமினி',
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
			name: 'ઇનસ્ક્રિપ્ટ',
			source: 'rules/gu/gu-inscript.js'
		},
		'gu-transliteration': {
			name: 'લિપ્યાંતરણ',
			source: 'rules/gu/gu-transliteration.js'
		},
		'ka-transliteration': {
			name: 'ტრანსლიტერაცია',
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
		'kn-kgp': {
			name: 'KGP/Nudi/KP Rao',
			source: 'rules/kn/kn-kgp.js'
		},
		'kok-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/kok/kok-inscript2.js'
		},
		'mr-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/mr/mr-inscript.js'
		},
		'mr-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/mr/mr-inscript2.js'
		},
		'mr-transliteration': {
			name: 'अक्षरांतरण',
			source: 'rules/mr/mr-transliteration.js'
		},
		'ne-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/ne/ne-inscript.js'
		},
		'ne-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/ne/ne-inscript2.js'
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
			name: 'ଲେଖନୀ',
			source: 'rules/or/or-lekhani.js'
		},
		'te-inscript': {
			name: 'ఇన్‍స్క్రిప్ట్',
			source: 'rules/te/te-inscript.js'
		},
		'te-transliteration': {
			name: 'లిప్యంతరీకరణ',
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
		'sa-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/sa/sa-inscript2.js'
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
		},
		'mn-cyrl': {
			name: 'Cyrillc',
			source: 'rules/mn/mn-cyrl.js'
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
		'be': {
			autonym: 'беларуская',
			inputmethods: [ 'be-transliteration', 'be-latin' ]
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
			autonym: 'बोड़ो',
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
		'eo': {
			autonym: 'Esperanto',
			inputmethods: [ 'eo-transliteration' ]
		},
		'fi': {
			autonym: 'Suomi',
			inputmethods: [ 'fi-transliteration' ]
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
			inputmethods: [ 'kn-transliteration', 'kn-inscript', 'kn-kgp' ]
		},
		'kok': {
			autonym: 'कोंकणी',
			inputmethods: [ 'kok-inscript2' ]
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
		'mn': {
			autonym: 'Монгол',
			inputmethods: [ 'mn-cyrl' ]
		},
		'mr': {
			autonym: 'मराठी',
			inputmethods: [ 'mr-transliteration', 'mr-inscript2', 'mr-inscript' ]
		},
		'ne': {
			autonym: 'नेपाली',
			inputmethods: [ 'ne-transliteration', 'ne-inscript2', 'ne-inscript' ]
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
			inputmethods: [ 'sa-transliteration', 'sa-inscript2', 'sa-inscript' ]
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
