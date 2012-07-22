/**
 * Configuration file for jquery IME
 * First font is the default font for the language
 */

(function($) {
	var inputmethods = {
		'capitalize' : {
			 name: "Capitalize",
			rules : 'rules/en/capitalize.js'
		},
		'ml-transliteration' : {
			'name' : "Transliteration",
			rules : 'rules/ml/ml-transliteration.js'
		},
		'ml-inscript' : {
			name : "Inscript",
			rules : 'rules/ml/ml-inscript.js'
		}
	}
	var languages = {
		'English' : ['capitalize'],
		'Malayalam' : ['ml-transliteration', 'ml-inscript'],
	}
	$.extend($.fn.ime.Constructor.prototype.inputmethods, inputmethods);
	$.extend($.fn.ime.Constructor.prototype.languages, languages);

} )(jQuery);