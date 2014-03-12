( function ( $ ) {
  'use strict';

	var asPhonetic = {
		id: 'as-rodali',
		name: 'rodali',
		description: 'Rodali phonetic keyboard layout for Assamese script',
		date: '2013-02-09',
		URL: 'http://www.sltdassam.com/rodalionline.html',
		author: 'Gunadeep Chetia, Subhashish Panigrahi',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['\\!', '!'],
			['1', '১'],
			['\\@', '@'],
			['2', '২'],
			['\\#', '#'],
			['3', '৩'],
			['\\$', '$'],
			['4', '৪'],
			['\\%', '%'],
			['5', '৫'],
			['\\^', 'ঁ'],
			['6', '৬'],
			['\\&', '°'],
			['7', '৭'],
			['\\*', '৺'],
			['8', '৮'],
			['\\(', '('],
			['9', '৯'],
			['\\)', ')'],
			['0', '০'],
			['\\_', '_'],
			['\\-', '-'],
			['\\+', '+'],
			['\\=', '='],
			['W', 'ৱ'],
			['w', 'ৱ'],
			['E', 'এ'],
			['e', 'এ'],
			['R', 'ড়'],
			['r', 'ৰ'],
			['T', 'ট'],
			['t', 'ত'],
			['y', 'য়'],
			['U', 'উ'],
			['u', 'উ'],
			['I', 'ই'],
			['i', 'ই'],
			['O', 'ও'],
			['o', 'ও'],
			['P', 'প'], 
			['p', 'প'],
			['\\{', '{'],
			['\\[', '['],
			['\\}', '}'],
			['\\]', ']'],
			['A', 'অ'],
			['a', 'অ'],
			['S', 'ষ'],
			['s', 'স'],
			['D', 'ড'],
			['d', 'দ'],
			['F', 'ফ'],
			['f', 'ফ'],
			['G', 'জ্ঞ'],
			['g', 'গ'],
			['H', 'ঃ'],
			['h', 'হ'],
			['J', 'জ'],
			['j', 'জ'],
			['K', 'ক'],
			['k', 'ক'],
			['L', 'ল'],
			['l', 'ল'],
			[':', ':'],
			[';', ';'],
			['"', '"'],
			['\'', '\''],
			['\\|', '|'],
			['\\\\', '\'],
			['\\~', '\u200c'],
			['\\`', '্‌'],
			['Z', 'য'],
			['z', 'য'],
			['X', 'ক্ষ'],
			['x', 'শ'],
			['C', 'চ'],
			['c', 'চ'],
			['V', 'ৱ'],
			['v', 'ৱ'],
			['B', 'ব'],
			['b', 'ব'],
			['N', 'ণ'],
			['n', 'ন'],
			['M', 'ম'],
			['m', 'ম'],
                                  ['অa', 'আ'], 
                                  ['ইi', 'ঈ'], 
			['এe', 'ঈ'],
                                  ['উu', 'ঊ'], 
			['ওi', 'ঐ'], 
			['ওu', 'ঔ'], 
			['ত~', 'ৎ'], 

			['কh','খ'],
			['গh','ঘ'],
			['ণg','ঙ'],
			['চh','ছ'],
			['জh','ঝ'],
			['নG','ঞ'],
			['টh','ঠ'],
			['ডh','ঢ'],
			['তh','থ'],
			['দh','ধ'],
			['পh','ফ'],
			['বh','ভ'],
			['সh','শ'], 
			['ড়h','ঢ়'],

			['নg','ং'],
			['ৰৰi','ঋ'],

			['(([ক-হড়ঢ়ৰ]))y','্য'],
			
			['(([ক-হড়ঢ়ৰ])|য়)a','$1'],
			['([ক-হড়ঢ়য়ৰ])a','$1া'],
			['([ক-হড়ঢ়য়ৰ])i','$1ি'],
			['([ক-হড়ঢ়য়ৰ])িi','$1ী'],
			['([ক-হড়ঢ়য়ৰ])েe','$1ী'],
			['([ক-হড়ঢ়য়ৰ])u','$1ু'],
			['([ক-হড়ঢ়য়ৰ])ুu','$1ূ'],
			['([ক-হড়ঢ়য়ৰ])o','$1ো'],
			['([ক-হড়ঢ়য়ৰ])e','$1ে'],
			['([ক-হড়ঢ়য়ৰ])োi','$1ৈ'],
			['([ক-হড়ঢ়য়ৰ])োu','$1ৌ'],
			['([ক-হড়ঢ়য়ৰ])ৰৰi','$1ৃ'],


			['\\<', 'ৃ'],
			[',', ','],
			['\\>', '>'],
			['\\.', '।'],
			['\\?', '?'],
			['/', '/']
		]
	};

	$.ime.register( asRodali );
}( jQuery ) );
