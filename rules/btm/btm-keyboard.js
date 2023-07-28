( function ( $ ) {
	'use strict';

	var mandailingKbd = {
		id: 'btm-keyboard',
		name: 'Mandailing Keyboard',
		description: 'QWERTY-based Batak Mandailing keyboard',
		date: '2023-07-28',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/btm-keyboard',
		author: 'Benny Lin',
		version: '1.0',
		patterns: [
			[ 'q', '᯲' ],
			[ 'w', 'ᯋ' ],
			[ 'e', 'ᯩ' ],
			[ 'r', 'ᯒ' ],
			[ 't', 'ᯖ' ],
			[ 'y', 'ᯛ' ],
			[ 'u', 'ᯮ' ],
			[ 'i', 'ᯪ' ],
			[ 'o', 'ᯬ' ],
			[ 'p', 'ᯇ' ],

			[ 'a', 'ᯀ' ],
			[ 's', 'ᯚ' ],
			[ 'd', 'ᯑ' ],
			[ 'f', '᯳' ],
			[ 'g', 'ᯎ' ],
			[ 'h', 'ᯂ' ],
			[ 'j', 'ᯐ' ],
			[ 'k', 'ᯄ᯦' ],
			[ 'l', 'ᯞ' ],

			[ 'z', 'ᯝ' ],
			[ 'x', 'ᯠ' ],
			[ 'c', 'ᯚ᯦' ],
			[ 'v', '᯦' ],
			[ 'b', 'ᯅ' ],
			[ 'n', 'ᯊ' ],
			[ 'm', 'ᯔ' ],

			[ 'E', 'ᯧ' ],//kebereten (-e)
			[ 'U', 'ᯥ' ],//ina ni surat u
			[ 'I', 'ᯤ' ],//ina ni surat i
			[ 'H', 'ᯱ' ],//hajoringan (-h)
			[ 'Z', 'ᯰ' ],//amisara (-ng)
			[ '^', 'ᯰ' ],//amisara (-ng)
			[ '<<', '<' ],
			[ '<', 'ᯝ' ]//1BDD ᯝ BATAK LETTER NGA 
		],
		patterns_x: [
			[ '4', '᯼' ],
			[ '5', '᯽' ],
			[ '6', '᯾' ],
			[ '7', '᯿' ]
		]
	};

	$.ime.register( mandailingKbd );
}( jQuery ) );