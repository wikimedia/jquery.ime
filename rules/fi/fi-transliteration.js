( function ( $ ) {
	'use strict';

	var fiTransliteration = {
		id: 'fi-transliteration',
		name: 'translitterointi',
		description: 'Finnish transliteration',
		date: '2012-11-10',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/fi-transliteration',
		author: 'Niklas Laxström',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 2,
		patterns: [
			[ '\\.a', 'å' ],
			[ '\\.A', 'Å' ],
			[ ':a', 'ä' ],
			[ ':A', 'Ä' ],
			[ ':o', 'ö' ],
			[ ':O', 'Ö' ],
			[ 'shh', 'š' ],
			[ 'Shh', 'Š' ],
			[ '\\.e', '€' ]
		],
		patterns_x: [
			[ 'e', '€' ]
		]
	};

	$.ime.register( fiTransliteration );
}( jQuery ) );
