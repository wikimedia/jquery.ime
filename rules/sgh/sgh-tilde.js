( function ( $ ) {
	'use strict';

	var sghTilde = {
		id: 'sgh-tilde',
		name: 'Shughni tilde',
		description: 'Shughni input keyboard',
		date: '2025-11-29',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Toluwanimi Ayodele',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~A', 'Ā' ],
			[ '~a', 'ā' ],
			[ '~C', 'Č' ],
			[ '~c', 'č' ],
			[ '~E', 'Ê' ],
			[ '~e', 'ê' ],
			[ '~G', 'Ɣ' ],
			[ '~g', 'ɣ' ],
			[ '~H', 'Ɣ̌' ],
			[ '~h', 'ɣ̌' ],
			[ '~I', 'Ī' ],
			[ '~i', 'ī' ],
			[ '~J', 'J̌' ],
			[ '~j', 'ǰ' ],
			[ '~T', 'Θ' ],
			[ '~t', 'θ' ],
			[ '~S', 'Š' ],
			[ '~s', 'š' ],
			[ '~U', 'Ů' ],
			[ '~u', 'ů' ],
			[ '~V', 'Ū' ],
			[ '~v', 'ū' ],
			[ '~X', 'X̌' ],
			[ '~x', 'x̌' ],
			[ '~Z', 'Ž' ],
			[ '~z', 'ž' ],
			[ '~M', 'Ʒ' ],
			[ '~m', 'ʒ' ],
			[ '~\\-', '\u0304' ] // Combining macron
		]
	};

	$.ime.register( sghTilde );
}( jQuery ) );