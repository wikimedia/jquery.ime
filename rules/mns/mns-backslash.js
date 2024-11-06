( function ( $ ) {
	'use strict';

	var mnsBackslash = {
		id: 'mns-backslash',
		name: 'mns-backslash',
		description: 'Mansi backslash keyboard',
		date: '2024-11-05',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '\\\\А', 'А̄' ],
			[ '\\\\а', 'а̄' ],
			[ '\\\\Е', 'Е̄' ],
			[ '\\\\е', 'е̄' ],
			[ '\\\\Ё', 'Ё̄' ],
			[ '\\\\ё', 'ё̄' ],
			[ '\\\\И', 'Ӣ' ],
			[ '\\\\и', 'ӣ' ],
			[ '\\\\Н', 'Ӈ' ],
			[ '\\\\н', 'ӈ' ],
			[ '\\\\О', 'О̄' ],
			[ '\\\\о', 'о̄' ],
			[ '\\\\У', 'Ӯ' ],
			[ '\\\\у', 'ӯ' ],
			[ '\\\\Ы', 'Ы̄' ],
			[ '\\\\ы', 'ы̄' ],
			[ '\\\\Э', 'Э̄' ],
			[ '\\\\э', 'э̄' ],
			[ '\\\\Ю', 'Ю̄' ],
			[ '\\\\ю', 'ю̄' ],
			[ '\\\\Я', 'Я̄' ],
			[ '\\\\я', 'я̄' ]
		]
	};

	$.ime.register( mnsBackslash );
}( jQuery ) );
