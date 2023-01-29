( function ( $ ) {
	'use strict';

	var iglTilde = {
		id: 'igl-tilde',
		name: 'igl-tilde',
		description: 'Igala input keyboard - tilde',
		date: '2023-01-29',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ẹ' ],
			[ '~e', 'ẹ' ],
			[ '~N', 'Ñ' ],
			[ '~n', 'ñ' ],
			[ '~O', 'Ọ' ],
			[ '~o', 'ọ' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\^', '\u0302' ], // Combining circumflex
			[ '~\\-', '\u0304' ], // Combining macron
			[ '~v', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( iglTilde );
}( jQuery ) );
