( function ( $ ) {
	'use strict';

	var strSencoten = {
		id: 'str-sencoten',
		name: 'SENĆOŦEN Keyboard',
		description: 'Saanich SENĆOŦEN Keyboard',
		date: '2024-11-23',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Anne Drew Hu',
		license: 'MIT',
		version: '1.0',
		maxKeyLength: 4,
		patterns: [
			[ 'S', 's' ],
			[ '([a-z])', function ( $1 ) {
				return $1.toUpperCase();
			} ],
			[ 'A\'', 'Á' ],
			[ 'A/', 'Ⱥ' ],
			[ 'C\'', 'Ć' ],
			[ 'C/', 'Ȼ' ],
			[ 'I\'', 'Í' ],
			[ ',', '¸' ],
			[ '<', ','],
			[ 'K-', '₭' ],
			[ 'K_', 'Ḵ' ],
			[ 'K;', 'Ḵ' ],
			[ 'K\'', 'Ḱ' ],
			[ 'L-', 'Ƚ' ],
			[ 'N_', 'Ṉ' ],
			[ 'N;', 'Ṉ' ],
			[ 'S\'', 'Ś' ],
			[ 'T/', 'Ⱦ' ],
			[ 'T_', 'Ṯ' ],
			[ 'T;', 'Ṯ' ],
			[ 'T-', 'Ŧ' ],
			[ 'W_', 'W̱' ],
			[ 'W;', 'W̱' ],
			[ 'X;', 'X̱' ],
			[ 'X_', 'X̱' ],
		]
	};

	$.ime.register( strSencoten );
}( jQuery ) );