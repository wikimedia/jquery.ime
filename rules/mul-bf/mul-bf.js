( function ( $ ) {
	'use strict';

	var mulBf = {
		id: 'mul-bf',
		name: 'Burkina Faso tilde',
		description: 'Burkina Faso tilde keyboard',
		date: '2022-02-14',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~B', 'Ɓ' ],
			[ '~b', 'ɓ' ],
			[ '~C', 'Ç' ],
			[ '~c', 'ç' ],
			[ '~D', 'Ɗ' ],
			[ '~d', 'ɗ' ],
			[ '~A', 'Ǝ' ],
			[ '~a', 'ǝ' ],
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
			[ '~W', 'Ⱳ' ],
			[ '~w', 'ⱳ' ],
			[ '~Y', 'Ƴ' ],
			[ '~y', 'ƴ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\^', '\u0302' ], // Combining circumflex accent
			[ '~\\{', '\u0303' ], // Combining tilde
			[ '~-', '\u0304' ], // Combining macron
			[ '~:', '\u0308' ], // Combining diaeresis
			[ '~v', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( mulBf );
}( jQuery ) );
