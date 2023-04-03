( function ( $ ) {
	'use strict';

	var ddnTilde = {
		id: 'ddn-tilde',
		name: 'ddn-tilde',
		description: 'Dendi input keyboard',
		date: '2023-04-03',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~-', '\u0304' ] // Combining macron
		]
	};

	$.ime.register( ddnTilde );
}( jQuery ) );
