( function ( $ ) {
	'use strict';

	var ksKbd = {
		id: 'ks-kbd',
		name: 'Kashmiri kbd',
		description: 'Kbd keyboard for Kashmiri language using Arabic script',
		date: '2023-03-04',
		author: 'Parag Nemade, Iflaq, Amir E. Aharoni',
		license: 'GPLv3',
		version: '2.2',
		patterns: [
			[ '`', '\u065B' ], // Inverted V above
			[ '\\(', ')' ], // RTL mirroring
			[ '\\)', '(' ], // RTL mirroring
			[ '\\[', ']' ], // RTL mirroring
			[ '\\]', '[' ], // RTL mirroring
			[ '\\{', '}' ], // RTL mirroring
			[ '\\}', '{' ], // RTL mirroring
			[ '\\_', '\u0651' ], // Shadda

			[ 'Q', '\u0653' ], // Madda above
			[ 'q', 'ق' ],
			[ 'W', 'ۄ' ], // Waw with ring
			[ 'w', 'و' ],
			[ 'E', 'ؠ' ], // Kashmiri yeh
			[ 'e', 'ع' ],
			[ 'R', 'ڑ' ],
			[ 'r', 'ر' ],
			[ 'T', 'ٹ' ],
			[ 't', 'ت' ],
			[ 'Y', '\u0656' ], // Subscript Alef
			[ 'y', 'ے' ],
			[ 'U', '\u065A' ], // Small V above
			[ 'u', 'ء' ],
			[ 'I', 'ۆ' ], // OE, waw with V above
			[ 'i', 'ی' ],
			[ 'O', 'ٲ' ], // Alef with wavy hamza
			[ 'o', 'ہ' ], // Heh goal
			[ 'P', '\u0654' ], // Hamza above
			[ 'p', 'پ' ],

			[ 'A', 'آ' ],
			[ 'a', 'ا' ],
			[ 'S', 'ش' ],
			[ 's', 'س' ],
			[ 'D', 'ڈ' ],
			[ 'd', 'د' ],
			[ 'F', '\u064F' ], // Damma
			[ 'f', 'ف' ],
			[ 'G', 'غ' ],
			[ 'g', 'گ' ],
			[ 'H', 'ح' ],
			[ 'h', 'ھ' ],
			[ 'J', 'ژ' ],
			[ 'j', 'ج' ],
			[ 'K', 'خ' ],
			[ 'k', 'ک' ],
			[ 'L', '\u0655' ], // Hamza below
			[ 'l', 'ل' ],
			[ ';', '؛' ],
			[ '\\\\', '\u0657' ], // Inverted damma

			[ 'Z', 'ذ' ],
			[ 'z', 'ز' ],
			[ 'X', 'ض' ],
			[ 'x', 'ص' ],
			[ 'C', 'ث' ],
			[ 'c', 'چ' ],
			[ 'V', 'ظ' ],
			[ 'v', 'ط' ],
			[ 'B', 'أ' ],
			[ 'b', 'ب' ],
			[ 'N', 'ں' ],
			[ 'n', 'ن' ],
			[ 'M', '\u065F' ], // Arabic wavy hamza below
			[ 'm', 'م' ],
			[ '\\>', '\u064E' ], // Fatha
			[ ',', '،' ],
			[ '\\<', '\u0650' ], // Kasra
			[ '\\.', '۔' ], // Arabic Full stop
			[ '\\?', '؟' ]
		]
	};

	$.ime.register( ksKbd );
}( jQuery ) );
