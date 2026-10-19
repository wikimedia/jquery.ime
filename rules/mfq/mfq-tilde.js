( function ( $ ) {
	'use strict';

	var mfqTilde = {
		id: 'mfq-tilde',
		name: 'Moba tilde',
		description: 'Moba input keyboard',
		date: '2026-10-19',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/mfq-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~I', 'Ɩ' ],
			[ '~i', 'ɩ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ],
			[ '~\\{', '\u0303' ] // Combining tilde
		]
	};

	$.ime.register( mfqTilde );
}( jQuery ) );
