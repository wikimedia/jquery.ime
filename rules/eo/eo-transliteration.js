( function ( $ ) {
	'use strict';
	var prepareRules, eoTransliteration;
	prepareRules = function () {
		var rules, chars;
		rules = [];
		chars = {C: 'Ĉ', G: 'Ĝ', H: 'Ĥ', J: 'Ĵ', S: 'Ŝ', U: 'Ŭ', c: 'ĉ', g: 'ĝ', h: 'ĥ', j: 'ĵ', s: 'ŝ', u: 'ŭ'};
		jQuery.each(chars, function(ascii, accented) {
			rules.push([ascii + '[Xx]', ascii, accented]);
			rules.push([accented + '([Xx])', '[Xx]', ascii + '$1']);
		});
		return rules;
	};
	eoTransliteration = {
		id: 'eo-transliteration',
		name: 'Transliteration',
		description: 'Esperanto x-code transliteration',
		date: '2012-10-10',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Brion Vibber',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 1,
		patterns: prepareRules.apply(this)
	};
	$.ime.register( eoTransliteration );
}( jQuery ) );
