( function ( $ ) {
	'use strict';

	var kuTr = {
		id: 'ku-tr',
		name: 'Kurdish tr',
		description: 'writing Kurdish-letters using the TR keyboard',
		date: '2013-06-26',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Ghybu',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['ẍẍ', 'ğ'],
			['ii', 'ı'],
			['îî', 'i'],
			['êê', 'ö'],
			['ûû', 'ü'],
			['ḧh', 'hh'],
			['Ẍẍ', 'Ğ'],
			['Îî', 'İ'],
			['Êê', 'Ö'],
			['Ûû', 'Ü'],
			['Ḧh', 'Hh'],
			['ẌẌ', 'Ğ'],
			['ÎÎ', 'İ'],
			['ÊÊ', 'Ö'],
			['ÛÛ', 'Ü'],
			['ḦH', 'HH'],

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
			['Hh', 'Ḧ'],
			['HH', 'Ḧ']
	};

	$.ime.register( kuTr );

}( jQuery ) );
