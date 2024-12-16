( function ( $ ) {
	'use strict';

	var madTilde = {
		id: 'mad-tilde',
		name: 'mad-tilde',
		description: 'Madurese tilde keyboard',
		date: '2020-12-06',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/mad-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1',
		patterns: [
			[ '~A', 'Â' ],
			[ '~a', 'â' ],
			[ '~D', 'Ḍ' ],
			[ '~d', 'ḍ' ],
			[ '~E', 'È' ],
			[ '~e', 'è' ],
			[ '~T', 'Ṭ' ],
			[ '~t', 'ṭ' ]
		]
	};

	$.ime.register( madTilde );
}( jQuery ) );
