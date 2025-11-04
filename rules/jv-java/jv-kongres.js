( function ( $ ) {
	'use strict';

	var jawaKbd = {
		id: 'jv-kongres',
		name: 'Aksara Jawa Kongres',
		description: 'Papan Tombol Aksara Jawa berdasarkan Kongres Aksara Jawa I - 2021',
		date: '2023-04-06',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/kongres-aksara-jawa',
		author: 'Benny Lin',
		version: '1.0',
		patterns: [
			[ 'q', '꧀' ], //pangkon
			[ 'w', 'ꦮ' ],
			[ 'e', 'ꦺ' ], //taling
			[ 'r', 'ꦫ' ],
			[ 't', 'ꦠ' ],
			[ 'y', 'ꦪ' ],
			[ 'u', 'ꦸ' ], //suku
			[ 'i', 'ꦶ' ], //wulu
			[ 'o', 'ꦺꦴ' ], //taling tarung
			[ 'p', 'ꦥ' ],

			[ 'a', 'ꦔ' ], //nga
			[ 's', 'ꦱ' ],
			[ 'd', 'ꦢ' ],
			[ 'f', 'ꦉ' ], //rx
			[ 'g', 'ꦒ' ],
			[ 'h', 'ꦲ' ],
			[ 'j', 'ꦗ' ],
			[ 'k', 'ꦏ' ],
			[ 'l', 'ꦭ' ],
			[ ';', 'ꦝ' ], //dha
			[ "'", 'ꦛ' ], //tha

			[ 'z', 'ꦚ' ], //nya
			[ 'x', 'ꦼ' ], //pepet
			[ 'c', 'ꦕ' ],
			[ 'v', 'ꦊ' ], //lx
			[ 'b', 'ꦧ' ],
			[ 'n', 'ꦤ' ],
			[ 'm', 'ꦩ' ],

			[ 'Q', 'ꦐ' ], //ka sasak
			[ 'W', 'ꦻ' ], //dirga mure
			[ 'E', 'ꦌ' ],
			[ 'R', 'ꦿ' ], //cakra
			[ 'T', 'ꦡ' ],
			[ 'Y', 'ꦾ' ], //pengkal
			[ 'U', 'ꦈ' ],
			[ 'I', 'ꦆ' ],
			[ 'O', 'ꦎ' ],
			[ 'P', 'ꦦ' ],

			[ 'A', 'ꦄ' ],
			[ 'S', 'ꦯ' ],
			[ 'D', 'ꦣ' ],
			[ 'F', 'ꦽ' ], //cakra keret
			[ 'G', 'ꦓ' ],
			[ 'H', 'ꦃ' ], //wignyan
			[ 'J', 'ꦘ' ], //nya murda
			[ 'K', 'ꦑ' ],
			[ 'L', 'ꦴ' ], //tarung

			[ 'Z', 'ꦰ' ],
			[ 'X', 'ꦬ' ], //ra agung
			[ 'C', 'ꦖ' ],
			[ 'V', 'ꦋ' ], //nga lelet raswadi
			[ 'B', 'ꦨ' ],
			[ 'N', 'ꦟ' ],
			[ 'M', 'ꦍ' ], //Ai

			[ '`', '꧇' ],
			[ '1', '꧑' ],
			[ '2', '꧒' ],
			[ '3', '꧓' ],
			[ '4', '꧔' ],
			[ '5', '꧕' ],
			[ '6', '꧖' ],
			[ '7', '꧗' ],
			[ '8', '꧘' ],
			[ '9', '꧙' ],
			[ '0', '꧐' ],
			[ '-', '꦳' ],
			[ '=', 'ꦀ' ],

			[ '~', '꧊' ],
			[ '!', 'ꦵ' ],
			[ '@', 'ꧏ' ],
			[ '#', '꧐' ],
			[ '\\$', '꧞' ],
			[ '\\%', '꧟' ],
			[ '\\^', '꧃' ],
			[ '\\&', '꧄' ],
			[ '\\*', '꧅' ],
			[ '\\(', '꧌' ],
			[ '\\)', '꧍' ],
			[ '\\_', 'ꦷ' ], //wulu melik
			[ '\\+', 'ꦙ' ], //ja mahaprana

			[ '\\[', 'ꦁ' ], //cecak
			[ '\\]', 'ꦂ' ], //layar
			[ '\\\\', '‌' ], //zwnj - zero-width non-joiner
			[ '\\,', '꧈' ],
			[ '\\.', '꧉' ],
			[ '\\/', '꧋' ],

			[ '\\{', '꧁' ],
			[ '\\}', '꧂' ],
			[ '\\|', '​' ], //zws - zero-width space
			[ '\\:', 'ꦞ' ],
			[ '\\"', 'ꦜ' ],
			[ '\\<', 'ꦹ' ], //suku mendut
			[ '\\>', 'ꦅ' ],
			[ '\\?', 'ꦇ' ]
		]
	};

	$.ime.register( jawaKbd );
}( jQuery ) );