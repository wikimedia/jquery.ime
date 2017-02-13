( function ( $ ) {
	'use strict';

	var defs = {
		id: 'nb-normforms',
		name: 'Norwegian automatic ligatures',
		description: 'Ligatures will be autotransliterated according to simple heurestics. Also includes the basic forms.',
		date: '2012-12-04',
		URL: 'http://www.evertype.com/alphabets/bokmaal-norwegian.pdf',
		author: 'John Erling Blad',
		license: 'GPLv3',
		version: '2.0',
		contextLength: 1,
		maxKeyLength: 9
	};

	defs.patterns = $.ime.inputmethods[ 'nb-baseforms' ].patterns.concat( [
		// early capture of hex
		[ '((0x|#)[0-9a-fA-F]*[aA][aA])', '$1' ],
		[ '((0x|#)[0-9a-fA-F]*[aA][eE])', '$1' ],

		// collect ligature æ
		[ 'ae', 'æ' ],
		[ '(AE|Ae|aE)', 'Æ' ],
		// rollback
		[ '([iI][mM])æ([fFkKnN])', '[eE]', '$1ae$2' ],
		[ '([iI][mM])Æ([fFkKnN])', '[eE]', '$1AE$2' ],
		[ '([rR])æ([lL])', '[eE]', '$1ae$2' ],
		[ '([rR])Æ([lL])', '[eE]', '$1AE$2' ],
		[ '([sS])æ([kKpP])', '[eE]', '$1ae$2' ],
		[ '([sS])Æ([kKpP])', '[eE]', '$1AE$2' ],
		[ '([tT])æ([kK])', '[eE]', '$1ae$2' ],
		[ '([tT])Æ([kK])', '[eE]', '$1AE$2' ],
		[ 'æ([eE])', '[eE]', 'a$1' ],
		[ 'Æ([eE])', '[eE]', 'A$1' ],

		// collect ligature ø
		[ 'oe', 'ø' ],
		[ '([oO][eE])', 'Ø' ],
		// rollback
		[ '([dD])ø([uU])', '[eE]', '$1oe$2' ],
		[ '([dD])Ø([uU])', '[eE]', '$1OE$2' ],
		[ '([gG])ø([sS])', '[eE]', '$1oe$2' ],
		[ '([gG])Ø([sS])', '[eE]', '$1OE$2' ],
		[ '([iI])ø([tT])', '[eE]', '$1oe$2' ],
		[ '([iI])Ø([tT])', '[eE]', '$1OE$2' ],
		[ '([kK])ø([fF])', '[eE]', '$1oe$2' ],
		[ '([kK])Ø([fF])', '[eE]', '$1OE$2' ],
		[ '([nN])ø([nN\\s\\W])', '[eE]', '$1oe$2' ],
		[ '([nN])Ø([nN\\s\\W])', '[eE]', '$1OE$2' ],
		[ '(([iI][eE]|[aA][mM]|[bB][eE])[bB])ø([rR])', '[eE]', '$1oe$2' ],
		[ '(([iI][eE]|[aA][mM]|[bB][eE])[bB])Ø([rR])', '[eE]', '$1OE$2' ],
		[ '([pP])ø([nN])', '[eE]', '$1oe$2' ],
		[ '([pP])Ø([nN])', '[eE]', '$1OE$2' ],
		[ '([^tT][bBtT][rR])ø([nNrR])', '[eE]', '$1oe$2' ],
		[ '([^tT][bBtT][rR])Ø([nNrR])', '[eE]', '$1OE$2' ],
		[ 'ø([eE])', '[eE]', 'o$1' ],
		[ 'Ø([eE])', '[eE]', 'O$1' ],

		// collect ligature å
		[ 'aa', 'å' ],
		[ '(AA|Aa|aA)', 'Å' ],
		// rollback
		[ '([lL][jJ])å([kKnNtT])', '[aA]', '$1aa$2' ],
		[ '([lL][jJ])Å([kKnNtT])', '[aA]', '$1AA$2' ],
		[ '([iI][kK])å([^lL])', '[aA]', '$1aa$2' ],
		[ '([iI][kK])Å([^lL])', '[aA]', '$1AA$2' ],
		[ '([iI][mM])å([nNrRvV])', '[aA]', '$1aa$2' ],
		[ '([iI][mM])Å([nNrRvV])', '[aA]', '$1AA$2' ],
		[ '([tT])å([nN])', '[aA]', '$1aa$2' ],
		[ '([tT])Å([nN])', '[aA]', '$1AA$2' ],
		[ 'å([aA])', '[aA]', 'a$1' ],
		[ 'Å([aA])', '[aA]', 'A$1' ]

	] );

	// make sure these don't get out of sync
	if ( defs.contextLength < $.ime.inputmethods[ 'nb-baseforms' ].contextLength ) {
		defs.contextLength = $.ime.inputmethods[ 'nb-baseforms' ].contextLength;
	}
	if ( defs.maxKeyLength <  $.ime.inputmethods[ 'nb-baseforms' ].maxKeyLength ) {
		defs.maxKeyLength =  $.ime.inputmethods[ 'nb-baseforms' ].maxKeyLength;
	}

	$.ime.register( defs );
}( jQuery ) );