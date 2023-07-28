( function ( $ ) {
	'use strict';

	var angkolaKbd = {
		id: 'akb-keyboard',
		name: 'Angkola Keyboard',
		description: 'QWERTY-based Batak Angkola keyboard',
		date: '2023-07-28',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/akb-keyboard',
		author: 'Benny Lin',
		version: '1.0',
		patterns: [
			[ 'q', '᯲' ],// 	1BF2 ᯲ BATAK PANGOLAT (PANGGOTAP) = virama
			[ 'w', 'ᯋ' ],//1BCB ᯋ BATAK LETTER WA 
			[ 'e', 'ᯩ' ],//1BE9 ᯩ BATAK VOWEL SIGN EE = talinga
			[ 'r', 'ᯒ' ],//1BD2 ᯒ BATAK LETTER RA 
			[ 't', 'ᯖ' ],//1BD6 ᯖ BATAK LETTER SOUTHERN TA 
			[ 'y', 'ᯛ' ],//1BDB ᯛ BATAK LETTER YA 
			[ 'u', 'ᯮ' ],//1BEE ᯮ BATAK VOWEL SIGN U = boruta 
			[ 'i', 'ᯪ' ],//1BEA ᯪ BATAK VOWEL SIGN I = ulua 
			[ 'o', 'ᯬ' ],//1BEC ᯬ BATAK VOWEL SIGN O = siala ulu 
			[ 'p', 'ᯇ' ],//1BC7 ᯇ BATAK LETTER PA 

			[ 'a', 'ᯀ' ],//1BC0 ᯀ BATAK LETTER A 
			[ 's', 'ᯘ' ],//1BD8 ᯘ BATAK LETTER SA 
			[ 'd', 'ᯑ' ],//1BD1 ᯑ BATAK LETTER DA 
			[ 'f', '᯳' ],//1BF3 ᯳ BATAK PANONGONAN = virama 
			[ 'g', 'ᯎ' ],//1BCE ᯎ BATAK LETTER GA 
			[ 'h', 'ᯂ' ],//1BC2 ᯂ BATAK LETTER HA 
			[ 'j', 'ᯐ' ],//1BD0 ᯐ BATAK LETTER JA 
			[ 'k', 'ᯂ' ],//1BC2 ᯂ BATAK LETTER HA 
			[ 'l', 'ᯞ' ],//1BDE ᯞ BATAK LETTER LA 

			[ 'z', 'ᯝ' ],//1BDD ᯝ BATAK LETTER NGA 
			[ 'x', 'ᯠ' ],//1BE0 ᯠ BATAK LETTER NYA 
			[ 'c', 'ᯡ' ],//1BE1 ᯡ BATAK LETTER CA 
			[ 'v', '᯦' ],//1BE6 ᯦ BATAK SIGN TOMPI
			[ 'b', 'ᯅ' ],//1BC5 ᯅ BATAK LETTER BA 
			[ 'n', 'ᯉ' ],//1BC9 ᯉ BATAK LETTER NA 
			[ 'm', 'ᯔ' ],//1BD4 ᯔ BATAK LETTER MA 

			[ 'E', 'ᯧ' ],//1BE7 ᯧ BATAK VOWEL SIGN E = kebereten 
			[ 'T', 'ᯗ' ],//1BD7 ᯗ BATAK LETTER NORTHERN TA 
			[ 'U', 'ᯥ' ],//1BE5 ᯥ BATAK LETTER ina ni surat U
			[ 'I', 'ᯤ' ],//1BE4 ᯤ BATAK LETTER ina ni surat I 
			[ 'H', 'ᯱ' ],//1BF1 ᯱ BATAK CONSONANT SIGN H = hajoringan  (-h)
			[ 'Z', 'ᯰ' ],//1BF0 ᯰ BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '^^', '^' ],
			[ '^', 'ᯰ' ],//1BF0 ᯰ BATAK CONSONANT SIGN NG = amisara (-ng)
			[ '<<', '<' ],
			[ '<', 'ᯝ' ]//1BDD ᯝ BATAK LETTER NGA 
		],
		patterns_x: [
			[ '4', '᯼' ],//1BFC ᯼ BATAK SYMBOL BINDU NA METEK 
			[ '5', '᯽' ],//1BFD ᯽ BATAK SYMBOL BINDU PINARBORAS 
			[ '6', '᯾' ],//1BFE ᯾ BATAK SYMBOL BINDU JUDUL 
			[ '7', '᯿' ]//1BFF ᯿ BATAK SYMBOL BINDU PANGOLAT 
		]
	};

	$.ime.register( angkolaKbd );
}( jQuery ) );