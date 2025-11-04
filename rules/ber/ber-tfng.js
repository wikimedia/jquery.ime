( function ( $ ) {
	'use strict';

	var berTfng = {
		id: 'ber-tfng',
		name: 'Tifinagh Transliteration',
		description: 'Transliteration input method for Tifinagh script',
		date: '2012-10-10',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ber-tfng',
		author: '',
		license: '',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 0,
		patterns: [
			[ 'a', 'ⴰ' ],
			[ 'b', 'ⴱ' ],
			[ 'c', 'ⵛ' ],
			[ 'd', 'ⴷ' ],
			[ 'D', 'ⴹ' ],
			[ 'e', 'ⴻ' ],
			[ 'f', 'ⴼ' ],
			[ 'F', 'ⴼⵯ' ],
			[ 'g', 'ⴳ' ],
			[ 'G', 'ⴳⵯ' ],
			[ 'h', 'ⵀ' ],
			[ 'i', 'ⵉ' ],
			[ 'j', 'ⵊ' ],
			[ 'k', 'ⴽ' ],
			[ 'K', 'ⴽⵯ' ],
			[ 'l', 'ⵍ' ],
			[ 'm', 'ⵎ' ],
			[ 'n', 'ⵏ' ],
			[ 'o', 'ⵄ' ],
			[ 'p', 'ⵃ' ],
			[ 'q', 'ⵇ' ],
			[ 'Q', 'ⵈ' ],
			[ 'r', 'ⵔ' ],
			[ 'R', 'ⵕ' ],
			[ 's', 'ⵙ' ],
			[ 'S', 'ⵚ' ],
			[ 't', 'ⵜ' ],
			[ 'T', 'ⵟ' ],
			[ 'v', 'ⵖ' ],
			[ 'u', 'ⵓ' ],
			[ 'w', 'ⵡ' ],
			[ 'y', 'ⵢ' ],
			[ 'x', 'ⵅ' ],
			[ 'z', 'ⵣ' ],
			[ 'Z', 'ⵥ' ] ]
	};
	$.ime.register( berTfng );

}( jQuery ) );
