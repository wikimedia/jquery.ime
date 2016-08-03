( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'am-transliteration': {
			name: 'ትራንስልተራትዖን',
			source: 'rules/am/am-transliteration.js'
		},
		'ak-qx': {
			name: 'Akan - QX replacement',
			source: 'rules/ak/ak-qx.js'
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
			name: 'ইনস্ক্ৰিপ্ট',
			source: 'rules/as/as-inscript.js'
		},
		'as-inscript2': {
			name: 'ইনস্ক্ৰিপ্ট ২',
			source: 'rules/as/as-inscript2.js'
		},
		'as-phonetic': {
			name: 'ফনেটিক',
			source: 'rules/as/as-phonetic.js'
		},
		'as-rodali': {
			name: 'ৰ\'দালি',
			source: 'rules/as/as-rodali.js'
		},
		'as-transliteration': {
			name: 'প্ৰতিৰূপান্তৰণ',
			source: 'rules/as/as-transliteration.js'
		},
		'azb-kbd': {
			name: 'تۆرکجه',
			source: 'rules/azb/azb-kbd.js'
		},
		'batak-qwerty': {
			name: 'Batak QWERTY',
			source: 'rules/bbc/batak-qwerty.js'
		},
		'be-kbd': {
			name: 'Стандартная',
			source: 'rules/be/be-kbd.js'
		},
		'be-latin': {
			name: 'Łacinka',
			source: 'rules/be/be-latin.js'
		},
		'be-transliteration': {
			name: 'Транслітэрацыя',
			source: 'rules/be/be-transliteration.js'
		},
		'ber-tfng': {
			name: 'Tifinagh',
			source: 'rules/ber/ber-tfng.js'
		},
		'bgn-kbd': {
			name: 'روچ کپتین بلوچی',
			source: 'rules/bgn/bgn-kbd.js'
		},
		'bn-avro': {
			name: 'অভ্র',
			source: 'rules/bn/bn-avro.js'
		},
		'bn-inscript': {
			name: 'ইনস্ক্ৰিপ্ট',
			source: 'rules/bn/bn-inscript.js'
		},
		'bn-inscript2': {
			name: 'ইনস্ক্ৰিপ্ট ২',
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
		'bo-ewts': {
			name: 'Tibetan EWTS',
			source: 'rules/bo/bo-ewts.js'
		},
		'brx-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/brx/brx-inscript.js'
		},
		'brx-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/brx/brx-inscript2.js'
		},
		'ckb-transliteration-arkbd': {
			name: 'باشووری',
			source: 'rules/ckb/ckb-transliteration-arkbd.js'
		},
		'ckb-transliteration-fakbd': {
			name: 'ڕۆژھەڵاتی',
			source: 'rules/ckb/ckb-transliteration-fakbd.js'
		},
		'ckb-transliteration-lakbd': {
			name: 'لاتینی',
			source: 'rules/ckb/ckb-transliteration-lakbd.js'
		},
		'cv-cyr-altgr': {
			name: 'Чăвашла (AltGr)',
			source: 'rules/cv/cv-cyr-altgr.js'
		},
		'cv-lat-altgr': {
			name: 'Căvašla (AltGr)',
			source: 'rules/cv/cv-lat-altgr.js'
		},
		'cv-cyr-numbers': {
			name: 'Чăвашла (цифрилисем)',
			source: 'rules/cv/cv-cyr-numbers.js'
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
		'fa-kbd': {
			name: 'فارسی',
			source: 'rules/fa/fa-kbd.js'
		},
		'fo-normforms': {
			name: 'Føroyskt',
			source: 'rules/fo/fo-normforms.js'
		},
		'fi-transliteration': {
			name: 'translitterointi',
			source: 'rules/fi/fi-transliteration.js'
		},
		'lud-transliteration': {
			name: 'lud',
			source: 'rules/lud/lud-transliteration.js'
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
		'de-transliteration': {
			name: 'Deutsch Tilde',
			source: 'rules/de/de-transliteration.js'
		},
		'el-kbd': {
			name: 'Τυπική πληκτρολόγιο',
			source: 'rules/el/el-kbd.js'
		},
		'he-standard-2012': {
			name: 'עברית עם ניקוד על בסיס אנגלית',
			source: 'rules/he/he-standard-2012.js'
		},
		'he-standard-2012-extonly': {
			name: 'עברית עם ניקוד',
			source: 'rules/he/he-standard-2012-extonly.js'
		},
		'hr-kbd': {
			name: 'Croatian kbd',
			source: 'rules/hr/hr-kbd.js'
		},
		'hy-ephonetic': {
			name: 'Հնչյունային դասավորություն',
			source: 'rules/hy/hy-ephonetic.js'
		},
		'hy-typewriter': {
			name: 'Գրամեքենայի դասավորություն',
			source: 'rules/hy/hy-typewriter.js'
		},
		'hy-ephoneticalt': {
			name: 'Հնչյունային նոր (R→Ր, F→Թ)',
			source: 'rules/hy/hy-ephoneticalt.js'
		},
		'hy-emslegacy': {
			name: 'Մայքրոսոֆթի հին արևելահայերեն',
			source: 'rules/hy/hy-emslegacy.js'
		},
		'hy-wmslegacy': {
			name: 'Մայքրոսոֆթի հին արևմտահայերեն',
			source: 'rules/hy/hy-wmslegacy.js'
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
			name: 'લિપ્યંતરણ',
			source: 'rules/gu/gu-transliteration.js'
		},
		'ka-transliteration': {
			name: 'ტრანსლიტერაცია',
			source: 'rules/ka/ka-transliteration.js'
		},
		'ka-kbd': {
			name: 'სტანდარტული კლავიატურის',
			source: 'rules/ka/ka-kbd.js'
		},
		'kk-arabic': {
			name: 'Kazakh Arabic transliteration',
			source: 'rules/kk/kk-arabic.js'
		},
		'kk-kbd': {
			name: 'Кирил',
			source: 'rules/kk/kk-kbd.js'
		},
		'km-nidakyk': {
			name: 'ក្តារ​ចុច​យូនីកូដ​ខ្មែរ (NiDA)',
			source: 'rules/km/km-nidakyk.js'
		},
		'kn-inscript': {
			name: 'ಇನ್ಸ್ಕ್ರಿಪ್ಟ್',
			source: 'rules/kn/kn-inscript.js'
		},
		'kn-inscript2': {
			name: 'ಇನ್\u200cಸ್ಕ್ರಿಪ್ಟ್ ೨',
			source: 'rules/kn/kn-inscript2.js'
		},
		'kn-transliteration': {
			name: 'ಲಿಪ್ಯಂತರಣ',
			source: 'rules/kn/kn-transliteration.js'
		},
		'kn-kgp': {
			name: 'KGP/Nudi/KP Rao',
			source: 'rules/kn/kn-kgp.js'
		},
		'ky-cyrl-alt': {
			name: 'Кыргыз Alt',
			source: 'rules/ky/ky-cyrl-alt.js'
		},
		'gom-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/gom/gom-inscript2.js'
		},
		'ks-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/ks/ks-inscript.js'
		},
		'ks-kbd': {
			name: 'Kashmiri Arabic',
			source: 'rules/ks/ks-kbd.js'
		},
		'ku-h': {
			name: 'Kurdî-h',
			source: 'rules/ku/ku-h.js'
		},
		'ku-tr': {
			name: 'Kurdî-tr',
			source: 'rules/ku/ku-tr.js'
		},
		'lo-kbd': {
			name: 'າຶກ',
			source: 'rules/lo/lo-kbd.js'
		},
		'lrc-kbd': {
			name: 'لۊری شومالی',
			source: 'rules/lrc/lrc-kbd.js'
		},
		mh: {
			name: 'Kajin M̧ajeļ',
			source: 'rules/mh/mh.js'
		},
		'mn-cyrl': {
			name: 'Кирилл',
			source: 'rules/mn/mn-cyrl.js'
		},
		'mni-inscript2': {
			name: 'ইনস্ক্ৰিপ্ট ২',
			source: 'rules/mni/mni-inscript2.js'
		},
		'mr-inscript': {
			name: 'मराठी लिपी',
			source: 'rules/mr/mr-inscript.js'
		},
		'mr-inscript2': {
			name: 'मराठी इनस्क्रिप्ट २',
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
		'my-xkb': {
			name: 'မြန်မာဘာသာ xkb',
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
		'nb-normforms': {
			name: 'Normal transliterasjon',
			source: 'rules/nb/nb-normforms.js'
		},
		'nb-tildeforms': {
			name: 'Tildemerket transliterasjon',
			source: 'rules/nb/nb-tildeforms.js'
		},
		'nn-tildeforms': {
			name: 'Tildemerkt transliterasjon',
			source: 'rules/nb/nb-tildeforms.js'
		},
		'or-transliteration': {
			name: 'ଟ୍ରାନ୍ସଲିଟରେସନ',
			source: 'rules/or/or-transliteration.js'
		},
		'or-OdiScript': {
			name: 'ଓଡ଼ିସ୍କ୍ରିପ୍ଟ',
			source: 'rules/or/or-OdiScript.js'
		},
		'or-inscript': {
			name: 'ଇନସ୍କ୍ରିପ୍ଟ',
			source: 'rules/or/or-inscript.js'
		},
		'or-inscript2': {
			name: 'ଇନସ୍କ୍ରିପ୍ଟ2',
			source: 'rules/or/or-inscript2.js'
		},
		'or-lekhani': {
			name: 'ଲେଖନୀ',
			source: 'rules/or/or-lekhani.js'
		},
		'or-phonetic': {
			name: 'ଫୋନେଟିକ',
			source: 'rules/or/or-phonetic.js'
		},
		'sd-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/sd/sd-inscript2.js'
		},
		'sdh-kbd': {
			name: 'کوردی خوارگ',
			source: 'rules/sdh/sdh-kbd.js'
		},
		'se-normforms': {
			name: 'Normal forms',
			source: 'rules/se/se-normforms.js'
		},
		'sk-kbd': {
			name: 'Štandardná',
			source: 'rules/sk/sk-kbd.js'
		},
		'sr-kbd': {
			name: 'Стандардна',
			source: 'rules/sr/sr-kbd.js'
		},
		'te-inscript': {
			name: 'ఇన్\u200dస్క్రిప్ట్',
			source: 'rules/te/te-inscript.js'
		},
		'te-inscript2': {
			name: 'ఇన్\u200dస్క్రిప్ట్ 2',
			source: 'rules/te/te-inscript2.js'
		},
		'te-apple': {
			name: 'ఆపిల్',
			source: 'rules/te/te-apple.js'
		},'te-modular': {
			name: 'మాడ్యులర్',
			source: 'rules/te/te-modular.js'
		},
		'te-transliteration': {
			name: 'లిప్యంతరీకరణ',
			source: 'rules/te/te-transliteration.js'
		},
		'pa-inscript': {
			name: 'ਇਨਸਕ੍ਰਿਪਟ',
			source: 'rules/pa/pa-inscript.js'
		},
		'pa-inscript2': {
			name: 'ਇਨਸਕ੍ਰਿਪਟ2',
			source: 'rules/pa/pa-inscript2.js'
		},
		'pa-jhelum': {
			name: 'ਜੇਹਲਮ',
			source: 'rules/pa/pa-jhelum.js'
		},
		'pa-transliteration': {
			name: 'ਲਿਪਾਂਤਰਨ',
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
		'sa-iast': {
			name: 'Romanized',
			source: 'rules/sa/sa-iast.js'
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
			name: 'लिप्यन्तरणम्',
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
		'sat-inscript2-ol-chiki': {
			name: 'inscript2 ᱚᱞ ᱪᱤᱠᱤ',
			source: 'rules/sat/sat-inscript2-ol-chiki.js'
		},
		'sat-sarjom-baha': {
			name: 'sarjom baha',
			source: 'rules/sat/sat-sarjom-baha.js'
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
		'ipa-x-sampa': {
			name: 'International Phonetic Alphabet - X-SAMPA',
			source: 'rules/fonipa/ipa-x-sampa.js'
		},
		'udm-alt': {
			name: 'Удмурт ALT',
			source: 'rules/udm/udm-alt.js'
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
		},
		'vec-GVU': {
			name: 'Venetian',
			source: 'rules/vec/vec-GVU.js'
		},
		'yo-alt': {
			name: 'Yorùbá Alt',
			source: 'rules/yo/yo-alt.js'
		}
	} );

	$.extend( $.ime.languages, {
		ady: {
			autonym: 'адыгэбзэ',
			inputmethods: [ 'cyrl-palochka' ]
		},
		ahr: {
			autonym: 'अहिराणी',
			inputmethods: [ 'mr-transliteration', 'mr-inscript' ]
		},
		ak: {
			autonym: 'Akan',
			inputmethods: [ 'ak-qx' ]
		},
		am: {
			autonym: 'አማርኛ',
			inputmethods: [ 'am-transliteration' ]
		},
		ar: {
			autonym: 'العربية',
			inputmethods: [ 'ar-kbd' ]
		},
		as: {
			autonym: 'অসমীয়া',
			inputmethods: [ 'as-transliteration', 'as-avro', 'as-bornona', 'as-inscript', 'as-phonetic', 'as-inscript2', 'as-rodali' ]
		},
		av: {
			autonym: 'авар',
			inputmethods: [ 'cyrl-palochka' ]
		},
		azb: {
			autonym: 'تۆرکجه',
			inputmethods: [ 'azb-kbd' ]
		},
		bbc: {
			autonym: 'Batak',
			inputmethods: [ 'batak-qwerty' ]
		},
		be: {
			autonym: 'беларуская',
			inputmethods: [ 'be-transliteration', 'be-latin', 'be-kbd' ]
		},
		'be-tarask': {
			autonym: 'беларуская (тарашкевіца)',
			inputmethods: [ 'be-transliteration', 'be-latin' ]
		},
		bh: {
			autonym: 'भोजपुरी',
			inputmethods: [ 'hi-transliteration' ]
		},
		bgn: {
			autonym: 'روچ کپتین بلوچی',
			inputmethods: [ 'bgn-kbd' ]
		},
		bho: {
			autonym: 'भोजपुरी',
			inputmethods: [ 'hi-transliteration' ]
		},
		bn: {
			autonym: 'বাংলা',
			inputmethods: [ 'bn-avro', 'bn-inscript', 'bn-nkb', 'bn-probhat', 'bn-inscript2' ]
		},
		bo: {
			autonym: 'བོད་ཡིག།',
			inputmethods: [ 'bo-ewts' ]
		},
		brx: {
			autonym: 'बोड़ो',
			inputmethods: [ 'brx-inscript', 'brx-inscript2' ]
		},
		ckb: {
			autonym: 'کوردیی ناوەندی',
			inputmethods: [ 'ckb-transliteration-arkbd', 'ckb-transliteration-fakbd', 'ckb-transliteration-lakbd' ]
		},
		ce: {
			autonym: 'нохчийн',
			inputmethods: [ 'cyrl-palochka' ]
		},
		cv: {
			autonym: 'Чăвашла',
			inputmethods: [ 'cv-cyr-altgr', 'cv-lat-altgr', 'cv-cyr-numbers' ]
		},
		da: {
			autonym: 'Dansk',
			inputmethods: [ 'da-normforms' ]
		},
		de: {
			autonym: 'Deutsch',
			inputmethods: [ 'de-transliteration' ]
		},
		diq: {
			autonym: 'Kirdkî',
			inputmethods: [ 'ku-h', 'ku-tr' ]
		},
		doi: {
			autonym: 'डोगरी',
			inputmethods: [ 'doi-inscript2' ]
		},
		en: {
			autonym: 'English',
			inputmethods: [ 'ipa-sil', 'ipa-x-sampa' ]
		},
		el: {
			autonym: 'Ελληνικά',
			inputmethods: [ 'el-kbd' ]
		},
		eo: {
			autonym: 'Esperanto',
			inputmethods: [ 'eo-transliteration', 'eo-h', 'eo-h-f', 'eo-plena', 'eo-q', 'eo-vi', 'eo-x' ]
		},
		fa: {
			autonym: 'فارسی',
			inputmethods: [ 'fa-kbd' ]
		},
		fo: {
			autonym: 'Føroyskt',
			inputmethods: [ 'fo-normforms' ]
		},
		fi: {
			autonym: 'Suomi',
			inputmethods: [ 'fi-transliteration' ]
		},
		lrc: {
			autonym: 'لۊری شومالی',
			inputmethods: [ 'lrc-kbd' ]
		},
		lud: {
			autonym: 'lüüdi',
			inputmethods: [ 'lud-transliteration' ]
		},
		gom: {
			autonym: 'गोवा कोंकणी / Gova Konknni',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'gom-inscript2' ]
		},
		gu: {
			autonym: 'ગુજરાતી',
			inputmethods: [ 'gu-transliteration', 'gu-inscript', 'gu-inscript2', 'gu-phonetic' ]
		},
		he: {
			autonym: 'עברית',
			inputmethods: [ 'he-standard-2012-extonly', 'he-standard-2012' ]
		},
		hi: {
			autonym: 'हिन्दी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri', 'hi-phonetic', 'hi-inscript2' ]
		},
		hr: {
			autonym: 'Hrvatski',
			inputmethods: [ 'hr-kbd' ]
		},
		hy: {
			autonym: 'հայերեն',
			inputmethods: [ 'hy-ephonetic', 'hy-typewriter', 'hy-ephoneticalt', 'hy-emslegacy', 'hy-wmslegacy' ]
		},
		hne: {
			autonym: 'छत्तीसगढ़ी',
			inputmethods: [ 'hi-transliteration' ]
		},
		is: {
			autonym: 'Íslenska',
			inputmethods: [ 'is-normforms' ]
		},
		fonipa: {
			autonym: 'International Phonetic Alphabet',
			inputmethods: [ 'ipa-sil', 'ipa-x-sampa' ]
		},
		jv: {
			autonym: 'ꦧꦱꦗꦮ',
			inputmethods: [ 'jv-transliteration' ]
		},
		ka: {
			autonym: 'ქართული ენა',
			inputmethods: [ 'ka-transliteration', 'ka-kbd' ]
		},
		kbd: {
			autonym: 'адыгэбзэ (къэбэрдеибзэ)',
			inputmethods: [ 'cyrl-palochka' ]
		},
		kk: {
			autonym: 'Қазақша',
			inputmethods: [ 'kk-kbd', 'kk-arabic' ]
		},
		km: {
			autonym: 'ភាសា​ខ្មែរ',
			inputmethods: [ 'km-nidakyk' ]
		},
		kn: {
			autonym: 'ಕನ್ನಡ',
			inputmethods: [ 'kn-transliteration', 'kn-inscript', 'kn-kgp', 'kn-inscript2' ]
		},
		ks: {
			autonym: 'कॉशुर / کٲشُر',
			inputmethods: [ 'ks-inscript', 'ks-kbd' ]
		},
		ky: {
			autonym: 'Кыргыз',
			inputmethods: [ 'ky-cyrl-alt' ]
		},
		kab: {
			autonym: 'ⵜⴰⵇⴱⴰⵢⵍⵉⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		ku: {
			autonym: 'Kurdî',
			inputmethods: [ 'ku-h', 'ku-tr' ]
		},
		lbe: {
			autonym: 'лакку',
			inputmethods: [ 'cyrl-palochka' ]
		},
		lez: {
			autonym: 'лезги',
			inputmethods: [ 'cyrl-palochka' ]
		},
		lo: {
			autonym: 'ລາວ',
			inputmethods: [ 'lo-kbd' ]
		},
		mai: {
			autonym: 'मैथिली',
			inputmethods: [ 'mai-inscript', 'mai-inscript2' ]
		},
		mh: {
			autonym: 'Kajin M̧ajeļ',
			inputmethods: [ 'mh' ]
		},
		ml: {
			autonym: 'മലയാളം',
			inputmethods: [ 'ml-transliteration', 'ml-inscript', 'ml-inscript2' ]
		},
		mn: {
			autonym: 'Монгол',
			inputmethods: [ 'mn-cyrl' ]
		},
		mni: {
			autonym: 'Manipuri',
			inputmethods: [ 'mni-inscript2' ]
		},
		mr: {
			autonym: 'मराठी',
			inputmethods: [ 'mr-transliteration', 'mr-inscript2', 'mr-inscript', 'mr-phonetic' ]
		},
		my: {
			autonym: 'မြန်မာ',
			inputmethods: [ 'my-xkb' ]
		},
		ne: {
			autonym: 'नेपाली',
			inputmethods: [ 'ne-transliteration', 'ne-inscript2', 'ne-inscript', 'ne-rom', 'ne-trad' ]
		},
		'new': {
			autonym: 'नेपाल भाषा',
			inputmethods: [ 'hi-transliteration', 'hi-inscript' ]
		},
		nb: {
			autonym: 'Norsk (bokmål)',
			inputmethods: [ 'nb-normforms', 'nb-tildeforms' ]
		},
		nn: {
			autonym: 'Norsk (nynorsk)',
			inputmethods: [ 'nb-normforms', 'nn-tildeforms' ]
		},
		or: {
			autonym: 'ଓଡ଼ିଆ',
			inputmethods: [ 'or-phonetic', 'or-transliteration', 'or-inscript', 'or-inscript2', 'or-lekhani', 'or-OdiScript' ]
		},
		pa: {
			autonym: 'ਪੰਜਾਬੀ',
			inputmethods: [ 'pa-transliteration', 'pa-inscript', 'pa-phonetic', 'pa-inscript2', 'pa-jhelum' ]
		},
		rif: {
			autonym: 'ⵜⴰⵔⵉⴼⵉⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		ru: {
			autonym: 'русский',
			inputmethods: [ 'ru-jcuken', 'ru-kbd', 'ru-phonetic', 'ru-yawerty' ]
		},
		sah: {
			autonym: 'саха тыла',
			inputmethods: [ 'sah-transliteration' ]
		},
		sa: {
			autonym: 'संस्कृत',
			inputmethods: [ 'sa-transliteration', 'sa-inscript2', 'sa-inscript', 'sa-iast' ]
		},
		sat: {
			autonym: 'संताली (ᱥᱟᱱᱛᱟᱞᱤ)',
			inputmethods: [ 'sat-inscript2', 'sat-inscript2-ol-chiki', 'sat-sarjom-baha' ]
		},
		sd: {
			autonym: 'सिंधी',
			inputmethods: [ 'sd-inscript2' ]
		},
		sdh: {
			autonym: 'کوردی خوارگ',
			inputmethods: [ 'sdh-kbd' ]
		},
		se: {
			autonym: 'Davvisámegiella',
			inputmethods: [ 'se-normforms' ]
		},
		shi: {
			autonym: 'ⵜⴰⵛⵍⵃⵉⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		si: {
			autonym: 'සිංහල',
			inputmethods: [ 'si-singlish', 'si-wijesekara' ]
		},
		sk: {
			autonym: 'Slovenčina',
			inputmethods: [ 'sk-kbd' ]
		},
		sr: {
			autonym: 'Српски / srpski',
			inputmethods: [ 'sr-kbd' ]
		},
		sv: {
			autonym: 'Svenska',
			inputmethods: [ 'sv-normforms' ]
		},
		ta: {
			autonym: 'தமிழ்',
			inputmethods: [ 'ta-transliteration', 'ta-99', 'ta-inscript', 'ta-bamini', 'ta-inscript2' ]
		},
		tcy: {
			autonym: 'ತುಳು',
			inputmethods: [ 'kn-transliteration' ]
		},
		te: {
			autonym: 'తెలుగు',
			inputmethods: [ 'te-transliteration', 'te-inscript', 'te-inscript2', 'te-apple', 'te-modular' ]
		},
		th: {
			autonym: 'ไทย',
			inputmethods: [ 'th-kedmanee', 'th-pattachote' ]
		},
		tkr: {
			autonym: 'цӀаӀхна миз',
			inputmethods: [ 'cyrl-palochka' ]
		},
		tzm: {
			autonym: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		udm: {
			autonym: 'удмурт',
			inputmethods: [ 'udm-alt' ]
		},
		uk: {
			autonym: 'Українська',
			inputmethods: [ 'uk-kbd' ]
		},
		ug: {
			autonym: 'ئۇيغۇرچە / Uyghurche',
			inputmethods: [ 'ug-kbd' ]
		},
		ur: {
			autonym: 'اردو',
			inputmethods: [ 'ur-transliteration', 'ur-phonetic' ]
		},
		uz: {
			autonym: 'Oʻzbekcha',
			inputmethods: [ 'uz-kbd' ]
		},
		vec: {
			autonym: 'Venetian',
			inputmethods: [ 'vec-GVU' ]
		},
		yo: {
			autonym: 'Yorùbá',
			inputmethods: [ 'yo-alt' ]
		}
	} );

}( jQuery ) );
