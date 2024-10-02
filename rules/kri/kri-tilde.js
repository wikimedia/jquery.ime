( function ( $ ) {
	'use strict';

	var kriTilde = {
		id: 'kri-tilde',
		name: 'Krio tilde',
		description: 'Krio input keyboard',
		date: '2024-09-23',
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
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\^', '\u0302' ] // Combining circumflex
		]
	};

	$.ime.register( kriTilde );
}( jQuery ) );
