( function ( $ ) {
	'use strict';

	var karoKbd = {
		id: 'btx-keyboard',
		name: 'Karo Keyboard',
		description: 'QWERTY-based Batak Karo keyboard',
		date: '2023-07-28',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/btx-keyboard',
		author: 'Benny Lin',
		version: '1.0',
		patterns: [
			[ 'q', '\u1BF2' ],// 	1BF2 \u1BF2 BATAK PANGOLAT (PANGGOTAP) = virama
			[ 'w', '\u1BCB' ],//1BCB \u1BCB BATAK LETTER WA 
			[ 'e', '\u1BE9' ],//1BE9 \u1BE9 BATAK VOWEL SIGN EE = talinga
			[ 'r', '\u1BD2' ],//1BD2 \u1BD2 BATAK LETTER RA 
			[ 't', '\u1BD6' ],//1BD6 \u1BD6 BATAK LETTER SOUTHERN TA 
			[ 'y', '\u1BDB' ],//1BDB \u1BDB BATAK LETTER YA 
			[ 'u', '\u1BEE' ],//1BEE \u1BEE BATAK VOWEL SIGN U = boruta 
			[ 'i', '\u1BEA' ],//1BEA \u1BEA BATAK VOWEL SIGN I = ulua 
			[ 'o', '\u1BEC' ],//1BEC \u1BEC BATAK VOWEL SIGN O = siala ulu 
			[ 'p', '\u1BC7' ],//1BC7 \u1BC7 BATAK LETTER PA 

			[ 'a', '\u1BC0' ],//1BC0 \u1BC0 BATAK LETTER A 
			[ 's', '\u1BD8' ],//1BD8 \u1BD8 BATAK LETTER SA 
			[ 'd', '\u1BD1' ],//1BD1 \u1BD1 BATAK LETTER DA 
			[ 'f', '\u1BF3' ],//1BF3 \u1BF3 BATAK PANONGONAN = virama 
			[ 'g', '\u1BCE' ],//1BCE \u1BCE BATAK LETTER GA 
			[ 'h', '\u1BC0' ],//1BC0 \u1BC0 BATAK LETTER A = HA
			[ 'j', '\u1BD0' ],//1BD0 \u1BD0 BATAK LETTER JA 
			[ 'k', '\u1BC2' ],//1BC2 \u1BC2 BATAK LETTER HA = KA
			[ 'l', '\u1BDE' ],//1BDE \u1BDE BATAK LETTER LA 

			[ 'z', '\u1BDD' ],//1BDD \u1BDD BATAK LETTER NGA 
			[ 'x', '\u1BE0' ],//1BE0 \u1BE0 BATAK LETTER NYA 
			[ 'c', '\u1BE0' ],//1BE0 \u1BE0 BATAK LETTER NYA = CA 
			[ 'v', '\u1BE6' ],//1BE6 \u1BE6 BATAK SIGN TOMPI
			[ 'b', '\u1BC5' ],//1BC5 \u1BC5 BATAK LETTER BA 
			[ 'n', '\u1BC9' ],//1BC9 \u1BC9 BATAK LETTER NA 
			[ 'm', '\u1BD4' ],//1BD4 \u1BD4 BATAK LETTER MA 

			[ 'E', '\u1BE7' ],//1BE7 \u1BE7 BATAK VOWEL SIGN E = kebereten 
			[ 'T', '\u1BD7' ],//1BD7 \u1BD7 BATAK LETTER NORTHERN TA 
			[ 'U', '\u1BE5' ],//1BE5 \u1BE5 BATAK LETTER ina ni surat U
			[ 'I', '\u1BE4' ],//1BE4 \u1BE4 BATAK LETTER ina ni surat I 
			[ 'H', '\u1BF1' ],//1BF1 \u1BF1 BATAK CONSONANT SIGN H = hajoringan  (-h)
			[ 'N', '\u1BE2' ],//1BE2 \u1BE2 BATAK LETTER NDA (Karo) 
			[ 'M', '\u1BE3' ],//1BE3 \u1BE3 BATAK LETTER MBA (Karo) 
			[ 'Z', '\u1BF0' ],//1BF0 \u1BF0 BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '^^', '^' ],
			[ '^', '\u1BF0' ],//1BF0 \u1BF0 BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '<<', '<' ],
			[ '<', '\u1BDD' ]//1BDD \u1BDD BATAK LETTER NGA 
		],
		patterns_x: [
			[ '4', '\u1BFC' ],//1BFC \u1BFC BATAK SYMBOL BINDU NA METEK 
			[ '5', '\u1BFD' ],//1BFD \u1BFD BATAK SYMBOL BINDU PINARBORAS 
			[ '6', '\u1BFE' ],//1BFE \u1BFE BATAK SYMBOL BINDU JUDUL 
			[ '7', '\u1BFF' ]//1BFF \u1BFF BATAK SYMBOL BINDU PANGOLAT 
		]
	};

	$.ime.register( karoKbd );
}( jQuery ) );