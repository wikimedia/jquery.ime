( function ( $ ) {
	'use strict';

	var jacTilde = {
		id: 'jac-tilde',
		name: 'jac-tilde',
		description: 'Jakaltek input keyboard',
		date: '2024-07-03',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~\'', 'ꞌ' ], // Saltillo
			[ '~n', 'n̈' ],
			[ '~N', 'N̈' ],
			[ '~x', 'ẍ' ],
			[ '~X', 'Ẍ' ]
		]
	};

	$.ime.register( jacTilde );
}( jQuery ) );
