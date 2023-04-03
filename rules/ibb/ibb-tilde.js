( function ( $ ) {
	'use strict';

	var ibbTilde = {
		id: 'ibb-tilde',
		name: 'ibb-tilde',
		description: 'Ibibio input keyboard',
		date: '2023-04-03',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~A', 'Ʌ' ],
			[ '~a', 'ʌ' ],
			[ '~E', 'Ǝ' ],
			[ '~e', 'ǝ' ],
			[ '~I', 'Ị' ],
			[ '~i', 'ị' ],
			[ '~N', 'Ñ' ],
			[ '~n', 'ñ' ],
			[ '~O', 'Ọ' ],
			[ '~o', 'ọ' ],
			[ '~U', 'Ụ' ],
			[ '~u', 'ụ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\^', '\u0302' ], // Combining circumflex accent
			[ '~-', '\u0304' ], // Combining macron
			[ '~v', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( ibbTilde );
}( jQuery ) );
