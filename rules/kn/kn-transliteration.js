( function ( $ ) {
	'use strict';

	var knTransliteration = {
		id: 'kn-transliteration',
		name: 'ಲಿಪ್ಯಂತರಣ',
		description: 'Kannada transliteration',
		date: '2012-10-14',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/kn-transliteration',
		author: 'M G Harish, HP Nadig ',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 5,
		maxKeyLength: 3,
		patterns: [
			[ 'ಕ್h', 'c', 'ಚ್' ],
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],
			// For users accustomed to Baraha
			[ 'ಜ್್j', 'ಜ್ಞ್' ],
			[ '([ಕ-ಹೞ]಼?)್a', '$1' ],
			[ '([ಕ-ಹೞ]಼?)್A', '$1ಾ' ],
			[ '([ಕ-ಹೞ]಼?)a', '$1ಾ' ],
			[ '([ಕ-ಹೞ]಼?)್i', '$1ಿ' ],
			[ '([ಕ-ಹೞ]಼?)(್I|ಿi|ೆe)', '$1ೀ' ],
			[ '([ಕ-ಹೞ]಼?)್u', '$1ು' ],
			[ '([ಕ-ಹೞ]಼?)(ುu|್U|ೊo)', '$1ೂ' ],
			[ '([ಕ-ಹೞ]಼?)್R', '$1ೃ' ],
			[ '([ಕ-ಹೞ]಼?)ೃR', '$1ೄ' ],
			[ '([ಕ-ಹೞ]಼?)್e', '$1ೆ' ],
			[ '([ಕ-ಹೞ]಼?)್E', '$1ೇ' ],
			[ '([ಕ-ಹೞ]಼?)i', '$1ೈ' ],
			[ '([ಕ-ಹೞ]಼?)್o', '$1ೊ' ],
			[ '([ಕ-ಹೞ]಼?)್O', '$1ೋ' ],
			[ '([ಕ-ಹೞ]಼?)u', '$1ೌ' ],
			[ '([ಕ-ಹೞ])್\\`', '$1़್' ],
			[ '([ಕ-ಹೞ]಼?)್W', '$1ೌ' ],
			[ '([ಕ-ಹೞ]಼?)್Y', '$1ೈ' ],

			[ 'ಅa', 'ಆ' ],
			[ '(ಒo|ಉu)', 'ಊ' ],
			[ 'ಅi', 'ಐ' ],
			[ '(ಇi|ಎe)', 'ಈ' ],
			[ 'ಅu', 'ಔ' ],
			[ 'ಋR', 'ೠ' ],
			[ 'ಓ~M', 'ॐ' ],

			[ '~l', 'ೞ್' ],
			[ '~h', 'ಹ್' ],
			[ '~r', 'ಱ್' ],
			[ 'q', 'ಱ್' ],
			[ 'Q', 'ೞ್' ],
			[ 'ಕ್h', 'ಖ್' ],
			[ 'ಗ್h', 'ಘ್' ],
			[ '~g', 'ಙ್' ],
			[ '~N', 'ಙ್' ],
			[ 'ಚ್h', 'ಛ್' ],
			[ 'ಜ್h', 'ಝ್' ],
			[ '~j', 'ಞ್' ],
			[ '~n', 'ಞ್' ],
			[ 'ಟ್h', 'ಠ್' ],
			[ 'ಡ್h', 'ಢ್' ],
			[ 'ತ್h', 'ಥ್' ],
			[ 'ದ್h', 'ಧ್' ],
			[ 'ಪ್h', 'ಫ್' ],
			[ 'ಬ್h', 'ಭ್' ],
			[ 'ಸ್h', 'ಶ್' ],
			[ 'ಶ್h', 'ಷ್' ],

			[ 'ಋa', 'ರ' ],
			[ 'ಋA', 'ರಾ' ],
			[ 'ಋi', 'ರಿ' ],
			[ 'ಋI', 'ರೀ' ],
			[ 'ಋu', 'ರು' ],
			[ 'ಋU', 'ರೂ' ],
			[ 'ಋe', 'ರೆ' ],
			[ 'ಋE', 'ರೇ' ],

			[ 'X', '\u200C' ], // 0x200C Zero width non-joiner
			[ 'x', '\u200D' ], // 0x200D Zero width joiner

			[ '([ಕ-ಹೞ]಼?)ೃa', '$1್ರ' ],
			[ '([ಕ-ಹೞ]಼?)ೃA', '$1್ರಾ' ],
			[ '([ಕ-ಹೞ]಼?)ೃi', '$1್ರಿ' ],
			[ '([ಕ-ಹೞ]಼?)ೃI', '$1್ರೀ' ],
			[ '([ಕ-ಹೞ]಼?)ೃu', '$1್ರು' ],
			[ '([ಕ-ಹೞ]಼?)ೃU', '$1್ರೂ' ],
			[ '([ಕ-ಹೞ]಼?)ೃe', '$1್ರೆ' ],
			[ '([ಕ-ಹೞ]಼?)ೃE', '$1್ರೇ' ],
			[ '([ಕ-ಹೞ]಼?)ೃo', '$1್ರೊ' ],
			[ '([ಕ-ಹೞ]಼?)ೃO', '$1್ರೋ' ],
			[ '([ಕ-ಹೞ]಼?)ೃ\\~', '$1್ರ್' ],

			[ '।\\.', '॥' ],

			[ 'a', 'ಅ' ],
			[ 'b', 'ಬ್' ],
			[ 'c', 'ಚ್' ],
			[ 'd', 'ದ್' ],
			[ 'e', 'ಎ' ],
			[ 'g', 'ಗ್' ],
			[ 'h', 'ಹ್' ],
			[ 'i', 'ಇ' ],
			[ 'j', 'ಜ್' ],
			[ 'k', 'ಕ್' ],
			[ 'l', 'ಲ್' ],
			[ 'm', 'ಮ್' ],
			[ 'n', 'ನ್' ],
			[ 'o', 'ಒ' ],
			[ 'p', 'ಪ್' ],
			[ 'r', 'ರ್' ],
			[ 's', 'ಸ್' ],
			[ 't', 'ತ್' ],
			[ 'u', 'ಉ' ],
			[ '(v|w)', 'ವ್' ],
			[ 'y', 'ಯ್' ],
			[ 'A', 'ಆ' ],
			[ 'B', 'ಭ್' ],
			[ 'C', 'ಛ್' ],
			[ 'D', 'ಡ್' ],
			[ 'E', 'ಏ' ],
			[ 'G', 'ಘ್' ],
			[ 'H', 'ಃ' ],
			[ 'I', 'ಈ' ],
			[ 'J', 'ಝ್' ],
			[ 'K', 'ಖ್' ],
			[ 'L', 'ಳ್' ],
			[ 'M', 'ಂ' ],
			[ 'N', 'ಣ್' ],
			[ 'O', 'ಓ' ],
			[ 'P', 'ಫ್' ],
			[ 'R', 'ಋ' ],
			[ 'S', 'ಶ್' ],
			[ 'T', 'ಟ್' ],
			[ 'U', 'ಊ' ],
			[ 'V', 'ವ್' ],
			[ 'W', '', 'ಔ' ],
			[ 'Y', 'ಐ' ],
			[ '(z|Z)', 'ಜ಼್' ],
			[ '(f|F)', 'ಫ಼್' ],
			[ '0', '೦' ],
			[ '1', '೧' ],
			[ '2', '೨' ],
			[ '3', '೩' ],
			[ '4', '೪' ],
			[ '5', '೫' ],
			[ '6', '೬' ],
			[ '7', '೭' ],
			[ '8', '೮' ],
			[ '9', '೯' ],
			[ '//', 'ಽ' ] ]
	};

	$.ime.register( knTransliteration );
}( jQuery ) );
