( function ( $ ) {
	'use strict';

	var nziTilde = {
		id: 'nzi-tilde',
		name: 'Nzema tilde',
		description: 'Nzema tilde',
		date: '2022-12-07',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ]
		]
	};

	$.ime.register( nziTilde );
}( jQuery ) );
