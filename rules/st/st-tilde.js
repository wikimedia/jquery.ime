( function ( $ ) {
	'use strict';

	var stTilde = {
		id: 'st-tilde',
		name: 'st-tilde',
		description: 'Sotho tilde keyboard',
		date: '2019-03-28',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/st-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~S', 'Š' ],
			[ '~s', 'š' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~\\-', '\u0304' ] // Combining macron
		]
	};

	$.ime.register( stTilde );
}( jQuery ) );
