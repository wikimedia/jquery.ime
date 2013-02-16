( function ( $ ) {
'use strict';

var orLekhani = {
id: 'or-lekhani',
name: 'Odia Lekhani',
description: 'Odia Lekhani phonetic input method',
date: '2012-10-14',
URL: 'http://github.com/wikimedia/jquery.ime',
author: 'Junaid P V and Subhashish Panigrahi',
license: 'GPLv3',
version: '1.0',
contextLength: 4,
maxKeyLength: 2,
patterns: [
['\\\\([A-Za-z\\>_~\\.0-9])', '\\\\','$1'],

['([(କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍ଜ])a', '$1ା'],
['([(କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍ଜ])(ାi)', '$1ାଇ'], //ai separate
['([କ-ଳଲନ୍ଧଥଡ଼ଢ଼ହୟୱରକ୍ଷଶସଷଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍ଜ])i', '$1\u0b3f'],
['([କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍])I', '$1ୀ'],
['([କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍])u', '$1\u0b41'],
['([କ-ହୟୱ])(U|\u0b41u)', '$1\u0b42'],
['([କ-ହୟୱ])R', '$1\u0b43'],
['([କ-ହୟୱ])\u0b43R', '$1\u0b44'],
['([କ-ହୟୱ])୍ଳ୍l', '$1ୢ'],
['([କ-ହୟୱ])ୢl', '$1ୣ'],
['([କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍])e', '$1େ'],
['([କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍])ାi', '$1ୈ'],
['([କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍])o', '$1ୋ'],
['([କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍])(ou)', '$1ୌ'], //au
['([କ-ହୟୱଡ଼ଢ଼ଙ୍କଙ୍ଖଙ୍ଗଙ୍ଘଞ୍ଚଞ୍ଛଞ୍ଝଣ୍ଟଣ୍ଠଣ୍ଡଣ୍ଢନ୍ତନ୍ଥନ୍ଦନ୍ଧମ୍ପମ୍ଫମ୍ବମ୍ଭଞ୍])(ଔ|ୋu)', '$1ୌ'], 
['([କ-ହୟୱ])E', '$1\u0B48'],
['([କ-ହୟୱ])(w)', '$1୍ୱ'],
['([କ-ହୟୱ])~', '$1\u200C'],
['([କ-ହୟୱ])V', '$1ର୍'], //ref

['([କ-ହଯୟୱ])y', '$1୍ୟ'], // <consonant>y


['f', '୍'], // halanta
['\\.', '।'], //purnacheda
['ଅa', 'ଆ'],
['(ଅi|ଏe)', 'ଐ'],
['(ଅu|ଓo|ଓO)', 'ଔ'],
['ଋR', 'ୠ'], // RR
['ଣN', 'ଣ୍ଣ'], // NNa
['ଳl', 'ଌ'], // Ll
['ଌl', 'ୡ'], // Lll
['ଞ୍ଚh', 'ଞ୍ଛ'],    // nch
['ଞ୍ଜh', 'ଞ୍ଝ'], // njh
['ଙ୍କh', 'ଙ୍ଖ'], // nkh
['ଙ୍ଗh', 'ଙ୍ଘ'],	// ngh
['ମ୍ବh', 'ମ୍ଭ'], // mbh or nbhDai
['ଜ୍ଜh', 'ଜ୍ଝ'], // jjh
['ଚ୍ଚh', 'ଚ୍ଛ'], // cch

['ଣG', 'ଙ'],	// NG
['ଣg', 'ଞ'],	// Ng
['କh', 'ଖ'], // kh
['ଗh', 'ଘ'], // gh
['ନc', 'ଞ୍ଚ'],	// nc
['ନg', 'ଙ୍ଗ'],	// ng
['ଚh', 'ଛ'], // ch
['C', 'ଛ'], // ch
['ଜh', 'ଝ'], // jh
['ନj', 'ଞ୍ଜ'],	// nj
['ନk', 'ଙ୍କ'],	// nk
['ନd', 'ନ୍ଦ'],	// nd
['ନD|ଣD', 'ଣ୍ଡ'], // nd
['(ନDh|ଣDH|ଣDh)', 'ଣ୍ଢ'],	//ndh
['ନdh', 'ନ୍ଧ'],	// ndh
['([ଷ])T', '$1୍ଟ'],	// ST
['(ଟh|ଟH)', 'ଠ'], // Th
['ଡh', 'ଢ'], // Dh
['ତh', 'ଥ'], // th
['ଦh', 'ଧ'], // dh
['(F|ପh|P)', 'ଫ'], // ph or f
['ବh', 'ଭ'], // bh

['(ମb|ନb)', 'ମ୍ବ'], // mb or nb
['(ଣT|ନT)', 'ଣ୍ଟ'], // NT
['(ଣTh|ଣTh|ନTh|ନTH)', 'ଣ୍ଠ'], // NTh
['([ସ|ଷ|ମ])p', '$1୍ପ'],	// sp/shp
['shp', 'ଷ୍ପ'], // sp
['ଂM', 'ଁ'], // MM

['କk', 'କ୍କ'], // kk
['ଗg', 'ଗ୍ଗ'], // gg
['ଚc', 'ଚ୍ଚ'], // cc
['ଜj', 'ଜ୍ଜ'], // jj
['ଦd', 'ଦ୍ଦ'], // dd
['ଟT', 'ଟ୍ଟ'], // TT
['ଡD', 'ଡ୍ଡ'], // DD
['ତt', 'ତ୍ତ'], // tt
['ଲl', 'ଲ୍ଲ'], // ll
['ପp', 'ପ୍ପ'], //pp
[ '_', '\u200c' ],
[ 'z', '\u200c' ],


['ଆ\\\\', '\u0B3E'], // aa sign
['ଇ\\\\', '\u0B3F'], // i sign
['ଈ\\\\', '\u0B40'],// I sign
['ଉ\\\\', '\u0B41'], // u sign
['ଉ\\\\', '\u0B42'], // U sign
['ଋ\\\\', '\u0B43'], // R sign
['ୠ\\\\', '\u0B44'], // RR sign
['ଌ\\\\', '\u0B62'], // L sign
['ୡ\\\\', '\u0B63'], // LL sign
['ଏ\\\\', '\u0B47'], // e sign
['ଐ\\\\', '\u0B48'], // ai sign
['ଓ\\\\', '\u0B4B'], // o sign
['ଔ\\\\', '\u0B4C'], // au sign

['\u200c?a', 'ଅ'], //a
['b', 'ବ'], //ba
['c','','ଚ'], //ca
['d', 'ଦ'], //da
['\u200c?e', 'ଏ'], //e
['g', 'ଗ'], //ga
['G', 'ଘ'], //gha
['h', 'ହ'], //ha
['\u200c?i', 'ଇ'], //i
['j', 'ଜ'], //ja
['k', 'କ'], //ka
['l', 'ଲ'], //la
['m', 'ମ'], //ma
['n', 'ନ'], //ma
['\u200c?o', 'ଓ'],//o
['p', 'ପ'], //pa
['v', 'ଭ'], //bha
['q', 'ଡ଼'],//Da
['r', 'ର'], //ra
['s', 'ସ'], //ra
['t', 'ତ'], //ta
['\u200c?u', 'ଉ'], //U
['(w|W)', 'ୱ'], //wa
['ntu', 'ନ୍ତୁ'], //ntu

['x', 'କ୍ଷ'], //khsya
['[Y]', 'ୟ'], //ya
['[y]', 'ଯ'], //ja- antastha
['\u200c?A', 'ଆ'],
['B', 'ବ'], //ba
['C', 'ଛ'], //cha
['D', 'ଡ'], //Da
['\u200c?E', 'ଐ'], //ai
['F', 'ଫ'], //pha
['G', 'ଗ'], //ga
['H', 'ଃ'], //bisarga
['\u200c?I', 'ଈ'],
['J', 'ଯ'], //ja -antasta
['K', 'ଖ'], //kha
['L', 'ଳ'], //La
['M', 'ଂ'], //anuswara
['N', 'ଣ'], //Na
['\u200c?O', 'ଔ'], //au
['P', 'ଫ'], //pha
['Q', 'ଢ଼'],//Da with dot
['R', 'ଋ'], //Ru
['S', 'ଶ'], //sha - talabya
['S୍ହ', 'ଶ'], //sha - talabya
['T', 'ଟ'], //Ta
['\u200c?U', 'ଊ'], //U - dirgha
['X', 'ଷ'], //sha - murdhanya
['Z', 'ଜ୍ଞ'],//gyan
['//', '୍ର'], //ra kara

['0', '୦'],
['1', '୧'],
['2', '୨'],
['3', '୩'],
['4', '୪'],
['5', '୫'],
['6', '୬'],
['7', '୭'],
['8', '୮'],
['9', '୯']]
};
$.ime.register( orLekhani );

}( jQuery ) );
