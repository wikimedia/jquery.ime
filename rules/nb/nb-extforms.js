( function ( $ ) {
	'use strict';

	var defs = {
		id: 'nb-extforms',
		name: 'Norwegian extended ligatures',
		description: 'Ligatures will be transliterated if they are typed while holding down the extended key. Also includes the basic forms.',
		date: '2012-12-04',
		URL: 'http://www.evertype.com/alphabets/bokmaal-norwegian.pdf',
		author: 'John Erling Blad',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 2
	};

	defs.patterns = $.ime.inputmethods[ 'nb-baseforms' ].patterns.concat( [
		// Use ligature "AE" for "Æ"
		[ 'ª€', 'æ' ],
		[ '[ªº][€¢]', 'Æ' ],

		// Use ligature "OE" for "Ø"
		[ 'œ€', 'ø' ],
		[ '[œŒ][€¢]', 'Ø' ],

		// Use ligature "AA" for "Å"
		[ 'ªª', 'å' ],
		[ '[ªº][ªº]', 'Å' ]
	] );

	defs.patterns_x = [
		// Use ligature "AE" for "Æ"
		[ 'ae', 'æ' ],
		[ '[aA][eE]', 'Æ' ],

		// Use ligature "OE" for "Ø"
		[ 'oe', 'ø' ],
		[ '[oO][eE]', 'Ø' ],

		// Use ligature "AA" for "Å"
		[ 'aa', 'å' ],
		[ '[aA][aA]', 'Å' ]
	];

	// make sure these don't get out of sync
	if ( defs.contextLength < $.ime.inputmethods[ 'nb-baseforms' ].contextLength ) {
		defs.contextLength = $.ime.inputmethods[ 'nb-baseforms' ].contextLength;
	}
	if ( defs.maxKeyLength <  $.ime.inputmethods[ 'nb-baseforms' ].maxKeyLength ) {
		defs.maxKeyLength =  $.ime.inputmethods[ 'nb-baseforms' ].maxKeyLength;
	}

	$.ime.register( defs );
}( jQuery ) );