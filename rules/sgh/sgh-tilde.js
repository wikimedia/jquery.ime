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
			[ '~Z', 'Ʒ' ],
			[ '~z', 'ʒ' ],
			[ '~D', 'Đ' ],
			[ '~d', 'đ' ],
			[ '~e', 'ē' ],
			[ '~E', 'Ê' ],
			[ '~3', 'ê' ],
			[ '~G', 'Ğ' ],
			[ '~h', 'ğ' ],
			[ '~H', 'H²' ],
			[ '~2', 'h²' ],
			[ '~S', 'Š' ],
			[ '~s', 'š' ],
			[ '~T', 'Þ' ],
			[ '~t', 'þ' ],
			[ '~U', 'Ů' ],
			[ '~u', 'ů' ],
			[ '~X', 'Ẋ' ],
			[ '~x', 'ẋ' ],
			[ '~V', 'Ž' ],
			[ '~v', 'ž' ],
			[ '~Y', 'Ġ' ],
			[ '~y', 'ġ' ],
			[ '~_', '\u0331' ],
			[ '~B', 'A̱' ],
			[ '~b', 'a̱' ]
		]
	};

	$.ime.register( sghTilde );
}( jQuery ) );