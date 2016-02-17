( function ( $ ) {
  'use strict';

  var todoMongolianAli = {
    id: 'mn-todoali',
    name: 'Mongolian Todo Ali-gali Scripts',
    description: 'Mongolian Todo Ali-gali Scripts',
    date: '2014-4-22',
    URL: 'http://github.com/wikimedia/jquery.ime',
    author: 'Feilong Huang, <huangfeilong@gmail.com>',
    license: 'GPLv3',
    version: '1.0',
    patterns: [
      ['Q', ''],
      ['W', ''],
      ['E', ''],
      ['R', ''],
      ['T', ''],
      ['Y', ''],
      ['U', ''],
      ['I', ''],
      ['O', ''],
      ['P', ''],
      ['{', '〈'],
      ['}', '〉'],
      ['A', ''],
      ['S', ''],
      ['D', '\u18a9'],
      ['F', ''],
      ['G', ''],
      ['H', ''],
      ['J', ''],
      ['K', ''],
      ['L', ''],
      [':', '\u1804'],
      ['"', '\u180c'],
      ['Z', ''],
      ['X', ''],
      ['C', ''],
      ['V', ''],
      ['B', ''],
      ['N', ''],
      ['M', ''],
      ['<', '《'],
      ['>', '》'],
      ['\\?', '?'],
      ['_', '\u180e'],
      ['\\+', '+'],

      ['q', '\u1880'],
      ['w', '\u1881'],
      ['e', '\u1882'],
      ['r', '\u1883'],
      ['t', '\u1884'],
      ['y', '\u1885'],
      ['u', '\u1886'],
      ['i', '\u1887'],
      ['o', '\u1888'],
      ['p', '\u1889'],
      ['\\[', '〔'],
      ['\\]', '〕'],
      ['a', '\u188a'],
      ['s', '\u188b'],
      ['d', '\u188c'],
      ['f', '\u188d'],
      ['g', '\u188e'],
      ['h', '\u188f'],
      ['j', '\u1898'],
      ['k', '\u1891'],
      ['l', '\u1892'],
      [';', '\u1893'],
      ['\'', '\u180b'],
      ['z', '\u1894'],
      ['x', '\u1899'],
      ['c', '\u1896'],
      ['v', '\u1897'],
      ['b', '\u1898'],
      ['n', '\u18a6'],
      ['m', '\u18a7'],
      [',', '\u1802'],
      ['\\.', '\u1803'],
      ['/', '.'],
      ['\\-', '\u202f'],
      ['=', '='],

      ['`', '\u180d'],
      ['~', '~'],
      ['1', '\u1811'],
      ['2', '\u1812'],
      ['3', '\u1813'],
      ['4', '\u1814'],
      ['5', '\u1815'],
      ['6', '\u1816'],
      ['7', '\u1817'],
      ['8', '\u1818'],
      ['9', '\u1819'],
      ['0', '\u1810'],
      ['!', '!'],
      ['@', '\u2048'],
      ['#', '\u2049'],
      ['\\$', '—'],
      ['%', '%'],
      ['^', '\u200c'],
      ['&', '\u180a'],
      ['*', '\u200d'],
      ['\\(', '('],
      ['\\)', ')']
    ]
  };

  $.ime.register( todoMongolianAli );
}( jQuery ) );