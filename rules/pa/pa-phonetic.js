( function ( $ ) {
	'use strict';

	var paPhonetic = {
		id: 'pa-phonetic',
		name: 'Punjabi Phonetic',
		description: 'Punjabi Phonetic',
		date: '2022-08-08',
		URL: 'http://fedoraproject.org/wiki/I18N/Indic/PunjabiKeyboardLayouts',
		author: '',
		license: '',
		version: '2.0',
		patterns: [
			[ '!', '੧' ],
			[ '1', '1' ],
			[ '@', '੨' ],
			[ '2', '2' ],
			[ '#', '੩' ],
			[ '3', '3' ],
			[ '\\$', '੪' ],
			[ '4', '4' ],
			[ '5', '5' ],
			[ '6', '6' ],
			[ '7', '7' ],
			[ '8', '8' ],
			[ '\\(', '੯' ],
			[ '9', '9' ],
			[ '\\)', '੦' ],
			[ '0', '0' ],
			[ 'Q', 'ਥ' ],
			[ 'q', 'ਤ' ],
			[ 'w', 'ਾ' ],
			[ 'E', 'ਓ' ],
			[ 'e', 'ੲ' ],
			[ 'r', 'ਰ' ],
			[ 'T', 'ਠ' ],
			[ 't', 'ਟ' ],
			[ 'Y', 'ੈ' ],
			[ 'y', 'ੇ' ],
			[ 'U', 'ੂ' ],
			[ 'u', 'ੁ' ],
			[ 'I', 'ੀ' ],
			[ 'i', 'ਿ' ],
			[ 'O', 'ੌ' ],
			[ 'o', 'ੋ' ],
			[ 'P', 'ਫ' ],
			[ 'p', 'ਪ' ],
			[ '\\|', '।' ],
			[ '\\\\', 'ਙ' ],
			[ 'A', 'ਅ' ],
			[ 'a', 'ੳ' ],
			[ 'S', 'ਸ਼' ],
			[ 's', 'ਸ' ],
			[ 'D', 'ਧ' ],
			[ 'd', 'ਦ' ],
			[ 'F', 'ਢ' ],
			[ 'f', 'ਡ' ],
			[ 'G', 'ਘ' ],
			[ 'g', 'ਗ' ],
			[ 'h', 'ਹ' ],
			[ 'J', 'ਝ' ],
			[ 'j', 'ਜ' ],
			[ 'K', 'ਖ' ],
			[ 'k', 'ਕ' ],
			[ 'L', 'ਲ਼' ],
			[ 'l', 'ਲ' ],
			[ '\\~', 'ੱ' ],
			[ '\\`', '੍' ],
			[ 'Z', 'ਗ਼' ],
			[ 'z', 'ਜ਼' ],
			[ 'X', 'ਯ' ],
			[ 'x', 'ਣ' ],
			[ 'C', 'ਛ' ],
			[ 'c', 'ਚ' ],
			[ 'V', 'ੜ' ],
			[ 'v', 'ਵ' ],
			[ 'B', 'ਭ' ],
			[ 'b', 'ਬ' ],
			[ 'N', 'ਂ' ],
			[ 'n', 'ਨ' ],
			[ 'M', 'ੰ' ],
			[ 'm', 'ਮ' ],
			[ '\\<', 'ਖ਼' ],
			[ '\\>', 'ੴ' ],
			[ '\\.', '਼' ],
			[ '\\?', '?' ],
			[ '\\/', 'ਞ' ],
			[ '%', '੫' ],
			[ '\\^', '੬' ],
			[ '&', '੭' ],
			[ '\\*', '੮' ],
			[ 'R', '੍ਰ' ],
			[ 'H', '੍ਹ' ],
			[ 'W', 'ਾਂ' ] ]
	};

	$.ime.register( paPhonetic );
}( jQuery ) );
