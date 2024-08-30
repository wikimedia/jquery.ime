( function ( $ ) {
	'use strict';

	var jvKeyboard = {
		id: 'jv-keyboard',
		name: 'Jawa Latin extended keyboard',
		description: 'Javanese keyboard that include several accented letters',
		date: '2024-06-05',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/jv-keyboard',
		author: 'Benny Lin',
		license: 'GPLv3',
		version: '1.1',
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
			[ '\\.D', 'Ḍ' ],
			[ '\\.d', 'ḍ' ],
			[ '\\.T', 'Ṭ' ],
			[ '\\.t', 'ṭ' ]
		]
	};

	$.ime.register( jvKeyboard );
}( jQuery ) );