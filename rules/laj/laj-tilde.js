( function ( $ ) {
	'use strict';

	var lajTilde = {
		id: 'laj-tilde',
		name: 'Lango tilde',
		description: 'Lango tilde',
		date: '2024-09-30',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/laj-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ë' ],
			[ '~e', 'ë' ],
			[ '~I', 'Ï' ],
			[ '~i', 'ï' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ö' ],
			[ '~o', 'ö' ],
			[ '~U', 'Ü' ],
			[ '~u', 'ü' ]
		]
	};

	$.ime.register( lajTilde );
}( jQuery ) );
