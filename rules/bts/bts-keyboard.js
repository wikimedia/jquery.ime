( function ( $ ) {
	'use strict';

	var simalungunKbd = {
		id: 'bts-keyboard',
		name: 'Simalungun Keyboard',
		description: 'QWERTY-based Batak Simalungun keyboard',
		date: '2023-07-28',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/bts-keyboard',
		author: 'Benny Lin',
		version: '1.0',
		patterns: [
			[ 'q', '\u1BF2' ],// 	1BF2 \u1BF2 BATAK PANGOLAT (PANGGOTAP) = virama
			[ 'w', '\u1BCC' ],//1BCC \u1BCC BATAK LETTER SIMALUNGUN WA 
			[ 'e', '\u1BE9' ],//1BE9 \u1BE9 BATAK VOWEL SIGN EE = talinga
			[ 'r', '\u1BD3' ],//1BD3 \u1BD3 BATAK LETTER SIMALUNGUN RA  
			[ 't', '\u1BD6' ],//1BD6 \u1BD6 BATAK LETTER SOUTHERN TA 
			[ 'y', '\u1BDC' ],//1BDC \u1BDC BATAK LETTER SIMALUNGUN YA 
			[ 'u', '\u1BEF' ],//1BEF \u1BEF BATAK VOWEL SIGN U FOR SIMALUNGUN 
			[ 'i', '\u1BEA' ],//1BEA \u1BEA BATAK VOWEL SIGN I = ulua 
			[ 'o', '\u1BEC' ],//1BEC \u1BEC BATAK VOWEL SIGN O = siala ulu 
			[ 'p', '\u1BC8' ],//1BC8 \u1BC8 BATAK LETTER SIMALUNGUN PA 

			[ 'a', '\u1BC1' ],//1BC1 \u1BC1 BATAK LETTER SIMALUNGUN A 
			[ 's', '\u1BD9' ],//1BD9 \u1BD9 BATAK LETTER SIMALUNGUN SA  
			[ 'd', '\u1BD1' ],//1BD1 \u1BD1 BATAK LETTER DA 
			[ 'f', '\u1BF3' ],//1BF3 \u1BF3 BATAK PANONGONAN = virama 
			[ 'g', '\u1BCF' ],//1BCF \u1BCF BATAK LETTER SIMALUNGUN GA  
			[ 'h', '\u1BC3' ],//1BC3 \u1BC3 BATAK LETTER SIMALUNGUN HA or KA 
			[ 'j', '\u1BD0' ],//1BD0 \u1BD0 BATAK LETTER JA 
			[ 'k', '\u1BC3' ],//1BC3 \u1BC3 BATAK LETTER SIMALUNGUN HA or KA 
			[ 'l', '\u1BDF' ],//1BDF \u1BDF BATAK LETTER SIMALUNGUN LA 

			[ 'z', '\u1BDD' ],//1BDD \u1BDD BATAK LETTER NGA 
			[ 'x', '\u1BE0' ],//1BE0 \u1BE0 BATAK LETTER NYA 
			[ 'c', '\u1BE0' ],//1BE0 \u1BE0 BATAK LETTER NYA = CA 
			[ 'v', '\u1BE6' ],//1BE6 \u1BE6 BATAK SIGN TOMPI
			[ 'b', '\u1BC5' ],//1BC5 \u1BC5 BATAK LETTER BA 
			[ 'n', '\u1BC9' ],//1BC9 \u1BC9 BATAK LETTER NA 
			[ 'm', '\u1BD5' ],//1BD5 \u1BD5 BATAK LETTER SIMALUNGUN MA  

			[ 'E', '\u1BE7' ],//1BE7 \u1BE7 BATAK VOWEL SIGN E = kebereten 
			[ 'T', '\u1BD7' ],//1BD7 \u1BD7 BATAK LETTER NORTHERN TA 
			[ 'U', '\u1BE5' ],//1BE5 \u1BE5 BATAK LETTER ina ni surat U
			[ 'I', '\u1BE4' ],//1BE4 \u1BE4 BATAK LETTER ina ni surat I 
			[ 'H', '\u1BF1' ],//1BF1 \u1BF1 BATAK CONSONANT SIGN H = hajoringan  (-h)
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

	$.ime.register( simalungunKbd );
}( jQuery ) );