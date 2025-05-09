( function ( $ ) {
	'use strict';

	var wlxTilde = {
		id: 'wlx-tilde',
		name: 'Waale tilde',
		description: 'Waale tilde',
		date: '2024-07-03',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~I', 'Ɩ' ],
			[ '~i', 'ɩ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~U', 'Ʋ' ],
			[ '~u', 'ʋ' ]
		]
	};

	$.ime.register( wlxTilde );
}( jQuery ) );
