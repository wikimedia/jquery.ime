( function ( $ ) {
	'use strict';

	var stacking, first, boSAMBHOTA;
	stacking = false;
	first = true;

	function normalOrSub(normal, sub) {
		if ((stacking && first) || !stacking) {
			first = false;
			return normal;
		} else {
			return sub;
		}
	}

	function reinit() {
		first = false;
		stacking = false;
	}

	function switchStacking() {
		first = true;
		stacking = !stacking;
	}

	boSAMBHOTA = {
		id: 'bo-sambhota',
		name: 'Tibetan Sambhota',
		description: 'Tibetan Sambhota Input Method.',
		date: '2015-08-04',
		URL: 'https://github.com/tibetan-nlp/ttt/blob/master/source/Sambhota_keymap_one.rtf',
		author: 'Elie Roux <elie.roux@telecom-bretagne.eu>',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 5,
		patterns: [
			// consonants
			['f', function() {switchStacking(); return '';}],
			['a', function() {reinit(); return '';}],
			['k', function() {return normalOrSub('ཀ', 'ྐ');}],
			['K', function() {return normalOrSub('ཁ', 'ྑ');}],
			['g', function() {return normalOrSub('ག', 'ྒ');}],
			['G', function() {return normalOrSub('ང', 'ྔ');}],
			['c', function() {return normalOrSub('ཅ', 'ྕ');}],
			['C', function() {return normalOrSub('ཆ', 'ྖ');}],
			['j', function() {return normalOrSub('ཇ', 'ྗ');}],
			['N', function() {return normalOrSub('ཉ', 'ྙ');}],
			['q', function() {return normalOrSub('ཊ', 'ྚ');}],
			['Q', function() {return normalOrSub('ཋ', 'ྛ');}],
			['v', function() {return normalOrSub('ཌ', 'ྜ');}],
			['V', function() {return normalOrSub('ཎ', 'ྞ');}],
			['t', function() {return normalOrSub('ཏ', 'ྟ');}],
			['T', function() {return normalOrSub('ཐ', 'ྠ');}],
			['d', function() {return normalOrSub('ད', 'ྡ');}],
			['n', function() {return normalOrSub('ན', 'ྣ');}],
			['p', function() {return normalOrSub('པ', 'ྤ');}],
			['P', function() {return normalOrSub('ཕ', 'ྥ');}],
			['b', function() {return normalOrSub('བ', 'ྦ');}],
			['m', function() {return normalOrSub('མ', 'ྨ');}],
			['x', function() {return normalOrSub('ཙ', 'ྩ');}],
			['X', function() {return normalOrSub('ཚ', 'ྪ');}],
			['D', function() {return normalOrSub('ཛ', 'ྫ');}],
			['w', function() {return normalOrSub('ཝ', 'ྭ');}],
			['Z', function() {return normalOrSub('ཞ', 'ྮ');}],
			['z', function() {return normalOrSub('ཟ', 'ྯ');}],
			['\'', function() {return normalOrSub('འ', 'ཱ');}],
			['y', function() {return normalOrSub('ཡ', 'ྱ');}],
			['r', function() {return normalOrSub('ར', 'ྲ');}],
			['l', function() {return normalOrSub('ལ', 'ླ');}],
			['S', function() {return normalOrSub('ཤ', 'ྴ');}],
			['ཀB', function() {return normalOrSub('ཀཥ', 'ཀྵ');}],
			['ྐB', function() {return normalOrSub('ྐཥ', 'ྐྵ');}],
			['B', function() {return normalOrSub('ཥ', 'ྵ');}],
			['s', function() {return normalOrSub('ས', 'ྶ');}],
			['གh', function() {return normalOrSub('གཧ', 'གྷ');}],
			['ཌh', function() {return normalOrSub('ཌཧ', 'ཌྷ');}],
			['དh', function() {return normalOrSub('དཧ', 'དྷ');}],
			['བh', function() {return normalOrSub('བཧ', 'བྷ');}],
			['ཛh', function() {return normalOrSub('ཛཧ', 'ཛྷ');}],
			['ྒh', function() {return normalOrSub('ྒཧ', 'ྒྷ');}],
			['ྜh', function() {return normalOrSub('ྜཧ', 'ྜྷ');}],
			['ྡh', function() {return normalOrSub('ྡཧ', 'ྡྷ');}],
			['ྦh', function() {return normalOrSub('ྦཧ', 'ྦྷ');}],
			['ྫh', function() {return normalOrSub('ྫཧ', 'ྫྷ');}],
			['h', function() {return normalOrSub('ཧ', 'ྷ');}],
			['A', function() {return normalOrSub('ཨ', 'ཨ');}],
			['R', function() {return normalOrSub('ཪ', 'ྼ');}],
			['Y', 'ྻ'],
			['ྲI', function() {reinit(); return 'ྲྀ';}],
			['ླI', function() {reinit(); return 'ླྀ';}],
			['i', function() {reinit(); return 'ི';}],
			['u', function() {reinit(); return 'ུ';}],
			['e', function() {reinit(); return 'ེ';}],
			['o', function() {reinit(); return 'ོ';}],
			['I', function() {reinit(); return 'ྀ';}],
			['E', function() {reinit(); return 'ཻ';}],
			['O', function() {reinit(); return 'ཽ';}],
			['J', function() {reinit(); return 'ིཾ';}],
			['U', function() {reinit(); return 'ྀཾ';}],
			['F', function() {reinit(); return 'ེཾ';}],
			['L', function() {reinit(); return 'ོཾ';}],
			['`', function() {reinit(); return 'ཽཾ';}],
			['~', function() {reinit(); return 'ཻཾ';}],
			['\\!', function() {reinit(); return '༄༅༅';}],
			['\\#', function() {reinit(); return '༁ྃ';}],
			['\\%', function() {reinit(); return 'ྃ';}],
			['\\&', function() {reinit(); return 'ཾ';}],
			['\\<', function() {reinit(); return 'ༀ';}],
			['\\=', function() {reinit(); return 'ཨཱཿ';}],
			['\\>', function() {reinit(); return 'ཧཱུྃ';}],
			[';', function() {reinit(); return '༔';}],
			['\\:', function() {reinit(); return 'ཿ';}],
			['"', function() {reinit(); return '༄༅';}],
			['\\/', function() {reinit(); return '༴';}],
			['\\?', function() {reinit(); return '༈';}],
			['\\|', function() {reinit(); return '྅';}],
			[' ', function() {reinit(); return '་';}],
			[',', function() {reinit(); return '།';}],
			['-', function() {reinit(); return '༑';}],
			['\\(', function() {reinit(); return '༼';}],
			['\\)', function() {reinit(); return '༽';}],
			// numbers
			['0', function() {reinit(); return '༠';}],
			['1', function() {reinit(); return '༡';}],
			['2', function() {reinit(); return '༢';}],
			['3', function() {reinit(); return '༣';}],
			['4', function() {reinit(); return '༤';}],
			['5', function() {reinit(); return '༥';}],
			['6', function() {reinit(); return '༦';}],
			['7', function() {reinit(); return '༧';}],
			['8', function() {reinit(); return '༨';}],
			['9', function() {reinit(); return '༩';}]
		]
	};

	$.ime.register( boSAMBHOTA );
}( jQuery ) );
