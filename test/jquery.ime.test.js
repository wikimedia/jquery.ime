( function ( $ ) {
	'use strict';

	var $textarea, textareaIME,
		$input, inputIME;

	QUnit.module( 'jquery.ime - $.fn.ime tests', {
		setup: function () {
			$textarea = $( '<textarea>' );
			$input = $( '<input>' );
		},
		teardown: function () {
		}
	} );

	QUnit.test( 'Initialization tests', 7, function ( assert ) {
		assert.strictEqual( typeof $textarea.ime, 'function', 'ime function exists' );
		assert.strictEqual( typeof $textarea.data('ime'), 'undefined', 'ime not initialized before calling ime()' );

		$input.ime();
		inputIME = $input.data( 'ime' );
		assert.strictEqual( inputIME.isActive(), false, 'ime is initially inactive' );
		assert.strictEqual( inputIME.context, '', 'context is initially empty' );
		assert.strictEqual( inputIME.getIM(), null, 'inputmethod is initially null' );
		assert.strictEqual( inputIME.options.imePath, '../', 'imePath is "../" by default' );

		var $specialPath = $( '<textarea>' ),
			specialPath = '../test';
		$specialPath.ime( { imePath: specialPath } );
		assert.strictEqual( $specialPath.data( 'ime' ).options.imePath, specialPath,
							'imePath is defined correctly using options in the constructor' );
	} );

	QUnit.test( 'Selector tests', 12, function ( assert ) {
		$textarea.ime();
		textareaIME = $textarea.data( 'ime' );
		var selector = textareaIME.selector.data( 'imeselector' );
		assert.strictEqual( typeof selector, 'object', 'selector on textarea is defined' );

		assert.strictEqual( textareaIME.isActive(), false, 'selector is not active initially' );
		assert.strictEqual( textareaIME.getIM(), null, 'inputmethod is not enabled initially' );

		textareaIME.enable();
		assert.strictEqual( textareaIME.isActive(), true, 'selector is active' );
		QUnit.stop();
		textareaIME.load( 'hi-transliteration', function () {
			selector.selectLanguage( 'hi' );
			// selector.selectIM( 'hi-transliteration' );
			assert.strictEqual( textareaIME.getIM().id, 'hi-transliteration',
				'Hindi inputmethod is Hindi Transliteration' );
			QUnit.start();
		} );
		selector.disableIM();
		assert.strictEqual( textareaIME.isActive(), false, 'selector is not active' );
		QUnit.stop();
		textareaIME.load( 'ta-transliteration', function () {
			selector.selectLanguage( 'ta' );
			assert.strictEqual( textareaIME.getIM().id, 'ta-transliteration',
				'Tamil inputmethod is defaulted to Tamil Transliteration' );
			QUnit.start();
		} );
		QUnit.stop();
		textareaIME.load( 'ta-bamini', function () {
			selector.selectLanguage( 'ta' );
			selector.selectIM( 'ta-bamini' );
			assert.strictEqual( textareaIME.getIM().id, 'ta-bamini',
				'Tamil inputmethod is changed to Tamil Bamini' );
			QUnit.start();
		} );
		selector.disableIM();
		assert.strictEqual( textareaIME.isActive(), false, 'Selector is not active' );
		QUnit.stop();
		textareaIME.load( 'kn-transliteration', function () {
			selector.selectLanguage( 'kn' );
			// selector.selectIM( 'kn-transliteration' ); Implicit
			assert.strictEqual( textareaIME.getIM().id, 'kn-transliteration',
				'Default inputmethod for Kannada is Kannada Transliteration' );
			QUnit.start();
		} );
		QUnit.stop();
		textareaIME.load( 'hi-transliteration', function () {
			selector.selectLanguage( 'hi' );
			textareaIME.enable();
			assert.strictEqual( textareaIME.getIM().id, 'hi-transliteration',
				'inputmethod is Hindi Transliteration' );
			selector.selectLanguage( 'ta' );
			assert.strictEqual( textareaIME.getIM().id, 'ta-bamini',
				'inputmethod for Tamil is Tamil Bamini' );
			QUnit.start();
		} );

	} );

	QUnit.test( 'Preferences tests', 5, function ( assert ) {
		$.ime.preferences.registry.previousLanguages = [];
		$.ime.preferences.setLanguage( 'hi' );

		assert.strictEqual( $.ime.preferences.getPreviousLanguages().length, 1, 'Hindi added to previous languages' );
		// set it again
		$.ime.preferences.setLanguage( 'hi' );
		assert.strictEqual( $.ime.preferences.getPreviousLanguages().length, 1, 'Hindi not duplicated in previous languages' );
		$.ime.preferences.setLanguage( 'kn' );
		$.ime.preferences.setIM( 'kn-inscript' );
		assert.strictEqual( $.ime.preferences.getPreviousLanguages().length, 2, 'Kannada added to previous languages' );
		$.ime.preferences.setLanguage( 'hi' );
		$.ime.preferences.setIM( 'hi-inscript' );
		assert.strictEqual( $.ime.preferences.getIM('hi'), 'hi-inscript', 'Hindi Inscript is the preferred IM for Hindi' );
		assert.strictEqual( $.ime.preferences.getIM('kn'), 'kn-inscript', 'Kannada Inscript is the preferred IM for Kannada' );
	} );

	QUnit.module( 'jquery.ime - input method rules tests', {
		setup: function () {
			$textarea = $( '<textarea>' );
			$input = $( '<input>' );
		},
		teardown: function () {
		}
	} );


	/* T
	 * ry for imeTest
	 */
	var imeTest = function( options ) {
		var opt = $.extend( {
			description: '', // Test description
			$input: null,
			tests: [],
			inputmethod: '' // The input method name.
		}, options );

		QUnit.test( opt.description, function() {
			var ime, $input;

			QUnit.expect( opt.tests.length );
			$input = opt.$input;
			QUnit.stop();

			$input.appendTo( '#qunit-fixture' );
			$input.ime();
			$input.focus();

			ime = $input.data( 'ime' );
			ime.load( opt.inputmethod, function () {
				ime.setIM( opt.inputmethod );
				ime.enable();
				for ( var i = 0 ; i < opt.tests.length; i++ ) {
					// Simulate pressing keys for each of the sample characters
					typeChars( $input, opt.tests[i].input );
					QUnit.strictEqual( $input.val() || $input.text(), opt.tests[i].output, opt.tests[i].description );
					$input.val( '' );
					$input.text( '' );
				}
				QUnit.start();
			} );
		} );
	};

	imeTest( {
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
			{ input: 'nta', output: 'ന്റ', description: 'Malayalam nta' }
		],
		inputmethod: 'ml-transliteration',
		$input: $( '<input>' ).attr( { id: 'ml', type: 'text' } )
	} );

	imeTest( {
		description: 'Telugu Transliteration test',
		tests: [
			{ input: 'c', output: 'చ్', description: 'Telugu c' },
			{ input: 'ch', output: 'చ్', description: 'Telugu ch' }
		],
		inputmethod: 'te-transliteration',
		$input: $( '<input>' ).attr( { id: 'te', type: 'text' } )
	} );

	imeTest( {
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
			{ input: [ [ ';', true ] ], output: 'ౘ', description: 'Telugu Alt ; (tsa)'},
			{ input: [ [ 'p', true ] ], output: 'ౙ', description: 'Telugu Alt p (dza)'},
			{ input: [ [ '4', true ] ], output: '₹', description: 'Alt 4; (rupee sign)'},
			{ input: [ [ '=', true ] ], output: 'ౄ', description: 'Telugu Alt = (RRuu, vowel)'},
			{ input: [ [ '+', true ] ], output: 'ౠ', description: 'Telugu Alt + (RRuu)'}
		],
		inputmethod: 'te-inscript',
		$input: $( '<input>' ).attr( { id: 'te-inscript', type: 'text' } )
	} );

	imeTest( {
		description: 'Georgian Transliteration test',
		tests: [
			{ input: 'vikipedia\\`', output: 'ვიკიპედია`', description: 'Georgian vikipedia with `' },
			{ input: 'jim morisoni \\~\\~\\~\\~', output: 'ჯიმ მორისონი ~~~~', description: 'Georgian jim morisoni with Wiki Signature' },
			{ input: 'abcdefghijklmnopqrstuvwxyz', output: 'აბცდეფგჰიჯკლმნოპქრსტუვწხყზ', description: 'a-z in Georgian' },
			{ input: 'WRTSJZC`~', output: 'ჭღთშჟძჩ„“', description: 'WRTSJZC`~ in Georgian' }
		],
		inputmethod: 'ka-transliteration',
		$input: $( '<input>' ).attr( { id: 'ka', type: 'text' } )
	} );


	// TODO: enhance.
	imeTest( {
		description: 'Sanskrit transliteration test',
		tests: [
			{ input: '\\~', output: '~', description: 'Sanskrit transliteration - \\~ -> ~' }
		],
		inputmethod: 'sa-transliteration',
		$input: $( '<input>' ).attr( { id: 'sa', type: 'text' } )
	} );

	imeTest( {
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
		inputmethod: 'or-transliteration',
		$input: $( '<input>' ).attr( { id: 'or', type: 'text' } )
	} );

	imeTest( {
		description: 'Oriya InScript test',
		tests: [
			{ input: 'ka', output: 'କୋ', description: 'Odia InScript ka -> କୋ'}
		],
		inputmethod: 'or-inscript',
		$input: $( '<input>' ).attr( { id: 'or-inscript', type: 'text' } )
	} );

	imeTest( {
		description: 'Malayalam InScript test',
		tests: [{ input: 'ka', output: 'കോ' }],
		inputmethod: 'ml-inscript',
		$input: $( '<input>' ).attr( { id: 'ml-inscript', type: 'text' } )
	} );

	imeTest( {
		description: 'Tamil Transliteration test',
		tests: [
			//(ks|KS)h should give non-conjunct form of ksh க்‌ஷ் (with ZWNJ)
			//(ks|KS)H should give the conjunct form க்ஷ் (with ZWNJ)
			{ input: 'thikshith', output: 'திக்‌ஷித்', description: 'thikshith in Tamil transliteration for திக்‌ஷித் non conjunct form' }, // (with ZWNJ)
			{ input: 'thikShith', output: 'திக்‌ஷித்', description: 'thikShith in Tamil transliteration for திக்‌ஷித் non conjunct form' }, // (with ZWNJ)
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
		inputmethod: 'ta-transliteration',
		$input: $( '<input>' ).attr( { id: 'ta', type: 'text' } )
	} );

	imeTest( {
		description: 'Tamil 99 test',
		tests: [
			//hfW should give non-conjunct form of ksha க்‌ஷ (with ZWNJ)
			//T still gives the conjunct form க்ஷ
			{ input: 'lshfWslf', output: 'திக்‌ஷித்', description: 'lshfWslf in Tamil99 for திக்‌ஷித் non conjunct form' }, // (with ZWNJ)
			{ input: 'lsTslf', output: 'திக்ஷித்', description: 'lsTslf in Tamil99 for திக்ஷித் conjunct form' },
			{ input: 'hfWtkakf', output: 'க்‌ஷேமம்', description: 'hfWtkakf in Tamil99 for க்‌ஷேமம் hfW -> க்‌ஷ non conjunct form' }, // (with ZWNJ)
			{ input: 'Ttkakf', output: 'க்ஷேமம்', description: 'Ttkakf in Tamil99 for க்ஷேமம் T -> க்ஷ conjunct form' }
		],
		inputmethod: 'ta-99',
		$input: $( '<input>' ).attr( { id: 'ta-99', type: 'text' } )
	} );

	imeTest( {
		description: 'Tamil InScript test',
		tests: [
			{ input: 'ka', output: 'கோ', description: 'Tamil Inscript கோ' },
			{ input: 'lfkd)<fld', output: 'திக்‌ஷித்', description: 'Tamil Inscript திக்‌ஷித் non conjunct form with ZWNJ in between' }, // (with ZWNJ)
			{ input: 'lf&fld', output: 'திக்ஷித்', description: 'Tamil Inscript திக்ஷித் conjunct form' },
			{ input: ';sjVd', output: 'சேரன்', description: 'Tamil Inscript சேரன் Cheran' },
			{ input: ';aBVd', output: 'சோழன்', description: 'Tamil Inscript சோழன் Chozhan' },
			{ input: '/gbjepd', output: 'யுவராஜ்', description: 'Tamil Inscript யுவராஜ் Yuvaraj' },
			{ input: 'heCd\'f/jd', output: 'பாண்டியர்', description: 'Tamil Inscript பாண்டியர் Pandiyar' },
			{ input: 'Ecrjd', output: 'ஆமீர்', description: 'Tamil Inscript ஆமீர் Aamir' },
			{ input: 'Duj`Vf', output: 'அஹரொனி', description: 'Tamil Inscript அஹரொனி Aharoni' },
			{ input: 'md)jrkevdld', output: 'ஸ்‌ரீகாந்த்', description: 'Tamil Inscript ஸ்‌ரீகாந்த் with ZWNJ between ஸ் and ரீ Srikanth' }, // (with ZWNJ)
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
		inputmethod: 'ta-inscript',
		$input: $( '<input>' ).attr( { id: 'ta-inscript', type: 'text' } )
	} );

	imeTest ( {
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
		inputmethod: 'am-transliteration',
		$input: $( '<input>' ).attr( { id: 'am', type: 'text' } )
	} );

	imeTest ( {
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
		inputmethod: 'mr-transliteration',
		$input: $( '<input>' ).attr( { id: 'mr', type: 'text' } )
	} );

	imeTest ( {
		description: 'Marathi InScript 2 test',
		tests: [
			{ input: [ [ '1', false ] ], output: '१', description: 'Marathi InScript regular 1 - १' },
			{ input: [ [ '1', true ] ], output: '\u200d', description: 'Marathi InScript regular 1 - ZWJ' },
			{ input: [ [ '2', false ] ], output: '२', description: 'Marathi InScript regular 2 - २' },
			{ input: [ [ '2', true ] ], output: '\u200c', description: 'Marathi InScript regular 2 - ZWNJ' }
		],
		inputmethod: 'mr-inscript2',
		$input: $( '<input>' ).attr( { id: 'mr', type: 'text' } )
	} );

	imeTest ( {
		description : 'Kannada Transliteration test',
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
			{ input: 'rAjxkumAr', output: 'ರಾಜ್‍ಕುಮಾರ್', description: 'rAjxkumAr for ರಾಜ್‍ಕುಮಾರ್ in Kannada transliteration ' }, // with ZWJ
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
			{ input: 'aalTarxnETIv', output: 'ಆಲ್ಟರ್‍ನೇಟೀವ್', description: 'aalTarxnETIv for ಆಲ್ಟರ್‍ನೇಟೀವ್ for Kannada transliteration ' }, // with ZWJ
			{ input: 'kaarxnalli', output: 'ಕಾರ್‍ನಲ್ಲಿ', description: 'kaarxnalli for ಕಾರ್‍ನಲ್ಲಿ for Kannada transliteration '}, // with ZWJ
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
		inputmethod: 'kn-transliteration',
		$input: $( '<input>' ).attr( {id: 'kn', type: 'text' } )
	} );

	imeTest ( {
		description : 'Kannada KGP test',
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
			{ input: 'rFfyAMkf', output: 'ರ‍್ಯಾಂಕ್', description: 'ZWJ ರ‍್ಯಾಂಕ್' } // with ZWJ
		],
		inputmethod: 'kn-kgp',
		$input: $( '<input>' ).attr( {id: 'kn', type: 'text' } )
	} );

	imeTest( {
		description: 'German Transliteration and keybuffer test',
		tests: [
			{ input: '~o', output: 'ö', description: 'German ö' },
			{ input: '~O', output: 'Ö', description: 'German Ö' },
			{ input: '~s', output: 'ß', description: 'German ß' }
		],
		inputmethod: 'de',
		$input: $( '<input>' ).attr( { id: 'de', type: 'text' } )
	} );

	imeTest( {
		description: 'Hebrew Transliteration and extended keys test',
		tests: [
			// The first case is a regular hyphen-minus ('-'), which is the same
			// when it is pressed by itself without Alt.
			// The second case is hyphen-minus with Alt, which produces the Hebrew
			// hyphen (maqaf).
			{ input: [ [ '-', false ] ], output: '-', description: 'Hebrew regular -' },
			{ input: [ [ '-', true ] ], output: '־', description: 'Hebrew extended -' }
		],
		inputmethod: 'he-standard-2012-extonly',
		$input: $( '<input>' ).attr( { id: 'he-standard-2011-extonly', type: 'text' } )
	} );

	imeTest( {
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
		inputmethod: 'pa-transliteration',
		$input: $( '<input>' ).attr( { id: 'pa', type: 'text' } )
	} );

	// Variables for Cyrillic with palochka transliteration tests.
	// All the characters are very similar in appearance,
	// so it's better to give them names to avoid confusion.
	var palochka = 'Ӏ';
	var latinSmallL = 'l';
	var latinCapitalI = 'I';
	var ukrainianCapitalI = 'І';
	var digitOne = '1';

	imeTest( {
		description: 'Cyrillic with palochka transliteration test',
		tests: [
			// Sanity test - palochka should produce itself
			{ input: palochka, output: palochka, description: 'Palochka itself is unchanged' },

			{ input: 'L', output: 'L', description: 'Latin capital L is unchanged' },
			{ input: latinSmallL, output: palochka, description: 'Latin small l becomes palochka' },

			{ input: latinCapitalI, output: palochka, description: 'Latin capital I becomes palochka' },
			{ input: 'i', output: 'i', description: 'Latin small i becomes palochka' },

			{ input: ukrainianCapitalI, output: palochka, description: 'Ukrainian capital І becomes palochka' },

			{ input: digitOne, output: digitOne, description: 'Digit one (1) is unchanged' },
			{ input: [ [ digitOne, true ] ], output: palochka, description: 'Extended digit one (1) becomes palochka' },

			{ input: 'д', output: 'д', description: 'Cyrillic small д is is unchanged' },
			{ input: [ [ 'д', true ] ], output: palochka, description: 'Extended Cyrillic д becomes palochka' },

			{ input: 'ш', output: 'ш', description: 'Cyrillic small ш is is unchanged' },
			{ input: [ [ 'ш', true ] ], output: palochka, description: 'Extended Cyrillic small ш becomes palochka' },

			{ input: 'Ш', output: 'Ш', description: 'Cyrillic capital Ш is is unchanged' },
			{ input: [ [ 'Ш', true ] ], output: palochka, description: 'Extended Cyrillic capital Ш becomes palochka' }
		],
		inputmethod: 'cyrl-palochka',
		$input: $( '<input>' ).attr( { id: 'cyrl-palochka', type: 'text' } )
	} );

	imeTest( {
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
			{ input: 'sad`bhaava', output: 'સદ્‌ભાવ', description: 'Gujarati sad`bhaava - testing ZWNJ' }, // (with ZWNJ)
			{ input: 'caDJaavo', output: 'ચડ઼ાવો', description: 'Gujarati caDJaavo - testing nukta' }
		],
		inputmethod: 'gu-transliteration',
		$input: $( '<input>' ).attr( { id: 'gu', type: 'text' } )
	} );

	imeTest( {
		description: 'Bengali Avro layout test',
		tests: [
			{ input: 'ka', output: 'কা', description: 'Bengali Avro - ka' },
			{ input: 'rri', output: 'ঋ', description: 'Bengali Avro - rri' },
			{ input: 'drri', output: 'দৃ', description: 'Bengali Avro - drri' },
			{ input: 'kee', output: 'কী', description: 'Bengali Avro - kee' }
		],
		inputmethod: 'bn-avro',
		$input: $( '<input>' ).attr( { id: 'bn-avro', type: 'text' } )
	} );

	imeTest( {
		description: 'Hindi InScript layout test',
		tests: [
			{ input: [ [ 'F', true ] ], output: '\u090C', description: 'Hindi inscript - ALTGR+F' }
		],
		inputmethod: 'hi-inscript',
		$input: $( '<input>' ).attr( { id: 'hi-inscript', type: 'text' } )
	} );

	imeTest( {
		description: 'Hindi transliteration tests',
		tests: [
			// The regex returns \n for \r.
			{ input: "raam\r", output: "राम\n", description: 'Hindi transliteration - raam<line-break> (\\r)' },

			{input: '\\~', output: '~', description: 'Hindi transliteration - \\~ -> ~' },
			{input: 'agar ',output: 'अगर ', description:'Hindi transliteration - virama autoremoval on space'}, //bug 35990
			{input: 'agar~ ',output: 'अगर् ', description:'Hindi transliteration - virama retention'}, //bug 35990

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
		inputmethod: 'hi-transliteration',
		$input: $( '<textarea>' ).attr( { id: 'hi', type: 'text' } )
	} );

	// Based on SRI LANKA STANDARD 1134 : 2004
	imeTest( {
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
		inputmethod: 'si-wijesekara',
		$input: $( '<input>' ).attr( { id: 'si-wijesekara', type: 'text' } )
	} );

	imeTest( {
		description: 'Bengali Probhat layout test',
		tests: [
			{ input: 'ka', output: 'কা', description: 'Bengali Probhat - ka' },
			{ input: 'ki', output: 'কি', description: 'Bengali Probhat - ki' },
			{ input: 'k/S', output: 'ক্ষ', description: 'Bengali Probhat - kha' },
			{ input: 'q<', output: 'দৃ', description: 'Bengali Probhat - drri' },
			{ input: 'be', output: 'বী', description: 'Bengali Probhat - bee' }
		],
		inputmethod: 'bn-probhat',
		$input: $( '<input>' ).attr( { id: 'bn-probhat', type: 'text' } )
	} );

	imeTest( {
		description: 'Belarusian transliteration test',
		tests: [
			{ input: '[];\',.`', output: 'х\'жэбюё', description: 'Belarusian transliateration - [];\',.` -> х\'жэбюё' },
			{ input: '{}:"<>~', output: 'Х\'ЖЭБЮЁ', description: 'Belarusian transliateration - {}:"<>~ -> Х\'ЖЭБЮЁ' }
		],
		inputmethod: 'be-transliteration',
		$input: $( '<input>' ).attr( { id: 'be-transliteration', type: 'text' } )
	} );

	imeTest( {
		description: 'Belarusian Łacinka test',
		tests: [
			{ input: '=c', output: 'č', description: 'Belarusian Łacinka - =c -> č' },
			{ input: '-n', output: 'ń', description: 'Belarusian Łacinka - -n -> ń' },
			{ input: '=u', output: 'ŭ', description: 'Belarusian Łacinka - =u -> ŭ' },
			{ input: '-l', output: 'ł', description: 'Belarusian Łacinka - -l -> ł' }
		],
		inputmethod: 'be-latin',
		$input: $( '<input>' ).attr( { id: 'be-latin', type: 'text' } )
	} );

	imeTest( {
		description: 'Javanese transliteration test',
		tests: [
			{ input: '\\A', output: 'A', description: 'Javanese transliteration escape mode - A' },
			{input: '\\~', output: '~', description: 'Javanese transliteration - \\~ -> ~' },
			{ input: 'A', output: 'ꦄ', description: 'Javanese transliteration - A' },
			{ input: 'B', output: 'ꦨ', description: 'Javanese transliteration - B' },
			{ input: 'y', output: 'ꦪ', description: 'Javanese transliteration - y' },
			{ input: 'z', output: 'ꦗ꦳', description: 'Javanese transliteration - z' },
			{ input: 'q`', output: '꧀', description: 'Javanese transliteration - q`' }
		],
		inputmethod: 'jv-transliteration',
		$input: $( '<input>' ).attr( { id: 'jv-transliteration', type: 'text' } )
	} );

	// Basic sendkey-implementation
	// $input - the input element
	// characters - either
//			- a string
//			- an array of pairs of character and altKey value
	var typeChars = function( $input, characters ) {
		var len = characters.length;
		for ( var i = 0; i < len; i++ ) {
			// Get the key code
			var character,
				altKeyValue;
			if ( typeof( characters ) === 'string' ) {
				character = characters[i];
				altKeyValue = false;
			} else {
				character = characters[i][0];
				altKeyValue = characters[i][1];
			}

			var code = character.charCodeAt(0);

			// Trigger event and undo if prevented
			var event = new jQuery.Event( 'keypress', {
				keyCode: code,
				which: code,
				charCode: code,
				altKey: altKeyValue
			} );
			if ( $input.triggerHandler( event ) ) {
				$input.val( $input.val() + character ) ;
			}
		}
	};

}( jQuery ) );
