( function ( $ ) {
	'use strict';

	var fvrTilde = {
		id: 'fvr-tilde',
		name: 'fvr-tilde',
		description: 'Fur tilde keyboard',
		date: '2024-10-31',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/fvr-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~A', 'A\u0331' ], // A with combining macron below
			[ '~a', 'a\u0331' ], // A with combining macron below
			[ '~I', 'Ɨ' ],
			[ '~i', 'ɨ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~U', 'Ʉ' ],
			[ '~u', 'ʉ' ],
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\^', '\u0302' ], // Combining circumflex accent
			[ '~v', '\u030C' ], // Combining caron
			[ '~_', '\u0331' ] // Combining macron below
		]
	};

	$.ime.register( fvrTilde );
}( jQuery ) );
