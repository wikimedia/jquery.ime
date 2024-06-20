( function ( $ ) {
	'use strict';
	var jawiKeyboard = {
		id: 'id-jawi',
		name: 'Jawi keyboard',
		description: 'Jawi keyboard for Indonesian Wikisource',
		date: '2023-09-21',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/jawi-keyboard',
		author: 'Benny Lin, Pungkas, Michael',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 1,
		patterns: [
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '', '$1' ], //escape characters
			[ '(a|A)', '', 'ا' ], //alif
			[ '(b|B)', '', 'ب' ], //ba
			[ '(c|C)', '', 'ﭺ' ], //ca
			[ '(d|D)', '', 'د' ], //dal
			[ '(e|E)', '', 'َ' ], //fathah -a
			[ '(f|F)', '', 'ف' ], //fa
			[ '(g|G)', '', 'ݢ' ], //gaf
			[ '(h|H)', '', 'ه' ], //ha
			[ '(ݢ|ڬ)(h|H)', '(g|G)', 'غ' ],  //ghain
			[ 'ت(h|H)', '(t|T)', 'ة' ],  //tāʔ marbūṭa
			[ 'ى(h|H)', '(k|K)', 'خ' ],  //ẖ, kha
			[ '(i|I)', '', 'ِ' ], //kasrah/kasroh -i
			[ '(j|J)', '', 'ج' ], //jim
			[ '(k|K)', '', 'ى' ], //kaf
			[ '(l|L)', '', 'ل' ], //lam
			[ '(m|M)', '', 'م' ], //mim
			[ '(n|N)', '', 'ن' ], //nun
			[ '(o|O)', '', 'ْ' ], //sukun
			[ '(p|P)', '', 'ڤ' ], //pa
			[ '(q|Q)', '', 'ق' ], //qaf
			[ '(r|R)', '', 'ر' ], //ra
			[ '(s|S)', '', 'س' ], //sin
			[ '(t|T)', '', 'ت' ], //ta
			[ '(u|U)', '', 'ُ' ], //dhammah/dhomah -u
			[ '(v|V)', '', 'ؤ' ], //va
			[ '(w|W)', '', 'و' ], //wau
			[ '(x|X)', '', 'ء' ], // ʾʔhamza
			[ '(y|Y)', '', 'ي' ], //ya
			[ '(z|Z)', '', 'ز' ], //zai
			[ '`', '', 'ع' ] // 'ain
		]
	};

	$.ime.register( jawiKeyboard );
}( jQuery ) );