( function ( $ ) {
	'use strict';

	var hocLatnTilde = {
		id: 'hoc-latn-semicolon',
		name: 'Ho Latin semicolon',
		description: 'Ho Latin semicolon keyboard',
		date: '2026-07-31',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/hoc-latn-semicolon',
		author: 'Mangu Purty',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 3,
		patterns: [



      //Uppercase
      //Consonants

      [ 'K;', 'Ḱ' ],
			[ 'C;', 'Ć' ],
			[ 'Z;', 'T́' ],
			[ '(W|P);', 'Ṕ' ],

      [ 'Ḱ;', 'K' ],
			[ 'Ć;', 'C' ],
			[ 'T́;', 'T' ],
			[ 'Ṕ;', 'P' ],

      [ 'T;', 'Ṭ' ],
			[ 'D;', 'Ḍ' ],
			[ 'R;', 'Ṛ' ],

      [ 'Ṭ;', 'T' ],
			[ 'Ḍ;', 'D' ],
			[ 'Ṛ;', 'R' ],

      [ 'N;', 'Ṅ' ],
			[ 'J;', 'Ń' ],

      [ 'Ṅ;', 'N' ],
			[ 'Ń;', 'J' ],

      //Vowels

      [ 'A;', 'Á' ],
			[ 'Á;', 'Ã' ],
			[ 'Ã;', 'Ä' ],
			[ 'Ä;', 'À' ],
			[ 'À;', 'Â' ],
      [ 'Â;', 'A' ],

      [ 'E;', 'É' ],
			[ 'É;', 'Ẽ' ],
			[ 'Ẽ;', 'Ë' ],
			[ 'Ë;', 'È' ],
			[ 'È;', 'Ê' ],
      [ 'Ê;', 'E' ],

			[ '\;', ';' ]
		]
	};

	$.ime.register( hocLatnSemicolon );
}( jQuery ) );
