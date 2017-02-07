( function ( $ ) {
	'use strict';

	var defs = {
		id: 'nb-tildeforms',
		name: 'Norwegian tildemarked ligatures',
		description: 'Ligatures will only be transliterated if they are preceeded with a tilde. Also includes the basic forms.',
		date: '2012-12-04',
		URL: 'http://www.evertype.com/alphabets/bokmaal-norwegian.pdf',
		author: 'John Erling Blad',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 3
	};

	defs.patterns = $.ime.inputmethods[ 'nb-baseforms' ].patterns.concat( [
		// Use "°" together with "A" for "Å"
		[ '°a', 'å' ],
		[ '°A', 'Å' ],

		// Use "~" as an approximation with the ligature "AE" for "Æ"
		[ '~ae', 'æ' ],
		[ '~[aA][eE]', 'Æ' ],

		// Use "~" as an approximation with the ligature "OE" for "Ø"
		[ '~oe', 'ø' ],
		[ '~[oO][eE]', 'Ø' ],

		// Use "~" as an approximation with the ligature "AA" for "Å"
		[ '~aa', 'å' ],
		[ '~[aA][aA]', 'Å' ]
	] );

	// make sure these don't get out of sync
	if ( defs.contextLength < $.ime.inputmethods[ 'nb-baseforms' ].contextLength ) {
		defs.contextLength = $.ime.inputmethods[ 'nb-baseforms' ].contextLength;
	}
	if ( defs.maxKeyLength <  $.ime.inputmethods[ 'nb-baseforms' ].maxKeyLength ) {
		defs.maxKeyLength =  $.ime.inputmethods[ 'nb-baseforms' ].maxKeyLength;
	}

	$.ime.register( defs );
}( jQuery ) );
