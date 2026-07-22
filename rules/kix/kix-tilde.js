( function ( $ ) {
	'use strict';

	var kixTilde = {
		id: 'kix-tilde',
		name: 'Khiamniungan tilde',
		description: 'Khiamniungan Naga input keyboard',
		date: '2026-07-22',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Toluwanimi Ayodele',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 3,
		patterns: [
			[ '~u', 'ü' ],          // U+00FC
			[ '~U', 'Ü' ],          // U+00DC
			[ '~\\\\', '\u0300' ],  // grave
			[ '~-', '\u0304' ],     // macron
			[ '~\\^', '\u0302' ],   // circumflex
			[ '~/', '\u0301' ]      // acute
		]
	};

	$.ime.register( kixTilde );
}( jQuery ) );

