( function ( $ ) {
	'use strict';

	var tivTilde = {
		id: 'tiv-tilde',
		name: 'tiv-tilde',
		description: 'Tiv tilde keyboard',
		date: '2026-01-06',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/tiv-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~O', 'Ô' ],
			[ '~o', 'ô' ]
		]
	};

	$.ime.register( tivTilde );
}( jQuery ) );
