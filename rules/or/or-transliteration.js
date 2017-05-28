( function ( $ ) {
	'use strict';

	var orTransliteration = {
		id: 'or-transliteration',
		name: 'ଟ୍ରାନ୍ସଲିଟରେସନ',
		description: 'Odia Transliteration',
		date: '2012-10-14',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Junaid P V and Subhashish Panigrahi',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 4,
		maxKeyLength: 2,
		patterns: [
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],

			[ 'ଞ୍ଜ୍h', 'ଞ୍ଝ୍' ], // "njha" with halanta
			[ 'ଙ୍ଗ୍h', 'ଙ୍ଘ୍' ], // "ngh" with halanta

			[ '([କ-ହୟ])୍a', '$1' ],
			[ '([କ-ହୟ])(a|୍A)', '$1ା' ],
			[ '([କ-ହୟ])୍i', '$1\u0b3f' ],
			[ '([କ-ହୟ])୍I', '$1ୀ' ],
			[ '([କ-ହୟ])୍u', '$1\u0b41' ],
			[ '([କ-ହୟ])(୍U|\u0b41u)', '$1\u0b42' ],
			[ '([କ-ହୟ])୍R', '$1\u0b43' ],
			[ '([କ-ହୟ])\u0b43R', '$1\u0b44' ],
			[ '([କ-ହୟ])୍ଳ୍l', '$1ୢ' ],
			[ '([କ-ହୟ])ୢl', '$1ୣ' ],
			[ '([କ-ହୟ])୍e', '$1େ' ],
			[ '([କ-ହୟ])i', '$1ୈ' ],
			[ '([କ-ହୟ])୍o', '$1ୋ' ],
			[ '([କ-ହୟ])ୋu', '$1ୌ' ],
			[ '([କ-ହୟ])୍E', '$1\u0B48' ],

			[ 'ଅa', 'ଆ' ],
			[ '(ଅi|ଏe)', 'ଐ' ],
			[ '(ଅu|ଓo|ଓO)', 'ଔ' ],
			[ 'ଋR', 'ୠ' ],
			[ 'ଳ୍l', 'ଌ' ],
			[ 'ଌl', 'ୡ' ],
			[ 'ଞ୍ଚ୍h', 'ଞ୍ଛ୍' ], // nch

			[ 'ଣ୍G', 'ଙ୍' ], // "uon" with halanta
			[ 'ଣ୍g', 'ଞ୍' ], // "nya" with halanta
			[ 'କ୍h', 'ଖ୍' ], // "kha" with halanta
			[ 'ଗ୍h', 'ଘ୍' ], // "gha" with halanta
			[ 'ନ୍c', 'ଞ୍ଚ୍' ], // "nca" with halanta
			[ 'ନ୍g', 'ଙ୍ଗ୍' ], // "nga" with halanta
			[ 'ଚ୍h', 'ଛ୍' ], // "cha" with halanta
			[ 'ଜ୍h', 'ଝ୍' ], // "jha" with halanta
			[ 'ନ୍j', 'ଞ୍ଜ୍' ], // "nj" with halanta
			[ 'ନ୍k', 'ଙ୍କ୍' ], // "nk" with halanta
			[ 'ଟ୍h', 'ଠ୍' ], // "Tha" with halanta
			[ 'ଡ୍h', 'ଢ୍' ], // "Dha" with halanta
			[ 'ତ୍h', 'ଥ୍' ], // "tha" with halanta
			[ 'ଦ୍h', 'ଧ୍' ], // "dha" with halanta
			[ 'ପ୍h', 'ଫ୍' ], // "pha" with halanta
			[ 'ବ୍h', 'ଭ୍' ], // "bha" with halanta
			[ 'ସ୍h', 'ଷ୍' ], // "murdhanya sa" with halanta
			[ '।Z', '॥' ], 

			[ 'ଆ\\\\', '\u0B3E' ], // aa sign
			[ 'ଇ\\\\', '\u0B3F' ], // i sign
			[ 'ଈ\\\\', '\u0B40' ],// I sign
			[ 'ଉ\\\\', '\u0B41' ], // u sign
			[ 'ଉ\\\\', '\u0B42' ], // U sign
			[ 'ଋ\\\\', '\u0B43' ], // R sign
			[ 'ୠ\\\\', '\u0B44' ], // RR sign
			[ 'ଌ\\\\', '\u0B62' ], // L sign
			[ 'ୡ\\\\', '\u0B63' ], // LL sign
			[ 'ଏ\\\\', '\u0B47' ], // e sign
			[ 'ଐ\\\\', '\u0B48' ], // ai sign
			[ 'ଓ\\\\', '\u0B4B' ], // o sign
			[ 'ଔ\\\\', '\u0B4C' ], // au sign

			[ '\u200c?a', 'ଅ' ], // "a"
			[ 'b', 'ବ୍' ], // "ba" with halanta
			[ 'c', '', 'ଚ୍' ], // "ca" with halanta
			[ 'd', 'ଦ୍' ], // "da" with halanta
			[ '\u200c?e', 'ଏ' ], // "e"
			[ 'f', 'ଫ୍' ], // "pha" with halanta
			[ 'g', 'ଗ୍' ], // "ga" with halanta
			[ 'h', 'ହ୍' ], // "ha" with halanta
			[ '\u200c?i', 'ଇ' ], // "i"
			[ 'j', 'ଜ୍' ], // "ja" with halanta
			[ 'k', 'କ୍' ], // "ka" with halanta
			[ 'l', 'ଲ୍' ], // "la" with halanta
			[ 'm', 'ମ୍' ], // "ma" with halanta
			[ 'n', 'ନ୍' ], // "na" with halanta
			[ '\u200c?o', 'ଓ' ], // "o"
			[ 'p', 'ପ୍' ], // "pa" with halanta
			[ 'q', 'ଜ୍ଞ୍' ], // "jna"
			[ 'r', 'ର୍' ], // "ra" with halanta
			[ 's', 'ସ୍' ], // "sa" with halanta
			[ 't', 'ତ୍' ], // "ta" with halanta
			[ '\u200c?u', 'ଉ' ], // "u" with halanta
			[ 'v', 'ୱ୍' ], // "wa" with halanta
			[ 'w', 'ଵ୍' ], // "va" with halanta (obselete character, legacy)
			[ 'x', 'କ୍ଷ୍' ], // "khya" with halanta
			[ 'y', 'ୟ୍' ], // "ya" with halanta
			[ 'z', '\u0B3C' ],
			[ '\u200c?A', 'ଆ' ], // "a"
			[ 'B', 'ବ୍' ], // "ba" with halanta
			[ 'C', 'ଛ୍' ], // "cha" with halanta
			[ 'D', 'ଡ୍' ], // "Da" with halanta
			[ '\u200c?E', 'ଐ' ], // "ai"
			[ 'F', 'ଫ୍' ], // "pha" with halanta
			[ 'G', 'ଗ୍' ], // "g" with halanta
			[ 'H', '', 'ଃ' ], // "bisarga"
			[ '\u200c?I', 'ଈ' ], // "I" 
			[ 'J', 'ଝ୍' ], // "jha" with halanta
			[ 'K', 'କ୍' ], // "ka" with halanta
			[ 'L', 'ଳ୍' ], // "Lla" with halanta
			[ 'M', '', 'ଂ' ], // "anuswara"
			[ 'N', 'ଣ୍' ], // "Na" with halanta
			[ '\u200c?O', 'ଔ' ], // "ou"
			[ 'P', 'ଫ୍' ], // "pha" with halanta
			[ 'Q', 'ଜ୍ଞ୍' ], // "Jna" with halanta
			[ 'R', 'ଋ' ], // "Ru"
			[ 'S', 'ଶ୍' ], // Talabya "Sa" with halanta
			[ 'T', 'ଟ୍' ], // "Ta" with halanta
			[ '\u200c?U', 'ଊ' ], // "u" (dirgha)
			[ 'V', 'ଵ୍' ], // "va"" with halanta (legacy)
			[ 'W', 'ଵ୍ଵ୍' ], // "vwa" with halanta (legacy)
			[ 'X', 'ଁ' ], // "chandrabindu"
			[ 'Y', 'ଯ୍' ], // antastha "ja" with halanta
			[ 'Z', 'ଜ୍ଞ' ], // "Jna"
			[ 'z', '', '୍' ], // "halanta"
			[ '//', 'ଽ' ], // Sanskrit character
			[ '_', '\u200c' ], // "ZWNJ"
			[ '0', '୦' ], // Odia numeral 0
			[ '1', '୧' ], // Odia numeral 1
			[ '2', '୨' ], // Odia numeral 2
			[ '3', '୩' ], // Odia numeral 3
			[ '4', '୪' ], // Odia numeral 4
			[ '5', '୫' ], // Odia numeral 5
			[ '6', '୬' ], // Odia numeral 6
			[ '7', '୭' ], // Odia numeral 7
			[ '8', '୮' ], // Odia numeral 8
			[ '9', '୯' ] ] // Odia numeral 
	};

	$.ime.register( orTransliteration );
}( jQuery ) );
