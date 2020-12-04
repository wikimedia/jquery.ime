( function ( $ ) {
	'use strict';

	var kcgTilde = {
		id: 'kcg-tilde',
		name: 'kcg-tilde',
		description: 'Tyap input keyboard',
		date: '2020-12-04',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.1',
		patterns: [
			[ '~A', 'A̠' ],
			[ '~a', 'a̱' ],
			[ '~I', 'I̠' ],
			[ '~i', 'i̠' ],
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~_', '\u0331' ] // Combining macron below
		]
	};

	$.ime.register( kcgTilde );
}( jQuery ) );
