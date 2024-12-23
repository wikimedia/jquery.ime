( function ( $ ) {
	'use strict';

	var bwrTilde = {
		id: 'bwr-tilde',
		name: 'Bura tilde',
		description: 'Bura tilde keyboard',
		date: '2022-08-14',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/bwr-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.1',
		maxKeyLength: 2,
		patterns: [
			[ '~B', 'Ɓ' ],
			[ '~b', 'ɓ' ],
			[ '~D', 'Ɗ' ],
			[ '~d', 'ɗ' ],
			[ '~E', 'Ə' ],
			[ '~e', 'ə' ],
			[ '~K', 'Ƙ' ],
			[ '~k', 'ƙ' ]
		]
	};

	$.ime.register( bwrTilde );
}( jQuery ) );
