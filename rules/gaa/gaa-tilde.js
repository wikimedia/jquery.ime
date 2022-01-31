( function ( $ ) {
	'use strict';

	var gaaTilde = {
		id: 'gaa-tilde',
		name: 'Ga tilde',
		description: 'Ga tilde',
		date: '2019-05-06',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.1',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\{', '\u0303' ] // Combining tilde
		]
	};

	$.ime.register( gaaTilde );
}( jQuery ) );
