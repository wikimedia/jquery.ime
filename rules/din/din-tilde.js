( function ( $ ) {
	'use strict';

	var dinTilde = {
		id: 'din-tilde',
		name: 'Dinka tilde',
		description: 'Dinka tilde',
		date: '2019-05-06',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/din-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~G', 'Ɣ' ],
			[ '~g', 'ɣ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~:', '\u0308' ] // Combining diaeresis
		]
	};

	$.ime.register( dinTilde );
}( jQuery ) );
