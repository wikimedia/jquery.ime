( function ( $ ) {
	'use strict';

	var chnTilde = {
		id: 'chn-tilde',
		name: 'chn-tilde',
		description: 'Chinook Jargon input keyboard - tilde',
		date: '2024-02-07',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.1',
		patterns: [
			[ '~E', 'Ə' ],
			[ '~e', 'ə' ],
			[ '~h', 'ʰ' ],
			[ '~H', 'ʰ' ],
			[ '~L', 'Ɬ' ],
			[ '~l', 'ɬ' ],
			[ '~X', 'X̣' ],
			[ '~x', 'x̣' ],
			[ '~\\\'', '’' ],
			[ '~\\?', 'ʔ' ]
		]
	};

	$.ime.register( chnTilde );
}( jQuery ) );
