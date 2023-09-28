( function ( $ ) {
	'use strict';

	var jvTransliteration = {
		id: 'jv-transliteration',
		name: 'Javanese',
		description: 'Javanese transliteration',
		date: '2023-04-06',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Bennylin',
		license: 'GPLv3',
		version: '1.3',
		contextLength: 1,
		maxKeyLength: 2,
		patterns: [
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],

			// VII. Vocal ended with special pasangan followed by vocal = back to normal
			[ 'ꦃ(a|A)', '', 'ꦲ' ], // vocal ended with -h followed by a
			[ 'ꦃ(e|E)', '', 'ꦲꦺ' ], // vocal ended with -h followed by e
			[ 'ꦃ(i|I)', '', 'ꦲꦶ' ], // vocal ended with -h followed by i
			[ 'ꦃ(o|O)', '', 'ꦲꦺꦴ' ], // vocal ended with -h followed by o
			[ 'ꦃ(u|U)', '', 'ꦲꦸ' ], // vocal ended with -h followed by u
			[ 'ꦃ(x|X)', '', 'ꦲꦼ' ], // vocal ended with -h followed by x/ê

			[ 'ꦂ(a|A)', '', 'ꦫ' ], // vocal ended with -r followed by a
			[ 'ꦂ(e|E)', '', 'ꦫꦺ' ], // vocal ended with -r followed by e
			[ 'ꦂ(i|I)', '', 'ꦫꦶ' ], // vocal ended with -r followed by i
			[ 'ꦂ(o|O)', '', 'ꦫꦺꦴ' ], // vocal ended with -r followed by o
			[ 'ꦂ(u|U)', '', 'ꦫꦸ' ], // vocal ended with -r followed by u
			[ 'ꦂX', '', 'ꦫꦼ' ], // vocal ended with -r followed by X
			[ 'ꦂx', '', 'ꦉ' ], // vocal ended with -r followed by x/ê - special character rê

			[ 'ꦁ(a|A)', '', 'ꦔ' ], // vocal ended with -ng followed by a
			[ 'ꦁ(e|E)', '', 'ꦔꦺ' ], // vocal ended with -ng followed by e
			[ 'ꦁ(i|I)', '', 'ꦔꦶ' ], // vocal ended with -ng followed by i
			[ 'ꦁ(o|O)', '', 'ꦔꦺꦴ' ], // vocal ended with -ng followed by o
			[ 'ꦁ(u|U)', '', 'ꦔꦸ' ], // vocal ended with -ng followed by u
			[ 'ꦁ(x|X)', '', 'ꦔꦼ' ], // vocal ended with -ng followed by x/ê

			[ 'ꦿ(a|A)', '', 'ꦿ' ], // medial consonant -r- followed by a
			[ 'ꦿ(e|E)', '', 'ꦿꦺ' ], // medial consonant -r- followed by e
			[ 'ꦿ(i|I)', '', 'ꦿꦶ' ], // medial consonant -r- followed by i
			[ 'ꦿ(o|O)', '', 'ꦿꦺꦴ' ], // medial consonant -r- followed by o
			[ 'ꦿ(u|U)', '', 'ꦿꦸ' ], // medial consonant -r- followed by u
			[ 'ꦿ(x|X)', '', 'ꦽ' ], // special biconsonant -rê

			[ 'ꦾ(a|A)', '', 'ꦾ' ], // medial consonant -y- followed by a
			[ 'ꦾ(e|E)', '', 'ꦾꦺ' ], // medial consonant -y- followed by e
			[ 'ꦾ(i|I)', '', 'ꦾꦶ' ], // medial consonant -y- followed by i
			[ 'ꦾ(o|O)', '', 'ꦾꦺꦴ' ], // medial consonant -y- followed by o
			[ 'ꦾ(u|U)', '', 'ꦾꦸ' ], // medial consonant -y- followed by u
			[ 'ꦾ(x|X)', '', 'ꦾꦼ' ],

			[ '꧀a', '', '' ], // default vowel is a, so, remove the pangkon
			[ '꧀A', '', 'ꦄ' ], // A
			[ '꧀e', '', 'ꦺ' ], // é|è
			[ '꧀E', '', 'ꦌ' ], // É|È
			[ '꧀i', '', 'ꦶ' ], // i
			[ '꧀I', '', 'ꦆ' ], // I
			[ '꧀o', '', 'ꦺꦴ' ], // o
			[ '꧀O', '', 'ꦎ' ], // O
			[ '꧀u', '', 'ꦸ' ], // u
			[ '꧀U', '', 'ꦈ' ], // U
			[ 'ꦭ꧀X', '', 'ꦭꦼ' ], // normal lê - use X capital
			[ 'ꦭ꧀x', '', 'ꦊ' ], // special character lê
			[ 'ꦫ꧀X', '', 'ꦫꦼ' ], // normal rê - use X capital
			[ 'ꦫ꧀x', '', 'ꦉ' ], // special character rê
			[ '꧀x', '', 'ꦼ' ], // x is another way to write ê
			[ '꧀X', '', 'ꦄꦼ' ], // X is another way to write Ê
			[ 'ꦌx', '', 'ꦄꦼ' ], // Ê

			// V. Lower case consonant followed by lower case consonant: Basic
			// Note: not all of these combination are valid in Javanese language, for example -hn-,
			// so they are here only for logical reason, practically they should never be used.
			// Obvious removal are noted (such as -yy-). th, dh, ny, ng, c, h, r, w, y are special cases:

			// pasangan 'ha'(ꦲ/ꦃ) is considered final, exception: about 60 words can be found of "ha" followed by consonant y/r/l/w
			// pasangan 'ra'(ꦫ/ꦂ) is considered final, exception: 5 words can be found of "ra" followed by consonant y/w
			// pasangan bigraf nga(ꦔ/ꦁ) is considered final, exception: "nga" can only be found followed by consonant y/r/l/w
			// (some problem may occur - see http://jv.wikipedia.org/wiki/Dhiskusi_Panganggo:Bennylin/Narayam#Ng)
			// pasangan bigraf nya can only be found followed by consonant r/l/w, and
			// although not found in Latin, it also found in Javanese script representation of nasal sounds ñ (see nyc and nyj)
			// pasangan bigraf dha can only be found followed by consonant y/r/ w
			// pasangan bigraf tha can only be found followed by consonant r
			// the letter 'w' can only be found followed by consonant y/r/l/w (nasal for 'u')
			// the letter 'c' can only be found followed by consonant r/l, and ch
			// the letter 'y' can only be found followed by consonant w (nasal for 'i')

			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀b', '', '$1꧀ꦧ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀B', '', '$1꧀ꦨ꧀' ], // pasangan Ba murda
			[ 'ꦤ꧀C', '', 'ꦤ꧀ꦕ꧀' ], // n + ZWS + C (delete the zero-width-space)
			[ 'ꦤ꧀c', '', 'ꦚ꧀ꦕ꧀' ], // n followed by c became nasalized (nasal sound 'ny' + c)(REF:nyc)
			[ '(ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀c', '', '$1꧀ꦕ꧀' ],
			[ '(ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀C', '', '$1꧀ꦖ꧀' ], // pasangan Ca murda(?)
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀d', '', '$1꧀ꦢ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀D', '', '$1꧀ꦣ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀(f|v|F|V)', '', '$1꧀ꦥ꦳꧀' ],
			[ 'ꦤ꧀G', '', 'ꦤ꧀ꦒ꧀' ], // n + ZWS + G (delete the zero-width-space)
			[ 'ꦤ꧀g', '', 'ꦁ' ], // ng -> cecak
			[ 'ꦟ꧀g', '', 'ꦟ꧀ꦒ꧀' ],
			[ '(ꦤ|ꦟ)꧀G', '', 'ꦔ꧀' ], // nga
			[ '(ꦲ|ꦤ|ꦕ|ꦫ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦝ|ꦗ|ꦪ|ꦚ|ꦩ|ꦒ|ꦧ|ꦛ|ꦔ|ꦐ|ꦑ|ꦓ|ꦖ|ꦘ|ꦙ|ꦜ|ꦞ|ꦟ|ꦡ|ꦣ|ꦦ|ꦨ|ꦬ|ꦯ|ꦰ|ꦿ|ꦾ|꦳|ꦴ|ꦻ|ꦍ|ꦺ|ꦼ|ꦶ|ꦷ|ꦸ|ꦹ|ꦄ|ꦌ|ꦅ|ꦆ|ꦇ|ꦎ|ꦈ)(ꦤ|ꦟ)꧀(g|G)', '', '$1ꦁ' ], // characters + ng = -ng (cecak)
			[ '(ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀g', '', '$1꧀ꦒ꧀' ], // can't be started with n, reserved for bigraf ng
			[ '(ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀G', '', '$1꧀ꦓ꧀' ], // pasangan Ga murda (can't be started with n - see II. 2.)
			[ 'ꦠ꧀​h', '', 'ꦠ꧀ꦲ꧀' ], // t_h (with zero-width-space)
			[ 'ꦢ꧀​h', '', 'ꦢ꧀ꦲ꧀' ], // d_h (with zero-width-space)
			[ '꧀​h', '', '꧀ꦲ꧀' ], // (with zws)
			[ 'ꦢ꧀h', '', 'ꦝ꧀' ], // dha
			[ 'ꦣ꧀h', '', 'ꦞ꧀' ], // Dha murda
			[ 'ꦠ꧀h', '', 'ꦛ꧀' ], // tha
			[ 'ꦡ꧀h', '', 'ꦜ꧀' ], // Tha murda
			[ '(ꦲ|ꦤ|ꦕ|ꦫ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦝ|ꦗ|ꦪ|ꦚ|ꦩ|ꦒ|ꦧ|ꦛ|ꦔ|ꦐ|ꦑ|ꦓ|ꦖ|ꦘ|ꦙ|ꦜ|ꦞ|ꦟ|ꦡ|ꦣ|ꦦ|ꦨ|ꦬ|ꦯ|ꦰ|ꦿ|ꦾ|꦳|ꦴ|ꦻ|ꦍ|ꦺ|ꦼ|ꦶ|ꦷ|ꦸ|ꦹ|ꦄ|ꦌ|ꦅ|ꦆ|ꦇ|ꦎ|ꦈ)h', '', '$1ꦃ' ], // characters + h = -h (wignyan)
			[ '(ꦤ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ)꧀h', '', '$1꧀ꦲ꧀' ], // can't be started with k/d/t/g, reserved for bigraf kh/dh/th/gh
			[ '(ꦢ|ꦣ)꧀H', '', 'ꦞ꧀' ], // Dha murda
			[ '(ꦠ|ꦡ)꧀H', '', 'ꦜ꧀' ], // Tha murda
			[ '(꧀|ꦿ|ꦾ|꦳)H', '', 'ꦴ' ], // tarung
			[ 'ꦤ꧀J', '', 'ꦤ꧀ꦗ꧀' ], // n + ZWS + J (delete the zero-width-space)
			[ 'ꦤ꧀j', '', 'ꦚ꧀ꦗ꧀' ], // n followed by j became nasalized (nasal sound 'ny' + j)(REF:nyj)
			[ '(ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀(j|J)', '', '$1꧀ꦗ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀k', '', '$1꧀ꦏ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀K', '', '$1꧀ꦑ꧀' ], // pasangan Ka murda
			[ 'ꦁl', '', 'ꦔ꧀ꦭ꧀' ], // cecak + l = nga + panjingan la
			[ '(ꦲ|ꦃ|ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦗ|ꦚ|ꦩ|ꦒ|ꦧ|ꦔ|ꦁ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀(l|L)', '', '$1꧀ꦭ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀(m|M)', '', '$1꧀ꦩ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀n', '', '$1꧀ꦤ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀N', '', '$1꧀ꦟ꧀' ], // pasangan Na murda
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀p', '', '$1꧀ꦥ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀P', '', '$1꧀ꦦ꧀' ], // pasangan Pa murda
			// q
			[ '꧀​r', '', '꧀ꦫ꧀' ], // pangkon + ZWS + y (delete the zero-width-space)
			[ 'ꦁR', '', 'ꦔꦿ' ], // cecak + R capital = nga + cakra
			[ 'ꦂR', '', 'ꦫꦿ' ], // layar + R capital = ra + cakra
			[ 'ꦃR', '', 'ꦲꦿ' ], // wignyan + R capital = ha + cakra
			[ '(ꦲ|ꦤ|ꦕ|ꦫ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦝ|ꦗ|ꦪ|ꦚ|ꦩ|ꦒ|ꦧ|ꦛ|ꦔ|ꦐ|ꦑ|ꦓ|ꦖ|ꦘ|ꦙ|ꦜ|ꦞ|ꦟ|ꦡ|ꦣ|ꦦ|ꦨ|ꦬ|ꦯ|ꦰ|ꦿ|ꦾ|꦳|ꦴ|ꦻ|ꦍ|ꦺ|ꦼ|ꦶ|ꦷ|ꦸ|ꦹ|ꦄ|ꦌ|ꦅ|ꦆ|ꦇ|ꦎ|ꦈ)r', '', '$1ꦂ' ], // characters + r = -r (layar)
			[ '(ꦲ|ꦤ|ꦕ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦝ|ꦗ|ꦚ|ꦩ|ꦒ|ꦧ|ꦛ|ꦔ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀(r|R)', '', '$1ꦿ' ], // special biconsonant -ra
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀s', '', '$1꧀ꦱ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀S', '', '$1꧀ꦯ꧀' ], // pasangan Sa murda
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀t', '', '$1꧀ꦠ꧀' ],
			[ '(ꦤ|ꦏ|ꦢ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀T', '', '$1꧀ꦡ꧀' ], // pasangan Ta murda
			// v = f
			[ 'ꦁw', '', 'ꦔ꧀ꦮ꧀' ], // cecak + w = nga + panjingan wa
			[ '(ꦲ|ꦃ|ꦤ|ꦫ|ꦂ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦝ|ꦗ|ꦪ|ꦚ|ꦩ|ꦒ|ꦧ|ꦔ|ꦁ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀(w|W)꧀', '', '$1꧀ꦮ' ],
			// x = vowel
			[ '꧀​y', '', '꧀ꦪ꧀' ], // pangkon + ZWS + y (delete the zero-width-space)
			[ 'ꦁY', '', 'ꦔꦾ' ], // cecak + Y capital = nga + pengkal
			[ 'ꦂY', '', 'ꦫꦾ' ], // layar + Y capital = ra + pengkal
			[ 'ꦃY', '', 'ꦲꦾ' ], // wignya + Y capital = ha + pengkal
			[ 'ꦗ꧀ꦤ꧀y', '', 'ꦘ꧀' ], // Nya murda - jnya
			[ 'ꦤ꧀y', '', 'ꦚ꧀' ], // nya
			[ 'ꦟ꧀y', '', 'ꦘ꧀' ], // Nya murda
			[ '(ꦤ|ꦟ)꧀Y', '', 'ꦘ꧀' ], // NYA murda
			[ '(ꦲ|ꦫ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦝ|ꦗ|ꦩ|ꦒ|ꦧ|ꦔ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦦ|ꦯ|ꦡ)꧀(y|Y)', '', '$1ꦾ' ], // special biconsonant -ya,
			// can't be started with n or y, reserved for bigraf ny (REF:-yy-)
			[ '(ꦤ|ꦏ|ꦠ|ꦱ|ꦭ|ꦥ|ꦗ|ꦩ|ꦒ|ꦧ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ)꧀(z|Z)', '', '$1ꦾꦗ꦳꧀' ], // can't be started with d, reserved for bigraf dz

			// IV. 1. Extended vowel
			// long a (aa) - see II.
			[ '(ꦲ|ꦤ|ꦕ|ꦫ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦝ|ꦗ|ꦪ|ꦚ|ꦩ|ꦒ|ꦧ|ꦛ|ꦔ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ|꦳)i', '', '$1ꦻ' ], // hanacaraka + i = -ai
			[ '(ꦲ|ꦤ|ꦕ|ꦫ|ꦏ|ꦢ|ꦠ|ꦱ|ꦮ|ꦭ|ꦥ|ꦝ|ꦗ|ꦪ|ꦚ|ꦩ|ꦒ|ꦧ|ꦛ|ꦔ|ꦘ|ꦨ|ꦖ|ꦓ|ꦑ|ꦟ|ꦦ|ꦯ|ꦡ|꦳)u', '', '$1ꦻꦴ' ], // hanacaraka + u = -au
			[ 'ꦄi', '', 'ꦍ' ], // Ai
			[ 'ꦄu', '', 'ꦎꦴ' ], // Au
			[ 'ꦶi', '', 'ꦷ' ], // long i (ii)
			[ 'ꦆi', '', 'ꦇ' ], // long i (Ii)
			[ 'ꦆI', '', 'ꦅ' ], // ?( II) - another glyph for I
			[ 'ꦸu', '', 'ꦹ' ], // long u (uu)
			[ 'ꦈu', '', 'ꦈꦴ' ], // long u (Uu)
			[ 'ꦺꦴo', '', 'ꦵ' ], // Sundanese -o

			// III. Non-words
			// q and Q are special characters for choosing less used characters by pressing q/Q multiple times (rotating back)
			[ 'ꦏ꧀Q', '', 'ꦐ꧀' ], // ka sasak
			[ 'ꦫ꧀q', '', 'ꦿ' ], // another way to write -ra
			[ 'ꦂq', '', 'ꦿ' ], // another way to write -ra
			[ 'ꦪ꧀q', '', 'ꦾ' ], // another way to write -ya
			[ 'ꦊq', '', 'ꦋ' ], // special character lê Raswadi
			[ 'ꦺq', '', 'ꦻ' ], // ai - dirga mure
			[ 'ꦺꦴq', '', 'ꦻꦴ' ], // au - dirga mure + tarung

			[ ' ', '', '​' ], // zero-width-space, since javanese have no space
			[ '꧅q', '', '꧁' ], // rêrênggan kiwa
			[ '꧄q', '', '꧅' ], // pada luhur
			[ '꧃q', '', '꧄' ], // pada madya
			[ '꧂q', '', '꧃' ], // pada andhap
			[ '꧁q', '', '꧂' ], // rêrênggan têngên
			[ 'Q', '', '꧁' ], // rêrênggan kiwa
			[ '꧟[Q|q]', '', '꧀' ], // pangkon
			[ '꧞[Q|q]', '', '꧟' ], // pada isen-isen
			[ '꧆[Q|q]', '', '꧞' ], // pada tirta tumetes
			[ 'ꦀ[Q|q]', '', '꧆' ], // pada windu
			[ '꦳[Q|q]', '', 'ꦀ' ], // panyangga
			[ '꧀[Q|q]', '', '꦳' ], // cecak telu
			[ 'q', '', '꧀' ], // pangkon - to cut off the default -a vowel

			// II. 1. Alphabetical ha-na-ca-ra-ka
			[ 'a', '', 'ꦲ' ],
			[ 'b', '', 'ꦧ꧀' ],
			[ 'c', '', 'ꦕ꧀' ],
			[ 'd', '', 'ꦢ꧀' ],
			[ 'e', '', 'ꦲꦺ' ], // é|è
			[ '(f|v)', '', 'ꦥ꦳꧀' ],
			[ 'g', '', 'ꦒ꧀' ],
			[ 'h', '', 'ꦲ꧀' ],
			[ 'i', '', 'ꦲꦶ' ],
			[ 'j', '', 'ꦗ꧀' ],
			[ 'k', '', 'ꦏ꧀' ],
			[ 'l', '', 'ꦭ꧀' ],
			[ 'm', '', 'ꦩ꧀' ],
			[ 'n', '', 'ꦤ꧀' ],
			[ 'o', '', 'ꦲꦺꦴ' ],
			[ 'p', '', 'ꦥ꧀' ],
			// q = special letters, see III.
			[ 'r', '', 'ꦫ꧀' ],
			[ 's', '', 'ꦱ꧀' ],
			[ 't', '', 'ꦠ꧀' ],
			[ 'u', '', 'ꦲꦸ' ],
			// v = f
			[ 'w', '', 'ꦮ꧀' ],
			[ 'x', '', 'ꦲꦼ' ], // ê
			[ 'y', '', 'ꦪ꧀' ],
			[ 'z', '', 'ꦗ꦳꧀' ],

			// II. Basic Letters:
			// II. 2. Capital Ha-Na-Ca-Ra-Ka (Aksara Murda)
			[ 'A', '', 'ꦄ' ], // A
			[ 'B', '', 'ꦨ꧀' ], // Ba murda
			[ 'C', '', 'ꦖ꧀' ], // Ca murda(?)
			[ 'D', '', 'ꦣ꧀' ],
			[ 'E', '', 'ꦌ' ], // É|È
			[ '(F|V)', '', 'ꦥ꦳꧀' ],
			[ 'G', '', 'ꦓ꧀' ], // Ga murda
			[ 'H', '', 'ꦴ' ],
			[ 'I', '', 'ꦆ' ], // I
			[ 'J', '', 'ꦙ꧀' ], // Ja Mahaprana
			[ 'K', '', 'ꦑ꧀' ], // Ka murda
			[ 'L', '', 'ꦭ꧀' ],
			[ 'M', '', 'ꦩ꧀' ],
			[ 'N', '', 'ꦟ꧀' ], // Na murda
			[ 'O', '', 'ꦎ' ], // O
			[ 'P', '', 'ꦦ꧀' ], // Pa murda
			// Q = special letters, see III.
			[ 'R', '', 'ꦬ꧀' ],
			[ 'S', '', 'ꦯ꧀' ], // Sa murda
			[ 'T', '', 'ꦡ꧀' ], // Ta murda
			[ 'U', '', 'ꦈ' ], // U
			// V = F
			[ 'W', '', 'ꦮ꧀' ],
			[ 'X', '', 'ꦄꦼ' ], // X is another way to write Ê
			[ 'Y', '', 'ꦪ꧀' ],
			[ 'Z', '', 'ꦰ꧀' ],

			// I. Number
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
			[ ':', '', '꧇' ], // 'enclose Javanese numbers, e.g. ":1:"'
			[ ',', '', '꧈' ], // 'comma'
			[ '\\.', '', '꧉' ], // 'period'
			[ '꧊\\|', '', '꧋' ], // 'opening paragraph character'
			[ '\\|', '', '꧊' ], // 'poem character'
			[ '\\(', '', '꧌' ], // 'Javanese opening bracket'
			[ '\\)', '', '꧍' ] // 'Javanese closing bracket'
		]
	};

	$.ime.register( jvTransliteration );
}( jQuery ) );
