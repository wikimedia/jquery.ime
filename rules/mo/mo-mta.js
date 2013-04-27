/**
 * This is my work based on Git, which is an input method for the Traditional
 * Mongolian script. If the program has any errors, please understand that and
 * contact me. I will change the errors in a few days.
 */

( function ( $ ) {
	'use strict';

	var mongolian = {
		id: 'mo-mta',
		name: 'Mongolian Todo Ali-gali Scripts',
		description: 'Mongolian Todo Ali-gali Scripts',
		date: '2013-4-28',
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
			['D', 'ᢩ'],
			['F', ''],
			['G', ''],
			['H', ''],
			['J', ''],
			['K', ''],
			['L', ''],
			[':', '᠄'],
			['"', '᠌'],
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
			['_', '᠎'],
			['\\+', '+'],

			['q', 'ᢀ'],
			['w', 'ᢁ'],
			['e', 'ᢂ'],
			['r', 'ᢃ'],
			['t', 'ᢄ'],
			['y', 'ᢅ'],
			['u', 'ᢆ'],
			['i', 'ᢇ'],
			['o', 'ᢈ'],
			['p', 'ᢉ'],
			['\\[', '〔'],
			['\\]', '〕'],
			['a', 'ᢊ'],
			['s', 'ᢋ'],
			['d', 'ᢌ'],
			['f', 'ᢍ'],
			['g', 'ᢎ'],
			['h', 'ᢏ'],
			['j', 'ᢘ'],
			['k', 'ᢑ'],
			['l', 'ᢒ'],
			[';', 'ᢓ'],
			['\'', '᠋'],
			['z', 'ᢔ'],
			['x', 'ᢙ'],
			['c', 'ᢖ'],
			['v', 'ᢗ'],
			['b', 'ᢘ'],
			['n', 'ᢦ'],
			['m', 'ᢧ'],
			[',', '᠂'],
			['\\.', '᠃'],
			['/', '.'],
			['\\-', ' '],
			['=', '='],

			['`', '᠍'],
			['~', '~'],
			['1', '᠑'],
			['2', '᠒'],
			['3', '᠓'],
			['4', '᠔'],
			['5', '᠕'],
			['6', '᠖'],
			['7', '᠗'],
			['8', '᠘'],
			['9', '᠙'],
			['0', '᠐'],
			['!', '!'],
			['@', '⁈'],
			['#', '⁉'],
			['\\$', '—'],
			['%', '%'],
			['^', '‌'],
			['&', '᠊'],
			['*', '‍'],
			['\\(', '('],
			['\\)', ')']
		]
	};

	$.ime.register( mongolian );

}( jQuery ) );
