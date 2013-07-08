( function ( $ ) {
	'use strict';

	var kuH = {
		id: 'ku-h',
		name: 'Ku h',
		description: 'writing Kurdish-letters adding h\'s',
		date: '2013-06-26',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Ghybu',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['çh', 'h', 'ch'],
			['şh', 'h', 'sh'],
			['ḧh', 'h', 'hh'],
			['ẍh', 'h', 'xh'],
			['êe', 'e', 'ee'],
			['îi', 'i', 'ii'],
			['ûu', 'u', 'uu'],
						
			['Ç(H|h)', 'h', 'C$1'],
			['Ş(H|h)', 'h', 'S$1'],
			['Ḧ(H|h)', 'h', 'H$1'],
			['Ẍ(H|h)', 'h', 'X$1'],
			['Ê(E|e)', 'e', 'E$1'],
			['Î(I|i)', 'i', 'I$1'],
			['Û(U|u)', 'u', 'U$1'],
			
			['Ç(H|h)', 'H', 'C$1'],
			['Ş(H|h)', 'H', 'S$1'],
			['Ḧ(H|h)', 'H', 'H$1'],
			['Ẍ(H|h)', 'H', 'X$1'],
			['Ê(E|e)', 'E', 'E$1'],
			['Î(I|i)', 'I', 'I$1'],
			['Û(U|u)', 'U', 'U$1'],
			
			['ch', 'ç'],
			['sh', 'ş'],
			['hh', 'ḧ'],
			['xh', 'ẍ'],
			['ee', 'ê'],
			['ii', 'î'],
			['uu', 'û'],
			['C(H|h)', 'Ç'],
			['S(H|h)', 'Ş'],
			['H(H|h)', 'Ḧ'],
			['X(H|h)', 'Ẍ'],
			['E(E|e)', 'Ê'],
			['I(I|i)', 'Î'],
			['U(U|u)', 'Û']]
	};

	$.ime.register( kuH );

}( jQuery ) );