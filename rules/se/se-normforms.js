( function ( $ ) {
	'use strict';

	var defs = {
	id: 'se-normforms',
	name: 'Davvisámegiella',
	description: 'Northern Sami keyboard layout',
	date: '2018-08-08',
	URL: 'http://divvun.no/keyboards/layout-sme.html',
	author: 'Jon Harald Søby',
	license: 'GPLv3',
	version: '1.0',
	maxKeyLength: 2,
	patterns: [
		[ 'q', 'á' ],
		[ 'Q', 'Á' ],
 		[ 'w', 'š' ],
		[ 'W', 'Š' ],
		[ 'y', 'ŧ' ],
		[ 'Y', 'Ŧ' ],
		[ '¨', 'ŋ' ],
		[ '\^', 'Ŋ' ],
		[ '\'', 'đ' ],
		[ '\*', 'Đ' ],
		[ '<', 'ž' ],
		[ '>', 'Ž' ],
		[ 'x', 'č' ],
		[ 'X', 'Č' ],
		// Tilde negations to get the "normal" letters
		[ '~á', 'q' ],
		[ '~Á', 'Q' ],
		[ '~š', 'w' ],
		[ '~Š', 'W' ],
		[ '~ŧ', 'y' ],
		[ '~Ŧ', 'Y' ],
		[ '~ŋ', '¨' ],
		[ '~Ŋ', '^' ],
		[ '~đ', '\'' ],
		[ '~Đ', '*' ],
		[ '~ž', '<' ],
		[ '~Ž', '>' ],
		[ '~č', 'x' ],
		[ '~Č', 'X' ]
	]

	};
	$.ime.register( defs );

}( jQuery ) );
