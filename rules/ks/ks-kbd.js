( function ( $ ) {
	'use strict';

	var ksKbd = {
		id: 'ks-kbd',
		name: 'Kashmiri kbd',
		description: 'Kbd keyboard for Kashmiri language using Arabic script',
		date: '2013-02-09',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '\\~', '\u0653' ], // Hamza above
			[ '1', '۱' ],
			[ '2', '۲' ],
			[ '3', '۳' ],
			[ '4', '۴' ],
			[ '5', '۵' ],
			[ '6', '۶' ],
			[ '7', '۷' ],
			[ '8', '۸' ],
			[ '9', '۹' ],
			[ '0', '۰' ],
			[ '\\(', ')' ], // RTL mirroring
			[ '\\)', '(' ], // RTL mirroring
			[ '\\[', ']' ], // RTL mirroring
			[ '\\]', '[' ], // RTL mirroring
			[ '\\{', '\u0670' ], // Superscript Alef
			[ '\\}', '\u0670' ], // Superscript Alef
			[ '\\_', '\u0651' ], // Shadda
			[ 'Q', 'ﷺ' ],
			[ 'q', 'ق' ],
			[ 'W', 'ؤ' ],
			[ 'w', 'و' ],
			[ 'E', 'ئ' ],
			[ 'e', 'ع' ],
			[ 'R', 'ڑ' ],
			[ 'r', 'ر' ],
			[ 'T', 'ٹ' ],
			[ 't', 'ت' ],
			[ 'Y', '\u0601' ], // Sanah
			[ 'y', 'ے' ],
			[ 'U', '،' ],
			[ 'u', 'ء' ],
			[ 'I', 'ۆ' ],
			[ 'i', 'ی' ],
			[ 'O', 'ۃ' ],
			[ 'o', 'ہ' ], // Heh goal
			[ 'P', 'إ' ],
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
			[ 'L', '\u0613' ], // Radi Allahou anhu
			[ 'l', 'ل' ],
			[ ';', '؛' ],
			[ '\'', '\u0670' ], // Superscript Alef
			[ '\\|', 'أ' ],
			[ '\\\\', '؎' ],
			[ '\\~', '\u064B' ], // Fathatan / FIXME This cannot actually work
			[ '`', '\u064D' ], // Kasratan
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
			[ 'M', '\u0654' ], // Hamza above
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
