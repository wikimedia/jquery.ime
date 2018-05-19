
( function ( $ ) {
	'use strict';

	var fonAlt = {
		id: 'fon-alt',
		name: 'fon-alt',
		description: 'Fon input keyboard',
		date: '2018-05-18',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Mahuton POSSOUPE',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
<<<<<<< HEAD
      [ '~E', 'Ɛ' ],
      [ '~e', 'ɛ' ],
=======
      			[ '~E', 'Ɛ' ],
>>>>>>> eed046c94aa8a8b92bbbd77249d0bc24a91ed355
			[ '~O', 'Ɔ' ],
      [ '~o', 'ɔ' ],
			[ '~D', 'Ɖ' ],
<<<<<<< HEAD
      [ '~d', 'ɖ' ],
      [ '~/', 'Ó' ]
=======
      			[ '~d', 'ɖ' ]
>>>>>>> eed046c94aa8a8b92bbbd77249d0bc24a91ed355
		]
	};

	$.ime.register( fonAlt );
}( jQuery ) );
