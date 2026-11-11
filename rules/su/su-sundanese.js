( function ( $ ) {
	'use strict';

	var suSundanese = {
		id: 'su-sundanese',
		name: 'su-sundanese',
		description: 'Sundanese keyboard (Sundanese Script)',
		date: '2026-11-09',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/su-sundanese',
		author: 'Mapping by Rafka Aditia, Implementation by Sarah Wu',
		license: 'GPLv3',
		version: '1.0',
        contextLength: '3',
        maxKeyLength: '3',
		patterns: [

            // Consonants
            [ 'ᮀa', 'ng', 'ᮍ' ], // nga
            [ 'kᮂa','kh', 'ᮮ' ], // kha
			[ 'sᮡa','sy', 'ᮯ' ], // sya
            [ 'nᮡa', 'ny', 'ᮑ' ], // nya
			[ 'ka', 'ᮊ' ], // ka
            [ 'ga', 'ᮌ' ], // ga
            [ 'ca', 'ᮎ' ], // ca
            [ 'ja', 'ᮏ' ], // ja
            [ 'ta', 'ᮒ' ], // ta
            [ 'da', 'ᮓ' ], // da
            [ 'na', 'ᮔ' ], // na
            [ 'pa', 'ᮕ' ], // pa
            [ 'ba', 'ᮘ' ], // ba
            [ 'ma', 'ᮙ' ], // ma
            [ 'ᮡa', 'y', 'ᮚ' ], // ya
            [ 'ᮁa', 'r', 'ᮛ' ], // ra
            [ 'ᮣa', 'l', 'ᮜ' ], // la
            [ 'wa', 'ᮝ' ], // wa
            [ 'sa', 'ᮞ' ], // sa
            [ 'ᮂa', 'h', 'ᮠ' ], // ha
            [ 'qa', 'ᮋ' ], // qa
            [ 'za', 'ᮐ' ], // za
            [ 'fa', 'ᮖ' ], // fa
            [ 'va', 'ᮗ' ], // va
            [ 'xa', 'ᮟ' ], // xa

            // Vowel Diacritics
            [ 'ᮄi', 'i', ' ᮤ' ],
            [ 'ᮅu', 'u', ' ᮥ' ],
            [ 'ᮆé','e', ' ᮦ' ],
            [ 'ᮇo','o', ' ᮧ' ],
            [ 'ᮉᮈu', 'eue', ' ᮩ' ],
            [ 'ᮈu', 'e','ᮉ' ],
            [ 'ᮈe','e', ' ᮨ' ],
            [ '᮪\\^', '\\^', '^' ],
            [ '\\^', '', '᮪' ], // Base consonant without vowel "a"

            // Standalone Vowels
            [ 'a', 'ᮃ' ],
            [ 'e', 'ᮈ' ],
            [ 'é', 'ᮆ' ],
            [ 'i', 'ᮄ' ],
            [ 'o', 'ᮇ' ],
			[ 'u', 'ᮅ' ],

            // Numerals
            [ '1', '᮱' ],
			[ '2', '᮲' ],
			[ '3', '᮳' ],
			[ '4', '᮴' ],
			[ '5', '᮵' ],
            [ '6', '᮶' ],
            [ '7', '᮷' ],
            [ '8', '᮸' ],
            [ '9', '᮹' ],
            [ '0', '᮰' ],

            // Consonant Diacritics
            [ 'ᮁr', 'r', 'ᮢ' ],
            [ 'r', 'ᮁ' ],
			[ 'ng', 'ᮀ' ],
			[ 'l', 'ᮣ' ],
			[ 'y', 'ᮡ' ],
            [ 'h', 'ᮂ' ]

		]
	};

	$.ime.register( suSundanese );
}( jQuery ) );
