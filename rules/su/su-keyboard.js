( function ( $ ) {
	'use strict';

	var suKeyboard = {
		id: 'su-keyboard',
		name: 'su-keyboard',
		description: 'Sundanese keyboard',
		date: '2023-05-07',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Pijri Paijar',
		license: 'GPLv3',
		version: '1',
		patterns: [
			[ '~E', 'É' ],
			[ '~e', 'é' ]
		]
	};

	$.ime.register( suKeyboard );
}( jQuery ) );