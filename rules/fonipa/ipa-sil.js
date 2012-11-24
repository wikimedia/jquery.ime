( function ( $ ) {
	'use strict';

	var ipaSil = {
		id: 'ipa-sil',
		name: 'Internation Phonetic Alphabet - SIL',
		description: 'Internation Phonetic Alphabet - SIL',
		date: '2012-11-23',
		URL: 'http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=UniIPAKeyboard',
		author: 'mapping by Martin Hosken and Lorna A. Priest; implementation by Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 2,
		patterns: [
			['B=', 'ʙ'],
			['f=', 'ɸ'],
			['b=', 'β'],

			['m>', 'ɱ'],
			['v<', 'ⱱ'],
			['v=', 'ʋ'],

			['t=', 'θ'],
			['d=', 'ð'],

			['r>', 'ɾ'],
			['l=', 'ɬ'],
			['l>', 'ɮ'],
			['r=', 'ɹ'],

			['s=', 'ʃ'],
			['z=', 'ʒ'],

			['t<', 'ʈ'],
			['d<', 'ɖ'],
			['n<', 'ɳ'],
			['r<', 'ɽ'],
			['s<', 'ʂ'],
			['z<', 'ʐ'],
			['R<', 'ɻ'],
			['l<', 'ɭ'],

			['j=', 'ɟ'],
			['n=', 'ɲ'],
			['c=', 'ç'],
			['j<', 'ʝ'],
			['L<', 'ʎ'],

			['g<', 'ɡ'],
			['n>', 'ŋ'],
			['g=', 'ɣ'],
			['w>', 'ɰ'],
			['L=', 'ʟ'],

			['G=', 'ɢ'],
			['N=', 'ɴ'],
			['R=', 'ʀ'],
			['x=', 'χ'],
			['R>', 'ʁ'],

			['h>', 'ħ'],
			['\\?<', 'ʕ'],

			['\\?=', 'ʔ'],
			['h<', 'ɦ'],

			['p=', 'ʘ'],
			['ǃ<', 'ǀ'], // This is not an exclamation mark
			['!',  'ǃ'],
			['ǃ=', 'ǂ'], // This is not an exclamation mark
			['ǃ>', 'ǁ'], // This is not an exclamation mark

			['b>', 'ɓ'],
			['d>', 'ɗ'],
			['j>', 'ʄ'],
			['g>', 'ɠ'],
			['G>', 'ʛ'],

			['w=', 'ʍ'],
			['y<', 'ɥ'],
			['h=', 'ɥ'],
			['H=', 'ʜ'],
			['Q<', 'ʢ'],
			['Q=', 'ʡ'],

			['c<', 'ɕ'],
			['z>', 'ʑ'],
			['L>', 'ɺ'],
			['H<', 'ɧ'],

			['i=', 'ɪ'],
			['e<', 'ɛ'],
			['a<', 'æ'],

			['y=', 'ʏ'],
			['o>', 'ø'],
			['E<', 'œ'],
			['E>', 'ɶ'],

			['I=', 'ɨ'],
			['E=', 'ɘ'],
			['e=', 'ə'],
			['e>', 'ɜ'],
			['a>', 'ɐ'],
			['U=', 'ʉ'],
			['O=', 'ɵ'],
			['O<', 'ɞ'],

			['u=', 'ɯ'],
			['O>', 'ɤ'],
			['u>', 'ʌ'],
			['a=', 'ɑ'],
			['u',  'u'],
			['u<', 'ʊ'],
			['o<', 'ɔ'],
			['o=', 'ɒ'],

			['ˈ}',        'ˌ'], // }}
			['}',         'ˈ'],
			['ː:',        'ˑ'], // ::
			['ˑ:',        'ːː'], // ::: // Not IPA sanctioned
			[':',         'ː'],
			['\\*\\*\\*', '\u0306'], // Combining breve
			['\\.<',      '|'],
			['\\.=',      '‖'],
			['#=',        '‿'],

			// Tones
			['([˥-˩])4', '$1˥'],
			['([˥-˩])3', '$1˦'],
			['([˥-˩])2', '$1˧'],
			['([˥-˩])1', '$1˨'],
			['([˥-˩])0', '$1˩'],
			['#4', '˥'],
			['#3', '˦'],
			['#2', '˧'],
			['#1', '˨'],
			['#0', '˩'],
			['(?:\u0300)3', '\u030C'], // @13  - Combining caron
			['(?:\u0301)1', '\u0302'], // @31  - Combining circumflex accent
			['(?:\u0304)3', '\u1dc4'], // @23  - Combining macron-acute
			['(?:\u0300)2', '\u1dc5'], // @12  - Combining grave-macron
			['(?:\u030C)1', '\u1dc8'], // @131 - Combining grave-acute-grave
			['(?:\u0304)1', '\u1dc6'], // @21  - Combining macron-grave // Not IPA sanctioned
			['(?:\u0301)2', '\u1dc7'], // @32  - Combining acute-macron // Not IPA sanctioned
			['(?:\u0302)3', '\u1dc9'], // @313 - Combining acute-grave-acute // Not IPA sanctioned
			['@4', '\u030b'], // Combining double acute accent
			['@3', '\u0301'], // Combining acute accent
			['@2', '\u0304'], // Combining macron
			['@1', '\u0300'], // Combining grave accent
			['@0', '\u030f'], // Combining double grave accent

			// Tone numbers (non-IPA)
			['\\^0', '⁰'], // Not IPA sanctioned
			['\\^1', '¹'], // Not IPA sanctioned
			['\\^2', '²'], // Not IPA sanctioned
			['\\^3', '³'], // Not IPA sanctioned
			['\\^4', '⁴'], // Not IPA sanctioned
			['\\^5', '⁵'], // Not IPA sanctioned
			['\\^6', '⁶'], // Not IPA sanctioned
			['\\^7', '⁷'], // Not IPA sanctioned
			['\\^8', '⁸'], // Not IPA sanctioned
			['\\^9', '⁹'], // Not IPA sanctioned
			// This character is called "Superscript hyphen" in the layout document,
			// and "Superscript minus" in Unicode
			['\\^-', '⁻'], // Not IPA sanctioned

			['ꜛ>', '↗'], // #>>
			['ꜜ<', '↘'], // #<<
			['#<', 'ꜜ'],
			['#>', 'ꜛ'],

			['=<', '\u200d'] // Combining Grapheme Joiner
		]
	};
	$.ime.register( ipaSil );

} ( jQuery ) );
