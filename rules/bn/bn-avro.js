( function ( $ ) {
	'use strict';

	var bnAvro = {
		id: 'bn-avro',
		name: 'অভ্র',
		description: 'Bengali Avro input method',
		date: '2012-10-10',
		URL: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Extension:UniversalLanguageSelector/Input_methods/bn-avro',
		author: 'Junaid P V',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 4,
		maxKeyLength: 5,
		patterns: [
			[ '([ক-হড়ঢ়য়])্?ররi', '[^o`]', '$1ৃ' ],
			[ 'ররi', '[^o`]', 'ঋ' ],
			[ 'ঙহo', 'ঙ্ঘ' ],
			[ '([ক-হড়ঢ়য়])াZ', '[^o`]', '$1্যা' ],
			[ '(([ক-হড়ঢ়য়])|য়)o', '[^o`]', '$1' ], // য় cannot be included in the range, why? everywhere else it is OK!
			[ '([ক-হড়ঢ়য়])a', '[^o`]', '$1া' ],
			[ '([ক-হড়ঢ়য়])i', '[^o`]', '$1ি' ],
			[ '([ক-হড়ঢ়য়])(I|েe)', '[^o`]', '$1ী' ],
			[ '([ক-হড়ঢ়য়])u', '[^o`]', '$1ু' ],
			[ '([ক-হড়ঢ়য়])U', '[^o`]', '$1ূ' ],
			[ '([ক-হড়ঢ়য়])o', '[o`]', '$1ু' ],
			[ '([ক-হড়ঢ়য়])e', '[^o`]', '$1ে' ],
			[ '([ক-হড়ঢ়য়])োI', '[^o`]', '$1ৈ' ],
			[ '([ক-হড়ঢ়য়])O', '[^o`]', '$1ো' ],
			[ '([ক-হড়ঢ়য়])োU', '[^o`]', '$1ৌ' ],

			[ '([ক-হড়ঢ়য়][িুেো]|[এইওউ])a', '[^o`]', '$1য়া' ],
			[ '([ক-হড়ঢ়য়][াে]|[আএ])o', '[^o`]', '$1ও' ],

			[ '([কঙলষস])(k|K)', '[^o`]', '$1্ক' ],
			[ '([ঙদল])(g|G)', '[^o`]', '$1্গ' ],
			[ 'গg', '[^o`]', 'জ্ঞ' ],
			[ '([চশ])c', '[^o`]', '$1্চ' ],
			[ '([জঞব])j', '[^o`]', '$1্জ' ],
			[ 'নj', '[^o`]', 'ঞ্জ' ],
			[ '([কটণনপলষস])T', '[^o`]', '$1্ট' ],
			[ '([ডণনল])D', '[^o`]', '$1্ড' ],
			[ '([গষহ])N', '[^o`]', '$1্ণ' ],
			[ '([কতনপশসহ])t', '[^o`]', '$1্ত' ],
			[ '([দনব])d', '[^o`]', '$1্দ' ],
			[ '([গঘণতধনপমশসহ])n', '[^o`]', '$1্ন' ],
			[ '([পমলষস])p', '[^o`]', '$1্প' ],
			[ '([স])f', '[^o`]', '$1্ফ' ],
			[ '([বমল])b', '[^o`]', '$1্ব' ],
			[ '([দম])(v|V)', '[^o`]', '$1্ভ' ],
			[ '([কগঙটণতদধনমলশষসহ])m', '[^o`]', '$1্ম' ],
			[ '([ক-ঘচ-ঝট-যলশ-হড়ঢ়য়])r', '[^o`]', '$1্র' ],
			[ '([কগপ-বমলশসহ])l', '[^o`]', '$1্ল' ],
			[ '([কনপ])s', '[^o`]', '$1্স' ],
			[ '([ক-হড়ঢ়য়])w', '[^o`]', '$1্ব' ],
			[ '([ক-হড়ঢ়য়])y', '[^o`]', '$1্য' ],
			[ 'নc', '[^o`]', 'ঞ্চ' ],

			[ 'ত`', '`', 'ৎ' ],

			[ 'ক্ক(h|H)', '[^o`]', 'ক্ষ' ],
			[ 'কশ(h|H)', '[^o`]', 'ক্ষ' ],

			[ 'ররk', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ক' ],
			[ 'ররg', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্গ' ],
			[ 'ররc', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্চ' ],
			[ 'ররj', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্জ' ],
			[ 'ররT', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ট' ],
			[ 'ররD', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ড' ],
			[ 'ররN', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ণ' ],
			[ 'ররt', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ত' ],
			[ 'ররd', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্দ' ],
			[ 'ররn', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ন' ],
			[ 'ররp', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্প' ],
			[ 'ররf', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ফ' ],
			[ 'ররb', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ব' ],
			[ 'ররv', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ভ' ],
			[ 'ররm', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ম' ],
			[ 'ররz', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্য' ],
			[ 'ররl', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ল' ],
			[ 'ররS', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্শ' ],
			[ 'ররs', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্স' ],
			[ 'ররh', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্হ' ],
			[ 'ররR', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্ড়' ],
			[ 'রর(y|Y)', '(o|a|i|I|u|U|e|O|OI|OU|rri)rr', 'র্য়' ],

			[ 'ংo', 'ঙ্গ' ],
			[ 'ংi', 'ঙ্গি' ],
			[ 'ংI', 'ঙ্গী' ],
			[ '(ংu|ঙ্গo)', 'ঙ্গু' ],
			[ 'ংU', 'ঙ্গূ' ],
			[ 'ং', 'ঙ্গি' ],
			[ 'ং', 'ঙ্গি' ],

			[ 'শ(h|H)', 'S', 'ষ' ],

			[ 'অo', '[^`]', 'উ' ],
			[ 'এe', '[^o`]', 'ঈ' ],

			[ 'ক(h|H)', '[^o`]', 'খ' ],
			[ 'গ(h|H)', '[^o`]', 'ঘ' ],
			[ 'ণg', '[^o`]', 'ঙ' ],
			[ 'চ(h|H)', '[^o`]', 'ছ' ],
			[ 'জ(h|H)', '[^o`]', 'ঝ' ],
			[ 'ণG', '[^o`]', 'ঞ' ],
			[ 'ট(h|H)', '[^o`]', 'ঠ' ],
			[ 'ড(h|H)', '[^o`]', 'ঢ' ],
			[ 'ত(h|H)', '[^o`]', 'থ' ],
			[ 'দ(h|H)', '[^o`]', 'ধ' ],
			[ 'প(h|H)', '[^o`]', 'ফ' ],
			[ 'ব(h|H)', '[^o`]', 'ভ' ],
			[ '(স(h|H))', '[^o`]', 'শ' ],
			[ 'ড়(h|H)', '[^o`]', 'ঢ়' ],
			[ 'ত্`', '[^o`]', 'ৎ' ],
			[ 'নg', '[^o`]', 'ং' ],
			[ 'ঃ`', '[^o`]', ':' ],
			[ 'ররi', '[^o`]', 'ঋ' ],
			[ 'ওI', '[^o`]', 'ঐ' ],
			[ 'ওU', '[^o`]', 'ঔ' ],

			[ 'আ`', 'া' ],
			[ 'ই`', 'ি' ],
			[ 'ঈ`', 'ী' ],
			[ 'উ`', 'ু' ],
			[ 'ঊ`', 'ূ' ],
			[ 'এ`', 'ে' ],
			[ 'আ`', 'া' ],
			[ 'আ`', 'া' ],
			[ 'আ`', 'া' ],
			[ 'আ`', 'া' ],
			[ 'আ`', 'া' ],
			[ 'আ`', 'া' ],

			[ '([kKqQ])', 'ক' ],
			[ '(g|G)', 'গ' ],
			[ '(c|C)', 'চ' ],
			[ '(j|J)', 'জ' ],
			[ 'T', 'ট' ],
			[ 'D', 'ড' ],
			[ 'N', 'ণ' ],
			[ 't', 'ত' ],
			[ 'd', 'দ' ],
			[ 'n', 'ন' ],
			[ '(p|P)', 'প' ],
			[ 'f', 'ফ' ],
			[ '(b|B)', 'ব' ],
			[ '(v|V)', 'ভ' ],
			[ '(m|M)', 'ম' ],
			[ 'z', 'য' ],
			[ 'r', 'র' ],
			[ '(l|L)', 'ল' ],
			[ 'S', 'শ' ],
			[ 's', 'স' ],
			[ '(h|H)', 'হ' ],
			[ 'R', 'ড়' ],
			[ 'w', 'ও' ],
			[ 'x', 'ক্স' ],
			[ '(y|Y)', 'য়' ],

			[ 'Z', '্য' ],

			[ 'o', 'অ' ],
			[ '(a|A)', 'আ' ],
			[ 'i', 'ই' ],
			[ 'I', 'ঈ' ],
			[ 'u', 'উ' ],
			[ 'U', 'ঊ' ],
			[ '(e|E)', 'এ' ],
			[ 'O', 'ও' ],

			[ '0', '০' ],
			[ '1', '১' ],
			[ '2', '২' ],
			[ '3', '৩' ],
			[ '4', '৪' ],
			[ '5', '৫' ],
			[ '6', '৬' ],
			[ '7', '৭' ],
			[ '8', '৮' ],
			[ '9', '৯' ],

			[ '\\\\\\.', '.' ],

			[ ',,', '্' ],
			[ '\\:', 'ঃ' ],
			[ '\\^', 'ঁ' ],
			[ '\\.', '।' ],
			[ '\\$', '৳' ],
			[ 'ঃ`', ':' ],
			[ '`', '' ] ]
	};

	$.ime.register( bnAvro );
}( jQuery ) );
