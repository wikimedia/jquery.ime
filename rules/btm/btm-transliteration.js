( function ( $ ) {
	'use strict';

	var mandailingTransliteration = {
		id: 'btm-transliteration',
		name: 'Mandailing',
		description: 'Batak Mandailing transliteration',
		date: '2023-07-29',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/btm-translit',
		author: 'Benny Lin',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 2,
		maxKeyLength: 2,
		patterns: [
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],
			// pangolat + vowel
			[ '᯲(a|A)', '', '' ], // default vowel is a, so remove the pangolat
			[ '᯲(e|E)', '', 'ᯩ' ], // e - 1BE9 ᯩ BATAK VOWEL SIGN EE = talinga
			[ '᯲(i|I)', '', 'ᯪ' ], // i - 1BEA ᯪ BATAK VOWEL SIGN I = ulua
			[ '᯲(o|O)', '', 'ᯬ' ], // o - 1BEC ᯬ BATAK VOWEL SIGN O = siala ulu
			[ '᯲(u|U)', '', 'ᯮ' ], // u - 1BEE ᯮ BATAK VOWEL SIGN U = boruta
			[ '᯲(x|X)', '', 'ᯧ' ], // x - 1BE7 ᯧ BATAK VOWEL SIGN E = kebereten
			// panongonan + vowel
			[ '᯳(a|A)', '', '' ], // default vowel is a, so remove the panongonan
			[ '᯳(e|E)', '', 'ᯩ' ], // e - 1BE9 ᯩ BATAK VOWEL SIGN EE = talinga
			[ '᯳(i|I)', '', 'ᯪ' ], // i - 1BEA ᯪ BATAK VOWEL SIGN I = ulua
			[ '᯳(o|O)', '', 'ᯬ' ], // o - 1BEC ᯬ BATAK VOWEL SIGN O = siala ulu
			[ '᯳(u|U)', '', 'ᯮ' ], // u - 1BEE ᯮ BATAK VOWEL SIGN U = boruta
			[ '᯳(x|X)', '', 'ᯧ' ], // x - 1BE7 ᯧ BATAK VOWEL SIGN E = kebereten
			// amisara + vowel
			[ 'ᯰ(a|A)', '', 'ᯝ' ], // -ng + a = nga
			[ 'ᯰ(e|E)', '', 'ᯝᯩ' ], // -ng + e = nge
			[ 'ᯰ(i|I)', '', 'ᯝᯪ' ], // -ng + i = ngi
			[ 'ᯰ(o|O)', '', 'ᯝᯬ' ], // -ng + o = ngo
			[ 'ᯰ(u|U)', '', 'ᯝᯮ' ], // -ng + u = ngu
			[ 'ᯰ(x|X)', '', 'ᯝᯧ' ], // -ng + e = nge (keberetan)
			// hajoringan + vowel
			[ 'ᯱ(a|A)', '', 'ᯂ' ], // -h + a = ha
			[ 'ᯱ(e|E)', '', 'ᯂᯩ' ], // -h + e = he
			[ 'ᯱ(i|I)', '', 'ᯂᯪ' ], // -h + i = hi
			[ 'ᯱ(o|O)', '', 'ᯂᯬ' ], // -h + o = ho
			[ 'ᯱ(u|U)', '', 'ᯂᯮ' ], // -h + u = hu
			[ 'ᯱ(x|X)', '', 'ᯂᯧ' ], // -h + e = he (keberetan)

			// ina ni surat I & U + hajoringan / amisara
			[ 'ᯤ(h|H)', '(i|I)', 'ᯀᯪᯱ' ], // syllable i + h -> anak ni surat i
			[ 'ᯥ(h|H)', '(u|U)', 'ᯀᯮᯱ' ], // syllable u + h -> anak ni surat u
			[ 'ᯤ(n|N)', '(i|I)', 'ᯀᯪᯊ᯲' ], // syllable i + ng -> anak ni surat i
			[ 'ᯥ(n|N)', '(u|U)', 'ᯀᯮᯊ᯲' ], // syllable u + ng -> anak ni surat u
			// amisara
			[ 'ᯊ᯲(g|G)', '(a|A|e|E|i|I|o|O|u|U|x|X)n', 'ᯰ' ], // 1BF0 ᯰ BATAK CONSONANT SIGN NG = amisara (-ng)
			// nga / nya
			[ 'ᯊ᯲(g|G)', 'n', 'ᯝ᯲' ], // 1BDD ᯝ BATAK LETTER NGA
			[ 'ᯊ᯲(y|Y)', 'n', 'ᯠ᯲' ], // 1BE0 ᯠ BATAK LETTER NYA

			[ '(a|A)', '', 'ᯀ' ],
			[ '(b|B)', '', 'ᯅ᯲' ],
			[ '(c|C)', '', 'ᯚ᯦᯲' ],
			[ '(d|D)', '', 'ᯑ᯲' ],
			[ '(e|E)', '', 'ᯀᯩ' ],
			[ '(f|F)', '', '᯳' ], // 1BF3 $᯳ BATAK PANONGONAN = virama
			[ '(g|G)', '', 'ᯎ᯲' ],
			[ '(h|H)', '(a|e|i|o|u|x)', 'ᯱ' ], // 1BF1 ᯱ BATAK CONSONANT SIGN H = hajoringan (-h)
			[ 'H', '', 'ᯱ' ], // 1BF1 ᯱ BATAK CONSONANT SIGN H = hajoringan (-h)
			[ 'h', '', 'ᯄ᯲' ],
			[ '(i|I)', '', 'ᯤ' ],
			[ '(j|J)', '', 'ᯐ᯲' ],
			[ '(k|K)', '', 'ᯄ᯦᯲' ],
			[ '(l|L)', '', 'ᯞ᯲' ],
			[ '(m|M)', '', 'ᯔ᯲' ],
			[ '(n|N)', '', 'ᯊ᯲' ],
			[ '(o|O)', '', 'ᯀᯬ' ],
			[ '(p|P)', '', 'ᯇ᯲' ],
			[ '(q|Q)', '', '᯲' ], // 1BF2 $᯲ BATAK PANGOLAT (PANGGOTAP) = virama
			[ '(r|R)', '', 'ᯒ᯲' ],
			[ '(s|S)', '', 'ᯚ᯲' ],
			[ 't', '', 'ᯖ᯲' ],
			[ 'T', '', 'ᯗ᯲' ],
			[ '(u|U)', '', 'ᯥ' ],
			[ '(v|V)', '', '᯦' ], // 1BE6 ᯦ BATAK SIGN TOMPI
			[ '(w|W)', '', 'ᯋ᯲' ],
			[ '(x|X)', '', 'ᯀᯧ' ], // 1BE7 ᯧ BATAK VOWEL SIGN E = kebereten
			[ '(y|Y)', '', 'ᯛ᯲' ],
			[ '(z|Z)', '', 'ᯰ' ] // 1BF0 ᯰ BATAK CONSONANT SIGN NG = amisara (-ng)
		],
		patterns_x: [
			[ '4', '', '᯼' ],
			[ '5', '', '᯽' ],
			[ '6', '', '᯾' ],
			[ '7', '', '᯿' ]
		]
	};

	$.ime.register( mandailingTransliteration );
}( jQuery ) );
