( function ( $ ) {
	'use strict';

	// All keys have quotes for consistency
	/* eslint-disable quote-props */
	$.extend( $.ime.sources, {
		'ach-tilde': {
			name: 'Acholi tilde',
			source: 'rules/ach/ach-tilde.js'
		},
		'af-tilde': {
			name: 'Afrikaans tilde',
			source: 'rules/af/af-tilde.js'
		},
		'ajg-tilde': {
			name: 'Aja tilde',
			source: 'rules/ajg/ajg-tilde.js'
		},
		'ak-qx': {
			name: 'Akan QX replacement',
			source: 'rules/ak/ak-qx.js'
		},
		'ak-tilde': {
			name: 'Akan tilde',
			source: 'rules/ak/ak-tilde.js'
		},
		'akb-keyboard': {
			name: 'Angkola Keyboard',
			source: 'rules/akb/akb-keyboard.js'
		},
		'am-transliteration': {
			name: 'ትራንስልተራትዖን',
			source: 'rules/am/am-transliteration.js'
		},
		'ann-tilde': {
			name: 'Obolo tilde',
			source: 'rules/ann/ann-tilde.js'
		},
		'ar-kbd': {
			name: 'لوحة المفاتيح العربية',
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
		'ban-transliteration': {
			name: 'Balinese Transliteration',
			source: 'rules/ban/ban-transliteration.js'
		},
		'bas-tilde': {
			name: 'Ɓasaá tilde',
			source: 'rules/bas/bas-tilde.js'
		},
		'bbc-transliteration': {
			name: 'Toba Transliteration',
			source: 'rules/bbc/bbc-transliteration.js'
		},
		'bci-tilde': {
			name: 'Baoulé tilde keyboard',
			source: 'rules/bci/bci-tilde.js'
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
		'bfa-tilde': {
			name: 'Bari Tilde',
			source: 'rules/bfa/bfa-tilde.js'
		},
		'bgn-kbd': {
			name: 'روچ کپتین بلوچی',
			source: 'rules/bgn/bgn-kbd.js'
		},
		'bin-tilde': {
			name: 'Edo tilde',
			source: 'rules/bin/bin-tilde.js'
		},
		'bkm-tilde': {
			name: 'Kom tilde',
			source: 'rules/bkm/bkm-tilde.js'
		},
		'bm-alt': {
			name: 'Bamanankan Alt',
			source: 'rules/bm/bm-alt.js'
		},
		'bm-tilde': {
			name: 'Bamanankan tilde',
			source: 'rules/bm/bm-tilde.js'
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
			name: 'জাতীয় কিবোর্ড',
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
		'bo-sambhota': {
			name: 'Tibetan Sambhota',
			source: 'rules/bo/bo-sambhota.js'
		},
		'bol-tilde': {
			name: 'Bole - tilde',
			source: 'rules/bol/bol-tilde.js'
		},
		'bom-tilde': {
			name: 'Bèrom Tilde',
			source: 'rules/bom/bom-tilde.js'
		},
		'brx-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/brx/brx-inscript.js'
		},
		'brx-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/brx/brx-inscript2.js'
		},
		'btd-keyboard': {
			name: 'Pakpak (Dairi) Keyboard',
			source: 'rules/btd/btd-keyboard.js'
		},
		'btm-keyboard': {
			name: 'Mandailing Keyboard',
			source: 'rules/btm/btm-keyboard.js'
		},
		'btm-transliteration': {
			name: 'Mandailing Transliteration',
			source: 'rules/btm/btm-transliteration.js'
		},
		'bts-keyboard': {
			name: 'Simalungun Keyboard',
			source: 'rules/bts/bts-keyboard.js'
		},
		'btx-keyboard': {
			name: 'Karo Keyboard',
			source: 'rules/btx/btx-keyboard.js'
		},
		'btz-keyboard': {
			name: 'Alas Kluet Keyboard',
			source: 'rules/btz/btz-keyboard.js'
		},
		'bwr-tilde': {
			name: 'Bura tilde',
			source: 'rules/bwr/bwr-tilde.js'
		},
		'byn-geezim': {
			name: 'ብሊን',
			source: 'rules/byn/byn-geezim.js'
		},
		'chn-tilde': {
			name: 'Chinook wawa tilde',
			source: 'rules/chn/chn-tilde.js'
		},
		'chr-translit': {
			name: 'Cherokee Transliteration',
			source: 'rules/chr/chr-translit.js'
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
		'cko-tilde': {
			name: 'Anufo tilde',
			source: 'rules/cko/cko-tilde.js'
		},
		'cv-cyr-altgr': {
			name: 'Чăвашла (AltGr)',
			source: 'rules/cv/cv-cyr-altgr.js'
		},
		'cv-cyr-numbers': {
			name: 'Чăвашла (цифрилисем)',
			source: 'rules/cv/cv-cyr-numbers.js'
		},
		'cv-lat-altgr': {
			name: 'Căvašla (AltGr)',
			source: 'rules/cv/cv-lat-altgr.js'
		},
		'cyrl-palochka': {
			name: 'Palochka',
			source: 'rules/cyrl/cyrl-palochka.js'
		},
		'da-normforms': {
			name: 'Brug translitteration',
			source: 'rules/da/da-normforms.js'
		},
		'dag-alt': {
			name: 'Dagbani Alt',
			source: 'rules/dag/dag-alt.js'
		},
		'dag-tilde': {
			name: 'Dagbani tilde',
			source: 'rules/dag/dag-tilde.js'
		},
		'ddn-tilde': {
			name: 'Dinde Tilde',
			source: 'rules/ddn/ddn-tilde.js'
		},
		'de-transliteration': {
			name: 'Deutsch Tilde',
			source: 'rules/de/de-transliteration.js'
		},
		'din-fqsx': {
			name: 'Dinka FQSX',
			source: 'rules/din/din-fqsx.js'
		},
		'din-tilde': {
			name: 'Dinka tilde',
			source: 'rules/din/din-tilde.js'
		},
		'doi-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/doi/doi-inscript2.js'
		},
		'dua-tilde': {
			name: 'Duala tilde keyboard',
			source: 'rules/dua/dua-tilde.js'
		},
		'ee-tilde': {
			name: 'Ewe Tilde',
			source: 'rules/ee/ee-tilde.js'
		},
		'efi-tilde': {
			name: 'Efik - tilde',
			source: 'rules/efi/efi-tilde.js'
		},
		'ekp-tilde': {
			name: 'Ẹkpeye',
			source: 'rules/ekp/ekp-tilde.js'
		},
		'el-kbd': {
			name: 'Τυπική πληκτρολόγιο',
			source: 'rules/el/el-kbd.js'
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
		'eo-transliteration': {
			name: 'transliterigo',
			source: 'rules/eo/eo-transliteration.js'
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
		'ff-alt': {
			name: 'Fulfulde alt',
			source: 'rules/ff/ff-alt.js'
		},
		'ff-tilde': {
			name: 'Fulfulde tilde',
			source: 'rules/ff/ff-tilde.js'
		},
		'fi-transliteration': {
			name: 'translitterointi',
			source: 'rules/fi/fi-transliteration.js'
		},
		'fo-normforms': {
			name: 'Føroyskt',
			source: 'rules/fo/fo-normforms.js'
		},
		'fon-tilde': {
			name: 'Fon Tilde',
			source: 'rules/fon/fon-tilde.js'
		},
		'fvr-tilde': {
			name: 'Fur Tilde',
			source: 'rules/fvr/fvr-tilde.js'
		},
		'gaa-cqx': {
			name: 'Ga CQX replacement',
			source: 'rules/gaa/gaa-cqx.js'
		},
		'gaa-tilde': {
			name: 'Ga tilde',
			source: 'rules/gaa/gaa-tilde.js'
		},
		'gom-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/gom/gom-inscript2.js'
		},
		'got-standard': {
			name: '𐌲𐌿𐍄𐌹𐍃𐌺𐌰 𐍂𐌰𐌶𐌳𐌰',
			source: 'rules/got/got-standard.js'
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
		'gur-tilde': {
			name: 'Farefare tilde',
			source: 'rules/gur/gur-tilde.js'
		},
		'ha-tilde': {
			name: 'Hausa - tilde',
			source: 'rules/ha/ha-tilde.js'
		},
		'he-standard-2012': {
			name: 'עברית עם ניקוד על בסיס אנגלית',
			source: 'rules/he/he-standard-2012.js'
		},
		'he-standard-2012-extonly': {
			name: 'עברית עם ניקוד',
			source: 'rules/he/he-standard-2012-extonly.js'
		},
		'hi-bolnagri': {
			name: 'बोलनागरी',
			source: 'rules/hi/hi-bolnagri.js'
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
		'hi-transliteration': {
			name: 'लिप्यंतरण',
			source: 'rules/hi/hi-transliteration.js'
		},
		'hoc-latn-tilde': {
			name: 'Ho Latin Tilde',
			source: 'rules/hoc-latn/hoc-latn-tilde.js'
		},
		'hoc-transliteration': {
			name: 'Ho transliteration',
			source: 'rules/hoc/hoc-transliteration.js'
		},
		'hr-kbd': {
			name: 'Croatian kbd',
			source: 'rules/hr/hr-kbd.js'
		},
		'hy-emslegacy': {
			name: 'Մայքրոսոֆթի հին արևելահայերեն',
			source: 'rules/hy/hy-emslegacy.js'
		},
		'hy-ephonetic': {
			name: 'Հնչյունային դասավորություն',
			source: 'rules/hy/hy-ephonetic.js'
		},
		'hy-ephoneticalt': {
			name: 'Հնչյունային նոր (R→Ր, F→Թ)',
			source: 'rules/hy/hy-ephoneticalt.js'
		},
		'hy-typewriter': {
			name: 'Գրամեքենայի դասավորություն',
			source: 'rules/hy/hy-typewriter.js'
		},
		'hy-wmslegacy': {
			name: 'Մայքրոսոֆթի հին արևմտահայերեն',
			source: 'rules/hy/hy-wmslegacy.js'
		},
		'ibb-tilde': {
			name: 'Ibibio - tilde',
			source: 'rules/ibb/ibb-tilde.js'
		},
		'id-jawi': {
			name: 'Jawi Keyboard',
			source: 'rules/id/id-jawi.js'
		},
		'id-keyboard': {
			name: 'Indonesian - Suku',
			source: 'rules/id/id-keyboard.js'
		},
		'ig-tilde': {
			name: 'Igbo - tilde',
			source: 'rules/ig/ig-tilde.js'
		},
		'igl-tilde': {
			name: 'Igala - tilde',
			source: 'rules/igl/igl-tilde.js'
		},
		'ipa-sil': {
			name: 'International Phonetic Alphabet - SIL',
			source: 'rules/fonipa/ipa-sil.js'
		},
		'ipa-x-sampa': {
			name: 'International Phonetic Alphabet - X-SAMPA',
			source: 'rules/fonipa/ipa-x-sampa.js'
		},
		'is-normforms': {
			name: 'Venjuleg eyðublöð',
			source: 'rules/is/is-normforms.js'
		},
		'ish-tilde': {
			name: 'Esan Awain tilde',
			source: 'rules/ish/ish-tilde.js'
		},
		'jab-tilde': {
			name: 'Hyam tilde',
			source: 'rules/jab/jab-tilde.js'
		},
		'jac-tilde': {
			name: 'Jakaltek tilde',
			source: 'rules/jac/jac-tilde.js'
		},
		'jv-keyboard': {
			name: 'Jawa Latin extended',
			source: 'rules/jv/jv-keyboard.js'
		},
		'jv-kongres': {
			name: 'Kongres Aksara Jawa',
			source: 'rules/jv-java/jv-kongres.js'
		},
		'jv-transliteration': {
			name: 'Transliteration',
			source: 'rules/jv-java/jv-transliteration.js'
		},
		'ka-kbd': {
			name: 'სტანდარტული კლავიატურის',
			source: 'rules/ka/ka-kbd.js'
		},
		'ka-transliteration': {
			name: 'ტრანსლიტერაცია',
			source: 'rules/ka/ka-transliteration.js'
		},
		'kab-tilde': {
			name: 'Taqbaylit Alatin tilde',
			source: 'rules/kab/kab-tilde.js'
		},
		'kaj-tilde': {
			name: 'Jju tilde',
			source: 'rules/kaj/kaj-tilde.js'
		},
		'kbp-tilde': {
			name: 'Kabɩyɛ tilde',
			source: 'rules/kbp/kbp-tilde.js'
		},
		'kcg-tilde': {
			name: 'Tyap tilde',
			source: 'rules/kcg/kcg-tilde.js'
		},
		'ki-tilde': {
			name: 'Gĩkũyũ',
			source: 'rules/ki/ki-tilde.js'
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
		'kn-kgp': {
			name: 'KGP/Nudi/KP Rao',
			source: 'rules/kn/kn-kgp.js'
		},
		'kn-transliteration': {
			name: 'ಲಿಪ್ಯಂತರಣ',
			source: 'rules/kn/kn-transliteration.js'
		},
		'ko-rr': {
			name: 'Korean Revised Romanization',
			source: 'rules/ko/ko-rr.js'
		},
		'ko-phonetic': {
			name: 'Korean Phonetic',
			source: 'rules/ko/ko-phonetic.js'
		},
		'kr-tilde': {
			name: 'Kanuri tilde',
			source: 'rules/kr/kr-tilde.js'
		},
		'kri-tilde': {
			name: 'Krio tilde',
			source: 'rules/kri/kri-tilde.js'
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
		'kus-tilde': {
			name: 'Kusaal tilde',
			source: 'rules/kus/kus-tilde.js'
		},
		'ky-cyrl-alt': {
			name: 'Кыргыз Alt',
			source: 'rules/ky/ky-cyrl-alt.js'
		},
		'laj-tilde': {
			name: 'Lango tilde',
			source: 'rules/laj/laj-tilde.js'
		},
		'lg-tilde': {
			name: 'Luganda tilde',
			source: 'rules/lg/lg-tilde.js'
		},
		'ln-tilde': {
			name: 'Lingála tilde',
			source: 'rules/ln/ln-tilde.js'
		},
		'lo-kbd': {
			name: 'າຶກ',
			source: 'rules/lo/lo-kbd.js'
		},
		'lrc-kbd': {
			name: 'لۊری شومالی',
			source: 'rules/lrc/lrc-kbd.js'
		},
		'lud-transliteration': {
			name: 'lud',
			source: 'rules/lud/lud-transliteration.js'
		},
		'lut-tulalip': {
			name: 'Lushootseed Tulalip',
			source: 'rules/lut/lut-tulalip.js'
		},
		'mad-tilde': {
			name: 'Madhurâ tilde',
			source: 'rules/mad/mad-tilde.js'
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
		'maw-tilde': {
			name: 'Mampruli tilde',
			source: 'rules/maw/maw-tilde.js'
		},
		'mg-tilde': {
			name: 'Malagasy tilde',
			source: 'rules/mg/mg-tilde.js'
		},
		'mh-replace': {
			name: 'Kajin M̧ajeļ',
			source: 'rules/mh/mh-replace.js'
		},
		'ml-inscript': {
			name: 'ഇൻസ്ക്രിപ്റ്റ്',
			source: 'rules/ml/ml-inscript.js'
		},
		'ml-inscript2': {
			name: 'ഇൻസ്ക്രിപ്റ്റ് 2',
			source: 'rules/ml/ml-inscript2.js'
		},
		'ml-transliteration': {
			name: 'ലിപ്യന്തരണം',
			source: 'rules/ml/ml-transliteration.js'
		},
		'mn-cyrl': {
			name: 'Кирилл',
			source: 'rules/mn/mn-cyrl.js'
		},
		'mn-todo': {
			name: 'ᡐᡆᡑᡆ ᡋᡅᡔᡅᡎ᠌',
			source: 'rules/mn/mn-todo.js'
		},
		'mn-todoali': {
			name: 'Todo Mongolian Ali-gali',
			source: 'rules/mn/mn-todoali.js'
		},
		'mn-trad': {
			name: 'ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ᠌',
			source: 'rules/mn/mn-trad.js'
		},
		'mn-tradali': {
			name: 'Traditional Mongolian Ali-gali',
			source: 'rules/mn/mn-tradali.js'
		},
		'mnc-scripts': {
			name: 'ᠮᠠᠨᠵᡠ',
			source: 'rules/mnc/mnc-scripts.js'
		},
		'mnc-ali': {
			name: 'Manchu Ali-gali',
			source: 'rules/mnc/mnc-ali.js'
		},
		'mni-inscript2': {
			name: 'ইনস্ক্ৰিপ্ট ২',
			source: 'rules/mni/mni-inscript2.js'
		},
		'mns-backslash': {
			name: 'Mansi backslash',
			source: 'rules/mns/mns-backslash.js'
		},
		'mnw-simplified-anonta': {
			name: 'Mon Simplified Anonta',
			source: 'rules/mnw/mnw-simplified-anonta.js'
		},
		'mr-inscript': {
			name: 'मराठी लिपी',
			source: 'rules/mr/mr-inscript.js'
		},
		'mr-inscript2': {
			name: 'मराठी इनस्क्रिप्ट २',
			source: 'rules/mr/mr-inscript2.js'
		},
		'mr-phonetic': {
			name: 'फोनेटिक',
			source: 'rules/mr/mr-phonetic.js'
		},
		'mr-transliteration': {
			name: 'अक्षरांतरण',
			source: 'rules/mr/mr-transliteration.js'
		},
		'mul-bf': {
			name: 'Burkina Faso tilde keyboard',
			source: 'rules/mul-bf/mul-bf.js'
		},
		'mul-click-tilde': {
			name: 'Click consonants keyboard',
			source: 'rules/mul-click/mul-click-tilde.js'
		},
		'mul-cm': {
			name: 'General Alphabet of Cameroon Languages tilde keyboard',
			source: 'rules/mul-cm/mul-cm.js'
		},
		'my-mm3': {
			name: 'မြန်မာ၃ လက်ကွက်',
			source: 'rules/my/my-mm3.js'
		},
		'my-xkb': {
			name: 'မြန်မာဘာသာ xkb',
			source: 'rules/my/my-xkb.js'
		},
		'nan-latn-pehoeji-transliteration': {
			name: '閩南語白話字IME / Bân-lâm-gí Pe̍h-ōe-jī IME',
			source: 'rules/nan/nan-latn-pehoeji-transliteration.js'
		},
		'nb-normforms': {
			name: 'Normal transliterasjon',
			source: 'rules/nb/nb-normforms.js'
		},
		'nb-tildeforms': {
			name: 'Tildemerket transliterasjon',
			source: 'rules/nb/nb-tildeforms.js'
		},
		'ne-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/ne/ne-inscript.js'
		},
		'ne-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/ne/ne-inscript2.js'
		},
		'ne-rom': {
			name: 'Romanized',
			source: 'rules/ne/ne-rom.js'
		},
		'ne-trad': {
			name: 'Traditional',
			source: 'rules/ne/ne-trad.js'
		},
		'ne-transliteration': {
			name: 'ट्रांस्लितेरेशन',
			source: 'rules/ne/ne-transliteration.js'
		},
		'nia-tilde': {
			name: 'Li Niha tilde',
			source: 'rules/nia/nia-tilde.js'
		},
		'nmz-tilde': {
			name: 'Nawdm tilde',
			source: 'rules/nmz/nmz-tilde.js'
		},
		'nqo-standard-qwerty': {
			name: "N'Ko standard QWERTY",
			source: 'rules/nqo/nqo-standard-qwerty.js'
		},
		'nqo-transliteration': {
			name: "N'Ko transliteration",
			source: 'rules/nqo/nqo-transliteration.js'
		},
		'nso-tilde': {
			name: 'Sesotho sa Leboa tilde',
			source: 'rules/nso/nso-tilde.js'
		},
		'nus-tilde': {
			name: 'Thok Naath tilde',
			source: 'rules/nus/nus-tilde.js'
		},
		'ny-tilde': {
			name: 'Chichewa / Nyanja tilde',
			source: 'rules/ny/ny-tilde.js'
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
		'or-OdiScript': {
			name: 'ଓଡ଼ିସ୍କ୍ରିପ୍ଟ',
			source: 'rules/or/or-OdiScript.js'
		},
		'or-phonetic': {
			name: 'ଫୋନେଟିକ',
			source: 'rules/or/or-phonetic.js'
		},
		'or-transliteration': {
			name: 'ଟ୍ରାନ୍ସଲିଟରେସନ',
			source: 'rules/or/or-transliteration.js'
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
		'pa-phonetic': {
			name: 'ਫੋਨੇਟਿਕ',
			source: 'rules/pa/pa-phonetic.js'
		},
		'pa-transliteration': {
			name: 'ਲਿਪਾਂਤਰਨ',
			source: 'rules/pa/pa-transliteration.js'
		},
		'phagspa': {
			name: 'PhagsPa',
			source: 'rules/mn/phagspa.js'
		},
		'pms': {
			name: 'Piemontèis',
			source: 'rules/pms/pms.js'
		},
		'pnt-tilde': {
			name: 'Pontic tilde',
			source: 'rules/pnt/pnt-tilde.js'
		},
		'roa-tara-GVU': {
			name: 'Tarandine',
			source: 'rules/roa-tara/roa-tara.js'
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
		'ses-tilde': {
			name: 'Koyraboro Senni tilde',
			source: 'rules/ses/ses-tilde.js'
		},
		'sg-tilde': {
			name: 'Sängö',
			source: 'rules/sg/sg-tilde.js'
		},
		'shn-standard': {
			name: 'တႆး',
			source: 'rules/shn/shn-standard.js'
		},
		'si-singlish': {
			name: 'සිංග්ලිෂ්',
			source: 'rules/si/si-singlish.js'
		},
		'si-wijesekara': {
			name: 'විජේසේකර',
			source: 'rules/si/si-wijesekara.js'
		},
		'sjo-scripts': {
			name: 'ᠰᡞᠪᡝ',
			source: 'rules/sjo/sjo-scripts.js'
		},
		'sk-kbd': {
			name: 'Štandardná',
			source: 'rules/sk/sk-kbd.js'
		},
		'sr-kbd': {
			name: 'Стандардна',
			source: 'rules/sr/sr-kbd.js'
		},
		'st-tilde': {
			name: 'Sesotho tilde',
			source: 'rules/st/st-tilde.js'
		},
		'str-sencoten': {
			name: 'SENĆOŦEN keyboard',
			source: 'rules/str/str-sencoten.js'
		},
		'su-keyboard': {
			name: 'Sundanese keyboard',
			source: 'rules/su/su-keyboard.js'
		},
		'sv-normforms': {
			name: 'Normal forms',
			source: 'rules/sv/sv-normforms.js'
		},
		'szl-tilde': {
			name: 'Silesian tilde',
			source: 'rules/szl/szl-tilde.js'
		},
		'ta-99': {
			name: 'தமிழ்99',
			source: 'rules/ta/ta-99.js'
		},
		'ta-bamini': {
			name: 'பாமினி',
			source: 'rules/ta/ta-bamini.js'
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
		'te-apple': {
			name: 'ఆపిల్',
			source: 'rules/te/te-apple.js'
		},
		'te-inscript': {
			name: 'ఇన్\u200dస్క్రిప్ట్',
			source: 'rules/te/te-inscript.js'
		},
		'te-inscript2': {
			name: 'ఇన్\u200dస్క్రిప్ట్ 2',
			source: 'rules/te/te-inscript2.js'
		},
		'te-modular': {
			name: 'మాడ్యులర్',
			source: 'rules/te/te-modular.js'
		},
		'te-transliteration': {
			name: 'లిప్యంతరీకరణ',
			source: 'rules/te/te-transliteration.js'
		},
		'th-kedmanee': {
			name: 'เกษมณี',
			source: 'rules/th/th-kedmanee.js'
		},
		'th-pattachote': {
			name: 'ปัตตะโชติ',
			source: 'rules/th/th-pattachote.js'
		},
		'ti-geezim': {
			name: 'ትግርኛ',
			source: 'rules/ti/ti-geezim.js'
		},
		'tig-geezim': {
			name: 'Tigre GeezIM',
			source: 'rules/tig/tig-geezim.js'
		},
		'tn-tilde': {
			name: 'Setswana tilde',
			source: 'rules/tn/tn-tilde.js'
		},
		'tum-tilde': {
			name: 'ChiTumbuka tilde',
			source: 'rules/tum/tum-tilde.js'
		},
		'udm-alt': {
			name: 'Удмурт ALT',
			source: 'rules/udm/udm-alt.js'
		},
		'ug-kbd': {
			name: 'Uyghur kbd',
			source: 'rules/ug/ug-kbd.js'
		},
		'uk-kbd': {
			name: 'кбд',
			source: 'rules/uk/uk-kbd.js'
		},
		'ur-phonetic': {
			name: 'صوتی',
			source: 'rules/ur/ur-phonetic.js'
		},
		'ur-transliteration': {
			name: 'ٹرانسلٹریشن',
			source: 'rules/ur/ur-transliteration.js'
		},
		'uz-kbd': {
			name: 'Uzbek kbd',
			source: 'rules/uz/uz-kbd.js'
		},
		'vai-transliteration': {
			name: 'Vai transliteration',
			source: 'rules/vai/vai-transliteration.js'
		},
		've-tilde': {
			name: 'TshiVenḓa tilde',
			source: 'rules/ve/ve-tilde.js'
		},
		'vec-GVU': {
			name: 'Vèneto',
			source: 'rules/vec/vec-GVU.js'
		},
		'wlx-tilde': {
			name: 'Waale tilde',
			source: 'rules/wlx/wlx-tilde.js'
		},
		'wo-alt': {
			name: 'Wolof Alt',
			source: 'rules/wo/wo-alt.js'
		},
		'wo-tilde': {
			name: 'Wolof tilde',
			source: 'rules/wo/wo-tilde.js'
		},
		'xon-tilde': {
			name: 'Likpakpaanl tilde',
			source: 'rules/xon/xon-tilde.js'
		},
		'yo-alt': {
			name: 'Yorùbá Alt',
			source: 'rules/yo/yo-alt.js'
		},
		'yo-tilde': {
			name: 'Yorùbá tilde',
			source: 'rules/yo/yo-tilde.js'
		},
		'zh-latn-pinyin-transliteration': {
			name: '拼音符号输入法 / 拼音符號輸入法',
			source: 'rules/zh/zh-latn-pinyin-transliteration.js'
		}
	} );
	/* eslint-disable quote-props */

	$.extend( $.ime.languages, {
		abr: {
			autonym: 'Abron',
			inputmethods: [ 'ak-qx', 'ak-tilde' ]
		},
		ach: {
			autonym: 'Acoli',
			inputmethods: [ 'ach-tilde' ]
		},
		ady: {
			autonym: 'адыгэбзэ',
			inputmethods: [ 'cyrl-palochka' ]
		},
		af: {
			autonym: 'Afrikaans',
			inputmethods: [ 'af-tilde' ]
		},
		ahr: {
			autonym: 'अहिराणी',
			inputmethods: [ 'mr-transliteration', 'mr-inscript' ]
		},
		ajg: {
			autonym: 'ajagbe',
			inputmethods: [ 'ajg-tilde' ]
		},
		akb: {
			autonym: 'Batak Angkola',
			inputmethods: [ 'akb-keyboard' ]
		},
		am: {
			autonym: 'አማርኛ',
			inputmethods: [ 'am-transliteration' ]
		},
		ann: {
			autonym: 'Obolo',
			inputmethods: [ 'ann-tilde' ]
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
		"ban-bali": {
			autonym: 'ᬩᬮᬶ',
			inputmethods: [ 'ban-transliteration' ]
		},
		bas: {
			autonym: 'ɓasaá',
			inputmethods: [ 'bas-tilde', 'mul-cm' ]
		},
		bbc: {
			autonym: 'Batak Toba',
			inputmethods: [ 'bbc-transliteration' ]
		},
		bci: {
			autonym: 'wawle',
			inputmethods: [ 'bci-tilde' ]
		},
		be: {
			autonym: 'беларуская',
			inputmethods: [ 'be-transliteration', 'be-latin', 'be-kbd' ]
		},
		'be-tarask': {
			autonym: 'беларуская (тарашкевіца)',
			inputmethods: [ 'be-transliteration', 'be-latin' ]
		},
		bfa: {
			autonym: 'Bari',
			inputmethods: [ 'bfa-tilde' ]
		},
		bgn: {
			autonym: 'روچ کپتین بلوچی',
			inputmethods: [ 'bgn-kbd' ]
		},
		bh: {
			autonym: 'भोजपुरी',
			inputmethods: [ 'hi-transliteration' ]
		},
		bho: {
			autonym: 'भोजपुरी',
			inputmethods: [ 'hi-transliteration' ]
		},
		bin: {
			autonym: 'Ẹdo',
			inputmethods: [ 'bin-tilde' ]
		},
		bkm: {
			autonym: 'Itaŋikom',
			inputmethods: [ 'bkm-tilde', 'mul-cm' ]
		},
		bm: {
			autonym: 'Bamanankan',
			inputmethods: [ 'bm-alt', 'bm-tilde' ]
		},
		bn: {
			autonym: 'বাংলা',
			inputmethods: [ 'bn-avro', 'bn-inscript', 'bn-nkb', 'bn-probhat', 'bn-inscript2' ]
		},
		bo: {
			autonym: 'བོད་ཡིག།',
			inputmethods: [ 'bo-ewts', 'bo-sambhota' ]
		},
		bol: {
			autonym: 'bòo pìkkà',
			inputmethods: [ 'bol-tilde' ]
		},
		bom: {
			autonym: 'bèrom',
			inputmethods: [ 'bom-tilde' ]
		},
		brx: {
			autonym: 'बोड़ो',
			inputmethods: [ 'brx-inscript', 'brx-inscript2' ]
		},
		btd: {
			autonym: 'Batak Dairi',
			inputmethods: [ 'btd-keyboard' ]
		},
		btm: {
			autonym: 'Batak Mandailing',
			inputmethods: [ 'btm-keyboard', 'btm-transliteration' ]
		},
		bts: {
			autonym: 'Sahap Simalungun',
			inputmethods: [ 'bts-keyboard' ]
		},
		btx: {
			autonym: 'cakap Karo',
			inputmethods: [ 'btx-keyboard' ]
		},
		btz: {
			autonym: 'Batak Alas-Kluet',
			inputmethods: [ 'btz-keyboard' ]
		},
		bum: {
			autonym: 'bulu',
			inputmethods: [ 'mul-cm' ]
		},
		bwr: {
			autonym: 'bura',
			inputmethods: [ 'bwr-tilde' ]
		},
		byn: {
			autonym: 'ብሊን',
			inputmethods: [ 'byn-geezim' ]
		},
		byv: {
			autonym: 'Mə̀dʉ̂mbɑ̀',
			inputmethods: [ 'mul-cm' ]
		},
		ce: {
			autonym: 'нохчийн',
			inputmethods: [ 'cyrl-palochka' ]
		},
		chn: {
			autonym: 'chinook wawa',
			inputmethods: [ 'chn-tilde' ]
		},
		chr: {
			autonym: 'ᏣᎳᎩ',
			inputmethods: [ 'chr-translit' ]
		},
		ckb: {
			autonym: 'کوردی',
			inputmethods: [ 'ckb-transliteration-arkbd', 'ckb-transliteration-fakbd', 'ckb-transliteration-lakbd' ]
		},
		cko: {
			autonym: 'Anufɔ',
			inputmethods: [ 'cko-tilde' ]
		},
		cv: {
			autonym: 'Чăвашла',
			inputmethods: [ 'cv-cyr-altgr', 'cv-lat-altgr', 'cv-cyr-numbers' ]
		},
		da: {
			autonym: 'Dansk',
			inputmethods: [ 'da-normforms' ]
		},
		dag: {
			autonym: 'Dagbani',
			inputmethods: [ 'dag-alt', 'dag-tilde' ]
		},
		dar: {
			autonym: 'дарган',
			inputmethods: [ 'cyrl-palochka' ]
		},
		ddn: {
			autonym: 'dendi',
			inputmethods: [ 'ddn-tilde' ]
		},
		de: {
			autonym: 'Deutsch',
			inputmethods: [ 'de-transliteration' ]
		},
		dga: {
			autonym: 'Dagaare',
			inputmethods: [ 'mul-bf' ]
		},
		din: {
			autonym: 'Thuɔŋjäŋ',
			inputmethods: [ 'din-fqsx', 'din-tilde' ]
		},
		diq: {
			autonym: 'Kirdkî',
			inputmethods: [ 'ku-h', 'ku-tr' ]
		},
		doi: {
			autonym: 'डोगरी',
			inputmethods: [ 'doi-inscript2' ]
		},
		dua: {
			autonym: 'Duálá',
			inputmethods: [ 'dua-tilde' ]
		},
		ee: {
			autonym: 'Èʋegbe',
			inputmethods: [ 'ee-tilde' ]
		},
		efi: {
			autonym: 'efịk',
			inputmethods: [ 'efi-tilde' ]
		},
		ekp: {
			autonym: 'ẹkpeye',
			inputmethods: [ 'ekp-tilde' ]
		},
		el: {
			autonym: 'Ελληνικά',
			inputmethods: [ 'el-kbd' ]
		},
		en: {
			autonym: 'English',
			inputmethods: [ 'ipa-sil', 'ipa-x-sampa' ]
		},
		eo: {
			autonym: 'Esperanto',
			inputmethods: [ 'eo-transliteration', 'eo-h', 'eo-h-f', 'eo-plena', 'eo-q', 'eo-vi', 'eo-x' ]
		},
		fa: {
			autonym: 'فارسی',
			inputmethods: [ 'fa-kbd' ]
		},
		fat: {
			autonym: 'mfantse',
			inputmethods: [ 'ak-qx', 'ak-tilde' ]
		},
		ff: {
			autonym: 'Fulfulde',
			inputmethods: [ 'ff-alt', 'ff-tilde' ]
		},
		fi: {
			autonym: 'Suomi',
			inputmethods: [ 'fi-transliteration' ]
		},
		fo: {
			autonym: 'Føroyskt',
			inputmethods: [ 'fo-normforms' ]
		},
		fon: {
			autonym: 'Fon',
			inputmethods: [ 'fon-tilde' ]
		},
		fvr: {
			autonym: 'poor’íŋ belé’ŋ',
			inputmethods: [ 'fvr-tilde' ]
		},
		fonipa: {
			autonym: 'International Phonetic Alphabet',
			inputmethods: [ 'ipa-sil', 'ipa-x-sampa' ]
		},
		gaa: {
			autonym: 'Ga',
			inputmethods: [ 'gaa-cqx', 'gaa-tilde' ]
		},
		gom: {
			autonym: 'गोंयची कोंकणी / Gõychi Konknni',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'gom-inscript2' ]
		},
		got: {
			autonym: '𐌲𐌿𐍄𐌹𐍃𐌺𐌰 𐍂𐌰𐌶𐌳𐌰',
			inputmethods: [ 'got-standard' ]
		},
		gu: {
			autonym: 'ગુજરાતી',
			inputmethods: [ 'gu-transliteration', 'gu-inscript', 'gu-inscript2', 'gu-phonetic' ]
		},
		gur: {
			autonym: 'farefare',
			inputmethods: [ 'gur-tilde' ]
		},
		ha: {
			autonym: 'Hausa',
			inputmethods: [ 'ha-tilde' ]
		},
		he: {
			autonym: 'עברית',
			inputmethods: [ 'he-standard-2012-extonly', 'he-standard-2012' ]
		},
		hi: {
			autonym: 'हिन्दी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri', 'hi-phonetic', 'hi-inscript2' ]
		},
		hne: {
			autonym: 'छत्तीसगढ़ी',
			inputmethods: [ 'hi-transliteration' ]
		},
		hoc: {
			autonym: '𑢹𑣉𑣉',
			inputmethods: [ 'hoc-transliteration' ]
		},
		'hoc-latn': {
			autonym: 'Ho',
			inputmethods: [ 'hoc-latn-tilde' ]
		},
		hr: {
			autonym: 'Hrvatski',
			inputmethods: [ 'hr-kbd' ]
		},
		hy: {
			autonym: 'հայերեն',
			inputmethods: [ 'hy-ephonetic', 'hy-typewriter', 'hy-ephoneticalt', 'hy-emslegacy', 'hy-wmslegacy' ]
		},
		ibb: {
			autonym: 'ibibio',
			inputmethods: [ 'ibb-tilde' ]
		},
		id: {
			autonym: 'Bahasa Indonesia',
			inputmethods: [ 'id-keyboard', 'id-jawi' ]
		},
		ig: {
			autonym: 'Igbo',
			inputmethods: [ 'ig-tilde' ]
		},
		igl: {
			autonym: 'Igala',
			inputmethods: [ 'igl-tilde' ]
		},
		inh: {
			autonym: 'гӀалгӀай',
			inputmethods: [ 'cyrl-palochka' ]
		},
		is: {
			autonym: 'Íslenska',
			inputmethods: [ 'is-normforms' ]
		},
		ish: {
			autonym: 'awain',
			inputmethods: [ 'ish-tilde' ]
		},
		jab: {
			autonym: 'Hyam',
			inputmethods: [ 'jab-tilde' ]
		},
		jac: {
			autonym: 'Abꞌxubꞌal Poptiꞌ',
			inputmethods: [ 'jac-tilde' ]
		},
		jv: {
			autonym: 'Jawa',
			inputmethods: ['jv-keyboard', 'jv-transliteration', 'jv-kongres']
		},
		'jv-java': {
			autonym: 'ꦗꦮ',
			inputmethods: [ 'jv-transliteration', 'jv-kongres' ,'jv-keyboard']
		},
		ka: {
			autonym: 'ქართული ენა',
			inputmethods: [ 'ka-transliteration', 'ka-kbd' ]
		},
		kab: {
			autonym: 'Taqbaylit / ⵜⴰⵇⴱⴰⵢⵍⵉⵜ',
			inputmethods: [ 'kab-tilde', 'ber-tfng' ]
		},
		kaj: {
			autonym: 'Jju',
			inputmethods: [ 'kaj-tilde' ]
		},
		kbd: {
			autonym: 'адыгэбзэ (къэбэрдеибзэ)',
			inputmethods: [ 'cyrl-palochka' ]
		},
		kbp: {
			autonym: 'Kabɩyɛ',
			inputmethods: [ 'kbp-tilde' ]
		},
		kcg: {
			autonym: 'Tyap',
			inputmethods: [ 'kcg-tilde' ]
		},
		ken: {
			autonym: 'kɛ́nyáŋ',
			inputmethods: [ 'mul-cm' ]
		},
		ki: {
			autonym: 'Gĩkũyũ',
			inputmethods: [ 'ki-tilde' ]
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
		ko: {
			autonym: '한국어',
			inputmethods: [ 'ko-rr', 'ko-phonetic' ]
		},
		kr: {
			autonym: 'kanuri',
			inputmethods: [ 'kr-tilde' ]
		},
		kri: {
			autonym: 'Krio',
			inputmethods: [ 'kri-tilde' ]
		},
		ks: {
			autonym: 'कॉशुर / کٲشُر',
			inputmethods: [ 'ks-inscript', 'ks-kbd' ]
		},
		ky: {
			autonym: 'Кыргыз',
			inputmethods: [ 'ky-cyrl-alt' ]
		},
		ku: {
			autonym: 'Kurdî',
			inputmethods: [ 'ku-h', 'ku-tr' ]
		},
		kus: {
			autonym: 'Kʋsaal',
			inputmethods: [ 'kus-tilde' ]
		},
		laj: {
			autonym: 'Lëblaŋo',
			inputmethods: [ 'laj-tilde' ]
		},
		lbe: {
			autonym: 'лакку',
			inputmethods: [ 'cyrl-palochka' ]
		},
		lez: {
			autonym: 'лезги',
			inputmethods: [ 'cyrl-palochka' ]
		},
		lg: {
			autonym: 'Luganda',
			inputmethods: [ 'lg-tilde' ]
		},
		ln: {
			autonym: 'Lingála',
			inputmethods: [ 'ln-tilde' ]
		},
		lo: {
			autonym: 'ລາວ',
			inputmethods: [ 'lo-kbd' ]
		},
		lrc: {
			autonym: 'لۊری شومالی',
			inputmethods: [ 'lrc-kbd' ]
		},
		lud: {
			autonym: 'lüüdi',
			inputmethods: [ 'lud-transliteration' ]
		},
		lut: {
			autonym: 'dxʷləšucid',
			inputmethods: [ 'lut-tulalip' ]
		},
		mad: {
			autonym: 'madhurâ',
			inputmethods: [ 'mad-tilde' ]
		},
		mai: {
			autonym: 'मैथिली',
			inputmethods: [ 'mai-inscript', 'mai-inscript2' ]
		},
		maw: {
			autonym: 'Ŋmampulli',
			inputmethods: [ 'maw-tilde' ]
		},
		mg: {
			autonym: 'Malagasy',
			inputmethods: [ 'mg-tilde' ]
		},
		mh: {
			autonym: 'Kajin M̧ajeļ',
			inputmethods: [ 'mh-replace' ]
		},
		ml: {
			autonym: 'മലയാളം',
			inputmethods: [ 'ml-transliteration', 'ml-inscript', 'ml-inscript2' ]
		},
		mn: {
			autonym: 'Монгол',
			inputmethods: [ 'mn-cyrl', 'mn-trad', 'mn-todo', 'mn-tradali', 'mn-todoali', 'phagspa' ]
		},
		mnc: {
			autonym: 'ᠮᠠᠨᠵᡠ',
			inputmethods: [ 'mnc-scripts', 'mnc-ali' ]
		},
		mni: {
			autonym: 'Manipuri',
			inputmethods: [ 'mni-inscript2' ]
		},
		mns: {
			autonym: 'ма̄ньси',
			inputmethods: [ 'mns-backslash' ]
		},
		mnw: {
			autonym: 'ဘာသာမန်',
			inputmethods: [ 'mnw-simplified-anonta' ]
		},
		mos: {
			autonym: 'moore',
			inputmethods: [ 'mul-bf' ]
		},
		mr: {
			autonym: 'मराठी',
			inputmethods: [ 'mr-transliteration', 'mr-inscript2', 'mr-inscript', 'mr-phonetic' ]
		},
		my: {
			autonym: 'မြန်မာ',
			inputmethods: [ 'my-mm3', 'my-xkb' ]
		},
		nan: {
			autonym: '閩南語 / Bân-lâm-gí',
			inputmethods: [ 'nan-latn-pehoeji-transliteration' ]
		},
		'nan-hani': {
			autonym: '閩南語（漢字）',
			inputmethods: [ 'nan-latn-pehoeji-transliteration' ]
		},
		'nan-hant': {
			autonym: '閩南語（傳統漢字）',
			inputmethods: [ 'nan-latn-pehoeji-transliteration' ]
		},
		'nan-latn-pehoeji': {
			autonym: 'Bân-lâm-gí (Pe̍h-ōe-jī)',
			inputmethods: [ 'nan-latn-pehoeji-transliteration' ]
		},
		'nan-latn-tailo': {
			autonym: 'Bân-lâm-gí (Tâi-lô)',
			inputmethods: [ 'nan-latn-pehoeji-transliteration' ]
		},
		naq: {
			autonym: 'Khoekhoegowab',
			inputmethods: [ 'mul-click-tilde' ]
		},
		nb: {
			autonym: 'Norsk (bokmål)',
			inputmethods: [ 'nb-normforms', 'nb-tildeforms' ]
		},
		ne: {
			autonym: 'नेपाली',
			inputmethods: [ 'ne-transliteration', 'ne-inscript2', 'ne-inscript', 'ne-rom', 'ne-trad' ]
		},
		'new': {
			autonym: 'नेपाल भाषा',
			inputmethods: [ 'hi-transliteration', 'hi-inscript' ]
		},
		nia: {
			autonym: 'li niha',
			inputmethods: [ 'nia-tilde' ]
		},
		nmz: {
			autonym: 'nawdm',
			inputmethods: [ 'nmz-tilde' ]
		},
		nn: {
			autonym: 'Norsk (nynorsk)',
			inputmethods: [ 'nb-normforms', 'nb-tildeforms' ]
		},
		nnh: {
			autonym: 'ngiembɔɔn',
			inputmethods: [ 'mul-cm' ]
		},
		nqo: {
			autonym: 'ߒߞߏ',
			inputmethods: [ 'nqo-standard-qwerty', 'nqo-transliteration' ]
		},
		nso: {
			autonym: 'Sesotho sa Leboa',
			inputmethods: [ 'nso-tilde' ]
		},
		nus: {
			autonym: 'Thok Naath',
			inputmethods: [ 'nus-tilde' ]
		},
		ny: {
			autonym: 'Chichewa',
			inputmethods: [ 'ny-tilde' ]
		},
		nzi: {
			autonym: 'Nzema',
			inputmethods: [ 'ak-tilde' ]
		},
		or: {
			autonym: 'ଓଡ଼ିଆ',
			inputmethods: [ 'or-phonetic', 'or-transliteration', 'or-inscript', 'or-inscript2', 'or-lekhani', 'or-OdiScript' ]
		},
		pa: {
			autonym: 'ਪੰਜਾਬੀ',
			inputmethods: [ 'pa-transliteration', 'pa-inscript', 'pa-phonetic', 'pa-inscript2', 'pa-jhelum' ]
		},
		pms: {
			autonym: 'Piemontèis',
			inputmethods: [ 'pms' ]
		},
		pnt: {
			autonym: 'Ποντιακά',
			inputmethods: [ 'pnt-tilde' ]
		},
		raj: {
			autonym: 'राजस्थानी',
			inputmethods: [ 'hi-transliteration', 'hi-inscript', 'hi-bolnagri', 'hi-phonetic', 'hi-inscript2' ]
		},
		rif: {
			autonym: 'ⵜⴰⵔⵉⴼⵉⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		'roa-tara': {
			autonym: 'Tarandine',
			inputmethods: [ 'roa-tara-GVU' ]
		},
		ru: {
			autonym: 'русский',
			inputmethods: [ 'ru-jcuken', 'ru-kbd', 'ru-phonetic', 'ru-yawerty' ]
		},
		sa: {
			autonym: 'संस्कृत',
			inputmethods: [ 'sa-transliteration', 'sa-inscript2', 'sa-inscript', 'sa-iast' ]
		},
		sah: {
			autonym: 'саха тыла',
			inputmethods: [ 'sah-transliteration' ]
		},
		sat: {
			autonym: 'ᱥᱟᱱᱛᱟᱞᱤ (संताली)',
			inputmethods: [ 'sat-sarjom-baha', 'sat-inscript2-ol-chiki', 'sat-inscript2' ]
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
		ses: {
			autonym: 'Koyraboro Senni',
			inputmethods: [ 'ses-tilde' ]
		},
		sg: {
			autonym: 'Sängö',
			inputmethods: [ 'sg-tilde' ]
		},
		shi: {
			autonym: 'ⵜⴰⵛⵍⵃⵉⵜ',
			inputmethods: [ 'ber-tfng' ]
		},
		shn: {
			autonym: 'တႆး',
			inputmethods: [ 'shn-standard' ]
		},
		si: {
			autonym: 'සිංහල',
			inputmethods: [ 'si-singlish', 'si-wijesekara' ]
		},
		sjo: {
			autonym: 'ᠰᡞᠪᡝ',
			inputmethods: [ 'sjo-scripts' ]
		},
		sk: {
			autonym: 'Slovenčina',
			inputmethods: [ 'sk-kbd' ]
		},
		sr: {
			autonym: 'Српски / srpski',
			inputmethods: [ 'sr-kbd' ]
		},
		st: {
			autonym: 'Sesotho',
			inputmethods: [ 'st-tilde' ]
		},
		str: {
			autonym: 'SENĆOŦEN',
			inputmethods: [ 'str-sencoten' ]
		},
		su: {
			autonym: 'Sunda',
			inputmethods: [ 'su-keyboard' ]
		},
		sv: {
			autonym: 'Svenska',
			inputmethods: [ 'sv-normforms' ]
		},
		szl: {
			autonym: 'Ślůnski',
			inputmethods: [ 'szl-tilde' ]
		},
		ta: {
			autonym: 'தமிழ்',
			inputmethods: [ 'ta-transliteration', 'ta-99', 'ta-inscript', 'ta-bamini', 'ta-inscript2' ]
		},
		tcy: {
			autonym: 'ತುಳು',
			inputmethods: [ 'kn-transliteration', 'kn-inscript', 'kn-kgp', 'kn-inscript2' ]
		},
		te: {
			autonym: 'తెలుగు',
			inputmethods: [ 'te-transliteration', 'te-inscript', 'te-inscript2', 'te-apple', 'te-modular' ]
		},
		th: {
			autonym: 'ไทย',
			inputmethods: [ 'th-kedmanee', 'th-pattachote' ]
		},
		ti: {
			autonym: 'ትግርኛ',
			inputmethods: [ 'ti-geezim' ]
		},
		tig: {
			autonym: 'ትግሬ',
			inputmethods: [ 'tig-geezim' ]
		},
		tkr: {
			autonym: 'цӀаӀхна миз',
			inputmethods: [ 'cyrl-palochka' ]
		},
		tn: {
			autonym: 'Setswana',
			inputmethods: [ 'tn-tilde' ]
		},
		tum: {
			autonym: 'ChiTumbuka',
			inputmethods: [ 'tum-tilde' ]
		},
		tw: {
			autonym: 'Twi',
			inputmethods: [ 'ak-qx', 'ak-tilde' ]
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
		ur: {
			autonym: 'اردو',
			inputmethods: [ 'ur-transliteration', 'ur-phonetic' ]
		},
		uz: {
			autonym: 'Oʻzbekcha',
			inputmethods: [ 'uz-kbd' ]
		},
		vai: {
			autonym: 'ꕙꔤ',
			inputmethods: [ 'vai-transliteration' ]
		},
		ve: {
			autonym: 'TshiVenḓa',
			inputmethods: [ 've-tilde' ]
		},
		vec: {
			autonym: 'Vèneto',
			inputmethods: [ 'vec-GVU' ]
		},
		wlx: {
			autonym: 'Waale',
			inputmethods: [ 'wlx-tilde' ]
		},
		wo: {
			autonym: 'Wolof',
			inputmethods: [ 'wo-alt', 'wo-tilde' ]
		},
		xon: {
			autonym: 'Likpakpaanl',
			inputmethods: [ 'xon-tilde' ]
		},
		yo: {
			autonym: 'Yorùbá',
			inputmethods: [ 'yo-alt', 'yo-tilde' ]
		},
		zh: {
			autonym: '中文',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		},
		'zh-cn': {
			autonym: '中文（中国大陆）',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		},
		'zh-hans': {
			autonym: '中文（简体）',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		},
		'zh-hant': {
			autonym: '中文（繁體）',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		},
		'zh-hk': {
			autonym: '中文（香港）',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		},
		'zh-mo': {
			autonym: '中文（澳門）',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		},
		'zh-my': {
			autonym: '中文（马来西亚）',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		},
		'zh-sg': {
			autonym: '中文（新加坡）',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		},
		'zh-tw': {
			autonym: '中文（臺灣）',
			inputmethods: [ 'zh-latn-pinyin-transliteration' ]
		}
	} );
}( jQuery ) );
