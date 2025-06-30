( function ( $ ) {
	'use strict';

	var simalungunKbd = {
		id: 'bts-keyboard',
		name: 'Surat Simalungun',
		description: 'QWERTY-based Batak Simalungun keyboard',
		date: '2023-07-28',
		URL: 'https:// www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/bts-keyboard',
		author: 'Benny Lin',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '(q|Q)', '᯲' ], // 1BF2 ᯲ BATAK PANGOLAT (PANGGOTAP) = virama
			[ '(w|W)', 'ᯌ' ], // 1BCC ᯌ BATAK LETTER SIMALUNGUN WA
			[ 'e', 'ᯩ' ], // 1BE9 ᯩ BATAK VOWEL SIGN EE = talinga
			[ 'E', 'ᯧ' ], // 1BE7 ᯧ BATAK VOWEL SIGN E = kebereten
			[ '(r|R)', 'ᯓ' ], // 1BD3 ᯓ BATAK LETTER SIMALUNGUN RA
			[ 't', 'ᯖ' ], // 1BD6 ᯖ BATAK LETTER SOUTHERN TA
			[ 'T', 'ᯗ' ], // 1BD7 ᯗ BATAK LETTER NORTHERN TA
			[ '(y|Y)', 'ᯜ' ], // 1BDC ᯜ BATAK LETTER SIMALUNGUN YA
			[ 'u', 'ᯯ' ], // 1BEF ᯯ BATAK VOWEL SIGN U FOR SIMALUNGUN
			[ 'U', 'ᯥ' ], // 1BE5 ᯥ BATAK LETTER ina ni surat U
			[ 'i', 'ᯪ' ], // 1BEA ᯪ BATAK VOWEL SIGN I = ulua
			[ 'I', 'ᯤ' ], // 1BE4 ᯤ BATAK LETTER ina ni surat I
			[ '(o|O)', 'ᯬ' ], // 1BEC ᯬ BATAK VOWEL SIGN O = siala ulu
			[ '(p|P)', 'ᯈ' ], // 1BC8 ᯈ BATAK LETTER SIMALUNGUN PA

			[ '(a|A)', 'ᯁ' ], // 1BC1 ᯁ BATAK LETTER SIMALUNGUN A
			[ '(s|S)', 'ᯙ' ], // 1BD9 ᯙ BATAK LETTER SIMALUNGUN SA
			[ '(d|D)', 'ᯑ' ], // 1BD1 ᯑ BATAK LETTER DA
			[ '(f|F)', '᯳' ], // 1BF3 ᯳ BATAK PANONGONAN = virama
			[ '(g|G)', 'ᯏ' ], // 1BCF ᯏ BATAK LETTER SIMALUNGUN GA
			[ 'h', 'ᯃ' ], // 1BC3 ᯃ BATAK LETTER SIMALUNGUN HA or KA
			[ 'H', 'ᯱ' ], // 1BF1 ᯱ BATAK CONSONANT SIGN H = hajoringan  (-h)
			[ '(j|J)', 'ᯐ' ], // 1BD0 ᯐ BATAK LETTER JA
			[ '(k|K)', 'ᯃ' ], // 1BC3 ᯃ BATAK LETTER SIMALUNGUN HA or KA
			[ '(l|L)', 'ᯟ' ], // 1BDF ᯟ BATAK LETTER SIMALUNGUN LA

			[ 'z', 'ᯝ' ], // 1BDD ᯝ BATAK LETTER NGA
			[ 'Z', 'ᯰ' ], // 1BF0 ᯰ BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '(x|X)', 'ᯠ' ], // 1BE0 ᯠ BATAK LETTER NYA
			[ '(c|C)', 'ᯠ' ], // 1BE0 ᯠ BATAK LETTER NYA = CA
			[ '(v|V)', '᯦' ], // 1BE6 ᯦ BATAK SIGN TOMPI
			[ '(b|B)', 'ᯅ' ], // 1BC5 ᯅ BATAK LETTER BA
			[ '(n|N)', 'ᯉ' ], // 1BC9 ᯉ BATAK LETTER NA
			[ '(m|M)', 'ᯕ' ], // 1BD5 ᯕ BATAK LETTER SIMALUNGUN MA

			[ '^^', '^' ],
			[ '^', 'ᯰ' ], // 1BF0 ᯰ BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '<<', '<' ],
			[ '<', 'ᯝ' ] // 1BDD ᯝ BATAK LETTER NGA
		],
		patterns_x: [
			[ '4', '᯼' ], // 1BFC ᯼ BATAK SYMBOL BINDU NA METEK
			[ '5', '᯽' ], // 1BFD ᯽ BATAK SYMBOL BINDU PINARBORAS
			[ '6', '᯾' ], // 1BFE ᯾ BATAK SYMBOL BINDU JUDUL
			[ '7', '᯿' ] // 1BFF ᯿ BATAK SYMBOL BINDU PANGOLAT
		]
	};

	$.ime.register( simalungunKbd );
}( jQuery ) );
