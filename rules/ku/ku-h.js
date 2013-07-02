( function ( $ ) {
	'use strict';

	var kuH = {
		id: 'ku-h',
		name: 'Kurdish h',
		description: 'writing Kurdish-letters adding h\'s',
		date: '2013-06-26',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Ghybu',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['çh', 'ch'],
			['şh', 'sh'],
			['ḧh', 'hh'],
			['ẍh', 'xh'],
			['êe', 'ee'],
			['îi', 'ii'],
			['ûu', 'uu'],
			['Çh', 'Ch'],
			['Şh', 'Sh'],
			['Ḧh', 'Hh'],
			['Ẍh', 'Xh'],
			['Êe', 'Ee'],
			['Îi', 'Ii'],
			['Ûu', 'Uu'],
			['ÇH', 'CH'],
			['ŞH', 'SH'],
			['ḦH', 'HH'],
			['ẌH', 'XH'],
			['ÊE', 'EE'],
			['ÎI', 'II'],
			['ÛU', 'UU'],
			
			['ch', 'ç'],
			['sh', 'ş'],
			['hh', 'ḧ'],
			['xh', 'ẍ'],
			['ee', 'ê'],
			['ii', 'î'],
			['uu', 'û'],
			['Ch', 'Ç'],
			['Sh', 'Ş'],
			['Hh', 'Ḧ'],
			['Xh', 'Ẍ'],
			['Ee', 'Ê'],
			['Ii', 'Î'],
			['Uu', 'Û'],
			['CH', 'Ç'],
			['SH', 'Ş'],
			['HH', 'Ḧ'],
			['XH', 'Ẍ'],
			['EE', 'Ê'],
			['II', 'Î'],
			['UU', 'Û']
	};

	$.ime.register( kuH );

}( jQuery ) );
