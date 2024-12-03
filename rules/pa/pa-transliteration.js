( function ( $ ) {
	'use strict';

	var paTransliteration = {
		id: 'pa-transliteration',
		name: 'Punjabi Transliteration',
		description: 'Punjabi transliteration',
		date: '2022-08-28',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni, inputs from Saurabh Choudhary, Surinder Wadhawan, bgo_eiu',
		license: 'GPLv3',
		version: '2.0',
		contextLength: 2,
		maxKeyLength: 4,
		/* Semi-automatically created from the Hindi transliteration mapping using
		 * the following Perl substitution:
		 * s{(?<deva_letter>[ऀ-ॿ])}{chr(ord($+{deva_letter}) + 0x100)}xmsge;
		 */
		patterns: [
			[ 'ਕh', 'c', 'ਚ' ],
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],

			// ਕ-ਹ is the main range of Indic letters.
			// ਖ਼, ਗ਼, ਜ਼, ੜ, ਫ਼ is are additional Gurmukhi letters.
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)', '$1' ],
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)a', '$1ਾ' ], // 'a' after a consonant adds long [a]
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)i', '$1ਿ' ],
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)(ਿi|I|ੇe)', '$1ੀ' ], // 'ii', 'I' and 'ee' give long [i].
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)u', '$1ੁ' ],
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)(ੁu|U|ੋo)', '$1ੂ' ], // 'uu', 'U' and 'oo' give long [u].
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)e', '$1ੇ' ],
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)E', '$1ੈ' ], // 'E' after a consonant gives "ai"
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)o', '$1ੋ' ],
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼]਼?)O', '$1ੌ' ], // 'u' after a consonant gives "au"
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼])~', '$1ੑ' ], // '~' after a consonant adds virama
			[ '([ਕ-ਹਖ਼ਗ਼ਜ਼ੜਫ਼])੍\\`', '$1਼੍' ], // '`' (backtick) after a consonant with virama adds a nukta before the virama

			[ 'ਅa', 'ਆ' ], // aa
			[ '(ਓo|ਉu)', 'ਊ' ], // oo, uu
			[ 'ਅi', 'ਐ' ], // ai
			[ 'ਅ\\^', 'ੲ' ], // a^ (iri - base for vowels)
			[ 'ਉ\\^', 'ੳ' ], // u^ (ura - base for vowels)
			[ '(ਏe|ਇi)', 'ਈ' ], // ee, ii
			[ 'ਅu', 'ਔ' ], // au
			[ 'ਂ[Mm^]', 'ਁ' ], // bindi + 'm', 'M', or '^' -> Adak bindi
			[ 'ਣN', 'ੰ' ], // Tippi - nasalization

			[ 'ਕh', 'ਖ' ], // kh
			[ 'ਗh', 'ਘ' ], // gh
			[ 'ਨg', 'ਙ' ], // ng
			[ 'ਚh', 'ਛ' ], // ch
			[ 'ਜh', 'ਝ' ], // jh
			[ 'ਨj', 'ਞ' ], // nj
			[ 'ਟh', 'ਠ' ], // Th
			[ 'ਡh', 'ਢ' ], // Dh
			[ 'ਤh', 'ਥ' ], // th
			[ 'ਦh', 'ਧ' ], // dh
			[ 'ਪh', 'ਫ' ], // ph
			[ 'ਬh', 'ਭ' ], // bh

			[ 'ਸh', 'ਸ਼' ], // sh
			[ 'ਕ਼h', 'ਖ਼' ], // k + nukta + h

			[ 'a', 'ਅ' ],
			[ 'b', 'ਬ' ],
			[ 'c', 'ਚ' ],
			[ 'd', 'ਦ' ],
			[ 'e', 'ਏ' ],
			[ 'f', 'ਫ' ],
			[ 'F', 'ਫ਼' ],
			[ 'g', 'ਗ' ],
			[ 'h', 'ਹ' ],
			[ 'i', 'ਇ' ],
			[ 'j', 'ਜ' ],
			[ 'k', 'ਕ' ],
			[ 'l', 'ਲ' ],
			[ 'm', 'ਮ' ],
			[ 'n', 'ਨ' ],
			[ 'o', 'ਓ' ],
			[ 'p', 'ਪ' ],
			[ 'q', 'ਕ਼' ],
			[ 'r', 'ਰ' ],
			[ 's', 'ਸ' ],
			[ 't', 'ਤ' ],
			[ 'u', 'ਉ' ],
			[ '(v|w)', 'ਵ੍' ],
			[ 'y', 'ਯ੍' ],
			[ 'z', 'ੱ' ], // Addak - gemination
			[ 'A', 'ਆ' ],
			[ 'D', 'ਡ' ],
			[ 'F', 'ਫ਼' ],
			[ 'G', 'ਗ਼' ],
			[ 'H', 'ਃ' ], // Visarga
			[ 'I', 'ਈ' ],
			[ 'J', 'ਜ਼' ],
			[ 'K', 'ਖ਼' ],
			[ 'L', 'ਲ਼'],
			[ 'M', 'ਂ' ], // Bindi
			[ 'N', 'ਣ' ],
			[ 'Q', 'ੑ'], // Udaat
			[ 'R', 'ੜ' ], // Rra
			[ 'S', 'ਸ਼' ],
			[ 'T', 'ਟ' ],
			[ 'U', 'ਊ' ],
			[ 'X', 'ੴ' ], // Ek onkar
			[ 'Y', 'ੵ' ], // Yakash
			[ 'Z', '.' ],
			[ '0', '੦' ],
			[ '1', '੧' ],
			[ '2', '੨' ],
			[ '3', '੩' ],
			[ '4', '੪' ],
			[ '5', '੫' ],
			[ '6', '੬' ],
			[ '7', '੭' ],
			[ '8', '੮' ],
			[ '9', '੯' ],
			[ '~', '੍' ], // Virama
			[ '\\`', '਼' ], // Nukta

			[ '।\\.', '॥' ], // Double danda, must be before single danda
			[ '\\.', '।' ] // Danda
		]
	};

	$.ime.register( paTransliteration );
}( jQuery ) );
