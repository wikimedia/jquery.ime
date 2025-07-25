( function ( $ ) {
	'use strict';

	var srKbd = {
		id: 'sr-kbd',
		name: 'Serbian keyboard',
		description: 'Serbian keyboard layout',
		date: '2013-02-12',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/sr-kbd',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '\'g', 'ѓ' ],
			[ '\'G', 'Ѓ' ],
			[ '\'k', 'ќ' ],
			[ '\'K', 'Ќ' ],
			[ '\\@', '"' ],
			[ '\\^', '&' ],
			[ '\\&', '/' ],
			[ '\\*', '(' ],
			[ '\\(', ')' ],
			[ '\\)', '=' ],
			[ '\\-', '\'' ],
			[ '\\_', '?' ],
			[ '\\=', '+' ],
			[ '\\+', '*' ],
			[ 'q', 'љ' ],
			[ 'Q', 'Љ' ],
			[ 'w', 'њ' ],
			[ 'W', 'Њ' ],
			[ 'e', 'е' ],
			[ 'E', 'Е' ],
			[ 'r', 'р' ],
			[ 'R', 'Р' ],
			[ 't', 'т' ],
			[ 'T', 'Т' ],
			[ 'y', 'з' ],
			[ 'Y', 'З' ],
			[ 'u', 'у' ],
			[ 'U', 'У' ],
			[ 'i', 'и' ],
			[ 'I', 'И' ],
			[ 'o', 'о' ],
			[ 'O', 'О' ],
			[ 'p', 'п' ],
			[ 'P', 'П' ],
			[ '\\[', 'ш' ],
			[ '\\{', 'Ш' ],
			[ '\\]', 'ђ' ],
			[ '\\}', 'Ђ' ],
			[ 'a', 'а' ],
			[ 'A', 'А' ],
			[ 's', 'с' ],
			[ 'S', 'С' ],
			[ 'd', 'д' ],
			[ 'D', 'Д' ],
			[ 'f', 'ф' ],
			[ 'F', 'Ф' ],
			[ 'g', 'г' ],
			[ 'G', 'Г' ],
			[ 'h', 'х' ],
			[ 'H', 'Х' ],
			[ 'j', 'ј' ],
			[ 'J', 'Ј' ],
			[ 'k', 'к' ],
			[ 'K', 'К' ],
			[ 'l', 'л' ],
			[ 'L', 'Л' ],
			[ ';', 'ч' ],
			[ ':', 'Ч' ],
			[ '\'', 'ћ' ],
			[ '"', 'Ћ' ],
			[ '\\\\', 'ж' ],
			[ '\\|', 'Ж' ],
			[ 'z', 'ѕ' ],
			[ 'Z', 'Ѕ' ],
			[ 'x', 'џ' ],
			[ 'X', 'Џ' ],
			[ 'c', 'ц' ],
			[ 'C', 'Ц' ],
			[ 'v', 'в' ],
			[ 'V', 'В' ],
			[ 'b', 'б' ],
			[ 'B', 'Б' ],
			[ 'n', 'н' ],
			[ 'N', 'Н' ],
			[ 'm', 'м' ],
			[ 'M', 'М' ],
			[ '\\<', ';' ],
			[ '\\>', ':' ],
			[ '/', '-' ],
			[ '\\?', '_' ]
		]
	};

	$.ime.register( srKbd );
}( jQuery ) );
