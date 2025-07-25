( function ( $ ) {
	'use strict';

	var akTilde = {
		id: 'ak-tilde',
		name: 'Akan tilde',
		description: 'Akan tilde',
		date: '2019-05-06',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ak-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ]
		]
	};

	$.ime.register( akTilde );
}( jQuery ) );
