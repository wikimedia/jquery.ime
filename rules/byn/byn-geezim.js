( function ( $ ) {
	'use strict';

	var bynGeezim = {
		id: 'byn-geezim',
		name: 'Blin GeezIM',
		description: 'Blin input method based on GeezIME scheme',
		date: '2017-01-22',
		URL: 'http://type.geezlab.com',
		author: 'Fitsum Gaim, <fitsum@geezlab.com>',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 2,
		patterns: [
			// consonants
			[ 'h', 'ህ' ],
			[ '(l|L)', 'ል' ],
			[ 'H', 'ሕ' ],
			[ '(m|M)', 'ም' ],
			[ '(r|R)', 'ር' ],
			[ 'ስs', 'ሥ' ],
			[ 's', 'ስ' ],
			[ 'S', 'ሽ' ],
			[ 'q', 'ቅ' ],
			[ 'Q', 'ቕ' ],
			[ '(b|B)', 'ብ' ],
			[ '(v|V)', 'ቭ' ],
			[ 't', 'ት' ],
			[ 'c', 'ች' ],
			[ 'ህh', 'ኅ' ],
			[ 'n', 'ን' ],
			[ 'N', 'ኝ' ],
			[ 'k', 'ክ' ],
			[ 'K', 'ኽ' ],
			[ 'w', 'ው' ],
			[ 'z', 'ዝ' ],
			[ 'Z', 'ዥ' ],
			[ '(y|Y)', 'ይ' ],
			[ '(d|D)', 'ድ' ],
			[ '(j|J)', 'ጅ' ],
			[ 'g', 'ግ' ],
			[ 'G', 'ጝ' ], // Blin
			[ 'T', 'ጥ' ],
			[ 'C', 'ጭ' ],
			[ 'P', 'ጵ' ],
			[ '(x|X)', 'ጽ' ],
			[ '(ጽx|ጽX)', 'ፅ' ],
			[ '(f|F)', 'ፍ' ],
			[ 'p', 'ፕ' ],

			// consonant-vowel orders
			[ 'ህe', 'ሀ' ],
			[ 'ህu', 'ሁ' ],
			[ 'ህi', 'ሂ' ],
			[ 'ህa', 'ሃ' ],
			[ '(ሂe|ህE)', 'ሄ' ],
			[ 'ህo', 'ሆ' ],

			[ 'ልe', 'ለ' ],
			[ 'ልu', 'ሉ' ],
			[ 'ልi', 'ሊ' ],
			[ 'ልa', 'ላ' ],
			[ '(ሊe|ልE)', 'ሌ' ],
			[ 'ልo', 'ሎ' ],
			[ 'ሉa', 'ሏ' ], // et

			[ 'ሕe', 'ሐ' ],
			[ 'ሕu', 'ሑ' ],
			[ 'ሕi', 'ሒ' ],
			[ 'ሕa', 'ሓ' ],
			[ '(ሒe|ሕE)', 'ሔ' ],
			[ 'ሕo', 'ሖ' ],
			[ 'ሑa', 'ሗ' ], // et

			[ 'ምe', 'መ' ],
			[ 'ምu', 'ሙ' ],
			[ 'ምi', 'ሚ' ],
			[ 'ምa', 'ማ' ],
			[ '(ሚe|ምE)', 'ሜ' ],
			[ 'ምo', 'ሞ' ],
			[ 'ሙa', 'ሟ' ], // et

			[ 'ርe', 'ረ' ],
			[ 'ርu', 'ሩ' ],
			[ 'ርi', 'ሪ' ],
			[ 'ርa', 'ራ' ],
			[ '(ሪe|ርE)', 'ሬ' ],
			[ 'ርo', 'ሮ' ],
			[ 'ሩa', 'ሯ' ], // et

			[ 'ሥe', 'ሠ' ],
			[ 'ሥu', 'ሡ' ],
			[ 'ሥi', 'ሢ' ],
			[ 'ሥa', 'ሣ' ],
			[ '(ሢe|ሥE)', 'ሤ' ],
			[ 'ሥo', 'ሦ' ],
			[ 'ሡa', 'ሧ' ], // et

			[ 'ስe', 'ሰ' ],
			[ 'ስu', 'ሱ' ],
			[ 'ስi', 'ሲ' ],
			[ 'ስa', 'ሳ' ],
			[ '(ሲe|ስE)', 'ሴ' ],
			[ 'ስo', 'ሶ' ],
			[ 'ሱa', 'ሷ' ], // et

			[ 'ሽe', 'ሸ' ],
			[ 'ሽu', 'ሹ' ],
			[ 'ሽi', 'ሺ' ],
			[ 'ሽa', 'ሻ' ],
			[ '(ሺe|ሽE)', 'ሼ' ],
			[ 'ሽo', 'ሾ' ],
			[ 'ሹa', 'ሿ' ], // et

			[ 'ቅe', 'ቀ' ],
			[ 'ቅu', 'ቁ' ],
			[ 'ቅi', 'ቂ' ],
			[ 'ቅa', 'ቃ' ],
			[ '(ቂe|ቅE)', 'ቄ' ],
			[ 'ቅo', 'ቆ' ],

			[ 'ቁe', 'ቈ' ],
			[ 'ቁi', 'ቊ' ],
			[ 'ቁa', 'ቋ' ],
			[ 'ቊe', 'ቌ' ],
			[ 'ቅW', 'ቍ' ],

			[ 'ቕe', 'ቐ' ],
			[ 'ቕu', 'ቑ' ],
			[ 'ቕi', 'ቒ' ],
			[ 'ቕa', 'ቓ' ],
			[ '(ቒe|ቕE)', 'ቔ' ],
			[ 'ቕo', 'ቖ' ],

			[ 'ቑe', 'ቘ' ],
			[ 'ቑi', 'ቚ' ],
			[ 'ቑa', 'ቛ' ],
			[ 'ቚe', 'ቜ' ],
			[ 'ቕW', 'ቝ' ],

			[ 'ብe', 'በ' ],
			[ 'ብu', 'ቡ' ],
			[ 'ብi', 'ቢ' ],
			[ 'ብa', 'ባ' ],
			[ '(ቢe|ብE)', 'ቤ' ],
			[ 'ብo', 'ቦ' ],
			[ 'ቡa', 'ቧ' ], // et

			[ 'ቭe', 'ቨ' ],
			[ 'ቭu', 'ቩ' ],
			[ 'ቭi', 'ቪ' ],
			[ 'ቭa', 'ቫ' ],
			[ '(ቪe|ቭE)', 'ቬ' ],
			[ 'ቭo', 'ቮ' ],
			[ 'ቩa', 'ቯ' ], // et

			[ 'ትe', 'ተ' ],
			[ 'ትu', 'ቱ' ],
			[ 'ትi', 'ቲ' ],
			[ 'ትa', 'ታ' ],
			[ '(ቲe|ትE)', 'ቴ' ],
			[ 'ትo', 'ቶ' ],
			[ 'ቱa', 'ቷ' ], // et

			[ 'ችe', 'ቸ' ],
			[ 'ችu', 'ቹ' ],
			[ 'ችi', 'ቺ' ],
			[ 'ችa', 'ቻ' ],
			[ '(ቺe|ችE)', 'ቼ' ],
			[ 'ችo', 'ቾ' ],
			[ 'ቹa', 'ቿ' ], // et

			[ 'ኅe', 'ኀ' ],
			[ 'ኅu', 'ኁ' ],
			[ 'ኅi', 'ኂ' ],
			[ 'ኅa', 'ኃ' ],
			[ '(ኂe|ኅE)', 'ኄ' ],
			[ 'ኅo', 'ኆ' ],

			[ 'ኁe', 'ኈ' ],
			[ 'ኈi', 'ኊ' ],
			[ 'ኈa', 'ኋ' ],
			[ 'ኊe', 'ኌ' ],
			[ 'ኅW', 'ኍ' ],

			[ 'ንe', 'ነ' ],
			[ 'ንu', 'ኑ' ],
			[ 'ንi', 'ኒ' ],
			[ 'ንa', 'ና' ],
			[ '(ኒe|ንE)', 'ኔ' ],
			[ 'ንo', 'ኖ' ],
			[ 'ኑa', 'ኗ' ], // et

			[ 'ኝe', 'ኘ' ],
			[ 'ኝu', 'ኙ' ],
			[ 'ኝi', 'ኚ' ],
			[ 'ኝa', 'ኛ' ],
			[ '(ኚe|ኝE)', 'ኜ' ],
			[ 'ኝo', 'ኞ' ],
			[ 'ኙa', 'ኟ' ], // et

			[ 'ክe', 'ከ' ],
			[ 'ክu', 'ኩ' ],
			[ 'ክi', 'ኪ' ],
			[ 'ክa', 'ካ' ],
			[ '(ኪe|ክE)', 'ኬ' ],
			[ 'ክo', 'ኮ' ],

			[ 'ኩe', 'ኰ' ],
			[ 'ኩi', 'ኲ' ],
			[ 'ኩa', 'ኳ' ],
			[ 'ኲe', 'ኴ' ],
			[ 'ክW', 'ኵ' ],

			[ 'ኽe', 'ኸ' ],
			[ 'ኽu', 'ኹ' ],
			[ 'ኽi', 'ኺ' ],
			[ 'ኽa', 'ኻ' ],
			[ '(ኺe|ኽE)', 'ኼ' ],
			[ 'ኽo', 'ኾ' ],

			[ 'ኹe', 'ዀ' ],
			[ 'ኹi', 'ዂ' ],
			[ 'ኹa', 'ዃ' ],
			[ 'ዂe', 'ዄ' ],
			[ 'ኽW', 'ዅ' ],

			[ 'ውe', 'ወ' ],
			[ 'ውu', 'ዉ' ],
			[ 'ውi', 'ዊ' ],
			[ 'ውa', 'ዋ' ],
			[ '(ዊe|ውE)', 'ዌ' ],
			[ 'ውo', 'ዎ' ],

			[ 'ዝe', 'ዘ' ],
			[ 'ዝu', 'ዙ' ],
			[ 'ዝi', 'ዚ' ],
			[ 'ዝa', 'ዛ' ],
			[ '(ዚe|ዝE)', 'ዜ' ],
			[ 'ዝo', 'ዞ' ],
			[ 'ዙa', 'ዟ' ], // et

			[ 'ዥe', 'ዠ' ],
			[ 'ዥu', 'ዡ' ],
			[ 'ዥi', 'ዢ' ],
			[ 'ዥa', 'ዣ' ],
			[ '(ዢe|ዥE)', 'ዤ' ],
			[ 'ዥo', 'ዦ' ],
			[ 'ዡa', 'ዧ' ], // et

			[ 'ይe', 'የ' ],
			[ 'ይu', 'ዩ' ],
			[ 'ይi', 'ዪ' ],
			[ 'ይa', 'ያ' ],
			[ '(ዪe|ይE)', 'ዬ' ],
			[ 'ይo', 'ዮ' ],

			[ 'ድe', 'ደ' ],
			[ 'ድu', 'ዱ' ],
			[ 'ድi', 'ዲ' ],
			[ 'ድa', 'ዳ' ],
			[ '(ዲe|ድE)', 'ዴ' ],
			[ 'ድo', 'ዶ' ],
			[ 'ዱa', 'ዷ' ], // et

			[ 'ጅe', 'ጀ' ],
			[ 'ጅu', 'ጁ' ],
			[ 'ጅi', 'ጂ' ],
			[ 'ጅa', 'ጃ' ],
			[ '(ጂe|ጅE)', 'ጄ' ],
			[ 'ጅo', 'ጆ' ],
			[ 'ጁa', 'ጇ' ], // et

			[ 'ግe', 'ገ' ],
			[ 'ግu', 'ጉ' ],
			[ 'ግi', 'ጊ' ],
			[ 'ግa', 'ጋ' ],
			[ '(ጊe|ግE)', 'ጌ' ],
			[ 'ግo', 'ጎ' ],

			[ 'ጉe', 'ጐ' ],
			[ 'ጉi', 'ጒ' ],
			[ 'ጉa', 'ጓ' ],
			[ 'ጒe', 'ጔ' ],
			[ 'ግW', 'ጕ' ],

			[ 'ጝe', 'ጘ' ],
			[ 'ጝu', 'ጙ' ],
			[ 'ጝi', 'ጚ' ],
			[ 'ጝa', 'ጛ' ],
			[ '(ጚe|ጝE)', 'ጜ' ],
			[ 'ጝo', 'ጞ' ],

			[ 'ጙe', 'ⶓ' ],
			[ 'ጙi', 'ⶔ' ],
			[ 'ጙa', 'ጟ' ],
			[ '(ⶔe|ⶔE)', 'ⶕ' ],
			[ 'ጝW', 'ⶖ' ],

			[ 'ጥe', 'ጠ' ],
			[ 'ጥu', 'ጡ' ],
			[ 'ጥi', 'ጢ' ],
			[ 'ጥa', 'ጣ' ],
			[ '(ጢe|ጥE)', 'ጤ' ],
			[ 'ጥo', 'ጦ' ],
			[ 'ጡa', 'ጧ' ], // et

			[ 'ጭe', 'ጨ' ],
			[ 'ጭu', 'ጩ' ],
			[ 'ጭi', 'ጪ' ],
			[ 'ጭa', 'ጫ' ],
			[ '(ጪe|ጭE)', 'ጬ' ],
			[ 'ጭo', 'ጮ' ],
			[ 'ጩa', 'ጯ' ], // et

			[ 'ጵe', 'ጰ' ],
			[ 'ጵu', 'ጱ' ],
			[ 'ጵi', 'ጲ' ],
			[ 'ጵa', 'ጳ' ],
			[ '(ጲe|ጵE)', 'ጴ' ],
			[ 'ጵo', 'ጶ' ],
			[ 'ጱa', 'ጷ' ],

			[ 'ጽe', 'ጸ' ],
			[ 'ጽu', 'ጹ' ],
			[ 'ጽi', 'ጺ' ],
			[ 'ጽa', 'ጻ' ],
			[ '(ጺe|ጽE)', 'ጼ' ],
			[ 'ጽo', 'ጾ' ],
			[ 'ጹa', 'ጿ' ], // et

			[ 'ፅe', 'ፀ' ],
			[ 'ፅu', 'ፁ' ],
			[ 'ፅi', 'ፂ' ],
			[ 'ፅa', 'ፃ' ],
			[ '(ፂe|ፅE)', 'ፄ' ],
			[ 'ፅo', 'ፆ' ],

			[ 'ፍe', 'ፈ' ],
			[ 'ፍu', 'ፉ' ],
			[ 'ፍi', 'ፊ' ],
			[ 'ፍa', 'ፋ' ],
			[ '(ፈe|ፍE)', 'ፌ' ],
			[ 'ፍo', 'ፎ' ],
			[ 'ፉa', 'ፏ' ], // et

			[ 'ፕe', 'ፐ' ],
			[ 'ፕu', 'ፑ' ],
			[ 'ፕi', 'ፒ' ],
			[ 'ፕa', 'ፓ' ],
			[ '(ፒe|ፕE)', 'ፔ' ],
			[ 'ፕo', 'ፖ' ],
			[ 'ፑa', 'ፗ' ], // et

			[ 'O', 'ዕ' ],
			[ 'ዕe', 'ዐ' ],
			[ 'ዕu', 'ዑ' ],
			[ 'ዕi', 'ዒ' ],
			[ 'ዕa', 'ዓ' ],
			[ '(ዒe|ዕE)', 'ዔ' ],
			[ 'ዕo', 'ዖ' ],

			// vowels
			[ 'A', 'እ' ],
			[ '(እu|u)', 'ኡ' ],
			[ '(እi|i)', 'ኢ' ],
			[ '(እa|a)', 'ኣ' ],
			[ '(ኢe|እE)', 'ኤ' ],
			[ '(እe|e)', 'አ' ],
			[ '(እo|o)', 'ኦ' ],
			[ 'አa', 'ኧ' ], // et

			// punctuations
			[ ',', '፣' ],
			[ '።\\.', '.' ],
			[ '(\\.|፡;)', '።' ],
			[ '\\;', '፡' ],
			[ '\\?\\?', '፧' ],
			[ '፡-', '፦' ],
			[ '።-', '፨' ],
			[ '\\:', '፤' ],

			// Geez Numerals
			[ '1^', '፩' ], // 1
			[ '2^', '፪' ], // 2
			[ '3^', '፫' ], // 3
			[ '4^', '፬' ], // 4
			[ '5^', '፭' ], // 5
			[ '6^', '፮' ], // 6
			[ '7^', '፯' ], // 7
			[ '8^', '፰' ], // 8
			[ '9^', '፱' ], // 9

			[ '፩0', '፲' ], // 10
			[ '፪0', '፳' ], // 20
			[ '፫0', '፴' ], // 30
			[ '፬0', '፵' ], // 40
			[ '፭0', '፶' ], // 50
			[ '፮0', '፷' ], // 60
			[ '፯0', '፸' ], // 70
			[ '፰0', '፹' ], // 80
			[ '፱0', '፺' ], // 90

			[ '፲0', '፻' ], // 100
			[ '፳0', '፪፻' ], // 200
			[ '፴0', '፫፻' ], // 300
			[ '፵0', '፬፻' ], // 400
			[ '፶0', '፭፻' ], // 500
			[ '፷0', '፮፻' ], // 600
			[ '፸0', '፯፻' ], // 700
			[ '፹0', '፰፻' ], // 800
			[ '፺0', '፱፻' ], // 900

			[ '፻0', '፲፻' ], // 1000
			[ '፲፻0', '፼' ] // 10,000
		]
	};

	$.ime.register( bynGeezim );
}( jQuery ) );
