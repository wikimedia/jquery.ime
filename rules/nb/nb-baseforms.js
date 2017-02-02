// jscs:disable requireMultipleVarDecl
( function ( $ ) {
	'use strict';

	var prefixes = 'E|P|T|G|M|k|h|da|d|c|m|u|μ|n|p|f|a',
		baseSIUnits = 'm|g|s|A|K|mol|[cC]d',
		derivedSIUnits = 'rad|sr|[hH]z|N|[pP]a|J|W|C|V|F|Ω|S|[wW]b|T|H|°C|[lL]m|[lL]x|[bB]q|[gG]|[sS]v|kat',
		supers = '[⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹]',
		sups = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' },
		signs = {};

	signs[ '+' ] = '⁺';
	signs[ '-' ] = '⁻';

	var defs = {
		id: 'nb-baseforms',
		name: 'Norwegian transliteration of signs',
		description: 'Norwegian input method with base forms transliterated',
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
			[ '([sxzSXZ])›(")', '\u0027', '$1ʼ»' ],		// double guillemet
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

			// horizontal ellipsis
			[ '\\.\\.\\.', '…' ],
			[ '…\\.', '.', '....' ],

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
			[
				'(' + prefixes + '|)(' + baseSIUnits + '|' + derivedSIUnits + ')([-+]?)([0-9])',
                function ( $0, $1, $2, $3, $4 ) { return $1 + $2 + ( signs[ $3 ] !== undefined ? signs[ $3 ] : '' ) + sups[ $4 ]; }
			],

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

			// Spaces for numerals
			[ '(\\d)\u0020', '$1\u2007' ],				// figure space
			[ '(\\d)\u2007(\\D)', '\u0020', '$1 $2' ],	// revert to normal space
			[
				'(\\d)([\u0020\u2007])(' + prefixes + '|)(' + baseSIUnits + '|' + derivedSIUnits + ')(' + supers + '*)(\\W)',
				'$1\u2007$3$4$5$6'
			],

			// hyphen-minus
			[ '(\\w)-([\\n\\r])', '$1\u00AD' ],			// on last word on line -> soft-hyphen
			[ '([\\n\\r]\\t*)-', '$1–' ],				// with space padding -> endash
			[ '(\\w)-(\\ )', '$1–$2' ],					// after word before space -> endash
			[ '(\\ )-(\\ )', '$1–$2' ],					// with space padding -> endash
			[ '-(\\d)', '−$1' ],						// in front of numbers -> minus
			[ '-(\\w)', '‐$1' ]							// in front of words -> hyphen

		]
	};

	$.ime.register( defs );
}( jQuery ) );
