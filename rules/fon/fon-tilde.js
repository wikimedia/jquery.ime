( function ( $ ) {
	'use strict';

	var fonTilde = {
		id: 'fon-tilde',
		name: 'fon-tilde',
		description: 'Fon input keyboard',
		date: '2018-05-18',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Mahuton POSSOUPE',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~D', 'Ɖ' ],
			[ '~d', 'ɖ' ],
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~/', '\u0341' ], // Combining acute tone mark
			[ '~\\\\', '\u0340' ] // Combining grave tone mark
		]
	};

	$.ime.register( fonTilde );
}( jQuery ) );
