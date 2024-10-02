( function ( $ ) {
	'use strict';

	var ekpTilde = {
		id: 'ekp-tilde',
		name: 'ekp-tilde',
		description: 'Ekpeye input keyboard - tilde',
		date: '2024-05-17',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ẹ' ],
			[ '~e', 'ẹ' ],
			[ '~I', 'Ị' ],
			[ '~i', 'ị' ],
			[ '~O', 'Ọ' ],
			[ '~o', 'ọ' ],
			[ '~U', 'Ụ' ],
			[ '~u', 'ụ' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~\\^', '\u0302' ], // Combining circumflex
            [ '~-', '\u0304' ]
		]
	};

	$.ime.register( ekpTilde );
}( jQuery ) );
