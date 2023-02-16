( function ( $ ) {
	'use strict';

	var ishTilde = {
		id: 'ish-tilde',
		name: 'ish-tilde',
		description: 'Esan input keyboard - tilde',
		date: '2022-08-01',
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

	$.ime.register( ishTilde );
}( jQuery ) );
