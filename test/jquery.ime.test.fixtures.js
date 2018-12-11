// Variables for Cyrillic with palochka transliteration tests.
// All the characters are very similar in appearance,
// so it's better to give them names to avoid confusion.
var palochkaVariants = {
		palochka: 'Ӏ',
		latinSmallL: 'l',
		latinCapitalI: 'I',
		ukrainianCapitalI: 'І',
		digitOne: '1'
	},
	/*jshint unused:false */
	testFixtures = [
	{
		description: 'Blin GeezIM test',
		tests: [
			{ input: 'hie', output: 'ሄ', description: 'Blin hie -> ሄ' },
			{ input: 'lie', output: 'ሌ', description: 'Blin lie -> ሌ' },
			{ input: 'Hie', output: 'ሔ', description: 'Blin Hie -> ሔ' },
			{ input: 'mie', output: 'ሜ', description: 'Blin Hie -> ሜ' },
			{ input: 'arAaya', output: 'ኣርኣያ', description: 'Blin arAaya -> ኣርኣያ' },
			{ input: 'gua', output: 'ጓ', description: 'Blin gua -> ጓ' },
			{ input: 'gue', output: 'ጐ', description: 'Blin gue -> ጐ' },
			{ input: 'gui', output: 'ጒ', description: 'Blin gui -> ጒ' },
			{ input: 'guie', output: 'ጔ', description: 'Blin guie -> ጔ' },
			{ input: 'gW', output: 'ጕ', description: 'Blin gW -> ጕ' },
			{ input: 'Gui', output: 'ⶔ', description: 'Blin Gui -> ⶔ' },
			{ input: 'Guie', output: 'ⶕ', description: 'Blin Guie -> ⶕ' },
			{ input: 'GW', output: 'ⶖ', description: 'Blin GW -> ⶖ' },
			{ input: '.', output: '።', description: 'Blin . -> ።' },
			{ input: '..', output: '.', description: 'Blin .. -> .' },
			{ input: '.-', output: '፨', description: 'Blin .- -> ፨' },
			{ input: ';;', output: '።', description: 'Blin ;; -> ።' },
			{ input: 'Ge', output: 'ጘ', description: 'Blin Ge -> ጘ' },
			{ input: 'Gi', output: 'ጚ', description: 'Blin Gi -> ጚ' }
		],
		inputmethod: 'byn-geezim'
	},
	{
		description: 'Tigre GeezIM test',
		tests: [
			{ input: 'hie', output: 'ሄ', description: 'Tigre hie -> ሄ' },
			{ input: 'lie', output: 'ሌ', description: 'Tigre lie -> ሌ' },
			{ input: 'Hie', output: 'ሔ', description: 'Tigre Hie -> ሔ' },
			{ input: 'mie', output: 'ሜ', description: 'Tigre Hie -> ሜ' },
			{ input: 'arAaya', output: 'ኣርኣያ', description: 'Tigre arAaya -> ኣርኣያ' },
			{ input: 'gua', output: 'ጓ', description: 'Tigre gua -> ጓ' },
			{ input: 'gue', output: 'ጐ', description: 'Tigre gue -> ጐ' },
			{ input: 'gui', output: 'ጒ', description: 'Tigre gui -> ጒ' },
			{ input: 'guie', output: 'ጔ', description: 'Tigre guie -> ጔ' },
			{ input: 'gW', output: 'ጕ', description: 'Tigre gW -> ጕ' },
			{ input: 'Gui', output: 'ⶔ', description: 'Tigre Gui -> ⶔ' },
			{ input: 'Guie', output: 'ⶕ', description: 'Tigre Guie -> ⶕ' },
			{ input: 'GW', output: 'ⶖ', description: 'Tigre GW -> ⶖ' },
			{ input: '.', output: '።', description: 'Tigre . -> ።' },
			{ input: '..', output: '.', description: 'Tigre .. -> .' },
			{ input: '.-', output: '፨', description: 'Tigre .- -> ፨' },
			{ input: ';;', output: '።', description: 'Tigre ;; -> ።' }
		],
		inputmethod: 'tig-geezim'
	},
	{
		description: 'Tigrinya GeezIM test',
		tests: [
			{ input: 'hie', output: 'ሄ', description: 'Tigrinya hie -> ሄ' },
			{ input: 'lie', output: 'ሌ', description: 'Tigrinya lie -> ሌ' },
			{ input: 'Hie', output: 'ሔ', description: 'Tigrinya Hie -> ሔ' },
			{ input: 'mie', output: 'ሜ', description: 'Tigrinya Hie -> ሜ' },
			{ input: 'arAaya', output: 'ኣርኣያ', description: 'Tigrinya arAaya -> ኣርኣያ' },
			{ input: 'gua', output: 'ጓ', description: 'Tigrinya gua -> ጓ' },
			{ input: 'gue', output: 'ጐ', description: 'Tigrinya gue -> ጐ' },
			{ input: 'gui', output: 'ጒ', description: 'Tigrinya gui -> ጒ' },
			{ input: 'guie', output: 'ጔ', description: 'Tigrinya guie -> ጔ' },
			{ input: 'gW', output: 'ጕ', description: 'Tigrinya gW -> ጕ' },
			{ input: 'Gui', output: 'ⶔ', description: 'Tigrinya Gui -> ⶔ' },
			{ input: 'Guie', output: 'ⶕ', description: 'Tigrinya Guie -> ⶕ' },
			{ input: 'GW', output: 'ⶖ', description: 'Tigrinya GW -> ⶖ' },
			{ input: '.', output: '።', description: 'Tigrinya . -> ።' },
			{ input: '..', output: '.', description: 'Tigrinya .. -> .' },
			{ input: '.-', output: '፨', description: 'Tigrinya .- -> ፨' },
			{ input: ';;', output: '።', description: 'Tigrinya ;; -> ።' }
		],
		inputmethod: 'ti-geezim'
	},
	{
		description: 'Amharic Transliteration test',
		tests: [
			{ input: 'k', output: 'ክ', description: 'Amharic k -> ክ' },
			{ input: 'N', output: 'ኝ', description: 'Amharic N -> ኝ' },
			{ input: 'neNu', output: 'ነኙ', description: 'Amharic neNu -> ነኙ' },
			{ input: 'Nu', output: 'ኙ', description: 'Amharic Nu -> ኙ' },
			{ input: 'cika', output: 'ቺካ', description: 'Amharic cika -> ቺካ' },
			{ input: '<<', output: '«', description: 'Amharic << -> «' },
			{ input: 'vee', output: 'ቬ', description: 'Amharic vee -> ቬ' },
			{ input: 'vE', output: 'ቬ', description: 'Amharic vE -> ቬ' },
			{ input: 'Vee', output: 'ቬ', description: 'Amharic Vee -> ቬ' },
			{ input: 'VE::', output: 'ቬ።', description: 'Amharic VE:: -> ቬ።' },
			{ input: 'to', output: 'ቶ', description: 'Amharic to -> ቶ' },
			{ input: 'dW', output: 'ዷ', description: 'Amharic dW -> ዷ' },
			{ input: 'ss', output: 'ሥ', description: 'Amharic ss -> ሥ' },
			{ input: 'gWi', output: 'ጒ', description: 'Amharic gWi -> ጒ' },
			{ input: 'hhW', output: 'ኋ', description: 'Amharic hhW -> ኋ' },
			{ input: 'FY', output: 'ፚ', description: 'Amharic FY -> ፚ' },
			{ input: '5', output: '፭', description: 'Amharic 5 -> ፭' },
			{ input: '60', output: '፷', description: 'Amharic 60 -> ፷' },
			{ input: '3005', output: '፫፻፭', description: 'Amharic 3005 -> ፫፻፭' },
			{ input: 'aa.m.', output: 'ዓ.ም.', description: 'Amharic aa.m. -> ዓ.ም.' },
			{ input: 'ea', output: 'ኧ', description: 'Amharic ea -> ኧ' }
		],
		inputmethod: 'am-transliteration'
	},
	{
		description: 'South Azerbaijani Keyboard test',
		tests: [
			{ input: '`',  output: '\u200d', description: 'South Azerbaijani Keyboard Layout: ` -> \u200d' },
			{ input: '1',  output: '۱', description: 'South Azerbaijani Keyboard Layout: 1 -> ۱' },
			{ input: '2',  output: '۲', description: 'South Azerbaijani Keyboard Layout: 2 -> ۲' },
			{ input: '3',  output: '۳', description: 'South Azerbaijani Keyboard Layout: 3 -> ۳' },
			{ input: '4',  output: '۴', description: 'South Azerbaijani Keyboard Layout: 4 -> ۴' },
			{ input: '5',  output: '۵', description: 'South Azerbaijani Keyboard Layout: 5 -> ۵' },
			{ input: '6',  output: '۶', description: 'South Azerbaijani Keyboard Layout: 6 -> ۶' },
			{ input: '7',  output: '۷', description: 'South Azerbaijani Keyboard Layout: 7 -> ۷' },
			{ input: '8',  output: '۸', description: 'South Azerbaijani Keyboard Layout: 8 -> ۸' },
			{ input: '9',  output: '۹', description: 'South Azerbaijani Keyboard Layout: 9 -> ۹' },
			{ input: '0',  output: '۰', description: 'South Azerbaijani Keyboard Layout: 0 -> ۰' },
			{ input: 'q',  output: 'ض', description: 'South Azerbaijani Keyboard Layout: q -> ض' },
			{ input: 'w',  output: 'ص', description: 'South Azerbaijani Keyboard Layout: w -> ص' },
			{ input: 'e',  output: 'ث', description: 'South Azerbaijani Keyboard Layout: e -> ث' },
			{ input: 'r',  output: 'ق', description: 'South Azerbaijani Keyboard Layout: r -> ق' },
			{ input: 't',  output: 'ف', description: 'South Azerbaijani Keyboard Layout: t -> ف' },
			{ input: 'y',  output: 'غ', description: 'South Azerbaijani Keyboard Layout: y -> غ' },
			{ input: 'u',  output: 'ع', description: 'South Azerbaijani Keyboard Layout: u -> ع' },
			{ input: 'i',  output: 'ه', description: 'South Azerbaijani Keyboard Layout: i -> ه' },
			{ input: 'o',  output: 'خ', description: 'South Azerbaijani Keyboard Layout: o -> خ' },
			{ input: 'p',  output: 'ح', description: 'South Azerbaijani Keyboard Layout: p -> ح' },
			{ input: '[',  output: 'ج', description: 'South Azerbaijani Keyboard Layout: [ -> ج' },
			{ input: ']',  output: 'چ', description: 'South Azerbaijani Keyboard Layout: ] -> چ' },
			{ input: 'a',  output: 'ش', description: 'South Azerbaijani Keyboard Layout: a -> ش' },
			{ input: 's',  output: 'س', description: 'South Azerbaijani Keyboard Layout: s -> س' },
			{ input: 'd',  output: 'ی', description: 'South Azerbaijani Keyboard Layout: d -> ی' },
			{ input: 'f',  output: 'ب', description: 'South Azerbaijani Keyboard Layout: f -> ب' },
			{ input: 'g',  output: 'ل', description: 'South Azerbaijani Keyboard Layout: g -> ل' },
			{ input: 'h',  output: 'ا', description: 'South Azerbaijani Keyboard Layout: h -> ا' },
			{ input: 'j',  output: 'ت', description: 'South Azerbaijani Keyboard Layout: j -> ت' },
			{ input: 'k',  output: 'ن', description: 'South Azerbaijani Keyboard Layout: k -> ن' },
			{ input: 'l',  output: 'م', description: 'South Azerbaijani Keyboard Layout: l -> م' },
			{ input: ';',  output: 'ک', description: 'South Azerbaijani Keyboard Layout: ; -> ک' },
			{ input: 'z',  output: 'ظ', description: 'South Azerbaijani Keyboard Layout: z -> ظ' },
			{ input: 'x',  output: 'ط', description: 'South Azerbaijani Keyboard Layout: x -> ط' },
			{ input: 'c',  output: 'ز', description: 'South Azerbaijani Keyboard Layout: c -> ز' },
			{ input: 'v',  output: 'ر', description: 'South Azerbaijani Keyboard Layout: v -> ر' },
			{ input: 'b',  output: 'ذ', description: 'South Azerbaijani Keyboard Layout: b -> ذ' },
			{ input: 'n',  output: 'د', description: 'South Azerbaijani Keyboard Layout: n -> د' },
			{ input: 'm',  output: 'پ', description: 'South Azerbaijani Keyboard Layout: m -> پ' },
			{ input: ',',  output: 'و', description: 'South Azerbaijani Keyboard Layout: , -> و' },
			{ input: '~',  output: '\u200c', description: 'South Azerbaijani Keyboard Layout: ~ -> \u200c' },
			{ input: '@',  output: '٬', description: 'South Azerbaijani Keyboard Layout: @ -> ٬' },
			{ input: '#',  output: '٫', description: 'South Azerbaijani Keyboard Layout: # -> ٫' },
			{ input: '%',  output: '٪', description: 'South Azerbaijani Keyboard Layout: % -> ٪' },
			{ input: '^',  output: '×', description: 'South Azerbaijani Keyboard Layout: ^ -> ×' },
			{ input: '&',  output: '،', description: 'South Azerbaijani Keyboard Layout: & -> ،' },
			{ input: '(',  output: ')', description: 'South Azerbaijani Keyboard Layout: ( -> )' },
			{ input: ')',  output: '(', description: 'South Azerbaijani Keyboard Layout: ) -> (' },
			{ input: '_',  output: 'ـ', description: 'South Azerbaijani Keyboard Layout: _ -> ـ' },
			{ input: 'Q',  output: 'ۇ', description: 'South Azerbaijani Keyboard Layout: Q -> ۇ' },
			{ input: 'W',  output: 'ۆ', description: 'South Azerbaijani Keyboard Layout: W -> ۆ' },
			{ input: 'E',  output: 'وْ', description: 'South Azerbaijani Keyboard Layout: E -> وْ' },
			{ input: 'R',  output: 'ً', description: 'South Azerbaijani Keyboard Layout: R -> ً' },
			{ input: 'T',  output: 'ُ', description: 'South Azerbaijani Keyboard Layout: T -> ُ' },
			{ input: 'Y',  output: 'ِ', description: 'South Azerbaijani Keyboard Layout: Y -> ِ' },
			{ input: 'U',  output: 'َ', description: 'South Azerbaijani Keyboard Layout: U -> َ' },
			{ input: 'I',  output: 'ّ', description: 'South Azerbaijani Keyboard Layout: I -> ّ' },
			{ input: 'O',  output: ']', description: 'South Azerbaijani Keyboard Layout: O -> ]' },
			{ input: 'P',  output: '[', description: 'South Azerbaijani Keyboard Layout: P -> [' },
			{ input: '{',  output: '}', description: 'South Azerbaijani Keyboard Layout: { -> }' },
			{ input: '}',  output: '{', description: 'South Azerbaijani Keyboard Layout: } -> {' },
			{ input: 'A',  output: 'ؤ', description: 'South Azerbaijani Keyboard Layout: A -> ؤ' },
			{ input: 'S',  output: 'ئ', description: 'South Azerbaijani Keyboard Layout: S -> ئ' },
			{ input: 'D',  output: 'ؽ', description: 'South Azerbaijani Keyboard Layout: D -> ؽ' },
			{ input: 'F',  output: 'إ', description: 'South Azerbaijani Keyboard Layout: F -> إ' },
			{ input: 'G',  output: 'أ', description: 'South Azerbaijani Keyboard Layout: G -> أ' },
			{ input: 'H',  output: 'آ', description: 'South Azerbaijani Keyboard Layout: H -> آ' },
			{ input: 'J',  output: 'ة', description: 'South Azerbaijani Keyboard Layout: J -> ة' },
			{ input: 'K',  output: '»', description: 'South Azerbaijani Keyboard Layout: K -> »' },
			{ input: 'L',  output: '«', description: 'South Azerbaijani Keyboard Layout: L -> «' },
			{ input: '"',  output: '؛', description: 'South Azerbaijani Keyboard Layout: " -> ؛' },
			{ input: 'Z',  output: 'ك', description: 'South Azerbaijani Keyboard Layout: Z -> ك' },
			{ input: 'X',  output: 'ط', description: 'South Azerbaijani Keyboard Layout: X -> ط' },
			{ input: 'C',  output: 'ژ', description: 'South Azerbaijani Keyboard Layout: C -> ژ' },
			{ input: 'V',  output: 'ٰ', description: 'South Azerbaijani Keyboard Layout: V -> ٰ' },
			{ input: 'B',  output: 'ڭ', description: 'South Azerbaijani Keyboard Layout: B -> ڭ' },
			{ input: 'N',  output: 'ٔ', description: 'South Azerbaijani Keyboard Layout: N -> ٔ' },
			{ input: 'M',  output: 'ء', description: 'South Azerbaijani Keyboard Layout: M -> ء' },
			{ input: '<',  output: '>', description: 'South Azerbaijani Keyboard Layout: < -> >' },
			{ input: '>',  output: '<', description: 'South Azerbaijani Keyboard Layout: > -> <' },
			{ input: '?',  output: '؟', description: 'South Azerbaijani Keyboard Layout: ? -> ؟' }
		],
		inputmethod: 'azb-kbd'
	},{
		description: 'Belarusian transliteration test',
		tests: [
			{ input: '[];\',.`', output: 'х\'жэбюё', description: 'Belarusian transliteration - [];\',.` -> х\'жэбюё' },
			{ input: '{}:"<>~', output: 'Х\'ЖЭБЮЁ', description: 'Belarusian transliteration - {}:"<>~ -> Х\'ЖЭБЮЁ' }
		],
		inputmethod: 'be-transliteration'
	},{
		description: 'Belarusian Łacinka test',
		tests: [
			{ input: '=c', output: 'č', description: 'Belarusian Łacinka - =c -> č' },
			{ input: '-n', output: 'ń', description: 'Belarusian Łacinka - -n -> ń' },
			{ input: '=u', output: 'ŭ', description: 'Belarusian Łacinka - =u -> ŭ' },
			{ input: '-l', output: 'ł', description: 'Belarusian Łacinka - -l -> ł' }
		],
		inputmethod: 'be-latin'
	},{
		description: 'Western Baluchi Keyboard test',
		tests: [
			{ input: '`',  output: '\u200c', description: 'Western Baluchi Keyboard Layout: ` -> \\u200c' },
			{ input: '1',  output: '۱', description: 'Western Baluchi Keyboard Layout: 1 -> ١' },
			{ input: '2',  output: '۲', description: 'Western Baluchi Keyboard Layout: 2 -> ٢' },
			{ input: '3',  output: '۳', description: 'Western Baluchi Keyboard Layout: 3 -> ٣' },
			{ input: '4',  output: '۴', description: 'Western Baluchi Keyboard Layout: 4 -> ۴' },
			{ input: '5',  output: '۵', description: 'Western Baluchi Keyboard Layout: 5 -> ۵' },
			{ input: '6',  output: '۶', description: 'Western Baluchi Keyboard Layout: 6 -> ۶' },
			{ input: '7',  output: '۷', description: 'Western Baluchi Keyboard Layout: 7 -> ۷' },
			{ input: '8',  output: '۸', description: 'Western Baluchi Keyboard Layout: 8 -> ۸' },
			{ input: '9',  output: '۹', description: 'Western Baluchi Keyboard Layout: 9 -> ۹' },
			{ input: '0',  output: '۰', description: 'Western Baluchi Keyboard Layout: 0 -> ۰' },

			{ input: 'q',  output: 'ض', description: 'Western Baluchi Keyboard Layout: q -> ض' },
			{ input: 'w',  output: 'ص', description: 'Western Baluchi Keyboard Layout: w -> ص' },
			{ input: 'e',  output: 'ث', description: 'Western Baluchi Keyboard Layout: e -> ث' },
			{ input: 'r',  output: 'ق', description: 'Western Baluchi Keyboard Layout: r -> ق' },
			{ input: 't',  output: 'ف', description: 'Western Baluchi Keyboard Layout: t -> ف' },
			{ input: 'y',  output: 'غ', description: 'Western Baluchi Keyboard Layout: y -> غ' },
			{ input: 'u',  output: 'ع', description: 'Western Baluchi Keyboard Layout: u -> ع' },
			{ input: 'i',  output: 'ه', description: 'Western Baluchi Keyboard Layout: i -> ه' },
			{ input: 'o',  output: 'خ', description: 'Western Baluchi Keyboard Layout: o -> خ' },
			{ input: 'p',  output: 'ح', description: 'Western Baluchi Keyboard Layout: p -> ح' },
			{ input: '[',  output: 'ج', description: 'Western Baluchi Keyboard Layout: [ -> ج' },
			{ input: ']',  output: 'چ', description: 'Western Baluchi Keyboard Layout: ] -> چ' },

			{ input: 'a',  output: 'ش', description: 'Western Baluchi Keyboard Layout: a -> ش' },
			{ input: 's',  output: 'س', description: 'Western Baluchi Keyboard Layout: s -> س' },
			{ input: 'd',  output: 'ی', description: 'Western Baluchi Keyboard Layout: d -> ی' },
			{ input: 'f',  output: 'ب', description: 'Western Baluchi Keyboard Layout: f -> ب' },
			{ input: 'g',  output: 'ل', description: 'Western Baluchi Keyboard Layout: g -> ل' },
			{ input: 'h',  output: 'ا', description: 'Western Baluchi Keyboard Layout: h -> ا' },
			{ input: 'j',  output: 'ت', description: 'Western Baluchi Keyboard Layout: j -> ت' },
			{ input: 'k',  output: 'ن', description: 'Western Baluchi Keyboard Layout: k -> ن' },
			{ input: 'l',  output: 'م', description: 'Western Baluchi Keyboard Layout: l -> م' },
			{ input: ';',  output: 'ک', description: 'Western Baluchi Keyboard Layout: ; -> ک' },
			{ input: '\'',  output: 'گ', description: 'Western Baluchi Keyboard Layout: \' -> گ' },

			{ input: 'z',  output: 'ظ', description: 'Western Baluchi Keyboard Layout: z -> ظ' },
			{ input: 'x',  output: 'ط', description: 'Western Baluchi Keyboard Layout: x -> ط' },
			{ input: 'c',  output: 'ز', description: 'Western Baluchi Keyboard Layout: c -> ز' },
			{ input: 'v',  output: 'ر', description: 'Western Baluchi Keyboard Layout: v -> ر' },
			{ input: 'b',  output: 'ڈ', description: 'Western Baluchi Keyboard Layout: b -> ڈ' },
			{ input: 'n',  output: 'د', description: 'Western Baluchi Keyboard Layout: n -> د' },
			{ input: 'm',  output: 'پ', description: 'Western Baluchi Keyboard Layout: m -> پ' },
			{ input: ',',  output: 'و', description: 'Western Baluchi Keyboard Layout: , -> و' },

			{ input: '~',  output: '÷', description: 'Western Baluchi Keyboard Layout: ~ -> ÷' },
			{ input: '@',  output: '٬', description: 'Western Baluchi Keyboard Layout: @ -> ٬' },
			{ input: '#',  output: '٫', description: 'Western Baluchi Keyboard Layout: # -> ٫' },
			{ input: '%',  output: '٪', description: 'Western Baluchi Keyboard Layout: % -> ٪' },
			{ input: '^',  output: '×', description: 'Western Baluchi Keyboard Layout: ^ -> ×' },
			{ input: '&',  output: '،', description: 'Western Baluchi Keyboard Layout: & -> ،' },
			{ input: '(',  output: ')', description: 'Western Baluchi Keyboard Layout: ( -> )' },
			{ input: ')',  output: '(', description: 'Western Baluchi Keyboard Layout: ) -> (' },
			{ input: '_',  output: 'ـ', description: 'Western Baluchi Keyboard Layout: _ -> ـ' },

			{ input: 'Q',  output: 'ْ', description: 'Western Baluchi Keyboard Layout: Q -> ْ' },
			{ input: 'W',  output: 'ٌ', description: 'Western Baluchi Keyboard Layout: W -> ٌ' },
			{ input: 'E',  output: 'ٍ', description: 'Western Baluchi Keyboard Layout: E -> ٍ' },
			{ input: 'R',  output: 'ً', description: 'Western Baluchi Keyboard Layout: R -> ً' },
			{ input: 'T',  output: 'ُ', description: 'Western Baluchi Keyboard Layout: T -> ُ' },
			{ input: 'Y',  output: 'ِ', description: 'Western Baluchi Keyboard Layout: Y -> ِ' },
			{ input: 'U',  output: 'َ', description: 'Western Baluchi Keyboard Layout: U -> َ' },
			{ input: 'I',  output: 'ّ', description: 'Western Baluchi Keyboard Layout: I -> ّ' },
			{ input: 'O',  output: ']', description: 'Western Baluchi Keyboard Layout: O -> ]' },
			{ input: 'P',  output: '[', description: 'Western Baluchi Keyboard Layout: P -> [' },
			{ input: '{',  output: '}', description: 'Western Baluchi Keyboard Layout: { -> }' },
			{ input: '}',  output: '{', description: 'Western Baluchi Keyboard Layout: } -> {' },

			{ input: 'A',  output: 'ؤ', description: 'Western Baluchi Keyboard Layout: A -> ؤ' },
			{ input: 'S',  output: 'ئ', description: 'Western Baluchi Keyboard Layout: S -> ئ' },
			{ input: 'D',  output: 'ي', description: 'Western Baluchi Keyboard Layout: D -> ي' },
			{ input: 'F',  output: 'إ', description: 'Western Baluchi Keyboard Layout: F -> إ' },
			{ input: 'G',  output: 'أ', description: 'Western Baluchi Keyboard Layout: G -> أ' },
			{ input: 'H',  output: 'آ', description: 'Western Baluchi Keyboard Layout: H -> آ' },
			{ input: 'J',  output: 'ٹ', description: 'Western Baluchi Keyboard Layout: J -> ٹ' },
			{ input: 'K',  output: '»', description: 'Western Baluchi Keyboard Layout: K -> »' },
			{ input: 'L',  output: '«', description: 'Western Baluchi Keyboard Layout: L -> «' },
			{ input: '"',  output: '؛', description: 'Western Baluchi Keyboard Layout: " -> ؛' },

			{ input: 'Z',  output: 'ێ', description: 'Western Baluchi Keyboard Layout: Z -> ێ' },
			{ input: 'X',  output: 'ط', description: 'Western Baluchi Keyboard Layout: X -> ط' },
			{ input: 'C',  output: 'ژ', description: 'Western Baluchi Keyboard Layout: C -> ژ' },
			{ input: 'V',  output: 'ڑ', description: 'Western Baluchi Keyboard Layout: V -> ڑ' },
			{ input: 'B',  output: 'ۆ', description: 'Western Baluchi Keyboard Layout: B -> ۆ' },
			{ input: 'N',  output: 'ٔ', description: 'Western Baluchi Keyboard Layout: N -> ٔ' },
			{ input: 'M',  output: 'ء', description: 'Western Baluchi Keyboard Layout: M -> ء' },
			{ input: '<',  output: '>', description: 'Western Baluchi Keyboard Layout: < -> >' },
			{ input: '>',  output: '<', description: 'Western Baluchi Keyboard Layout: > -> <' },
			{ input: '?',  output: '؟', description: 'Western Baluchi Keyboard Layout: ? -> ؟' }
		],
		inputmethod: 'bgn-kbd'
	},{
		description: 'Bamanankan Alt layout test',
		tests: [
			{
				input: [
					[ 'N', true ],
					[ 'a', false ],
					[ 'h', true ],
					[ 'l', true ],
					[ 'a', false ],
					[ ' ', false ],
					[ 'a', true ],
					[ 'b', true ],
					[ ' ', true ],
					[ 't', false ],
					[ 'o', true ],
					[ 'h', true ],
					[ 'g', false ],
					[ 'o', true ],
					[ ' ', false ],
					[ 'N', false ],
					[ 'g', false ],
					[ 'a', false ],
					[ 'h', true ],
					[ 'l', false ],
					[ 'a', false ],
					[ ' ', false ],
					[ 'n', false ],
					[ 'i', false ],
					[ 'h', true ],
					[ ' ', false ],
					[ 't', false ],
					[ 'i', false ],
					[ 'b', true ],
					[ 'j', true ],
					[ 'e', false ]
				],
				output: 'Ŋála à tɔ́gɔ Ngála ní tìɲe',
				description: 'Bamanankan Alt - Ŋála à tɔ́gɔ Ngála ní tìɲe'
			},
			{
				input: [
					[ 'J', true ],
					[ 'h', true ],
					[ 'E', true ],
					[ 'H', true ],
					[ 'O', true ],
					[ 'B', true ]

				],
				output: 'Ɲ́Ɛ̂Ɔ̌',
				description: 'Bamanankan Alt - Ɲ́Ɛ̂Ɔ̌'
			}
		],
		inputmethod: 'bm-alt'
	},{
		description: 'Bengali Probhat layout test',
		tests: [
			{ input: 'ka', output: 'কা', description: 'Bengali Probhat - ka' },
			{ input: 'ki', output: 'কি', description: 'Bengali Probhat - ki' },
			{ input: 'k/S', output: 'ক্ষ', description: 'Bengali Probhat - kha' },
			{ input: 'q<', output: 'দৃ', description: 'Bengali Probhat - drri' },
			{ input: 'r`/Z', output: 'র\u200d্য', description: 'Bengali Probhat - r`/Z - Testing RA-YAPHALA with ZWJ' },
			{ input: 'be', output: 'বী', description: 'Bengali Probhat - bee' }
		],
		inputmethod: 'bn-probhat'
	},{
		description: 'Tibetan EWTS test',
		tests: [
			{ input: 'brgyud', output: 'བརྒྱུད', description: 'Tibetan EWTS - brgyud' },
			{ input: 'brlab', output: 'བརླབ', description: 'Tibetan EWTS - brlab' },
			{ input: 'r-I', output: 'ཨྲཱྀ', description: 'Tibetan EWTS - r-I' },
			{ input: 'br-I', output: 'བྲཱྀ', description: 'Tibetan EWTS - br-I' },
			{ input: 'b+k+Sha', output: 'བྐྵ', description: 'Tibetan EWTS - b+k+Sha' },
			{ input: 'br-i', output: 'བྲྀ', description: 'Tibetan EWTS - br-i' },
			{ input: 'g.yak', output: 'གཡཀ', description: 'Tibetan EWTS - g.yak' },
			{ input: 'pad+ma', output: 'པདྨ', description: 'Tibetan EWTS - pad+ma' },
			{ input: 'bau', output: 'བཽ', description: 'Tibetan EWTS - bau' }
		],
		inputmethod: 'bo-ewts'
	},{
		description: 'Tibetan Sambhota Keyboard test',
		tests: [
			{ input: 'bfrgyud', output: 'བརྒྱུད', description: 'Tibetan Sambhota - brgyud' },
			{ input: 'fAr\'I', output: 'ཨྲཱྀ', description: 'Tibetan Sambhota - fAr\'I' },
			{ input: 'fbkBa', output: 'བྐྵ', description: 'Tibetan Sambhota - fbkBa' },
			{ input: 'gyak', output: 'གཡཀ', description: 'Tibetan Sambhota - gyak' },
			{ input: 'pafdma', output: 'པདྨ', description: 'Tibetan Sambhota - pafdma' }
		],
		inputmethod: 'bo-sambhota'
	},{
		description: 'Chuvash (AltGr) with jcuken',
		tests: [
			{ input: [ [ 'а', true ] ], output: 'ӑ', description: 'Alt + a (Cyrillic) -> a breve (Cyrillic), lower case' },
			{ input: [ [ 'А', true ] ], output: 'Ӑ', description: 'Alt + А (Cyrillic) -> A breve (Cyrillic), upper case' },
			{ input: [ [ 'е', true ] ], output: 'ӗ', description: 'Alt + е (Cyrillic) -> e breve (Cyrillic), lower case' },
			{ input: [ [ 'Е', true ] ], output: 'Ӗ', description: 'Alt + Е (Cyrillic) -> E breve (Cyrillic), upper case' },
			{ input: [ [ 'с', true ] ], output: 'ҫ', description: 'Alt + с (Cyrillic) -> с cedilla (Cyrillic), lower case' },
			{ input: [ [ 'С', true ] ], output: 'Ҫ', description: 'Alt + С (Cyrillic) -> C cedilla (Cyrillic), upper case' },
			{ input: [ [ 'у', true ] ], output: 'ӳ', description: 'Alt + у (Cyrillic) -> ue  (Cyrillic), lower case' },
			{ input: [ [ 'У', true ] ], output: 'Ӳ', description: 'Alt + У (Cyrillic) -> Ue (Cyrillic), upper case' }
		],
		inputmethod: 'cv-cyr-altgr'
	},{
		description: 'Chuvash (AltGr) with qwerty (en-US)',
		tests: [
			{ input: [ [ 'f', true ] ], output: 'ӑ', description: 'Alt + f -> a breve (Cyrillic), lower case' },
			{ input: [ [ 'F', true ] ], output: 'Ӑ', description: 'Alt + F -> A breve (Cyrillic), upper case' },
			{ input: [ [ 't', true ] ], output: 'ӗ', description: 'Alt + t -> e breve (Cyrillic), lower case' },
			{ input: [ [ 'T', true ] ], output: 'Ӗ', description: 'Alt + T -> E breve (Cyrillic), upper case' },
			{ input: [ [ 'c', true ] ], output: 'ҫ', description: 'Alt + c (Latin) -> с cedilla (Cyrillic), lower case' },
			{ input: [ [ 'C', true ] ], output: 'Ҫ', description: 'Alt + C (Latin) -> C cedilla (Cyrillic), upper case' },
			{ input: [ [ 'e', true ] ], output: 'ӳ', description: 'Alt + e (Latin) -> ue  (Cyrillic), lower case' },
			{ input: [ [ 'E', true ] ], output: 'Ӳ', description: 'Alt + E (Latin) -> Ue (Cyrillic), upper case' }
		],
		inputmethod: 'cv-cyr-altgr'
	},{
		description: 'Chuvash (Mercen): CVLat with qwerty (en-US)',
		tests: [
			{ input: [ [ 'a', true ] ], output: 'ă', description: 'Alt + a -> a breve, lower case' },
			{ input: [ [ 'A', true ] ], output: 'Ă', description: 'Alt + A -> A breve, upper case' },
			{ input: [ [ 's', true ] ], output: 'ş', description: 'Alt + s -> s cedilla, lower case' },
			{ input: [ [ 'S', true ] ], output: 'Ş', description: 'Alt + S -> S cedilla, upper case' },
			{ input: [ [ 'd', true ] ], output: 'š', description: 'Alt + d -> s caron, lower case' },
			{ input: [ [ 'D', true ] ], output: 'Š', description: 'Alt + D -> S caron , upper case' },
			{ input: [ [ 'e', true ] ], output: 'ĕ', description: 'Alt + e -> e breve, lower case' },
			{ input: [ [ 'E', true ] ], output: 'Ĕ', description: 'Alt + E -> E breve, upper case' },
			{ input: [ [ 'u', true ] ], output: 'ü', description: 'Alt + u -> ue, lower case' },
			{ input: [ [ 'U', true ] ], output: 'Ü', description: 'Alt + U -> Ue, upper case' },
			{ input: [ [ 'w', true ] ], output: 'ü', description: 'Alt + w -> ue, lower case' },
			{ input: [ [ 'W', true ] ], output: 'Ü', description: 'Alt + W -> Ue, upper case' }
		],
		inputmethod: 'cv-lat-altgr'
	},{
		description: 'Chuvash (Number based) with qwerty (en-US)',
		tests: [
			{ input: '1', output: '?', description: '1 -> ?' },
			{ input: '2', output: '\'', description: '2 -> \', simple quote' },
			{ input: '@', output: '"', description: '@ (shift + 2) -> ", double quote' },
			{ input: '3', output: 'ҫ', description: '3 -> c cedilla (Cyrillic), lower case' },
			{ input: '#', output: 'Ҫ', description: '# (shift + 3) -> C cedilla (Cyrillic), upper case case' },
			{ input: '4', output: '|', description: '4 -> | (for Wikipedia edits)' },
			{ input: '$', output: ';', description: '$ (shift + 4) -> semicolon (;) as in standard Russian' },
			{ input: '5', output: 'ӳ', description: '5 -> ue (Cyrillic), upper case' },
			{ input: '%', output: 'Ӳ', description: '% (shift + 5) -> Ue  (Cyrillic), upper case' },
			{ input: '6', output: '—', description: '6 -> — (em dash)' },
			{ input: '^', output: ':', description: '^ (shift + 6) -> : (colon) as in standard Russian' },
			{ input: '7', output: 'ӗ', description: '7 -> e breve (Cyrillic), lower case' },
			{ input: '&', output: 'Ӗ', description: '& (shift + 7) -> E breve (Cyrillic), upper case' },
			{ input: '8', output: 'ӑ', description: '8 -> a breve (Cyrillic), lower case' },
			{ input: '*', output: 'Ӑ', description: '* (shift + 8) -> A breve (Cyrillic), upper case' },
			{ input: '9', output: '[', description: '9 -> [ (wiki format links)' },
			{ input: '0', output: ']', description: '0 -> [ (wiki format links)' }
		],
		inputmethod: 'cv-cyr-numbers'
	},{
		description: 'Chuvash (Number based) with jcuken',
		tests: [
			{ input: '1', output: '?', description: '1 -> ?' },
			{ input: '2', output: '\'', description: '2 -> \', simple quote' },
			{ input: '3', output: 'ҫ', description: '3 -> c cedilla (Cyrillic), lower case' },
			{ input: '№', output: 'Ҫ', description: '№ (shift + 3) -> C cedilla (Cyrillic), upper case case' },
			{ input: '4', output: '|', description: '4 -> | (for Wikipedia edits)' },
			{ input: '5', output: 'ӳ', description: '5 -> ue (Cyrillic), upper case' },
			{ input: '%', output: 'Ӳ', description: '% (shift + 5) -> Ue  (Cyrillic), upper case' },
			{ input: '6', output: '—', description: '6 -> — (em dash)' },
			{ input: '7', output: 'ӗ', description: '7 -> e breve (Cyrillic), lower case' },
			// For now ? doesn't work. I should have context and know if Shift is pressed.
			// It only appears in jcuken scenario instead of E breve you'll get a comma
			// { input: '?', output: 'Ӗ', description: '? (shift + 7) -> E breve (Cyrillic), upper case' },
			{ input: '8', output: 'ӑ', description: '8 -> a breve (Cyrillic), lower case' },
			{ input: '*', output: 'Ӑ', description: '* (shift + 8) -> A breve (Cyrillic), upper case' },
			{ input: '9', output: '[', description: '9 -> [ (wiki format links)' },
			{ input: '0', output: ']', description: '0 -> [ (wiki format links)' }
		],
		inputmethod: 'cv-cyr-numbers'
	},{
		description: 'Bengali Avro layout test',
		tests: [
			{ input: 'ka', output: 'কা', description: 'Bengali Avro - ka' },
			{ input: 'rri', output: 'ঋ', description: 'Bengali Avro - rri' },
			{ input: 'drri', output: 'দৃ', description: 'Bengali Avro - drri' },
			{ input: 'kee', output: 'কী', description: 'Bengali Avro - kee' }
		],
		inputmethod: 'bn-avro'
	},{
		description: 'Dagbani Alt layout test',
		tests: [
			{
				input: [
					[ 'K', false ],
					[ 'p', false ],
					[ 'a', false ],
					[ 'g', true ],
					[ 'u', false ],
					[ 'z', true ],
					[ 'i', false ],
					[ 'e', true ],
					[ 'g', true ],
					[ 'u', false ],
					[ ' ', false ],
					[ 'z', true ],
					[ 'i', false ],
					[ ' ', false ],
					[ 'n', true ],
					[ 'o', true ],
					[ ' ', false ],
					[ 'n', false ],
					[ 'y', false ],
					[ 'e', true ],
					[ 'l', false ],
					[ 'a', false ]
				],
				output: 'Kpaɣuʒiɛɣu ʒi ŋɔ nyɛla',
				description: 'Dagbani Alt - Kpaɣuʒiɛɣu ʒi ŋɔ nyɛla'
			},
			{
				input: [
					[ 'y', false ],
					[ 'y', true ],
					[ 'Y', false ],
					[ 'Y', true ]
				],
				output: 'yɣYƔ',
				description: 'Dagbani Alt - yɣYƔ'
			}
		],
		inputmethod: 'dag-alt'
	},{
		description: 'Ewe tilde test',
		tests: [
			{ input: '~D', output: 'Ɖ', description: 'Ewe ~D -> Ɖ' },
			{ input: '~d', output: 'ɖ', description: 'Ewe ~d -> ɖ' },
			{ input: '~E', output: 'Ɛ', description: 'Ewe ~E -> Ɛ' },
			{ input: '~e', output: 'ɛ', description: 'Ewe ~e -> ɛ' },
			{ input: '~F', output: 'Ƒ', description: 'Ewe ~F -> Ƒ' },
			{ input: '~f', output: 'ƒ', description: 'Ewe ~f -> ƒ' },
			{ input: '~G', output: 'Ɣ', description: 'Ewe ~G -> Ɣ' },
			{ input: '~g', output: 'ɣ', description: 'Ewe ~g -> ɣ' },
			{ input: '~N', output: 'Ŋ', description: 'Ewe ~N -> Ŋ' },
			{ input: '~n', output: 'ŋ', description: 'Ewe ~n -> ŋ' },
			{ input: '~O', output: 'Ɔ', description: 'Ewe ~O -> Ɔ' },
			{ input: '~o', output: 'ɔ', description: 'Ewe ~o -> ɔ' },
			{ input: '~V', output: 'Ʋ', description: 'Ewe ~V -> Ʋ' },
			{ input: '~v', output: 'ʋ', description: 'Ewe ~v -> ʋ' },
			{ input: '~~~~', output: '~~~~', description: 'Ewe ~~~~ -> ~~~~' },
			{ input: 'mi~/', output: 'mí', description: 'Ewe mi~/ -> mí' },
			{ input: 'wo~\\', output: 'wò', description: 'Ewe wo~\\ -> wò' },
			{ input: '~E~{', output: 'Ɛ̃', description: 'Ewe ~E~{ -> Ɛ̃' },
			{ input: 'to~^', output: 'tǒ', description: 'Ewe to~^ -> tǒ' }
		],
		inputmethod: 'ee-tilde'
	},{
		description: 'Cyrillic with palochka transliteration test',
		tests: [
			// Sanity test - palochka should produce itself
			{ input: palochkaVariants.palochka, output: palochkaVariants.palochka, description: 'Palochka itself is unchanged' },

			{ input: 'L', output: 'L', description: 'Latin capital L is unchanged' },
			{ input: palochkaVariants.latinSmallL, output: palochkaVariants.palochka, description: 'Latin small l becomes palochka' },

			{ input: palochkaVariants.latinCapitalI, output: palochkaVariants.palochka, description: 'Latin capital I becomes palochka' },
			{ input: 'i', output: 'i', description: 'Latin small i becomes palochka' },

			{ input: palochkaVariants.ukrainianCapitalI, output: palochkaVariants.palochka, description: 'Ukrainian capital І becomes palochka' },

			{ input: palochkaVariants.digitOne, output: palochkaVariants.digitOne, description: 'Digit one (1) is unchanged' },
			{ input: [ [ palochkaVariants.digitOne, true ] ], output: palochkaVariants.palochka, description: 'Extended digit one (1) becomes palochka' },

			{ input: 'д', output: 'д', description: 'Cyrillic small д is is unchanged' },
			{ input: [ [ 'д', true ] ], output: palochkaVariants.palochka, description: 'Extended Cyrillic д becomes palochka' },

			{ input: 'ш', output: 'ш', description: 'Cyrillic small ш is is unchanged' },
			{ input: [ [ 'ш', true ] ], output: palochkaVariants.palochka, description: 'Extended Cyrillic small ш becomes palochka' },

			{ input: 'Ш', output: 'Ш', description: 'Cyrillic capital Ш is is unchanged' },
			{ input: [ [ 'Ш', true ] ], output: palochkaVariants.palochka, description: 'Extended Cyrillic capital Ш becomes palochka' }
		],
		inputmethod: 'cyrl-palochka'
	},{
		description: 'Georgian Transliteration test',
		tests: [
			{ input: 'vikipedia\\`', output: 'ვიკიპედია`', description: 'Georgian vikipedia with `' },
			{ input: '\\~\\~\\~\\~', output: '~~~~', description: 'Wiki Signature test' },
			{ input: 'abcdefghijklmnopqrstuvwxyz', output: 'აბცდეფგჰიჯკლმნოპქრსტუვწხყზ', description: 'a-z in Georgian' },
			{ input: 'WRTSJZC`~', output: 'ჭღთშჟძჩ„“', description: 'WRTSJZC`~ in Georgian' }
		],
		inputmethod: 'ka-transliteration'
	},{
		description: 'Hausa tilde test',
		tests: [
			{ input: '~B', output: 'Ɓ', description: 'Hausa tilde ~B -> Ɓ' },
			{ input: '~b', output: 'ɓ', description: 'Hausa tilde ~b -> ɓ' },
			{ input: '~D', output: 'Ɗ', description: 'Hausa tilde ~D -> Ɗ' },
			{ input: '~d', output: 'ɗ', description: 'Hausa tilde ~d -> ɗ' },
			{ input: '~K', output: 'Ƙ', description: 'Hausa tilde ~K -> Ƙ' },
			{ input: '~k', output: 'ƙ', description: 'Hausa tilde ~k -> ƙ' },
			{ input: '~R', output: 'R̃', description: 'Hausa tilde ~R -> R̃' },
			{ input: '~r', output: 'r̃', description: 'Hausa tilde ~r -> r̃' },
			{ input: '~Y', output: 'Ƴ', description: 'Hausa tilde ~Y -> Ƴ' },
			{ input: '~y', output: 'ƴ', description: 'Hausa tilde ~y -> ƴ' },
			{ input: 'E~\\', output: 'È', description: 'Hausa tilde E~\ -> È' },
			{ input: 'i~^', output: 'î', description: 'Hausa tilde i~^ -> î' }
		],
		inputmethod: 'ha-tilde'
	},{
		description: 'Igbo tilde test',
		tests: [
			{ input: '~I', output: 'Ị', description: 'Igbo tilde ~B -> Ɓ' },
			{ input: '~i', output: 'ị', description: 'Igbo tilde ~b -> ɓ' },
			{ input: '~N', output: 'Ṅ', description: 'Igbo tilde ~D -> Ɗ' },
			{ input: '~n', output: 'ṅ', description: 'Igbo tilde ~d -> ɗ' },
			{ input: '~O', output: 'Ọ', description: 'Igbo tilde ~O -> Ọ' },
			{ input: '~o', output: 'ọ', description: 'Igbo tilde ~o -> ọ' },
			{ input: '~U', output: 'Ụ', description: 'Igbo tilde ~R -> R̃' },
			{ input: '~u', output: 'ụ', description: 'Igbo tilde ~r -> r̃' },
			{ input: 'E~\\', output: 'È', description: 'Igbo tilde E~\\ -> È' },
			{ input: 'i~/', output: 'í', description: 'Igbo tilde i~/ -> í' }
		],
		inputmethod: 'ig-tilde'
	},{
		description: 'Esperanto x-sistemo test',
		tests: [
			{ input: 'cx', output: 'ĉ', description: 'Esperanto cx' },
			{ input: 'gx', output: 'ĝ', description: 'Esperanto gx' },
			{ input: 'hx', output: 'ĥ', description: 'Esperanto hx' },
			{ input: 'jx', output: 'ĵ', description: 'Esperanto jx' },
			{ input: 'sx', output: 'ŝ', description: 'Esperanto sx' },
			{ input: 'ux', output: 'ŭ', description: 'Esperanto ux' },
			{ input: 'cxx', output: 'cx', description: 'Esperanto cxx' },
			{ input: 'gxx', output: 'gx', description: 'Esperanto gxx' },
			{ input: 'hxx', output: 'hx', description: 'Esperanto hxx' },
			{ input: 'jxx', output: 'jx', description: 'Esperanto jxx' },
			{ input: 'sxx', output: 'sx', description: 'Esperanto sxx' },
			{ input: 'uxx', output: 'ux', description: 'Esperanto uxx' },
			{ input: 'CX', output: 'Ĉ', description: 'Esperanto CX' },
			{ input: 'GX', output: 'Ĝ', description: 'Esperanto GX' },
			{ input: 'HX', output: 'Ĥ', description: 'Esperanto HX' },
			{ input: 'JX', output: 'Ĵ', description: 'Esperanto JX' },
			{ input: 'SX', output: 'Ŝ', description: 'Esperanto SX' },
			{ input: 'UX', output: 'Ŭ', description: 'Esperanto UX' },
			{ input: 'CXX', output: 'CX', description: 'Esperanto CXX' },
			{ input: 'GXX', output: 'GX', description: 'Esperanto GXX' },
			{ input: 'HXX', output: 'HX', description: 'Esperanto HXX' },
			{ input: 'JXX', output: 'JX', description: 'Esperanto JXX' },
			{ input: 'SXX', output: 'SX', description: 'Esperanto SXX' },
			{ input: 'UXX', output: 'UX', description: 'Esperanto UXX' },
			{
				input: 'ehxosxangxo cxiujxauxde',
				output: 'eĥoŝanĝo ĉiuĵaŭde',
				description: 'Esperanto eĥoŝanĝo ĉiuĵaŭde'
			}
		],
		inputmethod: 'eo-x'
	},{
		description: 'German Transliteration and keybuffer test',
		tests: [
			{ input: '~o', output: 'ö', description: 'German ö' },
			{ input: '~O', output: 'Ö', description: 'German Ö' },
			{ input: '~s', output: 'ß', description: 'German ß' }
		],
		inputmethod: 'de-transliteration'
	},{
		description: 'Gothic Standard',
		tests: [
			{ input: 'anastodeinilaufs', output: '𐌰𐌽𐌰𐍃𐍄𐍉𐌳𐌴𐌹𐌽𐌹𐌻𐌰𐌿𐍆𐍃', description: 'Gothic 𐌰𐌽𐌰𐍃𐍄𐍉𐌳𐌴𐌹𐌽𐌹𐌻𐌰𐌿𐍆𐍃' },
			{ input: 'veilos', output: '𐍈𐌴𐌹𐌻𐍉𐍃', description: 'Gothic 𐍈𐌴𐌹𐌻𐍉𐍃' },
			{ input: 'Tis', output: '𐌸𐌹𐍃', description: 'Gothic 𐌸𐌹𐍃' }
		],
		inputmethod: 'got-standard'
	},{
		description: 'Gujarati Transliteration',
		tests: [
			{ input: '~', output: '~', description: 'Gujarati - tilde must not change' },
			{ input: 'hiMmata', output: 'હિંમત', description: 'Gujarati hiMmata' },
			{ input: 'aM^bara', output: 'અઁબર', description: 'Gujarati aM^bara - testing candrabindu' },
			{ input: '_', output: '_', description: 'Gujarati - underscore must not change' },
			{ input: 'oM', output: 'ઓં', description: 'Gujarati oM' },
			{ input: 'OM', output: 'ૐ', description: 'Gujarati OM' },
			{ input: 'K', output: '।', description: 'Gujarati K - testing danda' },
			{ input: 'KK', output: '॥', description: 'Gujarati KK - testing double danda' },
			{ input: 'ai', output: 'ઐ', description: 'Gujarati ai' },
			{ input: 'eka', output: 'એક', description: 'Gujarati eka' },
			{ input: 'aikya', output: 'ઐક્ય', description: 'Gujarati aikya' },
			{ input: 'kailaasa', output: 'કૈલાસ', description: 'Gujarati kailaasa' },
			{ input: 'EMjiiniyara', output: 'ઍંજીનિયર', description: 'Gujarati EMjiiniyara - testing candra e' },
			{ input: 'sad`bhaava', output: 'સદ્\u200cભાવ', description: 'Gujarati sad`bhaava - testing ZWNJ' }, // (with ZWNJ)
			{ input: 'caDJaavo', output: 'ચડ઼ાવો', description: 'Gujarati caDJaavo - testing nukta' },
			{ input: 'gnaati', output: 'જ્ઞાતિ', description: 'Gujarati gnaati - testing gn a new combination' }
		],
		inputmethod: 'gu-transliteration'
	},{
		description: 'Gujarati Phonetic',
		tests: [
			{ input: '\\', output: 'ૉ', description: 'Gujarati - O Matra' },
			{ input: 'k\\mfpyuwr', output: 'કૉમ્પયુટર', description: 'Gujarati - Computer' }
		],
		inputmethod: 'gu-phonetic'
	},{
		description: 'Urdu Phonetics',
		tests: [
			{ input: '1',  output: '1', description: 'Urdu Numeral 1 -> 1' },
			{ input: '2',  output: '2', description: 'Urdu Numeral 2 -> 2' },
			{ input: '3',  output: '3', description: 'Urdu Numeral 3 -> 3' },
			{ input: '4',  output: '4', description: 'Urdu Numeral 4 -> 4' },
			{ input: '5',  output: '5', description: 'Urdu Numeral 5 -> 5' },
			{ input: '6',  output: '6', description: 'Urdu Numeral 6 -> 6' },
			{ input: '7',  output: '7', description: 'Urdu Numeral 7 -> 7' },
			{ input: '8',  output: '8', description: 'Urdu Numeral 8 -> 8' },
			{ input: '9',  output: '9', description: 'Urdu Numeral 9 -> 9' },
			{ input: '0',  output: '0', description: 'Urdu Numeral 0 -> 0' }
		],
		inputmethod: 'ur-phonetic'
	},{
		description: 'Gujarati Inscript 2',
		tests: [
			{ input: 'ke$lfk', output: 'કાર્તિક', description: 'Gujarati Kartik - Testing Ref' },
			{ input: '\"eie\"w/e', output: 'ઠાગાઠૈયા', description: 'Gujarati ThagaaThaiya - Testing Tha' }
		],
		inputmethod: 'gu-inscript2'
	},{
		description: 'Gujarati Inscript',
		tests: [
			{ input: '""d"a', output: 'ઠઠ્ઠો', description: 'Gujarati Inscript test' }
		],
		inputmethod: 'gu-inscript'
	},{
		description: 'Hebrew layout and extended keys test',
		tests: [
			// The output is the LRM control character
			{ input: [ [ '9', true ] ], output: '\u200e', description: 'Hebrew Alt-9 -> LRM' },
			// The output is the RLM control character
			{ input: [ [ '0', true ] ], output: '\u200f', description: 'Hebrew Alt-0 -> RLM' },
			// The first case is a regular hyphen-minus ('-'), which is the same
			// when it is pressed by itself without Alt.
			// The second case is hyphen-minus with Alt, which produces the Hebrew
			// hyphen (maqaf).
			{ input: [ [ '-', false ] ], output: '-', description: 'Hebrew regular -' },
			{ input: [ [ '-', true ] ], output: '־', description: 'Hebrew extended -' }
		],
		inputmethod: 'he-standard-2012-extonly'
	},{
		description: 'Hindi InScript layout test',
		tests: [
			{ input: [ [ 'F', true ] ], output: '\u090C', description: 'Hindi inscript - ALTGR+F' }
		],
		inputmethod: 'hi-inscript'
	},{
		description: 'Hindi transliteration tests - for textarea',
		tests: [
			// The regex returns \n for \r.
			{ input: 'raam\r', output: 'राम\n', description: 'Hindi transliteration - raam<line-break> (\\r)' }
		],
		inputmethod: 'hi-transliteration',
		inputType: 'textarea'
	},{
		description: 'Hindi Phonetic tests',
		tests: [
			{ input: 'dffB', output: 'द्\u200cभ', description: 'Hindi Phonetic ZWNJ character' },
			{ input: 'p$wr', output: 'पॉटर', description: 'Hindi Phonetic Poter' },
			{ input: 'k`k', output: 'कॆक', description: 'Hindi Phonetic Cake' }
		],
		inputmethod: 'hi-phonetic'
	},{
		description: 'Hindi transliteration tests',
		tests: [
			{ input: '\\~', output: '~', description: 'Hindi transliteration - \\~ -> ~' },
			{ input: 'agar ',output: 'अगर ', description: 'Hindi transliteration - virama autoremoval on space' }, // bug 35990
			{ input: 'agar~ ',output: 'अगर् ', description: 'Hindi transliteration - virama retention' }, // bug 35990

			{ input: 'namaH', output: 'नमः', description: 'Hindi transliteration - namaH (visarga)' },
			{ input: 'madhumaChiyoM', output: 'मधुमक्खियों', description: 'Hindi transliteration - madhumaChiyoM (anusvara)' },
			{ input: '//', output: 'ऽ', description: 'Hindi transliteration - // (avagraha)' },
			{ input: 'raama', output: 'राम', description: 'Hindi transliteration - raama' },
			{ input: 'raama ', output: 'राम ', description: 'Hindi transliteration - raama<space> (backwards compatibility)' },
			{ input: 'raama~ ', output: 'राम् ', description: 'Hindi transliteration - raama<viram><space>' },
			{ input: 'raam ', output: 'राम ', description: 'Hindi transliteration - raam<space>' },
			{ input: 'raam~ ', output: 'राम् ', description: 'Hindi transliteration - raam<viram><space>' },
			{ input: 'raam,', output: 'राम,', description: 'Hindi transliteration - raam,' },
			{ input: 'raam~,', output: 'राम्,', description: 'Hindi transliteration - raam<viram>,' },
			{ input: 'raam?', output: 'राम?', description: 'Hindi transliteration - raam?' },
			{ input: 'raam~?', output: 'राम्?', description: 'Hindi transliteration - raam<viram>?' },
			{ input: 'raam!', output: 'राम!', description: 'Hindi transliteration - raam!' },
			{ input: 'raam~!', output: 'राम्!', description: 'Hindi transliteration - raam<viram>!' },
			{ input: 'raam-', output: 'राम-', description: 'Hindi transliteration - raam-' },
			{ input: 'raam~-', output: 'राम्-', description: 'Hindi transliteration - raam<viram>-' },
			{ input: 'raam:', output: 'राम:', description: 'Hindi transliteration - raam:' },
			{ input: 'raam~:', output: 'राम्:', description: 'Hindi transliteration - raam<viram>:' },
			{ input: 'raam;', output: 'राम;', description: 'Hindi transliteration - raam;' },
			{ input: 'raam~;', output: 'राम्;', description: 'Hindi transliteration - raam<viram>;' },
			{ input: 'raam5', output: 'राम५', description: 'Hindi transliteration - raam5' },
			{ input: 'raam~5', output: 'राम्५', description: 'Hindi transliteration - raam<viram>5' },
			{ input: 'santoSh.', output: 'सन्तोष।', description: 'Hindi transliteration - santoSh. (testing clusters and danda)' },
			{ input: 'santoSh~.', output: 'सन्तोष्।', description: 'Hindi transliteration - santoSh<viram>. (testing clusters and danda)' },
			{ input: 'raam..', output: 'राम॥', description: 'Hindi transliteration - raam..' },
			{ input: 'raam~..', output: 'राम्॥', description: 'Hindi transliteration - raam<viram>..' },
			{ input: 'laxmii', output: 'लक्ष्मी', description: 'Hindi transliteration - laxmii (testing ksh)' },
			{ input: 'veeNaa', output: 'वीणा', description: 'Hindi transliteration - veeNaa' },
			{ input: 'soorya', output: 'सूर्य', description: 'Hindi transliteration - soorya' },
			{ input: 'amRtaa', output: 'अमृता', description: 'Hindi transliteration - amRtaa' },
			{ input: 'bauThate', output: 'बौठते', description: 'Hindi transliteration - bauThate' },
			{ input: '.', output: '।', description: 'Hindi transliteration - . (danda)' },
			{ input: '..', output: '॥', description: 'Hindi transliteration - .. (double danda)' },

			// bug 38238
			{ input: 'AUMkaara', output: 'ॐकार', description: 'Hindi transliteration - auMkaara' },
			{ input: 'auMsa', output: 'औंस', description: 'Hindi transliteration - auMsa (ounce)' },
			{ input: 'bhaaShaaoM', output: 'भाषाओं', description: 'Hindi transliteration - bhaaShaaoM (testing correct typing of oM as a simple anusvara)' },
			{ input: 'a', output: 'अ', description: 'a for अ translitration' },
			{ input: 'aa', output: 'आ', description: 'aa for आ translitration' },
			{ input: 'i', output: 'इ', description: 'i for इ translitration' },
			{ input: 'I', output: 'ई', description: 'I for ई translitration' },
			{ input: 'u', output: 'उ', description: 'u for U translitration' },
			{ input: 'U', output: 'ऊ', description: 'U for ऊ translitration' },
			{ input: 'e', output: 'ए', description: 'e for ए translitration' },
			{ input: 'ai', output: 'ऐ', description: 'ai for ऐ translitration' },
			{ input: 'o', output: 'ओ', description: 'o for ओ translitration' },
			{ input: 'au', output: 'औ', description: 'au for औ translitration' },
			{ input: 'O', output: 'ऑ', description: 'O for ऑ translitration' },
			{ input: 'E', output: 'ऍ', description: 'E for ऍ translitration' },
			{ input: 'aM', output: 'अं', description: 'aM for अं translitration' },
			{ input: 'aH', output: 'अः', description: 'aH for अः translitration' },
			{ input: 'ka', output: 'क', description: 'ka for क translitration' },
			{ input: 'kha', output: 'ख', description: 'kha for ख translitration' },
			{ input: 'ga', output: 'ग', description: 'ga for ग translitration' },
			{ input: 'gha', output: 'घ', description: 'gha for घ translitration' },
			{ input: 'nga', output: 'ङ', description: 'nga for ङ translitration' },
			{ input: 'ca', output: 'च', description: 'cha for च translitration' },
			{ input: 'cha', output: 'छ', description: 'chha for छ translitration' },
			{ input: 'ja', output: 'ज', description: 'ja for ज translitration' },
			{ input: 'jha', output: 'झ', description: 'jha for झ translitration' },
			{ input: 'nja', output: 'ञ', description: 'nja for ञ translitration' },
			{ input: 'Ta', output: 'ट', description: 'Ta for ट translitration' },
			{ input: 'Tha', output: 'ठ', description: 'Tha for ठ translitration' },
			{ input: 'Da', output: 'ड', description: 'Da for ड translitration' },
			{ input: 'Dha', output: 'ढ', description: 'Dha for ढ translitration' },
			{ input: 'Na', output: 'ण', description: 'Na for ण translitration' },
			{ input: 'ta', output: 'त', description: 'ta for त translitration' },
			{ input: 'tha', output: 'थ', description: 'tha for थ translitration' },
			{ input: 'da', output: 'द', description: 'da for द translitration' },
			{ input: 'dha', output: 'ध', description: 'dha for ध translitration' },
			{ input: 'na', output: 'न', description: 'na for न translitration' },
			{ input: 'pha', output: 'फ', description: 'pha for फ translitration' },
			{ input: 'tha', output: 'थ', description: 'tha for थ translitration' },
			{ input: 'ba', output: 'ब', description: 'ba for ब translitration' },
			{ input: 'bha', output: 'भ', description: 'bha for भ translitration' },
			{ input: 'ma', output: 'म', description: 'ma for म translitration' },
			{ input: 'ya', output: 'य', description: 'ya for य translitration' },
			{ input: 'ra', output: 'र', description: 'ra for र translitration' },
			{ input: 'la', output: 'ल', description: 'la for ल translitration' },
			{ input: 'va', output: 'व', description: 'va for व translitration' },
			{ input: 'sha', output: 'श', description: 'sha for श translitration' },
			{ input: 'ya', output: 'य', description: 'ya for य translitration' },
			{ input: 'Sha', output: 'ष', description: 'Sha for ष translitration' },
			{ input: 'sa', output: 'स', description: 'sa for स translitration' },
			{ input: 'ha', output: 'ह', description: 'ha for ह translitration' },
			{ input: 'sha', output: 'श', description: 'sha for श translitration' },
			{ input: 'R', output: 'ऋ', description: 'R for ऋ translitration' },
			{ input: '0', output: '०', description: '0 for ० translitration' },
			{ input: '1', output: '१', description: '1 for १ translitration' },
			{ input: '2', output: '२', description: '2 for २ translitration' },
			{ input: '3', output: '३', description: '3 for ३ translitration' },
			{ input: '4', output: '४', description: '4 for ४ translitration' },
			{ input: '5', output: '५', description: '5 for ५ translitration' },
			{ input: '6', output: '६', description: '6 for ६ translitration' },
			{ input: '7', output: '७', description: '7 for ७ translitration' },
			{ input: '8', output: '८', description: '8 for ८ translitration' },
			{ input: '9', output: '९', description: '9 for ९ translitration' },
			{ input: '0', output: '०', description: '0 for ० translitration' }
		],
		inputmethod: 'hi-transliteration'
	},{
		description: 'Ho Transliteration test',
		tests: [
			{ input: 'abcdeghijklmnopqrstuvwxy', output: '𑣁𑣗c𑣑𑣈𑣋𑣙𑣂𑣎𑣌𑣚𑣖𑣓𑣉𑣘𑣄𑣜𑣞𑣒𑣃𑣀𑣟𑣝𑣅', description: 'Ho abcdeghijklmnopqrst' },
			{ input: 'ABCDEGHIJKLMNOPQRSTUVWXY', output: '𑢡𑢷C𑢱𑢨𑢫𑢹𑢢𑢮𑢬𑢺𑢶𑢳𑢩𑢸𑢤𑢼𑢾𑢲𑢣𑢠𑢿𑢽𑢥', description: 'Ho ABCDEGHIJKLMNOPQRSTUVWXY' },
			{ input: '1234567890', output: '𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩𑣠', description: 'Ho 1234567890' },
			{ input: '@', output: '𑣿', description: 'Ho @ -> 𑣿' },
			{ input: '\\@', output: '@', description: 'Ho \@ -> @' },
			{ input: '\\a', output: 'a', description: 'Ho \a -> a' },
			{ input: 'aiauchdhngnjnnrrth', output: '𑣆𑣇𑣏𑣔𑣊𑣍𑣐𑣛𑣕', description: 'Ho aiauchdhngnjnnrrth' },
			{ input: 'AIAUCHDHNGNJNNRRTH', output: '𑢦𑢧𑢯𑢴𑢪𑢭𑢰𑢻𑢵', description: 'Ho AIAUCHDHNGNJNNRRTH' },
			{ input: 'AiAuChDhNgNjNnRrTh', output: '𑢦𑢧𑢯𑢴𑢪𑢭𑢰𑢻𑢵', description: 'Ho AiAuChDhNgNjNnRrTh' }
		],
		inputmethod: 'hoc-transliteration'
	},{
		description: 'Armenian phonetic layout with extended keys test',
		tests: [
			{ input: [ [ '.', false ] ], output: '․', description: 'Armenian mijaket ․' },
			{ input: [ [ '.', true ] ], output: '.', description: 'Latin dot .' },
			{ input: [ [ ':', false ] ], output: '։', description: 'Armenian Armenian verjaket ։' },
			{ input: [ [ ':', true ] ], output: ':', description: 'Latin colon :' },
			{ input: '`1234567890-=', output: '՝էթփձջ֏ևրչճ–ժ', description: 'Armenian phonetic digits row No Shift' },
			{ input: '~!@#$%^&*()_+', output: '՜ԷԹՓՁՋ()ՐՉՃ—Ժ', description: 'Armenian phonetic digits row With Shift' },
			{ input: 'qwertyuiop[]', output: 'քոեռտըւիօպխծ', description: 'Armenian phonetic 1st row No Shift' },
			{ input: 'QWERTYUIOP{}',output: 'ՔՈԵՌՏԸՒԻՕՊԽԾ', description: 'Armenian phonetic 1st row With Shift' },
			{ input: 'asdfghjkl;\'\\', output: 'ասդֆգհյկլ;՛շ', description: 'Armenian phonetic 2nd row No Shift' },
			{ input: 'ASDFGHJKL:"|', output: 'ԱՍԴՖԳՀՅԿԼ։"Շ', description: 'Armenian phonetic 2nd row With Shift' },
			{ input: 'zxcvbnm,./', output: 'զղցվբնմ,․…', description: 'Armenian phonetic 3rd row No Shift' },
			{ input: 'ZXCVBNM<>?', output: 'ԶՂՑՎԲՆՄ«»՞', description: 'Armenian phonetic 3rd row With Shift' }
		],
		inputmethod: 'hy-ephonetic'
	},{
		description: 'Armenian typewriter layout with extended keys test',
		tests: [
			{ input: [ [ '7', false ] ], output: '․', description: 'Armenian mijaket ․' },
			{ input: [ [ '.', true ] ], output: '.', description: 'Latin dot .' },
			{ input: '`1234567890-=', output: '՝ֆձ-,։՞․՛)օէղ', description: 'Armenian typewriter digits row No Shift' },
			{ input: '~!@#$%^&*()_+', output: '՜ՖՁ֏֊—և՚(ՕԷՂ', description: 'Armenian typewriter digits row With Shift' },
			{ input: 'qwertyuiop[]', output: 'ճփբսմուկըթծց', description: 'Armenian typewriter 1st row No Shift' },
			{ input: 'QWERTYUIOP{}',output: 'ՃՓԲՍՄՈՒԿԸԹԾՑ', description: 'Armenian typewriter 1st row With Shift' },
			{ input: 'asdfghjkl;\'\\', output: 'ջվգեանիտհպր»', description: 'Armenian typewriter 2nd row No Shift' },
			{ input: 'ASDFGHJKL:"|', output: 'ՋՎԳԵԱՆԻՏՀՊՐ«', description: 'Armenian typewriter 2nd row With Shift' },
			{ input: 'zxcvbnm,./', output: 'ժդչյզլքխշռ', description: 'Armenian typewriter 3rd row No Shift' },
			{ input: 'ZXCVBNM<>?', output: 'ԺԴՉՅԶԼՔԽՇՌ', description: 'Armenian typewriter 3rd row With Shift' }
		],
		inputmethod: 'hy-typewriter'
	},{
		description: 'Armenian alternative phonetic layout with extended keys test',
		tests: [
			{ input: [ [ '.', false ] ], output: '․', description: 'Armenian mijaket ․' },
			{ input: [ [ '.', true ] ], output: '.', description: 'Latin dot .' },
			{ input: [ [ ':', false ] ], output: '։', description: 'Armenian verjaket ։' },
			{ input: [ [ ':', true ] ], output: ':', description: 'Latin colon :' },
			{ input: '`1234567890-=', output: '՝էֆփձջ֏ևռչճ–ժ', description: 'Armenian phonetic digits row No Shift' },
			{ input: '~!@#$%^&*()_+', output: '՜ԷՖՓՁՋ()ՌՉՃ—Ժ', description: 'Armenian phonetic digits row With Shift' },
			{ input: 'qwertyuiop[]', output: 'քոերտըւիօպխծ', description: 'Armenian phonetic 1st row No Shift' },
			{ input: 'QWERTYUIOP{}',output: 'ՔՈԵՐՏԸՒԻՕՊԽԾ', description: 'Armenian phonetic 1st row With Shift' },
			{ input: 'asdfghjkl;\'\\', output: 'ասդթգհյկլ;՛շ', description: 'Armenian phonetic 2nd row No Shift' },
			{ input: 'ASDFGHJKL:"|', output: 'ԱՍԴԹԳՀՅԿԼ։"Շ', description: 'Armenian phonetic 2nd row With Shift' },
			{ input: 'zxcvbnm,./', output: 'զղցվբնմ,․…', description: 'Armenian phonetic 3rd row No Shift' },
			{ input: 'ZXCVBNM<>?', output: 'ԶՂՑՎԲՆՄ«»՞', description: 'Armenian phonetic 3rd row With Shift' }
		],
		inputmethod: 'hy-ephoneticalt'
	},{
		description: 'Armenian MS legacy Eastern layout with extended keys test',
		tests: [
			{ input: [ [ '7', false ] ], output: '․', description: 'Armenian mijaket ․' },
			{ input: [ [ '.', true ] ], output: '.', description: 'Latin dot .' },
			{ input: '`1234567890-=', output: '՝։ձյ՛,-․«»օռժ', description: 'Armenian MS legacy Eastern digits row No Shift' },
			{ input: '~!@#$%^&*()_+', output: '՜1ՁՅ֏49և()ՕՌԺ', description: 'Armenian MS legacy Eastern digits row With Shift' },
			{ input: 'qwertyuiop[]', output: 'խւէրտեըիոպչջ', description: 'Armenian MS legacy Eastern 1st row No Shift' },
			{ input: 'QWERTYUIOP{}',output: 'ԽՒԷՐՏԵԸԻՈՊՉՋ', description: 'Armenian MS legacy Eastern 1st row With Shift' },
			{ input: 'asdfghjkl;\'\\', output: 'ասդֆքհճկլթփ\'', description: 'Armenian MS legacy Eastern 2nd row No Shift' },
			{ input: 'ASDFGHJKL:"|', output: 'ԱՍԴՖՔՀՃԿԼԹՓ՞', description: 'Armenian MS legacy Eastern 2nd row With Shift' },
			{ input: 'zxcvbnm,./', output: 'զցգվբնմշղծ', description: 'Armenian MS legacy Eastern 3rd row No Shift' },
			{ input: 'ZXCVBNM<>?', output: 'ԶՑԳՎԲՆՄՇՂԾ', description: 'Armenian MS legacy Eastern 3rd row With Shift' }
		],
		inputmethod: 'hy-emslegacy'
	},{
		description: 'Dinka din-fqsx input method test',
		tests: [
			{ input: 'ufu', output: 'uɣu', description: 'Dinka uɣu' },
			{ input: 'aqa', output: 'aŋa', description: 'Dinka aŋa' },
			{ input: 'ese', output: 'eɛe', description: 'Dinka eɛe' },
			{ input: 'oxo', output: 'oɔo', description: 'Dinka oɔo' },
			{ input: 'UFU', output: 'UƔU', description: 'Dinka UƔU' },
			{ input: 'AQA', output: 'AŊA', description: 'Dinka AŊA' },
			{ input: 'ESE', output: 'EƐE', description: 'Dinka EƐE' },
			{ input: 'OXO', output: 'OƆO', description: 'Dinka OƆO' },
			{ input: 'ka;k', output: 'käk', description: 'Dinka käk' },
			{ input: 'pe;p', output: 'pëp', description: 'Dinka pëp' },
			{ input: 'ds;d', output: 'dɛ̈d', description: 'Dinka dɛ̈d' },
			{ input: 'ki;k', output: 'kïk', description: 'Dinka kïk' },
			{ input: 'to;t', output: 'töt', description: 'Dinka töt' },
			{ input: 'rx;r', output: 'rɔ̈r', description: 'Dinka rɔ̈r' },
			{ input: 'code\\;', output: 'code;', description: 'Dinka code;' },
			{ input: 'C:\\\\File\\s', output: 'C:\\Files', description: 'Dinka C:\\Files' },
			{ input: '\\Fa\\f', output: 'Faf', description: 'Dinka Faf' },
			{ input: '\\Qu\\q', output: 'Quq', description: 'Dinka Quq' },
			{ input: '\\So\\s', output: 'Sos', description: 'Dinka Sos' },
			{ input: '\\Xi\\x', output: 'Xix', description: 'Dinka Xix' }
		],
		inputmethod: 'din-fqsx'
	},{
		description: 'Armenian MS legacy Westerm layout with extended keys test',
		tests: [
			{ input: [ [ '7', false ] ], output: '․', description: 'Armenian mijaket ․' },
			{ input: [ [ '.', true ] ], output: '.', description: 'Latin dot .' },
			{ input: '`1234567890-=', output: '՝։ձյ՛,-․«»օռժ', description: 'Armenian MS legacy Westerm digits row No Shift' },
			{ input: '~!@#$%^&*()_+', output: '՜1ՁՅ֏49և()ՕՌԺ', description: 'Armenian MS legacy Westerm digits row With Shift' },
			{ input: 'qwertyuiop[]', output: 'խվէրդեըիոբչջ', description: 'Armenian MS legacy Westerm 1st row No Shift' },
			{ input: 'QWERTYUIOP{}',output: 'ԽՎԷՐԴԵԸԻՈԲՉՋ', description: 'Armenian MS legacy Westerm 1st row With Shift' },
			{ input: 'asdfghjkl;\'\\', output: 'աստֆկհճքլթփ\'', description: 'Armenian MS legacy Westerm 2nd row No Shift' },
			{ input: 'ASDFGHJKL:"|', output: 'ԱՍՏՖԿՀՃՔԼԹՓ՞', description: 'Armenian MS legacy Westerm 2nd row With Shift' },
			{ input: 'zxcvbnm,./', output: 'զցգւպնմշղծ', description: 'Armenian MS legacy Westerm 3rd row No Shift' },
			{ input: 'ZXCVBNM<>?', output: 'ԶՑԳՒՊՆՄՇՂԾ', description: 'Armenian MS legacy Westerm 3rd row With Shift' }
		],
		inputmethod: 'hy-wmslegacy'
	},{
		description: 'Batak QWERTY test',
		tests: [
			{ input: 'q', output: 'ᯥ', description: 'Batak QWERTY - q - u' },
			{ input: 'w', output: 'ᯋ', description: 'Batak QWERTY - w' },
			{ input: 'e', output: 'ᯧ', description: 'Batak QWERTY - e' },
			{ input: 'r', output: 'ᯒ', description: 'Batak QWERTY - r' },
			{ input: 't', output: 'ᯖ', description: 'Batak QWERTY - t' },
			{ input: 'y', output: 'ᯛ', description: 'Batak QWERTY - y' },
			{ input: 'u', output: 'ᯮ', description: 'Batak QWERTY - u' },
			{ input: 'i', output: 'ᯪ', description: 'Batak QWERTY - i' },
			{ input: 'o', output: 'ᯬ', description: 'Batak QWERTY - o' },
			{ input: 'p', output: 'ᯇ', description: 'Batak QWERTY - p' },

			{ input: 'a', output: 'ᯀ', description: 'Batak QWERTY - a' },
			{ input: 's', output: 'ᯘ', description: 'Batak QWERTY - s' },
			{ input: 'd', output: 'ᯑ', description: 'Batak QWERTY - d' },
			{ input: 'f', output: '᯲', description: 'Batak QWERTY - f - pangolat/virama' },
			{ input: 'g', output: 'ᯎ', description: 'Batak QWERTY - g' },
			{ input: 'h', output: 'ᯂ', description: 'Batak QWERTY - h' },
			{ input: 'j', output: 'ᯐ', description: 'Batak QWERTY - j' },
			{ input: 'k', output: 'ᯤ', description: 'Batak QWERTY - k - i' },
			{ input: 'l', output: 'ᯞ', description: 'Batak QWERTY - l' },

			{ input: 'z', output: 'ᯝ', description: 'Batak QWERTY - z - nga' },
			{ input: 'x', output: 'ᯢ', description: 'Batak QWERTY - x - nda' },
			{ input: 'c', output: 'ᯡ', description: 'Batak QWERTY - c' },
			{ input: 'v', output: 'ᯣ', description: 'Batak QWERTY - v - mba' },
			{ input: 'b', output: 'ᯅ', description: 'Batak QWERTY - b' },
			{ input: 'n', output: 'ᯉ', description: 'Batak QWERTY - n' },
			{ input: 'm', output: 'ᯔ', description: 'Batak QWERTY - m' },

			{ input: 'Q', output: 'ᯍ', description: 'Batak QWERTY - Q - pakpak wa' },
			{ input: 'W', output: 'ᯌ', description: 'Batak QWERTY - W - simalungun wa' },
			{ input: 'E', output: 'ᯨ', description: 'Batak QWERTY - E - pakpak e' },
			{ input: 'R', output: 'ᯓ', description: 'Batak QWERTY - R - simalungun ra' },
			{ input: 'T', output: 'ᯗ', description: 'Batak QWERTY - T - northern ta' },
			{ input: 'Y', output: 'ᯜ', description: 'Batak QWERTY - Y - simalungun ya' },
			{ input: 'U', output: 'ᯯ', description: 'Batak QWERTY - U - u for simalungun sa' },
			{ input: 'I', output: 'ᯫ', description: 'Batak QWERTY - I - karo i' },
			{ input: 'O', output: 'ᯭ', description: 'Batak QWERTY - O - karo o' },
			{ input: 'P', output: 'ᯈ', description: 'Batak QWERTY - P - simalungun p' },

			{ input: 'A', output: 'ᯁ', description: 'Batak QWERTY - A - simalungun a' },
			{ input: 'S', output: 'ᯙ', description: 'Batak QWERTY - S - simalungun sa' },

			{ input: 'F', output: '᯳', description: 'Batak QWERTY - F - virama' },
			{ input: 'G', output: 'ᯏ', description: 'Batak QWERTY - G - simalungun ga' },
			{ input: 'H', output: 'ᯃ', description: 'Batak QWERTY - H - simalungun ha' },
			{ input: 'J', output: 'ᯄ', description: 'Batak QWERTY - J - mandailing ha' },

			{ input: 'L', output: 'ᯟ', description: 'Batak QWERTY - L - simalungun la' },

			{ input: 'Z', output: 'ᯚ', description: 'Batak QWERTY - Z - mandailing sa' },

			{ input: 'B', output: 'ᯆ', description: 'Batak QWERTY - B - karo ba' },
			{ input: 'N', output: 'ᯊ', description: 'Batak QWERTY - N - mandailing na' },
			{ input: 'M', output: 'ᯕ', description: 'Batak QWERTY - M - simalungun ma' },

			{ input: '`', output: 'ᯠ', description: 'Batak QWERTY - ` - nya' },
			{ input: '=', output: 'ᯱ', description: 'Batak QWERTY - = - consonant sign h' },
			{ input: '+', output: '᯦', description: 'Batak QWERTY - + - tompi' },
			{ input: '-', output: '', description: 'Batak QWERTY - ng - amisara' },
			{ input: '_', output: 'ᯩ', description: 'Batak QWERTY - _ - talinga' },
			{ input: '', output: '', description: 'Batak QWERTY - ' },

			{ input: 'B', output: 'ᯆ', description: 'Batak QWERTY - B - karo ba' },

			{ input: [ [ '4', true ] ], output: '᯼', description: 'Batak QWERTY - alt-4 - bindu na metek' },
			{ input: [ [ '5', true ] ], output: '᯽', description: 'Batak QWERTY - alt-5 - bindu pinarboras' },
			{ input: [ [ '6', true ] ], output: '᯾', description: 'Batak QWERTY - alt-6 - bindu judul' },
			{ input: [ [ '7', true ] ], output: '᯿', description: 'Batak QWERTY - alt-7 - bindu pangolat' },

			{ input: [ [ 'w', true ] ], output: 'ᯍ', description: 'Batak QWERTY - alt-w' },
			{ input: [ [ '`', true ] ], output: '`', description: 'Batak QWERTY - alt-`' }
		],
		inputmethod: 'batak-qwerty'
	},{
		description: 'Javanese transliteration test',
		tests: [
			{ input: '\\A', output: 'A', description: 'Javanese transliteration escape mode - A' },
			{ input: 'A', output: 'ꦄ', description: 'standalone vocal "A" - for foreign words' },
			{ input: 'E', output: 'ꦌ', description: 'standalone vocal "E" - for foreign words' },
			{ input: 'I', output: 'ꦆ', description: 'standalone vocal "I" - for foreign words' },
			{ input: 'O', output: 'ꦎ', description: 'standalone vocal "O" - for foreign words' },
			{ input: 'U', output: 'ꦈ', description: 'standalone vocal "U" - for foreign words' },
			{ input: 'X', output: 'ꦄꦼ', description: 'standalone vocal "Ê" - for foreign words' },
			{ input: 'h', output: 'ꦲ꧀', description: 'ha with a virama' },
			{ input: 'ha', output: 'ꦲ', description: 'first letter - ha - also used to write "a", used to write Javanese word' },
			{ input: 'a', output: 'ꦲ', description: 'first letter - ha - also used to write "a", used to write Javanese word' },
			{ input: 'e', output: 'ꦲꦺ', description: 'first letter - ha - with a "taling", also used to write "e", used to write Javanese word' },
			{ input: 'i', output: 'ꦲꦶ', description: 'first letter - ha - with a "wulu", also used to write "i", used to write Javanese word' },
			{ input: 'o', output: 'ꦲꦺꦴ', description: 'first letter - ha - with a "taling tarung", also used to write "o", used to write Javanese word' },
			{ input: 'u', output: 'ꦲꦸ', description: 'first letter - ha - with a "suku", also used to write "u", used to write Javanese word' },
			{ input: 'x', output: 'ꦲꦼ', description: 'first letter - ha - with a "pêpêt", also used to write "ê", used to write Javanese word' },
			{ input: 'q', output: '꧀', description: 'virama' },
			{ input: 'lx', output: 'ꦊ', description: 'special letter - "la" with a "pêpêt" - "nga lelet"' },
			{ input: 'rx', output: 'ꦉ', description: 'special letter - "ra" with a "pêpêt" - "pa cerek"' },
			{ input: 'ning', output: 'ꦤꦶꦁ', description: '"na" + "cecak" (word ends with "ng")' },
			{ input: 'cor', output: 'ꦕꦺꦴꦂ', description: '"ca" + "layar" (word ends with "r")' },
			{ input: 'reh', output: 'ꦫꦺꦃ', description: '"ra" + "wignyan" (word ends with "h")' },
			{ input: 'kya', output: 'ꦏꦾ', description: '"ka" + "pengkal" (word with "-y-" in the middle)' },
			{ input: 'dra', output: 'ꦢꦿ', description: '"da" + "cakra" (word with "-r-" in the middle)' },
			{ input: 'trx', output: 'ꦠꦽ', description: '"ta" + "cakra keret" (word with "-r-" in the middle, and ends with "ê")' },
			{ input: 'sii', output: 'ꦱꦷ', description: '"sa" + "wulu melik"' },
			{ input: 'wuu', output: 'ꦮꦹ', description: '"wa" + "suku mendut"' },
			{ input: 'lai', output: 'ꦭꦻ', description: '"la" + "dirga mure"' },
			{ input: ')', output: '꧍', description: 'last line test' }
		],
		inputmethod: 'jv-transliteration'
	},{
		description: 'Kannada KGP test',
		tests: [
			{ input: 'aAiIuURRXeEYoOVaMaH', output: 'ಅಆಇಈಉಊಋೠಎಏಐಒಓಔಅಂಅಃ', description: 'vowels ಅಆಇಈಉಊಋೠಎಏಐಒಓಔಅಂಅಃ' },
			{ input: 'kKgGZ', output: 'ಕಖಗಘಙ', description: 'Consonants ಕಖಗಘಙ' },
			{ input: 'cCjJz', output: 'ಚಛಜಝಞ', description: 'Consonants ಚಛಜಝಞ' },
			{ input: 'qQwWN', output: 'ಟಠಡಢಣ', description: 'Consonants ಟಠಡಢಣ' },
			{ input: 'tTdDn', output: 'ತಥದಧನ', description: 'Consonants ತಥದಧನ' },
			{ input: 'pPbBm', output: 'ಪಫಬಭಮ', description: 'Consonants ಪಫಬಭಮ' },
			{ input: 'yrrXlvSxshLLX', output: 'ಯರಱಲವಶಷಸಹಳೞ', description: 'Consonants ಯರಲವಶಷಸಹಳ' },
			{ input: 'kf', output: 'ಕ್', description: 'kf => ಕ್' },
			{ input: 'kA', output: 'ಕಾ', description: 'kA => ಕಾ' },
			{ input: 'ki', output: 'ಕಿ', description: 'ki => ಕಿ' },
			{ input: 'kI', output: 'ಕೀ', description: 'kI => ಕೀ' },
			{ input: 'ku', output: 'ಕು', description: 'ku => ಕು' },
			{ input: 'kU', output: 'ಕೂ', description: 'kU => ಕೂ' },
			{ input: 'kR', output: 'ಕೃ', description: 'kR => ಕೃ' },
			{ input: 'kRX', output: 'ಕೄ', description: 'kRX => ಕೄ' },
			{ input: 'ke', output: 'ಕೆ', description: 'ke => ಕೆ' },
			{ input: 'kE', output: 'ಕೇ', description: 'kE => ಕೇ' },
			{ input: 'kY', output: 'ಕೈ', description: 'kY => ಕೈ' },
			{ input: 'ko', output: 'ಕೊ', description: 'ko => ಕೊ' },
			{ input: 'kO', output: 'ಕೋ', description: 'kO => ಕೋ' },
			{ input: 'kV', output: 'ಕೌ', description: 'kV => ಕೌ' },
			{ input: 'kM', output: 'ಕಂ', description: 'kM => ಕಂ' },
			{ input: 'kH', output: 'ಕಃ', description: 'kH => ಕಃ' },
			{ input: 'rAxfqfrIy', output: 'ರಾಷ್ಟ್ರೀಯ', description: 'complex consonants ರಾಷ್ಟ್ರೀಯ' },
			{ input: 'rFfyAMkf', output: 'ರ\u200d್ಯಾಂಕ್', description: 'ZWJ ರ\u200d್ಯಾಂಕ್' } // with ZWJ
		],
		inputmethod: 'kn-kgp'
	},{
		description: 'Kannada Transliteration test',
		tests: [
			{ input: 'd~ha', output: 'ದ್ಹ', description: 'd~ha for ದ್ಹ in Kannada transliteration' },
			{ input: 'W', output: 'ಔ', description: 'W for ಔ in Kannada transliteration' },
			{ input: 'Y', output: 'ಐ', description: 'Y for ಐ in Kannada transliteration' },
			{ input: 'Yeso', output: 'ಐಎಸೊ', description: 'Yeso for ಐಎಸೊ in Kannada transliteration' },
			{ input: 'nAkYdu', output: 'ನಾಕೈದು', description: 'nAkYdu for ನಾಕೈದು in Kannada transliteration' },
			{ input: 'gautam', output: 'ಗೌತಮ್', description: 'gautam for ಗೌತಮ್ in Kannada transliteration' },
			{ input: 'nAkaidu', output: 'ನಾಕೈದು', description: 'nAkaidu for ನಾಕೈದು in Kannada transliteration' },
			{ input: 'gWtam', output: 'ಗೌತಮ್', description: 'gWtam for ಗೌತಮ್ in Kannada transliteration' },
			{ input: 'WShadhi', output: 'ಔಷಧಿ', description: 'WShadhi for ಔಷಧಿ in Kannada transliteration' },
			{ input: 'auShadhi', output: 'ಔಷಧಿ', description: 'auShadhi for ಔಷಧಿ in Kannada transliteration' },
			{ input: 'Ydu', output: 'ಐದು', description: 'Ydu for ಐದು in Kannada transliteration' },
			{ input: 'kY', output: 'ಕೈ', description: 'kY for ಕೈ in Kannada transliteration' },
			{ input: 'kW', output: 'ಕೌ', description: 'kW for ಐದು in Kannada transliteration' },
			{ input: 'kR', output: 'ಕೃ', description: 'kR for ಕೃ in Kannada transliteration' },
			{ input: 'kai', output: 'ಕೈ', description: 'kai for ಕೈ in Kannada transliteration' },
			{ input: 'nya', output: 'ನ್ಯ', description: 'nya for ಧನ್ಯವಾದ in Kannada transliteration' },
			{ input: 'rAShTRIya', output: 'ರಾಷ್ಟ್ರೀಯ', description: 'complex consonants rAShTRIya for ರಾಷ್ಟ್ರೀಯ  in Kannada transliteration' },
			{ input: 'raaShTRIya', output: 'ರಾಷ್ಟ್ರೀಯ', description: 'complex consonants raaShTRIya for ರಾಷ್ಟ್ರೀಯ  in Kannada transliteration' },
			{ input: 'j~na', output: 'ಜ್ಞ', description: 'j~n for ಜ್ಞ in Kannada transliteration ' },
			{ input: 'mu', output: 'ಮು', description: 'mu for ಮು in Kannada transliteration ' },
			{ input: 'mU', output: 'ಮೂ', description: 'mU for ಮೂ in Kannada transliteration ' },
			{ input: 'mo', output: 'ಮೊ', description: 'mo for ಮೊ in Kannada transliteration ' },
			{ input: 'rAjxkumAr', output: 'ರಾಜ್\u200dಕುಮಾರ್', description: 'rAjxkumAr for ರಾಜ್\u200dಕುಮಾರ್ in Kannada transliteration ' }, // with ZWJ
			{ input: 'arha', output: 'ಅರ್ಹ', description: 'arha for ಅರ್ಕಾವತ್ತು in ಅರ್ಹ for Kannada transliteration ' },
			{ input: 'dhvani', output: 'ಧ್ವನಿ', description: 'dhvani for ಧ್ವನಿ for Kannada transliteration ' },
			{ input: 'marmara', output: 'ಮರ್ಮರ', description: 'marmara for ಮರ್ಮರ for Kannada transliteration ' },
			{ input: 'svaataMtrya', output: 'ಸ್ವಾತಂತ್ರ್ಯ', description: 'svaataMtrya for ಸ್ವಾತಂತ್ರ್ಯ for Kannada transliteration ' },
			{ input: 'sarvaj~na', output: 'ಸರ್ವಜ್ಞ', description: 'sarvadnya for ಸರ್ವಜ್ಞ for Kannada transliteration ' },
			{ input: 'sarvaj~na', output: 'ಸರ್ವಜ್ಞ', description: 'sarvaj~na for ಸರ್ವಜ್ಞ for Kannada transliteration ' },
			{ input: 'O~M', output: 'ॐ', description: 'O~M for ॐ for Kannada transliteration ' },
			{ input: 'byaaskeT', output: 'ಬ್ಯಾಸ್ಕೆಟ್', description: 'byaaskeT for  ಬ್ಯಾಸ್ಕೆಟ್ for Kannada transliteration ' },
			{ input: 'braakeT', output: 'ಬ್ರಾಕೆಟ್', description: 'braakeT for  ಬ್ರ್ಯಾಕೆಟ್ for Kannada transliteration ' },
			{ input: 'nOTna', output: 'ನೋಟ್ನ', description: 'noTna for ನೋಟ್ನ for Kannada transliteration ' },
			{ input: 'saMskRta', output: 'ಸಂಸ್ಕೃತ', description: 'saMskRta for ಸಂಸ್ಕೃತ for Kannada transliteration ' },
			{ input: 'aalTarxnETIv', output: 'ಆಲ್ಟರ್\u200dನೇಟೀವ್', description: 'aalTarxnETIv for ಆಲ್ಟರ್\u200dನೇಟೀವ್ for Kannada transliteration ' }, // with ZWJ
			{ input: 'kaarxnalli', output: 'ಕಾರ್\u200dನಲ್ಲಿ', description: 'kaarxnalli for ಕಾರ್\u200dನಲ್ಲಿ for Kannada transliteration ' }, // with ZWJ
			{ input: 'a', output: 'ಅ', description: 'a for ಅ in Kannada transliteration' },
			{ input: 'ka', output: 'ಕ', description: 'ka for ಕ in Kannada transliteration' },
			{ input: 'Ka', output: 'ಖ', description: 'Ka for ಖ in Kannada transliteration' },
			{ input: 'ga', output: 'ಗ', description: 'ga for ಗ in Kannada transliteration' },
			{ input: 'Ga', output: 'ಘ', description: 'Ga for ಘ in Kannada transliteration' },
			{ input: '~ga', output: 'ಙ', description: '~ga for ಙ in Kannada transliteration' },
			{ input: 'ca', output: 'ಚ', description: 'ca for ಚ in Kannada transliteration' },
			{ input: 'Ca', output: 'ಛ', description: 'Ca for ಛ in Kannada transliteration' },
			{ input: 'ja', output: 'ಜ', description: 'ja for ಜ in Kannada transliteration' },
			{ input: 'Ja', output: 'ಝ', description: 'Ja for ಝ in Kannada transliteration' },
			{ input: '~ja', output: 'ಞ', description: '~ja for ಞ in Kannada transliteration' },
			{ input: 'Ta', output: 'ಟ', description: 'Ta for ಟ in Kannada transliteration' },
			{ input: 'Tha', output: 'ಠ', description: 'Tha for ಠ in Kannada transliteration' },
			{ input: 'Da', output: 'ಡ', description: 'Da for ಡ in Kannada transliteration' },
			{ input: 'Dha', output: 'ಢ', description: 'Dha for ಢ in Kannada transliteration' },
			{ input: 'Na', output: 'ಣ', description: 'Na for ಣ in Kannada transliteration' },
			{ input: 'ta', output: 'ತ', description: 'ta for ತ in Kannada transliteration' },
			{ input: 'tha', output: 'ಥ', description: 'tha for ಥ in Kannada transliteration' },
			{ input: 'da', output: 'ದ', description: 'da for ದ in Kannada transliteration' },
			{ input: 'dha', output: 'ಧ', description: 'dha for ಧ in Kannada transliteration' },
			{ input: 'na', output: 'ನ', description: 'na for ನ in Kannada transliteration' },
			{ input: 'pa', output: 'ಪ', description: 'pa for ಪ in Kannada transliteration' },
			{ input: 'Pa', output: 'ಫ', description: 'Pa for ಫ in Kannada transliteration' },
			{ input: 'ba', output: 'ಬ', description: 'ba for ಬ in Kannada transliteration' },
			{ input: 'Ba', output: 'ಭ', description: 'Ba for ಭ in Kannada transliteration' },
			{ input: 'ma', output: 'ಮ', description: 'ma for ಮ in Kannada transliteration' },
			{ input: 'ya', output: 'ಯ', description: 'ya for ಯ in Kannada transliteration' },
			{ input: 'ra', output: 'ರ', description: 'ra for ರ in Kannada transliteration' },
			{ input: 'qa', output: 'ಱ', description: 'qa for ಱ in Kannada transliteration' },
			{ input: 'la', output: 'ಲ', description: 'la for ಲ in Kannada transliteration' },
			{ input: 'va', output: 'ವ', description: 'va for ವ in Kannada transliteration' },
			{ input: 'Sa', output: 'ಶ', description: 'Sa for ಶ in Kannada transliteration' },
			{ input: 'Sha', output: 'ಷ', description: 'Sha for ಷ in Kannada transliteration' },
			{ input: 'sa', output: 'ಸ', description: 'sa for ಸ in Kannada transliteration' },
			{ input: 'ha', output: 'ಹ', description: 'ha for ಹ in Kannada transliteration' },
			{ input: 'La', output: 'ಳ', description: 'La for ಳ in Kannada transliteration' },
			{ input: 'Qa', output: 'ೞ', description: 'Qa for ೞ in Kannada transliteration' },
			{ input: 'A', output: 'ಆ', description: 'A for ಆ in Kannada transliteration' },
			{ input: 'kA', output: 'ಕಾ', description: 'kA for ಕಾ in Kannada transliteration' },
			{ input: 'KA', output: 'ಖಾ', description: 'KA for ಖಾ in Kannada transliteration' },
			{ input: 'gA', output: 'ಗಾ', description: 'gA for ಗಾ in Kannada transliteration' },
			{ input: 'GA', output: 'ಘಾ', description: 'GA for ಘಾ in Kannada transliteration' },
			{ input: '~gA', output: 'ಙಾ', description: '~gA for ಙಾ in Kannada transliteration' },
			{ input: 'cA', output: 'ಚಾ', description: 'cA for ಚಾ in Kannada transliteration' },
			{ input: 'CA', output: 'ಛಾ', description: 'CA for ಛಾ in Kannada transliteration' },
			{ input: 'jA', output: 'ಜಾ', description: 'jA for ಜಾ in Kannada transliteration' },
			{ input: 'JA', output: 'ಝಾ', description: 'JA for ಝಾ in Kannada transliteration' },
			{ input: '~jA', output: 'ಞಾ', description: '~jA for ಞಾ in Kannada transliteration' },
			{ input: 'TA', output: 'ಟಾ', description: 'TA for ಟಾ in Kannada transliteration' },
			{ input: 'ThA', output: 'ಠಾ', description: 'ThA for ಠಾ in Kannada transliteration' },
			{ input: 'DA', output: 'ಡಾ', description: 'DA for ಡಾ in Kannada transliteration' },
			{ input: 'DhA', output: 'ಢಾ', description: 'DhA for ಢಾ in Kannada transliteration' },
			{ input: 'NA', output: 'ಣಾ', description: 'NA for ಣಾ in Kannada transliteration' },
			{ input: 'tA', output: 'ತಾ', description: 'tA for ತಾ in Kannada transliteration' },
			{ input: 'thA', output: 'ಥಾ', description: 'thA for ಥಾ in Kannada transliteration' },
			{ input: 'dA', output: 'ದಾ', description: 'dA for ದಾ in Kannada transliteration' },
			{ input: 'dhA', output: 'ಧಾ', description: 'dhA for ಧಾ in Kannada transliteration' },
			{ input: 'nA', output: 'ನಾ', description: 'nA for ನಾ in Kannada transliteration' },
			{ input: 'pA', output: 'ಪಾ', description: 'pA for ಪಾ in Kannada transliteration' },
			{ input: 'PA', output: 'ಫಾ', description: 'PA for ಫಾ in Kannada transliteration' },
			{ input: 'bA', output: 'ಬಾ', description: 'bA for ಬಾ in Kannada transliteration' },
			{ input: 'BA', output: 'ಭಾ', description: 'BA for ಭಾ in Kannada transliteration' },
			{ input: 'mA', output: 'ಮಾ', description: 'mA for ಮಾ in Kannada transliteration' },
			{ input: 'yA', output: 'ಯಾ', description: 'yA for ಯಾ in Kannada transliteration' },
			{ input: 'rA', output: 'ರಾ', description: 'rA for ರಾ in Kannada transliteration' },
			{ input: 'qA', output: 'ಱಾ', description: 'qA for ಱಾ in Kannada transliteration' },
			{ input: 'lA', output: 'ಲಾ', description: 'lA for ಲಾ in Kannada transliteration' },
			{ input: 'vA', output: 'ವಾ', description: 'vA for ವಾ in Kannada transliteration' },
			{ input: 'SA', output: 'ಶಾ', description: 'SA for ಶಾ in Kannada transliteration' },
			{ input: 'ShA', output: 'ಷಾ', description: 'ShA for ಷಾ in Kannada transliteration' },
			{ input: 'sA', output: 'ಸಾ', description: 'sA for ಸಾ in Kannada transliteration' },
			{ input: 'hA', output: 'ಹಾ', description: 'hA for ಹಾ in Kannada transliteration' },
			{ input: 'LA', output: 'ಳಾ', description: 'LA for ಳಾ in Kannada transliteration' },
			{ input: 'QA', output: 'ೞಾ', description: 'QA for ೞಾ in Kannada transliteration' },
			{ input: 'i', output: 'ಇ', description: 'i for ಇ in Kannada transliteration' },
			{ input: 'ki', output: 'ಕಿ', description: 'ki for ಕಿ in Kannada transliteration' },
			{ input: 'Ki', output: 'ಖಿ', description: 'Ki for ಖಿ in Kannada transliteration' },
			{ input: 'gi', output: 'ಗಿ', description: 'gi for ಗಿ in Kannada transliteration' },
			{ input: 'Gi', output: 'ಘಿ', description: 'Gi for ಘಿ in Kannada transliteration' },
			{ input: '~gi', output: 'ಙಿ', description: '~gi for ಙಿ in Kannada transliteration' },
			{ input: 'ci', output: 'ಚಿ', description: 'ci for ಚಿ in Kannada transliteration' },
			{ input: 'Ci', output: 'ಛಿ', description: 'Ci for ಛಿ in Kannada transliteration' },
			{ input: 'ji', output: 'ಜಿ', description: 'ji for ಜಿ in Kannada transliteration' },
			{ input: 'Ji', output: 'ಝಿ', description: 'Ji for ಝಿ in Kannada transliteration' },
			{ input: '~ji', output: 'ಞಿ', description: '~ji for ಞಿ in Kannada transliteration' },
			{ input: 'Ti', output: 'ಟಿ', description: 'Ti for ಟಿ in Kannada transliteration' },
			{ input: 'Thi', output: 'ಠಿ', description: 'Thi for ಠಿ in Kannada transliteration' },
			{ input: 'Di', output: 'ಡಿ', description: 'Di for ಡಿ in Kannada transliteration' },
			{ input: 'Dhi', output: 'ಢಿ', description: 'Dhi for ಢಿ in Kannada transliteration' },
			{ input: 'Ni', output: 'ಣಿ', description: 'Ni for ಣಿ in Kannada transliteration' },
			{ input: 'ti', output: 'ತಿ', description: 'ti for ತಿ in Kannada transliteration' },
			{ input: 'thi', output: 'ಥಿ', description: 'thi for ಥಿ in Kannada transliteration' },
			{ input: 'di', output: 'ದಿ', description: 'di for ದಿ in Kannada transliteration' },
			{ input: 'dhi', output: 'ಧಿ', description: 'dhi for ಧಿ in Kannada transliteration' },
			{ input: 'ni', output: 'ನಿ', description: 'ni for ನಿ in Kannada transliteration' },
			{ input: 'pi', output: 'ಪಿ', description: 'pi for ಪಿ in Kannada transliteration' },
			{ input: 'Pi', output: 'ಫಿ', description: 'Pi for ಫಿ in Kannada transliteration' },
			{ input: 'bi', output: 'ಬಿ', description: 'bi for ಬಿ in Kannada transliteration' },
			{ input: 'Bi', output: 'ಭಿ', description: 'Bi for ಭಿ in Kannada transliteration' },
			{ input: 'mi', output: 'ಮಿ', description: 'mi for ಮಿ in Kannada transliteration' },
			{ input: 'yi', output: 'ಯಿ', description: 'yi for ಯಿ in Kannada transliteration' },
			{ input: 'ri', output: 'ರಿ', description: 'ri for ರಿ in Kannada transliteration' },
			{ input: 'qi', output: 'ಱಿ', description: 'qi for ಱಿ in Kannada transliteration' },
			{ input: 'li', output: 'ಲಿ', description: 'li for ಲಿ in Kannada transliteration' },
			{ input: 'vi', output: 'ವಿ', description: 'vi for ವಿ in Kannada transliteration' },
			{ input: 'Si', output: 'ಶಿ', description: 'Si for ಶಿ in Kannada transliteration' },
			{ input: 'Shi', output: 'ಷಿ', description: 'Shi for ಷಿ in Kannada transliteration' },
			{ input: 'si', output: 'ಸಿ', description: 'si for ಸಿ in Kannada transliteration' },
			{ input: 'hi', output: 'ಹಿ', description: 'hi for ಹಿ in Kannada transliteration' },
			{ input: 'Li', output: 'ಳಿ', description: 'Li for ಳಿ in Kannada transliteration' },
			{ input: 'Qi', output: 'ೞಿ', description: 'Qi for ೞಿ in Kannada transliteration' },
			{ input: 'I', output: 'ಈ', description: 'I for ಈ in Kannada transliteration' },
			{ input: 'kI', output: 'ಕೀ', description: 'kI for ಕೀ in Kannada transliteration' },
			{ input: 'KI', output: 'ಖೀ', description: 'KI for ಖೀ in Kannada transliteration' },
			{ input: 'gI', output: 'ಗೀ', description: 'gI for ಗೀ in Kannada transliteration' },
			{ input: 'GI', output: 'ಘೀ', description: 'GI for ಘೀ in Kannada transliteration' },
			{ input: '~gI', output: 'ಙೀ', description: '~gI for ಙೀ in Kannada transliteration' },
			{ input: 'cI', output: 'ಚೀ', description: 'cI for ಚೀ in Kannada transliteration' },
			{ input: 'CI', output: 'ಛೀ', description: 'CI for ಛೀ in Kannada transliteration' },
			{ input: 'jI', output: 'ಜೀ', description: 'jI for ಜೀ in Kannada transliteration' },
			{ input: 'JI', output: 'ಝೀ', description: 'JI for ಝೀ in Kannada transliteration' },
			{ input: '~jI', output: 'ಞೀ', description: '~jI for ಞೀ in Kannada transliteration' },
			{ input: 'TI', output: 'ಟೀ', description: 'TI for ಟೀ in Kannada transliteration' },
			{ input: 'ThI', output: 'ಠೀ', description: 'ThI for ಠೀ in Kannada transliteration' },
			{ input: 'DI', output: 'ಡೀ', description: 'DI for ಡೀ in Kannada transliteration' },
			{ input: 'DhI', output: 'ಢೀ', description: 'DhI for ಢೀ in Kannada transliteration' },
			{ input: 'NI', output: 'ಣೀ', description: 'NI for ಣೀ in Kannada transliteration' },
			{ input: 'tI', output: 'ತೀ', description: 'tI for ತೀ in Kannada transliteration' },
			{ input: 'thI', output: 'ಥೀ', description: 'thI for ಥೀ in Kannada transliteration' },
			{ input: 'dI', output: 'ದೀ', description: 'dI for ದೀ in Kannada transliteration' },
			{ input: 'dhI', output: 'ಧೀ', description: 'dhI for ಧೀ in Kannada transliteration' },
			{ input: 'nI', output: 'ನೀ', description: 'nI for ನೀ in Kannada transliteration' },
			{ input: 'pI', output: 'ಪೀ', description: 'pI for ಪೀ in Kannada transliteration' },
			{ input: 'PI', output: 'ಫೀ', description: 'PI for ಫೀ in Kannada transliteration' },
			{ input: 'bI', output: 'ಬೀ', description: 'bI for ಬೀ in Kannada transliteration' },
			{ input: 'BI', output: 'ಭೀ', description: 'BI for ಭೀ in Kannada transliteration' },
			{ input: 'mI', output: 'ಮೀ', description: 'mI for ಮೀ in Kannada transliteration' },
			{ input: 'yI', output: 'ಯೀ', description: 'yI for ಯೀ in Kannada transliteration' },
			{ input: 'rI', output: 'ರೀ', description: 'rI for ರೀ in Kannada transliteration' },
			{ input: 'qI', output: 'ಱೀ', description: 'qI for ಱೀ in Kannada transliteration' },
			{ input: 'lI', output: 'ಲೀ', description: 'lI for ಲೀ in Kannada transliteration' },
			{ input: 'vI', output: 'ವೀ', description: 'vI for ವೀ in Kannada transliteration' },
			{ input: 'SI', output: 'ಶೀ', description: 'SI for ಶೀ in Kannada transliteration' },
			{ input: 'ShI', output: 'ಷೀ', description: 'ShI for ಷೀ in Kannada transliteration' },
			{ input: 'sI', output: 'ಸೀ', description: 'sI for ಸೀ in Kannada transliteration' },
			{ input: 'hI', output: 'ಹೀ', description: 'hI for ಹೀ in Kannada transliteration' },
			{ input: 'LI', output: 'ಳೀ', description: 'LI for ಳೀ in Kannada transliteration' },
			{ input: 'QI', output: 'ೞೀ', description: 'QI for ೞೀ in Kannada transliteration' },
			{ input: 'u', output: 'ಉ', description: 'u for ಉ in Kannada transliteration' },
			{ input: 'ku', output: 'ಕು', description: 'ku for ಕು in Kannada transliteration' },
			{ input: 'Ku', output: 'ಖು', description: 'Ku for ಖು in Kannada transliteration' },
			{ input: 'gu', output: 'ಗು', description: 'gu for ಗು in Kannada transliteration' },
			{ input: 'Gu', output: 'ಘು', description: 'Gu for ಘು in Kannada transliteration' },
			{ input: '~gu', output: 'ಙು', description: '~gu for ಙು in Kannada transliteration' },
			{ input: 'cu', output: 'ಚು', description: 'cu for ಚು in Kannada transliteration' },
			{ input: 'Cu', output: 'ಛು', description: 'Cu for ಛು in Kannada transliteration' },
			{ input: 'ju', output: 'ಜು', description: 'ju for ಜು in Kannada transliteration' },
			{ input: 'Ju', output: 'ಝು', description: 'Ju for ಝು in Kannada transliteration' },
			{ input: '~ju', output: 'ಞು', description: '~ju for ಞು in Kannada transliteration' },
			{ input: 'Tu', output: 'ಟು', description: 'Tu for ಟು in Kannada transliteration' },
			{ input: 'Thu', output: 'ಠು', description: 'Thu for ಠು in Kannada transliteration' },
			{ input: 'Du', output: 'ಡು', description: 'Du for ಡು in Kannada transliteration' },
			{ input: 'Dhu', output: 'ಢು', description: 'Dhu for ಢು in Kannada transliteration' },
			{ input: 'Nu', output: 'ಣು', description: 'Nu for ಣು in Kannada transliteration' },
			{ input: 'tu', output: 'ತು', description: 'tu for ತು in Kannada transliteration' },
			{ input: 'thu', output: 'ಥು', description: 'thu for ಥು in Kannada transliteration' },
			{ input: 'du', output: 'ದು', description: 'du for ದು in Kannada transliteration' },
			{ input: 'dhu', output: 'ಧು', description: 'dhu for ಧು in Kannada transliteration' },
			{ input: 'nu', output: 'ನು', description: 'nu for ನು in Kannada transliteration' },
			{ input: 'pu', output: 'ಪು', description: 'pu for ಪು in Kannada transliteration' },
			{ input: 'Pu', output: 'ಫು', description: 'Pu for ಫು in Kannada transliteration' },
			{ input: 'bu', output: 'ಬು', description: 'bu for ಬು in Kannada transliteration' },
			{ input: 'Bu', output: 'ಭು', description: 'Bu for ಭು in Kannada transliteration' },
			{ input: 'mu', output: 'ಮು', description: 'mu for ಮು in Kannada transliteration' },
			{ input: 'yu', output: 'ಯು', description: 'yu for ಯು in Kannada transliteration' },
			{ input: 'ru', output: 'ರು', description: 'ru for ರು in Kannada transliteration' },
			{ input: 'qu', output: 'ಱು', description: 'qu for ಱು in Kannada transliteration' },
			{ input: 'lu', output: 'ಲು', description: 'lu for ಲು in Kannada transliteration' },
			{ input: 'vu', output: 'ವು', description: 'vu for ವು in Kannada transliteration' },
			{ input: 'Su', output: 'ಶು', description: 'Su for ಶು in Kannada transliteration' },
			{ input: 'Shu', output: 'ಷು', description: 'Shu for ಷು in Kannada transliteration' },
			{ input: 'su', output: 'ಸು', description: 'su for ಸು in Kannada transliteration' },
			{ input: 'hu', output: 'ಹು', description: 'hu for ಹು in Kannada transliteration' },
			{ input: 'Lu', output: 'ಳು', description: 'Lu for ಳು in Kannada transliteration' },
			{ input: 'Qu', output: 'ೞು', description: 'Qu for ೞು in Kannada transliteration' },
			{ input: 'U', output: 'ಊ', description: 'U for ಊ in Kannada transliteration' },
			{ input: 'kU', output: 'ಕೂ', description: 'kU for ಕೂ in Kannada transliteration' },
			{ input: 'KU', output: 'ಖೂ', description: 'KU for ಖೂ in Kannada transliteration' },
			{ input: 'gU', output: 'ಗೂ', description: 'gU for ಗೂ in Kannada transliteration' },
			{ input: 'GU', output: 'ಘೂ', description: 'GU for ಘೂ in Kannada transliteration' },
			{ input: '~gU', output: 'ಙೂ', description: '~gU for ಙೂ in Kannada transliteration' },
			{ input: 'cU', output: 'ಚೂ', description: 'cU for ಚೂ in Kannada transliteration' },
			{ input: 'CU', output: 'ಛೂ', description: 'CU for ಛೂ in Kannada transliteration' },
			{ input: 'jU', output: 'ಜೂ', description: 'jU for ಜೂ in Kannada transliteration' },
			{ input: 'JU', output: 'ಝೂ', description: 'JU for ಝೂ in Kannada transliteration' },
			{ input: '~jU', output: 'ಞೂ', description: '~jU for ಞೂ in Kannada transliteration' },
			{ input: 'TU', output: 'ಟೂ', description: 'TU for ಟೂ in Kannada transliteration' },
			{ input: 'ThU', output: 'ಠೂ', description: 'ThU for ಠೂ in Kannada transliteration' },
			{ input: 'DU', output: 'ಡೂ', description: 'DU for ಡೂ in Kannada transliteration' },
			{ input: 'DhU', output: 'ಢೂ', description: 'DhU for ಢೂ in Kannada transliteration' },
			{ input: 'NU', output: 'ಣೂ', description: 'NU for ಣೂ in Kannada transliteration' },
			{ input: 'tU', output: 'ತೂ', description: 'tU for ತೂ in Kannada transliteration' },
			{ input: 'thU', output: 'ಥೂ', description: 'thU for ಥೂ in Kannada transliteration' },
			{ input: 'dU', output: 'ದೂ', description: 'dU for ದೂ in Kannada transliteration' },
			{ input: 'dhU', output: 'ಧೂ', description: 'dhU for ಧೂ in Kannada transliteration' },
			{ input: 'nU', output: 'ನೂ', description: 'nU for ನೂ in Kannada transliteration' },
			{ input: 'pU', output: 'ಪೂ', description: 'pU for ಪೂ in Kannada transliteration' },
			{ input: 'PU', output: 'ಫೂ', description: 'PU for ಫೂ in Kannada transliteration' },
			{ input: 'bU', output: 'ಬೂ', description: 'bU for ಬೂ in Kannada transliteration' },
			{ input: 'BU', output: 'ಭೂ', description: 'BU for ಭೂ in Kannada transliteration' },
			{ input: 'mU', output: 'ಮೂ', description: 'mU for ಮೂ in Kannada transliteration' },
			{ input: 'yU', output: 'ಯೂ', description: 'yU for ಯೂ in Kannada transliteration' },
			{ input: 'rU', output: 'ರೂ', description: 'rU for ರೂ in Kannada transliteration' },
			{ input: 'qU', output: 'ಱೂ', description: 'qU for ಱೂ in Kannada transliteration' },
			{ input: 'lU', output: 'ಲೂ', description: 'lU for ಲೂ in Kannada transliteration' },
			{ input: 'vU', output: 'ವೂ', description: 'vU for ವೂ in Kannada transliteration' },
			{ input: 'SU', output: 'ಶೂ', description: 'SU for ಶೂ in Kannada transliteration' },
			{ input: 'ShU', output: 'ಷೂ', description: 'ShU for ಷೂ in Kannada transliteration' },
			{ input: 'sU', output: 'ಸೂ', description: 'sU for ಸೂ in Kannada transliteration' },
			{ input: 'hU', output: 'ಹೂ', description: 'hU for ಹೂ in Kannada transliteration' },
			{ input: 'LU', output: 'ಳೂ', description: 'LU for ಳೂ in Kannada transliteration' },
			{ input: 'QU', output: 'ೞೂ', description: 'QU for ೞೂ in Kannada transliteration' },
			{ input: 'R', output: 'ಋ', description: 'R for ಋ in Kannada transliteration' },
			{ input: 'kR', output: 'ಕೃ', description: 'kR for ಕೃ in Kannada transliteration' },
			{ input: 'KR', output: 'ಖೃ', description: 'KR for ಖೃ in Kannada transliteration' },
			{ input: 'gR', output: 'ಗೃ', description: 'gR for ಗೃ in Kannada transliteration' },
			{ input: 'GR', output: 'ಘೃ', description: 'GR for ಘೃ in Kannada transliteration' },
			{ input: '~gR', output: 'ಙೃ', description: '~gR for ಙೃ in Kannada transliteration' },
			{ input: 'cR', output: 'ಚೃ', description: 'cR for ಚೃ in Kannada transliteration' },
			{ input: 'CR', output: 'ಛೃ', description: 'CR for ಛೃ in Kannada transliteration' },
			{ input: 'jR', output: 'ಜೃ', description: 'jR for ಜೃ in Kannada transliteration' },
			{ input: 'JR', output: 'ಝೃ', description: 'JR for ಝೃ in Kannada transliteration' },
			{ input: '~jR', output: 'ಞೃ', description: '~jR for ಞೃ in Kannada transliteration' },
			{ input: 'TR', output: 'ಟೃ', description: 'TR for ಟೃ in Kannada transliteration' },
			{ input: 'ThR', output: 'ಠೃ', description: 'ThR for ಠೃ in Kannada transliteration' },
			{ input: 'DR', output: 'ಡೃ', description: 'DR for ಡೃ in Kannada transliteration' },
			{ input: 'DhR', output: 'ಢೃ', description: 'DhR for ಢೃ in Kannada transliteration' },
			{ input: 'NR', output: 'ಣೃ', description: 'NR for ಣೃ in Kannada transliteration' },
			{ input: 'tR', output: 'ತೃ', description: 'tR for ತೃ in Kannada transliteration' },
			{ input: 'thR', output: 'ಥೃ', description: 'thR for ಥೃ in Kannada transliteration' },
			{ input: 'dR', output: 'ದೃ', description: 'dR for ದೃ in Kannada transliteration' },
			{ input: 'dhR', output: 'ಧೃ', description: 'dhR for ಧೃ in Kannada transliteration' },
			{ input: 'nR', output: 'ನೃ', description: 'nR for ನೃ in Kannada transliteration' },
			{ input: 'pR', output: 'ಪೃ', description: 'pR for ಪೃ in Kannada transliteration' },
			{ input: 'PR', output: 'ಫೃ', description: 'PR for ಫೃ in Kannada transliteration' },
			{ input: 'bR', output: 'ಬೃ', description: 'bR for ಬೃ in Kannada transliteration' },
			{ input: 'BR', output: 'ಭೃ', description: 'BR for ಭೃ in Kannada transliteration' },
			{ input: 'mR', output: 'ಮೃ', description: 'mR for ಮೃ in Kannada transliteration' },
			{ input: 'yR', output: 'ಯೃ', description: 'yR for ಯೃ in Kannada transliteration' },
			{ input: 'rR', output: 'ರೃ', description: 'rR for ರೃ in Kannada transliteration' },
			{ input: 'qR', output: 'ಱೃ', description: 'qR for ಱೃ in Kannada transliteration' },
			{ input: 'lR', output: 'ಲೃ', description: 'lR for ಲೃ in Kannada transliteration' },
			{ input: 'vR', output: 'ವೃ', description: 'vR for ವೃ in Kannada transliteration' },
			{ input: 'SR', output: 'ಶೃ', description: 'SR for ಶೃ in Kannada transliteration' },
			{ input: 'ShR', output: 'ಷೃ', description: 'ShR for ಷೃ in Kannada transliteration' },
			{ input: 'sR', output: 'ಸೃ', description: 'sR for ಸೃ in Kannada transliteration' },
			{ input: 'hR', output: 'ಹೃ', description: 'hR for ಹೃ in Kannada transliteration' },
			{ input: 'LR', output: 'ಳೃ', description: 'LR for ಳೃ in Kannada transliteration' },
			{ input: 'QR', output: 'ೞೃ', description: 'QR for ೞೃ in Kannada transliteration' },
			{ input: 'e', output: 'ಎ', description: 'e for ಎ in Kannada transliteration' },
			{ input: 'ke', output: 'ಕೆ', description: 'ke for ಕೆ in Kannada transliteration' },
			{ input: 'Ke', output: 'ಖೆ', description: 'Ke for ಖೆ in Kannada transliteration' },
			{ input: 'ge', output: 'ಗೆ', description: 'ge for ಗೆ in Kannada transliteration' },
			{ input: 'Ge', output: 'ಘೆ', description: 'Ge for ಘೆ in Kannada transliteration' },
			{ input: '~ge', output: 'ಙೆ', description: '~ge for ಙೆ in Kannada transliteration' },
			{ input: 'ce', output: 'ಚೆ', description: 'ce for ಚೆ in Kannada transliteration' },
			{ input: 'Ce', output: 'ಛೆ', description: 'Ce for ಛೆ in Kannada transliteration' },
			{ input: 'je', output: 'ಜೆ', description: 'je for ಜೆ in Kannada transliteration' },
			{ input: 'Je', output: 'ಝೆ', description: 'Je for ಝೆ in Kannada transliteration' },
			{ input: '~je', output: 'ಞೆ', description: '~je for ಞೆ in Kannada transliteration' },
			{ input: 'Te', output: 'ಟೆ', description: 'Te for ಟೆ in Kannada transliteration' },
			{ input: 'The', output: 'ಠೆ', description: 'The for ಠೆ in Kannada transliteration' },
			{ input: 'De', output: 'ಡೆ', description: 'De for ಡೆ in Kannada transliteration' },
			{ input: 'Dhe', output: 'ಢೆ', description: 'Dhe for ಢೆ in Kannada transliteration' },
			{ input: 'Ne', output: 'ಣೆ', description: 'Ne for ಣೆ in Kannada transliteration' },
			{ input: 'te', output: 'ತೆ', description: 'te for ತೆ in Kannada transliteration' },
			{ input: 'the', output: 'ಥೆ', description: 'the for ಥೆ in Kannada transliteration' },
			{ input: 'de', output: 'ದೆ', description: 'de for ದೆ in Kannada transliteration' },
			{ input: 'dhe', output: 'ಧೆ', description: 'dhe for ಧೆ in Kannada transliteration' },
			{ input: 'ne', output: 'ನೆ', description: 'ne for ನೆ in Kannada transliteration' },
			{ input: 'pe', output: 'ಪೆ', description: 'pe for ಪೆ in Kannada transliteration' },
			{ input: 'Pe', output: 'ಫೆ', description: 'Pe for ಫೆ in Kannada transliteration' },
			{ input: 'be', output: 'ಬೆ', description: 'be for ಬೆ in Kannada transliteration' },
			{ input: 'Be', output: 'ಭೆ', description: 'Be for ಭೆ in Kannada transliteration' },
			{ input: 'me', output: 'ಮೆ', description: 'me for ಮೆ in Kannada transliteration' },
			{ input: 'ye', output: 'ಯೆ', description: 'ye for ಯೆ in Kannada transliteration' },
			{ input: 're', output: 'ರೆ', description: 're for ರೆ in Kannada transliteration' },
			{ input: 'qe', output: 'ಱೆ', description: 'qe for ಱೆ in Kannada transliteration' },
			{ input: 'le', output: 'ಲೆ', description: 'le for ಲೆ in Kannada transliteration' },
			{ input: 've', output: 'ವೆ', description: 've for ವೆ in Kannada transliteration' },
			{ input: 'Se', output: 'ಶೆ', description: 'Se for ಶೆ in Kannada transliteration' },
			{ input: 'She', output: 'ಷೆ', description: 'She for ಷೆ in Kannada transliteration' },
			{ input: 'se', output: 'ಸೆ', description: 'se for ಸೆ in Kannada transliteration' },
			{ input: 'he', output: 'ಹೆ', description: 'he for ಹೆ in Kannada transliteration' },
			{ input: 'Le', output: 'ಳೆ', description: 'Le for ಳೆ in Kannada transliteration' },
			{ input: 'Qe', output: 'ೞೆ', description: 'Qe for ೞೆ in Kannada transliteration' },
			{ input: 'E', output: 'ಏ', description: 'E for ಏ in Kannada transliteration' },
			{ input: 'kE', output: 'ಕೇ', description: 'kE for ಕೇ in Kannada transliteration' },
			{ input: 'KE', output: 'ಖೇ', description: 'KE for ಖೇ in Kannada transliteration' },
			{ input: 'gE', output: 'ಗೇ', description: 'gE for ಗೇ in Kannada transliteration' },
			{ input: 'GE', output: 'ಘೇ', description: 'GE for ಘೇ in Kannada transliteration' },
			{ input: '~gE', output: 'ಙೇ', description: '~gE for ಙೇ in Kannada transliteration' },
			{ input: 'cE', output: 'ಚೇ', description: 'cE for ಚೇ in Kannada transliteration' },
			{ input: 'CE', output: 'ಛೇ', description: 'CE for ಛೇ in Kannada transliteration' },
			{ input: 'jE', output: 'ಜೇ', description: 'jE for ಜೇ in Kannada transliteration' },
			{ input: 'JE', output: 'ಝೇ', description: 'JE for ಝೇ in Kannada transliteration' },
			{ input: '~jE', output: 'ಞೇ', description: '~jE for ಞೇ in Kannada transliteration' },
			{ input: 'TE', output: 'ಟೇ', description: 'TE for ಟೇ in Kannada transliteration' },
			{ input: 'ThE', output: 'ಠೇ', description: 'ThE for ಠೇ in Kannada transliteration' },
			{ input: 'DE', output: 'ಡೇ', description: 'DE for ಡೇ in Kannada transliteration' },
			{ input: 'DhE', output: 'ಢೇ', description: 'DhE for ಢೇ in Kannada transliteration' },
			{ input: 'NE', output: 'ಣೇ', description: 'NE for ಣೇ in Kannada transliteration' },
			{ input: 'tE', output: 'ತೇ', description: 'tE for ತೇ in Kannada transliteration' },
			{ input: 'thE', output: 'ಥೇ', description: 'thE for ಥೇ in Kannada transliteration' },
			{ input: 'dE', output: 'ದೇ', description: 'dE for ದೇ in Kannada transliteration' },
			{ input: 'dhE', output: 'ಧೇ', description: 'dhE for ಧೇ in Kannada transliteration' },
			{ input: 'nE', output: 'ನೇ', description: 'nE for ನೇ in Kannada transliteration' },
			{ input: 'pE', output: 'ಪೇ', description: 'pE for ಪೇ in Kannada transliteration' },
			{ input: 'PE', output: 'ಫೇ', description: 'PE for ಫೇ in Kannada transliteration' },
			{ input: 'bE', output: 'ಬೇ', description: 'bE for ಬೇ in Kannada transliteration' },
			{ input: 'BE', output: 'ಭೇ', description: 'BE for ಭೇ in Kannada transliteration' },
			{ input: 'mE', output: 'ಮೇ', description: 'mE for ಮೇ in Kannada transliteration' },
			{ input: 'yE', output: 'ಯೇ', description: 'yE for ಯೇ in Kannada transliteration' },
			{ input: 'rE', output: 'ರೇ', description: 'rE for ರೇ in Kannada transliteration' },
			{ input: 'qE', output: 'ಱೇ', description: 'qE for ಱೇ in Kannada transliteration' },
			{ input: 'lE', output: 'ಲೇ', description: 'lE for ಲೇ in Kannada transliteration' },
			{ input: 'vE', output: 'ವೇ', description: 'vE for ವೇ in Kannada transliteration' },
			{ input: 'SE', output: 'ಶೇ', description: 'SE for ಶೇ in Kannada transliteration' },
			{ input: 'ShE', output: 'ಷೇ', description: 'ShE for ಷೇ in Kannada transliteration' },
			{ input: 'sE', output: 'ಸೇ', description: 'sE for ಸೇ in Kannada transliteration' },
			{ input: 'hE', output: 'ಹೇ', description: 'hE for ಹೇ in Kannada transliteration' },
			{ input: 'LE', output: 'ಳೇ', description: 'LE for ಳೇ in Kannada transliteration' },
			{ input: 'QE', output: 'ೞೇ', description: 'QE for ೞೇ in Kannada transliteration' },
			{ input: 'Y', output: 'ಐ', description: 'Y for ಐ in Kannada transliteration' },
			{ input: 'kY', output: 'ಕೈ', description: 'kY for ಕೈ in Kannada transliteration' },
			{ input: 'KY', output: 'ಖೈ', description: 'KY for ಖೈ in Kannada transliteration' },
			{ input: 'gY', output: 'ಗೈ', description: 'gY for ಗೈ in Kannada transliteration' },
			{ input: 'GY', output: 'ಘೈ', description: 'GY for ಘೈ in Kannada transliteration' },
			{ input: '~gY', output: 'ಙೈ', description: '~gY for ಙೈ in Kannada transliteration' },
			{ input: 'cY', output: 'ಚೈ', description: 'cY for ಚೈ in Kannada transliteration' },
			{ input: 'CY', output: 'ಛೈ', description: 'CY for ಛೈ in Kannada transliteration' },
			{ input: 'jY', output: 'ಜೈ', description: 'jY for ಜೈ in Kannada transliteration' },
			{ input: 'JY', output: 'ಝೈ', description: 'JY for ಝೈ in Kannada transliteration' },
			{ input: '~jY', output: 'ಞೈ', description: '~jY for ಞೈ in Kannada transliteration' },
			{ input: 'TY', output: 'ಟೈ', description: 'TY for ಟೈ in Kannada transliteration' },
			{ input: 'ThY', output: 'ಠೈ', description: 'ThY for ಠೈ in Kannada transliteration' },
			{ input: 'DY', output: 'ಡೈ', description: 'DY for ಡೈ in Kannada transliteration' },
			{ input: 'DhY', output: 'ಢೈ', description: 'DhY for ಢೈ in Kannada transliteration' },
			{ input: 'NY', output: 'ಣೈ', description: 'NY for ಣೈ in Kannada transliteration' },
			{ input: 'tY', output: 'ತೈ', description: 'tY for ತೈ in Kannada transliteration' },
			{ input: 'thY', output: 'ಥೈ', description: 'thY for ಥೈ in Kannada transliteration' },
			{ input: 'dY', output: 'ದೈ', description: 'dY for ದೈ in Kannada transliteration' },
			{ input: 'dhY', output: 'ಧೈ', description: 'dhY for ಧೈ in Kannada transliteration' },
			{ input: 'nY', output: 'ನೈ', description: 'nY for ನೈ in Kannada transliteration' },
			{ input: 'pY', output: 'ಪೈ', description: 'pY for ಪೈ in Kannada transliteration' },
			{ input: 'PY', output: 'ಫೈ', description: 'PY for ಫೈ in Kannada transliteration' },
			{ input: 'bY', output: 'ಬೈ', description: 'bY for ಬೈ in Kannada transliteration' },
			{ input: 'BY', output: 'ಭೈ', description: 'BY for ಭೈ in Kannada transliteration' },
			{ input: 'mY', output: 'ಮೈ', description: 'mY for ಮೈ in Kannada transliteration' },
			{ input: 'yY', output: 'ಯೈ', description: 'yY for ಯೈ in Kannada transliteration' },
			{ input: 'rY', output: 'ರೈ', description: 'rY for ರೈ in Kannada transliteration' },
			{ input: 'qY', output: 'ಱೈ', description: 'qY for ಱೈ in Kannada transliteration' },
			{ input: 'lY', output: 'ಲೈ', description: 'lY for ಲೈ in Kannada transliteration' },
			{ input: 'vY', output: 'ವೈ', description: 'vY for ವೈ in Kannada transliteration' },
			{ input: 'SY', output: 'ಶೈ', description: 'SY for ಶೈ in Kannada transliteration' },
			{ input: 'ShY', output: 'ಷೈ', description: 'ShY for ಷೈ in Kannada transliteration' },
			{ input: 'sY', output: 'ಸೈ', description: 'sY for ಸೈ in Kannada transliteration' },
			{ input: 'hY', output: 'ಹೈ', description: 'hY for ಹೈ in Kannada transliteration' },
			{ input: 'LY', output: 'ಳೈ', description: 'LY for ಳೈ in Kannada transliteration' },
			{ input: 'QY', output: 'ೞೈ', description: 'QY for ೞೈ in Kannada transliteration' },
			{ input: 'o', output: 'ಒ', description: 'o for ಒ in Kannada transliteration' },
			{ input: 'ko', output: 'ಕೊ', description: 'ko for ಕೊ in Kannada transliteration' },
			{ input: 'Ko', output: 'ಖೊ', description: 'Ko for ಖೊ in Kannada transliteration' },
			{ input: 'go', output: 'ಗೊ', description: 'go for ಗೊ in Kannada transliteration' },
			{ input: 'Go', output: 'ಘೊ', description: 'Go for ಘೊ in Kannada transliteration' },
			{ input: '~go', output: 'ಙೊ', description: '~go for ಙೊ in Kannada transliteration' },
			{ input: 'co', output: 'ಚೊ', description: 'co for ಚೊ in Kannada transliteration' },
			{ input: 'Co', output: 'ಛೊ', description: 'Co for ಛೊ in Kannada transliteration' },
			{ input: 'jo', output: 'ಜೊ', description: 'jo for ಜೊ in Kannada transliteration' },
			{ input: 'Jo', output: 'ಝೊ', description: 'Jo for ಝೊ in Kannada transliteration' },
			{ input: '~jo', output: 'ಞೊ', description: '~jo for ಞೊ in Kannada transliteration' },
			{ input: 'To', output: 'ಟೊ', description: 'To for ಟೊ in Kannada transliteration' },
			{ input: 'Tho', output: 'ಠೊ', description: 'Tho for ಠೊ in Kannada transliteration' },
			{ input: 'Do', output: 'ಡೊ', description: 'Do for ಡೊ in Kannada transliteration' },
			{ input: 'Dho', output: 'ಢೊ', description: 'Dho for ಢೊ in Kannada transliteration' },
			{ input: 'No', output: 'ಣೊ', description: 'No for ಣೊ in Kannada transliteration' },
			{ input: 'to', output: 'ತೊ', description: 'to for ತೊ in Kannada transliteration' },
			{ input: 'tho', output: 'ಥೊ', description: 'tho for ಥೊ in Kannada transliteration' },
			{ input: 'do', output: 'ದೊ', description: 'do for ದೊ in Kannada transliteration' },
			{ input: 'dho', output: 'ಧೊ', description: 'dho for ಧೊ in Kannada transliteration' },
			{ input: 'no', output: 'ನೊ', description: 'no for ನೊ in Kannada transliteration' },
			{ input: 'po', output: 'ಪೊ', description: 'po for ಪೊ in Kannada transliteration' },
			{ input: 'Po', output: 'ಫೊ', description: 'Po for ಫೊ in Kannada transliteration' },
			{ input: 'bo', output: 'ಬೊ', description: 'bo for ಬೊ in Kannada transliteration' },
			{ input: 'Bo', output: 'ಭೊ', description: 'Bo for ಭೊ in Kannada transliteration' },
			{ input: 'mo', output: 'ಮೊ', description: 'mo for ಮೊ in Kannada transliteration' },
			{ input: 'yo', output: 'ಯೊ', description: 'yo for ಯೊ in Kannada transliteration' },
			{ input: 'ro', output: 'ರೊ', description: 'ro for ರೊ in Kannada transliteration' },
			{ input: 'qo', output: 'ಱೊ', description: 'qo for ಱೊ in Kannada transliteration' },
			{ input: 'lo', output: 'ಲೊ', description: 'lo for ಲೊ in Kannada transliteration' },
			{ input: 'vo', output: 'ವೊ', description: 'vo for ವೊ in Kannada transliteration' },
			{ input: 'So', output: 'ಶೊ', description: 'So for ಶೊ in Kannada transliteration' },
			{ input: 'Sho', output: 'ಷೊ', description: 'Sho for ಷೊ in Kannada transliteration' },
			{ input: 'so', output: 'ಸೊ', description: 'so for ಸೊ in Kannada transliteration' },
			{ input: 'ho', output: 'ಹೊ', description: 'ho for ಹೊ in Kannada transliteration' },
			{ input: 'Lo', output: 'ಳೊ', description: 'Lo for ಳೊ in Kannada transliteration' },
			{ input: 'Qo', output: 'ೞೊ', description: 'Qo for ೞೊ in Kannada transliteration' },
			{ input: 'O', output: 'ಓ', description: 'O for ಓ in Kannada transliteration' },
			{ input: 'kO', output: 'ಕೋ', description: 'kO for ಕೋ in Kannada transliteration' },
			{ input: 'KO', output: 'ಖೋ', description: 'KO for ಖೋ in Kannada transliteration' },
			{ input: 'gO', output: 'ಗೋ', description: 'gO for ಗೋ in Kannada transliteration' },
			{ input: 'GO', output: 'ಘೋ', description: 'GO for ಘೋ in Kannada transliteration' },
			{ input: '~gO', output: 'ಙೋ', description: '~gO for ಙೋ in Kannada transliteration' },
			{ input: 'cO', output: 'ಚೋ', description: 'cO for ಚೋ in Kannada transliteration' },
			{ input: 'CO', output: 'ಛೋ', description: 'CO for ಛೋ in Kannada transliteration' },
			{ input: 'jO', output: 'ಜೋ', description: 'jO for ಜೋ in Kannada transliteration' },
			{ input: 'JO', output: 'ಝೋ', description: 'JO for ಝೋ in Kannada transliteration' },
			{ input: '~jO', output: 'ಞೋ', description: '~jO for ಞೋ in Kannada transliteration' },
			{ input: 'TO', output: 'ಟೋ', description: 'TO for ಟೋ in Kannada transliteration' },
			{ input: 'ThO', output: 'ಠೋ', description: 'ThO for ಠೋ in Kannada transliteration' },
			{ input: 'DO', output: 'ಡೋ', description: 'DO for ಡೋ in Kannada transliteration' },
			{ input: 'DhO', output: 'ಢೋ', description: 'DhO for ಢೋ in Kannada transliteration' },
			{ input: 'NO', output: 'ಣೋ', description: 'NO for ಣೋ in Kannada transliteration' },
			{ input: 'tO', output: 'ತೋ', description: 'tO for ತೋ in Kannada transliteration' },
			{ input: 'thO', output: 'ಥೋ', description: 'thO for ಥೋ in Kannada transliteration' },
			{ input: 'dO', output: 'ದೋ', description: 'dO for ದೋ in Kannada transliteration' },
			{ input: 'dhO', output: 'ಧೋ', description: 'dhO for ಧೋ in Kannada transliteration' },
			{ input: 'nO', output: 'ನೋ', description: 'nO for ನೋ in Kannada transliteration' },
			{ input: 'pO', output: 'ಪೋ', description: 'pO for ಪೋ in Kannada transliteration' },
			{ input: 'PO', output: 'ಫೋ', description: 'PO for ಫೋ in Kannada transliteration' },
			{ input: 'bO', output: 'ಬೋ', description: 'bO for ಬೋ in Kannada transliteration' },
			{ input: 'BO', output: 'ಭೋ', description: 'BO for ಭೋ in Kannada transliteration' },
			{ input: 'mO', output: 'ಮೋ', description: 'mO for ಮೋ in Kannada transliteration' },
			{ input: 'yO', output: 'ಯೋ', description: 'yO for ಯೋ in Kannada transliteration' },
			{ input: 'rO', output: 'ರೋ', description: 'rO for ರೋ in Kannada transliteration' },
			{ input: 'qO', output: 'ಱೋ', description: 'qO for ಱೋ in Kannada transliteration' },
			{ input: 'lO', output: 'ಲೋ', description: 'lO for ಲೋ in Kannada transliteration' },
			{ input: 'vO', output: 'ವೋ', description: 'vO for ವೋ in Kannada transliteration' },
			{ input: 'SO', output: 'ಶೋ', description: 'SO for ಶೋ in Kannada transliteration' },
			{ input: 'ShO', output: 'ಷೋ', description: 'ShO for ಷೋ in Kannada transliteration' },
			{ input: 'sO', output: 'ಸೋ', description: 'sO for ಸೋ in Kannada transliteration' },
			{ input: 'hO', output: 'ಹೋ', description: 'hO for ಹೋ in Kannada transliteration' },
			{ input: 'LO', output: 'ಳೋ', description: 'LO for ಳೋ in Kannada transliteration' },
			{ input: 'QO', output: 'ೞೋ', description: 'QO for ೞೋ in Kannada transliteration' },
			{ input: 'W', output: 'ಔ', description: 'W for ಔ in Kannada transliteration' },
			{ input: 'kW', output: 'ಕೌ', description: 'kW for ಕೌ in Kannada transliteration' },
			{ input: 'KW', output: 'ಖೌ', description: 'KW for ಖೌ in Kannada transliteration' },
			{ input: 'gW', output: 'ಗೌ', description: 'gW for ಗೌ in Kannada transliteration' },
			{ input: 'GW', output: 'ಘೌ', description: 'GW for ಘೌ in Kannada transliteration' },
			{ input: '~gW', output: 'ಙೌ', description: '~gW for ಙೌ in Kannada transliteration' },
			{ input: 'cW', output: 'ಚೌ', description: 'cW for ಚೌ in Kannada transliteration' },
			{ input: 'CW', output: 'ಛೌ', description: 'CW for ಛೌ in Kannada transliteration' },
			{ input: 'jW', output: 'ಜೌ', description: 'jW for ಜೌ in Kannada transliteration' },
			{ input: 'JW', output: 'ಝೌ', description: 'JW for ಝೌ in Kannada transliteration' },
			{ input: '~jW', output: 'ಞೌ', description: '~jW for ಞೌ in Kannada transliteration' },
			{ input: 'TW', output: 'ಟೌ', description: 'TW for ಟೌ in Kannada transliteration' },
			{ input: 'ThW', output: 'ಠೌ', description: 'ThW for ಠೌ in Kannada transliteration' },
			{ input: 'DW', output: 'ಡೌ', description: 'DW for ಡೌ in Kannada transliteration' },
			{ input: 'DhW', output: 'ಢೌ', description: 'DhW for ಢೌ in Kannada transliteration' },
			{ input: 'NW', output: 'ಣೌ', description: 'NW for ಣೌ in Kannada transliteration' },
			{ input: 'tW', output: 'ತೌ', description: 'tW for ತೌ in Kannada transliteration' },
			{ input: 'thW', output: 'ಥೌ', description: 'thW for ಥೌ in Kannada transliteration' },
			{ input: 'dW', output: 'ದೌ', description: 'dW for ದೌ in Kannada transliteration' },
			{ input: 'dhW', output: 'ಧೌ', description: 'dhW for ಧೌ in Kannada transliteration' },
			{ input: 'nW', output: 'ನೌ', description: 'nW for ನೌ in Kannada transliteration' },
			{ input: 'pW', output: 'ಪೌ', description: 'pW for ಪೌ in Kannada transliteration' },
			{ input: 'PW', output: 'ಫೌ', description: 'PW for ಫೌ in Kannada transliteration' },
			{ input: 'bW', output: 'ಬೌ', description: 'bW for ಬೌ in Kannada transliteration' },
			{ input: 'BW', output: 'ಭೌ', description: 'BW for ಭೌ in Kannada transliteration' },
			{ input: 'mW', output: 'ಮೌ', description: 'mW for ಮೌ in Kannada transliteration' },
			{ input: 'yW', output: 'ಯೌ', description: 'yW for ಯೌ in Kannada transliteration' },
			{ input: 'rW', output: 'ರೌ', description: 'rW for ರೌ in Kannada transliteration' },
			{ input: 'qW', output: 'ಱೌ', description: 'qW for ಱೌ in Kannada transliteration' },
			{ input: 'lW', output: 'ಲೌ', description: 'lW for ಲೌ in Kannada transliteration' },
			{ input: 'vW', output: 'ವೌ', description: 'vW for ವೌ in Kannada transliteration' },
			{ input: 'SW', output: 'ಶೌ', description: 'SW for ಶೌ in Kannada transliteration' },
			{ input: 'ShW', output: 'ಷೌ', description: 'ShW for ಷೌ in Kannada transliteration' },
			{ input: 'sW', output: 'ಸೌ', description: 'sW for ಸೌ in Kannada transliteration' },
			{ input: 'hW', output: 'ಹೌ', description: 'hW for ಹೌ in Kannada transliteration' },
			{ input: 'LW', output: 'ಳೌ', description: 'LW for ಳೌ in Kannada transliteration' },
			{ input: 'QW', output: 'ೞೌ', description: 'QW for ೞೌ in Kannada transliteration' },
			{ input: 'aM', output: 'ಅಂ', description: 'aM for ಅಂ in Kannada transliteration' },
			{ input: 'kaM', output: 'ಕಂ', description: 'kM for ಕಂ in Kannada transliteration' },
			{ input: 'KaM', output: 'ಖಂ', description: 'KM for ಖಂ in Kannada transliteration' },
			{ input: 'gaM', output: 'ಗಂ', description: 'gM for ಗಂ in Kannada transliteration' },
			{ input: 'GaM', output: 'ಘಂ', description: 'GM for ಘಂ in Kannada transliteration' },
			{ input: '~gaM', output: 'ಙಂ', description: '~gM for ಙಂ in Kannada transliteration' },
			{ input: 'caM', output: 'ಚಂ', description: 'cM for ಚಂ in Kannada transliteration' },
			{ input: 'CaM', output: 'ಛಂ', description: 'CM for ಛಂ in Kannada transliteration' },
			{ input: 'jaM', output: 'ಜಂ', description: 'jM for ಜಂ in Kannada transliteration' },
			{ input: 'JaM', output: 'ಝಂ', description: 'JM for ಝಂ in Kannada transliteration' },
			{ input: '~jaM', output: 'ಞಂ', description: '~jM for ಞಂ in Kannada transliteration' },
			{ input: 'TaM', output: 'ಟಂ', description: 'TM for ಟಂ in Kannada transliteration' },
			{ input: 'ThaM', output: 'ಠಂ', description: 'ThM for ಠಂ in Kannada transliteration' },
			{ input: 'DaM', output: 'ಡಂ', description: 'DM for ಡಂ in Kannada transliteration' },
			{ input: 'DhaM', output: 'ಢಂ', description: 'DhM for ಢಂ in Kannada transliteration' },
			{ input: 'NaM', output: 'ಣಂ', description: 'NM for ಣಂ in Kannada transliteration' },
			{ input: 'taM', output: 'ತಂ', description: 'tM for ತಂ in Kannada transliteration' },
			{ input: 'thaM', output: 'ಥಂ', description: 'thM for ಥಂ in Kannada transliteration' },
			{ input: 'daM', output: 'ದಂ', description: 'dM for ದಂ in Kannada transliteration' },
			{ input: 'dhaM', output: 'ಧಂ', description: 'dhM for ಧಂ in Kannada transliteration' },
			{ input: 'naM', output: 'ನಂ', description: 'nM for ನಂ in Kannada transliteration' },
			{ input: 'paM', output: 'ಪಂ', description: 'pM for ಪಂ in Kannada transliteration' },
			{ input: 'PaM', output: 'ಫಂ', description: 'PM for ಫಂ in Kannada transliteration' },
			{ input: 'baM', output: 'ಬಂ', description: 'bM for ಬಂ in Kannada transliteration' },
			{ input: 'BaM', output: 'ಭಂ', description: 'BM for ಭಂ in Kannada transliteration' },
			{ input: 'maM', output: 'ಮಂ', description: 'mM for ಮಂ in Kannada transliteration' },
			{ input: 'yaM', output: 'ಯಂ', description: 'yM for ಯಂ in Kannada transliteration' },
			{ input: 'raM', output: 'ರಂ', description: 'rM for ರಂ in Kannada transliteration' },
			{ input: 'qaM', output: 'ಱಂ', description: 'qM for ಱಂ in Kannada transliteration' },
			{ input: 'laM', output: 'ಲಂ', description: 'lM for ಲಂ in Kannada transliteration' },
			{ input: 'vaM', output: 'ವಂ', description: 'vM for ವಂ in Kannada transliteration' },
			{ input: 'SaM', output: 'ಶಂ', description: 'SM for ಶಂ in Kannada transliteration' },
			{ input: 'ShaM', output: 'ಷಂ', description: 'ShM for ಷಂ in Kannada transliteration' },
			{ input: 'saM', output: 'ಸಂ', description: 'sM for ಸಂ in Kannada transliteration' },
			{ input: 'haM', output: 'ಹಂ', description: 'hM for ಹಂ in Kannada transliteration' },
			{ input: 'LaM', output: 'ಳಂ', description: 'LM for ಳಂ in Kannada transliteration' },
			{ input: 'QaM', output: 'ೞಂ', description: 'QM for ೞಂ in Kannada transliteration' },
			{ input: 'aH', output: 'ಅಃ', description: 'aH for ಅಃ in Kannada transliteration' },
			{ input: 'kaH', output: 'ಕಃ', description: 'kH for ಕಃ in Kannada transliteration' },
			{ input: 'KaH', output: 'ಖಃ', description: 'KH for ಖಃ in Kannada transliteration' },
			{ input: 'gaH', output: 'ಗಃ', description: 'gH for ಗಃ in Kannada transliteration' },
			{ input: 'GaH', output: 'ಘಃ', description: 'GH for ಘಃ in Kannada transliteration' },
			{ input: '~gaH', output: 'ಙಃ', description: '~gH for ಙಃ in Kannada transliteration' },
			{ input: 'caH', output: 'ಚಃ', description: 'cH for ಚಃ in Kannada transliteration' },
			{ input: 'CaH', output: 'ಛಃ', description: 'CH for ಛಃ in Kannada transliteration' },
			{ input: 'jaH', output: 'ಜಃ', description: 'jH for ಜಃ in Kannada transliteration' },
			{ input: 'JaH', output: 'ಝಃ', description: 'JH for ಝಃ in Kannada transliteration' },
			{ input: '~jaH', output: 'ಞಃ', description: '~jH for ಞಃ in Kannada transliteration' },
			{ input: 'TaH', output: 'ಟಃ', description: 'TH for ಟಃ in Kannada transliteration' },
			{ input: 'ThaH', output: 'ಠಃ', description: 'ThH for ಠಃ in Kannada transliteration' },
			{ input: 'DaH', output: 'ಡಃ', description: 'DH for ಡಃ in Kannada transliteration' },
			{ input: 'DhaH', output: 'ಢಃ', description: 'DhH for ಢಃ in Kannada transliteration' },
			{ input: 'NaH', output: 'ಣಃ', description: 'NH for ಣಃ in Kannada transliteration' },
			{ input: 'taH', output: 'ತಃ', description: 'tH for ತಃ in Kannada transliteration' },
			{ input: 'thaH', output: 'ಥಃ', description: 'thH for ಥಃ in Kannada transliteration' },
			{ input: 'daH', output: 'ದಃ', description: 'dH for ದಃ in Kannada transliteration' },
			{ input: 'dhaH', output: 'ಧಃ', description: 'dhH for ಧಃ in Kannada transliteration' },
			{ input: 'naH', output: 'ನಃ', description: 'nH for ನಃ in Kannada transliteration' },
			{ input: 'paH', output: 'ಪಃ', description: 'pH for ಪಃ in Kannada transliteration' },
			{ input: 'PaH', output: 'ಫಃ', description: 'PH for ಫಃ in Kannada transliteration' },
			{ input: 'baH', output: 'ಬಃ', description: 'bH for ಬಃ in Kannada transliteration' },
			{ input: 'BaH', output: 'ಭಃ', description: 'BH for ಭಃ in Kannada transliteration' },
			{ input: 'maH', output: 'ಮಃ', description: 'mH for ಮಃ in Kannada transliteration' },
			{ input: 'yaH', output: 'ಯಃ', description: 'yH for ಯಃ in Kannada transliteration' },
			{ input: 'raH', output: 'ರಃ', description: 'rH for ರಃ in Kannada transliteration' },
			{ input: 'qaH', output: 'ಱಃ', description: 'qH for ಱಃ in Kannada transliteration' },
			{ input: 'laH', output: 'ಲಃ', description: 'lH for ಲಃ in Kannada transliteration' },
			{ input: 'vaH', output: 'ವಃ', description: 'vH for ವಃ in Kannada transliteration' },
			{ input: 'SaH', output: 'ಶಃ', description: 'SH for ಶಃ in Kannada transliteration' },
			{ input: 'ShaH', output: 'ಷಃ', description: 'ShH for ಷಃ in Kannada transliteration' },
			{ input: 'saH', output: 'ಸಃ', description: 'sH for ಸಃ in Kannada transliteration' },
			{ input: 'haH', output: 'ಹಃ', description: 'hH for ಹಃ in Kannada transliteration' },
			{ input: 'LaH', output: 'ಳಃ', description: 'LH for ಳಃ in Kannada transliteration' },
			{ input: 'QaH', output: 'ೞಃ', description: 'QH for ೞಃ in Kannada transliteration' },
			{ input: 'k', output: 'ಕ್', description: 'k for ಕ್ in Kannada transliteration' },
			{ input: 'K', output: 'ಖ್', description: 'K for ಖ್ in Kannada transliteration' },
			{ input: 'g', output: 'ಗ್', description: 'g for ಗ್ in Kannada transliteration' },
			{ input: 'G', output: 'ಘ್', description: 'G for ಘ್ in Kannada transliteration' },
			{ input: '~g', output: 'ಙ್', description: '~g for ಙ್ in Kannada transliteration' },
			{ input: 'c', output: 'ಚ್', description: 'c for ಚ್ in Kannada transliteration' },
			{ input: 'C', output: 'ಛ್', description: 'C for ಛ್ in Kannada transliteration' },
			{ input: 'j', output: 'ಜ್', description: 'j for ಜ್ in Kannada transliteration' },
			{ input: 'J', output: 'ಝ್', description: 'J for ಝ್ in Kannada transliteration' },
			{ input: '~j', output: 'ಞ್', description: '~j for ಞ್ in Kannada transliteration' },
			{ input: 'T', output: 'ಟ್', description: 'T for ಟ್ in Kannada transliteration' },
			{ input: 'Th', output: 'ಠ್', description: 'Th for ಠ್ in Kannada transliteration' },
			{ input: 'D', output: 'ಡ್', description: 'D for ಡ್ in Kannada transliteration' },
			{ input: 'Dh', output: 'ಢ್', description: 'Dh for ಢ್ in Kannada transliteration' },
			{ input: 'N', output: 'ಣ್', description: 'N for ಣ್ in Kannada transliteration' },
			{ input: 't', output: 'ತ್', description: 't for ತ್ in Kannada transliteration' },
			{ input: 'th', output: 'ಥ್', description: 'th for ಥ್ in Kannada transliteration' },
			{ input: 'd', output: 'ದ್', description: 'd for ದ್ in Kannada transliteration' },
			{ input: 'dh', output: 'ಧ್', description: 'dh for ಧ್ in Kannada transliteration' },
			{ input: 'n', output: 'ನ್', description: 'n for ನ್ in Kannada transliteration' },
			{ input: 'p', output: 'ಪ್', description: 'p for ಪ್ in Kannada transliteration' },
			{ input: 'P', output: 'ಫ್', description: 'P for ಫ್ in Kannada transliteration' },
			{ input: 'b', output: 'ಬ್', description: 'b for ಬ್ in Kannada transliteration' },
			{ input: 'B', output: 'ಭ್', description: 'B for ಭ್ in Kannada transliteration' },
			{ input: 'm', output: 'ಮ್', description: 'm for ಮ್ in Kannada transliteration' },
			{ input: 'y', output: 'ಯ್', description: 'y for ಯ್ in Kannada transliteration' },
			{ input: 'r', output: 'ರ್', description: 'r for ರ್ in Kannada transliteration' },
			{ input: 'q', output: 'ಱ್', description: 'q for ಱ್ in Kannada transliteration' },
			{ input: 'l', output: 'ಲ್', description: 'l for ಲ್ in Kannada transliteration' },
			{ input: 'v', output: 'ವ್', description: 'v for ವ್ in Kannada transliteration' },
			{ input: 'S', output: 'ಶ್', description: 'S for ಶ್ in Kannada transliteration' },
			{ input: 'Sh', output: 'ಷ್', description: 'Sh for ಷ್ in Kannada transliteration' },
			{ input: 's', output: 'ಸ್', description: 's for ಸ್ in Kannada transliteration' },
			{ input: 'h', output: 'ಹ್', description: 'h for ಹ್ in Kannada transliteration' },
			{ input: 'L', output: 'ಳ್', description: 'L for ಳ್ in Kannada transliteration' },
			{ input: 'Q', output: 'ೞ್', description: 'Q for ೞ್ in Kannada transliteration' },
			{ input: 'd~ha', output: 'ದ್ಹ', description: 'd~ha for ದ್ಹ in Kannada transliteration' }
		],
		inputmethod: 'kn-transliteration'
	},{
		description: 'Kannada InScript 2 test',
		tests: [
			{ input: [ [ '.', true ] ], output: '॥', description: 'Kannada InScript 2 AltGr-. -> ॥' }
		],
		inputmethod: 'kn-inscript2'
	},{
		description: 'Kajin M̧ajeļ (Marshallese) test',
		tests: [
			{ input: 'Y', output: 'Ū', description: 'Y for Ū in Marshallese' },
			{ input: 'S', output: 'Ā', description: 'S for Ā in Marshallese' },
			{ input: 'F', output: 'Ņ', description: 'F for Ņ in Marshallese' },
			{ input: 'G', output: 'N̄', description: 'G for N̄ in Marshallese' },
			{ input: 'H', output: 'M̧', description: 'H for M̧ in Marshallese' },
			{ input: 'X', output: 'O̧', description: 'X for O̧ in Marshallese' },
			{ input: 'C', output: 'Ō', description: 'C for Ō in Marshallese' },
			{ input: 'V', output: 'Ļ', description: 'V for Ļ in Marshallese' },
			{ input: 'y', output: 'ū', description: 'y for ū in Marshallese' },
			{ input: 's', output: 'ā', description: 's for ā in Marshallese' },
			{ input: 'f', output: 'ņ', description: 'f for ņ in Marshallese' },
			{ input: 'g', output: 'n̄', description: 'g for n̄ in Marshallese' },
			{ input: 'h', output: 'm̧', description: 'h for m̧ in Marshallese' },
			{ input: 'x', output: 'o̧', description: 'x for o̧ in Marshallese' },
			{ input: 'c', output: 'ō', description: 'c for ō in Marshallese' },
			{ input: 'v', output: 'ļ', description: 'v for ļ in Marshallese' }
		],
		inputmethod: 'mh'
	},{
		description: 'Mongolian mn-trad test',
		tests: [
			{ input: '{QWE}', output: '〈᠅ᠸᠧ〉', description: 'Mongolian mn-trad' }
		],
		inputmethod: 'mn-trad'
	},{
		description: 'Mongolian mn-todo test',
		tests: [
			{ input: '<GHJ>', output: '《ᡘᡙᠴ》', description: 'Mongolian mn-todo' }
		],
		inputmethod: 'mn-todo'
	},{
		description: 'Mongolian mn-tradali test',
		tests: [
			{ input: 'adgj', output: 'ᢊᢌᢎᢐ', description: 'Mongolian mn-tradali' }
		],
		inputmethod: 'mn-tradali'
	},{
		description: 'Mongolian mn-todoali test',
		tests: [
			{ input: 'kjhg', output: 'ᢑᢘᢏᢎ', description: 'Mongolian mn-todoali' }
		],
		inputmethod: 'mn-todoali'
	},{
		description: 'Mongolian phags-pa test',
		tests: [
			{ input: 'SFHK', output: 'ꡚꡰꡯꡁ', description: 'Mongolian phags-pa' }
		],
		inputmethod: 'phagspa'
	},{
		description: 'Manchu mnc test',
		tests: [
			{ input: 'LWE', output: 'ᡀᠸᠧ', description: 'Manchu mnc' }
		],
		inputmethod: 'mnc'
	},{
		description: 'Manchu mnc-ali test',
		tests: [
			{ input: 'ASG', output: 'ᢤᢥᢪ', description: 'Manchu mnc-ali' }
		],
		inputmethod: 'mnc-ali'
	},{
		description: 'Xibe sjo test',
		tests: [
			{ input: 'WER', output: 'ᠸᠧᡰ', description: 'Xibe sjo 〈ᠴᠣᡝ〉' }
		],
		inputmethod: 'sjo'
	},{
		description: 'Myanmar mm3 test',
		tests: [
			{ input: 'ujdkqdkygonf>', output: 'ကြိုဆိုပါသည်။', description: 'Myanmar mm3 ကြိုဆိုပါသည်။' }
		],
		inputmethod: 'my-mm3'
	},{
		description: 'Marathi Phonetic test',
		tests: [
			{
				input: 'sfpes deta.',
				output: 'स्पेस देता.',
				description: 'Marathi phonetic "sfpes deta." -> "स्पेस देता." (bug 51285).'
			},
			{
				input: 'stfymffSivmffsuMdrmff',
				output: 'सत्यम्\u200cशिवम्\u200cसुंदरम्\u200c',
				description: 'Marathi phonetic ZWNJ character'
			},

			{ input: '*', output: 'श्र', description: 'Marathi phonetic * -> श्र' }
		],
		inputType: 'input',
		inputmethod: 'mr-phonetic'
	},{
		description: 'Marathi InScript 2 test',
		tests: [
			{ input: [ [ '1', false ] ], output: '१', description: 'Marathi InScript regular 1 - १' },
			{ input: [ [ '1', true ] ], output: '\u200d', description: 'Marathi InScript regular 1 - ZWJ' },
			{ input: [ [ '2', false ] ], output: '२', description: 'Marathi InScript regular 2 - २' },
			{ input: [ [ '2', true ] ], output: '\u200c', description: 'Marathi InScript regular 2 - ZWNJ' }
		],
		inputmethod: 'mr-inscript2'
	},{
		description: 'Marathi Transliteration test',
		tests: [
			{ input: '\\~', output: '~', description: 'Marathi transliteration - \\~ -> ~' },
			{ input: 'dny', output: 'ज्ञ्', description: 'dny for ज्ञ् in Marathi transliteration' },
			{ input: 'kOM', output: 'काँ', description: 'kOM for काँ (काँग्रेस) in Marathi transliteration' },
			// bug 38238
			{ input: 'AUM', output: 'ॐ', description: 'AUM - ॐ (OM)' },
			{ input: 'oMkaara', output: 'ओंकार', description: 'oMkaara (testing correct typing of oM as a simple anusvara)' },
			{ input: 'kshha', output: 'क्ष', description: 'kshha for क्ष translitration' },
			{ input: 'mukhapRShTha', output: 'मुखपृष्ठ', description: 'mukhapRShTha for मुखपृष्ठ (Home page) translitration' },
			{ input: 'La', output: 'ळ', description: 'La for ळ translitration' },
			{ input: 'a', output: 'अ', description: 'a for अ translitration' },
			{ input: 'aa', output: 'आ', description: 'aa for आ translitration' },
			{ input: 'i', output: 'इ', description: 'i for इ translitration' },
			{ input: 'I', output: 'ई', description: 'I for ई translitration' },
			{ input: 'u', output: 'उ', description: 'u for U translitration' },
			{ input: 'U', output: 'ऊ', description: 'U for ऊ translitration' },
			{ input: 'e', output: 'ए', description: 'e for ए translitration' },
			{ input: 'ai', output: 'ऐ', description: 'ai for ऐ  translitration' },
			{ input: 'o', output: 'ओ', description: 'o for ओ translitration' },
			{ input: 'au', output: 'औ', description: 'au for औ translitration' },
			{ input: 'O', output: 'ऑ', description: 'O for ऑ translitration' },
			{ input: 'E', output: 'ॲ', description: 'E for ॲ translitration' },
			{ input: 'aM', output: 'अं', description: 'aM for अं translitration' },
			{ input: 'aH', output: 'अः', description: 'aH for अः translitration' },
			{ input: 'ka', output: 'क', description: 'ka for क translitration' },
			{ input: 'kha', output: 'ख', description: 'kha for ख translitration' },
			{ input: 'ga', output: 'ग', description: 'ga for ग translitration' },
			{ input: 'gha', output: 'घ', description: 'gha for घ translitration' },
			{ input: 'nga', output: 'ङ', description: 'nga for ङ translitration' },
			{ input: 'cha', output: 'च', description: 'cha for च translitration' },
			{ input: 'chha', output: 'छ', description: 'chha for छ translitration' },
			{ input: 'ja', output: 'ज', description: 'ja for ज translitration' },
			{ input: 'jha', output: 'झ', description: 'jha for झ translitration' },
			{ input: 'nja', output: 'ञ', description: 'nja for ञ translitration' },
			{ input: 'Ta', output: 'ट', description: 'Ta for ट translitration' },
			{ input: 'Tha', output: 'ठ', description: 'Tha for ठ translitration' },
			{ input: 'Da', output: 'ड', description: 'Da for ड translitration' },
			{ input: 'Dha', output: 'ढ', description: 'Dha for ढ translitration' },
			{ input: 'Na', output: 'ण', description: 'Na for ण translitration' },
			{ input: 'ta', output: 'त', description: 'ta for त translitration' },
			{ input: 'tha', output: 'थ', description: 'tha for थ translitration' },
			{ input: 'da', output: 'द', description: 'da for द translitration' },
			{ input: 'dha', output: 'ध', description: 'dha for ध translitration' },
			{ input: 'na', output: 'न', description: 'na for न translitration' },
			{ input: 'pha', output: 'फ', description: 'pha for फ translitration' },
			{ input: 'tha', output: 'थ', description: 'tha for थ translitration' },
			{ input: 'ba', output: 'ब', description: 'ba for ब translitration' },
			{ input: 'bha', output: 'भ', description: 'bha for भ translitration' },
			{ input: 'ma', output: 'म', description: 'ma for म translitration' },
			{ input: 'ya', output: 'य', description: 'ya for य translitration' },
			{ input: 'ra', output: 'र', description: 'ra for र translitration' },
			{ input: 'la', output: 'ल', description: 'la for ल translitration' },
			{ input: 'va', output: 'व', description: 'va for व translitration' },
			{ input: 'sha', output: 'श', description: 'sha for श translitration' },
			{ input: 'ya', output: 'य', description: 'ya for य translitration' },
			{ input: 'Sha', output: 'ष', description: 'Sha for ष translitration' },
			{ input: 'sa', output: 'स', description: 'sa for स translitration' },
			{ input: 'ha', output: 'ह', description: 'ha for ह translitration' },
			{ input: 'sha', output: 'श', description: 'sha for श translitration' },
			{ input: 'R', output: 'ऋ', description: 'R for ऋ translitration' },
			{ input: 'shrI', output: 'श्री', description: 'shrI for श्री translitration' },
			{ input: '0', output: '०', description: '0 for ० translitration' },
			{ input: '1', output: '१', description: '1 for १ translitration' },
			{ input: '2', output: '२', description: '2 for २ translitration' },
			{ input: '3', output: '३', description: '3 for ३ translitration' },
			{ input: '4', output: '४', description: '4 for ४ translitration' },
			{ input: '5', output: '५', description: '5 for ५ translitration' },
			{ input: '6', output: '६', description: '6 for ६ translitration' },
			{ input: '7', output: '७', description: '7 for ७ translitration' },
			{ input: '8', output: '८', description: '8 for ८ translitration' },
			{ input: '9', output: '९', description: '9 for ९ translitration' },
			{ input: '0', output: '०', description: '0 for ० translitration ' },
			{ input: 'aMkita', output: 'अंकित', description: 'aMkita for अंकित translitration' },
			{ input: 'RShi', output: 'ऋषि', description: 'Rshi for ऋषि translitration' },
			{ input: 'vikipIDiyaa', output: 'विकिपीडिया', description: 'vikipIdiya for विकिपीडिया translitration' },
			{ input: 'manaHpUrvahaka', output: 'मनःपूर्वहक', description: 'manaHpUrvaka for मनःपूर्वहक translitration' },
			{ input: 'dhanyavaada', output: 'धन्यवाद', description: 'dhanyavaada for धन्यवाद translitration' },
			{ input: 'laThTha', output: 'लठ्ठ', description: 'laThTha for लठ्ठ translitration' },
			{ input: 'iMgrajI', output: 'इंग्रजी', description: 'iMgrajI for इंग्रजी translitration' },
			{ input: 'nRsiMhasarasvatI', output: 'नृसिंहसरस्वती', description: 'nRsiMhasarasvatI for नृसिंहसरस्वती  translitration' },
			{ input: 'agni', output: 'अग्नि', description: 'agni for अग्नि translitration' },
			{ input: 'saMskRta', output: 'संस्कृत', description: 'saMskRta for संस्कृत translitration' },
			{ input: 'dRShTIkona', output: 'दृष्टीकोन', description: 'dRShTIkona for दृष्टीकोन translitration' },
			{ input: 'tryaM', output: 'त्र्यं', description: 'tryaM for त्र्यं translitration' },
			{ input: 'maatRbhaaShaa', output: 'मातृभाषा', description: 'maatRbhaaShaa for मातृभाषा translitration' },
			{ input: 'vakratuNDa', output: 'वक्रतुण्ड', description: 'vakratuNDa for वक्रतुण्ड translitration' },
			{ input: 'ariShTanemiH', output: 'अरिष्टनेमिः', description: 'ariShTanemiH for अरिष्टनेमिः translitration' },
			{ input: 'shiShya', output: 'शिष्य', description: 'shiShya for शिष्य translitration' },
			{ input: 'bramha', output: 'ब्रम्ह', description: 'bramha for ब्रम्ह translitration' },
			{ input: 'dvitIya', output: 'द्वितीय', description: 'dvitIya for द्वितीय translitration' },
			{ input: 'dnyaana', output: 'ज्ञान', description: 'dnyana for ज्ञान translitration' }
		],
		inputmethod: 'mr-transliteration'
	},{
		description: 'Malayalam InScript test',
		tests: [
			{ input: 'ka', output: 'കോ' }
		],
		inputmethod: 'ml-inscript'
	},{
		description: 'Malayalam Transliteration test',
		tests: [
			{ input: '\\~', output: '~', description: 'Malayalam transliteration - \\~ -> ~' },
			{ input: 'a', output: 'അ', description: 'Malayalam a' },
			{ input: 'ra', output: 'ര', description: 'Malayalam ra' },
			{ input: 'p', output: 'പ്', description: 'Malayalam p' },
			{ input: 'kh', output: 'ഖ്', description: 'Malayalam kh' },
			{ input: 'nch', output: 'ഞ്ച്', description: 'Malayalam nch' },
			{ input: 'au', output: 'ഔ', description: 'Malayalam au' },
			{ input: 'maU', output: 'മൌ', description: 'Malayalam aU' },
			{ input: 'kshau', output: 'ക്ഷൗ', description: 'Malayalam kshau' },
			{ input: 'ram', output: 'രം', description: 'Malayalam ram' },
			{ input: 'rama', output: 'രമ', description: 'Malayalam rama' },
			{ input: 'baH', output: 'ബഃ', description: 'baH' },
			{ input: 'bah', output: 'ബഹ്', description: 'bah' },
			{ input: 'ai', output: 'ഐ', description: 'ai' },
			{ input: 'lai', output: 'ലൈ', description: 'lai' },
			{ input: 'N', output: 'ൺ', description: 'Malayalam N' },
			{ input: 'nta', output: 'ന്റ', description: 'Malayalam nta' },
			{ input: 'r#', output: 'ൎ', description: 'Malayalam dot repha' },
			{ input: 'ar#ththham', output: 'അൎത്ഥം', description: 'Malayalam word with dot repha' },
			{ input: '//', output: 'ഽ', description: 'Malayalam sign Avagraha' }
		],
		inputmethod: 'ml-transliteration'
	},{
		description: 'Udmurt ALT test',
		tests: [
			{ input: 'ц', output: 'ӵ', description: 'Udmurt letters, ц > ӵ' },
			{ input: 'Ц', output: 'Ӵ', description: 'Udmurt letters, Ц > Ӵ' },
			{ input: 'щ', output: 'ӥ', description: 'Udmurt letters, щ > ӥ' },
			{ input: 'Щ', output: 'Ӥ', description: 'Udmurt letters, Щ > Ӥ' },
			{ input: 'х', output: 'ӟ', description: 'Udmurt letters, х > ӟ' },
			{ input: 'Х', output: 'Ӟ', description: 'Udmurt letters, Х > Ӟ' },
			{ input: 'ф', output: 'ӝ', description: 'Udmurt letters, ф > ӝ' },
			{ input: 'Ф', output: 'Ӝ', description: 'Udmurt letters, Ф > Ӝ' },
			{ input: [ [ 'ц', true ] ], output: 'ц', description: 'Udmurt letters, Alt-ц' },
			{ input: [ [ 'Ц', true ] ], output: 'Ц', description: 'Udmurt letters, Alt-Ц' },
			{ input: [ [ 'щ', true ] ], output: 'щ', description: 'Udmurt letters, Alt-щ' },
			{ input: [ [ 'Щ', true ] ], output: 'Щ', description: 'Udmurt letters, Alt-Щ' },
			{ input: [ [ 'х', true ] ], output: 'х', description: 'Udmurt letters, Alt-х' },
			{ input: [ [ 'Х', true ] ], output: 'Х', description: 'Udmurt letters, Alt-Х' },
			{ input: [ [ 'ф', true ] ], output: 'ф', description: 'Udmurt letters, Alt-ф' },
			{ input: [ [ 'Ф', true ] ], output: 'Ф', description: 'Udmurt letters, Alt-Ф' },
			{ input: 'ё', output: 'ё', description: 'Udmurt letters, ё does not change' },
			{ input: 'Ё', output: 'Ё', description: 'Udmurt letters, Ё does not change' },
			{ input: [ [ 'ё', true ] ], output: 'ӧ', description: 'Udmurt letters, Alt-ё -> ӧ' },
			{ input: [ [ 'Ё', true ] ], output: 'Ӧ', description: 'Udmurt letters, Alt-Ё -> Ӧ' }
		],
		inputmethod: 'udm-alt'
	},{
		description: 'Kyrgyz Cyrillic test',
		tests: [
			{ input: [ [ 'н', true ] ], output: 'ң', description: 'Kyrgyz Cyrillic letters, Alt-н' },
			{ input: [ [ 'Н', true ] ], output: 'Ң', description: 'Kyrgyz Cyrillic letters, Alt-Н' },
			{ input: [ [ 'о', true ] ], output: 'ө', description: 'Kyrgyz Cyrillic letters, Alt-о' },
			{ input: [ [ 'О', true ] ], output: 'Ө', description: 'Kyrgyz Cyrillic letters, Alt-О' },
			{ input: [ [ 'у', true ] ], output: 'ү', description: 'Kyrgyz Cyrillic letters, Alt-у' },
			{ input: [ [ 'У', true ] ], output: 'Ү', description: 'Kyrgyz Cyrillic letters, Alt-У' },
			{ input: 'н', output: 'н', description: 'Kyrgyz Cyrillic letters, н does not change' },
			{ input: 'Н', output: 'Н', description: 'Kyrgyz Cyrillic letters, Н does not change' },
			{ input: 'о', output: 'о', description: 'Kyrgyz Cyrillic letters, о does not change' },
			{ input: 'О', output: 'О', description: 'Kyrgyz Cyrillic letters, О does not change' },
			{ input: 'у', output: 'у', description: 'Kyrgyz Cyrillic letters, у does not change' },
			{ input: 'У', output: 'У', description: 'Kyrgyz Cyrillic letters, У does not change' }
		],
		inputmethod: 'ky-cyrl-alt'
	},{
		description: 'Oriya InScript test',
		tests: [
			{ input: 'ka', output: 'କୋ', description: 'Odia InScript ka -> କୋ' }
		],
		inputmethod: 'or-inscript'
	},{
		description: 'Oriya OdiScript test',
		tests: [
			{ input: 'j}', output: 'ର‍୍ୟ', description: 'Odia OdiScript j} -> ର‍୍ୟ' },
			{ input: 'O}', output: 'ଡ୍ୟ', description: 'Odia OdiScript O} -> ଡ୍ୟ' },
			{ input: 's~', output: 'କଃ', description: 'Odia OdiScript j~ -> କଃ' },
			{ input: 's@@', output: 'ର୍କ', description: 'Odia OdiScript s@@ -> ର୍କ' },
			{ input: 'SQ', output: 'ଖି', description: 'Odia OdiScript SQ -> ଖି' },
			{ input: 'W', output: 'ଫ', description: 'Odia OdiScript W -> ଫ' },
			{ input: 'E', output: 'ଡ଼', description: 'Odia OdiScript E -> ଡ଼' },
			{ input: 'R', output: 'ଧ', description: 'Odia OdiScript R -> ଧ' },
			{ input: 'T', output: 'ଓ', description: 'Odia OdiScript T -> ଓ' },
			{ input: 'Y', output: 'ଔ', description: 'Odia OdiScript Y -> ଔ' },
			{ input: 'U', output: 'ଟ', description: 'Odia OdiScript U -> ଟ' },
			{ input: 'I', output: 'ଠ', description: 'Odia OdiScript I -> ଠ' },
			{ input: 'O', output: 'ଡ', description: 'Odia OdiScript O -> ଡ' },
			{ input: 'P', output: 'ଢ', description: 'Odia OdiScript P -> ଢ' },
			{ input: 'A', output: 'ଢ଼', description: 'Odia OdiScript A -> ଢ଼' },
			{ input: 'S', output: 'ଖ', description: 'Odia OdiScript S -> ଖ' },
			{ input: 'D', output: '‌', description: 'Odia OdiScript D ZWNJ  -> ‌' },
			{ input: 'F', output: 'ଥ', description: 'Odia OdiScript F -> ଥ' },
			{ input: 'G', output: 'ଇ', description: 'Odia OdiScript G -> ଇ' },
			{ input: 'H', output: 'ଈ', description: 'Odia OdiScript H -> ଈ' },
			{ input: 'J', output: 'ଣ', description: 'Odia OdiScript J -> ଣ' },
			{ input: 'K', output: 'ଶ', description: 'Odia OdiScript K -> ଶ' },
			{ input: 'L', output: 'ଷ', description: 'Odia OdiScript L -> ଷ' },
			{ input: 'Z', output: 'ଙ', description: 'Odia OdiScript Z -> ଙ' },
			{ input: 'X', output: 'ଘ', description: 'Odia OdiScript X -> ଘ' },
			{ input: 'C', output: 'ଝ', description: 'Odia OdiScript C -> ଝ' },
			{ input: 'V', output: 'ଛ', description: 'Odia OdiScript V -> ଛ' },
			{ input: 'B', output: 'ଉ', description: 'Odia OdiScript B -> ଉ' },
			{ input: 'N', output: 'ଊ', description: 'Odia OdiScript N -> ଊ' },
			{ input: 'M', output: 'ଲ', description: 'Odia OdiScript M -> ଲ' },
			{ input: 'TEgtds]gwdU', output: 'ଓଡ଼ିସ୍କ୍ରିପ୍ଟ', description: 'Odia OdiScript TEgtds]gwdU-> ଓଡ଼ିସ୍କ୍ରିପ୍ଟ' }
		],
		inputmethod: 'or-OdiScript'
	},{ description: 'Oriya phonetic test',
		tests: [
			{ input: '\\~', output: '~', description: 'Oriya phonetic - \\~ -> ~' },
			{ input: 'a',  output: 'ଅ', description: 'Odia phonetic a -> ଅ ' },
			{ input: 'aa', output: 'ଆ', description: 'Odia phonetic aa -> ଆ' },
			{ input: 'A',  output: 'ଆ', description: 'Odia phonetic A -> ଆ' },
			{ input: 'i',  output: 'ଇ', description: 'Odia phonetic i -> ଇ' },
			{ input: 'I',  output: 'ଈ', description: 'Odia phonetic I -> ଈ' },
			{ input: 'u',  output: 'ଉ', description: 'Odia phonetic u -> ଉ' },
			{ input: 'U',  output: 'ଊ', description: 'Odia phonetic U -> ଊ' },
			{ input: 'r',  output: 'ର', description: 'Odia phonetic r -> ର୍' },
			{ input: 'R',  output: 'ଋ', description: 'Odia phonetic R -> ଋ' },
			{ input: 'e',  output: 'ଏ', description: 'Odia phonetic e -> ଏ' },
			{ input: 'E', output: 'ଐ', description: 'Odia phonetic ai -> ଐ' },
			{ input: 'o',  output: 'ଓ', description: 'Odia phonetic o -> ଓ' },
			{ input: 'O',  output: 'ଔ', description: 'Odia phonetic O -> ଔ' },
			{ input: 'k',  output: 'କ', description: 'Odia phonetic k -> କ' },
			{ input: 'kh', output: 'ଖ', description: 'Odia phonetic kh -> ଖ' },
			{ input: 'g',  output: 'ଗ', description: 'Odia phonetic g -> ଗ' },
			{ input: 'gh', output: 'ଘ', description: 'Odia phonetic gh -> ଘ' },
			{ input: 'NG', output: 'ଙ', description: 'Odia phonetic NG -> ଙ' },
			{ input: 'c', output: 'ଚ', description: 'Odia phonetic c -> ଚ' },
			{ input: 'ch', output: 'ଛ', description: 'Odia phonetic ch -> ଛ' },
			{ input: 'j', output: 'ଜ', description: 'Odia phonetic j -> ଜ' },
			{ input: 'jh', output: 'ଝ', description: 'Odia phonetic jh -> ଝ' },
			{ input: 'Ng', output: 'ଞ', description: 'Odia phonetic Ng -> ଞ' },
			{ input: 'T', output: 'ଟ', description: 'Odia phonetic Ta -> ଟ' },
			{ input: 'Th', output: 'ଠ', description: 'Odia phonetic Th -> ଠ' },
			{ input: 'D', output: 'ଡ', description: 'Odia phonetic D -> ଡ' },
			{ input: 'Dh', output: 'ଢ', description: 'Odia phonetic Dh -> ଢ' },
			{ input: 'N', output: 'ଣ', description: 'Odia phonetic n -> ଣ' },
			{ input: 't', output: 'ତ', description: 'Odia phonetic t -> ତ' },
			{ input: 'th', output: 'ଥ', description: 'Odia phonetic th -> ଥ' },
			{ input: 'd', output: 'ଦ', description: 'Odia phonetic d -> ଦ' },
			{ input: 'dh', output: 'ଧ', description: 'Odia phonetic dh -> ଧ' },
			{ input: 'n', output: 'ନ', description: 'Odia phonetic n -> ନ' },
			{ input: 'p', output: 'ପ', description: 'Odia phonetic p -> ପ' },
			{ input: 'ph', output: 'ଫ', description: 'Odia phonetic ph -> ଫ' },
			{ input: 'b', output: 'ବ', description: 'Odia phonetic b -> ବ' },
			{ input: 'bh', output: 'ଭ', description: 'Odia phonetic b -> ଭ' },
			{ input: 'm', output: 'ମ', description: 'Odia phonetic m -> ମ' },
			{ input: 'y', output: 'ଯ', description: 'Odia phonetic y -> ଯ' },
			{ input: 'Y', output: 'ୟ', description: 'Odia phonetic Y -> ୟ' },
			{ input: 'r', output: 'ର', description: 'Odia phonetic r -> ର' },
			{ input: 'l', output: 'ଲ', description: 'Odia phonetic l -> ଲ' },
			{ input: 'L', output: 'ଳ', description: 'Odia phonetic L -> ଳ' },
			{ input: 'S', output: 'ଶ', description: 'Odia phonetic S -> ଶ' },
			{ input: 's', output: 'ସ', description: 'Odia phonetic s -> ସ' },
			{ input: 'sh', output: 'ଷ', description: 'Odia phonetic sh -> ଷ' },
			{ input: 'h', output: 'ହ', description: 'Odia phonetic h -> ହ' },
			{ input: '.',  output: '।', description: 'Odia phonetic . -> । ' },
			{ input: 'sainath',  output: 'ସାଇନାଥ', description: 'Odia phonetic sainath -> ସାଇନାଥ ' },
			{ input: 'dxiNeSwr',  output: 'ଦକ୍ଷିଣେଶ୍ୱର', description: 'Odia phonetic dxiNeSwr -> ଦକ୍ଷିଣେଶ୍ୱର ' },
			{ input: 'kumbhkrzNeshu', output: 'କୁମ୍ଭକର୍ଣେଷୁ', description: 'Odia phonetic kumbhkrzNeshu -> କୁମ୍ଭକର୍ଣେଷୁ' }
		],
		inputmethod: 'or-lekhani'
	},{
		description: 'Oriya transliteration test',
		tests: [
			{ input: '\\~', output: '~', description: 'Oriya transliteration - \\~ -> ~' },
			{ input: 'a',  output: 'ଅ', description: 'Odia transliteration a -> ଅ ' },
			{ input: 'aa', output: 'ଆ', description: 'Odia transliteration aa -> ଆ' },
			{ input: 'A',  output: 'ଆ', description: 'Odia transliteration A -> ଆ' },
			{ input: 'i',  output: 'ଇ', description: 'Odia transliteration i -> ଇ' },
			{ input: 'I',  output: 'ଈ', description: 'Odia transliteration I -> ଈ' },
			{ input: 'u',  output: 'ଉ', description: 'Odia transliteration u -> ଉ' },
			{ input: 'U',  output: 'ଊ', description: 'Odia transliteration U -> ଊ' },
			{ input: 'r',  output: 'ର୍', description: 'Odia transliteration r -> ର୍' },
			{ input: 'R',  output: 'ଋ', description: 'Odia transliteration R -> ଋ' },
			{ input: 'e',  output: 'ଏ', description: 'Odia transliteration e -> ଏ' },
			{ input: 'ai', output: 'ଐ', description: 'Odia transliteration ai -> ଐ' },
			{ input: 'o',  output: 'ଓ', description: 'Odia transliteration o -> ଓ' },
			{ input: 'O',  output: 'ଔ', description: 'Odia transliteration O -> ଔ' },
			{ input: 'k',  output: 'କ୍', description: 'Odia transliteration k -> କ୍' },
			{ input: 'kh', output: 'ଖ୍', description: 'Odia transliteration kh -> ଖ୍' },
			{ input: 'g',  output: 'ଗ୍', description: 'Odia transliteration g -> ଗ୍' },
			{ input: 'gh', output: 'ଘ୍', description: 'Odia transliteration gh -> ଘ୍' },
			{ input: 'NGa', output: 'ଙ', description: 'Odia transliteration NGa -> ଙ' },
			{ input: 'ca', output: 'ଚ', description: 'Odia transliteration ca -> ଚ' },
			{ input: 'cha', output: 'ଛ', description: 'Odia transliteration cha -> ଛ' },
			{ input: 'ja', output: 'ଜ', description: 'Odia transliteration ja -> ଜ' },
			{ input: 'jha', output: 'ଝ', description: 'Odia transliteration jha -> ଝ' },
			{ input: 'Nga', output: 'ଞ', description: 'Odia transliteration Nga -> ଞ' },
			{ input: 'Ta', output: 'ଟ', description: 'Odia transliteration Ta -> ଟ' },
			{ input: 'Tha', output: 'ଠ', description: 'Odia transliteration Tha -> ଠ' },
			{ input: 'Da', output: 'ଡ', description: 'Odia transliteration Da -> ଡ' },
			{ input: 'Dha', output: 'ଢ', description: 'Odia transliteration Dha -> ଢ' },
			{ input: 'Na', output: 'ଣ', description: 'Odia transliteration na -> ଣ' },
			{ input: 'ta', output: 'ତ', description: 'Odia transliteration ta -> ତ' },
			{ input: 'tha', output: 'ଥ', description: 'Odia transliteration tha -> ଥ' },
			{ input: 'da', output: 'ଦ', description: 'Odia transliteration da -> ଦ' },
			{ input: 'dha', output: 'ଧ', description: 'Odia transliteration dha -> ଧ' },
			{ input: 'na', output: 'ନ', description: 'Odia transliteration na -> ନ' },
			{ input: 'pa', output: 'ପ', description: 'Odia transliteration pa -> ପ' },
			{ input: 'pha', output: 'ଫ', description: 'Odia transliteration pha -> ଫ' },
			{ input: 'ba', output: 'ବ', description: 'Odia transliteration ba -> ବ' },
			{ input: 'bha', output: 'ଭ', description: 'Odia transliteration bha -> ଭ' },
			{ input: 'ma', output: 'ମ', description: 'Odia transliteration ma -> ମ' },
			{ input: 'ya', output: 'ୟ', description: 'Odia transliteration ya -> ୟ' },
			{ input: 'ra', output: 'ର', description: 'Odia transliteration ra -> ର' },
			{ input: 'la', output: 'ଲ', description: 'Odia transliteration la -> ଲ' },
			{ input: 'La', output: 'ଳ', description: 'Odia transliteration La -> ଳ' },
			{ input: 'Sa', output: 'ଶ', description: 'Odia transliteration Sa -> ଶ' },
			{ input: 'sa', output: 'ସ', description: 'Odia transliteration sa -> ସ' },
			{ input: 'sha', output: 'ଷ', description: 'Odia transliteration sha -> ଷ' },
			{ input: 'ha', output: 'ହ', description: 'Odia transliteration ha -> ହ' }
		],
		inputmethod: 'or-transliteration'
	},{
		description: 'Punjabi Gurmukhi Transliteration',
		tests: [
			{ input: '\\~', output: '~', description: 'Punjabi Gurmukhi transliteration - \\~ -> ~' },
			{ input: 'kaI', output: 'ਕਈ', description: 'Punjabi Gurmukhi kaI' },
			{ input: 'hoiaa', output: 'ਹੋਇਆ', description: 'Punjabi Gurmukhi hoiaa' },
			{ input: 'ki', output: 'ਕਿ', description: 'Punjabi Gurmukhi ki' },
			{ input: 'kii', output: 'ਕੀ', description: 'Punjabi Gurmukhi kii' },
			{ input: 'kI', output: 'ਕੀ', description: 'Punjabi Gurmukhi kI' },
			{ input: 'kee', output: 'ਕੀ', description: 'Punjabi Gurmukhi kee' },
			{ input: 'ku', output: 'ਕੁ', description: 'Punjabi Gurmukhi ku' },
			{ input: 'kuu', output: 'ਕੂ', description: 'Punjabi Gurmukhi kuu' },
			{ input: 'kU', output: 'ਕੂ', description: 'Punjabi Gurmukhi kU' },
			{ input: 'koo', output: 'ਕੂ', description: 'Punjabi Gurmukhi koo' },
			{ input: 'kai', output: 'ਕੈ', description: 'Punjabi Gurmukhi kai' },
			{ input: 'kE', output: 'ਕੈ', description: 'Punjabi Gurmukhi kE' },
			{ input: 'ko', output: 'ਕੋ', description: 'Punjabi Gurmukhi ko' },
			{ input: 'kO', output: 'ਕੋ', description: 'Punjabi Gurmukhi ko' },
			{ input: 'kau', output: 'ਕੌ', description: 'Punjabi Gurmukhi kau' },
			{ input: 'g`a', output: 'ਗ਼', description: 'Punjabi Gurmukhi g`a (bindi)' },
			{ input: 'u', output: 'ਉ', description: 'Punjabi Gurmukhi u' },
			{ input: 'uu', output: 'ਊ', description: 'Punjabi Gurmukhi uu' },
			{ input: 'oo', output: 'ਊ', description: 'Punjabi Gurmukhi oo' },
			{ input: 'a^', output: 'ੲ', description: 'Punjabi Gurmukhi a^ (iri)' },
			{ input: 'u^', output: 'ੳ', description: 'Punjabi Gurmukhi u^ (ura)' },
			{ input: 'X', output: 'ੴ', description: 'Punjabi Gurmukhi X (Ek onkar)' },
			{ input: 'kaM', output: 'ਕਂ', description: 'Punjabi Gurmukhi kaM (bindi)' },
			{ input: 'kaMM', output: 'ਕਁ', description: 'Punjabi Gurmukhi kaMM (adak bindi)' },
			{ input: 'kaMm', output: 'ਕਁ', description: 'Punjabi Gurmukhi kaMm (adak bindi)' },
			{ input: 'kaM^', output: 'ਕਁ', description: 'Punjabi Gurmukhi kaM^ (adak bindi)' },
			{ input: 'k`haalasaa', output: 'ਖ਼ਾਲਸਾ', description: 'Punjabi Gurmukhi k`haalasaa' },
			{ input: 'raNajiita', output: 'ਰਣਜੀਤ', description: 'Punjabi Gurmukhi raNajiita (testing NNA)' },
			{ input: 'khadeRhana', output: 'ਖਦੇੜ੍ਹਨ', description: 'Punjabi Gurmukhi khadeRhana (testing R and subjoined h)' },
			{ input: 'siNNgha', output: 'ਸਿੰਘ', description: 'Punjabi Gurmukhi siNNgha (testing Tippi)' },
			{ input: 'hai.', output: 'ਹੈ।', description: 'Punjabi Gurmukhi hai. (testing danda)' },
			{ input: 'phaaga..', output: 'ਫਾਗ॥', description: 'Punjabi Gurmukhi phaaga.. (testing double danda)' },
			{ input: 'iiTaanagara', output: 'ਈਟਾਨਗਰ', description: 'Punjabi Gurmukhi iiTaanagara' },
			{ input: 'eeTaanagara', output: 'ਈਟਾਨਗਰ', description: 'Punjabi Gurmukhi eeTaanagara' }
		],
		inputmethod: 'pa-transliteration'
	},{
		description: 'Punjabi Gurmukhi Phonetic',
		tests: [
			{ input: 'st.', output: 'ਸਟ।', description: 'Punjabi Phonetic test - "st."' },
			{ input: 'mu~K', output: 'ਮੁੱਖ', description: 'Punjabi Phonetic test - "mu~K"' },
			{ input: 'p`rIqI', output: 'ਪ੍ਰੀਤੀ', description: 'Punjabi Phonetic test - "p`rIqI (Priti)"' },
			{ input: ')', output: '੦', description: 'Punjabi Phonetic test - Zero' },
			{ input: '(', output: '੯', description: 'Punjabi Phonetic test - Nine' }
		],
		inputmethod: 'pa-phonetic'
	},{
		description: 'Tamil InScript test',
		tests: [
			{ input: 'ka', output: 'கோ', description: 'Tamil Inscript கோ' },
			{ input: 'lfkd)<fld', output: 'திக்\u200cஷித்', description: 'Tamil Inscript திக்\u200cஷித் non conjunct form with ZWNJ in between' }, // (with ZWNJ)
			{ input: 'lf&fld', output: 'திக்ஷித்', description: 'Tamil Inscript திக்ஷித் conjunct form' },
			{ input: ';sjVd', output: 'சேரன்', description: 'Tamil Inscript சேரன் Cheran' },
			{ input: ';aBVd', output: 'சோழன்', description: 'Tamil Inscript சோழன் Chozhan' },
			{ input: '/gbjepd', output: 'யுவராஜ்', description: 'Tamil Inscript யுவராஜ் Yuvaraj' },
			{ input: 'heCd\'f/jd', output: 'பாண்டியர்', description: 'Tamil Inscript பாண்டியர் Pandiyar' },
			{ input: 'Ecrjd', output: 'ஆமீர்', description: 'Tamil Inscript ஆமீர் Aamir' },
			{ input: 'Duj`Vf', output: 'அஹரொனி', description: 'Tamil Inscript அஹரொனி Aharoni' },
			{ input: 'md)jrkevdld', output: 'ஸ்\u200cரீகாந்த்', description: 'Tamil Inscript ஸ்\u200cரீகாந்த் with ZWNJ between ஸ் and ரீ Srikanth' }, // (with ZWNJ)
			{ input: 'mdjrkevdld', output: 'ஸ்ரீகாந்த்', description: 'Tamil Inscript ஸ்ரீகாந்த் with SHRI = SA+RII' },
			{ input: 'MdjrjcC', output: 'ஶ்ரீரமண', description: 'Tamil Inscript ஶ்ரீரமண Shriramana with SHRI = SHA+RII' },
			{ input: 'Dnanfle', output: 'அலோலிதா', description: 'Tamil Inscript அலோலிதா Alolitha' },
			{ input: '<jdce', output: 'ஷர்மா', description: 'Tamil Inscript ஷர்மா Sharma' },
			{ input: 'hfjbrVd', output: 'பிரவீன்', description: 'Tamil Inscript பிரவீன் Pravin' },
			{ input: ';vdla<d', output: 'சந்தோஷ்', description: 'Tamil Inscript சந்தோஷ் Santhosh' },
			{ input: 'vfkdnmd', output: 'நிக்லஸ்', description: 'Tamil Inscript நிக்லஸ் Niklas' },
			{ input: ';rhdjCd\'g', output: 'சீப்ரண்டு', description: 'Tamil Inscript சீப்ரண்டு Siebrand' },
			{ input: 'hzUdkNtjg', output: 'பெங்களூரு', description: 'Tamil Inscript பெங்களூரு Bengalooru' },
			{ input: ';qje\'d\'fj', output: 'சௌராட்டிர', description: 'Tamil Inscript சௌராட்டிர Saurattira' }
		],
		inputmethod: 'ta-inscript'
	},{
		description: 'Tamil InScript 2 test',
		tests: [
			{ input: [ [ '.', true ] ], output: '॥', description: 'Tamil InScript 2 AltGr-. -> ॥' }
		],
		inputmethod: 'ta-inscript2'
	},{
		description: 'Tamil Transliteration test',
		tests: [
			// (ks|KS)h should give non-conjunct form of ksh க்\u200cஷ் (with ZWNJ)
			// (ks|KS)H should give the conjunct form க்ஷ் (with ZWNJ)
			{ input: 'thikshith', output: 'திக்\u200cஷித்', description: 'thikshith in Tamil transliteration for திக்\u200cஷித் non conjunct form' }, // (with ZWNJ)
			{ input: 'thikShith', output: 'திக்\u200cஷித்', description: 'thikShith in Tamil transliteration for திக்\u200cஷித் non conjunct form' }, // (with ZWNJ)
			{ input: 'thiksHith', output: 'திக்ஷித்', description: 'thiksHith in Tamil transliteration for திக்ஷித் conjunct form' },
			{ input: 'thiKSHith', output: 'திக்ஷித்', description: 'thiKSHith in Tamil transliteration for திக்ஷித் conjunct form' },
			{ input: 'Sri', output: 'ஸ்ரீ', description: 'Sri in Tamil transliteration for ஸ்ரீ Sri' },
			{ input: 'Sruthi', output: 'ஸ்ருதி', description: 'Sruthi in Tamil transliteration for ஸ்ருதி' },
			{ input: 'Sreeyaa', output: 'ஸ்ரேயா', description: 'Sreeyaa in Tamil transliteration for ஸ்ரேயா' },
			{ input: 'shaajakaan', output: 'ஷாஜகான்', description: 'shaajakaan in Tamil transliteration for ஷாஜகான் non conjunct form' },
			{ input: 'anbu', output: 'அன்பு', description: 'anbu in Tamil transliteration for அன்பு non conjunct form' },
			{ input: 'aarvam', output: 'ஆர்வம்', description: 'aarvam in Tamil transliteration for ஆர்வம் non conjunct form' },
			{ input: 'inRu', output: 'இன்று', description: 'inRu in Tamil transliteration for இன்று non conjunct form' },
			{ input: 'iizam', output: 'ஈழம்', description: 'iizam in Tamil transliteration for ஈழம் non conjunct form' },
			{ input: 'iilam', output: 'ஈலம்', description: 'iilam in Tamil transliteration for ஈலம் non conjunct form' },
			{ input: 'iiLam', output: 'ஈளம்', description: 'iiLam in Tamil transliteration for ஈளம் non conjunct form' },
			{ input: 'eNNam', output: 'எண்ணம்', description: 'eNNam in Tamil transliteration for எண்ணம் non conjunct form' },
			{ input: 'eeu', output: 'ஏஉ', description: 'eeu in Tamil transliteration for ஏஉ non conjunct form' },
			{ input: 'uuo', output: 'ஊஒ', description: 'uuo in Tamil transliteration for ஊஒ non conjunct form' },
			{ input: 'ooNam', output: 'ஓணம்', description: 'ooNam in Tamil transliteration for ஓணம் non conjunct form' },
			{ input: 'autatham', output: 'ஔடதம்', description: 'autatham in Tamil transliteration for ஔடதம் non conjunct form' },
			{ input: 'kangkaa', output: 'கங்கா', description: 'kangkaa in Tamil transliteration for கங்கா non conjunct form' },
			{ input: 'ngaasata', output: 'ஙாசட', description: 'ngaasata in Tamil transliteration for ஙாசட non conjunct form' },
			{ input: 'naNawa', output: 'னணந', description: 'naNawa in Tamil transliteration for னணந non conjunct form' },
			{ input: 'njaanam', output: 'ஞானம்', description: 'shajakaan in Tamil transliteration for ஞானம் non conjunct form' },
			{ input: 'thapamayaa', output: 'தபமயா', description: 'thapamayaa in Tamil transliteration for தபமயா non conjunct form' },
			{ input: 'jijigjaa', output: 'ஜிஜிக்ஜா', description: 'jijigjaa in Tamil transliteration for ஜிஜிக்ஜா non conjunct form' },
			{ input: 'vaNNam', output: 'வண்ணம்', description: 'vaNNam in Tamil transliteration for வண்ணம் non conjunct form' },
			{ input: 'haay', output: 'ஹாய்', description: 'haay in Tamil transliteration for ஹாய் non conjunct form' },
			{ input: 'aHku', output: 'அஃகு', description: 'aHku in Tamil transliteration for அஃகு non conjunct form' },
			{ input: 'jijoo', output: 'ஜிஜோ', description: 'jijoo in Tamil transliteration for ஜிஜோ non conjunct form' },
			{ input: 'yarazavalaLaRana', output: 'யரழவலளறன', description: 'yarazavalaLaRana in Tamil transliteration for யரழவலளறன non conjunct form' },
			{ input: 'juuhuu', output: 'ஜூஹூ', description: 'juuhuu in Tamil transliteration for ஜூஹூ non conjunct form' },
			{ input: 'Sashasa', output: 'ஸஷச', description: 'Sashasa in Tamil transliteration for ஸஷச non conjunct form' },
			{ input: 'Shuushaakikuu', output: 'ஷூஷாகிகூ', description: 'Shuushaakikuu in Tamil transliteration for ஷூஷாகிகூ non conjunct form' },
			{ input: 'kEkAkaa', output: 'கேகாகா', description: 'kEkAkaa in Tamil transliteration for கேகாகா non conjunct form' },
			{ input: 'zaazAAraRA', output: 'ழாழாஆரறா', description: 'zaazAAraRA in Tamil transliteration for ழாழாஆரறா non conjunct form' },
			{ input: 'naiwowO', output: 'னைநொநோ', description: 'naiwowO in Tamil transliteration for னைநொநோ non conjunct form' },
			{ input: 'rarAririireerE', output: 'ரராரிரீரேரே', description: 'rarAririireerE in Tamil transliteration for ரராரிரீரேரே non conjunct form' },
			{ input: 'lailOlauLau', output: 'லைலோலௌளௌ', description: 'lailOlauLau in Tamil transliteration for லைலோலௌளௌ non conjunct form' },
			{ input: 'kakaakAkikIkokOkai', output: 'ககாகாகிகீகொகோகை', description: 'kakaakAkikIkokOkai in Tamil transliteration for ககாகாகிகீகொகோகை non conjunct form' },
			{ input: 'kakaakAkikIkiikukUkuukekEkeekaikokookOkau', output: 'ககாகாகிகீகீகுகூகூகெகேகேகைகொகோகோகௌ', description: 'kakaakAkikIkiikukUkuukekEkeekaikokookOkau in Tamil transliteration for ககாகாகிகீகீகுகூகூகெகேகேகைகொகோகோகௌ non conjunct form' },
			{ input: 'ngangAngaangingiingIngungUnguungengEngeengaingongoongOngau', output: 'ஙஙாஙாஙிஙீஙீஙுஙூஙூஙெஙேஙேஙைஙொஙோஙோஙௌ', description: 'ngangAngaangingiingIngungUnguungengEngeengaingongoongOngu in Tamil transliteration for ஙஙாஙாஙிஙீஙீஙுஙூஙூஙெஙேஙேஙைஙொஙோஙோனௌ non conjunct form' },
			{ input: 'sasaasAsisIsiisusUsuusesEseesaisosoosOsau', output: 'சசாசாசிசீசீசுசூசூசெசேசேசைசொசோசோசௌ', description: 'sasaasAsisIsiisusUsuusesEseesaisosoosOsau in Tamil transliteration for சசாசாசிசீசீசுசூசூசெசேசேசைசொசோசோசௌ non conjunct form' },
			{ input: 'njanjaanjAnjinjiinjInjunjuunjUnjenjeenjEnjainjonjoonjOnjau', output: 'ஞஞாஞாஞிஞீஞீஞுஞூஞூஞெஞேஞேஞைஞொஞோஞோஞௌ', description: 'njanjaanjAnjinjiinjInjunjuunjUnjenjeenjEnjainjonjoonjOnjau in Tamil transliteration for ஞஞாஞாஞிஞீஞீஞுஞூஞூஞெஞேஞேஞைஞொஞோஞோஞௌ non conjunct form' },
			{ input: 'cacaacAcicIciicucUcuucecEceecaicocoocOcau', output: 'சசாசாசிசீசீசுசூசூசெசேசேசைசொசோசோசௌ', description: 'cacaacAcicIciicucUcuucecEceecaicocoocOcau in Tamil transliteration for சசாசாசிசீசீசுசூசூசெசேசேசைசொசோசோசௌ non conjunct form' },
			{ input: 'tataatAtitItiitutUtuutetEteetaitotootOtau', output: 'டடாடாடிடீடீடுடூடூடெடேடேடைடொடோடோடௌ', description: 'tataatAtitItiitutUtuutetEteetaitotootOtau in Tamil transliteration for டடாடாடிடீடீடுடூடூடெடேடேடைடொடோடோடௌ non conjunct form' },
			{ input: 'dadaadAdidIdiidudUduudedEdeedaidodoodOdau', output: 'டடாடாடிடீடீடுடூடூடெடேடேடைடொடோடோடௌ', description: 'dadaadAdidIdiidudUduudedEdeedaidodoodOdau in Tamil Transliteration for டடாடாடிடீடீடுடூடூடெடேடேடைடொடோடோடௌ non conjunct form' },
			{ input: 'NaNaaNANiNINiiNuNUNuuNeNENeeNaiNoNooNONau', output: 'ணணாணாணிணீணீணுணூணூணெணேணேணைணொணோணோணௌ', description: 'NaNaaNANiNINiiNuNUNuuNeNENeeNaiNoNooNONau in Tamil transliteration for ணணாணாணிணீணீணுணூணூணெணேணேணைணொணோணோனணௌ non conjunct form' },
			{ input: 'thathaathAthithIthiithuthUthuuthethEtheethaithothoothOthau', output: 'ததாதாதிதீதீதுதூதூதெதேதேதைதொதோதோதௌ', description: 'thathaathAthithIthiithuthUthuuthethEtheethaithothoothOthau in Tamil transliteration for ததாதாதிதீதீதுதூதூதெதேதேதைதொதோதோதௌ non conjunct form' },
			{ input: 'wawaawAwiwIwiiwuwUwuuwewEweewaiwowoowOwau', output: 'நநாநாநிநீநீநுநூநூநெநேநேநைநொநோநோநௌ', description: 'wawaawAwiwIwiiwuwUwuuwewEweewaiwowoowOwau in Tamil transliteration for நநாநிநீநீநுநூநூநெநேநேநைநொநோநோநௌ non conjunct form' },
			{ input: 'papaapApipIpiipupUpuupepEpeepaipopoopOpau', output: 'பபாபாபிபீபீபுபூபூபெபேபேபைபொபோபோபௌ', description: 'papaapApipIpiipupUpuupepEpeepaipopoopOpau in Tamil transliteration for பபாபாபிபீபீபுபூபூபெபேபேபைபொபோபோபௌ non conjunct form' },
			{ input: 'mamaamAmimImiimumUmuumemEmeemaimomoomOmau', output: 'மமாமாமிமீமீமுமூமூமெமேமேமைமொமோமோமௌ', description: 'mamaamAmimImiimumUmuumemEmeemaimomoomOmau in Tamil transliteration for மமாமாமிமீமீமுமூமூமெமேமேமைமொமோமோமௌ non conjunct form' },
			{ input: 'yayaayAyiyIyiiyuyUyuuyeyEyeeyaiyoyooyOyau', output: 'யயாயாயியீயீயுயூயூயெயேயேயையொயோயோயௌ', description: 'yayaayAyiyIyiiyuyUyuuyeyEyeeyaiyoyooyOyau in Tamil transliteration for யயாயாயியீயீயுயூயூயெயேயேயையொயோயோயௌ non conjunct form' },
			{ input: 'raraarArirIriirurUruurerEreerairoroorOrau', output: 'ரராராரிரீரீருரூரூரெரேரேரைரொரோரோரௌ', description: 'raraarArirIriirurUruurerEreerairoroorOrau in Tamil transliteration for ரராராரிரீரீருரூரூரெரேரேரைரொரோரோரௌ non conjunct form' },
			{ input: 'lalaalAlilIliilulUluulelEleelailoloolOlau', output: 'லலாலாலிலீலீலுலூலூலெலேலேலைலொலோலோலௌ', desription: 'lalaalAlilIliilulUluulelEleelailoloolOlau in Tamil transliteration for லலாலாலிலீலீலுலூலூலெலேலேலைலொலோலோலௌ non conjunct form' },
			{ input: 'vavaavAvivIviivuvUvuuvevEveevaivovoovOvau', output: 'வவாவாவிவீவீவுவூவூவெவேவேவைவொவோவோவௌ', description: 'vavaavAvivIviivuvUvuuvevEveevaivovoovOvau in Tamil transliteration for வவாவாவிவீவீவுவூவூவெவேவேவைவொவோவோவௌ non conjunct form' },
			{ input: 'zazaazAzizIziizuzUzuuzezEzeezaizozoozOzau', output: 'ழழாழாழிழீழீழுழூழூழெழேழேழைழொழோழோழௌ', description: 'zazaazAzizIziizuzUzuuzezEzeezaizozoozOzau in Tamil transliteration for ழழாழாழிழீழீழுழூழூழெழேழேழைழொழோழோழௌ non conjunct form' },
			{ input: 'zhazhaazhAzhizhIzhiizhuzhUzhuuzhezhEzheezhaizhozhoozhOzhau', output: 'ழழாழாழிழீழீழுழூழூழெழேழேழைழொழோழோழௌ', description: 'zhazhaazhAzhizhIzhiizhuzhUzhuuzhezhEzheezhaizhozhoozhOzhau in Tamil transliteration for ழழாழாழிழீழீழுழூழூழெழேழேழைழொழோழோழௌ non conjunct form' },
			{ input: 'LaLaaLALiLILiiLuLULuuLeLELeeLaiLoLooLOLau', output: 'ளளாளாளிளீளீளுளூளூளெளேளேளைளொளோளோளௌ', description: 'LaLaaLALiLILiiLuLULuuLeLELeeLaiLoLooLOLau in Tamil transliteration for ளளாளாளிளீளீளுளூளூளெளேளேளைளொளோளோளௌ non conjunct form' },
			{ input: 'RaRaaRARiRIRiiRuRURuuReREReeRaiRoRooRORau', output: 'றறாறாறிறீறீறுறூறூறெறேறேறைறொறோறோறௌ', description: 'RaRaaRARiRIRiiRuRURuuReREReeRaiRoRooRORau in Tamil transliteration for றறாறாறிறீறீறுறூறூறெறேறேறைறொறோறோறௌ non conjunct form' },
			{ input: 'nanaanAninIniinunUnuunenEneenainonoonOnau', output: 'னனானானினீனீனுனூனூனெனேனேனைனொனோனோனௌ', description: 'nanaanAninIniinunUnuunenEneenainonoonOnau in Tamil transliteration for னனானானினீனீனுனூனூனெனேனேனைனொனோனோனௌ non conjunct form' },
			{ input: 'SaSaaSASiSISiiSuSUSuuSeSESeeSaiSoSooSOSau', output: 'ஸஸாஸாஸிஸீஸீஸுஸூஸூஸெஸேஸேஸைஸொஸோஸோஸௌ', description: 'SaSaaSASiSISiiSuSUSuuSeSESeeSaiSoSooSOSau in Tamil transliteration for ஸஸாஸாஸிஸீஸீஸுஸூஸூஸெஸேஸேஸைஸொஸோஸோஸௌ non conjunct form' },
			{ input: 'shashaashAshishIshiishushUshuusheshEsheeshaishoshooshOshau', output: 'ஷஷாஷாஷிஷீஷீஷுஷூஷூஷெஷேஷேஷைஷொஷோஷோஷௌ', description: 'shashaashAshishIshiishushUshuusheshEsheeshaishoshooshOshau in Tamil transliteration for ஷஷாஷாஷிஷீஷீஷுஷூஷூஷெஷேஷேஷைஷொஷோஷோஷௌ non conjunct form' },
			{ input: 'jajaajAjijIjiijujUjuujejEjeejaijojoojOjau', output: 'ஜஜாஜாஜிஜீஜீஜுஜூஜூஜெஜேஜேஜைஜொஜோஜோஜௌ', description: 'jajaajAjijIjiijujUjuujejEjeejaijojoojOjau in Tamil transliteration for ஜஜாஜாஜிஜீஜீஜுஜூஜூஜெஜேஜேஜைஜொஜோஜோஜௌ non conjunct form' },
			{ input: 'hahaahAhihIhiihuhUhuuhehEheehaihohoohOhau', output: 'ஹஹாஹாஹிஹீஹீஹுஹூஹூஹெஹேஹேஹைஹொஹோஹோஹௌ', description: 'hahaahAhihIhiihuhUhuuhehEheehaihohoohOhau in Tamil transliteration for ஹஹாஹாஹிஹீஹீஹுஹூஹூஹெஹேஹேஹைஹொஹோஹோஹௌ non conjunct form' }
		],
		inputmethod: 'ta-transliteration'
	},{
		description: 'Tamil 99 test',
		tests: [
			// hfW should give non-conjunct form of ksha க்\u200cஷ (with ZWNJ)
			// T still gives the conjunct form க்ஷ
			{ input: 'I', output: ':', description: 'I in Tamil99 for :' },
			{ input: '"', output: '\'', description: '" in Tamil99 for \'' },
			{ input: 'N', output: 'ௐ', description: 'N in Tamil99 for ௐ' },
			{ input: 'lshfWslf', output: 'திக்\u200cஷித்', description: 'lshfWslf in Tamil99 for திக்\u200cஷித் non conjunct form' }, // (with ZWNJ)
			{ input: 'lsTslf', output: 'திக்ஷித்', description: 'lsTslf in Tamil99 for திக்ஷித் conjunct form' },
			{ input: 'hfWtkakf', output: 'க்\u200cஷேமம்', description: 'hfWtkakf in Tamil99 for க்\u200cஷேமம் hfW -> க்\u200cஷ non conjunct form' }, // (with ZWNJ)
			{ input: 'Ttkakf', output: 'க்ஷேமம்', description: 'Ttkakf in Tamil99 for க்ஷேமம் T -> க்ஷ conjunct form' }
		],
		inputmethod: 'ta-99'
	},{
		description: 'Telugu InScript test',
		tests: [
			{ input: 'k-', output: 'కః', description: 'Telugu k- (visarga)' },
			{ input: '}', output: 'ఞ', description: 'Telugu } (nya)' },
			{ input: 'J', output: 'ఱ', description: 'Telugu J (rra)' },
			{ input: '/', output: 'య', description: 'Telugu / (ya)' },
			{ input: 'pz', output: 'జె', description: 'Telugu pz (je)' },
			{ input: 'p`', output: 'జొ', description: 'Telugu p` (jo)' },
			{ input: 'kX', output: 'కఁ', description: 'Telugu kX (ka@m, candrabindu)' },
			{ input: 'hx', output: 'పం', description: 'Telugu hx (paM, anusvara)' },
			{ input: '>', output: '।', description: 'Telugu > (danda)' },
			{ input: [ [ ';', true ] ], output: 'ౘ', description: 'Telugu Alt ; (tsa)' },
			{ input: [ [ 'p', true ] ], output: 'ౙ', description: 'Telugu Alt p (dza)' },
			{ input: [ [ '4', true ] ], output: '₹', description: 'Alt 4; (rupee sign)' },
			{ input: [ [ '=', true ] ], output: 'ౄ', description: 'Telugu Alt = (RRuu, vowel)' },
			{ input: [ [ '+', true ] ], output: 'ౠ', description: 'Telugu Alt + (RRuu)' }
		],
		inputmethod: 'te-inscript'
	},{
		description: 'Telugu Apple test',
		tests: [
			{ input: 'k', output: 'ర', description: 'Telugu ra' },
			{ input: 's', output: 'త', description: 'Telugu tha' },
			{ input: 'zu', output: 'టె', description: 'Telugu te' },
			{ input: 'jW', output: 'కృ', description: 'Telugu kru' },
			{ input: ';i', output: 'పు', description: 'Telugu pu' },
			{ input: 'd$', output: 'ద్పు', description: 'Telugu dpu' },
			{ input: 'Z', output: 'ఠ', description: 'Telugu Ttha' },
			{ input: 'M', output: 'ఛ', description: 'Telugu Ccha' },
			{ input: 'l]', output: 'నౌ', description: 'Telugu now' },
			{ input: 'kiSZWlwjbdys];ze', output: 'రుథఠృనీకమదోతౌపటా', description: 'some paragraph' }

		],
		inputmethod: 'te-apple'
	},{
		description: 'Telugu Modular test',
		tests: [
			{ input: 'H', output: 'ధ', description: 'Telugu dha' },
			{ input: 'e', output: 'క', description: 'Telugu ka' },
			{ input: 'S', output: 'ఇ', description: 'Telugu yi' },
			{ input: 'i', output: 'ల', description: 'Telugu la' },
			{ input: 'fa', output: 'యా', description: 'Telugu yaa' },
			{ input: 'Jd', output: 'భ్', description: 'Telugu Bh' },
			{ input: 'jzgdf', output: 'నృత్య', description: 'word Nruthyam' }

		],
		inputmethod: 'te-modular'
	},{
		description: 'Telugu Transliteration test',
		tests: [
			{ input: 'c', output: 'చ్', description: 'Telugu c' },
			{ input: 'ch', output: 'చ్', description: 'Telugu ch' }
		],
		inputmethod: 'te-transliteration'
	},{
		description: 'Uzbek kbd keyboard test',
		tests: [
			{ input: '.', output: 'ю', description: 'Uzbek kbd - . -> ю' }
		],
		inputmethod: 'uz-kbd'
	},{
		description: 'Belarusian kbd keyboard test',
		tests: [
			{ input: '.', output: 'ю', description: 'Belarusian kbd - . -> ю' }
		],
		inputmethod: 'be-kbd'
	},{
		description: 'Ukrainian kbd keyboard test',
		tests: [
			{ input: '.', output: 'ю', description: 'Ukrainian kbd - . -> ю' }
		],
		inputmethod: 'uk-kbd'
	},{
		description: 'Tarandine input method test',
		tests: [
			{ input: 'a§', output: 'á', description: 'Tarandine á' },
			{ input: 'o§', output: 'ó', description: 'Tarandine ó' },
			{ input: 'A§', output: 'Á', description: 'Tarandine Á' },
			{ input: 'O§', output: 'Ó', description: 'Tarandine Ó' }
		],
		inputmethod: 'roa-tara-GVU'
	},{
		description: 'Piemontèis input method test',
		tests: [
			{ input: ':e', output: 'ë', description: 'Piemontèis ë' },
			{ input: ',o', output: 'ó', description: 'Piemontèis ó' },
			{ input: '\\A', output: 'À', description: 'Piemontèis À' },
			{ input: '\\E', output: 'È', description: 'Piemontèis È' },
			{ input: '\\I', output: 'Ì', description: 'Piemontèis Ì' },
			{ input: '\\O', output: 'Ò', description: 'Piemontèis Ò' },
			{ input: '\\U', output: 'Ù', description: 'Piemontèis Ù' },
			{ input: ',E', output: 'É', description: 'Piemontèis É' },
			{ input: ':E', output: 'Ë', description: 'Piemontèis Ë' },
			{ input: ',O', output: 'Ó', description: 'Piemontèis Ó' },
			{ input: '^g', output: 'ĝ', description: 'Piemontèis (local) ĝ' },
			{ input: '^l', output: 'l̂', description: 'Piemontèis (local) l̂̂' },
			{ input: '^r', output: 'r̂', description: 'Piemontèis (local) r̂' },
			{ input: ':a', output: 'ä', description: 'Piemontèis (local) ä' },
			{ input: '^G', output: 'Ĝ', description: 'Piemontèis (local) Ĝ' },
			{ input: '^L', output: 'L̂', description: 'Piemontèis (local) L̂' },
			{ input: '^R', output: 'R̂', description: 'Piemontèis (local) R̂' },
			{ input: ':A', output: 'Ä', description: 'Piemontèis (local) Ä' }
		],
		inputmethod: 'pms'
	},{
		description: 'Russian kbd keyboard test',
		tests: [
			{ input: '.', output: 'ю', description: 'Russian kbd - . -> ю' }
		],
		inputmethod: 'ru-kbd'
	},{
		description: 'Romanized input method for Sanskrit test',
		tests: [
			{ input: 'aa', output: 'ā', description: 'Sanskrit transliteration - aa -> ā' },
			{ input: '^a', output: 'â', description: 'Sanskrit transliteration - aa -> â' },
			{ input: '.N', output: 'Ṇ', description: 'Sanskrit transliteration - .N -> Ṇ' },
			{ input: 'ḶL', output: 'Ḹ', description: 'Sanskrit transliteration - ḶL -> Ḹ' }
		],
		inputmethod: 'sa-iast'
	},{
		description: 'Southern Kurdish Keyboard test',
		tests: [
			{ input: '`',  output: '\u200c', description: 'Southern Kurdish Keyboard Layout: ` -> \u200c' },
			{ input: '1',  output: '١', description: 'Southern Kurdish Keyboard Layout: 1 -> ١' },
			{ input: '2',  output: '٢', description: 'Southern Kurdish Keyboard Layout: 2 -> ٢' },
			{ input: '3',  output: '٣', description: 'Southern Kurdish Keyboard Layout: 3 -> ٣' },
			{ input: '4',  output: '٤', description: 'Southern Kurdish Keyboard Layout: 4 -> ٤' },
			{ input: '5',  output: '٥', description: 'Southern Kurdish Keyboard Layout: 5 -> ٥' },
			{ input: '6',  output: '۶', description: 'Southern Kurdish Keyboard Layout: 6 -> ۶' },
			{ input: '7',  output: '٧', description: 'Southern Kurdish Keyboard Layout: 7 -> ٧' },
			{ input: '8',  output: '٨', description: 'Southern Kurdish Keyboard Layout: 8 -> ٨' },
			{ input: '9',  output: '٩', description: 'Southern Kurdish Keyboard Layout: 9 -> ٩' },
			{ input: '0',  output: '٠', description: 'Southern Kurdish Keyboard Layout: 0 -> ٠' },
			{ input: 'q',  output: 'ض', description: 'Southern Kurdish Keyboard Layout: q -> ض' },
			{ input: 'w',  output: 'ص', description: 'Southern Kurdish Keyboard Layout: w -> ص' },
			{ input: 'e',  output: 'ث', description: 'Southern Kurdish Keyboard Layout: e -> ث' },
			{ input: 'r',  output: 'ق', description: 'Southern Kurdish Keyboard Layout: r -> ق' },
			{ input: 't',  output: 'ف', description: 'Southern Kurdish Keyboard Layout: t -> ف' },
			{ input: 'y',  output: 'غ', description: 'Southern Kurdish Keyboard Layout: y -> غ' },
			{ input: 'u',  output: 'ع', description: 'Southern Kurdish Keyboard Layout: u -> ع' },
			{ input: 'i',  output: 'ھ', description: 'Southern Kurdish Keyboard Layout: i -> ھ' },
			{ input: 'o',  output: 'خ', description: 'Southern Kurdish Keyboard Layout: o -> خ' },
			{ input: 'p',  output: 'ح', description: 'Southern Kurdish Keyboard Layout: p -> ح' },
			{ input: '[',  output: 'ج', description: 'Southern Kurdish Keyboard Layout: [ -> ج' },
			{ input: ']',  output: 'چ', description: 'Southern Kurdish Keyboard Layout: ] -> چ' },
			{ input: 'a',  output: 'ش', description: 'Southern Kurdish Keyboard Layout: a -> ش' },
			{ input: 's',  output: 'س', description: 'Southern Kurdish Keyboard Layout: s -> س' },
			{ input: 'd',  output: 'ی', description: 'Southern Kurdish Keyboard Layout: d -> ی' },
			{ input: 'f',  output: 'ب', description: 'Southern Kurdish Keyboard Layout: f -> ب' },
			{ input: 'g',  output: 'ل', description: 'Southern Kurdish Keyboard Layout: g -> ل' },
			{ input: 'h',  output: 'ا', description: 'Southern Kurdish Keyboard Layout: h -> ا' },
			{ input: 'j',  output: 'ت', description: 'Southern Kurdish Keyboard Layout: j -> ت' },
			{ input: 'k',  output: 'ن', description: 'Southern Kurdish Keyboard Layout: k -> ن' },
			{ input: 'l',  output: 'م', description: 'Southern Kurdish Keyboard Layout: l -> م' },
			{ input: ';',  output: 'ک', description: 'Southern Kurdish Keyboard Layout: ; -> ک' },
			{ input: 'z',  output: 'ظ', description: 'Southern Kurdish Keyboard Layout: z -> ظ' },
			{ input: 'x',  output: 'ط', description: 'Southern Kurdish Keyboard Layout: x -> ط' },
			{ input: 'c',  output: 'ز', description: 'Southern Kurdish Keyboard Layout: c -> ز' },
			{ input: 'v',  output: 'ر', description: 'Southern Kurdish Keyboard Layout: v -> ر' },
			{ input: 'b',  output: 'ذ', description: 'Southern Kurdish Keyboard Layout: b -> ذ' },
			{ input: 'n',  output: 'د', description: 'Southern Kurdish Keyboard Layout: n -> د' },
			{ input: 'm',  output: 'پ', description: 'Southern Kurdish Keyboard Layout: m -> پ' },
			{ input: ',',  output: 'و', description: 'Southern Kurdish Keyboard Layout: , -> و' },
			{ input: '~',  output: '÷', description: 'Southern Kurdish Keyboard Layout: ~ -> ÷' },
			{ input: '@',  output: '٬', description: 'Southern Kurdish Keyboard Layout: @ -> ٬' },
			{ input: '#',  output: '٫', description: 'Southern Kurdish Keyboard Layout: # -> ٫' },
			{ input: '%',  output: '٪', description: 'Southern Kurdish Keyboard Layout: % -> ٪' },
			{ input: '^',  output: '×', description: 'Southern Kurdish Keyboard Layout: ^ -> ×' },
			{ input: '&',  output: '،', description: 'Southern Kurdish Keyboard Layout: & -> ،' },
			{ input: '(',  output: ')', description: 'Southern Kurdish Keyboard Layout: ( -> )' },
			{ input: ')',  output: '(', description: 'Southern Kurdish Keyboard Layout: ) -> (' },
			{ input: '_',  output: 'ـ', description: 'Southern Kurdish Keyboard Layout: _ -> ـ' },
			{ input: 'Q',  output: 'ْ', description: 'Southern Kurdish Keyboard Layout: Q -> ْ' },
			{ input: 'W',  output: 'وو', description: 'Southern Kurdish Keyboard Layout: W -> وو' },
			{ input: 'E',  output: 'ڤ', description: 'Southern Kurdish Keyboard Layout: E -> ڤ' },
			{ input: 'R',  output: 'ً', description: 'Southern Kurdish Keyboard Layout: R -> ً' },
			{ input: 'T',  output: 'ۊ', description: 'Southern Kurdish Keyboard Layout: T -> ۊ' },
			{ input: 'Y',  output: 'ئ', description: 'Southern Kurdish Keyboard Layout: Y -> ئ' },
			{ input: 'U',  output: 'ە', description: 'Southern Kurdish Keyboard Layout: U -> ە' },
			{ input: 'I',  output: 'ّ', description: 'Southern Kurdish Keyboard Layout: I -> ّ' },
			{ input: 'O',  output: ']', description: 'Southern Kurdish Keyboard Layout: O -> ]' },
			{ input: 'P',  output: '[', description: 'Southern Kurdish Keyboard Layout: P -> [' },
			{ input: '{',  output: '}', description: 'Southern Kurdish Keyboard Layout: { -> }' },
			{ input: '}',  output: '{', description: 'Southern Kurdish Keyboard Layout: } -> {' },
			{ input: 'A',  output: 'ؤ', description: 'Southern Kurdish Keyboard Layout: A -> ؤ' },
			{ input: 'S',  output: 'ئ', description: 'Southern Kurdish Keyboard Layout: S -> ئ' },
			{ input: 'D',  output: 'ێ', description: 'Southern Kurdish Keyboard Layout: D -> ێ' },
			{ input: 'F',  output: 'إ', description: 'Southern Kurdish Keyboard Layout: F -> إ' },
			{ input: 'G',  output: 'أ', description: 'Southern Kurdish Keyboard Layout: G -> أ' },
			{ input: 'H',  output: 'آ', description: 'Southern Kurdish Keyboard Layout: H -> آ' },
			{ input: 'J',  output: 'ة', description: 'Southern Kurdish Keyboard Layout: J -> ة' },
			{ input: 'K',  output: '»', description: 'Southern Kurdish Keyboard Layout: K -> »' },
			{ input: 'L',  output: '«', description: 'Southern Kurdish Keyboard Layout: L -> «' },
			{ input: '"',  output: '؛', description: 'Southern Kurdish Keyboard Layout: " -> ؛' },
			{ input: 'Z',  output: 'ۆ', description: 'Southern Kurdish Keyboard Layout: Z -> ۆ' },
			{ input: 'X',  output: 'ط', description: 'Southern Kurdish Keyboard Layout: X -> ط' },
			{ input: 'C',  output: 'ژ', description: 'Southern Kurdish Keyboard Layout: C -> ژ' },
			{ input: 'V',  output: 'ڕ', description: 'Southern Kurdish Keyboard Layout: V -> ڕ' },
			{ input: 'B',  output: 'ڵ', description: 'Southern Kurdish Keyboard Layout: B -> ڵ' },
			{ input: 'N',  output: 'ٔ', description: 'Southern Kurdish Keyboard Layout: N -> ٔ' },
			{ input: 'M',  output: 'ء', description: 'Southern Kurdish Keyboard Layout: M -> ء' },
			{ input: '<',  output: '>', description: 'Southern Kurdish Keyboard Layout: < -> >' },
			{ input: '>',  output: '<', description: 'Southern Kurdish Keyboard Layout: > -> <' },
			{ input: '?',  output: '؟', description: 'Southern Kurdish Keyboard Layout: ? -> ؟' }
		],
		inputmethod: 'sdh-kbd'
	},{
		description: 'Slovak keyboard test',
		tests: [
			{ input: '`', output: ';', description: 'Slovak ` -> ;' },
			{ input: '1', output: '+', description: 'Slovak 1 -> +' },
			{ input: '2', output: 'ľ', description: 'Slovak 2 -> ľ' },
			{ input: '3', output: 'š', description: 'Slovak 3 -> š' },
			{ input: '4', output: 'č', description: 'Slovak 4 -> č' },
			{ input: '5', output: 'ť', description: 'Slovak 5 -> ť' },
			{ input: '6', output: 'ž', description: 'Slovak 6 -> ž' },
			{ input: '7', output: 'ý', description: 'Slovak 7 -> ý' },
			{ input: '8', output: 'á', description: 'Slovak 8 -> á' },
			{ input: '9', output: 'í', description: 'Slovak 9 -> í' },
			{ input: '0', output: 'é', description: 'Slovak 0 -> é' },
			{ input: '-', output: '=', description: 'Slovak - -> =' },
			{ input: '=a', output: 'á', description: 'Slovak =a -> á' },
			{ input: '=E', output: 'É', description: 'Slovak =E -> É' },
			{ input: '=l', output: 'ĺ', description: 'Slovak =l -> ĺ' },
			{ input: '=L', output: 'Ĺ', description: 'Slovak =L -> Ĺ' },
			{ input: '=r', output: 'ŕ', description: 'Slovak =r -> ŕ' },
			{ input: '=R', output: 'Ŕ', description: 'Slovak =R -> Ŕ' },
			{
				input: [ [ '3', true ], [ 'O', false ] ],
				output: 'Ô',
				description: 'Slovak AltGr-3 + O -> Ô'
			},
			{
				input: [ [ '=', true ], [ 'A', false ] ],
				output: 'Ä',
				description: 'Slovak AltGr-= + A -> Ä'
			},

			{ input: '~', output: '°', description: 'Slovak ~ -> °' },
			{ input: '!', output: '1', description: 'Slovak ! -> 1' },
			{ input: '@', output: '2', description: 'Slovak @ -> 2' },
			{ input: '#', output: '3', description: 'Slovak # -> 3' },
			{ input: '$', output: '4', description: 'Slovak $ -> 4' },
			{ input: '%', output: '5', description: 'Slovak % -> 5' },
			{ input: '^', output: '6', description: 'Slovak ^ -> 6' },
			{ input: '&', output: '7', description: 'Slovak & -> 7' },
			{ input: '*', output: '8', description: 'Slovak * -> 8' },
			{ input: '(', output: '9', description: 'Slovak ( -> 9' },
			{ input: ')', output: '0', description: 'Slovak ) -> 0' },
			{ input: '_', output: '%', description: 'Slovak _ -> %' },
			{ input: '+c', output: 'č', description: 'Slovak +c -> č' },
			{ input: '+C', output: 'Č', description: 'Slovak +c -> Č' },
			{ input: '+d', output: 'ď', description: 'Slovak +d -> ď' },
			{ input: '+D', output: 'Ď', description: 'Slovak +d -> Ď' },
			{ input: '+l', output: 'ľ', description: 'Slovak +l -> ľ' },
			{ input: '+L', output: 'Ľ', description: 'Slovak +l -> Ľ' },

			// QWERTZ
			{ input: 'y', output: 'z', description: 'Slovak y -> z' },
			{ input: 'z', output: 'y', description: 'Slovak z -> y' },
			{ input: 'Y', output: 'Z', description: 'Slovak Y -> Y' },
			{ input: 'Z', output: 'Y', description: 'Slovak Z -> Z' },

			{ input: 'p', output: 'p', description: 'Slovak p -> p' },
			{ input: '[', output: 'ú', description: 'Slovak [ -> ú' },
			{ input: ']', output: 'ä', description: 'Slovak ] -> ä' },
			{ input: 'P', output: 'P', description: 'Slovak P -> P' },
			{ input: '{', output: '/', description: 'Slovak { -> /' },
			{ input: '}', output: '(', description: 'Slovak } -> (' },

			{ input: 'l', output: 'l', description: 'Slovak l -> l' },
			{ input: ';', output: 'ô', description: 'Slovak ; -> ô' },
			{ input: '\'', output: '§', description: 'Slovak \' -> §' },
			{ input: '\\', output: 'ň', description: 'Slovak \\ -> ň' },

			{ input: 'L', output: 'L', description: 'Slovak L -> L' },
			{ input: ':', output: '"', description: 'Slovak : -> "' },
			{ input: '"', output: '!', description: 'Slovak " -> !' },
			{ input: '|', output: ')', description: 'Slovak | -> )' },

			{ input: 'm', output: 'm', description: 'Slovak m -> m' },
			{ input: ',', output: ',', description: 'Slovak , -> ,' },
			{ input: '.', output: '.', description: 'Slovak . -> .' },
			{ input: '/', output: '-', description: 'Slovak / -> -' },
			{ input: 'M', output: 'M', description: 'Slovak M -> M' },
			{ input: '<', output: '?', description: 'Slovak < -> ?' },
			{ input: '>', output: ':', description: 'Slovak > -> :' },
			{ input: '?', output: '_', description: 'Slovak ? -> _' }
		],
		inputmethod: 'sk-kbd'
	},{
		description: 'Sanskrit transliteration test',
		tests: [
			{ input: '\\~', output: '~', description: 'Sanskrit transliteration - \\~ -> ~' }
		],
		inputmethod: 'sa-transliteration'
	},{
		description: 'Sinhala Wijesekara transliteration tests',
		tests: [
			// A consonant is entered with a single key.
			{ input: 'l', output: 'ක', description: 'Sinhala Wijesekara - l -> ක (KA)' },

			// A vowel is entered with 1 or 2 keys.
			{ input: 'w', output: 'අ', description: 'Sinhala Wijesekara - w -> අ (A)' },
			{ input: 'wd', output: 'ආ', description: 'Sinhala Wijesekara - wd -> ආ (AA)' },
			{ input: 'we', output: 'ඇ', description: 'Sinhala Wijesekara - wd -> ඇ (AE)' },
			{ input: 'wE', output: 'ඈ', description: 'Sinhala Wijesekara - wd -> ඈ (AAE)' },

			{ input: 'b', output: 'ඉ', description: 'Sinhala Wijesekara - b -> ඉ (I)' },
			{ input: 'B', output: 'ඊ', description: 'Sinhala Wijesekara - B -> ඊ (II)' },

			{ input: 'W', output: 'උ', description: 'Sinhala Wijesekara - W -> උ (U)' },
			{ input: 'WA', output: 'ඌ', description: 'Sinhala Wijesekara - WA -> ඌ (UU)' },

			{ input: 'R', output: 'ඍ', description: 'Sinhala Wijesekara - R -> ඍ (R)' },
			{ input: 'RD', output: 'ඎ', description: 'Sinhala Wijesekara - RD -> ඎ (RR)' },

			{ input: [ [ ',', true ] ], output: 'ඏ', description: 'Sinhala Wijesekara - Alt-, -> ඏ (L)' },
			{ input: [ [ ',', true ], [ 'A', false ] ], output: 'ඐ', description: 'Sinhala Wijesekara - Alt-,+A -> ඐ (LL)' },

			{ input: 't', output: 'එ', description: 'Sinhala Wijesekara - t -> එ (E)' },
			{ input: 'ta', output: 'ඒ', description: 'Sinhala Wijesekara - ta -> ඒ (EE)' },
			{ input: 'ft', output: 'ඓ', description: 'Sinhala Wijesekara - ft -> ඓ (AI)' },

			{ input: 'T', output: 'ඔ', description: 'Sinhala Wijesekara - T -> ඔ (O)' },
			{ input: 'Ta', output: 'ඕ', description: 'Sinhala Wijesekara - Ta -> ඕ (OO)' },
			{ input: 'TA', output: 'ඖ', description: 'Sinhala Wijesekara - TA -> ඖ (AU)' },

			// A pure consonant is entered with 2 keys: cons + al-lakuna.
			{ input: 'la', output: 'ක්', description: 'Sinhala Wijesekara - la -> ක් (K)' },

			// Vowel signs

			// After the consonant
			{ input: 'ld', output: 'කා', description: 'Sinhala Wijesekara - ld -> කා (KAA)' },
			{ input: '.e', output: 'ගැ', description: 'Sinhala Wijesekara - .e -> ගැ (GAE)' },
			{ input: 'gE', output: 'ටෑ', description: 'Sinhala Wijesekara - gE -> ටෑ (TTAAE)' },
			{ input: 'vs', output: 'ඩි', description: 'Sinhala Wijesekara - vs -> ඩි (DDI)' },
			{ input: ';S', output: 'තී', description: 'Sinhala Wijesekara - ;S -> තී (TII)' },
			{ input: 'oq', output: 'දු', description: 'Sinhala Wijesekara - oq -> දු (DU)' },
			{ input: 'mQ', output: 'පූ', description: 'Sinhala Wijesekara - mQ -> පූ (PUU)' },
			{ input: 'nD', output: 'බෘ', description: 'Sinhala Wijesekara - nD -> බෘ (BR)' },
			{ input: 'iDD', output: 'සෲ', description: 'Sinhala Wijesekara - iDD -> සෲ (SRR)' }
		],
		inputmethod: 'si-wijesekara'
	},{
		description: 'Kurdish h test',
		tests: [
			{ input: 'chh', output: 'ch', description: 'chh -> ch' },
			{ input: 'shh', output: 'sh', description: 'shh -> sh' },
			{ input: 'hhh', output: 'hh', description: 'hhh -> hh' },
			{ input: 'xhh', output: 'xh', description: 'xhh -> xh' },
			{ input: 'eee', output: 'ee', description: 'eee -> ee' },
			{ input: 'iii', output: 'ii', description: 'iii -> ii' },
			{ input: 'uuu', output: 'uu', description: 'uuu -> uu' },
			{ input: 'Chh', output: 'Ch', description: 'Chh -> Ch' },
			{ input: 'Shh', output: 'Sh', description: 'Shh -> Sh' },
			{ input: 'Hhh', output: 'Hh', description: 'Hhh -> Hh' },
			{ input: 'Eee', output: 'Ee', description: 'Eee -> ee' },
			{ input: 'Iii', output: 'Ii', description: 'Iii -> Ii' },
			{ input: 'Uuu', output: 'Uu', description: 'Uuu -> Uu' },
			{ input: 'SHH', output: 'SH', description: 'SHH -> SH' },
			{ input: 'HHH', output: 'HH', description: 'HHH -> HH' },
			{ input: 'XHH', output: 'XH', description: 'XHH -> XH' },
			{ input: 'EEE', output: 'EE', description: 'EEE -> EE' },
			{ input: 'III', output: 'II', description: 'III -> II' },
			{ input: 'UUU', output: 'UU', description: 'UUU -> UU' },
			{ input: 'ChH', output: 'CH', description: 'ChH -> CH' },
			{ input: 'ShH', output: 'SH', description: 'ShH -> SH' },
			{ input: 'HhH', output: 'HH', description: 'HhH -> HH' },
			{ input: 'XhH', output: 'XH', description: 'XhH -> XH' },
			{ input: 'EeE', output: 'EE', description: 'EeE -> EE' },
			{ input: 'IiI', output: 'II', description: 'IiI -> II' },
			{ input: 'UuU', output: 'UU', description: 'UuU -> UU' },

			{ input: 'ch', output: 'ç', description: 'ch -> ç' },
			{ input: 'sh', output: 'ş', description: 'sh -> ş' },
			{ input: 'hh', output: 'ḧ', description: 'hh -> ḧ' },
			{ input: 'xh', output: 'ẍ', description: 'xh -> ẍ' },
			{ input: 'ee', output: 'ê', description: 'ee -> ê' },
			{ input: 'ii', output: 'î', description: 'ii -> î' },
			{ input: 'uu', output: 'û', description: 'uu -> û' },
			{ input: 'Ch', output: 'Ç', description: 'Ch -> Ç' },
			{ input: 'Sh', output: 'Ş', description: 'Sh -> Ş' },
			{ input: 'Hh', output: 'Ḧ', description: 'Hh -> Ḧ' },
			{ input: 'Xh', output: 'Ẍ', description: 'Xh -> Ẍ' },
			{ input: 'Ee', output: 'Ê', description: 'Ee -> Ê' },
			{ input: 'Ii', output: 'Î', description: 'Ii -> Î' },
			{ input: 'Uu', output: 'Û', description: 'Uu -> Û' },
			{ input: 'CH', output: 'Ç', description: 'CH -> Ç' },
			{ input: 'SH', output: 'Ş', description: 'SH -> Ş' },
			{ input: 'HH', output: 'Ḧ', description: 'HH -> Ḧ' },
			{ input: 'XH', output: 'Ẍ', description: 'XH -> Ẍ' },
			{ input: 'EE', output: 'Ê', description: 'EE -> Ê' },
			{ input: 'II', output: 'Î', description: 'II -> Î' },
			{ input: 'UU', output: 'Û', description: 'UU -> Û' }
		],
		inputmethod: 'ku-h'
	},{
		description: 'Kurdish tr test (for Turkish keyboard)',
		tests: [
			{ input: 'hhh', output: 'hh', description: 'hhh -> hh' },
			{ input: 'Hhh', output: 'Hh', description: 'Hhh -> Hh' },
			{ input: 'HHH', output: 'HH', description: 'HHH -> HH' },
			{ input: 'HhH', output: 'HH', description: 'HhH -> HH' },

			{ input: 'ğ', output: 'ẍ', description: 'ğ -> ẍ' },
			{ input: 'ı', output: 'i', description: 'ı -> i' },
			{ input: 'i', output: 'î', description: 'i -> î' },
			{ input: 'ö', output: 'ê', description: 'ö -> ê' },
			{ input: 'ü', output: 'û', description: 'ü -> û' },
			{ input: 'hh', output: 'ḧ', description: 'hh -> ḧ' },
			{ input: 'Ğ', output: 'Ẍ', description: 'Ğ -> Ẍ' },
			{ input: 'İ', output: 'Î', description: 'İ -> Î' },
			{ input: 'Ö', output: 'Ê', description: 'Ö -> Ê' },
			{ input: 'Ü', output: 'Û', description: 'Ü -> Û' },
			{ input: 'Hh', output: 'Ḧ', description: 'Hh -> Ḧ' },
			{ input: 'HH', output: 'Ḧ', description: 'HH -> Ḧ' }
		],
		inputmethod: 'ku-tr'
	},{
		description: 'Northern Luri keyboard test',
		tests: [
			{ input: '`', output: '\u200c', description: 'Northern Luri Keyboard Layout: ` -> \\u200c' },
			{ input: '1', output: '۱', description: 'Northern Luri Keyboard Layout: 1 -> ۱' },
			{ input: '2', output: '۲', description: 'Northern Luri Keyboard Layout: 2 -> ۲' },
			{ input: '3', output: '۳', description: 'Northern Luri Keyboard Layout: 3 -> ۳' },
			{ input: '4', output: '۴', description: 'Northern Luri Keyboard Layout: 4 -> ۴' },
			{ input: '5', output: '۵', description: 'Northern Luri Keyboard Layout: 5 -> ۵' },
			{ input: '6', output: '۶', description: 'Northern Luri Keyboard Layout: 6 -> ۶' },
			{ input: '7', output: '۷', description: 'Northern Luri Keyboard Layout: 7 -> ۷' },
			{ input: '8', output: '۸', description: 'Northern Luri Keyboard Layout: 8 -> ۸' },
			{ input: '9', output: '۹', description: 'Northern Luri Keyboard Layout: 9 -> ۹' },
			{ input: '0', output: '۰', description: 'Northern Luri Keyboard Layout: 0 -> ۰' },
			{ input: 'q', output: 'ض', description: 'Northern Luri Keyboard Layout: q -> ض' },
			{ input: 'w', output: 'ص', description: 'Northern Luri Keyboard Layout: w -> ص' },
			{ input: 'e', output: 'ث', description: 'Northern Luri Keyboard Layout: e -> ث' },
			{ input: 'r', output: 'ق', description: 'Northern Luri Keyboard Layout: r -> ق' },
			{ input: 't', output: 'ف', description: 'Northern Luri Keyboard Layout: t -> ف' },
			{ input: 'y', output: 'غ', description: 'Northern Luri Keyboard Layout: y -> غ' },
			{ input: 'u', output: 'ع', description: 'Northern Luri Keyboard Layout: u -> ع' },
			{ input: 'i', output: 'ھ', description: 'Northern Luri Keyboard Layout: i -> ھ' },
			{ input: 'o', output: 'خ', description: 'Northern Luri Keyboard Layout: o -> خ' },
			{ input: 'p', output: 'ح', description: 'Northern Luri Keyboard Layout: p -> ح' },
			{ input: '[', output: 'ج', description: 'Northern Luri Keyboard Layout: [ -> ج' },
			{ input: ']', output: 'چ', description: 'Northern Luri Keyboard Layout: ] -> چ' },
			{ input: 'a', output: 'ش', description: 'Northern Luri Keyboard Layout: a -> ش' },
			{ input: 's', output: 'س', description: 'Northern Luri Keyboard Layout: s -> س' },
			{ input: 'd', output: 'ی', description: 'Northern Luri Keyboard Layout: d -> ی' },
			{ input: 'f', output: 'ب', description: 'Northern Luri Keyboard Layout: f -> ب' },
			{ input: 'g', output: 'ل', description: 'Northern Luri Keyboard Layout: g -> ل' },
			{ input: 'h', output: 'ا', description: 'Northern Luri Keyboard Layout: h -> ا' },
			{ input: 'j', output: 'ت', description: 'Northern Luri Keyboard Layout: j -> ت' },
			{ input: 'k', output: 'ن', description: 'Northern Luri Keyboard Layout: k -> ن' },
			{ input: 'l', output: 'م', description: 'Northern Luri Keyboard Layout: l -> م' },
			{ input: ';', output: 'ک', description: 'Northern Luri Keyboard Layout: ; -> ک' },
			{ input: 'z', output: 'ظ', description: 'Northern Luri Keyboard Layout: z -> ظ' },
			{ input: 'x', output: 'ط', description: 'Northern Luri Keyboard Layout: x -> ط' },
			{ input: 'c', output: 'ز', description: 'Northern Luri Keyboard Layout: c -> ز' },
			{ input: 'v', output: 'ر', description: 'Northern Luri Keyboard Layout: v -> ر' },
			{ input: 'b', output: 'ذ', description: 'Northern Luri Keyboard Layout: b -> ذ' },
			{ input: 'n', output: 'د', description: 'Northern Luri Keyboard Layout: n -> د' },
			{ input: 'm', output: 'پ', description: 'Northern Luri Keyboard Layout: m -> پ' },
			{ input: ',', output: 'ڤ', description: 'Northern Luri Keyboard Layout: , -> ڤ' },
			{ input: '~', output: '÷', description: 'Northern Luri Keyboard Layout: ~ -> ÷' },
			{ input: '@', output: '٬', description: 'Northern Luri Keyboard Layout: @ -> ٬' },
			{ input: '#', output: '٫', description: 'Northern Luri Keyboard Layout: # -> ٫' },
			{ input: '%', output: '٪', description: 'Northern Luri Keyboard Layout: % -> ٪' },
			{ input: '^', output: '×', description: 'Northern Luri Keyboard Layout: ^ -> ×' },
			{ input: '&', output: '،', description: 'Northern Luri Keyboard Layout: & -> ،' },
			{ input: '(', output: ')', description: 'Northern Luri Keyboard Layout: ( -> )' },
			{ input: ')', output: '(', description: 'Northern Luri Keyboard Layout: ) -> (' },
			{ input: '_', output: 'ـ', description: 'Northern Luri Keyboard Layout: _ -> ـ' },
			{ input: 'Q', output: 'ۊ', description: 'Northern Luri Keyboard Layout: Q -> ۊ' },
			{ input: 'W', output: 'ۉ', description: 'Northern Luri Keyboard Layout: W -> ۉ' },
			{ input: 'E', output: 'وٙ', description: 'Northern Luri Keyboard Layout: E -> وٙ' },
			{ input: 'R', output: 'ً', description: 'Northern Luri Keyboard Layout: R -> ً' },
			{ input: 'T', output: 'و', description: 'Northern Luri Keyboard Layout: T -> و' },
			{ input: 'Y', output: 'أ', description: 'Northern Luri Keyboard Layout: Y -> أ' },
			{ input: 'U', output: 'ە', description: 'Northern Luri Keyboard Layout: U -> ە' },
			{ input: 'I', output: 'ؤ', description: 'Northern Luri Keyboard Layout: I -> ؤ' },
			{ input: 'O', output: ']', description: 'Northern Luri Keyboard Layout: O -> ]' },
			{ input: 'P', output: '[', description: 'Northern Luri Keyboard Layout: P -> [' },
			{ input: '{', output: '}', description: 'Northern Luri Keyboard Layout: { -> }' },
			{ input: '}', output: '{', description: 'Northern Luri Keyboard Layout: } -> {' },
			{ input: 'A', output: 'اٛ', description: 'Northern Luri Keyboard Layout: A -> اٛ' },
			{ input: 'S', output: 'ئ', description: 'Northern Luri Keyboard Layout: S -> ئ' },
			{ input: 'D', output: 'ئو', description: 'Northern Luri Keyboard Layout: D -> ئو' },
			{ input: 'F', output: 'ئی', description: 'Northern Luri Keyboard Layout: F -> ئی' },
			{ input: 'G', output: 'لٛ', description: 'Northern Luri Keyboard Layout: G -> لٛ' },
			{ input: 'H', output: 'آ', description: 'Northern Luri Keyboard Layout: H -> آ' },
			{ input: 'J', output: 'او', description: 'Northern Luri Keyboard Layout: J -> او' },
			{ input: 'K', output: '»', description: 'Northern Luri Keyboard Layout: K -> »' },
			{ input: 'L', output: '«', description: 'Northern Luri Keyboard Layout: L -> «' },
			{ input: '"', output: '؛', description: 'Northern Luri Keyboard Layout: " -> ؛' },
			{ input: 'Z', output: 'نٛ', description: 'Northern Luri Keyboard Layout: Z -> نٛ' },
			{ input: 'X', output: 'گٛ', description: 'Northern Luri Keyboard Layout: X -> گٛ' },
			{ input: 'C', output: 'ژ', description: 'Northern Luri Keyboard Layout: C -> ژ' },
			{ input: 'V', output: 'ؽ', description: 'Northern Luri Keyboard Layout: V -> ؽ' },
			{ input: 'B', output: 'دٙ', description: 'Northern Luri Keyboard Layout: B -> دٙ' },
			{ input: 'N', output: 'ٔ', description: 'Northern Luri Keyboard Layout: N -> ٔ' },
			{ input: 'M', output: 'ء', description: 'Northern Luri Keyboard Layout: M -> ء' },
			{ input: '<', output: '>', description: 'Northern Luri Keyboard Layout: < -> >' },
			{ input: '>', output: '<', description: 'Northern Luri Keyboard Layout: > -> <' },
			{ input: '?', output: '؟', description: 'Northern Luri Keyboard Layout: ? -> ؟' }
		],
		inputmethod: 'lrc-kbd'
	},{
		description: 'Lushootseed Tulalip keyboard test',
		tests: [
			{ input: 'e', output: 'ə', description: 'Lushootseed Tulalip ə' },
			{ input: 'r', output: 'š', description: 'Lushootseed Tulalip š' },
			{ input: 'o', output: 'ʷ', description: 'Lushootseed Tulalip ʷ' },
			{ input: 'f', output: 'ʔ', description: 'Lushootseed Tulalip ʔ' },
			{ input: 'j', output: 'ǰ', description: 'Lushootseed Tulalip ǰ' },
			{ input: ';', output: 'ɬ', description: 'Lushootseed Tulalip ɬ' },
			{ input: 'z', output: 'x̌', description: 'Lushootseed Tulalip x̌' },
			{ input: 'v', output: 'č', description: 'Lushootseed Tulalip č' },
			{ input: 'Q', output: 'q̓', description: 'Lushootseed Tulalip q̓' },
			{ input: 'W', output: 'w̓', description: 'Lushootseed Tulalip w̓' },
			{ input: 'E', output: 'q̓ʷ', description: 'Lushootseed Tulalip q̓ʷ' },
			{ input: 'R', output: '√', description: 'Lushootseed Tulalip √' },
			{ input: 'T', output: 't̕', description: 'Lushootseed Tulalip t̕' },
			{ input: 'Y', output: 'y̓', description: 'Lushootseed Tulalip y̓' },
			{ input: 'I', output: 'kʷ', description: 'Lushootseed Tulalip kʷ' },
			{ input: 'P', output: 'p̓', description: 'Lushootseed Tulalip p̓' },
			{ input: 'A', output: 'qʷ', description: 'Lushootseed Tulalip qʷ' },
			{ input: 'D', output: 'dᶻ', description: 'Lushootseed Tulalip dᶻ' },
			{ input: 'G', output: 'gʷ', description: 'Lushootseed Tulalip gʷ' },
			{ input: 'J', output: 'k̓ʷ', description: 'Lushootseed Tulalip k̓ʷ' },
			{ input: 'K', output: 'k̓', description: 'Lushootseed Tulalip k̓' },
			{ input: 'L', output: 'l̕', description: 'Lushootseed Tulalip l̕' },
			{ input: ':', output: 'ƛ̕', description: 'Lushootseed Tulalip ƛ̕' },
			{ input: 'Z', output: 'x̌ʷ', description: 'Lushootseed Tulalip x̌ʷ' },
			{ input: 'X', output: 'xʷ', description: 'Lushootseed Tulalip xʷ' },
			{ input: 'C', output: 'c̓', description: 'Lushootseed Tulalip c̓' },
			{ input: 'V', output: 'č̓', description: 'Lushootseed Tulalip č̓' },
			{ input: 'B', output: 'b̓', description: 'Lushootseed Tulalip b̓' },
			{ input: 'N', output: 'n̓', description: 'Lushootseed Tulalip n̓' },
			{ input: 'M', output: 'm̓', description: 'Lushootseed Tulalip m̓' }
		],
		inputmethod: 'lut-tulalip'
	},{
		description: 'Central Kurdish keyboard based on Arabic keyboard test',
		tests: [
			{ input: '`',  output: 'ژ', description: 'Central Kurdish keyboard based on Arabic: ` -> ژ' },
			{ input: '1',  output: '١', description: 'Central Kurdish keyboard based on Arabic: 1 -> ١' },
			{ input: '2',  output: '٢', description: 'Central Kurdish keyboard based on Arabic: 2 -> ٢' },
			{ input: '3',  output: '٣', description: 'Central Kurdish keyboard based on Arabic: 3 -> ٣' },
			{ input: '4',  output: '٤', description: 'Central Kurdish keyboard based on Arabic: 4 -> ٤' },
			{ input: '5',  output: '٥', description: 'Central Kurdish keyboard based on Arabic: 5 -> ٥' },
			{ input: '6',  output: '٦', description: 'Central Kurdish keyboard based on Arabic: 6 -> ٦' },
			{ input: '7',  output: '٧', description: 'Central Kurdish keyboard based on Arabic: 7 -> ٧' },
			{ input: '8',  output: '٨', description: 'Central Kurdish keyboard based on Arabic: 8 -> ٨' },
			{ input: '9',  output: '٩', description: 'Central Kurdish keyboard based on Arabic: 9 -> ٩' },
			{ input: '0',  output: '٠', description: 'Central Kurdish keyboard based on Arabic: 0 -> ٠' },

			{ input: 'q',  output: 'چ', description: 'Central Kurdish keyboard based on Arabic: q -> چ' },
			{ input: 'w',  output: 'ص', description: 'Central Kurdish keyboard based on Arabic: w -> ص' },
			{ input: 'e',  output: 'پ', description: 'Central Kurdish keyboard based on Arabic: e -> پ' },
			{ input: 'r',  output: 'ق', description: 'Central Kurdish keyboard based on Arabic: r -> ق' },
			{ input: 't',  output: 'ف', description: 'Central Kurdish keyboard based on Arabic: t -> ف' },
			{ input: 'y',  output: 'غ', description: 'Central Kurdish keyboard based on Arabic: y -> غ' },
			{ input: 'u',  output: 'ع', description: 'Central Kurdish keyboard based on Arabic: u -> ع' },
			{ input: 'i',  output: 'ھ', description: 'Central Kurdish keyboard based on Arabic: i -> ھ' },
			{ input: 'o',  output: 'خ', description: 'Central Kurdish keyboard based on Arabic: o -> خ' },
			{ input: 'p',  output: 'ح', description: 'Central Kurdish keyboard based on Arabic: p -> ح' },
			{ input: '[',  output: 'ج', description: 'Central Kurdish keyboard based on Arabic: [ -> ج' },
			{ input: ']',  output: 'د', description: 'Central Kurdish keyboard based on Arabic: ] -> د' },

			{ input: 'a',  output: 'ش', description: 'Central Kurdish keyboard based on Arabic: a -> ش' },
			{ input: 's',  output: 'س', description: 'Central Kurdish keyboard based on Arabic: s -> س' },
			{ input: 'd',  output: 'ی', description: 'Central Kurdish keyboard based on Arabic: d -> ی' },
			{ input: 'f',  output: 'ب', description: 'Central Kurdish keyboard based on Arabic: f -> ب' },
			{ input: 'g',  output: 'ل', description: 'Central Kurdish keyboard based on Arabic: g -> ل' },
			{ input: 'h',  output: 'ا', description: 'Central Kurdish keyboard based on Arabic: h -> ا' },
			{ input: 'j',  output: 'ت', description: 'Central Kurdish keyboard based on Arabic: j -> ت' },
			{ input: 'k',  output: 'ن', description: 'Central Kurdish keyboard based on Arabic: k -> ن' },
			{ input: 'l',  output: 'م', description: 'Central Kurdish keyboard based on Arabic: l -> م' },
			{ input: ';',  output: 'ک', description: 'Central Kurdish keyboard based on Arabic: ; -> ک' },
			{ input: '\'',  output: 'گ', description: 'Central Kurdish keyboard based on Arabic: \' -> گ' },

			{ input: 'z',  output: 'ئ', description: 'Central Kurdish keyboard based on Arabic: z -> ئ' },
			{ input: 'x',  output: 'ء', description: 'Central Kurdish keyboard based on Arabic: x -> ء' },
			{ input: 'c',  output: 'ۆ', description: 'Central Kurdish keyboard based on Arabic: c -> ۆ' },
			{ input: 'v',  output: 'ر', description: 'Central Kurdish keyboard based on Arabic: v -> ر' },
			{ input: 'b',  output: 'لا', description: 'Central Kurdish keyboard based on Arabic: b -> لا' },
			{ input: 'n',  output: 'ى', description: 'Central Kurdish keyboard based on Arabic: n -> ى' },
			{ input: 'm',  output: 'ە', description: 'Central Kurdish keyboard based on Arabic: m -> ە' },
			{ input: ',',  output: 'و', description: 'Central Kurdish keyboard based on Arabic: , -> و' },
			{ input: '.',  output: 'ز', description: 'Central Kurdish keyboard based on Arabic: . -> ز' },

			{ input: '%',  output: '٪', description: 'Central Kurdish keyboard based on Arabic: % -> ٪' },
			{ input: '(',  output: ')', description: 'Central Kurdish keyboard based on Arabic: ( -> )' },
			{ input: ')',  output: '(', description: 'Central Kurdish keyboard based on Arabic: ) -> (' },

			{ input: 'Q',  output: 'ض', description: 'Central Kurdish keyboard based on Arabic: Q -> ض' },
			{ input: 'W',  output: '}', description: 'Central Kurdish keyboard based on Arabic: W -> }' },
			{ input: 'E',  output: 'ث', description: 'Central Kurdish keyboard based on Arabic: E -> ث' },
			{ input: 'R',  output: '{', description: 'Central Kurdish keyboard based on Arabic: R -> {' },
			{ input: 'T',  output: 'ڤ', description: 'Central Kurdish keyboard based on Arabic: T -> ڤ' },
			{ input: 'Y',  output: 'إ', description: 'Central Kurdish keyboard based on Arabic: Y -> إ' },
			{ input: 'U',  output: 'ۊ', description: 'Central Kurdish keyboard based on Arabic: U -> ۊ' },
			{ input: 'I',  output: '\'', description: 'Central Kurdish keyboard based on Arabic: I -> \'' },
			{ input: 'O',  output: '"', description: 'Central Kurdish keyboard based on Arabic: O -> "' },
			{ input: 'P',  output: '؛', description: 'Central Kurdish keyboard based on Arabic: P -> ؛' },
			{ input: '{',  output: '>', description: 'Central Kurdish keyboard based on Arabic: { -> >' },
			{ input: '}',  output: '<', description: 'Central Kurdish keyboard based on Arabic: } -> <' },

			{ input: 'A',  output: '[', description: 'Central Kurdish keyboard based on Arabic: A -> [' },
			{ input: 'S',  output: ']', description: 'Central Kurdish keyboard based on Arabic: S -> ]' },
			{ input: 'D',  output: 'ێ', description: 'Central Kurdish keyboard based on Arabic: D -> ێ' },
			{ input: 'F',  output: '', description: 'Central Kurdish keyboard based on Arabic: F -> ' },
			{ input: 'G',  output: 'ڵ', description: 'Central Kurdish keyboard based on Arabic: G -> ڵ' },
			{ input: 'H',  output: 'أ', description: 'Central Kurdish keyboard based on Arabic: H -> أ' },
			{ input: 'J',  output: 'ـ', description: 'Central Kurdish keyboard based on Arabic: J -> ـ' },
			{ input: 'K',  output: '،', description: 'Central Kurdish keyboard based on Arabic: K -> ،' },
			{ input: 'L',  output: '\\', description: 'Central Kurdish keyboard based on Arabic: L -> \\' },
			{ input: '"',  output: 'ط', description: 'Central Kurdish keyboard based on Arabic: " -> ط' },

			{ input: 'Z',  output: 'ڎ', description: 'Central Kurdish keyboard based on Arabic: Z -> ڎ' },
			{ input: 'X',  output: 'وو', description: 'Central Kurdish keyboard based on Arabic: X -> وو' },
			{ input: 'C',  output: 'ؤ', description: 'Central Kurdish keyboard based on Arabic: C -> ؤ' },
			{ input: 'V',  output: 'ڕ', description: 'Central Kurdish keyboard based on Arabic: V -> ڕ' },
			{ input: 'B',  output: 'ڵا', description: 'Central Kurdish keyboard based on Arabic: B -> ڵا' },
			{ input: 'N',  output: 'آ', description: 'Central Kurdish keyboard based on Arabic: N -> آ' },
			{ input: 'M',  output: 'ة', description: 'Central Kurdish keyboard based on Arabic: M -> ة' },
			{ input: '<',  output: '٫', description: 'Central Kurdish keyboard based on Arabic: < -> ٫' },
			{ input: '>',  output: '.', description: 'Central Kurdish keyboard based on Arabic: > -> .' },
			{ input: '?',  output: '؟', description: 'Central Kurdish keyboard based on Arabic: ? -> ؟' }
		],
		inputmethod: 'ckb-transliteration-arkbd'
	},{
		description: 'Central Kurdish keyboard based on Persian keyboard test',
		tests: [
			{ input: '`',  output: 'پ', description: 'Central Kurdish keyboard based on Persian: ` -> پ' },
			{ input: '1',  output: '١', description: 'Central Kurdish keyboard based on Persian: 1 -> ١' },
			{ input: '2',  output: '٢', description: 'Central Kurdish keyboard based on Persian: 2 -> ٢' },
			{ input: '3',  output: '٣', description: 'Central Kurdish keyboard based on Persian: 3 -> ٣' },
			{ input: '4',  output: '٤', description: 'Central Kurdish keyboard based on Persian: 4 -> ٤' },
			{ input: '5',  output: '٥', description: 'Central Kurdish keyboard based on Persian: 5 -> ٥' },
			{ input: '6',  output: '٦', description: 'Central Kurdish keyboard based on Persian: 6 -> ٦' },
			{ input: '7',  output: '٧', description: 'Central Kurdish keyboard based on Persian: 7 -> ٧' },
			{ input: '8',  output: '٨', description: 'Central Kurdish keyboard based on Persian: 8 -> ٨' },
			{ input: '9',  output: '٩', description: 'Central Kurdish keyboard based on Persian: 9 -> ٩' },
			{ input: '0',  output: '٠', description: 'Central Kurdish keyboard based on Persian: 0 -> ٠' },

			{ input: 'q',  output: 'ڵ', description: 'Central Kurdish keyboard based on Persian: q -> ڵ' },
			{ input: 'w',  output: 'ۆ', description: 'Central Kurdish keyboard based on Persian: w -> ۆ' },
			{ input: 'e',  output: 'ێ', description: 'Central Kurdish keyboard based on Persian: e -> ێ' },
			{ input: 'r',  output: 'ق', description: 'Central Kurdish keyboard based on Persian: r -> ق' },
			{ input: 't',  output: 'ف', description: 'Central Kurdish keyboard based on Persian: t -> ف' },
			{ input: 'y',  output: 'غ', description: 'Central Kurdish keyboard based on Persian: y -> غ' },
			{ input: 'u',  output: 'ع', description: 'Central Kurdish keyboard based on Persian: u -> ع' },
			{ input: 'i',  output: 'ە', description: 'Central Kurdish keyboard based on Persian: i -> ە' },
			{ input: 'o',  output: 'خ', description: 'Central Kurdish keyboard based on Persian: o -> خ' },
			{ input: 'p',  output: 'ح', description: 'Central Kurdish keyboard based on Persian: p -> ح' },
			{ input: '[',  output: 'ج', description: 'Central Kurdish keyboard based on Persian: [ -> ج' },
			{ input: ']',  output: 'چ', description: 'Central Kurdish keyboard based on Persian: ] -> چ' },
			{ input: '\\',  output: 'ژ', description: 'Central Kurdish keyboard based on Persian: \\ -> ژ' },

			{ input: 'a',  output: 'ش', description: 'Central Kurdish keyboard based on Persian: a -> ش' },
			{ input: 's',  output: 'س', description: 'Central Kurdish keyboard based on Persian: s -> س' },
			{ input: 'd',  output: 'ی', description: 'Central Kurdish keyboard based on Persian: d -> ی' },
			{ input: 'f',  output: 'ب', description: 'Central Kurdish keyboard based on Persian: f -> ب' },
			{ input: 'g',  output: 'ل', description: 'Central Kurdish keyboard based on Persian: g -> ل' },
			{ input: 'h',  output: 'ا', description: 'Central Kurdish keyboard based on Persian: h -> ا' },
			{ input: 'j',  output: 'ت', description: 'Central Kurdish keyboard based on Persian: j -> ت' },
			{ input: 'k',  output: 'ن', description: 'Central Kurdish keyboard based on Persian: k -> ن' },
			{ input: 'l',  output: 'م', description: 'Central Kurdish keyboard based on Persian: l -> م' },
			{ input: ';',  output: 'ک', description: 'Central Kurdish keyboard based on Persian: ; -> ک' },
			{ input: '\'',  output: 'گ', description: 'Central Kurdish keyboard based on Persian: \' -> گ' },

			{ input: 'z',  output: 'ڤ', description: 'Central Kurdish keyboard based on Persian: z -> ڤ' },
			{ input: 'x',  output: 'ھ', description: 'Central Kurdish keyboard based on Persian: x -> ھ' },
			{ input: 'c',  output: 'ز', description: 'Central Kurdish keyboard based on Persian: c -> ز' },
			{ input: 'v',  output: 'ر', description: 'Central Kurdish keyboard based on Persian: v -> ر' },
			{ input: 'b',  output: 'ڕ', description: 'Central Kurdish keyboard based on Persian: b -> ڕ' },
			{ input: 'n',  output: 'د', description: 'Central Kurdish keyboard based on Persian: n -> د' },
			{ input: 'm',  output: 'ئ', description: 'Central Kurdish keyboard based on Persian: m -> ئ' },
			{ input: ',',  output: 'و', description: 'Central Kurdish keyboard based on Persian: , -> و' },
			{ input: '.',  output: '.', description: 'Central Kurdish keyboard based on Persian: . -> .' },
			{ input: '/',  output: '/', description: 'Central Kurdish keyboard based on Persian: / -> /' },

			{ input: '%',  output: '٪', description: 'Central Kurdish keyboard based on Persian: % -> ٪' },
			{ input: '(',  output: ')', description: 'Central Kurdish keyboard based on Persian: ( -> )' },
			{ input: ')',  output: '(', description: 'Central Kurdish keyboard based on Persian: ) -> (' },

			{ input: 'Q',  output: 'ض', description: 'Central Kurdish keyboard based on Persian: Q -> ض' },
			{ input: 'W',  output: 'ص', description: 'Central Kurdish keyboard based on Persian: W -> ص' },
			{ input: 'E',  output: 'ث', description: 'Central Kurdish keyboard based on Persian: E -> ث' },
			{ input: 'R',  output: 'ك', description: 'Central Kurdish keyboard based on Persian: R -> ك' },
			{ input: 'T',  output: '،', description: 'Central Kurdish keyboard based on Persian: T -> ،' },
			{ input: 'Y',  output: '؛', description: 'Central Kurdish keyboard based on Persian: Y -> ؛' },
			{ input: 'U',  output: '\\', description: 'Central Kurdish keyboard based on Persian: U -> \\' },
			{ input: 'I',  output: ']', description: 'Central Kurdish keyboard based on Persian: I -> ]' },
			{ input: 'O',  output: '[', description: 'Central Kurdish keyboard based on Persian: O -> [' },
			{ input: 'P',  output: '\'', description: 'Central Kurdish keyboard based on Persian: P -> \'' },
			{ input: '{',  output: '}', description: 'Central Kurdish keyboard based on Persian: { -> }' },
			{ input: '}',  output: '{', description: 'Central Kurdish keyboard based on Persian: } -> {' },

			{ input: 'A',  output: 'ڎ', description: 'Central Kurdish keyboard based on Persian: A -> ڎ' },
			{ input: 'S',  output: 'إ', description: 'Central Kurdish keyboard based on Persian: S -> إ' },
			{ input: 'D',  output: 'ي', description: 'Central Kurdish keyboard based on Persian: D -> ي' },
			{ input: 'F',  output: 'ة', description: 'Central Kurdish keyboard based on Persian: F -> ة' },
			{ input: 'G',  output: 'ۀ', description: 'Central Kurdish keyboard based on Persian: G -> ۀ' },
			{ input: 'H',  output: 'آ', description: 'Central Kurdish keyboard based on Persian: H -> آ' },
			{ input: 'J',  output: 'ـ', description: 'Central Kurdish keyboard based on Persian: J -> ـ' },
			{ input: 'K',  output: '»', description: 'Central Kurdish keyboard based on Persian: K -> »' },
			{ input: 'L',  output: '«', description: 'Central Kurdish keyboard based on Persian: L -> «' },

			{ input: 'Z',  output: 'ظ', description: 'Central Kurdish keyboard based on Persian: Z -> ظ' },
			{ input: 'X',  output: 'ط', description: 'Central Kurdish keyboard based on Persian: X -> ط' },
			{ input: 'C',  output: 'ژ', description: 'Central Kurdish keyboard based on Persian: C -> ژ' },
			{ input: 'V',  output: 'ؤ', description: 'Central Kurdish keyboard based on Persian: V -> ؤ' },
			{ input: 'B',  output: 'ذ', description: 'Central Kurdish keyboard based on Persian: B -> ذ' },
			{ input: 'N',  output: '\u200cأ', description: 'Central Kurdish keyboard based on Persian: N -> \u200cأ' },
			{ input: 'M',  output: 'ء', description: 'Central Kurdish keyboard based on Persian: M -> ء' },
			{ input: '<',  output: '>', description: 'Central Kurdish keyboard based on Persian: < -> >' },
			{ input: '>',  output: '<', description: 'Central Kurdish keyboard based on Persian: > -> <' },
			{ input: '?',  output: '؟', description: 'Central Kurdish keyboard based on Persian: ? -> ؟' }
		],
		inputmethod: 'ckb-transliteration-fakbd'
	},{
		description: 'Central Kurdish keyboard based on Latin keyboard test',
		tests: [
			{ input: '1',  output: '١', description: 'Central Kurdish keyboard based on Latin: 1 -> ١' },
			{ input: '2',  output: '٢', description: 'Central Kurdish keyboard based on Latin: 2 -> ٢' },
			{ input: '3',  output: '٣', description: 'Central Kurdish keyboard based on Latin: 3 -> ٣' },
			{ input: '4',  output: '٤', description: 'Central Kurdish keyboard based on Latin: 4 -> ٤' },
			{ input: '5',  output: '٥', description: 'Central Kurdish keyboard based on Latin: 5 -> ٥' },
			{ input: '6',  output: '٦', description: 'Central Kurdish keyboard based on Latin: 6 -> ٦' },
			{ input: '7',  output: '٧', description: 'Central Kurdish keyboard based on Latin: 7 -> ٧' },
			{ input: '8',  output: '٨', description: 'Central Kurdish keyboard based on Latin: 8 -> ٨' },
			{ input: '9',  output: '٩', description: 'Central Kurdish keyboard based on Latin: 9 -> ٩' },
			{ input: '0',  output: '٠', description: 'Central Kurdish keyboard based on Latin: 0 -> ٠' },

			{ input: 'q',  output: 'ق', description: 'Central Kurdish keyboard based on Latin: q -> ق' },
			{ input: 'w',  output: 'و', description: 'Central Kurdish keyboard based on Latin: w -> و' },
			{ input: 'e',  output: 'ە', description: 'Central Kurdish keyboard based on Latin: e -> ە' },
			{ input: 'r',  output: 'ر', description: 'Central Kurdish keyboard based on Latin: r -> ر' },
			{ input: 't',  output: 'ت', description: 'Central Kurdish keyboard based on Latin: t -> ت' },
			{ input: 'y',  output: 'ی', description: 'Central Kurdish keyboard based on Latin: y -> ی' },
			{ input: 'u',  output: 'ئ', description: 'Central Kurdish keyboard based on Latin: u -> ئ' },
			{ input: 'i',  output: 'ح', description: 'Central Kurdish keyboard based on Latin: i -> ح' },
			{ input: 'o',  output: 'ۆ', description: 'Central Kurdish keyboard based on Latin: o -> ۆ' },
			{ input: 'p',  output: 'پ', description: 'Central Kurdish keyboard based on Latin: p -> پ' },
			{ input: '[',  output: ']', description: 'Central Kurdish keyboard based on Latin: [ -> ]' },
			{ input: ']',  output: '[', description: 'Central Kurdish keyboard based on Latin: ] -> [' },

			{ input: 'a',  output: 'ا', description: 'Central Kurdish keyboard based on Latin: a -> ا' },
			{ input: 's',  output: 'س', description: 'Central Kurdish keyboard based on Latin: s -> س' },
			{ input: 'd',  output: 'د', description: 'Central Kurdish keyboard based on Latin: d -> د' },
			{ input: 'f',  output: 'ف', description: 'Central Kurdish keyboard based on Latin: f -> ف' },
			{ input: 'g',  output: 'گ', description: 'Central Kurdish keyboard based on Latin: g -> گ' },
			{ input: 'h',  output: 'ھ', description: 'Central Kurdish keyboard based on Latin: h -> ھ' },
			{ input: 'j',  output: 'ژ', description: 'Central Kurdish keyboard based on Latin: j -> ژ' },
			{ input: 'k',  output: 'ک', description: 'Central Kurdish keyboard based on Latin: k -> ک' },
			{ input: 'l',  output: 'ل', description: 'Central Kurdish keyboard based on Latin: l -> ل' },
			{ input: ';',  output: '؛', description: 'Central Kurdish keyboard based on Latin: ; -> ؛' },

			{ input: 'z',  output: 'ز', description: 'Central Kurdish keyboard based on Latin: z -> ز' },
			{ input: 'x',  output: 'خ', description: 'Central Kurdish keyboard based on Latin: x -> خ' },
			{ input: 'c',  output: 'ج', description: 'Central Kurdish keyboard based on Latin: c -> ج' },
			{ input: 'v',  output: 'ڤ', description: 'Central Kurdish keyboard based on Latin: v -> ڤ' },
			{ input: 'b',  output: 'ب', description: 'Central Kurdish keyboard based on Latin: b -> ب' },
			{ input: 'n',  output: 'ن', description: 'Central Kurdish keyboard based on Latin: n -> ن' },
			{ input: 'm',  output: 'م', description: 'Central Kurdish keyboard based on Latin: m -> م' },
			{ input: ',',  output: '،', description: 'Central Kurdish keyboard based on Latin: , -> ،' },
			{ input: '.',  output: '.', description: 'Central Kurdish keyboard based on Latin: . -> .' },

			{ input: '%',  output: '٪', description: 'Central Kurdish keyboard based on Latin: % -> ٪' },
			{ input: '(',  output: ')', description: 'Central Kurdish keyboard based on Latin: ( -> )' },
			{ input: ')',  output: '(', description: 'Central Kurdish keyboard based on Latin: ) -> (' },

			{ input: 'Q',  output: 'ڎ', description: 'Central Kurdish keyboard based on Latin: Q -> ڎ' },
			{ input: 'W',  output: 'وو', description: 'Central Kurdish keyboard based on Latin: W -> وو' },
			{ input: 'E',  output: 'ێ', description: 'Central Kurdish keyboard based on Latin: E -> ێ' },
			{ input: 'R',  output: 'ڕ', description: 'Central Kurdish keyboard based on Latin: R -> ڕ' },
			{ input: 'T',  output: 'ط', description: 'Central Kurdish keyboard based on Latin: T -> ط' },
			{ input: 'Y',  output: 'ي', description: 'Central Kurdish keyboard based on Latin: Y -> ي' },
			{ input: 'U',  output: 'ء', description: 'Central Kurdish keyboard based on Latin: U -> ء' },
			{ input: 'I',  output: 'ع', description: 'Central Kurdish keyboard based on Latin: I -> ع' },
			{ input: 'O',  output: 'ؤ', description: 'Central Kurdish keyboard based on Latin: O -> ؤ' },
			{ input: 'P',  output: 'ث', description: 'Central Kurdish keyboard based on Latin: P -> ث' },
			{ input: '{',  output: '}', description: 'Central Kurdish keyboard based on Latin: { -> }' },
			{ input: '}',  output: '{', description: 'Central Kurdish keyboard based on Latin: } -> {' },

			{ input: 'A',  output: 'آ', description: 'Central Kurdish keyboard based on Latin: A -> آ' },
			{ input: 'S',  output: 'ش', description: 'Central Kurdish keyboard based on Latin: S -> ش' },
			{ input: 'D',  output: 'ذ', description: 'Central Kurdish keyboard based on Latin: D -> ذ' },
			{ input: 'F',  output: 'إ', description: 'Central Kurdish keyboard based on Latin: F -> إ' },
			{ input: 'G',  output: 'غ', description: 'Central Kurdish keyboard based on Latin: G -> غ' },
			{ input: 'H',  output: 'ه', description: 'Central Kurdish keyboard based on Latin: H -> ه' },
			{ input: 'J',  output: 'أ', description: 'Central Kurdish keyboard based on Latin: J -> أ' },
			{ input: 'K',  output: 'ك', description: 'Central Kurdish keyboard based on Latin: K -> ك' },
			{ input: 'L',  output: 'ڵ', description: 'Central Kurdish keyboard based on Latin: L -> ڵ' },

			{ input: 'Z',  output: 'ض', description: 'Central Kurdish keyboard based on Latin: Z -> ض' },
			{ input: 'X',  output: 'ص', description: 'Central Kurdish keyboard based on Latin: X -> ص' },
			{ input: 'C',  output: 'چ', description: 'Central Kurdish keyboard based on Latin: C -> چ' },
			{ input: 'V',  output: 'ظ', description: 'Central Kurdish keyboard based on Latin: V -> ظ' },
			{ input: 'B',  output: 'ى', description: 'Central Kurdish keyboard based on Latin: B -> ى' },
			{ input: 'N',  output: 'ة', description: 'Central Kurdish keyboard based on Latin: N -> ة' },
			{ input: 'M',  output: 'ـ', description: 'Central Kurdish keyboard based on Latin: M -> ـ' },
			{ input: '<',  output: '>', description: 'Central Kurdish keyboard based on Latin: < -> >' },
			{ input: '>',  output: '<', description: 'Central Kurdish keyboard based on Latin: > -> <' },
			{ input: '?',  output: '؟', description: 'Central Kurdish keyboard based on Latin: ? -> ؟' }
		],
		inputmethod: 'ckb-transliteration-lakbd'
	},{
		description: 'SIL IPA keyboard test',
		tests: [
			// This test suite follows the layout description document of
			// of SIL's IPA keyboard, including plaing characters like '.' and 'v'.
			// The test names are mostly based on IPA character descriptions.

			// Bilabial consonants
			{ input: 'p',      output: 'p',   description: 'Voiceless bilabial stop' },
			{ input: 'b',      output: 'b',   description: 'Voiced bilabial stop' },
			{ input: 'm',      output: 'm',   description: 'Bilabial nasal' },
			{ input: 'B=',     output: 'ʙ',   description: 'Voiced bilabial trill' },
			{ input: 'f=',     output: 'ɸ',   description: 'Voiceless bilabial fricative' },
			{ input: 'b=',     output: 'β',   description: 'Voiced bilabial fricative' },

			// Labiodental consonants
			{ input: 'm>',     output: 'ɱ',   description: 'Labiodental nasal' },
			{ input: 'v<',     output: 'ⱱ',   description: 'Labiodental flap' },
			{ input: 'f',      output: 'f',   description: 'Voiceless abiodental fricative' },
			{ input: 'v',      output: 'v',   description: 'Voiced labiodental fricative' },
			{ input: 'v=',     output: 'ʋ',   description: 'Labiodental approximant' },

			// Dental consonants
			{ input: 't=',     output: 'θ',   description: 'Voiceless dental fricative' },
			{ input: 'd=',     output: 'ð',   description: 'Voiced dental fricative' },

			// Alveolar consonants
			{ input: 't',      output: 't',   description: 'Voiceless alveolar stop' },
			{ input: 'd',      output: 'd',   description: 'Voiced alveolar stop' },
			{ input: 'n',      output: 'n',   description: 'Alveolar nasal' },
			{ input: 'r',      output: 'r',   description: 'Alveolar trill' },
			{ input: 'r>',     output: 'ɾ',   description: 'Alveolar flap' },
			{ input: 's',      output: 's',   description: 'Voiceless alveolar fricative' },
			{ input: 'z',      output: 'z',   description: 'Voiced alveolar fricative' },
			{ input: 'l=',     output: 'ɬ',   description: 'Voiceless alveolar lateral fricative' },
			{ input: 'l>',     output: 'ɮ',   description: 'Voiced alveolar lateral fricative' },
			{ input: 'r=',     output: 'ɹ',   description: 'Alveolar approximant' },
			{ input: 'l',      output: 'l',   description: 'Alveolar lateral approximant' },

			// Postalveolar consonants
			{ input: 's=',     output: 'ʃ',   description: 'Voiceless postalveolar fricative' },
			{ input: 'z=',     output: 'ʒ',   description: 'Voiced postalveolar fricative' },

			// Retroflex consonants
			{ input: 't<',     output: 'ʈ',   description: 'Voiceless retroflex stop' },
			{ input: 'd<',     output: 'ɖ',   description: 'Voiced retroflex stop' },
			{ input: 'n<',     output: 'ɳ',   description: 'Retroflex nasal' },
			{ input: 'r<',     output: 'ɽ',   description: 'Retroflex flap' },
			{ input: 's<',     output: 'ʂ',   description: 'Voiceless retroflex fricative' },
			{ input: 'z<',     output: 'ʐ',   description: 'Voiced retroflex fricative' },
			{ input: 'R<',     output: 'ɻ',   description: 'Retroflex approximant' },
			{ input: 'l<',     output: 'ɭ',   description: 'Retroflex lateral approximant' },

			// Palatal consonants
			{ input: 'c',      output: 'c',   description: 'Voiceless palatal stop' },
			{ input: 'j=',     output: 'ɟ',   description: 'Voiced palatal stop' },
			{ input: 'n=',     output: 'ɲ',   description: 'Palatal nasal' },
			{ input: 'c=',     output: 'ç',   description: 'Voiceless palatal fricative' },
			{ input: 'j<',     output: 'ʝ',   description: 'Voiced palatal fricative' },
			{ input: 'j',      output: 'j',   description: 'Palatal approximant' },
			{ input: 'L<',     output: 'ʎ',   description: 'Palatal lateral approximant' },

			// Velar consonants
			{ input: 'k',      output: 'k',   description: 'Voiceless velar stop' },
			{ input: 'g<',     output: 'ɡ',   description: 'Voiced velar stop' },
			{ input: 'n>',     output: 'ŋ',   description: 'Velar nasal' },
			{ input: 'x',      output: 'x',   description: 'Voiceless velar fricative' },
			{ input: 'g=',     output: 'ɣ',   description: 'Voiced velar fricative' },
			{ input: 'w>',     output: 'ɰ',   description: 'Velar approximant' },
			{ input: 'L=',     output: 'ʟ',   description: 'Velar lateral approximant' },

			// Uvular consonants
			{ input: 'q',      output: 'q',   description: 'Voiceless uvular stop' },
			{ input: 'G=',     output: 'ɢ',   description: 'Voiced uvular stop' },
			{ input: 'N=',     output: 'ɴ',   description: 'Uvular nasal' },
			{ input: 'R=',     output: 'ʀ',   description: 'Uvular trill' },
			{ input: 'x=',     output: 'χ',   description: 'Voiceless uvular fricative' },
			{ input: 'R>',     output: 'ʁ',   description: 'Voiced uvular fricative' },

			// Pharyngeal consonants
			{ input: 'h>',     output: 'ħ',   description: 'Voiceless pharyngeal fricative' },
			{ input: '?<',     output: 'ʕ',   description: 'Voiced pharyngeal fricative' },

			// Glottal consonants
			{ input: '?=',     output: 'ʔ',   description: 'Glottal stop' },
			{ input: 'h',      output: 'h',   description: 'Voiceless glottal fricative' },
			{ input: 'h<',     output: 'ɦ',   description: 'Voiced glottal fricative' },

			// Clicks
			{ input: 'p=',     output: 'ʘ',   description: 'Bilabial click' },
			{ input: '!<',     output: 'ǀ',   description: 'Dental click' },
			{ input: '!',      output: 'ǃ',   description: 'Postalveolar click (retroflex click character)' },
			{ input: '!=',     output: 'ǂ',   description: 'Palatoalveolar click' },
			{ input: '!>',     output: 'ǁ',   description: 'Alveolar lateral click' },

			// Implosive
			{ input: 'b>',     output: 'ɓ',   description: 'Bilabial voiced implosive' },
			{ input: 'd>',     output: 'ɗ',   description: 'Dental/alveolar voiced implosive' },
			{ input: 'j>',     output: 'ʄ',   description: 'Palatal voiced implosive' },
			{ input: 'g>',     output: 'ɠ',   description: 'Velar voiced implosive' },
			{ input: 'G>',     output: 'ʛ',   description: 'Uvular voiced implosive' },

			// Other symbols
			{ input: 'w=',     output: 'ʍ',   description: 'Voiceless labial-velar fricative' },
			{ input: 'w',      output: 'w',   description: 'Voiced labial-velar approximant' },
			// Two variants
			{ input: 'y<',     output: 'ɥ',   description: 'Voiced labial-palatal approximant (y<)' },
			{ input: 'h=',     output: 'ɥ',   description: 'Voiced labial-palatal approximant (h=)' },
			{ input: 'H=',     output: 'ʜ',   description: 'Voiceless epiglottal fricative' },
			{ input: 'Q<',     output: 'ʢ',   description: 'Voiced epiglottal fricative' },
			{ input: 'Q=',     output: 'ʡ',   description: 'Voiced epiglottal stop' },

			{ input: 'c<',     output: 'ɕ',   description: 'Voiceless alveolo-palatal fricative' },
			{ input: 'z>',     output: 'ʑ',   description: 'Voiced alveolo-palatal fricative' },
			{ input: 'L>',     output: 'ɺ',   description: 'Voiced alveolar lateral flap' },
			{ input: 'H<',     output: 'ɧ',   description: 'Simultaneous ʃ and x' },

			// Front unrounded vowels
			{ input: 'i',      output: 'i',   description: 'Close front unrounded vowel' },
			{ input: 'i=',     output: 'ɪ',   description: 'Near-close near-front unrounded vowel' },
			{ input: 'e',      output: 'e',   description: 'Close-mid front unrounded vowel' },
			{ input: 'e<',     output: 'ɛ',   description: 'Open-mid front unrounded vowel' },
			{ input: 'a<',     output: 'æ',   description: 'Near-open front unrounded vowel' },
			{ input: 'a',      output: 'a',   description: 'Open front unrounded vowel' },

			// Front rounded vowels
			{ input: 'y',      output: 'y',   description: 'Close front rounded vowel' },
			{ input: 'y=',     output: 'ʏ',   description: 'Near-close near-front rounded vowel' },
			{ input: 'o>',     output: 'ø',   description: 'Close-mid front rounded vowel' },
			{ input: 'E<',     output: 'œ',   description: 'Open-mid front rounded vowel' },
			{ input: 'E>',     output: 'ɶ',   description: 'Open front rounded vowel' },

			// Central vowels
			{ input: 'I=',     output: 'ɨ',   description: 'Close central unrounded vowel' },
			{ input: 'E=',     output: 'ɘ',   description: 'Close-mid central unrounded vowel' },
			{ input: 'e=',     output: 'ə',   description: 'Mid-central vowel' },
			{ input: 'e>',     output: 'ɜ',   description: 'Open-mid central unrounded vowel' },
			{ input: 'a>',     output: 'ɐ',   description: 'Near-open central vowel' },
			{ input: 'U=',     output: 'ʉ',   description: 'Close central rounded vowel' },
			{ input: 'O=',     output: 'ɵ',   description: 'Close-mid central rounded vowel' },
			{ input: 'O<',     output: 'ɞ',   description: 'Open-mid central rounded vowel' },

			// Back vowels
			{ input: 'u=',     output: 'ɯ',   description: 'Close back unrounded vowel' },
			{ input: 'O>',     output: 'ɤ',   description: 'Close-mid back unrounded vowel' },
			{ input: 'u>',     output: 'ʌ',   description: 'Open-mid back unrounded vowel' },
			{ input: 'a=',     output: 'ɑ',   description: 'Open back unrounded vowel' },
			{ input: 'u',      output: 'u',   description: 'Close back rounded vowel' },
			{ input: 'u<',     output: 'ʊ',   description: 'Near-close near-back vowel' },
			{ input: 'o',      output: 'o',   description: 'Close-mid back rounded vowel' },
			{ input: 'o<',     output: 'ɔ',   description: 'Open-mid back rounded vowel' },
			{ input: 'o=',     output: 'ɒ',   description: 'Open back rounded vowel' },

			// Suprasegmentals
			{ input: '}',      output: 'ˈ',   description: 'Primary stress' },
			{ input: '}}',     output: 'ˌ',   description: 'Secondary stress' }, // }}
			{ input: ':',      output: 'ː',   description: 'Long' },
			{ input: '::',     output: 'ˑ',   description: 'Half long' },
			{ input: ':::',    output: 'ːː',  description: 'Extra long' }, // Not IPA sanctioned
			// Extra short is tested below with other similar diacritics
			{ input: '.<',     output: '|',   description: 'Minor (foot) group' },
			{ input: '.=',     output: '‖',   description: 'Major (intonation) group' },
			{ input: '.',      output: '.',   description: 'Syllable break' },
			{ input: '#=',     output: '‿',   description: 'Linking (absence of a break)' },

			// Tones
			{ input: '#4',     output: '˥',   description: 'Extra-high tone bar' },
			{ input: '#3',     output: '˦',   description: 'High tone bar' },
			{ input: '#2',     output: '˧',   description: 'Mid tone bar' },
			{ input: '#1',     output: '˨',   description: 'Low tone bar' },
			{ input: '#0',     output: '˩',   description: 'Extra-low tone bar' },
			{ input: 'e@4',    output: 'e̋',   description: 'Extra-high tone diacritic' },
			{ input: 'e@3',    output: 'é',   description: 'High tone diacritic' },
			{ input: 'e@2',    output: 'ē',   description: 'Mid tone diacritic' },
			{ input: 'e@1',    output: 'è',   description: 'Low tone diacritic' },
			{ input: 'e@0',    output: 'ȅ',   description: 'Extra-low tone diacritic' },

			// Tone combinations
			// The following tone bar tests are taken from the layout description.
			// Any combination of three tones is possible.
			{ input: '#04',    output: '˩˥',  description: 'Rising tone bar (04)' },
			{ input: '#40',    output: '˥˩',  description: 'Falling tone bar (40)' },
			{ input: '#24',    output: '˧˥',  description: 'High rising tone bar (24)' },
			{ input: '#12',    output: '˨˧',  description: 'Low rising tone bar (12)' },
			{ input: '#141',   output: '˨˥˨', description: 'Rising-falling tone bar (141)' },

			{ input: 'e@13',   output: 'ě',   description: 'Rising tone diacritic' },
			{ input: 'e@31',   output: 'ê',   description: 'Falling tone diacritic' },
			{ input: 'e@23',   output: 'e᷄',   description: 'High rising tone diacritic' },
			{ input: 'e@12',   output: 'e᷅',   description: 'Low rising tone diacritic' },
			{ input: 'e@131',  output: 'e᷈',   description: 'Rising-falling tone diacritic' },
			{ input: 'e@21',   output: 'e᷆',   description: 'Low falling tone diacritic' }, // Not IPA sanctioned
			{ input: 'e@32',   output: 'e᷇',   description: 'High falling tone diacritic' }, // Not IPA sanctioned
			{ input: 'e@313',  output: 'e᷉',   description: 'Falling-rising tone diacritic' }, // Not IPA sanctioned

			{ input: '#<',     output: 'ꜜ',   description: 'Downstep' },
			{ input: '#>',     output: 'ꜛ',   description: 'Upstep' },
			{ input: '#>>',    output: '↗',   description: 'Global rise' },
			{ input: '#<<',    output: '↘',   description: 'Global fall' },

			// Tone numbers (non-IPA)
			{ input: '^0',     output: '⁰',   description: 'Tone number 0' }, // Not IPA sanctioned
			{ input: '^1',     output: '¹',   description: 'Tone number 1' }, // Not IPA sanctioned
			{ input: '^2',     output: '²',   description: 'Tone number 2' }, // Not IPA sanctioned
			{ input: '^3',     output: '³',   description: 'Tone number 3' }, // Not IPA sanctioned
			{ input: '^4',     output: '⁴',   description: 'Tone number 4' }, // Not IPA sanctioned
			{ input: '^5',     output: '⁵',   description: 'Tone number 5' }, // Not IPA sanctioned
			{ input: '^6',     output: '⁶',   description: 'Tone number 6' }, // Not IPA sanctioned
			{ input: '^7',     output: '⁷',   description: 'Tone number 7' }, // Not IPA sanctioned
			{ input: '^8',     output: '⁸',   description: 'Tone number 8' }, // Not IPA sanctioned
			{ input: '^9',     output: '⁹',   description: 'Tone number 9' }, // Not IPA sanctioned
			{ input: '^-',     output: '⁻',   description: 'Superscript hyphen' }, // Not IPA sanctioned

			// Diacritics and suprasegmentals
			{ input: 'h^',     output: 'ʰ',   description: 'Aspirated' },
			{ input: 'w^',     output: 'ʷ',   description: 'Labialised' },
			{ input: 'j^',     output: 'ʲ',   description: 'Palatalised' },
			{ input: 'g=^',    output: 'ˠ',   description: 'Velarised' },
			{ input: '?<^',    output: 'ˤ',   description: 'Pharyngealised' },
			{ input: 'n^',     output: 'ⁿ',   description: 'Nasal release' }, // "Pre/post nasalised" in the layout document
			{ input: 'l^',     output: 'ˡ',   description: 'Lateral release' },

			// TODO non-IPA superscripts

			{ input: '[[',     output: 'ʽ',   description: 'Light aspiration' }, // Not IPA sanctioned
			{ input: 'e[[[',   output: 'e˞',  description: 'Rhoticity' },
			{ input: 'p]]',    output: 'pʼ',  description: 'Ejective' },
			{ input: 'd]]]',   output: 'd̚',   description: 'No audible release' },
			{ input: ']]]]',   output: '‘',   description: 'Weak aspiration' }, // Not IPA sanctioned
			{ input: 'n$',     output: 'n̩',   description: 'Syllabic' },
			{ input: 'e$$',    output: 'e̯',   description: 'Non-syllabic' },
			{ input: 'a$$$',   output: 'a̰',   description: 'Creaky voiced' },

			// TODO non-IPA retroflex hooks

			{ input: 'n%',     output: 'n̥',   description: 'Voiceless' },
			{ input: 's%%',    output: 's̬',   description: 'Voiced' },
			{ input: 'b%%%',   output: 'b̤',   description: 'Breathy voiced' },

			// TODO non-IPA palatal hooks

			{ input: 'n>@',    output: 'ŋ̊',   description: 'Voiceless with diacritic above' },
			{ input: 't{',     output: 't̪',   description: 'Dental' },
			{ input: 't{{',    output: 't̺',   description: 'Apical' },
			{ input: 't{{{',   output: 't̻',   description: 'Laminal' },
			{ input: 't{{{{',  output: 't̼',   description: 'Linguolabial' },
			{ input: 's{{{{{', output: 'ṣ',   description: 'Closer variety / Fricative' }, // TODO Find out how standard this is
			{ input: 'e~',     output: 'ẽ',   description: 'Nasalised' },
			{ input: 'l~~',    output: 'l̴',   description: 'Velarized or pharyngealized' },
			{ input: 'e*',     output: 'ë',   description: 'Centralised' },
			{ input: 'e**',    output: 'e̽',   description: 'Mid centralised' },
			{ input: 'e***',   output: 'ĕ',   description: 'Extra short' },
			{ input: 'e****',  output: 'ė',   description: 'Palatalization/Centralization' }, // TODO Find out how standard this is
			// TODO Find out what the m with the five asterisks is.

			{ input: 'k#&p',   output: 'k͡p',  description: 'Double articulation above' },
			{ input: 't@&s',   output: 't͜s',  description: 'Double articulation below' },

			{ input: 'u+',     output: 'u̟',   description: 'Advanced' },
			{ input: 'i_',     output: 'i̠',   description: 'Retracted' },
			{ input: 'e++',    output: 'e̝',   description: 'Raised' },
			{ input: 'e__',    output: 'e̞',   description: 'Lowered' },
			{ input: 'e+++',   output: 'e̘',   description: 'Advanced tongue root' },
			{ input: 'e___',   output: 'e̙',   description: 'Retracted tongue root' },
			{ input: 'e++++',  output: 'e̹',   description: 'More rounded' },
			{ input: 'e____',  output: 'e̜',   description: 'Less rounded' },

			// TODO Non-IPA open vowel, fortis and lenis

			// Addition non-IPA characters
			{ input: '=>',     output: '→',   description: 'Is realized as (arrow)' },       // Not IPA sanctioned
			{ input: 's>',     output: 'σ',   description: 'Syllable (sigma)' },             // Not IPA sanctioned
			{ input: '=<',     output: '\u200d', description: 'Combining Grapheme Joiner' }, // Not IPA sanctioned

			{ input: '[}e:i=ja}}fjatl%a}}jE<:ky=tl%]', output: '[ˈeːɪjaˌfjatl̥aˌjœːkʏtl̥]', description: 'Eyjafjallajökull' }
		],
		inputmethod: 'ipa-sil'
	},{
		description: 'X-SAMPA IPA keyboard test',
		tests: [
			// Bilabial consonants
			{ input: 'p',      output: 'p',   description: 'Voiceless bilabial stop' },
			{ input: 'b',      output: 'b',   description: 'Voiced bilabial stop' },
			{ input: 'm',      output: 'm',   description: 'Bilabial nasal' },
			{ input: 'B\\',    output: 'ʙ',   description: 'Voiced bilabial trill' },
			{ input: 'p\\',    output: 'ɸ',   description: 'Voiceless bilabial fricative' },
			{ input: 'B',      output: 'β',   description: 'Voiced bilabial fricative' },

			// Labiodental consonants
			{ input: 'F',      output: 'ɱ',   description: 'Labiodental nasal' },
			// { input: '*',   output: 'ⱱ',   description: 'Labiodental flap' }, // not in X-SAMPA
			{ input: 'f',      output: 'f',   description: 'Voiceless abiodental fricative' },
			{ input: 'v',      output: 'v',   description: 'Voiced labiodental fricative' },
			// Two variants
			{ input: 'P',      output: 'ʋ',   description: 'Labiodental approximant (P)' },
			{ input: 'v\\',    output: 'ʋ',   description: 'Labiodental approximant (v\\)' },

			// Dental consonants
			{ input: 'T',      output: 'θ',   description: 'Voiceless dental fricative' },
			{ input: 'D',      output: 'ð',   description: 'Voiced dental fricative' },

			// Alveolar consonants
			{ input: 't',      output: 't',   description: 'Voiceless alveolar stop' },
			{ input: 'd',      output: 'd',   description: 'Voiced alveolar stop' },
			{ input: 'n',      output: 'n',   description: 'Alveolar nasal' },
			{ input: 'r',      output: 'r',   description: 'Alveolar trill' },
			{ input: '4',      output: 'ɾ',   description: 'Alveolar flap' },
			{ input: 's',      output: 's',   description: 'Voiceless alveolar fricative' },
			{ input: 'z',      output: 'z',   description: 'Voiced alveolar fricative' },
			{ input: 'K',      output: 'ɬ',   description: 'Voiceless alveolar lateral fricative' },
			{ input: 'K\\',    output: 'ɮ',   description: 'Voiced alveolar lateral fricative' },
			{ input: 'r\\',    output: 'ɹ',   description: 'Alveolar approximant' },
			{ input: 'l',      output: 'l',   description: 'Alveolar lateral approximant' },

			// Postalveolar consonants
			{ input: 'S',      output: 'ʃ',   description: 'Voiceless postalveolar fricative' },
			{ input: 'Z',      output: 'ʒ',   description: 'Voiced postalveolar fricative' },

			// Retroflex consonants
			{ input: 't`',     output: 'ʈ',   description: 'Voiceless retroflex stop' },
			{ input: 'd`',     output: 'ɖ',   description: 'Voiced retroflex stop' },
			{ input: 'n`',     output: 'ɳ',   description: 'Retroflex nasal' },
			{ input: 'r`',     output: 'ɽ',   description: 'Retroflex flap' },
			{ input: 's`',     output: 'ʂ',   description: 'Voiceless retroflex fricative' },
			{ input: 'z`',     output: 'ʐ',   description: 'Voiced retroflex fricative' },
			{ input: 'r\\`',   output: 'ɻ',   description: 'Retroflex approximant' },
			{ input: 'l`',     output: 'ɭ',   description: 'Retroflex lateral approximant' },

			// Palatal consonants
			{ input: 'c',      output: 'c',   description: 'Voiceless palatal stop' },
			{ input: 'J\\',    output: 'ɟ',   description: 'Voiced palatal stop' },
			{ input: 'J',      output: 'ɲ',   description: 'Palatal nasal' },
			{ input: 'C',      output: 'ç',   description: 'Voiceless palatal fricative' },
			{ input: 'j\\',    output: 'ʝ',   description: 'Voiced palatal fricative' },
			{ input: 'j',      output: 'j',   description: 'Palatal approximant' },
			{ input: 'L',      output: 'ʎ',   description: 'Palatal lateral approximant' },

			// Velar consonants
			{ input: 'k',      output: 'k',   description: 'Voiceless velar stop' },
			{ input: 'g',      output: 'ɡ',   description: 'Voiced velar stop' },
			{ input: 'N',      output: 'ŋ',   description: 'Velar nasal' },
			{ input: 'x',      output: 'x',   description: 'Voiceless velar fricative' },
			{ input: 'G',      output: 'ɣ',   description: 'Voiced velar fricative' },
			{ input: 'M\\',    output: 'ɰ',   description: 'Velar approximant' },
			{ input: 'L\\',    output: 'ʟ',   description: 'Velar lateral approximant' },

			// Uvular consonants
			{ input: 'q',      output: 'q',   description: 'Voiceless uvular stop' },
			{ input: 'G\\',    output: 'ɢ',   description: 'Voiced uvular stop' },
			{ input: 'N\\',    output: 'ɴ',   description: 'Uvular nasal' },
			{ input: 'R\\',    output: 'ʀ',   description: 'Uvular trill' },
			{ input: 'X',      output: 'χ',   description: 'Voiceless uvular fricative' },
			{ input: 'R',      output: 'ʁ',   description: 'Voiced uvular fricative' },

			// Pharyngeal consonants
			{ input: 'X\\',    output: 'ħ',   description: 'Voiceless pharyngeal fricative' },
			{ input: '?\\',    output: 'ʕ',   description: 'Voiced pharyngeal fricative' },

			// Glottal consonants
			{ input: '?',      output: 'ʔ',   description: 'Glottal stop' },
			{ input: 'h',      output: 'h',   description: 'Voiceless glottal fricative' },
			{ input: 'h\\',    output: 'ɦ',   description: 'Voiced glottal fricative' },

			// Clicks
			{ input: 'O\\',    output: 'ʘ',   description: 'Bilabial click' },
			{ input: '|\\',    output: 'ǀ',   description: 'Dental click' },
			{ input: '!\\',    output: 'ǃ',   description: 'Postalveolar click (retroflex click character)' },
			{ input: '=\\',    output: 'ǂ',   description: 'Palatoalveolar click' },
			{ input: '|\\|\\', output: 'ǁ',   description: 'Alveolar lateral click' },

			// Implosive
			{ input: 'b_<',    output: 'ɓ',   description: 'Bilabial voiced implosive' },
			{ input: 'd_<',    output: 'ɗ',   description: 'Dental/alveolar voiced implosive' },
			{ input: 'J\\_<',  output: 'ʄ',   description: 'Palatal voiced implosive' },
			{ input: 'g_<',    output: 'ɠ',   description: 'Velar voiced implosive' },
			{ input: 'G\\_<',  output: 'ʛ',   description: 'Uvular voiced implosive' },

			// Other symbols
			{ input: 'W',      output: 'ʍ',   description: 'Voiceless labial-velar fricative' },
			{ input: 'w',      output: 'w',   description: 'Voiced labial-velar approximant' },
			{ input: 'H',      output: 'ɥ',   description: 'Voiced labial-palatal approximant (y<)' },
			{ input: 'H\\',    output: 'ʜ',   description: 'Voiceless epiglottal fricative' },
			{ input: '<\\',    output: 'ʢ',   description: 'Voiced epiglottal fricative' },
			{ input: '>\\',    output: 'ʡ',   description: 'Voiced epiglottal stop' },

			{ input: 's\\',    output: 'ɕ',   description: 'Voiceless alveolo-palatal fricative' },
			{ input: 'z\\',    output: 'ʑ',   description: 'Voiced alveolo-palatal fricative' },
			{ input: 'l\\',    output: 'ɺ',   description: 'Voiced alveolar lateral flap' },
			{ input: 'x\\',    output: 'ɧ',   description: 'Simultaneous ʃ and x' },

			// Front unrounded vowels
			{ input: 'i',      output: 'i',   description: 'Close front unrounded vowel' },
			{ input: 'I',      output: 'ɪ',   description: 'Near-close near-front unrounded vowel' },
			{ input: 'e',      output: 'e',   description: 'Close-mid front unrounded vowel' },
			{ input: 'E',      output: 'ɛ',   description: 'Open-mid front unrounded vowel' },
			{ input: '{',      output: 'æ',   description: 'Near-open front unrounded vowel' },
			{ input: 'a',      output: 'a',   description: 'Open front unrounded vowel' },

			// Front rounded vowels
			{ input: 'y',      output: 'y',   description: 'Close front rounded vowel' },
			{ input: 'Y',      output: 'ʏ',   description: 'Near-close near-front rounded vowel' },
			{ input: '2',      output: 'ø',   description: 'Close-mid front rounded vowel' },
			{ input: '9',      output: 'œ',   description: 'Open-mid front rounded vowel' },
			{ input: '&',      output: 'ɶ',   description: 'Open front rounded vowel' },

			// Central vowels
			{ input: '1',      output: 'ɨ',   description: 'Close central unrounded vowel' },
			{ input: '@\\',    output: 'ɘ',   description: 'Close-mid central unrounded vowel' },
			{ input: '@',      output: 'ə',   description: 'Mid-central vowel' },
			{ input: '3',      output: 'ɜ',   description: 'Open-mid central unrounded vowel' },
			{ input: '6',      output: 'ɐ',   description: 'Near-open central vowel' },
			{ input: '}',      output: 'ʉ',   description: 'Close central rounded vowel' },
			{ input: '8',      output: 'ɵ',   description: 'Close-mid central rounded vowel' },
			{ input: '3\\',    output: 'ɞ',   description: 'Open-mid central rounded vowel' },

			// Back vowels
			{ input: 'M',      output: 'ɯ',   description: 'Close back unrounded vowel' },
			{ input: '7',      output: 'ɤ',   description: 'Close-mid back unrounded vowel' },
			{ input: 'V',      output: 'ʌ',   description: 'Open-mid back unrounded vowel' },
			{ input: 'A',      output: 'ɑ',   description: 'Open back unrounded vowel' },
			{ input: 'u',      output: 'u',   description: 'Close back rounded vowel' },
			{ input: 'U',      output: 'ʊ',   description: 'Near-close near-back vowel' },
			{ input: 'o',      output: 'o',   description: 'Close-mid back rounded vowel' },
			{ input: 'O',      output: 'ɔ',   description: 'Open-mid back rounded vowel' },
			{ input: 'Q',      output: 'ɒ',   description: 'Open back rounded vowel' },

			// Suprasegmentals
			{ input: '"',      output: 'ˈ',   description: 'Primary stress' },
			{ input: '%',      output: 'ˌ',   description: 'Secondary stress' }, // }}
			{ input: ':',      output: 'ː',   description: 'Long' },
			{ input: ':\\',    output: 'ˑ',   description: 'Half long' },
			{ input: '|',      output: '|',   description: 'Minor (foot) group' },
			{ input: '||',     output: '‖',   description: 'Major (intonation) group' },
			{ input: '.',      output: '.',   description: 'Syllable break' },
			{ input: '-\\',    output: '‿',   description: 'Linking (absence of a break)' },

			// No full-width tones in X-SAMPA

			{ input: 'e_/',    output: 'ě',   description: 'Rising tone diacritic' },
			{ input: 'e_\\',   output: 'ê',   description: 'Falling tone diacritic' },
			{ input: 'e_H_T',  output: 'e᷄',   description: 'High rising tone diacritic' },
			{ input: 'e_B_L',  output: 'e᷅',   description: 'Low rising tone diacritic' },
			{ input: 'e_R_F',  output: 'e᷈',   description: 'Rising-falling tone diacritic' },

			{ input: '!',      output: 'ꜜ',   description: 'Downstep' },
			{ input: '^',      output: 'ꜛ',   description: 'Upstep' },
			{ input: '<R>',    output: '↗',   description: 'Global rise' },
			{ input: '<F>',    output: '↘',   description: 'Global fall' },

			// Diacritics and suprasegmentals
			{ input: '_h',     output: 'ʰ',   description: 'Aspirated' },
			{ input: '_w',     output: 'ʷ',   description: 'Labialised' },
			{ input: '_j',     output: 'ʲ',   description: 'Palatalised' },
			{ input: '_G',     output: 'ˠ',   description: 'Velarised' },
			{ input: '_?\\',   output: 'ˤ',   description: 'Pharyngealised' },
			{ input: '_n',     output: 'ⁿ',   description: 'Nasal release' },
			{ input: '_l',     output: 'ˡ',   description: 'Lateral release' },

			{ input: 'e`',     output: 'e˞',  description: 'Rhoticity' },
			{ input: 'p_>',    output: 'pʼ',  description: 'Ejective' },
			{ input: 'd_}',    output: 'd̚',   description: 'No audible release' },
			// Two variants
			{ input: 'n=',     output: 'n̩',   description: 'Syllabic =' },
			{ input: 'n_=',    output: 'n̩',   description: 'Syllabic _=' },
			{ input: 'e_^',    output: 'e̯',   description: 'Non-syllabic' },
			{ input: 'a_k',    output: 'a̰',   description: 'Creaky voiced' },

			{ input: 'n_0',    output: 'n̥',   description: 'Voiceless' },
			{ input: 'N_0',    output: 'ŋ̊',   description: 'Voiceless with diacritic above' },
			{ input: 's_v',    output: 's̬',   description: 'Voiced' },
			{ input: 'b_t',    output: 'b̤',   description: 'Breathy voiced' },

			{ input: 't_d',    output: 't̪',   description: 'Dental' },
			{ input: 't_a',    output: 't̺',   description: 'Apical' },
			{ input: 't_m',    output: 't̻',   description: 'Laminal' },
			{ input: 't_N',    output: 't̼',   description: 'Linguolabial' },
			// Two variants
			{ input: 'e~',     output: 'ẽ',   description: 'Nasalised ~' },
			{ input: 'e_~',    output: 'ẽ',   description: 'Nasalised _~' },
			{ input: 'l_e',    output: 'l̴',   description: 'Velarized or pharyngealized' },
			{ input: 'e_"',    output: 'ë',   description: 'Centralised' },
			{ input: 'e_x',    output: 'e̽',   description: 'Mid centralised' },
			{ input: 'e_X',    output: 'ĕ',   description: 'Extra short' },

			{ input: 'u_+',    output: 'u̟',   description: 'Advanced' },
			{ input: 'i_-',    output: 'i̠',   description: 'Retracted' },
			{ input: 'e_r',    output: 'e̝',   description: 'Raised' },
			{ input: 'e_o',    output: 'e̞',   description: 'Lowered' },
			{ input: 'e_A',    output: 'e̘',   description: 'Advanced tongue root' },
			{ input: 'e_q',    output: 'e̙',   description: 'Retracted tongue root' },
			{ input: 'e_O',    output: 'e̹',   description: 'More rounded' },
			{ input: 'e_c',    output: 'e̜',   description: 'Less rounded' },

			{
				input: '["e:Ija%fjatl_0a%j9:kYtl_0]',
				output: '[ˈeːɪjaˌfjatl̥aˌjœːkʏtl̥]',
				description: 'Eyjafjallajökull'
			}
		],
		inputmethod: 'ipa-x-sampa'
	},{
		description: 'Persian Standard keyboard test',
		tests: [
			{ input: '`',  output: '\u200d', description: 'Persian Standard keyboard - ` -> ZWJ' },
			{ input: '1',  output: '۱', description: 'Persian Standard keyboard - 1 -> ۱' },
			{ input: '2',  output: '۲', description: 'Persian Standard keyboard - 2 -> ۲' },
			{ input: '3',  output: '۳', description: 'Persian Standard keyboard - 3 -> ۳' },
			{ input: '4',  output: '۴', description: 'Persian Standard keyboard - 4 -> ۴' },
			{ input: '5',  output: '۵', description: 'Persian Standard keyboard - 5 -> ۵' },
			{ input: '6',  output: '۶', description: 'Persian Standard keyboard - 6 -> ۶' },
			{ input: '7',  output: '۷', description: 'Persian Standard keyboard - 7 -> ۷' },
			{ input: '8',  output: '۸', description: 'Persian Standard keyboard - 8 -> ۸' },
			{ input: '9',  output: '۹', description: 'Persian Standard keyboard - 9 -> ۹' },
			{ input: '0',  output: '۰', description: 'Persian Standard keyboard - 0 -> ۰' },

			{ input: 'q',  output: 'ض', description: 'Persian Standard keyboard - q -> ض' },
			{ input: 'w',  output: 'ص', description: 'Persian Standard keyboard - w -> ص' },
			{ input: 'e',  output: 'ث', description: 'Persian Standard keyboard - e -> ث' },
			{ input: 'r',  output: 'ق', description: 'Persian Standard keyboard - r -> ق' },
			{ input: 't',  output: 'ف', description: 'Persian Standard keyboard - t -> ف' },
			{ input: 'y',  output: 'غ', description: 'Persian Standard keyboard - y -> غ' },
			{ input: 'u',  output: 'ع', description: 'Persian Standard keyboard - u -> ع' },
			{ input: 'i',  output: 'ه', description: 'Persian Standard keyboard - i -> ه' },
			{ input: 'o',  output: 'خ', description: 'Persian Standard keyboard - o -> خ' },
			{ input: 'p',  output: 'ح', description: 'Persian Standard keyboard - p -> ح' },
			{ input: '[',  output: 'ج', description: 'Persian Standard keyboard - [ -> ج' },
			{ input: ']',  output: 'چ', description: 'Persian Standard keyboard - ] -> چ' },

			{ input: 'a',  output: 'ش', description: 'Persian Standard keyboard - a -> ش' },
			{ input: 's',  output: 'س', description: 'Persian Standard keyboard - s -> س' },
			{ input: 'd',  output: 'ی', description: 'Persian Standard keyboard - d -> ی' },
			{ input: 'f',  output: 'ب', description: 'Persian Standard keyboard - f -> ب' },
			{ input: 'g',  output: 'ل', description: 'Persian Standard keyboard - g -> ل' },
			{ input: 'h',  output: 'ا', description: 'Persian Standard keyboard - h -> ا' },
			{ input: 'j',  output: 'ت', description: 'Persian Standard keyboard - j -> ت' },
			{ input: 'k',  output: 'ن', description: 'Persian Standard keyboard - k -> ن' },
			{ input: 'l',  output: 'م', description: 'Persian Standard keyboard - l -> م' },
			{ input: ';',  output: 'ک', description: 'Persian Standard keyboard - ; -> ک' },
			{ input: '\'',  output: 'گ', description: 'Persian Standard keyboard - \' -> گ' },

			{ input: 'z',  output: 'ظ', description: 'Persian Standard keyboard - z -> ظ' },
			{ input: 'x',  output: 'ط', description: 'Persian Standard keyboard - x -> ط' },
			{ input: 'c',  output: 'ز', description: 'Persian Standard keyboard - c -> ز' },
			{ input: 'v',  output: 'ر', description: 'Persian Standard keyboard - v -> ر' },
			{ input: 'b',  output: 'ذ', description: 'Persian Standard keyboard - b -> ذ' },
			{ input: 'n',  output: 'د', description: 'Persian Standard keyboard - n -> د' },
			{ input: 'm',  output: 'پ', description: 'Persian Standard keyboard - m -> پ' },
			{ input: ',',  output: 'و', description: 'Persian Standard keyboard - , -> و' },
			{ input: '.',  output: '.', description: 'Persian Standard keyboard - . -> .' },
			{ input: '/',  output: '/', description: 'Persian Standard keyboard - / -> /' },

			{ input: '~',  output: '÷', description: 'Persian Standard keyboard - ~ -> ÷' },
			{ input: '!',  output: '!', description: 'Persian Standard keyboard - ! -> !' },
			{ input: '@',  output: '٬', description: 'Persian Standard keyboard - @ -> ٬' },
			{ input: '#',  output: '٫', description: 'Persian Standard keyboard - # -> ٫' },
			{ input: '$',  output: '﷼', description: 'Persian Standard keyboard - $ -> ﷼' },
			{ input: '%',  output: '٪', description: 'Persian Standard keyboard - % -> ٪' },
			{ input: '^',  output: '×', description: 'Persian Standard keyboard - ^ -> ×' },
			{ input: '&',  output: '،', description: 'Persian Standard keyboard - & -> ،' },
			{ input: '*',  output: '*', description: 'Persian Standard keyboard - * -> *' },
			{ input: '(',  output: ')', description: 'Persian Standard keyboard - ( -> )' },
			{ input: ')',  output: '(', description: 'Persian Standard keyboard - ) -> (' },
			{ input: '_',  output: 'ـ', description: 'Persian Standard keyboard - _ -> ـ' },

			{ input: 'Q',  output: 'ْ', description: 'Persian Standard keyboard - Q -> ْ_' },
			{ input: 'W',  output: 'ٌ', description: 'Persian Standard keyboard - W -> ٌ_' },
			{ input: 'E',  output: 'ٍ', description: 'Persian Standard keyboard - E -> ٍ_' },
			{ input: 'R',  output: 'ً', description: 'Persian Standard keyboard - R -> ً_' },
			{ input: 'T',  output: 'ُ', description: 'Persian Standard keyboard - T -> ُ_' },
			{ input: 'Y',  output: 'ِ', description: 'Persian Standard keyboard - Y -> ِ_' },
			{ input: 'U',  output: 'َ', description: 'Persian Standard keyboard - U -> َ_' },
			{ input: 'I',  output: 'ّ', description: 'Persian Standard keyboard - I -> ّ_' },
			{ input: 'O',  output: ']', description: 'Persian Standard keyboard - O -> ]' },
			{ input: 'P',  output: '[', description: 'Persian Standard keyboard - P -> [' },
			{ input: '{',  output: '}', description: 'Persian Standard keyboard - { -> }' },
			{ input: '}',  output: '{', description: 'Persian Standard keyboard - } -> {' },

			{ input: 'A',  output: 'ؤ', description: 'Persian Standard keyboard - A -> ؤ' },
			{ input: 'S',  output: 'ئ', description: 'Persian Standard keyboard - S -> ئ' },
			{ input: 'D',  output: 'ي', description: 'Persian Standard keyboard - D -> ي' },
			{ input: 'F',  output: 'إ', description: 'Persian Standard keyboard - F -> إ' },
			{ input: 'G',  output: 'أ', description: 'Persian Standard keyboard - G -> أ' },
			{ input: 'H',  output: 'آ', description: 'Persian Standard keyboard - H -> آ' },
			{ input: 'J',  output: 'ة', description: 'Persian Standard keyboard - J -> ة' },
			{ input: 'K',  output: '»', description: 'Persian Standard keyboard - K -> »' },
			{ input: 'L',  output: '«', description: 'Persian Standard keyboard - L -> «' },
			{ input: ':',  output: ':', description: 'Persian Standard keyboard - : -> :' },
			{ input: '"',  output: '؛', description: 'Persian Standard keyboard - " -> ؛' },

			{ input: 'Z',  output: 'ك', description: 'Persian Standard keyboard - Z -> ك' },
			{ input: 'X',  output: 'ٓ', description: 'Persian Standard keyboard - X -> ٓ_' },
			{ input: 'C',  output: 'ژ', description: 'Persian Standard keyboard - C -> ژ' },
			{ input: 'V',  output: 'ٰ', description: 'Persian Standard keyboard - V -> ٰ_' },
			{ input: 'B',  output: '\u200c', description: 'Persian Standard keyboard - B -> ZWNJ' },
			{ input: 'N',  output: 'ٔ', description: 'Persian Standard keyboard - N -> ٔ_' },
			{ input: 'M',  output: 'ء', description: 'Persian Standard keyboard - M -> ء' },
			{ input: '<',  output: '>', description: 'Persian Standard keyboard - < -> >' },
			{ input: '>',  output: '<', description: 'Persian Standard keyboard - > -> <' },
			{ input: '?',  output: '؟', description: 'Persian Standard keyboard - ? -> ؟' },
			{ input: [ [ '?', false, true ] ], output: '؟', description: 'Persian Standard keyboard with shift key pressed - ? -> ؟' },

			{ input: [ [ '`', true ] ], output: '~', description: 'Persian Standard keyboard - AltGr+` -> ~' },
			{ input: [ [ '1', true ] ], output: '`', description: 'Persian Standard keyboard - AltGr+1 -> `' },
			{ input: [ [ '2', true ] ], output: '@', description: 'Persian Standard keyboard - AltGr+2 -> @' },
			{ input: [ [ '3', true ] ], output: '#', description: 'Persian Standard keyboard - AltGr+3 -> #' },
			{ input: [ [ '4', true ] ], output: '$', description: 'Persian Standard keyboard - AltGr+4 -> $' },
			{ input: [ [ '5', true ] ], output: '%', description: 'Persian Standard keyboard - AltGr+5 -> %' },
			{ input: [ [ '6', true ] ], output: '^', description: 'Persian Standard keyboard - AltGr+6 -> ^' },
			{ input: [ [ '7', true ] ], output: '&', description: 'Persian Standard keyboard - AltGr+7 -> &' },
			{ input: [ [ '8', true ] ], output: '•', description: 'Persian Standard keyboard - AltGr+8 -> •' },
			{ input: [ [ '9', true ] ], output: '\u200e', description: 'Persian Standard keyboard - AltGr+9 -> LRM' },
			{ input: [ [ '0', true ] ], output: '\u200f', description: 'Persian Standard keyboard - AltGr+0 -> RLM' },

			{ input: [ [ 'q', true ] ], output: '°', description: 'Persian Standard keyboard - AltGr+q -> °' },
			{ input: [ [ 'e', true ] ], output: '€', description: 'Persian Standard keyboard - AltGr+e -> €' },
			{ input: [ [ 'i', true ] ], output: '\u202d', description: 'Persian Standard keyboard - AltGr+i -> LRO' },
			{ input: [ [ 'o', true ] ], output: '\u202e', description: 'Persian Standard keyboard - AltGr+o -> RLO' },
			{ input: [ [ 'p', true ] ], output: '\u202c', description: 'Persian Standard keyboard - AltGr+p -> POP' },
			{ input: [ [ '[', true ] ], output: '\u202a', description: 'Persian Standard keyboard - AltGr+[ -> LRE' },
			{ input: [ [ ']', true ] ], output: '\u202b', description: 'Persian Standard keyboard - AltGr+] -> RLE' },

			{ input: [ [ 'd', true ] ], output: 'ى', description: 'Persian Standard keyboard - AltGr+d -> ى' },
			{ input: [ [ 'h', true ] ], output: 'ٱ', description: 'Persian Standard keyboard - AltGr+h -> ٱ' },
			{ input: [ [ 'k', true ] ], output: '﴾', description: 'Persian Standard keyboard - AltGr+k -> ﴾' },
			{ input: [ [ 'l', true ] ], output: '﴿', description: 'Persian Standard keyboard - AltGr+l -> ﴿' },
			{ input: [ [ ';', true ] ], output: ';', description: 'Persian Standard keyboard - AltGr+; -> ;' },
			{ input: [ [ '\'', true ] ], output: '"', description: 'Persian Standard keyboard - AltGr+\' -> "' },

			{ input: [ [ 'b', true ] ], output: '\u200d', description: 'Persian Standard keyboard - AltGr+b -> ZWJ' },
			{ input: [ [ 'n', true ] ], output: 'ٕ', description: 'Persian Standard keyboard - AltGr+n -> ٕ_' },
			{ input: [ [ 'm', true ] ], output: '…', description: 'Persian Standard keyboard - AltGr+m -> …' },
			{ input: [ [ ',', true ] ], output: ',', description: 'Persian Standard keyboard - AltGr+, -> ,' },
			{ input: [ [ '.', true ] ], output: '\'', description: 'Persian Standard keyboard - AltGr+. -> \'' },
			{ input: [ [ '/', true ] ], output: '?', description: 'Persian Standard keyboard - AltGr+/ -> ?' },
			{ input: 'thvsd advdk hsj', output: 'فارسی شیرین است', description: 'Persian Standard keyboard - text test' },

			{ input: [ [ ' ', true ] ], output: '\xa0', description: 'Persian Standard keyboard - AltGr+Space -> NBSP' },
			{ input: [ [ ' ', false, true ] ], output: '\u200c', description: 'Persian Standard keyboard - Shift space is ZWNJ' }
		],
		inputmethod: 'fa-kbd'
	},{
		description: 'Fula Alt input method test',
		tests: [
			{ input: [ [ 'b', true ] ], output: 'ɓ', description: 'Fula ɓ' },
			{ input: [ [ 'B', true ] ], output: 'Ɓ', description: 'Fula Ɓ' },
			{ input: [ [ 'd', true ] ], output: 'ɗ', description: 'Fula ɗ' },
			{ input: [ [ 'D', true ] ], output: 'Ɗ', description: 'Fula Ɗ' },
			{ input: [ [ 'g', true ] ], output: 'ɠ', description: 'Fula ɠ' },
			{ input: [ [ 'G', true ] ], output: 'Ɠ', description: 'Fula Ɠ' },
			{ input: [ [ 'j', true ] ], output: 'ɲ', description: 'Fula ɲ' },
			{ input: [ [ 'J', true ] ], output: 'Ɲ', description: 'Fula Ɲ' },
			{ input: [ [ 'n', true ] ], output: 'ŋ', description: 'Fula ŋ' },
			{ input: [ [ 'N', true ] ], output: 'Ŋ', description: 'Fula Ŋ' },
			{ input: [ [ 'y', true ] ], output: 'ƴ', description: 'Fula ƴ' },
			{ input: [ [ 'Y', true ] ], output: 'Ƴ', description: 'Fula Ƴ' },
			{ input: 'b', output: 'b', description: 'Fula b' },
			{ input: 'B', output: 'B', description: 'Fula B' },
			{ input: 'd', output: 'd', description: 'Fula d' },
			{ input: 'D', output: 'D', description: 'Fula D' },
			{ input: 'g', output: 'g', description: 'Fula g' },
			{ input: 'G', output: 'G', description: 'Fula G' },
			{ input: 'n', output: 'n', description: 'Fula n' },
			{ input: 'N', output: 'N', description: 'Fula N' },
			{ input: 'j', output: 'j', description: 'Fula j' },
			{ input: 'J', output: 'J', description: 'Fula J' },
			{ input: 'y', output: 'y', description: 'Fula y' },
			{ input: 'Y', output: 'Y', description: 'Fula Y' },
			{ input: 'N~', output: 'Ñ', description: 'Fula Ñ' },
			{ input: 'n~', output: 'ñ', description: 'Fula ñ' },
			{ input: 'N~~', output: 'N~', description: 'Fula N~' },
			{ input: 'n~~', output: 'n~', description: 'Fula n~' }
		],
		inputmethod: 'ff-alt'
	},{
		description: 'Venetian vec-GVU input method test',
		tests: [
			{ input: 'dh', output: 'đ', description: 'Venetian đ' },
			{ input: 'lh', output: 'ƚ', description: 'Venetian ƚ' },
			{ input: 'òò', output: 'ó', description: 'Venetian ó' },
			{ input: 'zh', output: 'ẑ', description: 'Venetian ẑ' },
			{ input: 'đh', output: 'dh', description: 'Venetian dh' },
			{ input: 'ƚh', output: 'lh', description: 'Venetian lh' },
			{ input: 'ẑh', output: 'zh', description: 'Venetian zh' },
			{ input: 'Dh', output: 'Đ', description: 'Venetian Đ' },
			{ input: 'Lh', output: 'Ƚ', description: 'Venetian Ƚ' },
			{ input: 'Òò', output: 'Ó', description: 'Venetian Ó' },
			{ input: 'Zh', output: 'Ẑ', description: 'Venetian Ẑ' },
			{ input: 'Đh', output: 'Dh', description: 'Venetian Dh' },
			{ input: 'Ƚh', output: 'Lh', description: 'Venetian Lh' },
			{ input: 'Ẑh', output: 'Zh', description: 'Venetian Zh' }
		],
		inputmethod: 'vec-GVU'
	},{
		description: 'Wolof Alt input method test',
		tests: [
			{
				input: [
					[ 'A', false ],
					[ '\\', true ]
				],
				output: 'À',
				description: 'Wolof À'
			},
			{
				input: [
					[ 'a', false ],
					[ '/', true ]
				],
				output: 'á',
				description: 'Wolof á'
			},
			{ input: [ [ 'e', true ] ], output: 'ë', description: 'Wolof ë' },
			{ input: [ [ 'E', true ] ], output: 'Ë', description: 'Wolof Ë' },
			{ input: [ [ 'n', true ] ], output: 'ŋ', description: 'Wolof ŋ' },
			{ input: [ [ 'N', true ] ], output: 'Ŋ', description: 'Wolof Ŋ' },
			{ input: 'e', output: 'e', description: 'Wolof e' },
			{ input: 'E', output: 'E', description: 'Wolof E' },
			{ input: 'n', output: 'n', description: 'Wolof n' },
			{ input: 'N', output: 'N', description: 'Wolof N' },
			{ input: 'N~', output: 'Ñ', description: 'Wolof Ñ' },
			{ input: 'n~', output: 'ñ', description: 'Wolof ñ' },
			{ input: 'N~~', output: 'N~', description: 'Wolof N~' },
			{ input: 'n~~', output: 'n~', description: 'Wolof n~' }
		],
		inputmethod: 'wo-alt'
	},{
		description: 'Yoruba yo-alt input method test',
		tests: [
			{
				input: [
					[ 'a', false ],
					[ '\\', true ]
				], output: 'à', description: 'Yoruba à'
			},
			{
				input: [
					[ 'a', false ],
					[ '/', true ]
				], output: 'á', description: 'Yoruba á'
			},
			{
				input: [
					[ 'e', false ],
					[ '\\', true ]
				], output: 'è', description: 'Yoruba è'
			},
			{
				input: [
					[ 'e', false ],
					[ '/', true ]
				], output: 'é', description: 'Yoruba é'
			},
			{
				input: [
					[ 'e', false ],
					[ '.', true ]
				], output: 'ẹ', description: 'Yoruba ẹ'
			},
			{
				input: [
					[ 'e', false ],
					[ '.', true ],
					[ '\\', true ]
				], output: 'ẹ̀', description: 'Yoruba ẹ̀'
			},
			{
				input: [
					[ 'e', false ],
					[ '.', true ],
					[ '/', true ]
				], output: 'ẹ́', description: 'Yoruba ẹ́'
			},
			{
				input: [
					[ 'i', false ],
					[ '\\', true ]
				], output: 'ì', description: 'Yoruba ì'
			},
			{
				input: [
					[ 'i', false ],
					[ '/', true ]
				], output: 'í', description: 'Yoruba í'
			},
			{
				input: [
					[ 'o', false ],
					[ '\\', true ]
				], output: 'ò', description: 'Yoruba ò'
			},
			{
				input: [
					[ 'o', false ],
					[ '/', true ]
				], output: 'ó', description: 'Yoruba ó'
			},
			{
				input: [
					[ 'o', false ],
					[ '.', true ]
				], output: 'ọ', description: 'Yoruba ọ'
			},
			{
				input: [
					[ 'o', false ],
					[ '.', true ],
					[ '\\', true ]
				], output: 'ọ̀', description: 'Yoruba ọ̀'
			},
			{
				input: [
					[ 'o', false ],
					[ '.', true ],
					[ '/', true ]
				], output: 'ọ́', description: 'Yoruba ọ́'
			},
			{
				input: [
					[ 'u', false ],
					[ '\\', true ]
				], output: 'ù', description: 'Yoruba ù'
			},
			{
				input: [
					[ 'u', false ],
					[ '/', true ]
				], output: 'ú', description: 'Yoruba ú'
			}
		],
		inputmethod: 'yo-alt'
	},{
		description: 'Yoruba tilde test',
		tests: [
			{ input: '~E', output: 'Ẹ', description: 'Yoruba tilde ~E -> Ẹ' },
			{ input: '~e', output: 'ẹ', description: 'Yoruba tilde ~e -> ẹ' },
			{ input: '~O', output: 'Ọ', description: 'Yoruba tilde ~O -> Ọ' },
			{ input: '~o', output: 'ọ', description: 'Yoruba tilde ~o -> ọ' },
			{ input: '~S', output: 'Ṣ', description: 'Yoruba tilde ~S -> Ṣ' },
			{ input: '~s', output: 'ṣ', description: 'Yoruba tilde ~s -> ṣ' },
			{ input: '~e~-', output: 'ẹ̄', description: 'Yoruba tilde ~e~- -> ẹ̄' },
			{ input: '~E~\\', output: 'Ẹ̀', description: 'Yoruba tilde ~E~\ -> Ẹ̀' },
			{ input: '~e~/', output: 'ẹ́', description: 'Yoruba tilde ~e~/ -> ẹ́' },
			{ input: '~O~^', output: 'Ộ', description: 'Yoruba tilde ~O~^ -> Ộ' },
			{ input: '~o~v', output: 'ọ̌', description: 'Yoruba tilde ~o~v -> ọ̌' }
		],
		inputmethod: 'yo-tilde'
	},{
		description: 'Santali Inscript2 test',
		tests: [
			{ input: 'e', output: 'ᱟ', description: 'Santali k -> ᱟ' },
			{ input: 'y', output: 'ᱵ', description: 'Santali y -> ᱵ' },
			{ input: 'U', output: 'ᱝ', description: 'Santali U -> ᱝ' },
			{ input: 'u', output: 'ᱦ', description: 'Santali u -> ᱦ' },
			{ input: 'C', output: 'ᱬ', description: 'Santali C -> ᱬ' },
			{ input: 'c', output: 'ᱢ', description: 'Santali c -> ᱢ' },
			{ input: 'B', output: 'ᱶ', description: 'Santali B -> ᱶ' }
		],
		inputmethod: 'sat-inscript2-ol-chiki'
	},
	{
		description: 'Santali Sarjom Baha test',
		tests: [
			{ input: 'a', output: 'ᱟ', description: 'Santali a -> ᱟ' },
			{ input: 'b', output: 'ᱵ', description: 'Santali b -> ᱵ' },
			{ input: 'P', output: 'ᱯ', description: 'Santali P -> ᱯ' },
			{ input: 'Q', output: 'ᱻ', description: 'Santali Q -> ᱻ' },
			{ input: 'W', output: 'ᱣ', description: 'Santali W -> ᱣ' },
			{ input: 'c', output: 'ᱪ', description: 'Santali c -> ᱪ' }
		],
		inputmethod: 'sat-sarjom-baha'
	},
	{
		description: 'Khmer NiDA standard Unicode keyboard test',
		inputmethod: 'km-nidakyk',
		tests: [
			{ input: 'xjmEr', output: 'ខ្មែរ', description: 'Khmer: xjmEr -> ខ្មែរ' },
			{ input: 'q', output: 'ឆ', description: 'Consonant: q -> ឆ' },
			{ input: 'JjG', output: 'ញ្អ', description: 'Consonant subscript: JjG -> ញ្អ' },

			// test common combinations
			{ input: 'GA', output: 'អាំ', description: 'combination (A): GA -> អាំ' },
			{ input: 'GaM', output: 'អាំ', description: 'combination (am as A): GaM -> អាំ' },
			{ input: 'GMa', output: 'អាំ', description: 'normalization (Ma to aM): GMa -> អាំ' },
			{ input: 'GV', output: 'អេះ', description: 'combination (V): GV -> អេះ' },
			{ input: 'GeH', output: 'អេះ', description: 'combination (eH as V): GeH -> អេះ' },
			{ input: 'GHe', output: 'អេះ', description: 'normalization (He to eH): GHe -> អេះ' },
			{ input: 'G,', output: 'អុំ', description: 'combination (,): G, -> អុំ' },
			{ input: 'GuM', output: 'អុំ', description: 'combination (uH as ,): GeH -> អុំ' },
			{ input: 'GMu', output: 'អុំ', description: 'normalization (Mu to uM): GMu -> អុំ' },
			{ input: 'G:', output: 'អោះ', description: 'combination (:): G: -> អោះ' },
			{ input: 'GoH', output: 'អោះ', description: 'combination (oH as :): GoH -> អោះ' },
			{ input: 'GHo', output: 'អោះ', description: 'normalization (Ho to oH): GHo -> អោះ' },
			{ input: 'G<', output: 'អុះ', description: 'combination (<): G< -> អុះ' },
			{ input: 'GuH', output: 'អុះ', description: 'combination (uH as <): GeH -> អុះ' },
			{ input: 'GHu', output: 'អុះ', description: 'normalization (Hu to uH): GHu -> អុះ' },

			// test normalization for consonant shifters
			// { input: 'Gjn/', output: 'អ៊្ន', description: 'normalization (consonant shifter): Gjn/ -> អ៊្ន' },
			// { input: 'Gjrjn/', output: 'អ៊្រ្ន', description: 'normalization (consonant shifter): Gjrjn/ -> អ៊្រ្ន' },

			// test corrections
			{ input: 'Gea', output: 'អោ', description: 'correction (ea to o): Gea -> អោ' },
			{ input: 'Gae', output: 'អោ', description: 'correction (ae to o): Gae -> អោ' },
			{ input: 'GeI', output: 'អើ', description: 'correction (eI to :): GeI -> អើ' },
			{ input: 'GIe', output: 'អើ', description: 'correction (Ie to :): GIe -> អើ' },

			// test AltGr
			{ input: [ [ 'e', true/*AltGr*/ ] ], output: 'ឯ', description: 'AltGr: AltGr-e -> ឯ' },
			{ input: [ [ '2', true ] ], output: '@', description: 'AltGr: AltGr-2 -> @' },
			{ input: [ 'G', [ '3', true ] ], output: 'អ៑', description: 'AltGr: G AltGr-3 -> អ៑' },
			{ input: [ [ 'Q', true ] ], output: '᧠', description: 'AltGr-Shift: AltGr-Shift-q -> ᧠' },
			{ input: [ [ '%', true ] ], output: '៵', description: 'AltGr-Shift: AltGr-Shift-5 -> ៵' },
			{ input: [ [ '>', true ] ], output: '᧿', description: 'AltGr-Shift: AltGr-Shift-. -> ᧿' },

			// test special characters
			// !
			{ input: '!', output: '!', description: 'special: ! -> !' },
			{ input: [ [ '!', true ] ], output: '៱', description: 'special: AltGr-! -> ៱' },
			// $
			{ input: '$', output: '៛', description: 'special: $ -> ៛' },
			{ input: [ [ '$', true ] ], output: '៴', description: 'special: AltGr-$ -> ៴' },
			// ^
			{ input: 'G^', output: 'អ៍', description: 'special: G^ -> អ៍' },
			{ input: [ [ '^', true ] ], output: '៶', description: 'special: AltGr-^ -> ៶' },
			// &
			{ input: 'G&', output: 'អ័', description: 'special: G& -> អ័' },
			{ input: [ [ '&', true ] ], output: '៷', description: 'special: AltGr-& -> ៷' },
			// *
			{ input: 'G*', output: 'អ៏', description: 'special: G* -> អ៏' },
			{ input: [ [ '*', true ] ], output: '៸', description: 'special: AltGr-* -> ៸' },
			// (
			{ input: '(', output: '(', description: 'special: ( -> (' },
			{ input: [ [ '(', true ] ], output: '៹', description: 'special: AltGr-( -> ៹' },
			// )
			{ input: ')', output: ')', description: 'special: ) -> )' },
			{ input: [ [ ')', true ] ], output: '៰', description: 'special: AltGr-) -> ៰' },
			// -
			{ input: '-', output: 'ឥ', description: 'special: - -> ឥ' },
			{ input: [ [ '-', true ] ], output: 'x', description: 'special: AltGr-- -> x' },
			// =
			{ input: '=', output: 'ឲ', description: 'special: = -> ឲ' },
			{ input: [ 'G', [ '=', true ] ], output: 'អ៎', description: 'special: G AltGr-= H -> អ៎' },
			// +
			{ input: '+', output: '=', description: 'special: + -> =' },
			// backslash
			{ input: '\\', output: 'ឮ', description: 'special: \\ -> ឮ' },
			{ input: [ [ '\\', true ] ], output: '\\', description: 'special: AltGr-\\ -> \\' },
			// |
			{ input: '|', output: 'ឭ', description: 'special: | -> ឭ' },
			// [
			{ input: 'G[', output: 'អៀ', description: 'special: G[ -> អៀ' },
			{ input: [ [ '[ ', true ] ], output: 'ឩ', description: 'special: AltGr-[ -> ឩ' },
			// {
			{ input: 'G{', output: 'អឿ', description: 'special: G{ -> អឿ' },
			{ input: [ [ '{', true ] ], output: '᧪', description: 'special: AltGr-{ -> ᧪' },
			// ]
			{ input: ']', output: 'ឪ', description: 'special: ] -> ឪ' },
			{ input: [ [ ']', true ] ], output: 'ឳ', description: 'special: AltGr-] -> ឳ' },
			// }
			{ input: '}', output: 'ឧ', description: 'special: } -> ឧ' },
			{ input: [ [ '}', true ] ], output: '᧫', description: 'special: AltGr-} -> ᧫' },
			// ;
			{ input: 'G;', output: 'អើ', description: 'special: G; -> អើ' },
			{ input: [ [ ';', true ] ], output: '៖', description: 'special: AltGr-; -> ៖' },
			// :
			{ input: 'G:', output: 'អោះ', description: 'special: G: -> អោះ' },
			{ input: [ [ ':', true ] ], output: '᧵', description: 'special: AltGr-: -> ᧵' },
			// '
			{ input: 'G\'', output: 'អ់', description: 'special: G\' -> អ់' },
			{ input: [ 'G', [ '\'', true ] ], output: 'អៈ', description: 'special: G AltGr-: -> អៈ' },
			// "
			{ input: 'G\"', output: 'អ៉', description: 'special: G\" -> អ៉' },
			{ input: [ [ '\"', true ] ], output: '᧶', description: 'special: AltGr-\" -> ᧶' },
			// ,
			{ input: 'G,', output: 'អុំ', description: 'special: G, -> អុំ' },
			{ input: [ [ ',', true ] ], output: ',', description: 'special: AltGr-, -> ,' },
			// <
			{ input: 'G<', output: 'អុះ', description: 'special: G< -> អុះ' },
			{ input: [ [ '<', true ] ], output: '᧾', description: 'special: AltGr-< -> ᧾' },
			// .
			{ input: '.', output: '។', description: 'special: . -> ។' },
			{ input: [ [ '.', true ] ], output: '.', description: 'special: AltGr-. -> .' },
			// >
			{ input: '>', output: '៕', description: 'special: > -> ៕' },
			{ input: [ [ '>', true ] ], output: '᧿', description: 'special: AltGr-> -> ᧿' },
			// /
			{ input: 'G/', output: 'អ៊', description: 'special: G/ -> អ៊' },
			{ input: [ [ '/', true ] ], output: '/', description: 'special: AltGr-/ -> /' },
			// ?
			{ input: '?', output: '?', description: 'special: ? -> ?' },

			// tests from How_to_type_Khmer_Unicode_ver1_1km.pdf (NiDA)
			{ input: 'li', output: 'លិ', description: 'NiDA: li -> លិ' },
			{ input: 'Ke', output: 'គេ', description: 'NiDA: li -> គេ' },
			{ input: 'nO', output: 'នៅ', description: 'NiDA: nO -> នៅ' },
			{ input: 'l;', output: 'លើ', description: 'NiDA: l; -> លើ' },
			{ input: 'ctjt', output: 'ចត្ត', description: 'NiDA: ctjt -> ចត្ត' },
			{ input: 'sjrI', output: 'ស្រី', description: 'NiDA: sjrI -> ស្រី' },
			{ input: 'sjrE', output: 'ស្រែ', description: 'NiDA: sjrE -> ស្រែ' },
			{ input: 'sjtjrI', output: 'ស្ត្រី', description: 'NiDA: sjtjrI -> ស្ត្រី' },
			{ input: 'TaJ', output: 'ទាញ', description: 'NiDA: TaJ -> ទាញ' },
			{ input: 'sJjJa', output: 'សញ្ញា', description: 'NiDA: sJjJa -> សញ្ញា' },
			{ input: 'xjJ,', output: 'ខ្ញុំ', description: 'NiDA: xjJ, -> ខ្ញុំ' },
			{ input: 'bJjceJ', output: 'បញ្ចេញ', description: 'NiDA: bJjceJ -> បញ្ចេញ' },
			{ input: 'kEH', output: 'កែះ', description: 'NiDA: kEH -> កែះ' },
			{ input: 'y"ak', output: 'យ៉ាក', description: 'NiDA: y"ak -> យ៉ាក' },
			{ input: 'b"egb":', output: 'ប៉េងប៉ោះ', description: 'NiDA: b"egb": -> ប៉េងប៉ោះ' },
			{ input: 'kjrumh/un', output: 'ក្រុមហ៊ុន', description: 'NiDA: kjrumh/un -> ក្រុមហ៊ុន' },
			{ input: 'b/ut', output: 'ប៊ុត', description: 'NiDA: b/ut -> ប៊ុត' },
			{ input: 'sjr/ub', output: 'ស្រ៊ុប', description: 'NiDA: sjr/ub -> ស្រ៊ុប' },
			// { input: 's/jrub', output: 'ស៊្រុប', description: 'NiDA (Unicode 3.0 -> 4.0): s/jrub -> ស៊្រុប' },
			{ input: 's/jrub', output: 'ស៊្រុប', description: 'NiDA (Unicode 4.0): s/jrub -> ស៊្រុប' },
			{ input: 'mjh/Et', output: 'ម្ហ៊ែត', description: 'NiDA: mjh/Et -> ម្ហ៊ែត' },
			// { input: 'mjh/Et', output: 'ម៊្ហែត', description: 'NiDA (Unicode 3.0 -> 4.0): mjh/Et -> ម៊្ហែត' },
			{ input: 'm/jhEt', output: 'ម៊្ហែត', description: 'NiDA (Unicode 4.0): m/jhEt -> ម៊្ហែត' },
			{ input: 's/', output: 'ស៊', description: 'NiDA: s/ -> ស៊' },
			{ input: 's/I', output: 'ស៊ី', description: 'NiDA: s/I -> ស៊ី' },
			{ input: 'b"I', output: 'ប៉ី', description: 'NiDA: b"I -> ប៉ី' },
			{ input: 'bnjs/I', output: 'បន្ស៊ី', description: 'NiDA: bnjs/I -> បន្ស៊ី' },
			// { input: 'bnjs/I', output: 'បន៊្សី', description: 'NiDA (Unicode 3.0 -> 4.0): bnjs/I -> បន៊្សី' },
			{ input: 'bn/jsI', output: 'បន៊្សី', description: 'NiDA (Unicode 4.0): bn/js/I -> បន៊្សី' },
			{ input: 'G/M', output: 'អ៊ំ', description: 'NiDA: G/M -> អ៊ំ' },
			{ input: 'b/ik', output: 'ប៊ិក', description: 'NiDA: b/ik -> ប៊ិក' },

			// with some fonts it may looks like អ្ហុិះ (GjhuiH) instead
			{ input: 'Gjh/iH', output: 'អ្ហ៊ិះ', description: 'NiDA: Gjh/iH -> អ្ហ៊ិះ' },
			// { input: 'Gjh/iH', output: 'អ៊្ហិះ', description: 'NiDA (Unicode 3.0 -> 4.0): Gjh/iH -> អ៊្ហិះ' },
			{ input: 'G/jhiH', output: 'អ៊្ហិះ', description: 'NiDA (Unicode 4.0): G/jhiH -> អ៊្ហិះ' },

			{ input: 'BN_', output: 'ពណ៌', description: 'NiDA: BN_ -> ពណ៌' },
			{ input: [ 's', 'K', '_', [ '\'', true ] ], output: 'សគ៌ៈ', description: 'NiDA: sK_ AltGr-\' -> សគ៌ៈ' },
			{ input: 'kb_Ur', output: 'កប៌ូរ', description: 'NiDA: kb_Ur -> កប៌ូរ' },
			{ input: 'kab_as', output: 'កាប៌ាស', description: 'NiDA: kab_as -> កាប៌ាស' },
			{ input: 'sB_eCjJ', output: 'សព៌េជ្ញ', description: 'NiDA: sB_eCjJ -> សព៌េជ្ញ' },
			{ input: 'lk\'', output: 'លក់', description: 'NiDA: lk\' -> លក់' },
			{ input: 'TMB&r', output: 'ទំព័រ', description: 'NiDA: TMB&r -> ទំព័រ' },
			{ input: [ 'N', [ '=', true ], 'H' ], output: 'ណ៎ះ', description: 'NiDA: N AltGr-= H -> ណ៎ះ' },
			{ input: [ 'n', 'u', [ '=', true ], 'H' ], output: 'នុ៎ះ', description: 'NiDA: nu AltGr-= H -> នុ៎ះ' },
			{ input: [ 'G', 'I', [ '=', true ], 'H' ], output: 'អី៎ះ', description: 'NiDA: GI AltGr-= H -> អី៎ះ' },
			{ input: 'kEH', output: 'កែះ', description: 'NiDA: kEH -> កែះ' },

			{ input: ' ', output: '\u200b', description: 'NiDA: SP -> ZWSP' },
			{ input: [ [ ' ', false/*AltGr*/, true/*Shift*/ ] ], output: ' ', description: 'NiDA: Shift-SP -> SP' },
			{ input: [ [ ' ', true ] ], output: '\u00a0', description: 'NiDA: AltGr-SP -> NBSP' },

			// test (non-)joiners, from Unicode 8.0 chapter 16
			{ input: [ 'b', [ '1', true ], '/', 'I', 'y', 'E', 'r' ], output: 'ប‌៊ីយែរ', description: 'ZWNJ (beer): b AltGr-1 /IyEr -> ប‌៊ីយែរ' },
			{ input: [ 'b', 'j', 'r', 't', 'W', 'g', 'G', [ '1', true ], '/', 'w', 'H' ], output: 'ប្រតឺងអ‌៊ឹះ', description: 'ZWNJ (urgent, too busy): bjrtWgG AltGr-1 /wH -> ប្រតឺងអ‌៊ឹះ' },
			// these two should looks different with a Moul font
			{ input: [ 'v', [ '1', true ], 'i', 'T', 'U' ], output: 'វ‌ិទូ', description: 'ZWNJ (savant): v AltGr-1 iTU -> វ‌ិទូ' },
			{ input: [ 'v', [ '`', true ], 'i', 'T', 'U' ], output: 'វ‍ិទូ', description: 'ZWJ (savant): v AltGr-` iTU -> វ‍ិទូ' }
		]
	},
	{
		description: 'Fon tilde test',
		tests: [
			{ input: '~D', output: 'Ɖ', description: 'fon ~D -> Ɖ' },
			{ input: '~d', output: 'ɖ', description: 'fon ~d -> ɖ' },
			{ input: '~E', output: 'Ɛ', description: 'fon ~E -> Ɛ' },
			{ input: '~e', output: 'ɛ', description: 'fon ~e -> ɛ' },
			{ input: '~O', output: 'Ɔ', description: 'fon ~O -> Ɔ' },
			{ input: '~o~\\', output: 'ɔ̀', description: 'fon ~o~\\ -> ɔ̀' },
			{ input: '~e~/', output: 'ɛ́', description: 'fon ~e~/ -> ɛ́' },
			{ input: 'i~v', output: 'ǐ', description: 'fon i~v -> ǐ' },
			{ input: 'u~-', output: 'ū', description: 'fon u~- -> ū' },
			{ input: 'o~^', output: 'ô', description: 'fon o~^ -> ô' }
		],
		inputmethod: 'fon-tilde'
	}
];
