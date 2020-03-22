( function ( $ ) {
	'use strict';

	var vec = {
		id: 'vec-GVU',
		name: 'Vèneto GVU',
		description: 'Venetian input method.',
		date: '2020-03-22',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Vec.wiki community',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ 'dh', 'đ' ],
			[ 'lh', 'ł' ],
			[ 'òò', 'ó' ],
			[ 'zh', 'ẑ' ],
			[ 'đh', 'dh' ],
			[ 'ƚh', 'lh' ],
			[ 'ẑh', 'zh' ],
			[ 'Dh', 'Đ' ],
			[ 'Lh', 'Ł' ],
			[ 'Òò', 'Ó' ],
			[ 'Zh', 'Ẑ' ],
			[ 'Đh', 'Dh' ],
			[ 'Ƚh', 'Lh' ],
			[ 'Ẑh', 'Zh' ]
		]
	};

	$.ime.register( vec );
}( jQuery ) );
