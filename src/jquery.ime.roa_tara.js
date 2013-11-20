( function ( $ ) {
'use strict';

var roa-tara = {
id: 'roa-tara-GVU',
name: 'Tarandine',
description: 'Tarandine input method.',
date: '2013-09-01',
URL: 'http://github.com/wikimedia/jquery.ime',
author: 'roa-tara.wiki community',
license: 'GPLv3',
version: '1.0',
patterns: [
	['a§', 'á'],
	['o§', 'ó'],
	['A§', 'Á'],
	['O§', 'Ó']
]
};

$.ime.register( roa-tara );
}( jQuery ) );
