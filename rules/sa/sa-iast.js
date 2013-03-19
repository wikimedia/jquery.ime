( function ( $ ) {
	'use strict';

	var saIast = {
		id: 'sa-iast',
		name: 'Romanized',
		description: 'Romanized input method for Sanskrit with IAST/ISO 15919 convention. Original author William Giddings <wjgiddings@googlemail.com>',
		date: '2013-03-18',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Runa Bhattacharjee',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 3,
		patterns: [
			['aa', 'ā'],
			['AA', 'Ā'],
			['ii', 'ī'],
			['uu', 'ū'],
			['UU', 'Ū'],
			['.r', 'ṛ'],
			['.R', 'Ṛ'],
			['.l', 'ḷ'],
			['^a', 'â'],
			['^A', 'Â'],
			['.rr', 'ṝ'],
			['.RR', 'Ṝ'],
			['.L', 'Ḷ'],
			['.ll', 'ḹ'],
			['ḶL', 'Ḹ'],
			['.M', 'Ṃ'],
			['.m', 'ṃ'],
			['.h', 'ḥ'],
			['.H', 'Ḥ'],
			[';n', 'ṅ'],
			[';N', 'Ṅ'],
			['~n', 'ñ'],
			['~N', 'Ñ'],
			['.t', 'ṭ'],
			['.T', 'Ṭ'],
			['.d', 'ḍ'],
			['.D', 'Ḍ'],
			['.n', 'ṇ'],
			['.N', 'Ṇ'],
			[';s', 'ś'],
			[';S', 'Ś'],
			['.s', 'ṣ'],
			['.S', 'Ṣ'],
			['ee', 'ē'],
			['oo', 'ō'],
			[';m', 'ṁ'],
			[',r', 'r̥'],
			[',rr', 'r̥̄']
		]
	};
	$.ime.register( saIast );

}( jQuery ) );
