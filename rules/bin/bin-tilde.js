( function ( $ ) {
	'use strict';

	var binTilde = {
		id: 'bin-tilde',
		name: 'bin-tilde',
		description: 'Edo input keyboard - tilde',
		date: '2024-07-01',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ẹ' ],
			[ '~e', 'ẹ' ],
			[ '~O', 'Ọ' ],
			[ '~o', 'ọ' ]
		]
	};

	$.ime.register( binTilde );
}( jQuery ) );
