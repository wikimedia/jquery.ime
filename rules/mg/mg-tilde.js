( function ( $ ) {
	'use strict';

	var mgTilde = {
		id: 'mg-tilde',
		name: 'mg-tilde',
		description: 'Malagasy tilde keyboard',
		date: '2019-03-28',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/mg-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~n', 'n̈' ],
			[ '~N', 'N̈' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\^', '\u0302' ], // Combining circumflex
			[ '~\\:', '\u0308' ], // Combining diaeresis
			[ '~v', '\u030C' ] // Combining caron
		]
	};

	$.ime.register( mgTilde );
}( jQuery ) );
