( function ( $ ) {
	'use strict';

	var nqoStandardQwerty = {
		id: 'nqo-standard-qwerty',
		name: "N'Ko standard qwerty",
		description: "N'Ko standard qwerty",
		date: '2019-04-26',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/nqo-standard-qwerty',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 1,
		patterns: [
			[ '`', '߷' ],
			[ '1', '߁' ],
			[ '2', '߂' ],
			[ '3', '߃' ],
			[ '4', '߄' ],
			[ '5', '߅' ],
			[ '6', '߆' ],
			[ '7', '߇' ],
			[ '8', '߈' ],
			[ '9', '߉' ],
			[ '0', '߀' ],

			[ 'Q', 'ߩ' ],
			[ 'W', 'ߨ' ],
			[ 'Y', 'ߚ' ],
			[ 'I', '÷' ],
			[ 'O', '×' ],
			[ 'P', 'ߪ' ],

			[ 'A', '߶' ],
			[ 'D', '[' ],
			[ 'F', ']' ],
			[ 'G', '(' ],
			[ 'H', ')' ],
			[ 'J', 'ߺ' ],
			[ 'L', '/' ],

			[ 'Z', '\u07F3' ],
			[ 'X', '\u07F1' ],
			[ 'C', '\u07ED' ],
			[ 'V', '\u07EE' ],
			[ 'B', '\u07F0' ],
			[ 'N', '\u07EF' ],
			[ 'M', '߸' ], // Comma
			[ '<', 'ߑ' ],
			[ '\\?', '؟' ],

			[ 'q', 'ߔ' ],
			[ 'w', 'ߧ' ],
			[ 'e', 'ߠ' ],
			[ 'r', 'ߥ' ],
			[ 't', 'ߦ' ],
			[ 'y', 'ߙ' ],
			[ 'u', 'ߗ' ],
			[ 'i', 'ߜ' ],
			[ 'o', 'ߢ' ],
			[ 'p', 'ߡ' ],
			[ '\\[', 'ߤ' ],
			[ '\\]', 'ߒ' ],

			[ 'a', 'ߏ' ],
			[ 's', 'ߎ' ],
			[ 'd', 'ߍ' ],
			[ 'f', 'ߌ' ],
			[ 'g', 'ߋ' ],
			[ 'h', 'ߊ' ],
			[ 'k', 'ߝ' ],
			[ 'j', 'ߖ' ],
			[ 'k', 'ߞ' ],
			[ 'l', 'ߣ' ],
			[ 'm', 'ߟ' ],
			[ ';', 'ߕ' ],
			[ "'", 'ߓ' ],

			[ 'z', 'ߐ' ],
			[ 'x', '\u07F2' ],
			[ 'v', 'ߴ' ],
			[ 'c', 'ߵ' ],
			[ 'b', '\u07EC' ],
			[ 'n', '\u07EB' ],
			[ '!', '߹' ],
			[ ',', 'ߛ' ],
			[ '\\.', 'ߘ' ],
			[ '/', 'ߞ' ]
		]
	};

	$.ime.register( nqoStandardQwerty );
}( jQuery ) );
