( function ( $ ) {
	'use strict';

	var patternList = [
		// Syllable finals
		[ '([ᅡ-ᅵ])k', '$1ᆨ' ],
		[ 'ᆨk', 'ᆩ' ],
		[ 'ᆨs', 'ᆪ' ],
		[ '([ᅡ-ᅵ])n', '$1ᆫ' ],
		[ 'ᆫj', 'ᆬ' ],
		[ 'ᆫh', 'ᆭ' ],
		[ '([ᅡ-ᅵ])t', '$1ᆮ' ],
		[ '([ᅡ-ᅵ])l', '$1ᆯ' ],
		[ '([ᅡ-ᅵ])r', '$1ᆯ' ],
		[ 'ᆯk', 'ᆰ' ],
		[ 'ᆯm', 'ᆱ' ],
		[ 'ᆯb', 'ᆲ' ],
		[ 'ᆯs', 'ᆳ' ],
		[ 'ᆯt', 'ᆴ' ],
		[ 'ᆯp', 'ᆵ' ],
		[ 'ᆯh', 'ᆶ' ],
		[ '([ᅡ-ᅵ])m', '$1ᆷ' ],
		[ '([ᅡ-ᅵ])b', '$1ᆸ' ],
		[ 'ᆸs', 'ᆹ' ],
		[ '([ᅡ-ᅵ])s', '$1ᆺ' ],
		[ 'ᆺs', 'ᆻ' ],
		[ 'ᆫg', 'ᆼ' ],
		[ '([ᅡ-ᅵ])j', '$1ᆽ' ],
		[ '([ᅡ-ᅵ])ch', '$1ᆾ' ],
		[ '([ᅡ-ᅵ])K', '$1ᆿ' ],
		[ '([ᅡ-ᅵ])T', '$1ᇀ' ],
		[ '([ᅡ-ᅵ])p', '$1ᇁ' ],
		[ '([ᅡ-ᅵ])h', '$1ᇂ' ],

		// Use space, hyphen, and apostrophe to disambiguate
		// Do nothing, combineJamo will do the work
		[ '([\- \'])', '$1'],

		// Syllable initials
		[ 'g', 'ᄀ' ],
		[ 'ᄀk', 'ᄁ' ],
		[ 'n', 'ᄂ' ],
		[ 'ᄃt', 'ᄄ' ],
		[ 'ᄐt', 'ᄄ' ],
		[ 'ᄃd', 'ᄄ' ],
		[ 'ᄐd', 'ᄄ' ],
		[ 'd', 'ᄃ' ],
		[ 'r', 'ᄅ' ],
		[ 'l', 'ᄅ' ],
		[ 'm', 'ᄆ' ],
		[ 'b', 'ᄇ' ],
		[ 'ᄇp', 'ᄈ' ],
		[ 'ᄉs', 'ᄊ' ],
		// [ '\'', 'ᄋ'],  // Apostrophe can be written to represent silent ᄋ
		[ 's', 'ᄉ' ],
		[ 'ᄌj', 'ᄍ' ],
		[ 'j', 'ᄌ' ],
		[ 'ch', 'ᄎ' ],
		[ 'k', 'ᄏ' ],
		[ 'K', 'ᄏ' ],  // There is some ambiguity for final ᆿ and ᇀ, so they get capital K and T
		[ 't', 'ᄐ' ],
		[ 'T', 'ᄐ' ],
		[ 'p', 'ᄑ' ],
		[ 'h', 'ᄒ' ],

		// Vowels
		// Vowels without consontant initial must have ᄋ prepended
		// [^ᄀ-ᄒ]|^ matches the start character or anything but an initial consonant
		[ '([^ᄀ-ᄒ]|^)wa', '$1와' ],
		[ '([^ᄀ-ᄒ]|^)wo', '$1워' ],
		[ '([^ᄀ-ᄒ]|^)we', '$1웨' ],
		[ '([^ᄀ-ᄒ]|^)wi', '$1위' ],
		[ '([^ᄀ-ᄒ]|^)ya', '$1야' ],
		[ '([^ᄀ-ᄒ]|^)ye', '$1예' ],
		[ '([^ᄀ-ᄒ]|^)yo', '$1요' ],
		[ '([^ᄀ-ᄒ]|^)yu', '$1유' ],
		// 'y' diphthongs
		[ 'ya', 'ᅣ' ],
		[ 'ᅣe', 'ᅤ' ],
		[ 'ᅨo', 'ᅧ' ],
		[ 'ye', 'ᅨ' ],
		[ 'yo', 'ᅭ' ],
		[ 'yu', 'ᅲ' ],
		// 'w' diphthongs
		[ 'wa', 'ᅪ' ],
		[ 'ᅪe', 'ᅫ' ],
		[ 'wo', 'ᅯ' ],
		[ 'we', 'ᅰ' ],
		[ 'wi', 'ᅱ' ],
		// Other diphthongs
		[ 'ᅩe', 'ᅬ' ],
		[ 'ᅦu', 'ᅳ' ],
		[ 'ᅮi', 'ᅴ' ],
		[ 'ᅦo', 'ᅥ' ],
		[ 'ᅡe', 'ᅢ' ],
		[ '([^ᄀ-ᄒ]|^)i', '$1이' ],
		[ '([^ᄀ-ᄒ]|^)a', '$1아' ],
		[ '([^ᄀ-ᄒ]|^)u', '$1우' ],
		[ '([^ᄀ-ᄒ]|^)o', '$1오' ],
		[ '([^ᄀ-ᄒ]|^)e', '$1에' ],
		[ 'i', 'ᅵ' ],
		[ 'a', 'ᅡ' ],
		[ 'u', 'ᅮ' ],
		[ 'o', 'ᅩ' ],
		[ 'e', 'ᅦ' ],
	];

	var koreanRR = {
		id: 'ko-rr',
		name: 'Korean Revised Romanization',
		description: 'Transliteration using Korean revised romanization',
		date: '2023-02-04',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/korean-revised-romanization',
		author: 'Anne Drew Hu',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 4,
		contextLength: 1,

		// This function mirrors the normal behavior in jquery.ime.js,
		// except it combines jamo when a new syllable starts
		// This version does not support context rules, but we don't need them
		patterns: function(input, context) {
			var patterns, regex, rule, replacement, i, result;

			for ( i = 0; i < patternList.length; i++ ) {
				rule = patternList[ i ];
				regex = new RegExp( rule[ 0 ] + '$' );

				// Last item in the rules.
				// It can also be a function, because the replace
				// method can have a function as the second argument.
				replacement = rule.slice( -1 )[ 0 ];

				// Input string match test
				if ( regex.test( input ) ) {
					result = input.replace(regex, replacement);

					// This regex matches jamo that form a syllable so they can be combined
					var jamoRegex = /([ᄀ-ᄒ])([ᅡ-ᅵ])([ᆨ-ᇂ])?([ᄀ-ᄒ]|[\- '])(.*)$/;
					if (jamoRegex.test(result)) {
						return { noop: false, output: result.replace(jamoRegex, combineJamo) };
					} else {
						return { noop: false, output: result };
					}
				}
			}

			// No matches, return the input
			return { noop: true, output: input };
		},
	};

	// Conjoining jamo behavior is defined by this Unicode standard
	// https://www.unicode.org/versions/Unicode13.0.0/ch03.pdf#G24646
	// parameter `final` is optional
	function combineJamo(substring, initial, vowel, final, nextSyllableInitial, otherChars) {
		// Get the UTF code for each character
		var initialNo = initial.charCodeAt(0);
		var vowelNo = vowel.charCodeAt(0);
		var finalDiff = 0;
		if (final) {
			var finalNo = final.charCodeAt(0);
			// Need to add one to account for the no final option, where finalDiff is 0
			finalDiff = finalNo - 'ᆨ'.charCodeAt(0) + 1;
		}

		var initialDiff = initialNo - 'ᄀ'.charCodeAt(0);
		var vowelDiff = vowelNo - 'ᅡ'.charCodeAt(0);

		// See Unicode standard: https://www.unicode.org/versions/Unicode13.0.0/ch03.pdf#G24646
		var syllableNo = 44032 + initialDiff * 588 + vowelDiff * 28 + finalDiff;

		var syllable = String.fromCharCode(syllableNo);

		const disambig = /[\- ']/;
		if (nextSyllableInitial.match(disambig)) {
			return syllable;
		} else if (otherChars.match(disambig)) {
			return syllable + nextSyllableInitial;
		}
		return syllable + nextSyllableInitial + otherChars;
	}
	$.ime.register( koreanRR );
}( jQuery ) );
