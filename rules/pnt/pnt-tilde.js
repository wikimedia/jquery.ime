( function ( $ ) {
	'use strict';

	var pntTilde = {
		id: 'pnt-tilde',
		name: 'Pontic tilde',
		description: 'Pontic tilde',
		date: '2024-09-26',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~"', '\u0308' ], // Combining diaeresis
			[ '~\\^', '\u030C' ], // Combining caron
			[ '~:', '\u0324' ] // Combining diaeresis below
		]
	};

	$.ime.register( pntTilde );
}( jQuery ) );
