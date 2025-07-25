( function ( $ ) {
	'use strict';

	var veTilde = {
		id: 've-tilde',
		name: 've-tilde',
		description: 'Venda input keyboard',
		date: '2018-12-02',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ve-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~D', 'Ḓ' ],
			[ '~d', 'ḓ' ],
			[ '~L', 'Ḽ' ],
			[ '~l', 'ḽ' ],
			[ '~N', 'Ṋ' ],
			[ '~n', 'ṋ' ],
			[ '~T', 'Ṱ' ],
			[ '~t', 'ṱ' ],
			[ '`N', 'Ṅ' ],
			[ '`n', 'ṅ' ]
		]
	};

	$.ime.register( veTilde );
}( jQuery ) );
