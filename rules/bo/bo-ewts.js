(function ( $ ) {
   'use strict';
   var patterns = [
      // ambiguous cases with b as prefix
      ['བྲk', 'r', 'བརྐ'],
      ['བྲg', 'r', 'བརྒ'],
      ['བྲl', 'r', 'བརླ'],
      ['བྲj', 'r', 'བརྗ'],
      ['བྲt', 'r', 'བརྟ'],
      ['བྲd', 'r', 'བརྡ'],
      ['བྲn', 'r', 'བརྣ '],
      ['བླt', 'l', 'བལྟ'],
      ['བླd', 'l', 'བལྡ'],
      // Standard Tibetan Stacks listed at <http://www.thlib.org/reference/transliteration/tibstacks.php>
      // some are handled magically and don't need to appear here. 
      ['རྐy', 'k', 'རྐྱ'],
      ['རྒy', 'g', 'རྒྱ'],
      ['རྨy', 'm', 'རྨྱ'],
      ['རྒw', 'g', 'རྒྭ'],
      ['རྩw', 's', 'རྩྭ'],
      ['སྐy', 'k', 'སྐྱ'],
      ['སྒy', 'g', 'སྒྱ'],
      ['སྤy', 'p', 'སྤྱ'],
      ['སྦy', 'b', 'སྦྱ'],
      ['སྨy', 'm', 'སྨྱ'],
      ['སྐr', 'k', 'སྐྲ'],
      ['སྒr', 'g', 'སྒྲ'],
      ['སྣr', 'n', 'སྣྲ'],
      ['སྤr', 'p', 'སྤྲ'],
      ['སྦr', 'b', 'སྦྲ'],
      ['སྨr', 'm', 'སྨྲ'],
      ['གྲw', 'r', 'གྲྭ'],
      ['དྲw', 'r', 'དྲྭ'],
      ['ཕྱw', 'y', 'ཕྱྭ'],
      ['རk', 'r', 'རྐ'],
      ['རg', 'r', 'རྒ'],
      ['རj', 'r', 'རྗ'],
      ['རt', 'r', 'རྟ'],
      ['རd', 'r', 'རྡ'],
      ['རn', 'r', 'རྣ '],
      ['རb', 'r', 'རྦ'],
      ['རm', 'r', 'རྨ'],
      ['ལk', 'l', 'ལྐ'],
      ['ལg', 'l', 'ལྒ'],
      ['ལc', 'l', 'ལྕ'],
      ['ལj', 'l', 'ལྗ'],
      ['ལt', 'l', 'ལྟ'],
      ['ལd', 'l', 'སྡ'],
      ['ལp', 'l', 'ལྤ'],
      ['ལb', 'l', 'ལྦ'],
      ['ལh', 'l', 'ལྷ'],
      ['སk', 's', 'སྐ'],
      ['སg', 's', 'སྒ'],
      ['སt', 's', 'སྟ'],
      ['སd', 's', 'སྡ'],
      ['སn', 's', 'སྣ'],
      ['སp', 's', 'སྤ'],
      ['སb', 's', 'སྦ'],
      ['སm', 's', 'སྨ'],
      ['སྟs', 't', 'སྩ'],
      ['ཀw', 'k', 'ཀྭ'],
      ['ཁw', 'h', 'ཁྭ'],
      ['གw', 'g', 'གྭ'],
      ['ཅw', 'c', 'ཅྭ'],
      ['ཉw', 'y', 'ཉྭ'],
      ['ཏw', 't', 'ཏྭ'],
      ['དw', 'd', 'དྭ'],
      ['ཙw', 's', 'ཙྭ'],
      ['ཚw', 'h', 'ཚྭ'],
      ['ཞw', 'h', 'ཞྭ'],
      ['ཟw', 'z', 'ཟྭ'],
      ['རw', 'r', 'རྭ'],
      ['ཤw', 'h', 'ཤྭ'],
      ['སw', 's', 'སྭ'],
      ['ཧw', 'h', 'ཧྭ'],
      ['ཀy', 'k', 'ཀྱ'],
      ['ཁy', 'h', 'ཁྱ'],
      ['གy', 'g', 'གྱ'],
      ['པy', 'p', 'པྱ'],
      ['ཕy', 'h', 'ཕྱ'],
      ['བy', 'b', 'བྱ'],
      ['མy', 'm', 'མྱ'],
      ['ཀr', 'k', 'ཀྲ'],
      ['ཁr', 'h', 'ཁྲ'],
      ['གr', 'g', 'གྲ'],
      ['ཏr', 't', 'ཏྲ'],
      ['ཐr', 'h', 'ཐྲ'],
      ['དr', 'd', 'དྲ'],
      ['པr', 'p', 'པྲ'],
      ['ཕr', 'h', 'ཕྲ'],
      ['བr', 'b', 'བྲ'],
      ['མr', 'm', 'མྲ'],
      ['ཤr', 'h', 'ཤྲ'],
      ['སr', 's', 'སྲ'],
      ['ཧr', 'h', 'ཧྲ'],
      ['ཀl', 'k', 'ཀླ'],
      ['གl', 'g', 'གླ'],
      ['བl', 'b', 'བླ'],
      ['ཟl', 'z', 'ཟླ'],
      ['རl', 'r', 'རླ'],
      ['སl', 's', 'སླ'],
      ['ཨོM', 'o', 'ༀ'],
      ['\\.', ''],
      ['\\+', ''],
      ['-', ''],
      ['S', ''],
      // subjoined letters:
      ['k', '\\+', 'ྐ'],
      ['ྐh', 'ྑ'],
      ['g', '\\+', 'ྒ'],
      ['ྣg', 'ྔ'],
      ['c', '\\+', 'ྕ'],
      ['ྕh', 'ྖ'],
      ['j', '\\+', 'ྗ'],
      ['ྣy', 'ྙ'],
      ['T', '\\+', 'ྚ'],
      ['ྚh', 'ྛ'],
      ['D', '\\+', 'ྜ'],
      ['N', '\\+', 'ྞ'],
      ['t', '\\+', 'ྟ'],
      ['ྟh', 'ྠ'],
      ['d', '\\+', 'ྡ'],
      ['n', '\\+', 'ྣ'],
      ['p', '\\+', 'ྤ'],
      ['ྤh', 'ྥ'],
      ['b', '\\+', 'ྦ'],
      ['m', '\\+', 'ྨ'],
      ['ྟs', 'ྩ'],
      ['ྩh', 'ྪ'],
      ['ྡz', 'ྫ'],
      ['w', '\\+', 'ྭ'],
      ['ྯh', 'ྮ'],
      ['z', '\\+', 'ྯ'],
      ['\'', '\\+', 'ྰ'],
      ['y', '\\+', 'ྱ'],
      ['r', '\\+', 'ྲ'],
      ['l', '\\+', 'ླ'],
      ['ྶh', 'ྴ'],
      ['h', '\\+S', 'ྵ'],
      ['s', '\\+', 'ྶ'],
      ['h', '\\+', 'ྷ'],
      ['v', '\\+', "ྦ༹"],
      ['f', '\\+', "ྥ༹"],
      ['W', '\\+', "ྺ"],
      ['Y', '\\+', "ྻ"],
      ['R', '\\+', "ྼ"],
      ['Z', '\\+', "༹"],
      // consonants
      ['k', 'ཀ'],
      ['ཀh', 'k', 'ཁ'],
      ['g', 'ག'],
      ['ནg', 'n', 'ང'],
      ['c', 'ཅ'],
      ['ཅh', 'c', 'ཆ'],
      ['j', 'ཇ'],
      ['ནy', 'n', 'ཉ'],
      ['T', 'ཊ'],
      ['ཊh', 'T', 'ཋ'],
      ['D', 'ཌ'],
      ['N', 'ཎ'],
      ['t', 'ཏ'],
      ['ཏh', 't', 'ཐ'],
      ['d', 'ད'],
      ['n', 'ན'],
      ['p', 'པ'],
      ['པh', 'p', 'ཕ'],
      ['b', 'བ'],
      ['m', 'མ'],
      ['ཏs', 't', 'ཙ'],
      ['ཙh', 's', 'ཚ'],
      ['དz', 'd', 'ཛ'],
      ['w', 'ཝ'],
      ['ཟh', 'z', 'ཞ'],
      ['z', 'ཟ'],
      ['\'', 'འ'],
      ['y', 'ཡ'],
      ['r', 'ར'],
      ['l', 'ལ'],
      ['སh', 's', 'ཤ'],
      ['h', 'S', 'ཥ'],
      ['s', 'ས'],
      ['h', 'ཧ'],
      ['f', 'ཕ༹'],
      ['v', 'བ༹'],
      ['R', 'ཪ'],
      // vowels after consonnants or vowels
      ['([ཀ-ྼ])i', 'a', '$1ཻ'],
      ['([ཀ-ྼ])u', 'a', '$1ཽ'],
      ['([ཀ-ྼ])i', '-', '$1ྀ'],
      ['([ཀ-ྼ])རI', 'r-', '$1ྲཱྀ'],
      ['([ཀ-ྼ])ལI', 'l-', '$1ླཱྀ'],
      ['རI', 'r-', 'ཨྲཱྀ'],
      ['ལI', 'l-', 'ཨླཱྀ'],
      ['([ཀ-ྼ])I', '-', '$1ཱྀ'],
      ['([ཀ-ྼ])a', '$1'],
      ['([ཀ-ྼ])i', '$1ི'],
      ['([ཀ-ྼ])u', '$1ུ'],
      ['([ཀ-ྼ])e', '$1ེ'],
      ['([ཀ-ྼ])o', "$1ོ"],
      ['([ཀ-ྼ])A', '$1ཱ'],
      ['([ཀ-ྼ])I', '$1ཱི'],
      ['([ཀ-ྼ])U', '$1ཱུ'],
      // vowels after something else
      ['a', 'ཨ'],
      ['i', '-', 'ཨྀ'],
      ['A', 'ཨཱ'],
      ['I', '-', 'ཨཱྀ'],
      ['I', 'ཨཱི'],
      ['U', 'ཨཱུ'],
      ['i', 'ཨི'],
      ['u', 'ཨུ'],
      ['e', 'ཨེ'],
      ['o', 'ཨོ'],
      // numbers
      ['0', '༠'],
      ['1', '༡'],
      ['2', '༢'],
      ['3', '༣'],
      ['4', '༤'],
      ['5', '༥'],
      ['6', '༦'],
      ['7', '༧'],
      ['8', '༨'],
      ['9', '༩'],
      // sanskrit marks
      ['H', "ཿ"],
      ['M', "ཾ"],
      ['~M', "ྃ"],
      ['~M`', "ྂ"],
      ['\\?', "྄"],
      ['&', '྅'],
      // punctuation
      [' ', '་'],
      ['\\*', '༌'],
      ['\\/', '།'],
      ['\\/\\/', '༎'],
      [';', '༏'],
      ['\\|', '༑'],
      ['\\!', '༈'],
      ['\\:', '༔'],
      ['_', ' '],
      ['\\=', '༴'],
      ['@', '༄'],
      ['#', '༅'],
      ['\\$', '༆'],
      ['%', '༇'],
      ['<', '༺'],
      ['>', '༻'],
      ['\\(', '༼'],
      ['\\)', '༽'],
      ['~X', "༵"],
      ['X', "༷"],
      ['\\^', "༹"]
      ];

	var boEWTS = {
		id: 'bo-ewts',
		name: 'Tibetan EWTS transliteration',
		description: 'Tibetan Extended Wylie Transliteration, based on <a href="http://www.thlib.org/reference/transliteration/#!essay=/thl/ewts">the work of thdl</a>.',
		date: '2014-07-09',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Elie Roux <elie.roux@telecom-bretagne.eu>',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 2,
		maxKeyLength: 5,
		patterns: patterns
	};

	$.ime.register( boEWTS );
}( jQuery ) );
