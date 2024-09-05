( function ( $ ) {
	'use strict';

	var kajTilde = {
		id: 'kaj-tilde',
		name: 'kaj-tilde',
		description: 'Jju input keyboard',
		date: '2024-09-03',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~A', 'A\u0331' ], // A̱
			[ '~a', 'a\u0331' ], // a̱
			[ '~U', 'U\u0331' ], // U̱
			[ '~u', 'u\u0331' ], // u̱
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~_', '\u0331' ] // Combining macron below
		]
	};

	$.ime.register( kajTilde );
}( jQuery ) );
