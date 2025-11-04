( function ( $ ) {
	'use strict';

	var efiTilde = {
		id: 'efi-tilde',
		name: 'efi-tilde',
		description: 'Efik input keyboard',
		date: '2022-05-23',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/efi-tilde',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~E', 'Ẹ' ],
			[ '~e', 'ẹ' ],
			[ '~I', 'Ị' ],
			[ '~i', 'ị' ],
			[ '~N', 'N̄' ],
			[ '~n', 'n̄' ],
			[ '~O', 'Ọ' ],
			[ '~o', 'ọ' ],
			[ '~U', 'Ụ' ],
			[ '~u', 'ụ' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~/', '\u0301' ] // Combining acute
		]
	};

	$.ime.register( efiTilde );
}( jQuery ) );
