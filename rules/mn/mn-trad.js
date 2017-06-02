( function ( $ ) {
  'use strict';

  var tradMongolian = {
    id: 'mn-trad',
    name: 'Traditional Mongolian Scripts',
    description: 'Traditional Mongolian Scripts',
    date: '2014-4-22',
    URL: 'http://github.com/wikimedia/jquery.ime',
    author: 'Feilong Huang, <huangfeilong@gmail.com>',
    license: 'GPLv3',
    version: '1.0',
    patterns: [
      ['Q', '\u1805'],
      ['W', '\u1838'],
      ['E', '\u1827'],
      ['R', '\u183f'],
      ['T', ''],
      ['Y', ''],
      ['U', ''],
      ['I', ''],
      ['O', ''],
      ['P', ''],
      ['{', '〈'],
      ['}', '〉'],
      ['A', '\u1800'],
      ['S', ''],
      ['D', ''],
      ['F', ''],
      ['G', ''],
      ['H', '\u183e'],
      ['J', ''],
      ['K', '\u183b'],
      ['L', '\u1840'],
      [':', '\u1804'],
      ['"', '\u180c'],
      ['Z', '\u1841'],
      ['X', ''],
      ['C', '\u1842'],
      ['V', ''],
      ['B', ''],
      ['N', '\u1829'],
      ['M', ''],
      ['<', '《'],
      ['>', '》'],
      ['\\?', '?'],
      ['_', '\u180e'],
      ['\\+', '+'],
      ['\\\\', '\u1801'],
      ['q', '\u1834'],
      ['w', '\u1823'],
      ['e', '\u1821'],
      ['r', '\u1837'],
      ['t', '\u1832'],
      ['y', '\u1836'],
      ['u', '\u1826'],
      ['i', '\u1822'],
      ['o', '\u1825'],
      ['p', '\u182b'],
      ['\\[', '〔'],
      ['\\]', '〕'],
      ['a', '\u1820'],
      ['s', '\u1830'],
      ['d', '\u1833'],
      ['f', '\u1839'],
      ['g', '\u182d'],
      ['h', '\u182c'],
      ['j', '\u1835'],
      ['k', '\u183a'],
      ['l', '\u182f'],
      [';', ';'],
      ['\'', '\u180b'],
      ['z', '\u183d'],
      ['x', '\u1831'],
      ['c', '\u183c'],
      ['v', '\u1824'],
      ['b', '\u182a'],
      ['n', '\u1828'],
      ['m', '\u182e'],
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
      ['\\^', '\u200c'],
      ['&', '\u180a'],
      ['\\*', '\u200d'],
      ['\\(', '('],
      ['\\)', ')']
    ]
  };

  $.ime.register( tradMongolian );
}( jQuery ) );
