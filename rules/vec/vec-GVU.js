( function ( $ ) {
        'use strict';
	var vec = {
		id: 'vec-GVU',
		name: 'Vèneto GVU',
		description: 'Venetian input method named Grafìa Vèneta Unitària or GVU',
		date: '2021-04-29',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Vajotwo and Fierodelveneto (Wikipedia users)',
		license: 'GPLv3',
		version: '3.0',
		patterns: [
			['LH,'Ł'],
                        ['Lh,'Ł'],
                        ['lh','ł'],
                        ['èè','é'],
                        ['òò','ó'],
                        ['àh','À'],
                        ['èh','È'],
                        ['ìh','Ì'],
                        ['òh','Ò'],
                        ['ùh','Ù'],
                        ['èhh','É'],
                        ['òhh','Ó']
		]
	};
	$.ime.register( vec );
}( jQuery ) );
