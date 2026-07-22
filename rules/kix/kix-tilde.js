( function ( $ ) {
	'use strict';

	var kixTilde = {
		id: 'kix-tilde',
		name: 'Khiamniungan tilde',
		description: 'Khiamniungan Naga input keyboard',
		date: '2026-07-22',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/kix-tilde',
		author: 'Toluwanimi Ayodele',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~u', 'ü' ], // U+00FC
			[ '~U', 'Ü' ], // U+00DC
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~-', '\u0304' ], // Combining macron
			[ '~\\^', '\u0302' ], // Combining circumflex
			[ '~/', '\u0301' ] // Combining acute
		]
	};

	$.ime.register( kixTilde );
}( jQuery ) );

