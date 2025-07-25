( function ( $ ) {
	'use strict';

	var kcgTilde = {
		id: 'kcg-tilde',
		name: 'kcg-tilde',
		description: 'Tyap input keyboard',
		date: '2020-12-04',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/kcg-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.1',
		patterns: [
			[ '~A', 'A\u0331' ],
			[ '~a', 'a\u0331' ],
			[ '~I', 'I\u0331' ],
			[ '~i', 'i\u0331' ],
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~_', '\u0331' ] // Combining macron below
		]
	};

	$.ime.register( kcgTilde );
}( jQuery ) );
