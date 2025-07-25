( function ( $ ) {
	'use strict';

	var elKbd = {
		id: 'el-kbd',
		name: 'Greek kbd',
		description: 'Greek kbd keyboard layout',
		date: '2013-02-11',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/el-kbd',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '΄¨i', 'ΐ' ],
			[ '¨΄i', 'ΐ' ],
			[ '΄¨y', 'ΰ' ],
			[ '¨΄y', 'ΰ' ],
			[ '¨i', 'ϊ' ],
			[ '¨y', 'ϋ' ],
			[ '¨I', 'Ϊ' ],
			[ '¨Y', 'Ϋ' ],
			[ '΄a', 'ά' ],
			[ '΄e', 'έ' ],
			[ '΄h', 'ή' ],
			[ '΄i', 'ί' ],
			[ '΄o', 'ό' ],
			[ '΄y', 'ύ' ],
			[ '΄v', 'ώ' ],
			[ '΄A', 'Ά' ],
			[ '΄E', 'Έ' ],
			[ '΄H', 'Ή' ],
			[ '΄I', 'Ί' ],
			[ '΄O', 'Ό' ],
			[ '΄Y', 'Ύ' ],
			[ '΄V', 'Ώ' ],
			[ 'q', ';' ],
			[ 'w', 'ς' ],
			[ 'e', 'ε' ],
			[ 'r', 'ρ' ],
			[ 't', 'τ' ],
			[ 'y', 'υ' ],
			[ 'u', 'θ' ],
			[ 'i', 'ι' ],
			[ 'o', 'ο' ],
			[ 'p', 'π' ],
			[ '\\[', '[' ],
			[ '\\]', ']' ],
			[ 'a', 'α' ],
			[ 's', 'σ' ],
			[ 'd', 'δ' ],
			[ 'f', 'φ' ],
			[ 'g', 'γ' ],
			[ 'h', 'η' ],
			[ 'j', 'ξ' ],
			[ 'k', 'κ' ],
			[ 'l', 'λ' ],
			[ ';', '΄' ],
			[ 'z', 'ζ' ],
			[ 'x', 'χ' ],
			[ 'c', 'ψ' ],
			[ 'v', 'ω' ],
			[ 'b', 'β' ],
			[ 'n', 'ν' ],
			[ 'm', 'μ' ],
			[ 'Q', ':' ],
			[ 'W', 'Σ' ],
			[ 'E', 'Ε' ],
			[ 'R', 'Ρ' ],
			[ 'T', 'Τ' ],
			[ 'Y', 'Υ' ],
			[ 'U', 'Θ' ],
			[ 'I', 'Ι' ],
			[ 'O', 'Ο' ],
			[ 'P', 'Π' ],
			[ 'A', 'Α' ],
			[ 'S', 'Σ' ],
			[ 'D', 'Δ' ],
			[ 'F', 'Φ' ],
			[ 'G', 'Γ' ],
			[ 'H', 'Η' ],
			[ 'J', 'Ξ' ],
			[ 'K', 'Κ' ],
			[ 'L', 'Λ' ],
			[ ':', '¨' ],
			[ 'Z', 'Ζ' ],
			[ 'X', 'Χ' ],
			[ 'C', 'Ψ' ],
			[ 'V', 'Ω' ],
			[ 'B', 'Β' ],
			[ 'N', 'Ν' ],
			[ 'M', 'Μ' ] ]
	};

	$.ime.register( elKbd );
}( jQuery ) );
