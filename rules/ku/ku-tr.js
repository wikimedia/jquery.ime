( function ( $ ) {
	'use strict';

	var kuTr = {
		id: 'ku-tr',
		name: 'Kurdî-tr',
		description: 'writing Kurdish-letters using the TR keyboard',
		date: '2013-06-26',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/ku-tr',
		author: 'Ghybu',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		patterns: [
			[ 'ḧh', 'h', 'hh' ],
			[ 'Ḧ(H|h)', '(H|h)', 'H$1' ],

			[ 'ğ', 'ẍ' ],
			[ 'ı', 'i' ],
			[ 'i', 'î' ],
			[ 'ö', 'ê' ],
			[ 'ü', 'û' ],
			[ 'hh', 'ḧ' ],
			[ 'Ğ', 'Ẍ' ],
			[ 'İ', 'Î' ],
			[ 'Ö', 'Ê' ],
			[ 'Ü', 'Û' ],
			[ 'H(H|h)', 'Ḧ' ] ]
	};

	$.ime.register( kuTr );
}( jQuery ) );
