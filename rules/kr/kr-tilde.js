( function ( $ ) {
	'use strict';

	var krTilde = {
		id: 'kr-tilde',
		name: 'Kanuri tilde',
		description: 'Kanuri tilde keyboard',
		date: '2022-06-11',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ǝ' ],
			[ '~e', 'ǝ' ],
			[ '~R', 'Ɍ' ],
			[ '~r', 'ɍ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\^', '\u0302' ], // Combining circumflex accent
			[ '~v', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( krTilde );
}( jQuery ) );
