( function ( $ ) {
	'use strict';

	var mulCm = {
		id: 'mul-cm',
		name: 'Cameroon Languages tilde',
		description: 'General Alphabet of Cameroon Languages tilde keyboard',
		date: '2022-02-07',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~A', 'Ɑ' ],
			[ '~a', 'ɑ' ],
			[ 'AE', 'Æ' ],
			[ 'Ae', 'Æ' ],
			[ 'ae', 'æ' ],
			[ 'A~E', 'AE' ],
			[ 'A~e', 'Ae' ],
			[ 'a~e', 'ae' ],
			[ 'OE', 'Œ' ],
			[ 'Oe', 'Œ' ],
			[ 'oe', 'œ' ],
			[ 'O~E', 'OE' ],
			[ 'O~e', 'Oe' ],
			[ 'o~e', 'oe' ],
			[ '~B', 'Ɓ' ],
			[ '~b', 'ɓ' ],
			[ '~c', 'ə' ],
			[ '~C', 'Ə' ],
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~D', 'Ɗ' ],
			[ '~d', 'ɗ' ],
			[ '~I', 'Ɨ' ],
			[ '~i', 'ɨ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~J', 'Ø' ],
			[ '~j', 'ø' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~U', 'Ʉ' ],
			[ '~u', 'ʉ' ],
			[ '~X', 'ɤ' ], // There's no uppercase ɤ ("ram's horns") in Unicode
			[ '~x', 'ɤ' ],
			[ '~W', 'Ẅ' ],
			[ '~w', 'ẅ' ],
			[ '~Y', 'Ƴ' ],
			[ '~y', 'ƴ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\^', '\u0302' ], // Combining circumflex accent
			[ '~-', '\u0304' ], // Combining macron
			[ '~v', '\u030C' ], // Combining caron
			[ '~\\|', '\u030D' ], // Combining vertical line above
			[ '~\\.', '\u0323' ], // Combining dot below
			[ '~,', '\u0327' ] // Combining cedilla
		]
	};

	$.ime.register( mulCm );
}( jQuery ) );
