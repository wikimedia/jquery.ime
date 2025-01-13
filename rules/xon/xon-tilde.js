( function ( $ ) {
	'use strict';

	var xonTilde = {
		id: 'xon-tilde',
		name: 'Likpakpaanl tilde',
		description: 'Likpakpaanl tilde',
		date: '2025-01-13',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ]
		]
	};

	$.ime.register( xonTilde );
}( jQuery ) );
