( function ( $ ) {
	'use strict';

	var idKeyboard = {
		id: 'id-keyboard',
		name: 'id-keyboard',
		description: 'Indonesian - Suku keyboard',
		date: '2023-06-04',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/indonesian-suku-keyboard',
		author: 'Benny Lin',
		license: 'GPLv3',
		version: '1',
		patterns: [
			[ '~E', 'É' ],
			[ '~e', 'é' ],
			[ '`E', 'È' ],
			[ '`e', 'è' ]
		]
	};

	$.ime.register( idKeyboard );
}( jQuery ) );

