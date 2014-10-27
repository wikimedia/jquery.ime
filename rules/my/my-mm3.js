( function ( $ ) {
	'use strict';

	var myXkb = {
		id: 'my-mm3',
		name: 'မြန်မာ၃ လက်ကွက်',
		description: 'Myanmar3 keyboard layout',
		date: '2014-10-28',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Lionslayer',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['ေu', 'a','ကေ'],
			['ေc', 'a','ခေ'],
			['ေ:', 'a','ဂေ'],
			['ေC', 'a','ဃေ'],
			['ေi', 'a','ငေ'],
			['ေp', 'a','စေ'],
			['ေq', 'a','ဆေ'],
			['ေZ', 'a','ဇေ'],
			['ေQ', 'a','ဈေ'],
			['ေn', 'a','ညေ'],
			['ေN', 'a','ဉေ'],
			['ေ!', 'a','ဍေ'],
			['ေX', 'a','ဌေ'],
			['ေ#', 'a','ဋေ'],
			['ေ~', 'a','ဎေ'],
			['ေP', 'a','ဏေ'],
			['ေw', 'a','တေ'],
			['ေx', 'a','ထေ'],
			['ေK', 'a','ဒေ'],
			['ေL', 'a','ဓေ'],
			['ေe', 'a','နေ'],
			['ေy', 'a','ပေ'],
			['ေz', 'a','ဖေ'],
			['ေA', 'a','ဗေ'],
			['ေb', 'a','ဘေ'],
			['ေr', 'a','မေ'],
			['ေB', 'a','ယေ'],
			['ေ&', 'a','ရေ'],
			['ေv', 'a','လေ'],
			['ေW', 'a','ဝေ'],
			['ေo', 'a','သေ'],
			['ေ\\[', 'a','ဟေ'],
			['ေV', 'a','ဠေ'],
			['ေt', 'a','အေ'],
 
			['ေG', '','ွေ'],
			['ေj', '','ြေ'],
			['ေs', '','ျေ'],
			['ေS', '','ှေ'],
			['ေြG', '','ြွေ'],
			['ေျG', '','ျွေ'],
			['ေြS', '','ြှေ'],
			['ေျS', '','ျှေ'],
 
			['စs', '','ဈ'],
			['သj', '','ဩ'],
			['ဥf', '', 'ဉ်'],
			['ဥD', '','ဦ'],
			['ုd', '','ို'],
			['်h', '', '့်'],
			['ွs', '','ျွ'],
			['ွj', '','ြွ'],
			['ှG', '', 'ွှ'],
			['ှs', '','ျှ'],
			['ှj', '', 'ြှ'],
			['(ှွs)|(ွှs)|(ှျG)|(ျှG)|(ျွS)|(ွျS)', '','ျွှ'],
			['(ှွj)|(ွှj)|(ှြG)|(ြှG)|(ြွS)|(ွြS)', '','ြွှ'],
 
 
			['u', '','က'],
			['c', '','ခ'],
			[':', '','ဂ'],
			['C', '','ဃ'],
			['i', '','င'],
			['p', '','စ'],
			['q', '','ဆ'],
			['Z', '','ဇ'],
			['Q', '','ဈ'],
			['n', '','ည'],
			['N', '','ဉ'],
			['!', '','ဍ'],
			['X', '','ဌ'],
			['#', '','ဋ'],
			['~', '','ဎ'],
			['P', '','ဏ'],
			['w', '','တ'],
			['x', '','ထ'],
			['K', '','ဒ'],
			['L', '','ဓ'],
			['e', '','န'],
			['y', '','ပ'],
			['z', '','ဖ'],
			['A', '','ဗ'],
			['b', '','ဘ'],
			['r', '','မ'],
			['B', '','ယ'],
			['&', '','ရ'],
			['v', '','လ'],
			['W', '','ဝ'],
			['o', '','သ'],
			['\\[', '','ဟ'],
			['V', '','ဠ'],
			['t', '','အ'],
 
			['m', '','ာ'],
			['g', '','ါ'],
			['d', '','ိ'],
			['D', '','ီ'],
			['k', '','ု'],
			['l', '','ူ'],
			['a', '','ေ'],
			['J', '','ဲ'],
			['H', '','ံ'],
			['h', '','့'],
			['\\;', '','း'],
			['f', '','်'],
			['F', '','္'],
			['\\>', '','။'],
			['\\<', '','၊'],
 
			['s', '','ျ'],
			['j', '','ြ'],
			['G', '','ွ'],
			['S', '','ှ'],
			['E', '','ဣ'],
			['R', '','၎'],
			['T', '','ဤ'],
			['Y', '','၌'],
			['I', '','၍'],
			['O', '','ဿ'],
			['\\{', '','ဧ'],
			['\\]', '','ဩ'],
			['\\}', '','ဪ'],
			['\\\\', '','၏'],
			['u', '','က'],
			['U', '','ဥ'],
			['M', '','ဦ'],
 
			['0', '','၀'],
			['1', '','၁'],
			['2', '','၂'],
			['3', '','၃'],
			['4', '','၄'],
			['5', '','၅'],
			['6', '','၆'],
			['7', '','၇'],
			['8', '','၈'],
			['9', '','၉']]
	};

	$.ime.register( myXkb );
}( jQuery ) );
