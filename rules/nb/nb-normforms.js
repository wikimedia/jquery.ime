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

			[ 'aa', 'å' ],
			[ '(AA|Aa|aA)', 'Å' ],
			[ 'ae', 'æ' ],
			[ '(AE|Ae|aE)', 'Æ' ],
			[ 'oe', 'ø' ],
			[ '(OE|Oe|oE)', 'Ø' ],

			[ '([#0-9a-fA-F])å([0-9a-fA-F])', '[aA]', '$1aa$2' ],
			[ '([#0-9a-fA-F])Å([0-9a-fA-F])', '[aA]', '$1AA$2' ],
			[ 'å([aA])', '[aA]', 'a$1' ],
			[ 'Å([aA])', '[aA]', 'A$1' ],

			[ '([#0-9a-fA-F])æ([0-9a-fA-F])', '[eE]', '$1ae$2' ],
			[ '([#0-9a-fA-F])Æ([0-9a-fA-F])', '[eE]', '$1AE$2' ],
			[ 'æ([eE])', '[eE]', 'a$1' ],
			[ 'Æ([eE])', '[eE]', 'A$1' ],

			[ '([bBdDeEgGiIkKlLmMnNpPrRsStTuUvV])ø([nNrR\s\W])', '[eE]', '$1oe$2' ],
			[ '([bBdDeEgGiIkKlLmMnNpPrRsStTuUvV])Ø([nNrR\s\W])', '[eE]', '$1OE$2' ],
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
