( function ( $ ) {
	'use strict';

	var dagTilde = {
		id: 'dag-tilde',
		name: 'Dagbani tilde',
		description: 'Dagbani tilde',
		date: '2019-05-07',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/dag-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			// Both G and Y were requested by editors for Ɣ
			[ '~G', 'Ɣ' ],
			[ '~g', 'ɣ' ],
			[ '~Y', 'Ɣ' ],
			[ '~y', 'ɣ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~Z', 'Ʒ' ],
			[ '~z', 'ʒ' ]
		]
	};

	$.ime.register( dagTilde );
}( jQuery ) );
