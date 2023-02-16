( function ( $ ) {
	'use strict';

	var kusTilde = {
		id: 'kus-tilde',
		name: 'Kusaal tilde',
		description: 'Kusaal input keyboard',
		date: '2022-12-11',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
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
			[ '~u', 'ʋ' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\{', '\u0303' ], // Combining tilde
			[ '~-', '\u0304' ] // Combining macron
		]
	};

	$.ime.register( kusTilde );
}( jQuery ) );
