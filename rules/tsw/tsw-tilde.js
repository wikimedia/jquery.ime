( function ( $ ) {
	'use strict';

	var tsishinginiTilde = {
		id: 'tsw-tilde',
		name: 'Tsishingini tilde',
		description: 'Tsishingini input keyboard',
		date: '2026-08-18',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/tsw-tilde',
		author: 'Toluwanimi Ayodele',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			// Special letters
			[ '~B', 'Ɓ' ],
			[ '~b', 'ɓ' ],
			[ '~D', 'Ɗ' ],
			[ '~d', 'ɗ' ],
			// Combining macron below (for a̱, e̱, etc.) — type after the base letter
			[ '~_', '\u0331' ], // e.g., a~_ → a̱
			// Glottal stop (Latin Small Letter Saltillo, U+A78C)
			[ "~'", 'ꞌ' ]
		]
	};

	$.ime.register( tsishinginiTilde );
}( jQuery ) );
