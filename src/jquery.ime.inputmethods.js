( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'am-transliteration': {
			name: 'ትራንስልተራትዖን',
			source: 'rules/am/am-transliteration.js'
		},
		'ar-kbd': {
			name: 'أرابيك',
			source: 'rules/ar/ar-kbd.js'
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
		'as-inscript2': {
			name: 'ইন্‌স্ক্ৰিপ্ত ২',
			source: 'rules/as/as-inscript2.js'
		},
		'as-phonetic': {
			name: 'ফনেটিক',
			source: 'rules/as/as-phonetic.js'
		},
		'as-transliteration': {
			name: 'প্ৰতিৰূপান্তৰণ',
			source: 'rules/as/as-transliteration.js'
		},
		'be-kbd': {
			name: 'кбд',
			source: 'rules/be/be-kbd.js'
		},
		'be-latin': {
			name: 'Łacinka',
			source: 'rules/be/be-latin.js'
		},
		'be-transliteration': {
			name: 'Транслітератыён',
			source: 'rules/be/be-transliteration.js'
		},
		'ber-tfng': {
			name: 'Tifinagh',
			source: 'rules/ber/ber-tfng.js'
		},
		'bn-avro': {
			name: 'অভ্র',
			source: 'rules/bn/bn-avro.js'
		},
		'bn-inscript': {
			name: 'ইন্‌স্ক্ৰিপ্ত',
			source: 'rules/bn/bn-inscript.js'
		},
		'bn-inscript2': {
			name: 'ইন্‌স্ক্ৰিপ্ত ২',
			source: 'rules/bn/bn-inscript2.js'
		},
		'bn-nkb': {
			name: 'ন্যাশনাল কিবোর্ড',
			source: 'rules/bn/bn-nkb.js'
		},
		'bn-probhat': {
			name: 'প্রভাত',
			source: 'rules/bn/bn-probhat.js'
		},
		'brx-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/brx/brx-inscript.js'
		},
		'brx-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/brx/brx-inscript2.js'
		},
		'cyrl-palochka': {
			name: 'Palochka',
			source: 'rules/cyrl/cyrl-palochka.js'
		},
		'da-normforms': {
			name: 'normalformer',
			source: 'rules/da/da-normforms.js'
		},
		'doi-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/doi/doi-inscript2.js'
		},
		'eo-transliteration': {
			name: 'transliterigo',
			source: 'rules/eo/eo-transliteration.js'
		},
		'eo-h': {
			name: 'Esperanto h',
			source: 'rules/eo/eo-h.js'
		},
		'eo-h-f': {
			name: 'Esperanto h fundamente',
			source: 'rules/eo/eo-h-f.js'
		},
		'eo-plena': {
			name: 'Esperanto plena',
			source: 'rules/eo/eo-plena.js'
		},
		'eo-q': {
			name: 'Esperanto q sistemo',
			source: 'rules/eo/eo-q.js'
		},
		'eo-vi': {
			name: 'Esperanto vi sistemo',
			source: 'rules/eo/eo-vi.js'
		},
		'eo-x': {
			name: 'Esperanto x sistemo',
			source: 'rules/eo/eo-x.js'
		},
		'fo-normforms': {
			name: 'Føroyskt',
			source: 'rules/fo/fo-normforms.js'
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
		'hi-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/hi/hi-inscript2.js'
		},
		'hi-phonetic': {
			name: 'फोनेटिक',
			source: 'rules/hi/hi-phonetic.js'
		},
		'is-normforms': {
			name: 'Venjuleg eyðublöð',
			source: 'rules/is/is-normforms.js'
		},
		'jv-transliteration': {
			name: 'Transliteration',
			source: 'rules/jv/jv-transliteration.js'
		},
		'mai-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/mai/mai-inscript.js',
			depends: 'hi-inscript'
		},
		'mai-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/mai/mai-inscript2.js',
			depends: 'hi-inscript2'
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
		'ml-inscript2': {
			name: 'ഇൻസ്ക്രിപ്റ്റ് 2',
			source: 'rules/ml/ml-inscript2.js'
		},
		'sv-normforms': {
			name: 'Normal forms',
			source: 'rules/sv/sv-normforms.js'
		},
		'ta-inscript': {
			name: 'இன்ஸ்கிரிப்ட்',
			source: 'rules/ta/ta-inscript.js'
		},
		'ta-inscript2': {
			name: 'இன்ஸ்கிரிப்ட் 2',
			source: 'rules/ta/ta-inscript2.js'
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
		'th-kedmanee': {
			name: 'เกษมณี',
			source: 'rules/th/th-kedmanee.js'
		},
		'th-pattachote': {
			name: 'ปัตตะโชติ',
			source: 'rules/th/th-pattachote.js'
		},
		'de': {
			name: 'Deutsch',
			source: 'rules/de/de.js'
		},
		'el-kbd': {
			name: 'κπδ',
			source: 'rules/el/el-kbd.js'
		},
		'he-standard-2012': {
			name: 'חברו 2012 ( פרום אנגליש )',
			source: 'rules/he/he-standard-2012.js'
		},
		'he-standard-2012-extonly': {
			name: 'חברו 2012',
			source: 'rules/he/he-standard-2012-extonly.js'
		},
		'he-kbd': {
			name: 'כבד',
			source: 'rules/he/he-kbd.js'
		},
		'hr-kbd': {
			name: 'Croatian kbd',
			source: 'rules/hr/hr-kbd.js'
		},
		'hy-kbd': {
			name: 'կբդ',
			source: 'rules/hy/hy-kbd.js'
		},
		'gu-inscript': {
			name: 'ઇનસ્ક્રિપ્ટ',
			source: 'rules/gu/gu-inscript.js'
		},
		'gu-inscript2': {
			name: 'ઇનસ્ક્રિપ્ટ ૨',
			source: 'rules/gu/gu-inscript2.js'
		},
		'gu-phonetic': {
			name: 'ફોનૅટિક',
			source: 'rules/gu/gu-phonetic.js'
		},
		'gu-transliteration': {
			name: 'લિપ્યાંતરણ',
			source: 'rules/gu/gu-transliteration.js'
		},
		'ka-transliteration': {
			name: 'ტრანსლიტერაცია',
			source: 'rules/ka/ka-transliteration.js'
		},
		'ka-kbd': {
			name: 'კბდ',
			source: 'rules/ka/ka-kbd.js'
		},
		'kk-arabic': {
			name: 'كذاك أرابيك ',
			source: 'rules/kk/kk-arabic.js'
		},
		'kk-kbd': {
			name: 'лив',
			source: 'rules/kk/kk-kbd.js'
		},
		'kn-inscript': {
			name: 'ಇನ್ಸ್ಕ್ರಿಪ್ಟ್',
			source: 'rules/kn/kn-inscript.js'
		},
		'kn-inscript2': {
			name: 'ಇನ್‌ಸ್ಕ್ರಿಪ್ಟ್ ೨',
			source: 'rules/kn/kn-inscript2.js'
		},
		'kn-transliteration': {
			name: 'எழுத்துப்பெயர்ப்பு',
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
		'ks-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/ks/ks-inscript.js'
		},
		'ks-kbd': {
			name: 'kbd',
			source: 'rules/ks/ks-kbd.js'
		},
		'lo-kbd': {
			name: 'າຶກ',
			source: 'rules/lo/lo-kbd.js'
		},
		'mh': {
			name: 'Kajin M̧ajeļ',
			source: 'rules/mh/mh.js'
		},
		'mn-cyrl': {
			name: 'Кирилл',
			source: 'rules/mn/mn-cyrl.js'
		},
		'mni-inscript2': {
			name: 'ইন্‌স্ক্ৰিপ্ত ২',
			source: 'rules/mni/mni-inscript2.js'
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
		'mr-phonetic': {
			name: 'फोनेटिक',
			source: 'rules/mr/mr-phonetic.js'
		},
		'my-kbd': {
			name: 'Burmese kbd',
			source: 'rules/my/my-kbd.js'
		},
		'my-xkb': {
				name: 'Burmese xkb',
				source: 'rules/my/my-xkb.js'
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
			name: 'ट्रांस्लितेरेशन',
			source: 'rules/ne/ne-transliteration.js'
		},
		'ne-rom': {
			name: 'Romanized',
			source: 'rules/ne/ne-rom.js'
		},
		'ne-trad': {
			name: 'Traditional',
			source: 'rules/ne/ne-trad.js'
		},
		'no-normforms': {
			name: 'Normal transliterasjon',
			source: 'rules/no/no-normforms.js'
		},
		'no-tildeforms': {
			name: 'Tildemerket transliterasjon',
			source: 'rules/no/no-tildeforms.js'
		},
		'or-transliteration': {
			name: 'ଟରନସଲିତେରତିଓନ',
			source: 'rules/or/or-transliteration.js'
		},
		'or-inscript': {
			name: 'ଈନସକରିପତ',
			source: 'rules/or/or-inscript.js'
		},
		'or-inscript2': {
			name: 'ଈନସକରିପତ2',
			source: 'rules/or/or-inscript2.js'
		},
		'or-lekhani': {
			name: 'ଲେଖନୀ',
			source: 'rules/or/or-lekhani.js'
		},
		'or-phonetic': {
			name: 'ହୋନେତିକ',
			source: 'rules/or/or-phonetic.js'
		},
		'sd-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/sd/sd-inscript2.js'
		},
		'se-normforms': {
			name: 'Normal forms',
			source: 'rules/se/se-normforms.js'
		},
		'sk-kbd': {
			name: 'Slovak kbd',
			source: 'rules/sk/sk-kbd.js'
		},
		'sr-kbd': {
			name: 'кбд',
			source: 'rules/sr/sr-kbd.js'
		},
		'te-inscript': {
			name: 'ఇన్‍స్క్రిప్ట్',
			source: 'rules/te/te-inscript.js'
		},
		'te-inscript2': {
			name: 'ఇన్‍స్క్రిప్ట్ 2',
			source: 'rules/te/te-inscript2.js'
		},
		'te-transliteration': {
			name: 'లిప్యంతరీకరణ',
			source: 'rules/te/te-transliteration.js'
		},
		'pa-inscript': {
			name: 'ਇਨਸ੍ਕ੍ਰਿਪ੍ਟ',
			source: 'rules/pa/pa-inscript.js'
		},
		'pa-inscript2': {
			name: 'ਇਨਸ੍ਕ੍ਰਿਪ੍ਟ2',
			source: 'rules/pa/pa-inscript2.js'
		},
		'pa-jhelum': {
			name: 'ਜੇਹਲਮ',
			source: 'rules/pa/pa-jhelum.js'
		},
		'pa-transliteration': {
			name: 'ਤ੍ਰਾਨ੍ਸ੍ਲਿਤੇਰਾਤਿਓਂ',
			source: 'rules/pa/pa-transliteration.js'
		},
		'pa-phonetic': {
			name: 'ਫੋਨੇਟਿਕ',
			source: 'rules/pa/pa-phonetic.js'
		},
		'ru-jcuken': {
			name: 'ЙЦУКЕН',
			source: 'rules/ru/ru-jcuken.js'
		},
		'ru-kbd': {
			name: 'кбд',
			source: 'rules/ru/ru-kbd.js'
		},
		'ru-phonetic': {
			name: 'фонетический',
			source: 'rules/ru/ru-phonetic.js'
		},
		'ru-yawerty': {
			name: 'yawerty',
			source: 'rules/ru/ru-yawerty.js'
		},
		'sa-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/sa/sa-inscript.js'
		},
		'sa-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/sa/sa-inscript2.js'
		},
		'sa-transliteration': {
			name: 'ट्रन्स्लितेरतिओन्',
			source: 'rules/sa/sa-transliteration.js'
		},
		'sah-transliteration': {
			name: 'Transliteration',
			source: 'rules/sah/sah-transliteration.js'
		},
		'sat-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/sat/sat-inscript2.js'
		},
		'si-singlish': {
			name: 'සිංග්ලිෂ්',
			source: 'rules/si/si-singlish.js'
		},
		'si-wijesekara': {
			name: 'විජේසේකර',
			source: 'rules/si/si-wijesekara.js'
		},
		'ur-phonetic': {
			name: 'صوتی',
			source: 'rules/ur/ur-phonetic.js'
		},
		'ur-transliteration': {
			name: 'ٹرانسلٹریشن',
			source: 'rules/ur/ur-transliteration.js'
		},
		'ipa-sil': {
			name: 'International Phonetic Alphabet - SIL',
			source: 'rules/fonipa/ipa-sil.js'
		},
		'uk-kbd': {
			name: 'кбд',
			source: 'rules/uk/uk-kbd.js'
		},
		'ug-kbd': {
			name: 'Uyghur kbd',
			source: 'rules/ug/ug-kbd.js'
		},
		'uz-kbd': {
			name: 'Uzbek kbd',
			source: 'rules/uz/uz-kbd.js'
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
		'ar': {
			autonym: 'العربية',
			inputmethods: [ 'ar-kbd' ]
		},
		'as': {
			autonym: 'অসমীয়া',
			inputmethods: [ 'as-transliteration', 'as-avro', 'as-bornona', 'as-inscript', 'as-phonetic', 'as-inscript2' ]
		},
		'av': {
			autonym: 'авар',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'be': {
			autonym: 'беларуская',
			inputmethods: [ 'be-transliteration', 'be-latin', 'be-kbd' ]
		},
		'be-tarask': {
			autonym: 'беларуская (тарашкевіца)',
			inputmethods: [ 'be-transliteration', 'be-latin' ]
		},
		'bh': {
			autonym: 'भोजपुरी',
			inputmethods: [ 'hi-transliteration' ]
		},
		'bho': {
			autonym: 'भोजपुरी',
			inputmethods: [ 'hi-transliteration' ]
		},
		'bn': {
			autonym: 'বাংলা',
			inputmethods: [ 'bn-avro', 'bn-inscript', 'bn-nkb', 'bn-probhat', 'bn-inscript2' ]
		},
		'brx': {
			autonym: 'बोड़ो',
			inputmethods: [ 'brx-inscript', 'brx-inscript2' ]
		},
		'ce': {
			autonym: 'нохчийн',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'da': {
			autonym: 'Dansk',
			inputmethods: [ 'da-normforms' ]
		},
		'de': {
			autonym: 'Deutsch',
			inputmethods: [ 'de' ]
		},
		'doi': {
			autonym: 'डोगरी',
			inputmethods: [ 'doi-inscript2' ]
		},
		'en': {
			autonym: 'English',
			inputmethods: [ 'ipa-sil' ]
		},
		'el': {
			autonym: 'Ελληνικά',
			inputmethods: [ 'el-kbd' ]
		},
		'eo': {
			autonym: 'Esperanto',
			inputmethods: [ 'eo-transliteration', 'eo-h', 'eo-h-f', 'eo-plena', 'eo-q', 'eo-vi', 'eo-x' ]
		},
		'fo': {
			autonym: 'Føroyskt',
			inputmethods: [ 'fo-normforms' ]
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
			inputmethods: [ 'gu-transliteration', 'gu-inscript', 'gu-inscript2', 'gu-phonetic' ]
		},
		'he': {
			autonym: 'עברית',
			inputmethods: [ 'he-standard-2012-extonly', 'he-standard-2012', 'he-kbd' ]
		},
		'hi': {
			autonym: 'हिन्दी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri', 'hi-phonetic', 'hi-inscript2' ]
		},
		'hr': {
			autonym: 'Hrvatski',
			inputmethods: [ 'hr-kbd' ]
		},
		'hy': {
			autonym: 'Հայերեն',
			inputmethods: [ 'hy-kbd' ]
		},
		'hne': {
			autonym: 'छत्तीसगढ़ी',
			inputmethods: [ 'hi-transliteration' ]
		},
		'is': {
			autonym: 'Íslenska',
			inputmethods: [ 'is-normforms' ]
		},
		'fonipa': {
			autonym: 'International Phonetic Alphabet',
			inputmethods: [ 'ipa-sil' ]
		},
		'jv': {
			autonym: 'ꦧꦱꦗꦮ',
			inputmethods: [ 'jv-transliteration' ]
		},
		'ka': {
			autonym: 'ქართული ენა',
			inputmethods: [ 'ka-transliteration', 'ka-kbd' ]
		},
		'kbd': {
			autonym: 'адыгэбзэ (къэбэрдеибзэ)',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'kk': {
			autonym: 'Қазақша',
			inputmethods: [ 'kk-kbd', 'kk-arabic' ]
		},
		'kn': {
			autonym: 'ಕನ್ನಡ',
			inputmethods: [ 'kn-transliteration', 'kn-inscript', 'kn-kgp', 'kn-inscript2' ]
		},
		'ks': {
			autonym: 'कॉशुर / کٲشُر',
			inputmethods: [ 'ks-inscript', 'ks-kbd' ]
		},
		'kab': {
			autonym: 'ⵜⴰⵇⴱⴰⵢⵍⵉⵜ',
			inputmethods: [ 'ber-tfng' ]
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
		'lo': {
			autonym: 'ລາວ',
			inputmethods: [ 'lo-kbd' ]
		},
		'mai': {
			autonym: 'मैथिली',
			inputmethods: [ 'mai-inscript', 'mai-inscript2' ]
		},
		'mh': {
			autonym: 'Kajin M̧ajeļ',
			inputmethods: [ 'mh' ]
		},
		'ml': {
			autonym: 'മലയാളം',
			inputmethods: [ 'ml-transliteration', 'ml-inscript', 'ml-inscript2' ]
		},
		'mn': {
			autonym: 'Монгол',
			inputmethods: [ 'mn-cyrl' ]
		},
		'mni': {
			autonym: 'Manipuri',
			inputmethods: [ 'mni-inscript2' ]
		},
		'mr': {
			autonym: 'मराठी',
			inputmethods: [ 'mr-transliteration', 'mr-inscript2', 'mr-inscript', 'mr-phonetic' ]
		},
		'my': {
			autonym: 'မြန်မာ',
			inputmethods: [ 'my-kbd', 'my-xkb' ]
		},
		'ne': {
			autonym: 'नेपाली',
			inputmethods: [ 'ne-transliteration', 'ne-inscript2', 'ne-inscript', 'ne-rom', 'ne-trad' ]
		},
		'new': {
			autonym: 'नेपाल भाषा',
			inputmethods: [ 'hi-transliteration', 'hi-inscript' ]
		},
		'no': {
			autonym: 'Norsk',
			inputmethods: [ 'no-normforms', 'no-tildeforms' ]
		},
		'nb': {
			autonym: 'Norsk (bokmål)',
			inputmethods: [ 'no-normforms', 'no-tildeforms' ]
		},
		'nn': {
			autonym: 'Norsk (nynorsk)',
			inputmethods: [ 'no-normforms', 'no-tildeforms' ]
		},
		'or': {
			autonym: 'ଓଡ଼ିଆ',
			inputmethods: [ 'or-transliteration', 'or-lekhani', 'or-inscript', 'or-phonetic', 'or-inscript2' ]
		},
		'pa': {
			autonym: 'ਪੰਜਾਬੀ',
			inputmethods: [ 'pa-transliteration', 'pa-inscript', 'pa-phonetic', 'pa-inscript2', 'pa-jhelum' ]
		},
		'rif': {
			autonym: 'ⵜⴰⵔⵉⴼⵉⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		'ru': {
			autonym: 'русский',
			inputmethods: [ 'ru-jcuken', 'ru-kbd', 'ru-phonetic', 'ru-yawerty' ]
		},
		'sah': {
			autonym: 'саха тыла',
			inputmethods: [ 'sah-transliteration' ]
		},
		'sa': {
			autonym: 'संस्कृत',
			inputmethods: [ 'sa-transliteration', 'sa-inscript2', 'sa-inscript' ]
		},
		'sat': {
			autonym: 'संताली',
			inputmethods: [ 'sat-inscript2']
		},
		'sd': {
			autonym: 'सिंधी',
			inputmethods: [ 'sd-inscript2' ]
		},
		'se': {
			autonym: 'Davvisámegiella',
			inputmethods: [ 'se-normforms' ]
		},
		'shi': {
			autonym: 'ⵜⴰⵛⵍⵃⵉⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		'si': {
			autonym: 'සිංහල',
			inputmethods: [ 'si-singlish', 'si-wijesekara' ]
		},
		'sk': {
			autonym: 'Slovenčina',
			inputmethods: [ 'sk-kbd' ]
		},
		'sr': {
			autonym: 'Српски / srpski',
			inputmethods: [ 'sr-kbd' ]
		},
		'sv': {
			autonym: 'Svenska',
			inputmethods: [ 'sv-normforms' ]
		},
		'ta': {
			autonym: 'தமிழ்',
			inputmethods: [ 'ta-transliteration', 'ta-99', 'ta-inscript', 'ta-bamini', 'ta-inscript2' ]
		},
		'tcy': {
			autonym: 'ತುಳು',
			inputmethods: [ 'kn-transliteration' ]
		},
		'te': {
			autonym: 'తెలుగు',
			inputmethods: [ 'te-transliteration', 'te-inscript', 'te-inscript2' ]
		},
		'th': {
			autonym: 'ไทย',
			inputmethods: [ 'th-kedmanee', 'th-pattachote' ]
		},
		'tkr': {
			autonym: 'цӀаӀхна миз',
			inputmethods: [ 'cyrl-palochka' ]
		},
		'tzm': {
			autonym: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		'uk': {
			autonym: 'Українська',
			inputmethods: [ 'uk-kbd' ]
		},
		'ug': {
			autonym: 'ئۇيغۇرچە / Uyghurche',
			inputmethods: [ 'ug-kbd' ]
		},
		'ur': {
			autonym: 'اردو',
			inputmethods: [ 'ur-transliteration', 'ur-phonetic' ]
		},
		'uz': {
			autonym: 'Oʻzbekcha',
			inputmethods: [ 'uz-kbd' ]
		}
	} );

}( jQuery ) );
