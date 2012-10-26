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
		stop();
		textareaIME.load( 'hi-transliteration', function () {
			selector.selectLanguage( 'hi' );
			// selector.selectIM( 'hi-transliteration' );
			assert.strictEqual( textareaIME.getIM().id, 'hi-transliteration',
				'Hindi inputmethod is Hindi Transliteration' );
			start();
		} );
		selector.disableIM();
		assert.strictEqual( textareaIME.isActive(), false, 'selector is not active' );
		stop();
		textareaIME.load( 'ta-transliteration', function () {
			selector.selectLanguage( 'ta' );
			assert.strictEqual( textareaIME.getIM().id, 'ta-transliteration',
				'Tamil inputmethod is defaulted to Tamil Transliteration' );
			start();
		} );
		stop();
		textareaIME.load( 'ta-bamini', function () {
			selector.selectLanguage( 'ta' );
			selector.selectIM( 'ta-bamini' );
			assert.strictEqual( textareaIME.getIM().id, 'ta-bamini',
				'Tamil inputmethod is changed to Tamil Bamini' );
			start();
		} );
		selector.disableIM();
		assert.strictEqual( textareaIME.isActive(), false, 'Selector is not active' );
		stop();
		textareaIME.load( 'kn-transliteration', function () {
			selector.selectLanguage( 'kn' );
			// selector.selectIM( 'kn-transliteration' ); Implicit
			assert.strictEqual( textareaIME.getIM().id, 'kn-transliteration',
				'Default inputmethod for Kannada is Kannada Transliteration' );
			start();
		} );
		stop();
		textareaIME.load( 'hi-transliteration', function () {
			selector.selectLanguage( 'hi' );
			textareaIME.enable();
			assert.strictEqual( textareaIME.getIM().id, 'hi-transliteration',
				'inputmethod is Hindi Transliteration' );
			selector.selectLanguage( 'ta' );
			assert.strictEqual( textareaIME.getIM().id, 'ta-bamini',
				'inputmethod for Tamil is Tamil Bamini' );
			start();
		} );

	} );

	QUnit.test( 'Preferences tests', 2, function ( assert ) {
		$.ime.preferences.registry.previousLanguages = [];
		$.ime.preferences.setLanguage( 'hi' );
		assert.strictEqual( $.ime.preferences.getPreviousLanguages().length, 1, 'Hindi added to previous languages' );
		// set it again
		$.ime.preferences.setLanguage( 'hi' );
		assert.strictEqual( $.ime.preferences.getPreviousLanguages().length, 1, 'Hindi not duplicated in previous languages' );
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

		test( opt.description, function() {
			var ime, $input;

			expect( opt.tests.length );
			$input = opt.$input;
			stop();

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
					equal( $input.val() || $input.text(), opt.tests[i].output, opt.tests[i].description );
					$input.val( '' );
					$input.text( '' );
				}
				start();
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

	// TODO: enhance.
	imeTest( {
		description: 'Oriya transliteration test',
		tests: [
			{ input: '\\~', output: '~', description: 'Oriya transliteration - \\~ -> ~' }
		],
		inputmethod: 'or-transliteration',
		$input: $( '<input>' ).attr( { id: 'or', type: 'text' } )
	} );

	imeTest( {
		description: 'Oriya InScript test',
		tests: [{ input: 'ka', output: 'କୋ' }],
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
			{ input: 'Sreeyaa', output: 'ஸ்ரேயா', description: 'Sreeyaa in Tamil transliteration for ஸ்ரேயா' }
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
			{ input: 'oMkaara', output: 'ओंकार', description: 'oMkaara (testing correct typing of oM as a simple anusvara)' }
		],
		inputmethod: 'mr-transliteration',
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
			{ input: 'kW', output: 'ಕೌ', description: 'kW for ಐದು in Kannada transliteration' }
		],
		inputmethod: 'kn-transliteration',
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
			{ input: 'bhaaShaaoM', output: 'भाषाओं', description: 'Hindi transliteration - bhaaShaaoM (testing correct typing of oM as a simple anusvara)' }
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
