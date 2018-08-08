( function ( $ ) {
  'use strict';

  var defs = {
    id: 'sma-kbd',
    name: 'Åarjesaemien',
    description: 'Southern Sami keyboard layout',
    date: '2018-08-08',
    URL: 'http://divvun.no/keyboards/layout-sma.html',
    author: 'Jon Harald Søby',
    license: 'GPLv3',
    version: '1.0',
    patterns: [
      [ '¨', 'ï' ],
      [ '^', 'Ï' ],
      [ 'ø', 'ö' ],
      [ 'Ø', 'Ö' ],
      [ 'ä', 'æ' ],
      [ 'Ä', 'Æ' ]
    ]

  };
  $.ime.register( defs );

}( jQuery );
