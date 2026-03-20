( function ( $ ) {
	'use strict';

	var pwoTilde = {
		id: 'pwo-tilde',
		name: 'Western Pwo tilde',
		description: 'Western Pwo input keyboard',
		date: '2026-03-18',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Toluwanimi Ayodele',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '~k', 'က' ],
			[ '~K', 'ခ' ],
			[ '~y', 'ဂ' ],
			[ '~x', 'ဎ' ],
			[ '~N', 'င' ],
			[ '~s', 'စ' ],
			[ '~S', 'ဆ' ],
			[ '~z', 'ဇ' ],
			[ '~Y', 'ည' ],
			[ '~H', 'ၡ' ],
			[ '~e', 'တ' ],
			[ '~t', 'ထ' ],
			[ '~T', 'ဒ' ],
			[ '~d', 'န' ],
			[ '~n', 'ပ' ],
			[ '~p', 'ဖ' ],
			[ '~P', 'ဘ' ],
			[ '~F', 'မ' ],
			[ '~b', 'ယ' ],
			[ '~m', 'ရ' ],
			[ '~j', 'လ' ],
			[ '~r', 'ဝ' ],
			[ '~R', 'ၥ' ],
			[ '~l', 'ဟ' ],
			[ '~w', 'အ' ],
			[ '~h', 'ဧ' ],
			[ '~q', 'ၦ' ],
		]
	};

	$.ime.register( pwoTilde );
}( jQuery ) );