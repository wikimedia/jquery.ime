( function ( $ ) {
	'use strict';

	var niaTilde = {
		id: 'nia-tilde',
		name: 'nia-tilde',
		description: 'Nias tilde keyboard',
		date: '2021-01-13',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/nia-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1',
		patterns: [
			[ '~O', 'Ö' ],
			[ '~o', 'ö' ],
			[ '~W', 'Ŵ' ],
			[ '~w', 'ŵ' ]
		]
	};

	$.ime.register( niaTilde );
}( jQuery ) );
