( function ( $ ) {
	'use strict';

	var izreTilde = {
		id: 'izr-tilde',
		name: 'Izere tilde',
		description: 'Izere input keyboard',
		date: '2026-08-20',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/izr-tilde',
		author: 'Toluwanimi Ayodele',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			// Combining acute accent (for á, é, í, ó, ú) — type after the base letter
			[ '~/', '\u0301' ], // e.g., a~/ → á
			// Combining grave accent (for à, è, ì, ò, ù) — type after the base letter
			[ '~\\\\', '\u0300' ], // e.g., a~\ → à
			// Combining macron below (for e̱, o̱) — type after the base letter
			[ '~_', '\u0331' ] // e.g., e~_ → e̱
		]
	};

	$.ime.register( izreTilde );
}( jQuery ) );
