( function ( $ ) {
	'use strict';

	var mrTransliteration = {
		id: 'mr-transliteration',
		name: 'अक्षरांतरण',
		description: 'Transliteration keyboard for Marathi script',
		date: '2012-10-14',
		author: 'Pathak A B',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 2,
		maxKeyLength: 4,
		patterns: [
			['च्h', 'c', 'च्'], // ch
			['च्h', 'ch', 'छ्'], // chh

			['\\\\\\.', '\\\\', true, '।'], // Danda
			['\\\\([\\u0021-\\u007E])', '\\\\', true, '$1'], // print ASCII characters using \

			['([क-ह]़?)्a', '$1'],
			['([क-ह]़?)्A', '$1ा'],
			['([क-ह]़?)a', '$1ा'],
			['([क-ह]़?)्i', '$1ि'],
			['([क-ह]़?)(्I|िi|ेe)', '$1ी'],
			['([क-ह]़?)्u', '$1ु'],
			['([क-ह]़?)(ुu|्U|ोo)', '$1ू'],
			['([क-ह]़?)्R', '$1ृ'],
			['([क-ह]़?)ृR', '$1ॄ'],
			['([क-ह]़?)्ळ्l', '$1ॢ'],
			['([क-ह]़?)ॢl', '$1ॣ'],
			['([क-ह]़?)े\\^', '$1ॅ'],
			['([क-ह]़?)्e', '$1े'],
			['([क-ह]़?)्E', '$1ॅ'],
			['([क-ह]़?)ो\\^', '$1ॉ'],
			['([क-ह]़?)i', '$1ै'],
			['([क-ह]़?)्o', '$1ो'],
			['([क-ह]़?)्O', '$1ॉ'],
			['([क-ह]़?)u', '$1ौ'],
			['([क-ह])्\\`', '$1़्'],
			['([क-ह])ॉM', '$1ाँ'],

			['आऊM', 'ॐ'], // AUM (OM)

			['(द्न्y|ग्ग्y|ज्ज्n)', 'ज्ञ्'], // dny, ggy or jjn

			['र्र्y', 'ऱ्य्'], // rry
			['र्र्h', 'ऱ्ह्'], // rrh

			['अa', 'आ'],
			['(ऒo|उu)', 'ऊ'],
			['ए\\^', 'ऍ'],
			['अi', 'ऐ'],
			['(अ\\^|E)', 'ॲ'],
			['(इi|एe)', 'ई'],
			['ऒ\\^', 'ऑ'],
			['अu', 'औ'],
			['ऋR', 'ॠ'],
			['ळ्l', 'ऌ'],
			['ऌl', 'ॡ'],
			['ंM', 'ँ'],

			['र्Y', 'ऱ्य्'],

			['क्h', 'ख्'], //kh
			['ग्h', 'घ्'],
			['न्g', 'ङ्'],
			['ज्h', 'झ्'],
			['न्j', 'ञ्'],
			['ट्h', 'ठ्'],
			['ड्h', 'ढ्'],
			['त्h', 'थ्'],
			['द्h', 'ध्'],
			['(f|प्h)', 'फ्'],
			['ब्h', 'भ्'],
			['ऋi', 'ॠ'], // Ri
			['ऋl', 'ॡ'], // Rl

			['स्h', 'श्'],
			['श्h', 'ष्'],
			['क़्h', 'ख़्'],
			['ज़्h', 'ऴ्'],
			['।\\\\', '॥'],

			['a', 'अ'],
			['b', 'ब्'],
			['c', 'च्'],
			['d', 'द्'],
			['e', 'ए'],
			['g', 'ग्'],
			['h', 'ह्'],
			['i', 'इ'],
			['j', 'ज्'],
			['k', 'क्'],
			['l', 'ल्'],
			['m', 'म्'],
			['n', 'न्'],
			['o', 'ओ'],
			['p', 'प्'],
			['q', 'क़्'],
			['r', 'र्'],
			['s', 'स्'],
			['t', 'त्'],
			['u', 'उ'],
			['(v|w)', 'व्'],
			['x', 'क्ष्'],
			['y', 'य्'],
			['(z|Z)', 'झ्'],
			['A', 'आ'],
			['B', 'ब्ब्'],
			['C', 'क्क्'],
			['D', 'ड्'],
			['G', 'ग्ग्'],
			['H', 'ः'],
			['I', 'ई'],
			['J', 'ज्ज्'],
			['K', 'क्क्'],
			['L', 'ळ्'],
			['M', 'ं'],
			['N', 'ण्'],
			['O', 'ऑ'],
			['P', 'प्प्'],
			['R', 'ऋ'],
			['S', 'श्'],
			['T', 'ट्'],
			['U', 'ऊ'],
			['(V|W)', 'व्व्'],
			['X', 'क्ष्'],
			['Y', 'य्य्'],
			['0', '०'],
			['1', '१'],
			['2', '२'],
			['3', '३'],
			['4', '४'],
			['5', '५'],
			['6', '६'],
			['7', '७'],
			['8', '८'],
			['9', '९'],
			['~', '्'],
			['//', 'ऽ'],
			['\\`', '़'],
			['(\u200C)*_', '\u200c']]
	};

	$.ime.register( mrTransliteration );
}( jQuery ) );
