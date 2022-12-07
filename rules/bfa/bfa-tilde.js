( function ( $ ) {
	'use strict';

	var bfaTilde = {
		id: 'bfa-tilde',
		name: 'Bari tilde',
		description: 'Bari tilde',
		date: '2022-12-07',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ö' ],
			[ '~o', 'ö' ]
		]
	};

	$.ime.register( bfaTilde );
}( jQuery ) );
