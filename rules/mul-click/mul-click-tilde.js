( function ( $ ) {
	'use strict';

	var clickTilde = {
		id: 'mul-click-tilde',
		name: 'Click tilde',
		description: 'Click input keyboard',
		date: '2024-09-24',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			// Typing based on shape
			[ '~o', 'ʘ' ], // U+0298: Bilabial click
			[ '~1', 'ǀ' ], // U+01C0: Dental click (tilde + 1 => not a pipe)
			[ 'ǀ1', 'ǁ' ], // U+01C1: Lateral click (not a pipe + 1 => double pipe)
			[ '~=', 'ǂ' ], // U+01C2: Alveolar click
			[ '~#', 'ǂ' ], // U+01C2: Alveolar click
			[ '~!', 'ǃ' ], // U+01C3: Retroflex click (tilde + exclamation point => not an exclamation point)
			[ '~,', '𝼊' ], // U+1DF0A: Retroflex click with retroflex hook

			// Typing based on Zulu and Xhosa orthography
			[ '~c', 'ǀ' ], // U+01C0: Dental click (not a pipe!)
			[ '~x', 'ǁ' ], // U+01C1: Lateral click
			[ '~q', 'ǃ' ], // U+01C3: Retroflex click (not an exclamation point!)

			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\^', '\u0302' ], // Combining circumflex
			[ '~\\{', '\u0303' ], // Combining tilde
			[ '~-', '\u0304' ] // Combining macron
		]
	};

	$.ime.register( clickTilde );
}( jQuery ) );
