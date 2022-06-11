( function ( $ ) {
	'use strict';

	var bwrTilde = {
		id: 'bwr-tilde',
		name: 'Bura tilde',
		description: 'Bura tilde keyboard',
		date: '2022-06-11',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~B', 'Ɓ' ],
			[ '~b', 'ɓ' ],
			[ '~D', 'Ɗ' ],
			[ '~d', 'ɗ' ],
			[ '~E', 'Ə' ],
			[ '~e', 'ə' ]
		]
	};

	$.ime.register( bwrTilde );
}( jQuery ) );
