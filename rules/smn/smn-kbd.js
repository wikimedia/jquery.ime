( function ( $ ) {
  'use strict';

  var defs = {
    id: 'smn-kbd',
    name: 'Anarâškielâ',
    description: 'Inari Sami keyboard layout',
    date: '2018-08-08',
    URL: 'http://divvun.no/keyboards/layout-smn.html',
    author: 'Jon Harald Søby',
    license: 'GPLv3',
    version: '1.0',
    maxKeyLength: 2,
    patterns: [
      [ 'q', 'á' ],
      [ 'Q', 'Á' ],
      [ 'w', 'š' ],
      [ 'W', 'Š' ],
      [ 'å', 'â' ],
      [ 'Å', 'Â' ],
      [ 'ö', 'đ' ],
      [ 'Ö', 'Đ' ],
      [ '<', 'ž' ],
      [ '>', 'Ž' ],
      [ 'x', 'č' ],
      [ 'X', 'Č' ],
      // Tilde negations to get the "normal" letters
      [ '~á', 'q' ],
      [ '~Á', 'Q' ],
      [ '~š', 'w' ],
      [ '~Š', 'W' ],
      [ '~â', 'å' ],
      [ '~Â', 'Å' ],
      [ '~đ', 'ö' ],
      [ '~Đ', 'Ö' ],
      [ '~ž', '<' ],
      [ '~Ž', '>' ],
      [ '~č', 'x' ],
      [ '~C', 'X']
    ]

  };
  $.ime.register( defs );

}( jQuery );
