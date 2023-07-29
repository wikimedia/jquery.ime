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
			[ '\u1BF2(a|A)', '', '' ],//default vowel is a, so remove the pangolat
			[ '\u1BF2(e|E)', '', '\u1BE9' ],//e - 1BE9 \u1BE9 BATAK VOWEL SIGN EE = talinga
			[ '\u1BF2(i|I)', '', '\u1BEA' ],//i - 1BEA \u1BEA BATAK VOWEL SIGN I = ulua
			[ '\u1BF2(o|O)', '', '\u1BEC' ],//o - 1BEC \u1BEC BATAK VOWEL SIGN O = siala ulu
			[ '\u1BF2(u|U)', '', '\u1BEE' ],//u - 1BEE \u1BEE BATAK VOWEL SIGN U = boruta
			[ '\u1BF2(x|X)', '', '\u1BE7' ], // x - 1BE7 \u1BE7 BATAK VOWEL SIGN E = kebereten
			[ '\u1BF0(a|A)', '', '\u1BDD' ],//-ng + a = nga
			[ '\u1BF0(e|E)', '', '\u1BDD\u1BE9' ],//-ng + e = nge
			[ '\u1BF0(i|I)', '', '\u1BDD\u1BEA' ],//-ng + i = ngi
			[ '\u1BF0(o|O)', '', '\u1BDD\u1BEC' ],//-ng + o = ngo
			[ '\u1BF0(u|U)', '', '\u1BDD\u1BEE' ],//-ng + u = ngu
			[ '\u1BF0(x|X)', '', '\u1BDD\u1BE7' ], //-ng + e = nge (keberetan)
			[ '\u1BF1(a|A)', '', '\u1BC2' ],//-h + a = ha
			[ '\u1BF1(e|E)', '', '\u1BC2\u1BE9' ],//-h + e = he
			[ '\u1BF1(i|I)', '', '\u1BC2\u1BEA' ],//-h + i = hi
			[ '\u1BF1(o|O)', '', '\u1BC2\u1BEC' ],//-h + o = ho
			[ '\u1BF1(u|U)', '', '\u1BC2\u1BEE' ],//-h + u = hu
			[ '\u1BF1(x|X)', '', '\u1BC2\u1BE7' ], //-h + e = he (keberetan)

			[ '\u1BE4(n|N)', '(i|I)', '\u1BC0\u1BEA\u1BCA\u1BF2' ],//syllable i + ng -> anak ni surat i
			[ '\u1BE5(n|N)', '(u|U)', '\u1BC0\u1BEE\u1BCA\u1BF2' ],//syllable u + ng -> anak ni surat u
			[ '\u1BCA\u1BF2(g|G)', '(a|A|e|E|i|I|o|O|u|U|x|X)n', '\u1BF0' ],//1BF0 \u1BF0 BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '\u1BCA\u1BF2(g|G)', 'n', '\u1BDD\u1BF2' ],//1BDD \u1BDD BATAK LETTER NGA
			[ '\u1BCA\u1BF2(y|Y)', 'n', '\u1BE0\u1BF2' ],//1BE0 \u1BE0 BATAK LETTER NYA

			[ '(a|A)', '', '\u1BC0' ],
			[ '(b|B)', '', '\u1BC5\u1BF2' ],
			[ '(c|C)', '', '\u1BDA\u1BE6\u1BF2' ],
			[ '(d|D)', '', '\u1BD1\u1BF2' ],
			[ '(e|E)', '', '\u1BC0\u1BE9' ],
			[ '(f|F)', '', '\u1BF3' ],//1BF3 $\u1BF3 BATAK PANONGONAN = virama
			[ '(g|G)', '', '\u1BCE\u1BF2' ],
			[ '(h|H)', '(a|e|i|o|u|x)', '\u1BF1' ],//1BF1 \u1BF1 BATAK CONSONANT SIGN H = hajoringan (-h)
			[ '(h|H)', '', '\u1BC2\u1BF2' ],
			[ '(i|I)', '', '\u1BE4' ],
			[ '(j|J)', '', '\u1BD0\u1BF2' ],
			[ '(k|K)', '', '\u1BC4\u1BE6\u1BF2' ],
			[ '(l|L)', '', '\u1BDE\u1BF2' ],
			[ '(m|M)', '', '\u1BD4\u1BF2' ],
			[ '(n|N)', '', '\u1BCA\u1BF2' ],
			[ '(o|O)', '', '\u1BC0\u1BEC' ],
			[ '(p|P)', '', '\u1BC7\u1BF2' ],
			[ '(q|Q)', '', '\u1BF2' ],//1BF2 $\u1BF2 BATAK PANGOLAT (PANGGOTAP) = virama
			[ '(r|R)', '', '\u1BD2\u1BF2' ],
			[ '(s|S)', '', '\u1BDA\u1BF2' ],
			[ '(t|T)', '', '\u1BD6\u1BF2' ],
			[ '(u|U)', '', '\u1BE5' ],
			[ '(v|V)', '', '\u1BE6' ],//1BE6 \u1BE6 BATAK SIGN TOMPI
			[ '(w|W)', '', '\u1BCB\u1BF2' ],
			[ '(x|X)', '', '\u1BC0\u1BE7' ],//1BE7 \u1BE7 BATAK VOWEL SIGN E = kebereten
			[ '(y|Y)', '', '\u1BDB\u1BF2' ],
			[ '(z|Z)', '', '\u1BF0' ]//1BF0 \u1BF0 BATAK CONSONANT SIGN NG = amisara (-ng)
		],
		patterns_x: [
			[ '4', '', '\u1BFC' ],
			[ '5', '', '\u1BFD' ],
			[ '6', '', '\u1BFE' ],
			[ '7', '', '\u1BFF' ]
		]
	};

	$.ime.register( mandailingTransliteration );
}( jQuery ) );