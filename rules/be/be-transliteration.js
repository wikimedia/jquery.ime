( function ( $ ) {
	'use strict';

	var beTransliteration = {
		id: 'be-transliteration',
		name: 'Belarusian Transliteration',
		description: 'Belarusian transliteration per Belarusian winkeys',
		date: '2012-11-06',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/be-transliteration',
		author: 'Pavel Selitskas',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~', 'Ё' ],
			[ 'Q', 'Й' ],
			[ 'W', 'Ц' ],
			[ 'E', 'У' ],
			[ 'R', 'К' ],
			[ 'T', 'Е' ],
			[ 'Y', 'Н' ],
			[ 'U', 'Г' ],
			[ 'I', 'Ш' ],
			[ 'O', 'Ў' ],
			[ 'P', 'З' ],
			[ '\\{', 'Х' ],
			[ '\\}', '\'' ],
			[ 'A', 'Ф' ],
			[ 'S', 'Ы' ],
			[ 'D', 'В' ],
			[ 'F', 'А' ],
			[ 'G', 'П' ],
			[ 'H', 'Р' ],
			[ 'J', 'О' ],
			[ 'K', 'Л' ],
			[ 'L', 'Д' ],
			[ ':', 'Ж' ],
			[ '"', 'Э' ],
			[ 'Z', 'Я' ],
			[ 'X', 'Ч' ],
			[ 'C', 'С' ],
			[ 'V', 'М' ],
			[ 'B', 'І' ],
			[ 'N', 'Т' ],
			[ 'M', 'Ь' ],
			[ '<', 'Б' ],
			[ '>', 'Ю' ],
			[ '\\?', ',' ],

			[ '`', 'ё' ],
			[ 'q', 'й' ],
			[ 'w', 'ц' ],
			[ 'e', 'у' ],
			[ 'r', 'к' ],
			[ 't', 'е' ],
			[ 'y', 'н' ],
			[ 'u', 'г' ],
			[ 'i', 'ш' ],
			[ 'o', 'ў' ],
			[ 'p', 'з' ],
			[ '\\[', 'х' ],
			[ '\\]', '\'' ],
			[ 'a', 'ф' ],
			[ 's', 'ы' ],
			[ 'd', 'в' ],
			[ 'f', 'а' ],
			[ 'g', 'п' ],
			[ 'h', 'р' ],
			[ 'j', 'о' ],
			[ 'k', 'л' ],
			[ 'l', 'д' ],
			[ ';', 'ж' ],
			[ '\'', 'э' ],
			[ 'z', 'я' ],
			[ 'x', 'ч' ],
			[ 'c', 'с' ],
			[ 'v', 'м' ],
			[ 'b', 'і' ],
			[ 'n', 'т' ],
			[ 'm', 'ь' ],
			[ ',', 'б' ],
			[ '\\.', 'ю' ],
			[ '/', '.' ],

			[ '@', '"' ], // 2
			[ '#', '№' ], // 3
			[ '\\$', ';' ], // 4
			// '%' is the same // 5
			[ '^', ':' ], // 6
			[ '&', '?' ] ] // 7
		// '*', '(' and ')' are the same    // 8, 9, 0
	};

	$.ime.register( beTransliteration );
}( jQuery ) );
