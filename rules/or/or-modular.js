( function ( $ ) {
	'use strict';

	var orModular = {
		id: 'or-modular',
		name: 'ମୋଡୁଲାର',
		description: 'Odia Modular input method',
		date: '2012-10-14',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Manoj Sahukar and Subhashish Panigrahi',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 4,
		maxKeyLength: 2,
		patterns: [
			['\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1'],
			['\'([\'])','\"'], //'' to "
			['\"([\'])','\'\'\''], //''' 
			
			['([କ-ହ])"', '$1ଁ' ],
			['([ର])}', 'ର‍୍ୟ'],
			['([କ-ଯଲ-ହ])}', '$1୍ୟ' ],
			['([କ-ହ]){', '$1ୃ' ],
			['([ନସ])]', '$1୍ତ୍ର' ],
			//['([କ-ହ])', '$1୍ର'],
			//['([କ-ହ])', '$1୍ୱ'],
			//['', 'କ୍ଷ'],
			//['', 'ଋ'],
			//['', '୰'],
			//['', 'ଽ'],
			//['','ୟ']
			//['','ୱ']
			//['','ୟ']
			//['','ଞ']
		
			['0', '୦'],
			['1', '୧'],
			['2', '୨'],
			['3', '୩'],
			['4', '୪'],
			['5', '୫'],
			['6', '୬'],
			['7', '୭'],
			['8', '୮'],
			['9', '୯'],
			['a', 'ଢ଼'],
			['A', 'ମ'],
			['b', 'ୁ'],
			['B', 'ଉ'],
			['c', 'ଜ'],
			['C', 'ଝ'],
			['d', '୍'],
			['D', '୍‍'],
			['e', 'ଡ଼'],
			['E', 'ନ'],
			['f', 'ତ'],
			['F', 'ଥ'],
			['g', 'ଇ'],
			['G', 'ି'],
			['h', 'ଈ'],
			['H', 'ୀ'],
			['i', 'ଂ'],
			['I', 'ଠ'],
			['j', 'ର'],
			['J', 'ଣ'],
			['k', 'ା'],
			['K', 'ଶ'],
			['l', 'େ'],
			['L', 'ଷ'],
			['m', 'ଳ'],
			['M', 'ଲ'],
			['n', 'ୂ'],
			['N', 'ଊ'],
			['o', 'ହ'],
			['O', 'ଡ'],
			['p', 'ଢ'],
			['P', 'ୈ'],
			['q', 'ବ'],
			['([କ-ହ])Q', 'ର୍\$1'], //reph
			['r', 'ଦ'],
			['R', 'ଧ'],
			['s', 'କ'],
			['S', 'ଖ'],
			['t', 'ସ'],
			['T', 'ଓ'],
			['u', 'ଯ'],
			['U', 'ଟ'],
			['v', 'ଚ'],
			['V', 'ଛ'],
			['w', 'ପ'],
			['W', 'ଫ'],
			['x', 'ଗ'],
			['X', 'ଘ'],
			['y', 'ୌ'],
			['Y', 'ଔ'],
			['z', 'ଭ'],
			['Z', 'ଙ'],
			['`', '।'],
			['~', 'ଃ'],
		
		]
	};

	$.ime.register( orModular );
}( jQuery ) );
