( function ( $ ) {
	'use strict';

	var tiGeezim = {
		id: 'ti-geezim',
		name: 'Tigrinya GeezIM',
		description: 'Tigrinya input method based on GeezIME scheme',
		date: '2017-01-22',
		URL: 'http://type.geezlab.com',
		author: 'Fitsum Gaim, <fitsum@geezlab.com>',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 2,
		patterns: [
		]
	};

	$.ime.register( tiGeezim );
}( jQuery ) );
