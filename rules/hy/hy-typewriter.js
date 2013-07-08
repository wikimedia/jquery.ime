﻿( function ( $ ) {
	'use strict';

	var hyTypewriter = {
		id: 'hy-typewriter',
		name: 'Գրամեքենայի',
		description: 'Armenian typewriter keyboard layout',
		date: '2013-07-08',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Aleksey Chalabyan Ալեքսեյ Չալաբյան a.k.a Xelgen',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['1', 'ֆ'],
			['\\!', 'Ֆ'],
			['2', 'ձ'],
			['\\@', 'Ձ'],
			['3', '-'],
			['\\#', ''],
			['4', ','],
			['\\$', '֏'],
			['5', '։'],
			['\\%', '֊'],
			['6', '՞'],
			['\\^', '—'],
			['7', '․'],
			['\\&', 'և'],
			['8', '՛'],
			['\\*', '՚'],
			['9', '\)'],
			['\\(', '\('],
			['0', 'օ'],
			['\\)', 'Օ'],
			['\\-', 'է'],
			['\\_', 'Է'],
			['\\=', 'ղ'],
			['\\+', 'Ղ'],
			['\\`', '՝'],
			['\\~', '՜'],
			['q', 'ճ'],
			['Q', 'Ճ'],
			['w', 'փ'],
			['W', 'Փ'],
			['e', 'բ'],
			['E', 'Բ'],
			['r', 'ս'],
			['R', 'Ս'],
			['t', 'մ'],
			['T', 'Մ'],
			['y', 'ո'],
			['Y', 'Ո'],
			['u', 'ւ'],
			['U', 'Ւ'],
			['i', 'կ'],
			['I', 'Կ'],
			['o', 'ը'],
			['O', 'Ը'],
			['p', 'թ'],
			['P', 'Թ'],
			['\\[', 'ծ'],
			['\\{', 'Ծ'],
			['\\]', 'ց'],
			['\\}', 'Ց'],
			['\\\\', '»'],
			['\\|', '«'],
			['a', 'ջ'],
			['A', 'Ջ'],
			['s', 'վ'],
			['S', 'Վ'],
			['d', 'գ'],
			['D', 'Գ'],
			['f', 'ե'],
			['F', 'Ե'],
			['g', 'ա'],
			['G', 'Ա'],
			['h', 'ն'],
			['H', 'Ն'],
			['j', 'ի'],
			['J', 'Ի'],
			['k', 'տ'],
			['K', 'Տ'],
			['l', 'հ'],
			['L', 'Հ'],
			[';', 'պ'],
			[':', 'Պ'],
			['\'', 'ր'],
			['\"', 'Ր'],
			['z', 'ժ'],
			['Z', 'Ժ'],
			['x', 'դ'],
			['X', 'Դ'],
			['c', 'չ'],
			['C', 'Չ'],
			['v', 'յ'],
			['V', 'Յ'],
			['b', 'զ'],
			['B', 'Զ'],
			['n', 'լ'],
			['N', 'Լ'],
			['m', 'ք'],
			['M', 'Ք'],
			[',', 'խ'],
			['\\<', 'Խ'],
			['\\.', 'շ'],
			['\\>', 'Շ'],
			['/', 'ռ'],
			['\\?', 'Ռ']
		],
		patterns_x: [
			['1', '1'],
			['\\!', '\!'],
			['2', '2'],
			['\\@', '\@'],
			['3', '3'],
			['\\#', '\#'],
			['4', '4'],
			['\\$', '\$'],
			['5', '5'],
			['\\%', '\%'],
			['6', '6'],
			['\\^', '\^'],
			['7', '7'],
			['\\&', '\&'],
			['8', '8'],
			['\\*', '\*'],
			['9', '9'],
			['\\(', '\('],
			['0', '0'],
			['\\)', '\)'],
			['\\-', '\-'],
			['\\_', '\_'],
			['\\=', '\='],
			['\\+', '\+'],
			['\\`', '\`'],
			['\\~', '\~'],			
			['\\[', '\['],
			['\\{', '\{'],
			['\\]', '\]'],
			['\\}', '\}'],
			['\\\\', '\\'],
			['\\|', '\|'],			
			[';', ';'],
			[':', ':'],
			['\'', '\''],
			['\"', '\"'],			
			['\\<', '\<'],
			['\\.', '\.'],
			['\\>', '\>'],
			['/', '/'],
			['\\?', '\?']
		]
	};

	$.ime.register( hyTypewriter );

}( jQuery ) );
