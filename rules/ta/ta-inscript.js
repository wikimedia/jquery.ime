( function ( $ ) {
	'use strict';

	var taInScript = {
		id: 'ta-inscript',
		name: 'இன்ஸ்கிரிப்ட்',
		description: 'Tamil InScript Keyboard',
		date: '2012-11-20',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ta-inscript',
		author: 'Junaid P V',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 4,
		patterns: [
			[ '`', 'ொ' ],
			[ '~', 'ஒ' ],

			[ '&', 'க்ஷ' ],
			[ '\\*', 'ஷ்ர' ],

			// ['\\(', '\u200D'], // ZWJ is not used in Tamil.
			[ '\\)', '\u200C' ], // ZWNJ

			[ '_', 'ஃ' ],

			[ 'q', 'ௌ' ],
			[ 'Q', 'ஔ' ],
			[ 'w', 'ை' ],
			[ 'W', 'ஐ' ],
			[ 'e', 'ா' ],
			[ 'E', 'ஆ' ],
			[ 'r', 'ீ' ],
			[ 'R', 'ஈ' ],
			[ 't', 'ூ' ],
			[ 'T', 'ஊ' ],
			[ 'u', 'ஹ' ],
			[ 'U', 'ங' ],
			[ 'p', 'ஜ' ],
			[ '\\}', 'ஞ' ],

			[ 'a', 'ோ' ],
			[ 'A', 'ஓ' ],
			[ 's', 'ே' ],
			[ 'S', 'ஏ' ],
			[ 'd', '்' ],
			[ 'D', 'அ' ],
			[ 'f', 'ி' ],
			[ 'F', 'இ' ],
			[ 'g', 'ு' ],
			[ 'G', 'உ' ],
			[ 'h', 'ப' ],
			[ 'j', 'ர' ],
			[ 'J', 'ற' ],
			[ 'k', 'க' ],
			[ 'l', 'த' ],
			[ ';', 'ச' ],
			[ '\'', 'ட' ],

			[ 'z', 'ெ' ],
			[ 'Z', 'எ' ],
			// ['x', 'ஂ'], -- Anusvara is not used in Tamil.
			[ 'c', 'ம' ],
			[ 'C', 'ண' ],
			[ 'v', 'ந' ],
			[ 'V', 'ன' ],
			[ 'b', 'வ' ],
			[ 'B', 'ழ' ],
			[ 'n', 'ல' ],
			[ 'N', 'ள' ],
			[ 'm', 'ஸ' ],
			[ 'M', 'ஶ' ],
			[ '<', 'ஷ' ],
			[ '/', 'ய' ],

			[ '1', '௧' ],
			[ '2', '௨' ],
			[ '3', '௩' ],
			[ '4', '௪' ],
			[ '5', '௫' ],
			[ '6', '௬' ],
			[ '7', '௭' ],
			[ '8', '௮' ],
			[ '9', '௯' ],
			[ '0', '௦' ] ],

		patterns_x: [
			[ 'X', 'ௐ' ],
			[ '\\)', '௰' ],
			[ '-', '௱' ],
			[ '=', '௲' ],
			[ 'n', '௳' ],
			[ 'c', '௴' ],
			[ 'b', '௵' ],
			[ 'h', '௶' ],
			[ 'y', '௷' ],
			[ 'C', '௸' ],
			[ ',', '௹' ],
			[ 'V', '௺' ],
			[ '4', '₹' ] ]
	};
	$.ime.register( taInScript );
}( jQuery ) );
