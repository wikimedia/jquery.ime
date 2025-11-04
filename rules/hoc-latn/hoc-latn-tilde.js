( function ( $ ) {
	'use strict';

	var hocLatnTilde = {
		id: 'hoc-latn-tilde',
		name: 'Ho Latin tilde',
		description: 'Ho Latin tilde keyboard',
		date: '2025-04-30',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/hoc-latn-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 3,
		patterns: [
			[ 'C~/', 'Ć' ],
			[ 'C~/', 'ć' ],
			[ '~D', 'Ḍ' ],
			[ '~d', 'ḍ' ],
			[ 'K~/', 'Ḱ' ],
			[ 'K~/', 'ḱ' ],
			[ '~N', 'Ṅ' ],
			[ '~n', 'ṅ' ],
			[ 'N~/', 'Ń' ],
			[ 'n~/', 'ń' ],
			[ 'P~/', 'Ṕ' ],
			[ 'p~/', 'ṕ' ],
			[ '~R', 'Ṛ' ],
			[ '~r', 'ṛ' ],
			[ 'T~/', 'T́' ],
			[ 't~/', 't́' ],
			[ '~T', 'Ṭ' ],
			[ '~t', 'ṭ' ],
			[ '~\\\\', '\u0300' ], // Combining grave accent
			[ '~/', '\u0301' ], // Combining acute accent
			[ '~\\^', '\u0302' ], // Combining circumflex accent
			[ '~\\{', '\u0303' ] // Combining tilde
		]
	};

	$.ime.register( hocLatnTilde );
}( jQuery ) );
