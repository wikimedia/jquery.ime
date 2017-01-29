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
		maxKeyLength: 3,
		patterns: [

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

            // forward å
			[ '(#[0-9a-fA-F]*[aA][aA])', '$1' ],
			[ 'aa', 'å' ],
			[ '(AA|Aa|aA)', 'Å' ],

            // forward æ
			[ '(#[0-9a-fA-F]*[aA][eE])', '$1' ],
			[ 'ae', 'æ' ],
			[ '(AE|Ae|aE)', 'Æ' ],

            // forward ø
			[ 'oe', 'ø' ],
			[ '(OE|Oe|oE)', 'Ø' ],

			// [ '([#0-9a-fA-F])å([0-9a-fA-F])', '[aA]', '$1aa$2' ],
			// [ '([#0-9a-fA-F])Å([0-9a-fA-F])', '[aA]', '$1AA$2' ],
			[ 'å([aA])', '[aA]', 'a$1' ],
			[ 'Å([aA])', '[aA]', 'A$1' ],

			// [ '([#0-9a-fA-F])æ([0-9a-fA-F])', '[eE]', '$1ae$2' ],
			// [ '([#0-9a-fA-F])Æ([0-9a-fA-F])', '[eE]', '$1AE$2' ],
			[ 'æ([eE])', '[eE]', 'a$1' ],
			[ 'Æ([eE])', '[eE]', 'A$1' ],

			[ '([bBdDeEgGiIkKlLmMnNpPrRsStTuUvV])ø([nNrR\\s\\W])', '[eE]', '$1oe$2' ],
			[ '([bBdDeEgGiIkKlLmMnNpPrRsStTuUvV])Ø([nNrR\\s\\W])', '[eE]', '$1OE$2' ],
			[ '([rR])ø([kK\s\W])', '[eE]', '$1oe$2' ],
			[ '([rR])Ø([kK\s\W])', '[eE]', '$1OE$2' ],
			[ 'ø([eE])', '[eE]', 'o$1' ],
			[ 'Ø([eE])', '[eE]', 'O$1' ]
			// historically similar forms
			// "Å" is sometimes written as "Aa", and "å" as "aa", but in names
			// it is not generally acceptable to use this transliteration. To
			// handle those situations we need some oposite forms.
			// There is a similar character "Å" for the length unit Angstrom,
			// but this is not the upper case letter Å.
		]
	};

	$.ime.register( defs );
}( jQuery ) );
