( function ( $ ) {
	'use strict';

	var szlTilde = {
		id: 'szl-tilde',
		name: 'Silesian tilde',
		description: 'Silesian alphabets specific keyboard',
		date: '2024-08-19',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Tomasz Ludyga',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~1', 'ō' ],
			[ '~2', 'ô' ],
			[ '~3', 'ŏ' ],
			[ '~4', 'õ' ],
			[ '~5', 'ã' ],
			[ '~6', 'Ô' ],
			[ '~7', 'Ō' ],
			[ '~u', 'ů' ],
			[ '~s', 'ś' ],
			[ '~l', 'ł' ],
			[ '~z', 'ż' ],
			[ '~x', 'ź' ],
			[ '~c', 'ć' ],
			[ '~n', 'ń' ],
			[ '~U', 'Ů' ],
			[ '~S', 'Ś' ],
			[ '~L', 'Ł' ],
			[ '~Z', 'Ż' ],
			[ '~X', 'Ź' ],
			[ '~C', 'Ć' ],
			[ '~N', 'Ń' ]
		]
	};

	$.ime.register( szlTilde );
}( jQuery ) );