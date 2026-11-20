( function ( $ ) {
	'use strict';

	var suSundanese = {
		id: 'su-sundanese',
		name: 'su-sundanese',
		description: 'Sundanese keyboard (Sundanese Script)',
		date: '2026-11-09',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/su-sundanese',
		author: 'Mapping by Rafka Aditia and Deepturquoise, Implementation by Sarah Wu',
		license: 'GPLv3',
		version: '1.0',
		patterns: [

            // Standalone Consonant
			[ 'k', 'ᮊ' ],
			[ 'g', 'ᮌ' ],
			[ 'G', 'ᮍ' ],
			[ 'c', 'ᮎ' ],
			[ 'j', 'ᮏ' ],
			[ 'J', 'ᮑ' ],
			[ 't', 'ᮒ' ],
			[ 'd', 'ᮓ' ],
			[ 'n', 'ᮔ' ],
			[ 'p', 'ᮕ' ],
			[ 'b', 'ᮘ' ],
			[ 'm', 'ᮙ' ],
			[ 'y', 'ᮚ' ],
			[ 'r', 'ᮛ' ],
			[ 'l', 'ᮜ' ],
			[ 'w', 'ᮝ' ],
			[ 's', 'ᮞ' ],
			[ 'f', 'ᮖ' ],
			[ 'v', 'ᮗ' ],
			[ 'q', 'ᮋ' ],
			[ 'x', 'ᮟ' ],
			[ 'z', 'ᮐ' ],
			[ 'K', 'ᮮ' ],
			[ 'S', 'ᮯ' ],
            [ 'h', 'ᮠ' ],

            // Standalone Vowels
			[ 'a', 'ᮃ' ],
			[ '\\{', 'ᮆ' ],
			[ 'I', 'ᮄ' ],
			[ 'O', 'ᮇ' ],
			[ 'U', 'ᮅ' ],
			[ 'E', 'ᮈ' ],
			[ '\\}', 'ᮉ' ],

            // Diacritic Vowels
			[ '\\[', '\u1BA6' ], // SUNDANESE VOWEL SIGN PANAELAENG (ae)
			[ 'i', '\u1BA4' ], // SUNDANESE VOWEL SIGN PANGHULU (i)
			[ 'o', '\u1BA7' ], // SUNDANESE VOWEL SIGN PANOLONG (o)
			[ 'u', '\u1BA5' ], // SUNDANESE VOWEL SIGN PANYUKU (u)
			[ 'e', '\u1BA8' ], // SUNDANESE VOWEL SIGN PAMEPET (e)
			[ ']', '\u1BA9' ], // SUNDANESE VOWEL SIGN PANEULEUNG (eu)

            // Diacritic Consonants
			[ 'Q', '\u1B81' ], // adds a final /r/
			[ 'N', '\u1B80' ], // adds a final /ng/
			[ 'R', '\u1BA2' ], // inserts an /r/
			[ 'L', '\u1BA3' ], // inserts an /l/
			[ 'Y', '\u1BA1' ], // inserts a /y/
			[ 'H', '\u1B82' ], // adds a final /h/
			[ '\\;', '\u1BAA' ],

            // Numerals
			[ '0', '᮰' ],
			[ '1', '᮱' ],
			[ '2', '᮲' ],
			[ '3', '᮳' ],
			[ '4', '᮴' ],
			[ '5', '᮵' ],
			[ '6', '᮶' ],
			[ '7', '᮷' ],
			[ '8', '᮸' ],
			[ '9', '᮹' ]
		]
	};

	$.ime.register( suSundanese );
}( jQuery ) );
