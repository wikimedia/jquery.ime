( function ( $ ) {
	'use strict';

	var defs = {
		id: 'nb-extforms',
		name: 'Norwegian extended ligatures',
		description: 'Ligatures will only be transliterated if they are typed while holding down the extended key.',
		date: '2012-12-04',
		URL: 'http://www.evertype.com/alphabets/bokmaal-norwegian.pdf',
		author: 'John Erling Blad',
		license: 'GPLv3',
		version: '1.0',
		// contextLength: 1,
		maxKeyLength: 3,
		patterns: [

			// Use ligature "AE" for "Æ"
            [ 'ª€', 'æ' ],
			[ '[ªº][€¢]', 'Æ' ],

			// Use ligature "OE" for "Ø"
			[ 'œ€', 'ø' ],
			[ '[œŒ][€¢]', 'Ø' ],

			// Use ligature "AA" for "Å"
			[ 'ªª', 'å' ],
			[ '[ªº][ªº]', 'Å' ]

		],
		patterns_x: [

			// Use ligature "AE" for "Æ"
			[ 'ae', 'æ' ],
			[ '[aA][eE]', 'Æ' ],

			// Use ligature "OE" for "Ø"
			[ 'oe', 'ø' ],
			[ '[oO][eE]', 'Ø' ],

			// Use ligature "AA" for "Å"
			[ 'aa', 'å' ],
			[ '[aA][aA]', 'Å' ]

        ]
	};

	$.ime.register( defs );
}( jQuery ) );
