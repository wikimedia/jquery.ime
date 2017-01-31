( function ( $ ) {
	'use strict';

	var defs = {
		id: 'nb-normforms',
		name: 'Norsk normal transliterasjon',
		description: 'Norwegian input method with most common form transliterated',
		date: '2012-12-04',
		URL: 'http://www.evertype.com/alphabets/bokmaal-norwegian.pdf',
		author: 'John Erling Blad',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 9,
		patterns: [

			// apostrophes
			[ '([sxzSXZ])›(\\s)', '\u0027', '$1ʼ$2' ],	// whitespace
			[ '([sxzSXZ])›(")', '\u0027', '$1ʼ»' ],	// double guillemet
			[ '([sxzSXZ])›(\u0027)', '\u0027', '$1ʼ›' ],// single guillemet

			// single quote as guillemet
			[ '(^|\\s|«)\u0027', '$1‹' ],				// opening
			[ '([^\\s\u0027‹›])\u0027', '$1›' ],		// closing
			// rollback
			[ '‹(\\s)', '\u0027', '\u0027$1' ],			// failed opening
			[ '›(\\S)', '\u0027', '\u0027$1' ],			// failed closing
			[ '[‹›]\u0027', '\u0027', '\u0027\u0027' ],	// revert

			// double quote as guillemet
			[ '(^|\\s|‹)"', '$1«' ],					// opening
			[ '([^\\s"«»])"', '$1»' ],					// closing
			// rollback
			[ '«(\\s)', '"', '"$1' ],					// failed opening
			[ '»(\\S)', '"', '"$1' ],					// failed closing
			[ '[«»]"', '"', '""' ],						// revert

			// Superscript for numbers
			[ '\\^0', '⁰' ],
			[ '\\^1', '¹' ],
			[ '\\^2', '²' ],
			[ '\\^3', '³' ],
			[ '\\^4', '⁴' ],
			[ '\\^5', '⁵' ],
			[ '\\^6', '⁶' ],
			[ '\\^7', '⁷' ],
			[ '\\^8', '⁸' ],
			[ '\\^9', '⁹' ],

			// Subscript for numbers
			[ '_0', '₀' ],
			[ '_1', '₁' ],
			[ '_2', '₂' ],
			[ '_3', '₃' ],
			[ '_4', '₄' ],
			[ '_5', '₅' ],
			[ '_6', '₆' ],
			[ '_7', '₇' ],
			[ '_8', '₈' ],
			[ '_9', '₉' ],

			// Superscript for additional chars
			[ '\\^i', 'ⁱ' ],
			[ '\\^\\+', '⁺' ],
			[ '\\^-', '⁻' ],
			[ '\\^=', '⁼' ],
			[ '\\^\\(', '⁽' ],
			[ '\\^\\)', '⁾' ],
			[ '\\^n', 'ⁿ' ],

			// Subscript for additional chars
			[ '_\\+', '₊' ],
			[ '_-', '₋' ],
			[ '_=', '₌' ],
			[ '_\\(', '₍' ],
			[ '_\\)', '₎' ],
			[ '_a', 'ₐ' ],
			[ '_e', 'ₑ' ],
			[ '_o', 'ₒ' ],
			[ '_x', 'ₓ' ],
			[ '_Ə', 'ₔ' ], // no idea how this will be typed
			[ '_h', 'ₕ' ],
			[ '_k', 'ₖ' ],
			[ '_l', 'ₗ' ],
			[ '_m', 'ₘ' ],
			[ '_n', 'ₙ' ],
			[ '_p', 'ₚ' ],
			[ '_s', 'ₛ' ],
			[ '_t', 'ₜ' ],

			// early capture of hex
			[ '((0x|#)[0-9a-fA-F]*[aA][aA])', '$1' ],
			[ '((0x|#)[0-9a-fA-F]*[aA][eE])', '$1' ],

            // collect ligature æ
			[ 'ae', 'æ' ],
			[ '(AE|Ae|aE)', 'Æ' ],
			// rollback
			[ '([iI][mM])æ([fFkKnN])', '[eE]', '$1ae$2' ],
			[ '([iI][mM])Æ([fFkKnN])', '[eE]', '$1AE$2' ],
			[ '([rR])æ([lL])', '[eE]', '$1ae$2' ],
			[ '([rR])Æ([lL])', '[eE]', '$1AE$2' ],
			[ '([sS])æ([kKpP])', '[eE]', '$1ae$2' ],
			[ '([sS])Æ([kKpP])', '[eE]', '$1AE$2' ],
			[ '([tT])æ([kK])', '[eE]', '$1ae$2' ],
			[ '([tT])Æ([kK])', '[eE]', '$1AE$2' ],
			[ 'æ([eE])', '[eE]', 'a$1' ],
			[ 'Æ([eE])', '[eE]', 'A$1' ],

            // collect ligature ø
			[ 'oe', 'ø' ],
			[ '([oO][eE])', 'Ø' ],
			// rollback
			[ '([dD])ø([uU])', '[eE]', '$1oe$2' ],
			[ '([dD])Ø([uU])', '[eE]', '$1OE$2' ],
			[ '([gG])ø([sS])', '[eE]', '$1oe$2' ],
			[ '([gG])Ø([sS])', '[eE]', '$1OE$2' ],
			[ '([iI])ø([tT])', '[eE]', '$1oe$2' ],
			[ '([iI])Ø([tT])', '[eE]', '$1OE$2' ],
			[ '([kK])ø([fF])', '[eE]', '$1oe$2' ],
			[ '([kK])Ø([fF])', '[eE]', '$1OE$2' ],
			[ '([nN])ø([nN\\s\\W])', '[eE]', '$1oe$2' ],
			[ '([nN])Ø([nN\\s\\W])', '[eE]', '$1OE$2' ],
			[ '(([iI][eE]|[aA][mM]|[bB][eE])[bB])ø([rR])', '[eE]', '$1oe$2' ],
			[ '(([iI][eE]|[aA][mM]|[bB][eE])[bB])Ø([rR])', '[eE]', '$1OE$2' ],
			[ '([pP])ø([nN])', '[eE]', '$1oe$2' ],
			[ '([pP])Ø([nN])', '[eE]', '$1OE$2' ],
			[ '([^tT][bBtT][rR])ø([nNrR])', '[eE]', '$1oe$2' ],
			[ '([^tT][bBtT][rR])Ø([nNrR])', '[eE]', '$1OE$2' ],
			[ 'ø([eE])', '[eE]', 'o$1' ],
			[ 'Ø([eE])', '[eE]', 'O$1' ],

            // collect ligature å
			[ 'aa', 'å' ],
			[ '(AA|Aa|aA)', 'Å' ],
			// rollback
			[ '([lL][jJ])å([kKnNtT])', '[aA]', '$1aa$2' ],
			[ '([lL][jJ])Å([kKnNtT])', '[aA]', '$1AA$2' ],
			[ '([iI][kK])å([^lL])', '[aA]', '$1aa$2' ],
			[ '([iI][kK])Å([^lL])', '[aA]', '$1AA$2' ],
			[ '([iI][mM])å([nNrRvV])', '[aA]', '$1aa$2' ],
			[ '([iI][mM])Å([nNrRvV])', '[aA]', '$1AA$2' ],
			[ '([tT])å([nN])', '[aA]', '$1aa$2' ],
			[ '([tT])Å([nN])', '[aA]', '$1AA$2' ],
			[ 'å([aA])', '[aA]', 'a$1' ],
			[ 'Å([aA])', '[aA]', 'A$1' ]

		]
	};

	$.ime.register( defs );
}( jQuery ) );
