(function ($) {
    'use strict';

    var patternList = [
        // Consonants (초성)
        [ 'g', 'ㄱ' ], [ 'G', 'ㄲ' ], [ 'n', 'ㄴ' ], [ 'd', 'ㄷ' ], [ 'D', 'ㄸ' ],
        [ 'r', 'ㄹ' ], [ 'm', 'ㅁ' ], [ 'b', 'ㅂ' ], [ 'B', 'ㅃ' ], [ 's', 'ㅅ' ],
        [ 'S', 'ㅆ' ], [ 'q', 'ㅇ' ], [ 'j', 'ㅈ' ], [ 'J', 'ㅉ' ], [ 'c', 'ㅊ' ],
        [ 'k', 'ㅋ' ], [ 't', 'ㅌ' ], [ 'p', 'ㅍ' ], [ 'h', 'ㅎ' ],
        // Vowels (중성)
        [ 'a', 'ㅏ' ], [ 'f', 'ㅑ' ], [ 'v', 'ㅓ' ], [ 'z', 'ㅕ' ],
        [ 'o', 'ㅗ' ], [ 'l', 'ㅛ' ], [ 'u', 'ㅜ' ], [ 'x', 'ㅠ' ],
        [ 'w', 'ㅡ' ], [ 'i', 'ㅣ' ], [ 'e', 'ㅔ' ], [ 'E', 'ㅖ' ],
        [ 'y', 'ㅔ' ], [ 'Y', 'ㅐ' ]
    ];

    var romanToJamoMap = Object.fromEntries(patternList);

    var koreanRR = {
        id: 'ko-ro',
        name: 'Korean Phonetic - Romaja',
        description: 'Transliteration using SIL Romaja romanization',
        date: '2025-04-17',  // Date of implementation
        URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/ko-rr',  // URL (optional)
        author: 'Your Name',  // Author (replace with your name)
        license: 'GPLv3',  // License
        version: '1.0',
        maxKeyLength: 4,
        contextLength: 1,

        patterns: function (input, context) {
            let jamoSequence = '';

            // Convert roman input to jamo
            for (let i = 0; i < input.length; i++) {
                const char = input[i];
                jamoSequence += romanToJamoMap[char] || char;
            }

            // Group into Hangul syllable blocks
            const syllables = [];
            const consonants = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
            const vowels = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ';

            let i = 0;
            while (i < jamoSequence.length) {
                const ch = jamoSequence[i];

                if (consonants.includes(ch) && vowels.includes(jamoSequence[i + 1])) {
                    const initial = ch;
                    const medial = jamoSequence[i + 1];

                    let final = null;
                    const next1 = jamoSequence[i + 2];
                    const next2 = jamoSequence[i + 3];

                    // Handle final consonant (batchim)
                    if (
                        consonants.includes(next1) &&
                        (!vowels.includes(next2) || next2 === undefined)
                    ) {
                        final = next1;
                        i += 3;
                    } else {
                        i += 2;
                    }

                    syllables.push(combineJamo(initial, medial, final));
                } else {
                    syllables.push(ch);
                    i++;
                }
            }

            return { noop: false, output: syllables.join('') };
        }
    };

    function combineJamo(initial, vowel, final) {
        const choseong = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
        const jungseong = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ';
        const jongseong = [ '', 'ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ' ];

        const initialIndex = choseong.indexOf(initial);
        const vowelIndex = jungseong.indexOf(vowel);
        const finalIndex = final ? jongseong.indexOf(final) : 0;

        // If any of the indices is invalid, return the original characters
        if (initialIndex < 0 || vowelIndex < 0 || finalIndex < 0) return initial + vowel + (final || '');

        const syllableCode = 0xAC00 + (initialIndex * 21 * 28) + (vowelIndex * 28) + finalIndex;
        return String.fromCharCode(syllableCode);
    }

    // Register the IME
    $.ime.register(koreanRR);
})(jQuery);
