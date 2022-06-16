( function ( $ ) {
	'use strict';

	var tumTilde = {
		id: 'tum-tilde',
		name: 'tum-tilde',
		description: 'ChiTumbuka tilde keyboard',
		date: '2022-06-16',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~W', 'Ŵ' ],
			[ '~w', 'ŵ' ],
			[ '~\\^', '\u0302' ] // Combining circumflex
		]
	};

	$.ime.register( tumTilde );
}( jQuery ) );
