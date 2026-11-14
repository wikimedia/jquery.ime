( function ( $ ) {
	'use strict';

	var INITIAL = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ', // 19
		VOWEL = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ', // 21
		FINAL = 'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ', // 27 + none = 28

		JAMO = 'ㅏㅂㅊㄷㅔㅑㄱㅎㅣㅈㅋㅛㅁㄴㅗㅍㅇㄹㅅㅌㅜㅓㅡㅠㅐㅕ',

		SHIFT = { b: 'ㅃ', d: 'ㄸ', e: 'ㅖ', g: 'ㄲ', j: 'ㅉ', s: 'ㅆ', y: 'ㅒ' },
		SPLIT = {
			ㅘ: 'ㅗㅏ', ㅙ: 'ㅗㅐ', ㅚ: 'ㅗㅣ', ㅝ: 'ㅜㅓ', ㅞ: 'ㅜㅔ', ㅟ: 'ㅜㅣ', ㅢ: 'ㅡㅣ',
			ㄳ: 'ㄱㅅ', ㄵ: 'ㄴㅈ', ㄶ: 'ㄴㅎ', ㄺ: 'ㄹㄱ', ㄻ: 'ㄹㅁ', ㄼ: 'ㄹㅂ', ㄽ: 'ㄹㅅ', ㄾ: 'ㄹㅌ', ㄿ: 'ㄹㅍ', ㅀ: 'ㄹㅎ', ㅄ: 'ㅂㅅ'
		},
		
		JOIN = Object.keys( SPLIT ).reduce( ( o, k ) => {
			o[ SPLIT[ k ] ] = k;
			return o;
		}, {} ),
		VPAIR = /ㅗ[ㅏㅐㅣ]|ㅜ[ㅓㅔㅣ]|ㅡㅣ/g,
		SYLLABLE = new RegExp( '([' + INITIAL + '])([' + VOWEL + '])(?:(' + Object.keys( JOIN ).join( '|' ) + '|[' + FINAL + '])(?![' + VOWEL + ']))?', 'g' ),

		// 44032 = first syllable (가), 588 = 21 vowels * 28 finals, 11172 = 19 initials * 588,
		// 36 = parseInt base, so a-z (or A-Z) gives 10-35, and minus 10 is the position in JAMO

		jam = ( ch ) => {
			var c = ch.charCodeAt( 0 ) - 44032;
			var arr = c >= 0 && c < 11172 ?
				[ INITIAL[ Math.floor( c / 588 ) ], VOWEL[ Math.floor( c % 588 / 28 ) ], FINAL[ c % 28 - 1 ] ] :
				[ ch ];
			return arr.map( ( x ) => SPLIT[ x ] || x ).join( '' );
		},

		comp = ( str ) => str.replace( VPAIR, ( x ) => JOIN[ x ] ).replace( SYLLABLE, ( x, i, v, f ) => String.fromCharCode( 44032 + ( INITIAL.indexOf( i ) * 21 + VOWEL.indexOf( v ) ) * 28 + FINAL.indexOf( JOIN[ f ] || f ) + 1 ) ),

		type = ( prev, key, shifted ) => {
			var jamoChar = ( ( shifted || key < 'a' ) && SHIFT[ key.toLowerCase() ] ) || JAMO[ parseInt( key, 36 ) - 10 ];
			return comp( jam( prev ) + jamoChar );
		},

		put = ( ime, prev, out ) => {
			var last = ime.koLast || '';
			ime.koLast = ( last.slice( -1 ) === prev ? last.slice( 0, -1 ) : '' ) + out;
			return out;
		};

	$.ime.register( {
		id: 'ko-phonetic',
		name: 'Korean Phonetic',
		description: 'Korean phonetic keyboard layout',
		date: '2026-11-14',
		author: 'Mauro',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ko-phonetic',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 1,
		contextLength: 1,
		patterns: function ( input ) {
			var ime = this;
			if ( ime.koLast === undefined && ime.$element ) {
				ime.koLast = '';
				ime.$element
					.off( 'beforeinput.ko-phonetic' )
					.on( 'beforeinput.ko-phonetic', ( e ) => {
						var oe = e.originalEvent,
							el = e.currentTarget,
							s = el.selectionStart,
							ch = s === el.selectionEnd ? el.value.charAt( s - 1 ) : '',
							ins = oe.inputType === 'insertText' && /^[a-z]$/i.test( oe.data ),
							del = oe.inputType === 'deleteContentBackward' && ch && ch === ime.koLast.slice( -1 );

						if ( !( ins || del ) || typeof s !== 'number' || !ime.active || ime.inputmethod.id !== 'ko-phonetic' ) {
							return;
						}

						el.setRangeText(
							put( ime, ch, ins ? type( ch, oe.data, ime.shifted ) : comp( jam( ch ).slice( 0, -1 ) ) ),
							s - ch.length,
							el.selectionEnd,
							'end'
						);
						e.preventDefault();
						$( el ).trigger( 'input' );
					} );
			}

			return input.replace( /(.?)([a-z])$/i, ( x, prev, key ) => put( ime, prev, type( prev, key, ime.shifted ) ) );
		}
	} );
}( jQuery ) );
