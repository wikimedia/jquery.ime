( function ( $ ) {
	'use strict';

	var mrPhonetic = {
		id: 'mr-phonetic',
		name: 'फोनेटिक',
		description: 'Phonetic keyboard for Marathi language',
		date: '2013-02-09',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/mr-phonetic',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '्f', '्\u200c' ],
			[ '~', 'ऎ' ],
			[ '`', 'ॆ' ],
			[ '!', 'ऍ' ],
			[ '1', '१' ],
			[ '\\@","ॅ' ],
			[ '2', '२' ],
			[ '\\#', 'ऑ' ],
			[ '3', '३' ],
			[ '\\$', 'ॉ' ],
			[ '4', '४' ],
			[ '\\%', 'ञ' ],
			[ '5', '५' ],
			[ '6', '६' ],
			[ '7', '७' ],
			[ '8', '८' ],
			[ '\\(', '(' ],
			[ '9', '९' ],
			[ '\\)', ')' ],
			[ '0', '०' ],
			[ '\\_', '_' ],
			[ '\\-', '-' ],
			[ '\\+', '+' ],
			[ '\\=', '=' ],
			[ 'Q', 'औ' ],
			[ 'q', 'ओ' ],
			[ 'W', 'ठ' ],
			[ 'w', 'ट' ],
			[ 'E', 'ै' ],
			[ 'e', 'े' ],
			[ 'R', 'ृ' ],
			[ 'r', 'र' ],
			[ 'T', 'थ' ],
			[ 't', 'त' ],
			[ 'Y', 'य़' ],
			[ 'y', 'य' ],
			[ 'U', 'ू' ],
			[ 'u', 'ु' ],
			[ 'I', 'ी' ],
			[ 'i', 'ि' ],
			[ 'O', 'ौ' ],
			[ 'o', 'ो' ],
			[ 'P', 'फ' ],
			[ 'p', 'प' ],
			[ '\\{', 'ढ' ],
			[ '\\[', 'ड' ],
			[ '\\}', 'ऱ' ],
			[ '\\]', 'ऋ' ],
			[ 'A', 'आ' ],
			[ 'a', 'ा' ],
			[ 'S', 'श' ],
			[ 's', 'स' ],
			[ 'D', 'ध' ],
			[ 'd', 'द' ],
			[ 'F', 'अ' ],
			[ 'f', '्' ],
			[ 'G', 'घ' ],
			[ 'g', 'ग' ],
			[ 'H', 'ः' ],
			[ 'h', 'ह' ],
			[ 'J', 'झ' ],
			[ 'j', 'ज' ],
			[ 'K', 'ख' ],
			[ 'k', 'क' ],
			[ 'L', 'ळ' ],
			[ 'l', 'ल' ],
			[ ':', 'ई' ],
			[ ';', 'इ' ],
			[ '"', 'ऊ' ],
			[ '\'', 'उ' ],
			[ '\\|', 'ऒ' ],
			[ '\\\\', 'ॊ' ],
			[ 'Z', 'ँ' ],
			[ 'z', 'ङ' ],
			[ 'x', 'ष' ],
			[ 'C', 'छ' ],
			[ 'c', 'च' ],
			[ 'V', 'ऴ' ],
			[ 'v', 'व' ],
			[ 'B', 'भ' ],
			[ 'b', 'ब' ],
			[ 'N', 'ण' ],
			[ 'n', 'न' ],
			[ 'M', 'ं' ],
			[ 'm', 'म' ],
			[ '\\<', 'ऩ' ],
			[ ',', ',' ],
			[ '\\>', '़' ],
			[ '\\?', 'ऐ' ],
			[ '/', 'ए' ],
			[ '\\^', 'ज्ञ' ],
			[ 'X', 'क्ष' ],
			[ '\\*', 'श्र' ]
		]
	};

	$.ime.register( mrPhonetic );
}( jQuery ) );
