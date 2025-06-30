( function ( $ ) {
	'use strict';

	var bolTilde = {
		id: 'bol-tilde',
		name: 'bol-tilde',
		description: 'Bole input keyboard',
		date: '2024-05-12',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~B', 'Ɓ' ],
			[ '~b', 'ɓ' ],
			[ '~D', 'Ɗ' ],
			[ '~d', 'ɗ' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~\\^', '\u0302' ], // Combining circumflex
            [ '~-', '\u0304' ], // Combining macron
            [ '~v', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( bolTilde );
}( jQuery ) );
