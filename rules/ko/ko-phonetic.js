(function ($) {
    'use strict';

    var CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    var JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    var JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    var REV_JUNG = { 'ㅘ': ['ㅗ', 'ㅏ'], 'ㅙ': ['ㅗ', 'ㅐ'], 'ㅚ': ['ㅗ', 'ㅣ'], 'ㅝ': ['ㅜ', 'ㅓ'], 'ㅞ': ['ㅜ', 'ㅔ'], 'ㅟ': ['ㅜ', 'ㅣ'], 'ㅢ': ['ㅡ', 'ㅣ'] };
    var REV_JONG = { 'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'], 'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'], 'ㄼ': ['ㄹ', 'ㅂ'], 'ㄽ': ['ㄹ', 'ㅅ'], 'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'], 'ㅀ': ['ㄹ', 'ㅎ'], 'ㅄ': ['ㅂ', 'ㅅ'], 'ㄲ': ['ㄱ', 'ㄱ'], 'ㅆ': ['ㅅ', 'ㅅ'] };
    var JUNG_COMP = { 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ' };
    var JONG_COMP = { 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' };

    var KEYS = {
        'q': 'ㅇ', 'w': 'ㅡ', 'e': 'ㅔ', 'E': 'ㅖ', 'r': 'ㄹ', 't': 'ㅌ', 'y': 'ㅐ', 'Y': 'ㅒ', 'u': 'ㅜ', 'i': 'ㅣ', 'o': 'ㅗ', 'p': 'ㅍ',
        'a': 'ㅏ', 's': 'ㅅ', 'S': 'ㅆ', 'd': 'ㄷ', 'D': 'ㄸ', 'f': 'ㅑ', 'g': 'ㄱ', 'G': 'ㄲ', 'h': 'ㅎ', 'j': 'ㅈ', 'J': 'ㅉ', 'k': 'ㅋ', 'l': 'ㅛ',
        'z': 'ㅕ', 'x': 'ㅠ', 'c': 'ㅊ', 'v': 'ㅓ', 'b': 'ㅂ', 'B': 'ㅃ', 'n': 'ㄴ', 'm': 'ㅁ'
    };

    function compSyl(cho, jung, jong) {
        if (cho === -1) return '';
        return String.fromCharCode(0xAC00 + (cho * 588) + ((jung === -1 ? 0 : jung) * 28) + (jong === -1 ? 0 : jong));
    }

    function getSyllableInfo(char) {
        var code = char.charCodeAt(0) - 0xAC00;
        if (code < 0 || code > 11171) return null;
        return {
            cho: Math.floor(code / 588),
            jung: Math.floor((code % 588) / 28),
            jong: code % 28
        };
    }

    function processHangulBackspace(text) {
        if (!text) return '';
        var last = text.slice(-1), rest = text.slice(0, -1);

        if (CHO.includes(last)) return rest;
        if (REV_JUNG[last]) return rest + REV_JUNG[last][0];

        var info = getSyllableInfo(last);
        if (info) {
            if (info.jong !== 0) {
                var pair = REV_JONG[JONG[info.jong]];
                return rest + compSyl(info.cho, info.jung, pair ? JONG.indexOf(pair[0]) : 0);
            }
            if (REV_JUNG[JUNG[info.jung]]) {
                return rest + compSyl(info.cho, JUNG.indexOf(REV_JUNG[JUNG[info.jung]][0]), 0);
            }
            return rest + CHO[info.cho];
        }
        return rest;
    }

    $.ime.register({
        id: 'ko-phonetic',
        name: 'Korean Phonetic',
        description: 'Korean phonetic keyboard layout',
        date: '2026-10-26',
        author: 'Mauro',
        url: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ko-phonetic',
        license: 'GPLv3',
        version: '1.0',
        maxKeyLength: 1,
        contextLength: 1,
        patterns: [
            ['[가-힣ㄱ-ㅎㅏ-ㅣ]?[a-zA-Z]', function (s) {
                var prev = s.length > 1 ? s.slice(0, -1) : null;
                var jamo = KEYS[s.slice(-1)];
                if (!jamo) return prev || '';

                if (prev) {
                    var pJ = JUNG.indexOf(prev), cJ = JUNG.indexOf(jamo);
                    if (pJ !== -1 && cJ !== -1 && JUNG_COMP[prev + jamo]) {
                        return JUNG_COMP[prev + jamo];
                    }

                    var info = getSyllableInfo(prev);
                    if (info) {
                        var pJamo = JUNG[info.jung];
                        if (info.jong === 0 && cJ !== -1 && JUNG_COMP[pJamo + jamo]) {
                            return compSyl(info.cho, JUNG.indexOf(JUNG_COMP[pJamo + jamo]), 0);
                        }
                        if (info.jong !== 0 && cJ !== -1) {
                            var curJong = JONG[info.jong], split = REV_JONG[curJong];
                            return split ? 
                                compSyl(info.cho, info.jung, JONG.indexOf(split[0])) + compSyl(CHO.indexOf(split[1]), cJ, -1) :
                                compSyl(info.cho, info.jung, 0) + compSyl(CHO.indexOf(curJong), cJ, -1);
                        }
                        if (info.jong !== 0 && JONG.includes(jamo)) {
                            var compKey = JONG[info.jong] + jamo;
                            if (JONG_COMP[compKey]) {
                                var newJongIdx = JONG.indexOf(JONG_COMP[compKey]);
                                if (newJongIdx !== -1) return compSyl(info.cho, info.jung, newJongIdx);
                            }
                        }
                        if (info.jong === 0 && JONG.includes(jamo)) {
                            return compSyl(info.cho, info.jung, JONG.indexOf(jamo));
                        }
                    }

                    if (CHO.includes(prev) && cJ !== -1) {
                        return compSyl(CHO.indexOf(prev), cJ, -1);
                    }

                    return prev + jamo;
                }
                return jamo;
            }],
            ['[^a-zA-Z]+', function (s) { return s; }]
        ]
    });

    $(document).on('keydown', 'input, textarea', function (e) {
        if (e.key === 'Backspace' || e.keyCode === 8) {
            var $in = $(this), ime = $in.data('ime');
            if (ime && ime.active && ime.inputmethod && ime.inputmethod.id === 'ko-phonetic') {
                var val = $in.val(), start = this.selectionStart, end = this.selectionEnd;
                if (start === end && start > 0) {
                    var before = processHangulBackspace(val.slice(0, start));
                    if (before !== val.slice(0, start)) {
                        e.preventDefault();
                        $in.val(before + val.slice(end));
                        this.setSelectionRange(before.length, before.length);
                        $in.trigger('input');
                    }
                }
            }
        }
    });

})(jQuery);