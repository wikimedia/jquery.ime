( function ( $ ) {
	'use strict';

	var chr = {
		id: 'chr',
		name: 'Cherokee',
		description: 'Typing Cherokee syllabary from English letters',
		date: '2023-01-14',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Anne Drew Hu',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			
            [ 'ga', 'Ꭶ'], // Ꭶ 	ga 	Ꭷ 	ka 	  	Ꭸ 	ge 	  	Ꭹ 	gi 	  	Ꭺ 	go 	Ꭻ 	gu 	Ꭼ 	gv 
            [ 'ka', 'Ꭷ'],
            [ 'ge', 'Ꭸ'],
            [ 'gi', 'Ꭹ'],
            [ 'go', 'Ꭺ'],
            [ 'gu', 'Ꭻ'],
            [ 'gv', 'Ꭼ'],

            [ 'ha', 'Ꭽ'], // Ꭽ 	ha 	  	Ꭾ 	he 	  	Ꭿ 	hi 	  	Ꮀ 	ho 	Ꮁ 	hu 	Ꮂ 	hv
            [ 'he', 'Ꭾ'],
            [ 'hi', 'Ꭿ'],
            [ 'ho', 'Ꮀ'],
            [ 'hu', 'Ꮁ'],
            [ 'hv', 'Ꮂ'],

            [ 'la', 'Ꮃ'], // Ꮃ 	la 	  	Ꮄ 	le 	  	Ꮅ 	li 	  	Ꮆ 	lo 	Ꮇ 	lu 	Ꮈ 	lv
            [ 'le', 'Ꮄ'],
            [ 'li', 'Ꮅ'],
            [ 'lo', 'Ꮆ'],
            [ 'lu', 'Ꮇ'],
            [ 'lv', 'Ꮈ'],

            [ 'ma', 'Ꮉ'], // Ꮉ 	ma 	  	Ꮊ 	me 	  	Ꮋ 	mi 	  	Ꮌ 	mo 	Ꮍ 	mu 	Ᏽ* 	mv
            [ 'me', 'Ꮊ'],
            [ 'mi', 'Ꮋ'],
            [ 'mo', 'Ꮌ'],
            [ 'mu', 'Ꮍ'],
            [ 'mv', 'Ᏽ'],

            // Apostrophes allow disambiguation, see: https://en.wikipedia.org/w/index.php?title=Cherokee_syllabary&oldid=1124646659#Transliteration_issues
            [ 'hna', 'Ꮏ'], // Ꮎ 	na 	Ꮏ 	hna 	Ꮐ 	nah 	Ꮑ 	ne 	  	Ꮒ 	ni 	  	Ꮓ 	no 	Ꮔ 	nu 	Ꮕ 	nv
            [ '\'hna', 'Ꮏ'],
            [ 'nah', 'Ꮐ'],
            [ 'nah\'', 'Ꮐ'],
            [ 'na', 'Ꮎ'], 
            [ 'na\'', 'Ꮎ'],
            [ '\'na', 'Ꮎ'],
            [ 'ne', 'Ꮑ'],
            [ 'ni', 'Ꮒ'],
            [ 'no', 'Ꮓ'],
            [ 'nu', 'Ꮔ'],
            [ 'nv', 'Ꮕ'],

            [ 'qua', 'Ꮖ'], // Ꮖ 	qua 	  	Ꮗ 	que 	  	Ꮘ 	qui 	  	Ꮙ 	quo 	Ꮚ 	quu 	Ꮛ 	quv
            [ 'que', 'Ꮗ'],
            [ 'qui', 'Ꮘ'],
            [ 'quo', 'Ꮙ'],
            [ 'quu', 'Ꮚ'],
            [ 'quv', 'Ꮛ'],

            [ 'sa', 'Ꮜ'], // Ꮝ 	s 	Ꮜ 	sa 	  	Ꮞ 	se 	  	Ꮟ 	si 	  	Ꮠ 	so 	Ꮡ 	su 	Ꮢ 	sv
            [ 'se', 'Ꮞ'],
            [ 'si', 'Ꮟ'],
            [ 'so', 'Ꮠ'],
            [ 'su', 'Ꮡ'],
            [ 'sv', 'Ꮢ'],
            [ 's\'', 'Ꮝ'],
            [ 's\'', 'Ꮝ'],


            [ 'da', 'Ꮣ'], // Ꮣ 	da 	Ꮤ 	ta 	  	Ꮥ 	de 	Ꮦ 	te 	Ꮧ 	di 	Ꮨ 	ti 	Ꮩ 	do 	Ꮪ 	du 	Ꮫ 	dv 
            [ 'ta', 'Ꮤ'],
            [ 'de', 'Ꮥ'],
            [ 'te', 'Ꮦ'],
            [ 'di', 'Ꮧ'],
            [ 'ti', 'Ꮨ'],
            [ 'do', 'Ꮩ'],
            [ 'du', 'Ꮪ'],
            [ 'dv', 'Ꮫ'],

            [ 'dla', 'Ꮬ'], // Ꮬ 	dla 	Ꮭ 	tla 	  	Ꮮ 	tle 	  	Ꮯ 	tli 	  	Ꮰ 	tlo 	Ꮱ 	tlu 	Ꮲ 	tlv 
            [ 'tla', 'Ꮭ'],
            [ 'tle', 'Ꮮ'],
            [ 'tli', 'Ꮯ'],
            [ 'tlo', 'Ꮰ'],
            [ 'tlu', 'Ꮱ'],
            [ 'tlv', 'Ꮲ'],

            [ 'tsa', 'Ꮳ'], // Ꮳ 	tsa 	  	Ꮴ 	tse 	  	Ꮵ 	tsi 	  	Ꮶ 	tso 	Ꮷ 	tsu 	Ꮸ 	tsv
            [ 'tse', 'Ꮴ'],
            [ 'tsi', 'Ꮵ'],
            [ 'tso', 'Ꮶ'],
            [ 'tsu', 'Ꮷ'],
            [ 'tsv', 'Ꮸ'],

            [ 'wa', 'Ꮹ'], // Ꮹ 	wa 	  	Ꮺ 	we 	  	Ꮻ 	wi 	  	Ꮼ 	wo 	Ꮽ 	wu 	Ꮾ 	wv
            [ 'we', 'Ꮺ'],
            [ 'wi', 'Ꮻ'],
            [ 'wo', 'Ꮼ'],
            [ 'wu', 'Ꮽ'],
            [ 'wv', 'Ꮾ'],

            [ 'ya', 'Ꮿ'], // Ꮿ 	ya 	  	Ᏸ 	ye 	  	Ᏹ 	yi 	  	Ᏺ 	yo 	Ᏻ 	yu 	Ᏼ 	yv 
            [ 'ye', 'Ᏸ'],
            [ 'yi', 'Ᏹ'],
            [ 'yo', 'Ᏺ'],
            [ 'yu', 'Ᏻ'],
            [ 'yv', 'Ᏼ'],

            [ 'a', 'Ꭰ'], // Ꭰ 	a 	  	Ꭱ 	e 	  	Ꭲ 	i 	  	Ꭳ 	o 	Ꭴ 	u 	Ꭵ 	v 
            [ 'e', 'Ꭱ'],
            [ 'i', 'Ꭲ'],
            [ 'o', 'Ꭳ'],
            [ 'u', 'Ꭴ'],
            [ 'v', 'Ꭵ'],
            [ '\'a', 'Ꭰ'],
            [ '\'e', 'Ꭱ'],
            [ '\'i', 'Ꭲ'],
            [ '\'o', 'Ꭳ'],
            [ '\'u', 'Ꭴ'],
            [ '\'v', 'Ꭵ'],
            [ 'a\'', 'Ꭰ'],
            [ 'e\'', 'Ꭱ'],
            [ 'i\'', 'Ꭲ'],
            [ 'o\'', 'Ꭳ'],
            [ 'u\'', 'Ꭴ'],
            [ 'v\'', 'Ꭵ']
        ]
	};

	$.ime.register( chr );
}( jQuery ) );
