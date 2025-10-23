( function ( $ ) {
	'use strict';

	var jabTilde = {
		id: 'jab-tilde',
		name: 'Hyam tilde',
		description: 'Hyam input keyboard',
		date: '2025-10-22',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Toluwanimi Ayodele',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~A', 'A\u0331' ],
			[ '~a', 'a\u0331' ],
			[ '~E', 'E\u0331' ],
			[ '~e', 'e\u0331' ],
			[ '~I', 'I\u0331' ],
			[ '~i', 'i\u0331' ],
			[ '~_', '\u0331' ]
		]
	};

	$.ime.register( jabTilde );
}( jQuery ) );