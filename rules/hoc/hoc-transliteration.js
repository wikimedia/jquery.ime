( function ( $ ) {
	'use strict';

	var hoctransliteration = {
		id: 'hoc-transliteration',
		name: 'Ho Transliteration',
		description: 'Ho transliteration input',
		date: '2016-10-23',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Mangu Purty',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 2,
		maxKeyLength: 3,
		patterns: [
			[ 'a', '𑣁'],
			[ 'b', '𑣗' ],
			[ 'c', '𑣏' ],
			[ 'd', '𑣑' ],
			[ 'e', '𑣈' ],
			[ '𑣒h', 't',  '𑣕' ], //for ot
			[ 'g', '𑣋' ],
			[ 'h', '𑣙' ],
			[ 'i', '𑣂' ], // for wi
			[ '𑣁i', 'a', '𑣆' ], // for ii
			[ 'j', '𑣎' ],
			[ 'k', '𑣌' ],
			[ 'l', '𑣚' ],
			[ 'm', '𑣖' ],
			[ 'n', '𑣓' ],

			[ '\\\\([A-Za-z\\>_~])', '\\\\', '$1' ],

			[ '𑣓n', 'n', '𑣐' ], // for enn
			[ '𑣓j', 'n', '𑣍' ], // for eny
			[ '𑣓g', 'n', '𑣊' ],
			[ 'o', '𑣉' ],
			[ 'p', '𑣘' ],
			[ '𑣑h', 'd', '𑣔' ], // for da
			[ '𑣜r', 'r', '𑣛' ], // for hor
			[ 'q', '𑣄' ],
			[ 'r', '𑣜' ],
			[ 's', '𑣞' ],
			[ 't', '𑣒' ],
			[ 'u', '𑣃' ], // for yu
			[ '𑣁u', 'a', '𑣇' ], // for uu
			[ 'w', '𑣟' ],
			[ 'x', '𑣝' ],
			[ 'y', '𑣅' ],
			[ 'v', '𑣀' ],
			[ 'A', '𑢡' ],
			[ 'B', '𑢷' ],
			[ 'C', '𑢯'],
			[ 'D', '𑢱' ],
			[ 'E', '𑢨' ],
			[ '𑢲(H|h)',  'T', '𑢵' ], // for OT
			[ 'G', '𑢫' ],
			[ 'H', '𑢹' ],
			[ 'I', '𑢢' ], // for WI
			[ '𑢡(I|i)', 'A', '𑢦' ], // for II
			[ 'J', '𑢮' ],
			[ 'K', '𑢬' ],
			[ 'L', '𑢺' ],
			[ 'M', '𑢶' ],
			[ '𑢳(N|n)', 'N', '𑢰' ], // for ENN
			[ '𑢳(J|j)', 'N', '𑢭' ],
			[ '𑢳(G|g)', 'N', '𑢪' ],
			[ 'O', '𑢩' ],
			[ 'P', '𑢸' ],
			[ 'Q', '𑢤' ],
			[ 'R', '𑢼' ],
			[ '𑢼(R|r)', 'R', '𑢻' ], // for HOR
			[ 'S', '𑢾' ],
			[ 'T', '𑢲' ],
			[ 'U', '𑢣' ],
			[ '𑢡(U|u)', 'A', '𑢧' ], // for UU
			[ '𑢱(H|h)', 'D', '𑢴' ], // for DA
			[ 'W', '𑢿' ],
			[ 'X', '𑢽' ],
			[ 'Y', '𑢥' ],
			[ 'V', '𑢠' ],
			[ '0', '𑣠' ],
			[ '1', '𑣡' ],
			[ '2', '𑣢' ],
			[ '3', '𑣣' ],
			[ '4', '𑣤' ],
			[ '5', '𑣥' ],
			[ '6', '𑣦' ],
			[ '7', '𑣧' ],
			[ '8', '𑣨' ],
			[ '9', '𑣩' ],
			[ '\\\\([0-9])', '\\\\', '$1' ],
			[ '\\\\@', '‌𑣿' ] ]

	};

	$.ime.register( hoctransliteration );
}( jQuery ) );
