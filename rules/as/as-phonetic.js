( function ( $ ) {
	'use strict';

	var asPhonetic = {
		id: 'as-phonetic',
		name: 'phonetic',
		description: 'Phonetic keyboard for Assamese script',
		date: '2013-02-09',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/as-phonetic',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '\\!', '!' ],
			[ '1', '১' ],
			[ '\\@', '@' ],
			[ '2', '২' ],
			[ '\\#', '#' ],
			[ '3', '৩' ],
			[ '\\$', 'ৎ' ],
			[ '4', '৪' ],
			[ '\\%', '%' ],
			[ '5', '৫' ],
			[ '\\^', 'ঞ' ],
			[ '6', '৬' ],
			[ '\\&', '&' ],
			[ '7', '৭' ],
			[ '\\*', '*' ],
			[ '8', '৮' ],
			[ '\\(', '(' ],
			[ '9', '৯' ],
			[ '\\)', ')' ],
			[ '0', '০' ],
			[ '\\_', '_' ],
			[ '\\-', '-' ],
			[ '\\+', '+' ],
			[ '\\=', '=' ],
			[ 'Q', 'ধ' ],
			[ 'q', 'দ' ],
			[ 'W', 'ঊ' ],
			[ 'w', 'ূ' ],
			[ 'E', 'ঈ' ],
			[ 'e', 'ী' ],
			[ 'R', 'ড়' ],
			[ 'r', 'ৰ' ],
			[ 'T', 'ঠ' ],
			[ 't', 'ট' ],
			[ 'Y', 'ঐ' ],
			[ 'y', 'এ' ],
			[ 'U', 'উ' ],
			[ 'u', 'ু' ],
			[ 'I', 'ই' ],
			[ 'i', 'ি' ],
			[ 'O', 'ঔ' ],
			[ 'o', 'ও' ],
			[ 'P', 'ফ' ],
			[ 'p', 'প' ],
			[ '\\{', 'ৈ' ],
			[ '\\[', 'ে' ],
			[ '\\}', 'ৌ' ],
			[ '\\]', 'ো' ],
			[ 'A', 'অ' ],
			[ 'a', 'া' ],
			[ 'S', 'ষ' ],
			[ 's', 'স' ],
			[ 'D', 'ঢ' ],
			[ 'd', 'ড' ],
			[ 'F', 'থ' ],
			[ 'f', 'ত' ],
			[ 'G', 'ঘ' ],
			[ 'g', 'গ' ],
			[ 'H', 'ঃ' ],
			[ 'h', 'হ' ],
			[ 'J', 'ঝ' ],
			[ 'j', 'জ' ],
			[ 'K', 'খ' ],
			[ 'k', 'ক' ],
			[ 'L', 'ং' ],
			[ 'l', 'ল' ],
			[ ':', ':' ],
			[ ';', ';' ],
			[ '"', '"' ],
			[ '\'', '\'' ],
			[ '\\|', '৺' ],
			[ '\\\\', 'ৱ' ],
			[ '\\~', '\u200c' ],
			[ '\\`', '\u200d' ],
			[ 'Z', 'য' ],
			[ 'z', 'য়' ],
			[ 'X', 'ঢ়' ],
			[ 'x', 'শ' ],
			[ 'C', 'ছ' ],
			[ 'c', 'চ' ],
			[ 'V', 'ঋ' ],
			[ 'v', 'আ' ],
			[ 'B', 'ভ' ],
			[ 'b', 'ব' ],
			[ 'N', 'ণ' ],
			[ 'n', 'ন' ],
			[ 'M', 'ঙ' ],
			[ 'm', 'ম' ],
			[ '\\<', 'ৃ' ],
			[ ',', ',' ],
			[ '\\>', 'ঁ' ],
			[ '\\.', '।' ],
			[ '\\?', '?' ],
			[ '/', '্' ]
		]
	};

	$.ime.register( asPhonetic );
}( jQuery ) );
