( function ( $ ) {
	'use strict';

	var skKbd = {
		id: 'sk-kbd',
		name: 'Slovak kbd',
		description: 'Slovak kbd keyboard layout',
		date: '2013-06-26',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/sk-kbd',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.1',
		patterns: [
			[ '1', '+' ],
			[ '2', 'ľ' ],
			[ '3', 'š' ],
			[ '4', 'č' ],
			[ '5', 'ť' ],
			[ '6', 'ž' ],
			[ '7', 'ý' ],
			[ '8', 'á' ],
			[ '9', 'í' ],
			[ '0', 'é' ],
			[ '!', '1' ],
			[ '@', '2' ],
			[ '#', '3' ],
			[ '\\$', '4' ],
			[ '%', '5' ],
			[ '\\^', '6' ],
			[ '&', '7' ],
			[ '\\*', '8' ],
			[ '\\(', '9' ],
			[ '\\)', '0' ],
			[ '-', '=' ],
			[ '_', '%' ],
			[ '=', '´' ],
			[ '\\+', 'ˇ' ],
			[ '\\[', 'ú' ],
			[ '\\{', '/' ],
			[ '\\]', 'ä' ],
			[ '\\}', '(' ],
			[ '\\\\', 'ň' ],
			[ '\\|', ')' ],
			[ ';', 'ô' ],
			[ ':', '"' ],
			[ '\'', '§' ],
			[ '"', '!' ],
			[ '\\<', '?' ],
			[ '\\>', ':' ],
			[ '/', '-' ],
			[ '\\?', '_' ],
			[ '`', ';' ],
			[ '~', '°' ],

			[ '´a', 'á' ],
			[ '´A', 'Á' ],
			[ '´e', 'é' ],
			[ '´E', 'É' ],
			[ '´i', 'í' ],
			[ '´I', 'Í' ],
			[ '´l', 'ĺ' ],
			[ '´L', 'Ĺ' ],
			[ '´o', 'ó' ],
			[ '´O', 'Ó' ],
			[ '´r', 'ŕ' ],
			[ '´R', 'Ŕ' ],
			[ '´u', 'ú' ],
			[ '´U', 'Ú' ],
			[ '´y', 'ý' ],
			[ '´Y', 'Ý' ],

			[ '¨a', 'ä' ],
			[ '¨A', 'Ä' ],
			[ '\\^o', 'ô' ],
			[ '\\^O', 'Ô' ],

			[ 'ˇc', 'č' ],
			[ 'ˇC', 'Č' ],
			[ 'ˇd', 'ď' ],
			[ 'ˇD', 'Ď' ],
			[ 'ˇl', 'ľ' ],
			[ 'ˇL', 'Ľ' ],
			[ 'ˇn', 'ň' ],
			[ 'ˇN', 'Ň' ],
			[ 'ˇs', 'š' ],
			[ 'ˇS', 'Š' ],
			[ 'ˇt', 'ť' ],
			[ 'ˇT', 'Ť' ],
			[ 'ˇz', 'ž' ],
			[ 'ˇZ', 'Ž' ],

			// It's QWERTZ
			[ 'y', 'z' ],
			[ 'z', 'y' ],
			[ 'Y', 'Z' ],
			[ 'Z', 'Y' ]
		],
		patterns_x: [
			[ '3', '^' ],
			[ '=', '¨' ]
		]
	};

	$.ime.register( skKbd );
}( jQuery ) );
