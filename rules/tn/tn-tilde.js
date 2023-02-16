( function ( $ ) {
	'use strict';

	var tnTilde = {
		id: 'tn-tilde',
		name: 'tn-tilde',
		description: 'Setswana input keyboard',
		date: '2022-07-19',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~S', 'Š' ],
			[ '~s', 'š' ],
			[ '~E', 'Ê' ],
			[ '~e', 'ê' ],
			[ '~O', 'Ô' ],
			[ '~o', 'ô' ]
		]
	};

	$.ime.register( tnTilde );
}( jQuery ) );
