( function ( $ ) {
	'use strict';
	var jvKeyboard = {
		id: 'jv-keyboard',
		name: 'Jawa Latin extended keyboard',
		description: 'Javanese keyboard that include several accented letters',
		date: '2025-11-04',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/jv-keyboard',
		author: 'Benny Lin',
		license: 'GPLv3',
		version: '1.2',
		patterns: [
			[ '~E', 'É' ],
			[ '~e', 'é' ],
			[ '`E', 'È' ],
			[ '`e', 'è' ],
			[ 'ÈQ', 'Q' ],
			[ 'Èq', 'Q' ],
			[ 'èq', 'q' ],
			[ 'Q', 'È' ],
			[ 'q', 'è' ],
			[ '\\^E', 'Ê' ],
			[ '\\^e', 'ê' ],
			[ 'ÊX', 'X' ],
			[ 'Êx', 'X' ],
			[ 'êx', 'x' ],
			[ 'X', 'Ê' ],
			[ 'x', 'ê' ],
			[ 'ÉE', 'E' ],
			[ 'Ée', 'E' ],
			[ 'ée', 'e' ],
			[ 'E', 'É' ],
			[ 'e', 'é' ],
			[ '\\^A', 'Å' ],
			[ '\\^a', 'å' ],
			[ '~A', 'Å' ],
			[ '~a', 'å' ],
			[ '~D', 'Ḍ' ],
			[ '~d', 'ḍ' ],
			[ '~T', 'Ṭ' ],
			[ '~t', 'ṭ' ],
			[ '~N', 'Ṇ' ],
			[ '~n', 'ṇ' ],
			[ '\\.D', 'Ḍ' ],
			[ '\\.d', 'ḍ' ],
			[ '\\.T', 'Ṭ' ],
			[ '\\.t', 'ṭ' ],
			[ '\\.N', 'Ṇ' ],
			[ '\\.n', 'ṇ' ]
		]
	};

	$.ime.register( jvKeyboard );
}( jQuery ) );