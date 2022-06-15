( function ( $ ) {
	'use strict';

	var eeTilde = {
		id: 'ee-tilde',
		name: 'ee-tilde',
		description: 'Ewe input keyboard',
		date: '2018-11-30',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.1',
		patterns: [
			[ '~D', 'Ɖ' ],
			[ '~d', 'ɖ' ],
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~F', 'Ƒ' ],
			[ '~f', 'ƒ' ],
			[ '~G', 'Ɣ' ],
			[ '~g', 'ɣ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~V', 'Ʋ' ],
			[ '~v', 'ʋ' ],
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~\\{', '\u0303' ], // Combining tilde
			[ '~-', '\u0304' ], // Combining macron
			[ '~\\^', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( eeTilde );
}( jQuery ) );
