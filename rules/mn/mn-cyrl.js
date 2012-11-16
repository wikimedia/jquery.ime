/**
 * This is my work based on Git for the very first time, which is an input method for the Mongolian
 * Cyrillic script. If the program has any errors, please understand that and contact me. I will
 * change the errors in a few days.
 */

( function ( $ ) {
	'use strict';

	var mncyrl = {
		id: 'mn-cyrl',
		name: 'Mongolian Cyrillic',
		description: 'Mongolian Cyrillic Input Method',
		date: '2012-10-25',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Kevin K.S. Leung, <sprconan@gmail.com>',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['Q', 'Ф'],
			['W', 'Ц'],
			['E', 'У'],
			['R', 'Ж'],
			['T', 'Э'],
			['Y', 'Н'],
			['U', 'Г'],
			['I', 'Ш'],
			['O', 'Ү'],
			['P', 'З'],
			['{', 'К'],
			['}', 'Ъ'],
			['A', 'Й'],
			['S', 'Ы'],
			['D', 'Б'],
			['F', 'Ө'],
			['G', 'А'],
			['H', 'Х'],
			['J', 'Р'],
			['K', 'О'],
			['L', 'Л'],
			[':', 'Д'],
			['"', 'П'],
			['Z', 'Я'],
			['X', 'Ч'],
			['C', 'Ё'],
			['V', 'С'],
			['B', 'М'],
			['N', 'И'],
			['M', 'Т'],
			['<', 'Ь'],
			['>', 'В'],
			['\\?', 'Ю'],
			['_', 'Е'],
			['\\+', 'Щ'],

			['q', 'ф'],
			['w', 'ц'],
			['e', 'у'],
			['r', 'ж'],
			['t', 'э'],
			['y', 'н'],
			['u', 'г'],
			['i', 'ш'],
			['o', 'ү'],
			['p', 'з'],
			['\\[', 'к'],
			['\\]', 'ъ'],
			['a', 'й'],
			['s', 'ы'],
			['d', 'б'],
			['f', 'ө'],
			['g', 'а'],
			['h', 'х'],
			['j', 'р'],
			['k', 'о'],
			['l', 'л'],
			[';', 'д'],
			[''', 'п'],
			['z', 'я'],
			['x', 'ч'],
			['c', 'ё'],
			['v', 'с'],
			['b', 'м'],
			['n', 'и'],
			['m', 'т'],
			[',', 'ь'],
			['\\.', 'в'],
			['/', 'ю'],
			['\\-', 'е'],
			['=', 'щ'],

			['`', '='],
			['~', '+'],
			['1', '№'],
			['2', '-'],
			['3', '"'],
			['4', '₮'],
			['5', ':'],
			['6', '.'],
			['7', '_'],
			['8', ','],
			['9', '%'],
			['0', '?'],
			['!', '1'],
			['@', '2'],
			['#', '3'],
			['\\$', '4'],
			['%', '5'],
			['^', '6'],
			['&', '7'],
			['*', '8'],
			['\\(', '9'],
			['\\)', '0']
		]
	};

	$.ime.register( mncyrl );

}( jQuery ) );
