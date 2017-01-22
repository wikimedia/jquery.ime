( function ( $ ) {
	'use strict';

	var tiGeezim = {
		id: 'ti-geezim',
		name: 'Tigrinya GeezIM',
		description: 'Tigrinya input method based on GeezIME scheme',
		date: '2017-01-22',
		URL: 'http://type.geezlab.com',
		author: 'Fitsum Gaim, <fitsum@geezlab.com>',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 2,
		patterns: [
			// consonants
			[ 'h', 'ህ' ],
			[ '(l|L)', 'ል' ],
			[ 'H', 'ሕ' ],
			[ '(m|M)', 'ም' ],
			[ '(r|R)', 'ር' ],
			[ 'ስs', 'ሥ' ],
			[ 's', 'ስ' ],
			[ 'S', 'ሽ' ],
			[ 'q', 'ቅ' ],
			[ 'Q', 'ቕ' ],
			[ '(b|B)', 'ብ' ],
			[ '(v|V)', 'ቭ' ],
			[ 't', 'ት' ],
			[ 'c', 'ች' ],
			[ 'ህh', 'ኅ' ],
			[ 'n', 'ን' ],
			[ 'N', 'ኝ' ],
			[ 'k', 'ክ' ],
			[ 'K', 'ኽ' ],
			[ '(w|W)', 'ው' ],
			[ 'O', 'ዕ' ],
			[ 'z', 'ዝ' ],
			[ 'Z', 'ዥ' ],
			[ '(y|Y)', 'ይ' ],
			[ '(d|D)', 'ድ' ],
			[ '(j|J)', 'ጅ' ],
			[ 'g', 'ግ' ],
			[ 'G', 'ጝ' ], // Blin
			[ 'T', 'ጥ' ],
			[ 'C', 'ጭ' ],
			[ 'P', 'ጵ' ],
			[ '(x|X)', 'ጽ' ],
			[ '(ጽx|ጽX)', 'ፅ' ],
			[ '(f|F)', 'ፍ' ],
			[ 'p', 'ፕ' ],

		]
	};

	$.ime.register( tiGeezim );
}( jQuery ) );
