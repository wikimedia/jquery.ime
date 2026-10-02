( function ( $ ) {
	'use strict';

	var kgpTilde = {
		id: 'kgp-tilde',
		name: 'kgp-tilde',
		description: 'Kaingang input keyboard',
		date: '2026-10-02',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/kgp-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 3,
		patterns: [
			[ '~A', 'Ã' ],
			[ '~a', 'ã' ],
			[ '~E', 'Ẽ' ],
			[ '~e', 'ẽ' ],
			[ '~I', 'Ĩ' ],
			[ '~i', 'ĩ' ],
			[ '~U', 'Ũ' ],
			[ '~u', 'ũ' ],
			[ '~Y', 'Ỹ' ],
			[ '~y', 'ỹ' ],
			[ '~/', '\u0301' ] // Combining acute
		]
	};

	$.ime.register( kgpTilde );
}( jQuery ) );
