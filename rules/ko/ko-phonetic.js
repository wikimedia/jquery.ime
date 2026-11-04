( function ( $ ) {
	'use strict';
	
	var pressed,
	
		INITIAL = [...'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'],
		VOWEL = [...'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'],
		FINAL = ['', ...'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'],
		
		KEYS = 'qwertyuiopasdfghjklzxcvbnm',
		JAMO = 'ㅇㅡㅔㄹㅌㅐㅜㅣㅗㅍㅏㅅㄷㅑㄱㅎㅈㅋㅛㅕㅠㅊㅓㅂㄴㅁ',
		
		SHIFT = { e: 'ㅖ', y: 'ㅒ', s: 'ㅆ', d: 'ㄸ', g: 'ㄲ', j: 'ㅉ', b: 'ㅃ' },
		VOWEL_COMP = { 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ' },
		SPLIT = { 'ㄳ': 'ㄱㅅ', 'ㄵ': 'ㄴㅈ', 'ㄶ': 'ㄴㅎ', 'ㄺ': 'ㄹㄱ', 'ㄻ': 'ㄹㅁ', 'ㄼ': 'ㄹㅂ', 'ㄽ': 'ㄹㅅ', 'ㄾ': 'ㄹㅌ', 'ㄿ': 'ㄹㅍ', 'ㅀ': 'ㄹㅎ', 'ㅄ': 'ㅂㅅ' },
		
		FINAL_COMP = Object.fromEntries( Object.entries( SPLIT ).map( ( [ k, v ] ) => [ v, k ] ) ),
		VOWEL_SPLIT = Object.fromEntries( Object.entries( VOWEL_COMP ).map( ( [ k, v ] ) => [ v, k[ 0 ] ] ) ),
		
		syl = ( i, v, f ) => String.fromCharCode( 44032 + ( i * 21 + v ) * 28 + f ),
		dec = ( ch, c = ch.charCodeAt( 0 ) - 44032 ) => c >= 0 && c < 11172 ? [ Math.floor( c / 588 ), Math.floor( ( c % 588 ) / 28 ), c % 28 ] : null,

		eraseOne = ( ch, d = dec( ch ) ) => {
			if ( !d ) return VOWEL_SPLIT[ ch ] || ( INITIAL.includes( ch ) || VOWEL.includes( ch ) ? '' : null );
			var [ i, v, f ] = d, b = VOWEL_SPLIT[ VOWEL[ v ] ];
			return f ? syl( i, v, FINAL.indexOf( ( SPLIT[ FINAL[ f ] ] || '' ).charAt( 0 ) ) ) : ( b ? syl( i, VOWEL.indexOf( b ), 0 ) : INITIAL[ i ] );
		};
		
	document.addEventListener( 'keypress', ( e ) => { 
		pressed = { ch: e.key, shift: e.shiftKey || ( e.key !== e.key.toLowerCase() ) }; 
	}, true );

	$.ime.register( {
		id: 'ko-phonetic',
		name: 'Korean Phonetic',
		description: 'Korean phonetic keyboard layout',
		date: '2026-10-26',
		author: 'Mauro',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ko-phonetic',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 1,
		contextLength: 1,
		patterns: [ [ '[가-힣ㄱ-ㅎㅏ-ㅣ]?[a-zA-Z]', ( s ) => {
			var prev = s.slice( 0, -1 ), 
				key = s.slice( -1 ), 
				lower = key.toLowerCase(), 
				d = dec( prev ),
				jamo = ( ( pressed?.ch === key ? pressed.shift : key !== lower ) && SHIFT[ lower ] ) || JAMO.charAt( KEYS.indexOf( lower ) ),
				out = prev + jamo, 
				isVowel = VOWEL.includes( jamo );

			if ( VOWEL_COMP[ out ] ) return VOWEL_COMP[ out ];
			if ( !d ) return INITIAL.includes( prev ) && isVowel ? syl( INITIAL.indexOf( prev ), VOWEL.indexOf( jamo ), 0 ) : out;
			
			var [ i, v, f ] = d, 
				fin = FINAL[ f ], 
				[ a, b ] = SPLIT[ fin ] || [ '', fin ], 
				c = VOWEL_COMP[ VOWEL[ v ] + jamo ], 
				idx = FINAL.indexOf( fin ? FINAL_COMP[ fin + jamo ] : jamo );

			if ( isVowel ) return fin ? syl( i, v, FINAL.indexOf( a ) ) + syl( INITIAL.indexOf( b ), VOWEL.indexOf( jamo ), 0 ) : ( c ? syl( i, VOWEL.indexOf( c ), 0 ) : out );
			return idx > 0 ? syl( i, v, idx ) : out;
		} ] ]
	} );

	$( document ).on( 'beforeinput', 'input, textarea', function ( e ) {
		var oe = e.originalEvent || e, 
			ime = $( this ).data( 'ime' );

		if ( oe.inputType !== 'deleteContentBackward' || !ime?.active || ime.inputmethod?.id !== 'ko-phonetic' ) return;
		
		var start = this.selectionStart, 
			rest = start === this.selectionEnd ? eraseOne( this.value.charAt( start - 1 ) ) : null;

		if ( rest === null ) return;
		
		oe.preventDefault();
		this.setRangeText( rest, start - 1, start, 'end' );
		$( this ).trigger( 'input' );
	} );
	
}( jQuery ) );
