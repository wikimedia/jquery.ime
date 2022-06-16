( function ( $ ) {
	'use strict';

	var nyTilde = {
		id: 'ny-tilde',
		name: 'ny-tilde',
		description: 'Chichewa / Nyanja tilde keyboard',
		date: '2022-06-16',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~W', 'Ŵ' ],
			[ '~w', 'ŵ' ],
			[ '~/', '\u0301' ] // Combining acute
		]
	};

	$.ime.register( nyTilde );
}( jQuery ) );
