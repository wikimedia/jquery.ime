( function ( $ ) {
	'use strict';

	var baliTransliteration = {
		id: 'ban-transliteration',
		name: 'Bali',
		description: 'Bali transliteration',
		date: '2023-08-15',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/ban-transliteration',
		author: 'Benny Lin',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 3,
		maxKeyLength: 3,
		patterns: [
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],
			// virama + vowel
			[ '᭄(a|A)', '', '' ], // default vowel is a, so remove the virama
			[ '᭄(e|E)', '', 'ᬾ' ], // 1B3E ᬾ Balinese Vowel Sign Taling = e
			[ '᭄(i|I)', '', 'ᬶ' ], // 1B36 ◌ᬶ Balinese Vowel Sign Ulu = i
			[ '᭄(o|O)', '', 'ᭀ' ], // 1B40 ᭀ Balinese Vowel Sign Taling Tedung = o ≡ 1B3E ᬾ 1B35 ᬵ
			[ '᭄(u|U)', '', 'ᬸ' ], // 1B38 ◌ᬸ Balinese Vowel Sign Suku = u	
			[ 'ᬭ᭄x', '', 'ᬋ' ], // 1B0B ᬋ Balinese Letter Ra Repa = vocalic r
			[ 'ᬭ᭄X', '', 'ᬌ' ], // 1B0C ᬌ Balinese Letter Ra Repa Tedung = vocalic rr ≡ 1B0B ᬋ 1B35 ᬵ
			[ '᭄ᬮ᭄(x|X)', '', '᭄ᬮᭂ' ], // normal ᬮᭂ (not La Lenga / ᬍ) when it was preceded by an adeg-adeg
			[ 'ᬮ᭄x', '', 'ᬍ' ], // 1B0D ᬍ Balinese Letter La Lenga = vocalic l
			[ 'ᬮ᭄X', '', 'ᬎ' ], // 1B0E ᬎ Balinese Letter La Lenga Tedung = vocalic ll ≡ 1B0D ᬍ 1B35 ᬵ
			[ '(x|X)', 'l', 'ᬍ' ], // 1B0D ᬍ Balinese Letter La Lenga = vocalic l
			[ '(x|X)', 'L', 'ᬎ' ], // 1B0E ᬎ Balinese Letter La Lenga Tedung = vocalic ll ≡ 1B0D ᬍ 1B35 ᬵ
			[ '(x|X)', 'r', 'ᬋ' ], // 1B0B ᬋ Balinese Letter Ra Repa = vocalic r
			[ '(x|X)', 'R', 'ᬌ' ], // 1B0C ᬌ Balinese Letter Ra Repa Tedung = vocalic rr ≡ 1B0B ᬋ 1B35 ᬵ
			[ '᭄ᬭx', '(r|R)', 'ᭂ' ], // 1B3A ◌ᬺ Balinese Vowel Sign Ra Repa = vocalic r
			[ '᭄ᬭX', '(r|R)', 'ᭂ' ], // 1B3B ᬻ Balinese Vowel Sign Ra Repa Tedung = vocalic rr ≡ 1B3A ◌ᬺ 1B35 ᬵ
			[ '᭄ᬭ(x|X)', '', 'ᭂ' ], // 1B42 ◌ᭂ Balinese Vowel Sign Pepet = ae
			// -ng + vowel
			[ 'ᬂ(a|A)', '', 'ᬗ' ], // -ng + a = nga 1B17 ᬗ Balinese Letter Nga
			[ 'ᬂ(e|E)', '', 'ᬗᬾ' ], // -ng + e = nge
			[ 'ᬂ(i|I)', '', 'ᬗᬶ' ], // -ng + i = ngi
			[ 'ᬂ(o|O)', '', 'ᬗᭀ' ], // -ng + o = ngo
			[ 'ᬂ(u|U)', '', 'ᬗᬸ' ], // -ng + u = ngu
			[ 'ᬂ(x|X)', '', 'ᬗᭂ' ], // -ng + e = ngx (pepet)
			// -r + vowel
			[ 'ᬃ(a|A)', '', 'ᬭ' ], // -r + a = ra 1B2D ᬭ Balinese Letter Ra
			[ 'ᬃ(e|E)', '', 'ᬭᬾ' ], // -r + e = re
			[ 'ᬃ(i|I)', '', 'ᬭᬶ' ], // -r + i = ri
			[ 'ᬃ(o|O)', '', 'ᬭᭀ' ], // -r + o = ro
			[ 'ᬃ(u|U)', '', 'ᬭᬸ' ], // -r + u = ru
			[ 'ᬃx', '', 'ᬋ' ], // 1B0B ᬋ Balinese Letter Ra Repa = vocalic r
			[ 'ᬃX', '', 'ᬌ' ], // 1B0C ᬌ Balinese Letter Ra Repa Tedung = vocalic rr ≡ 1B0B ᬋ 1B35 ᬵ
			// -h + vowel
			[ 'ᬄ(a|A)', '', 'ᬳ' ], // -h + a = ha 1B33 ᬳ Balinese Letter Ha
			[ 'ᬄ(e|E)', '', 'ᬳᬾ' ], // -h + e = he
			[ 'ᬄ(i|I)', '', 'ᬳᬶ' ], // -h + i = hi
			[ 'ᬄ(o|O)', '', 'ᬳᭀ' ], // -h + o = ho
			[ 'ᬄ(u|U)', '', 'ᬳᬸ' ], // -h + u = hu
			[ 'ᬄ(x|X)', '', 'ᬳᭂ' ], // -h + e = hx (pepet)

			// anuswara
			[ 'ᬦ᭄(g|G)', '(a|A|e|E|i|I|o|O|u|U|x|X)n', 'ᬂ' ], // 1B02 ◌ᬂ Balinese Sign Cecek = anusvara

			// https://unicode.org/charts/nameslist/n_1B00.html
			// a,e,i,o,u,x = ha+swara?
			// tha, ttha, tta, dha, ddha, dda, D, T
			// f,v,z,x
			// [ '(ᬓ|ᬔ|ᬕ|ᬖ|ᬗ|ᬘ|ᬙ|ᬚ|ᬛ|ᬜ|ᬝ|ᬞ|ᬟ|ᬠ|ᬡ|ᬢ|ᬣ|ᬤ|ᬥ|ᬦ|ᬧ|ᬨ|ᬩ|ᬪ|ᬫ|ᬬ|ᬭ|ᬮ|ᬯ|ᬰ|ᬱ|ᬲ|ᬳ)(a|A)', '(k|K|g|G|c|C|j|J|t|T|d|D|n|N|p|P|b|B|m|M|y|Y|r|R|l|L|w|W|s|S|z|Z|h|H)(a|A)', '$1ᬵ' ], //1B35 ᬵ Balinese Vowel Sign Tedung = aa
			[ '(ᬓ|ᬔ|ᬕ|ᬖ|ᬗ|ᬘ|ᬙ|ᬚ|ᬛ|ᬜ|ᬝ|ᬞ|ᬟ|ᬠ|ᬡ|ᬢ|ᬣ|ᬤ|ᬥ|ᬦ|ᬧ|ᬨ|ᬩ|ᬪ|ᬫ|ᬬ|ᬭ|ᬮ|ᬯ|ᬰ|ᬱ|ᬲ|ᬳ)(a|A)', '(a|A)', '$1ᬵ' ], //1B35 ᬵ Balinese Vowel Sign Tedung = aa
			[ '(a|A)', '(a|A)', 'ᬆ' ], // 1B06 ᬆ Balinese Letter Akara Tedung = aa ≡ 1B05 ᬅ 1B35 ᬵ
			[ 'a', '', 'ᬳ' ], // 1B33 ᬳ Balinese Letter Ha
			[ 'A', '', 'ᬅ' ], // 1B05 ᬅ Balinese Letter Akara
			[ 'b', '', 'ᬩ᭄' ], // 1B29 ᬩ Balinese Letter Ba
			[ 'B', '', 'ᬪ᭄' ], // 1B2A ᬪ Balinese Letter Ba Kembang = bha
			[ 'c', '', 'ᬘ᭄' ], // 1B18 ᬘ Balinese Letter Ca
			[ 'C', '', 'ᬙ᭄' ], // 1B19 ᬙ Balinese Letter Ca Laca = cha
			[ 'd', '', 'ᬤ᭄' ], // 1B24 ᬤ Balinese Letter Da
			[ 'D', '', '' ], // ?
			[ '(ᬓ|ᬔ|ᬕ|ᬖ|ᬗ|ᬘ|ᬙ|ᬚ|ᬛ|ᬜ|ᬝ|ᬞ|ᬟ|ᬠ|ᬡ|ᬢ|ᬣ|ᬤ|ᬥ|ᬦ|ᬧ|ᬨ|ᬩ|ᬪ|ᬫ|ᬬ|ᬭ|ᬮ|ᬯ|ᬰ|ᬱ|ᬲ|ᬳ)(e|E)', '(a|A)', '$1ᭂ' ], // 1B42 ◌ᭂ Balinese Vowel Sign Pepet = ae
			[ '(ᬓ|ᬔ|ᬕ|ᬖ|ᬗ|ᬘ|ᬙ|ᬚ|ᬛ|ᬜ|ᬝ|ᬞ|ᬟ|ᬠ|ᬡ|ᬢ|ᬣ|ᬤ|ᬥ|ᬦ|ᬧ|ᬨ|ᬩ|ᬪ|ᬫ|ᬬ|ᬭ|ᬮ|ᬯ|ᬰ|ᬱ|ᬲ|ᬳ)(e|E)', '(o|O)', '$1ᭃ' ], // 1B43 ᭃ Balinese Vowel Sign Pepet Tedung = oe ≡ 1B42 ◌ᭂ 1B35 ᬵ
			[ '(e|E)', '(a|A)', 'ᬓᭂ' ], // ha + ae = hae (he [pepet])
			[ '(e|E)', '(o|O)', 'ᬓᭃ' ], // ha + oe = hoe?
			[ 'e', '', 'ᬳᬾ' ], // ha + e = he
			[ 'E', '', 'ᬏ' ], // 1B0F ᬏ Balinese Letter Ekara = e
			[ '(f|F)', '', '᬴' ], // 1B34 ◌᬴ Balinese Sign Rerekan = nukta
			[ 'ᬦ᭄(g|G)', '(n|N)', 'ᬗ᭄' ], // 1B17 ᬗ Balinese Letter Nga
			[ '(g|G)', '(n|N)', 'ᬗ᭄' ], // 1B17 ᬗ Balinese Letter Nga
			[ 'g', '', 'ᬕ᭄' ], // 1B15 ᬕ Balinese Letter Ga
			[ 'G', '', 'ᬖ᭄' ], // 1B16 ᬖ Balinese Letter Ga Gora = gha
			[ '(h|H)', '(a|e|i|o|u|x)', '' ], // 1B04 ᬄ Balinese Sign Bisah = visarga
			[ 'H', '', 'ᬄ' ], // 1B04 ᬄ Balinese Sign Bisah = visarga
			[ 'h', '', 'ᬳ᭄' ], // 1B33 ᬳ Balinese Letter Ha
			[ '(ᬓ|ᬔ|ᬕ|ᬖ|ᬗ|ᬘ|ᬙ|ᬚ|ᬛ|ᬜ|ᬝ|ᬞ|ᬟ|ᬠ|ᬡ|ᬢ|ᬣ|ᬤ|ᬥ|ᬦ|ᬧ|ᬨ|ᬩ|ᬪ|ᬫ|ᬬ|ᬭ|ᬮ|ᬯ|ᬰ|ᬱ|ᬲ|ᬳ)(i|I)', '(a|A)', '$1ᬿ' ], // 1B3F ᬿ Balinese Vowel Sign Taling Repa = ai
			[ '(i|I)', 'a', 'ᬳᬿ' ], // ha + ai = hai
			[ '(i|I)', 'A', 'ᬐ' ], // 1B10 ᬐ Balinese Letter Aikara = ai
			[ '(i|I)', '(i|I)', 'ᬈ' ], // 1B08 ᬈ Balinese Letter Ikara Tedung = ii ≡ 1B07 ᬇ 1B35 ᬵ
			[ 'ᬶ(i|I)', '(i|I)', 'ᬷ' ], // 1B37 ◌ᬷ Balinese Vowel Sign Ulu Sari = ii
			[ '(i|I)', '(i|I)', 'ᬷ' ], // 1B37 ◌ᬷ Balinese Vowel Sign Ulu Sari = ii
			[ '(i|I)', '(a|A)', 'ᬿ' ], // 1B3F ᬿ Balinese Vowel Sign Taling Repa = ai
			[ 'i', '', 'ᬳᬶ' ], // hi
			[ 'I', '', 'ᬇ' ], // 1B07 ᬇ Balinese Letter Ikara = i
			[ 'j', '', 'ᬚ᭄' ], // 1B1A ᬚ Balinese Letter Ja
			[ 'J', '', 'ᬛ᭄' ], // 1B1B ᬛ Balinese Letter Ja Jera = jha
			[ 'k', '', 'ᬓ᭄' ], // 1B13 ᬓ Balinese Letter Ka
			[ 'K', '', 'ᬔ᭄' ], // 1B14 ᬔ Balinese Letter Ka Mahaprana = kha
			[ '(l|L)', '', 'ᬮ᭄' ], // 1B2E ᬮ Balinese Letter La
			[ '(m|M)', '', 'ᬫ᭄' ], // 1B2B ᬫ Balinese Letter Ma
			[ 'n', '', 'ᬦ᭄' ], // 1B26 ᬦ Balinese Letter Na
			[ 'N', '', 'ᬡ᭄' ], // 1B21 ᬡ Balinese Letter Na Rambat = nna
			[ 'o', '', 'ᬳᭀ' ], // ho
			[ 'O', '', 'ᬑ' ], // 1B11 ᬑ Balinese Letter Okara = o
			[ 'p', '', 'ᬧ᭄' ], // 1B27 ᬧ Balinese Letter Pa
			[ 'P', '', 'ᬨ᭄' ], // 1B28 ᬨ Balinese Letter Pa Kapal = pha
			[ '(q|Q)', '', '᭄' ], // 1B44 ᭄ Balinese Adeg Adeg = virama
			[ '(r|R)', '(a|e|i|o|u|x)', 'ᬃ' ], // 1B03 ◌ᬃ Balinese Sign Surang = final r
			[ 'R', '', 'ᬃ' ], // 1B03 ◌ᬃ Balinese Sign Surang = final r
			[ 'r', '', 'ᬭ᭄' ], // 1B2D ᬭ Balinese Letter Ra
			[ 's', '', 'ᬲ᭄' ], // 1B32 ᬲ Balinese Letter Sa
			[ 'S', '', 'ᬰ᭄' ], // 1B30 ᬰ Balinese Letter Sa Saga = sha
			[ 't', '', 'ᬢ᭄' ], // 1B22 ᬢ Balinese Letter Ta
			[ 'T', '', '' ], // ?
			[ '(ᬓ|ᬔ|ᬕ|ᬖ|ᬗ|ᬘ|ᬙ|ᬚ|ᬛ|ᬜ|ᬝ|ᬞ|ᬟ|ᬠ|ᬡ|ᬢ|ᬣ|ᬤ|ᬥ|ᬦ|ᬧ|ᬨ|ᬩ|ᬪ|ᬫ|ᬬ|ᬭ|ᬮ|ᬯ|ᬰ|ᬱ|ᬲ|ᬳ)(u|U)', '(a|A)', '$1ᭁ' ], // 1B41 ᭁ Balinese Vowel Sign Taling Repa Tedung = au ≡ 1B3F ᬿ 1B35 ᬵ
			[ '(u|U)', 'a', 'ᬳᭁ' ], // ha + au = hau
			[ '(u|U)', 'A', 'ᬒ' ], // 1B12 ᬒ Balinese Letter Okara Tedung = au ≡ 1B11 ᬑ 1B35 ᬵ
			[ '(u|U)', '(u|U)', 'ᬊ' ], // 1B0A ᬊ Balinese Letter Ukara Tedung = uu ≡ 1B09 ᬉ 1B35 ᬵ
			[ 'ᬸ(u|U)', '(u|U)', 'ᬹ' ], // 1B39 ◌ᬹ Balinese Vowel Sign Suku Ilut = uu
			[ '(u|U)', '(u|U)', 'ᬹ' ], // 1B39 ◌ᬹ Balinese Vowel Sign Suku Ilut = uu
			[ '(u|U)', '(a|A)', 'ᭁ' ], // 1B41 ᭁ Balinese Vowel Sign Taling Repa Tedung = au ≡ 1B3F ᬿ 1B35 ᬵ
			[ 'u', '', 'ᬳᬸ' ], // hu
			[ 'U', '', 'ᬉ' ], // 1B09 ᬉ Balinese Letter Ukara = u
			[ 'v', '', 'ᬀ' ], // 1B00 ◌ᬀ Balinese Sign Ulu Ricem = ardhacandra
			[ 'V', '', 'ᬁ' ], // 1B01 ◌ᬁ Balinese Sign Ulu Candra = candrabindu
			[ '(w|W)', '', 'ᬯ᭄' ], // 1B2F ᬯ Balinese Letter Wa
			[ '(x|X)', '', 'ᬳᭂ' ], // hx (pepet)
			[ 'ᬦ᭄(y|Y)', '(n|N)', 'ᬜ᭄' ], // 1B1C ᬜ Balinese Letter Nya
			[ '(y|Y)', '(n|N)', 'ᬜ᭄' ], // 1B1C ᬜ Balinese Letter Nya
			[ '(y|Y)', '', 'ᬬ᭄' ], // 1B2C ᬬ Balinese Letter Ya
			[ '(z|Z)', '', 'ᬱ᭄' ], // 1B31 ᬱ Balinese Letter Sa Sapa = ssa

			[ '0', '', '᭐' ], // 1B50 ᭐ Balinese Digit Zero
			[ '1', '', '᭑' ], // 1B51 ᭑ Balinese Digit One
			[ '2', '', '᭒' ], // 1B52 ᭒ Balinese Digit Two
			[ '3', '', '᭓' ], // 1B53 ᭓ Balinese Digit Three
			[ '4', '', '᭔' ], // 1B54 ᭔ Balinese Digit Four
			[ '5', '', '᭕' ], // 1B55 ᭕ Balinese Digit Five
			[ '6', '', '᭖' ], // 1B56 ᭖ Balinese Digit Six
			[ '7', '', '᭗' ], // 1B57 ᭗ Balinese Digit Seven
			[ '8', '', '᭘' ], // 1B58 ᭘ Balinese Digit Eight
			[ '9', '', '᭙' ], // 1B59 ᭙ Balinese Digit Nine
			[ ';', '', '᭝' ], // 1B5D ᭝ Balinese Carik Pamungkah = colon
			[ ',', '', '᭞' ], // 1B5E ᭞ Balinese Carik Siki = danda
			[ '.', '', '᭟' ], // 1B5F ᭟ Balinese Carik Pareren = double danda
			[ '-', '', '᭠' ] // 1B60 ᭠ Balinese Pameneng = line-breaking hyphen
		]
	};

	$.ime.register( baliTransliteration );
}( jQuery ) );
