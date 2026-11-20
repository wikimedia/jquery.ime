( function ( $ ) {
	'use strict';

	// Uses precomposed Hangul syllables
	// Backspace deletes a whole syllable, not one jamo at a time

	var INITIAL = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ', // 19
		VOWEL = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ', // 21
		FINAL = ' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ', // 28, the space is "none"

		KEYS = {
			a: 'ㅏ', b: 'ㅂ', B: 'ㅃ', c: 'ㅊ', d: 'ㄷ', D: 'ㄸ', e: 'ㅔ', E: 'ㅖ', f: 'ㅑ', g: 'ㄱ', G: 'ㄲ', h: 'ㅎ', i: 'ㅣ', j: 'ㅈ', J: 'ㅉ', k: 'ㅋ', l: 'ㅛ',
			m: 'ㅁ', n: 'ㄴ', o: 'ㅗ', p: 'ㅍ', q: 'ㅇ', r: 'ㄹ', s: 'ㅅ', S: 'ㅆ', t: 'ㅌ', u: 'ㅜ', v: 'ㅓ', w: 'ㅡ', x: 'ㅠ', y: 'ㅐ', Y: 'ㅒ', z: 'ㅕ'
		},
		JOIN = {
			ㅗㅏ: 'ㅘ', ㅗㅐ: 'ㅙ', ㅗㅣ: 'ㅚ', ㅜㅓ: 'ㅝ', ㅜㅔ: 'ㅞ', ㅜㅣ: 'ㅟ', ㅡㅣ: 'ㅢ', ㄱㅅ: 'ㄳ', ㄴㅈ: 'ㄵ',
			ㄴㅎ: 'ㄶ', ㄹㄱ: 'ㄺ', ㄹㅁ: 'ㄻ', ㄹㅂ: 'ㄼ', ㄹㅅ: 'ㄽ', ㄹㅌ: 'ㄾ', ㄹㅍ: 'ㄿ', ㄹㅎ: 'ㅀ', ㅂㅅ: 'ㅄ'
		};

	// U+AC00 (가) + ( initial * 21 + vowel ) * 28 + final
	function syl( i, v, f ) {
		return String.fromCharCode(
			0xAC00 + ( INITIAL.indexOf( i ) * 21 + VOWEL.indexOf( v ) ) * 28 + FINAL.indexOf( f )
		);
	}

	// c: previous character (a syllable, single jamo or empty), j: jamo to add
	function add( c, j ) {
		// n = ( initial * 21 + vowel ) * 28 + final, so 588 = 21 * 28
		var n = c.charCodeAt( 0 ) - 0xAC00,
			i = INITIAL[ Math.floor( n / 588 ) ],
			v = VOWEL[ Math.floor( n / 28 ) % 21 ],
			f = FINAL[ n % 28 ],
			isV = VOWEL.includes( j ),
			t, s;

		if ( !i ) { // c is not a syllable
			return c && isV && INITIAL.includes( c ) ? syl( c, j, ' ' ) : ( isV && JOIN[ c + j ] ) || c + j;
		}
		if ( isV ) {
			if ( f === ' ' ) { // ㅗ + ㅏ = ㅘ
				t = JOIN[ v + j ];
				return t ? syl( i, t, f ) : c + j;
			}
			// s[ 0 ] stays as the final, s[ 1 ] moves to a new syllable
			s = Object.keys( JOIN ).find( ( k ) => JOIN[ k ] === f ) || ' ' + f;
			return syl( i, v, s[ 0 ] ) + syl( s[ 1 ], j, ' ' );
		}
		t = f === ' ' ? j : JOIN[ f + j ]; // new final: ㅂ, or ㅂ + ㅅ = ㅄ
		return t && FINAL.includes( t ) ? syl( i, v, t ) : c + j;
	}

	$.ime.register( {
		id: 'ko-phonetic',
		name: 'Korean Phonetic',
		description: 'Korean phonetic keyboard layout',
		date: '2026-11-20',
		author: 'Mauro',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ko-phonetic',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 1,
		contextLength: 1,
		patterns: [ [ '([가-힣ㄱ-ㅣ]?)([a-zA-Z])', function ( m, c, k ) {
			// Shift/Caps Lock: capital letters without their own jamo use the lowercase key
			return add( c, KEYS[ k ] || KEYS[ k.toLowerCase() ] );
		} ] ]
	} );
}( jQuery ) );
