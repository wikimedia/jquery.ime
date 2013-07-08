( function ( $ ) {
	'use strict';

	var kuTr = {
		id: 'ku-tr',
		name: 'Ku tr',
		description: 'writing Kurdish-letters using the TR keyboard',
		date: '2013-06-26',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Ghybu',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['ḧh', 'h', 'hh'],
			['Ḧ(H|h)', 'h', 'H$1'],
			['Ḧ(H|h)', 'H', 'H$1'],

			['ğ', 'ẍ'],
			['ı', 'i'],
			['i', 'î'],
			['ö', 'ê'],
			['ü', 'û'],
			['hh', 'ḧ'],
			['Ğ', 'Ẍ'],
			['İ', 'Î'],
			['Ö', 'Ê'],
			['Ü', 'Û'],
			['H(H|h)', 'Ḧ']]
	};

	$.ime.register( kuTr );

}( jQuery ) );
