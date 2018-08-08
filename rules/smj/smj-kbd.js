( function ( $ ) {
  'use strict';

  var defs = {
    id: 'smj-kbd',
    name: 'Julevsámegiella',
    description: 'Lule Sami keyboard layout',
    date: '2018-08-08',
    URL: 'http://divvun.no/keyboards/layout-smj.html',
    author: 'Jon Harald Søby',
    license: 'GPLv3',
    version: '1.0',
    maxKeyLength: 2,
    patterns: [
      [ 'q', 'á' ],
      [ 'Q', 'Á' ],
      [ '¨', 'ŋ' ],
      [ '^', 'Ŋ' ],
      // Tilde negations to get the "normal" letters
      [ '~á', 'q' ],
      [ '~Á', 'Q' ],
      [ '~ŋ', '¨' ],
      [ '~Ŋ', '^' ]
    ]

  };
  $.ime.register( defs );

}( jQuery ) );
