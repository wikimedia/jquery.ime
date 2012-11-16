( function ( $ ) {
	'use strict';

	var jvTransliteration = {
		id: 'jv-transliteration',
		name: 'Javanese',
		description: 'Javanese transliteration',
		date: '2012-09-01',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Bennylin',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 2,
		patterns: [
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],

			[ '꧀ꦃa', '', '꧀​ꦲ' ], // pangkon and start with h
			[ '꧀ꦃe', '', '꧀​ꦲꦺ' ], // pangkon and start with h
			[ '꧀ꦃi', '', '꧀​ꦲꦶ' ], // pangkon and start with h
			[ '꧀ꦃo', '', '꧀​ꦲꦺꦴ' ], // pangkon and start with h
			[ '꧀ꦃu', '', '꧀​ꦲꦸ' ], // pangkon and start with h

			[ '꧀ꦂa', '', '꧀​ꦫ' ], // pangkon and start with r
			[ '꧀ꦂe', '', '꧀​ꦫꦺ' ], // pangkon and start with r
			[ '꧀ꦂi', '', '꧀​ꦫꦶ' ], // pangkon and start with r
			[ '꧀ꦂo', '', '꧀​ꦫꦺꦴ' ], // pangkon and start with r
			[ '꧀ꦂu', '', '꧀​ꦫꦸ' ], // pangkon and start with r

			[ '꧀ꦁa', '', '꧀​ꦔ' ], // pangkon and start with ng
			[ '꧀ꦁe', '', '꧀​ꦔꦺ' ], // pangkon and start with ng
			[ '꧀ꦁi', '', '꧀​ꦔꦶ' ], // pangkon and start with ng
			[ '꧀ꦁo', '', '꧀​ꦔꦺꦴ' ], // pangkon and start with ng
			[ '꧀ꦁu', '', '꧀​ꦔꦸ' ], // pangkon and start with ng

			[ 'ꦃa', '', 'ꦲ​' ], // vocal ended with -h followed by a
			[ 'ꦃe', '', 'ꦲꦺ' ], // vocal ended with -h followed by e
			[ 'ꦃi', '', 'ꦲꦶ' ], // vocal ended with -h followed by i
			[ 'ꦃo', '', 'ꦲꦺꦴ' ], // vocal ended with -h followed by o
			[ 'ꦃu', '', 'ꦲꦸ' ], // vocal ended with -h followed by u

			[ 'ꦂa', '', 'ꦫ​' ], // vocal ended with -r followed by a
			[ 'ꦂe', '', 'ꦫꦺ' ], // vocal ended with -r followed by e
			[ 'ꦂi', '', 'ꦫꦶ' ], // vocal ended with -r followed by i
			[ 'ꦂo', '', 'ꦫꦺꦴ' ], // vocal ended with -r followed by o
			[ 'ꦂu', '', 'ꦫꦸ' ], // vocal ended with -r followed by u
			[ 'ꦂy', '', 'ꦫꦾ' ], // vocal ended with -r followed by y

			[ 'ꦁa', '', 'ꦔ​' ], // vocal ended with -ng followed by a
			[ 'ꦁe', '', 'ꦔꦺ' ], // vocal ended with -ng followed by e
			[ 'ꦁi', '', 'ꦔꦶ' ], // vocal ended with -ng followed by i
			[ 'ꦁo', '', 'ꦔꦺꦴ' ], // vocal ended with -ng followed by o
			[ 'ꦁu', '', 'ꦔꦸ' ], // vocal ended with -ng followed by u

			[ '(​)h', '', 'ꦃ' ], // vocal a ended with -h
			[ '(​)r', '', 'ꦂ' ], // vocal a ended with -r
			[ '(​)ꦤg', '', 'ꦁ' ], // vocal a ended with -ng
			[ '(ꦴ|ꦍ|ꦺ|ꦼ|ꦶ|ꦷ|ꦸ|ꦹ)h', '', '$1ꦃ' ], // other vocal ended with -h
			[ '(ꦴ|ꦍ|ꦺ|ꦼ|ꦶ|ꦷ|ꦸ|ꦹ)r', '', '$1ꦂ' ], // other vocal ended with -r
			[ '(ꦴ|ꦍ|ꦺ|ꦼ|ꦶ|ꦷ|ꦸ|ꦹ)ꦤg', '', '$1ꦁ' ], // other vocal ended with -ng

			// consonant followed by consonant, basic
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)ꦢh', '', '$1꧀ꦝ' ], // dh
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)ꦤy', '', '$1꧀ꦚ' ], // ny
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)ꦠh', '', '$1꧀ꦛ' ], // th
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)ꦤg', '', '$1꧀ꦔ' ], // ng
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)b', '', '$1꧀ꦧ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)c', '', '$1꧀ꦤ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)d', '', '$1꧀ꦢ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)(f|v)', '', '$1꧀ꦥ꦳' ],
			[ '(ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)g', '', '$1꧀ꦒ' ], // can't be started with n, reserved for bigraf ng
			[ '(ꦤ|ꦕ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦧ)h', '', '$1꧀ꦲ' ], // can't be started with k/d/t/g, reserved for bigraf kh/dh/th/gh
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)j', '', '$1꧀ꦗ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)k', '', '$1꧀ꦏ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)l', '', '$1꧀ꦭ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)m', '', '$1꧀ꦩ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)n', '', '$1꧀ꦤ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)p', '', '$1꧀ꦥ' ],
			// ['(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)q', '',''],
			[ 'ꦿꦺ`', '', 'ꦽ' ], // special biconsonant -rê
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)r', '', '$1ꦿ' ], // special biconsonant -ra
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)s', '', '$1꧀ꦱ' ],
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)t', '', '$1꧀ꦠ' ],
			// v = f
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)w', '', '$1꧀ꦮ' ],
			// ['(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)x', '',''],
			[ '(ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ)y', '', '$1ꦾ' ], // special biconsonant -ya, can't be started
															// with n or y, reserved for bigraf ny
			[ '(ꦤ|ꦕ|ꦏ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)z', '', '$1ꦾꦗ꦳' ], // can't be started with d, reserved for bigraf dz

			// consonant followed by consonant, extended
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)ꦤ(y|Y)', '', '$1꧀ꦘ' ], // Nya murda
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)B', '', '$1꧀ꦨ' ], // Ba murda
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)C', '', '$1꧀ꦖ' ], // Ca murda(?)
			[ '(ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)G', '', '$1꧀ꦓ' ], // Ga murda //can't be started with n, reserved for bigraf nG (Ng)
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)K', '', '$1꧀ꦑ' ], // Ka murda
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)N', '', '$1꧀ꦟ' ], // Na murda
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)P', '', '$1꧀ꦦ' ], // Pa murda
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)S', '', '$1꧀ꦯ' ], // Sa murda
			[ '(ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦪ|ꦩ|ꦒ|ꦧ)T', '', '$1꧀ꦡ' ], // Ta murda

			// extended vowel
			[ '​a', '', 'ꦴ' ], // long a (aa)
			[ '​i', '', 'ꦍ' ], // (ai)
			[ 'ꦶi', '', 'ꦷ' ], // long i (ii)
			[ 'ꦸu', '', 'ꦹ' ], // long u (uu)

			// extended consonant
			[ 'ꦏh', '', 'ꦏ꦳' ], // kh
			[ 'ꦒh', '', 'ꦒ꦳' ], // gh
			[ 'ꦢz', '', 'ꦢ꦳' ], // dz
			[ 'ꦗ`', '', 'ꦙ' ], // Ja mahaprana

			// special consonant
			[ 'ꦭꦺ`', '', 'ꦊ' ], // special character lê
			[ 'ꦫꦺ`', '', 'ꦉ' ], // special character rê

			// non words
			[ ' ', '', '​' ], // zero-width-space, since javanese have no space
			[ 'q`', '', '꧀' ], // pengkal - to cut off the default -a vowel
			[ 'x`', '', '꦳' ], // cecak telu
			[ '꦳`', '', 'ꦀ' ], // panyangga
			[ 'ꦀ`', '', '̈' ], // combining-diaresis
			[ '̈`', '', '͜' ], // double-breve

			[ 'ꦫ`', '', 'ꦿ' ], // another way to write -ra
			[ 'ꦪ`', '', 'ꦾ' ], // another way to write -ya

			// basic ha-na-ca-ra-ka
			[ 'ꦢh', '', 'ꦝ' ], // dh
			[ 'ꦠh', '', 'ꦛ' ], // th
			[ 'ꦤy', '', 'ꦚ' ], // ny
			[ 'ꦤg', '', 'ꦔ' ], // ng
			[ 'ꦺ`', '', 'ꦼ' ], // ê
			[ 'a', '', '​' ], // default vowel is a, by default using zero-width-non-joiner
			[ 'b', '', 'ꦧ' ],
			[ 'c', '', 'ꦕ' ],
			[ 'd', '', 'ꦢ' ],
			[ 'e', '', 'ꦺ' ], // é|è
			[ '(f|v)', '', 'ꦥ꦳' ],
			[ 'g', '', 'ꦒ' ],
			[ 'h', '', 'ꦲ' ],
			[ 'i', '', 'ꦶ' ],
			[ 'j', '', 'ꦗ' ],
			[ 'k', '', 'ꦏ' ],
			[ 'l', '', 'ꦭ' ],
			[ 'm', '', 'ꦩ' ],
			[ 'n', '', 'ꦤ' ],
			[ 'o', '', 'ꦺꦴ' ],
			[ 'p', '', 'ꦥ' ],
			// ['q', '',''],
			[ 'r', '', 'ꦫ' ],
			[ 's', '', 'ꦱ' ],
			[ 't', '', 'ꦠ' ],
			[ 'u', '', 'ꦸ' ],
			// v = f
			[ 'w', '', 'ꦮ' ],
			// ['x', '',''],
			[ 'y', '', 'ꦪ' ],
			[ 'z', '', 'ꦗ꦳' ],

			// capital Ha-Na-Ca-Ra-Ka
			[ 'ꦢ(h|H)', '', 'ꦝ' ],
			[ 'ꦤ(y|Y)', '', 'ꦘ' ], // Nya murda
			[ 'ꦠ(h|H)', '', 'ꦛ' ],
			[ 'ꦤ(g|G)', '', 'ꦔ' ],
			[ 'ꦌ`', '', 'ꦄꦼ' ], // Ê
			[ 'A', '', 'ꦄ' ], // A
			[ 'B', '', 'ꦨ' ], // Ba murda
			[ 'C', '', 'ꦖ' ], // Ca murda(?)
			[ 'D', '', 'ꦢ' ],
			[ 'E', '', 'ꦌ' ], // É|È
			[ '(F|V)', '', 'ꦥ꦳' ],
			[ 'G', '', 'ꦓ' ], // Ga murda
			[ 'H', '', 'ꦲ' ],
			[ 'I', '', 'ꦆ' ], // I
			[ 'J', '', 'ꦗ' ],
			[ 'K', '', 'ꦑ' ], // Ka murda
			[ 'L', '', 'ꦭ' ],
			[ 'M', '', 'ꦩ' ],
			[ 'N', '', 'ꦟ' ], //Na murda
			[ 'O', '', 'ꦎ' ], //O
			[ 'P', '', 'ꦦ' ], //Pa murda
			[ 'Q', '', '' ],
			[ 'R', '', 'ꦫ' ],
			[ 'S', '', 'ꦯ' ], //Sa murda
			[ 'T', '', 'ꦡ' ], //Ta murda
			[ 'U', '', 'ꦈ' ], //U
			//v = f
			[ 'W', '', 'ꦮ' ],
			[ 'X', '', '' ],
			[ 'Y', '', 'ꦪ' ],
			[ 'Z', '', 'ꦗ꦳' ],

			[ '0', '', '꧐' ],
			[ '1', '', '꧑' ],
			[ '2', '', '꧒' ],
			[ '3', '', '꧓' ],
			[ '4', '', '꧔' ],
			[ '5', '', '꧕' ],
			[ '6', '', '꧖' ],
			[ '7', '', '꧗' ],
			[ '8', '', '꧘' ],
			[ '9', '', '꧙' ],
			[ ',', '', '꧈' ],
			[ '\\.', '', '꧉' ],
			[ '꧊\\|', '', '꧋' ], // '||'
			[ '\\|', '', '꧊' ], // '|'
			[ '\\(', '', '꧌' ], // '('
			[ '\\)', '', '꧍' ], // ')'
			[ '(\u200C)*_', '', '\u200c' ]
		]
	};

	$.ime.register( jvTransliteration );

}( jQuery ) );