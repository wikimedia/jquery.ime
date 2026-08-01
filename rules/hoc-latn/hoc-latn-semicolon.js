( function ( $ ) {
	'use strict';

	var hocLatnSemicolon = {
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



      //uppercase
      //Consonants

		[ 'Z;', 'T́' ],
		[ 'K;', 'Ḱ' ],
		[ 'C;', 'Ć' ],
		[ 'P;', 'Ṕ' ],
		[ 'W;', 'Ṕ' ],

//		[ 'Ḱ;', 'K' ], //works
//		[ 'Ć;', 'C' ], //works
//		[ 'T́;', 'Z' ], //causes issues
//		[ 'Ṕ;', 'P' ], //works
		
		[ 'T;', 'Ṭ' ],
		[ 'D;', 'Ḍ' ],
		[ 'R;', 'Ṛ' ],
//		[ 'T..', 'Ṭ' ], //messes up Z; > T́, outcome: Z; P; > ṬṔ, for some reason
//		[ 'D..', 'Ḍ' ], //works, disabled for consistency with T.. > Ṭ
//		[ 'R..', 'Ṛ' ], //works, disabled for consistency with T.. > Ṭ

//		[ 'Ṭ;', 'T' ], //causes issues
//		[ 'Ḍ;', 'D' ], //works
//		[ 'Ṛ;', 'R' ], //works
		
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
//		[ 'Â;', 'A' ], //causes issues

		[ 'A\u0060', 'À' ], //\u0060 = `
		[ 'A\u007E', 'Ã' ], //\u007E = ~
		[ 'A\u002E\u002E', 'Ạ' ], //\u002E = .
//		[ 'Ạ\.\.', 'Ä' ], //messes up the rest
		[ 'A\\^', 'Â' ], //\u005E = ^
		[ 'À\u0060', 'Á' ],

		[ 'E;', 'É' ],
		[ 'É;', 'Ẽ' ],
		[ 'Ẽ;', 'Ë' ],
		[ 'Ë;', 'È' ],
		[ 'È;', 'Ê' ],
//		[ 'Ê;', 'E' ], //causes issues

		[ 'E\u0060', 'È' ],
		[ 'E\u007E', 'Ẽ' ],
		[ 'E\u002E\u002E', 'Ẹ' ],
		[ 'E\\^', 'Ê' ],
		[ 'È\u0060', 'É' ],

		[ 'I;', 'Í' ],
		[ 'Í;', 'Ĩ' ],
		[ 'Ĩ;', 'Ï' ],
		[ 'Ï;', 'Ì' ],
		[ 'Ì;', 'Î' ],
//		[ 'Î;', 'I' ], //causes issues

		[ 'I\u0060', 'Ì' ],
		[ 'I\u007E', 'Ĩ' ],
		[ 'I\u002E\u002E', 'Ï' ],
		[ 'I\\^', 'Î' ],
		[ 'Ì\u0060', 'Í' ],

		[ 'O;', 'Ó' ],
		[ 'Ó;', 'Õ' ],
		[ 'Õ;', 'Ö' ],
		[ 'Ö;', 'Ò' ],
		[ 'Ò;', 'Ô' ],
//		[ 'Ô;', 'O' ], 

		[ 'O\u0060', 'Ò' ],
		[ 'O\u007E', 'Õ' ],
		[ 'O\u002E\u002E', 'Ọ' ],
//		[ 'Ọ\.\.', 'Ö' ],
		[ 'O\\^', 'Ô' ],
		[ 'Ò\u0060', 'Ó' ],

		[ 'U;', 'Ú' ],
		[ 'Ú;', 'Ũ' ],
		[ 'Ũ;', 'Ü' ],
		[ 'Ü;', 'Ù' ],
		[ 'Ù;', 'Û' ],
//		[ 'Û;', 'U' ], //causes issues

		[ 'U\u0060', 'Ù' ],
		[ 'U\u007E', 'Ũ' ],
		[ 'U\u002E\u002E', 'Ü' ],
		[ 'U\\^', 'Û' ],
		[ 'Ù\u0060', 'Ú' ],

		[ '\u003C', '‹' ], //\u003C = <
		[ '\u003E', '›' ],//\u003E = >
		[ '››', '»' ],
		[ '‹‹', '«' ],
	


		[ '\\\\;', ';' ],

//		[ '\\\\\u007E', '\u007E' ], //\u007E = ~, \\\\ = \
//		[ '\\\\\u0060', '\u0060' ], //\u0060 = `
		[ '\\\\\\^', '\\^' ],
		[ '\\\\‹', '\u003C' ], //\u003C = <
		[ '\\\\›', '\u003E' ], //\u003E = >

		[ '\u002E;', '·' ]
		]
	};

	$.ime.register( hocLatnSemicolon );
}( jQuery ) );
