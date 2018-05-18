
( function ( $ ) {
	'use strict';

	var fonAlt = {
		id: 'fon-alt',
		name: 'fon-alt',
		description: 'fon input keyboard',
		date: '2018-05-18',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Mahuton POSSOUPE',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
      [ '~E', 'Ɛ' ],
			[ '~O', 'Ɔ' ],
			[ '~D', 'Ɖ' ],
      [ '~d', 'ɖ' ]
		]
	};

	$.ime.register( fonAlt );
}( jQuery ) );
