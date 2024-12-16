( function ( $ ) {
	'use strict';

	var nsoTilde = {
		id: 'nso-tilde',
		name: 'nso-tilde',
		description: 'Northern Sotho input keyboard',
		date: '2018-12-02',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/nso-tilde',
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

	$.ime.register( nsoTilde );
}( jQuery ) );
