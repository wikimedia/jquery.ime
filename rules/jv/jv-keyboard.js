( function ( $ ) {
	'use strict';

	var jvKeyboard = {
		id: 'jv-keyboard',
		name: 'Jawa Latin extended keyboard',
		description: 'Javanese keyboard that include several accented letters',
		date: '2023-06-06',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Benny Lin',
		license: 'GPLv3',
		version: '1',
		patterns: [
			[ '~E', 'É' ],
			[ '~e', 'é' ],
			[ '`E', 'È' ],
			[ '`e', 'è' ],
			[ '\\^E', 'Ê' ],
			[ '\\^e', 'ê' ],
			[ '\\^A', 'Å' ],
			[ '\\^a', 'å' ],
			[ '~A', 'Å' ],
			[ '~a', 'å' ],
			[ '~D', 'Ḍ' ],
			[ '~d', 'ḍ' ],
			[ '~T', 'Ṭ' ],
			[ '~t', 'ṭ' ],
			[ '.D', 'Ḍ' ],
			[ '.d', 'ḍ' ],
			[ '.T', 'Ṭ' ],
			[ '.t', 'ṭ' ]
		]
	};

	$.ime.register( jvKeyboard );
}( jQuery ) );