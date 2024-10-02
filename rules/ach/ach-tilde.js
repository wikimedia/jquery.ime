( function ( $ ) {
	'use strict';

	var achTilde = {
		id: 'ach-tilde',
		name: 'ach-tilde',
		description: 'Acholi tilde keyboard',
		date: '2024-09-30',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\\\', '\u0300' ] // Combining grave
		]
	};

	$.ime.register( achTilde );
}( jQuery ) );
