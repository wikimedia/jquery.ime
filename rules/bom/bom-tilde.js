( function ( $ ) {
	'use strict';

	var bomTilde = {
		id: 'bom-tilde',
		name: 'bom-tilde',
		description: 'Bèrom tilde keyboard',
		date: '2022-12-07',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/bom-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\^', '\u0302' ], // Combining circumflex accent
			[ '~v', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( bomTilde );
}( jQuery ) );
