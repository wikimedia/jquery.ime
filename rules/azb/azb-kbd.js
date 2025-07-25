( function ( $ ) {
	'use strict';

	var azbKbd = {
		id: 'azb-kbd',
		name: 'تۆرکجه',
		description: 'South Azerbaijani Keyboard Layout',
		date: '2015-05-02',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/azb-kbd',
		author: 'Mjbmr',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '`', '\u200d' ],
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

			[ 'q', 'ض' ],
			[ 'w', 'ص' ],
			[ 'e', 'ث' ],
			[ 'r', 'ق' ],
			[ 't', 'ف' ],
			[ 'y', 'غ' ],
			[ 'u', 'ع' ],
			[ 'i', 'ه' ],
			[ 'o', 'خ' ],
			[ 'p', 'ح' ],
			[ '\\[', 'ج' ],
			[ '\\]', 'چ' ],

			[ 'a', 'ش' ],
			[ 's', 'س' ],
			[ 'd', 'ی' ],
			[ 'f', 'ب' ],
			[ 'g', 'ل' ],
			[ 'h', 'ا' ],
			[ 'j', 'ت' ],
			[ 'k', 'ن' ],
			[ 'l', 'م' ],
			[ ';', 'ک' ],
			[ '\'', 'گ' ],

			[ 'z', 'ظ' ],
			[ 'x', 'ط' ],
			[ 'c', 'ز' ],
			[ 'v', 'ر' ],
			[ 'b', 'ذ' ],
			[ 'n', 'د' ],
			[ 'm', 'پ' ],
			[ ',', 'و' ],

			[ '~', '\u200c' ],
			[ '@', '٬' ],
			[ '#', '٫' ],
			[ '%', '٪' ],
			[ '\\^', '×' ],
			[ '&', '،' ],
			[ '\\(', ')' ],
			[ '\\)', '(' ],
			[ '_', 'ـ' ],

			[ 'Q', 'ۇ' ],
			[ 'W', 'ۆ' ],
			[ 'E', 'وْ' ],
			[ 'R', 'ً' ],
			[ 'T', 'ُ' ],
			[ 'Y', 'ِ' ],
			[ 'U', 'َ' ],
			[ 'I', 'ّ' ],
			[ 'O', ']' ],
			[ 'P', '[' ],
			[ '\\{', '}' ],
			[ '\\}', '{' ],

			[ 'A', 'ؤ' ],
			[ 'S', 'ئ' ],
			[ 'D', 'ؽ' ],
			[ 'F', 'إ' ],
			[ 'G', 'أ' ],
			[ 'H', 'آ' ],
			[ 'J', 'ة' ],
			[ 'K', '»' ],
			[ 'L', '«' ],
			[ '"', '؛' ],

			[ 'Z', 'ك' ],
			[ 'X', 'ط' ],
			[ 'C', 'ژ' ],
			[ 'V', 'ٰ' ],
			[ 'B', 'ڭ' ],
			[ 'N', 'ٔ' ],
			[ 'M', 'ء' ],
			[ '<', '>' ],
			[ '>', '<' ],
			[ '\\?', '؟' ]
		]
	};

	$.ime.register( azbKbd );
}( jQuery ) );
