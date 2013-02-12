( function ( $ ) {
	'use strict';

	var heKbd = {
		id: 'he-kbd',
		name: 'Hebrew kbd',
		description: 'Hebrew kbd keyboard layout',
		date: '2013-02-11',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['\\`', ';'],
			['q', '/'],
			['w', '\''],
			['e', 'ק'],
			['r', 'ר'],
			['t', 'א'],
			['y', 'ט'],
			['u', 'ו'],
			['i', 'ן'],
			['o', 'ם'],
			['p', 'פ'],
			['a', 'ש'],
			['s', 'ד'],
			['d', 'ג'],
			['f', 'כ'],
			['g', 'ע'],
			['h', 'י'],
			['j', 'ח'],
			['k', 'ל'],
			['l', 'ך'],
			[';', 'ף'],
			['z', 'ז'],
			['x', 'ס'],
			['c', 'ב'],
			['v', 'ה'],
			['b', 'נ'],
			['n', 'מ'],
			['m', 'צ'],
			[',', 'ת'],
			['.', 'ץ'],
			['/', '.'],
			['\'', ','],
			['\\(', ')'],
			['\\)', '('],
			['\\<', '>'],
			['\\>', '<'],
			['\\[', ']'],
			['\\]', '['],
			['\\{', '}'],
			['\\}', '{']]

	};
	$.ime.register( heKbd );

}( jQuery ) );
