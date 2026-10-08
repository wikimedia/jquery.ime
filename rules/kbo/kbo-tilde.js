( function ( $ ) {
	'use strict';

	var kboTilde = {
		id: 'kbo-tilde',
		name: 'kbo-tilde',
		description: 'Keliko - tilde',
		date: '2026-10-04',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/kbo-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ẹ' ],
			[ '~e', 'ẹ' ],
			[ '~I', 'Ị' ],
			[ '~i', 'ị' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ọ' ],
			[ '~o', 'ọ' ],
			[ '~U', 'Ụ' ],
			[ '~u', 'ụ' ],
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\{', '\u0303' ] // Combining tilde
		]
	};

	$.ime.register( kboTilde );
}( jQuery ) );
