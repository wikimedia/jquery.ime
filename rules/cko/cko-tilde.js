( function ( $ ) {
	'use strict';

	var ckoTilde = {
		id: 'cko-tilde',
		name: 'Anufo tilde',
		description: 'Anufo input keyboard',
		date: '2024-11-05',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~M', 'Ɱ' ],
			[ '~m', 'ɱ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\{', '\u0303' ] // Combining tilde
		]
	};

	$.ime.register( ckoTilde );
}( jQuery ) );
