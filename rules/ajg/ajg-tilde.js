( function ( $ ) {
	'use strict';

	var ajgTilde = {
		id: 'ajg-tilde',
		name: 'ajg-tilde',
		description: 'Aja tilde keyboard',
		date: '2021-11-13',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Mahuton POSSOUPE, Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~D', 'Ɖ' ],
			[ '~d', 'ɖ' ],
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~G', 'Ɣ' ],
			[ '~g', 'ɣ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~Z', 'Ʒ' ],
			[ '~z', 'ʒ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\^', '\u0302' ], // Combining circumflex accent
			[ '~-', '\u0304' ], // Combining macron
			[ '~v', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( ajgTilde );
}( jQuery ) );
