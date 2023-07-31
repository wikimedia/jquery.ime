( function ( $ ) {
	'use strict';

	var mandailingKbd = {
		id: 'btm-keyboard',
		name: 'Surat Mandailing',
		description: 'QWERTY-based Batak Mandailing keyboard',
		date: '2023-07-28',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/btm-keyboard',
		author: 'Benny Lin',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '$1' ], // escape characters
			[ '(q|Q)', '᯲' ], // 1BF2 $᯲ BATAK PANGOLAT (PANGGOTAP) = virama
			[ '(w|W)', 'ᯋ' ], // 1BCB ᯋ BATAK LETTER WA
			[ 'e', 'ᯩ' ], // 1BE9 ᯩ BATAK VOWEL SIGN EE = talinga
			[ 'E', 'ᯧ' ], // 1BE7 ᯧ BATAK VOWEL SIGN E = kebereten
			[ '(r|R)', 'ᯒ' ], // 1BD2 ᯒ BATAK LETTER RA
			[ 't', 'ᯖ' ], // 1BD6 ᯖ BATAK LETTER SOUTHERN TA
			[ 'T', 'ᯗ' ], // 1BD7 ᯗ BATAK LETTER NORTHERN TA
			[ '(y|Y)', 'ᯛ' ], // 1BDB ᯛ BATAK LETTER YA
			[ 'u', 'ᯮ' ], // 1BEE ᯮ BATAK VOWEL SIGN U = boruta
			[ 'U', 'ᯥ' ], // 1BE5 ᯥ BATAK LETTER U = ina ni surat u
			[ 'i', 'ᯪ' ], // 1BEA ᯪ BATAK VOWEL SIGN I = ulua
			[ 'I', 'ᯤ' ], // 1BE4 ᯤ BATAK LETTER I = ina ni surat i
			[ '(o|O)', 'ᯬ' ], // 1BEC ᯬ BATAK VOWEL SIGN O = siala ulu
			[ '(p|P)', 'ᯇ' ], // 1BC7 ᯇ BATAK LETTER PA

			[ '(a|A)', 'ᯀ' ], // 1BC0 ᯀ BATAK LETTER A
			[ '(s|S)', 'ᯚ' ], // 1BDA ᯚ BATAK LETTER MANDAILING SA
			[ '(d|D)', 'ᯑ' ], // 1BD1 ᯑ BATAK LETTER DA
			[ '(f|F)', '᯳' ], // 1BF3 $᯳ BATAK PANONGONAN = virama
			[ '(g|G)', 'ᯎ' ], // 1BCE ᯎ BATAK LETTER GA
			[ 'h', 'ᯂ' ], // 1BC4 ᯄ BATAK LETTER MANDAILING HA
			[ 'H', 'ᯱ' ], // 1BF1 ᯱ BATAK CONSONANT SIGN H = hajoringan (-h)
			[ '(j|J)', 'ᯐ' ], // 1BD0 ᯐ BATAK LETTER JA
			[ '(k|K)', 'ᯄ᯦' ], // 1BC4 ᯄ BATAK LETTER MANDAILING HA + 1BE6 ᯦ BATAK SIGN TOMPI
			[ '(l|L)', 'ᯞ' ], // 1BDE ᯞ BATAK LETTER LA

			[ 'z', 'ᯝ' ], // 1BDD ᯝ BATAK LETTER NGA
			[ 'Z', 'ᯰ' ], // 1BF0 ᯰ BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '(x|X)', 'ᯠ' ], // 1BE0 ᯠ BATAK LETTER NYA
			[ '(c|C)', 'ᯚ᯦' ], // 1BDA ᯚ BATAK LETTER MANDAILING SA + 1BE6 ᯦ BATAK SIGN TOMPI
			[ '(v|V)', '᯦' ], // 1BE6 ᯦ BATAK SIGN TOMPI
			[ '(b|B)', 'ᯅ' ], // 1BC5 ᯅ BATAK LETTER BA
			[ '(n|N)', 'ᯊ' ], // 1BCA ᯊ BATAK LETTER MANDAILING NA
			[ '(m|M)', 'ᯔ' ], // 1BD4 ᯔ BATAK LETTER MA

			[ '^^', '^' ], // escape
			[ '^', 'ᯰ' ], // 1BF0 ᯰ BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '<<', '<' ], // escape
			[ '<', 'ᯝ' ] // 1BDD ᯝ BATAK LETTER NGA
		],
		patterns_x: [
			[ '4', '᯼' ], // 1BFC ᯼ BATAK SYMBOL BINDU NA METEK
			[ '5', '᯽' ], // 1BFD ᯽ BATAK SYMBOL BINDU PINARBORAS
			[ '6', '᯾' ], // 1BFE ᯾ BATAK SYMBOL BINDU JUDUL
			[ '7', '᯿' ] // 1BFF ᯿ BATAK SYMBOL BINDU PANGOLAT
		]
	};

	$.ime.register( mandailingKbd );
}( jQuery ) );
