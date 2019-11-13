( function ( $ ) {
	'use strict';

	var $textarea, textareaIME, imeTest, typeChars;

	function setCollapsedSelection( node, offset ) {
		var sel = window.getSelection(),
			range = document.createRange();

		range.setStart( node, offset );
		sel.removeAllRanges();
		sel.addRange( range );
	}

	QUnit.module( 'jquery.ime - $.fn.ime tests', {
		beforeEach: function () {
			$textarea = $( '<textarea>' );
			$textarea.ime();
			textareaIME = $textarea.data( 'ime' );
		},
		afterEach: function () {
		}
	} );

	QUnit.test( 'Initialization tests', function ( assert ) {
		var inputIME,
			$readonlyTextarea = $( '<textarea>' ).prop( 'readonly', true ),
			$disabledTextarea = $( '<textarea>' ).prop( 'disabled', true ),
			$noimeTextarea = $( '<textarea>' ).addClass( 'noime' ),
			$input = $( '<input>' ),
			$specialPath = $( '<textarea>' ),
			specialPath = '../test';

		assert.strictEqual( typeof $input.ime, 'function', 'ime function exists' );
		assert.strictEqual( typeof $input.data( 'ime' ), 'undefined', 'ime not initialized before calling ime()' );

		$input.ime();
		inputIME = $input.data( 'ime' );
		assert.strictEqual( typeof inputIME, 'object', 'ime is defined for a regular <input>' );
		assert.strictEqual( inputIME.isActive(), false, 'ime is initially inactive' );
		assert.strictEqual( inputIME.context, '', 'context is initially empty' );
		assert.strictEqual( inputIME.getIM(), null, 'inputmethod is initially null' );

		$specialPath.ime( { imePath: specialPath } );
		assert.strictEqual( $specialPath.data( 'ime' ).options.imePath, specialPath,
							'imePath is defined correctly using options in the constructor' );
		$.ime.setPath( '../' );
		$readonlyTextarea.ime();
		$disabledTextarea.ime();
		$noimeTextarea.ime();

		assert.strictEqual( $readonlyTextarea.data( 'ime' ), undefined, 'ime is not defined for a readonly <textarea>' );
		assert.strictEqual( $disabledTextarea.data( 'ime' ), undefined, 'ime is not defined for a disabled <textarea>' );
		assert.strictEqual( $noimeTextarea.data( 'ime' ), undefined, 'ime is not defined for a <textarea> with class "noime"' );
	} );

	QUnit.test( 'Custom event tests', function ( assert ) {
		var seen = { language: false, method: false },
			done = assert.async();

		$textarea.on( 'imeLanguageChange.test', function () {
			seen.language = true;
		} );
		$textarea.on( 'imeMethodChange.test', function () {
			seen.method = true;
		} );
		textareaIME.setLanguage( 'hi' );
		assert.ok( seen.language, 'imeLanguageChange fires' );
		$textarea.off( 'imeLanguageChange.test' );

		textareaIME.load( 'hi-transliteration' ).then( function () {
			textareaIME.setIM( 'hi-transliteration' );
			assert.ok( seen.method, 'imeMethodChange fires' );
			$textarea.off( 'imeMethodChange.test' );
			done();
		} );
	} );

	QUnit.test( 'Selector tests', function ( assert ) {
		var selector = textareaIME.selector.data( 'imeselector' ),
			done = assert.async( 4 );
			// nonBrokenImeName, brokenImeName, saveBrokenImeSource;

		assert.strictEqual( typeof selector, 'object', 'selector on textarea is defined' );

		assert.strictEqual( textareaIME.isActive(), false, 'selector is not active initially' );
		assert.strictEqual( textareaIME.getIM(), null, 'inputmethod is not enabled initially' );

		textareaIME.enable();
		assert.strictEqual( textareaIME.isActive(), true, 'selector is active after enabling' );

		textareaIME.load( 'hi-transliteration' ).done( function () {
			selector.selectLanguage( 'hi' );
			selector.selectIM( 'hi-transliteration' );
			assert.strictEqual( textareaIME.getIM().id, 'hi-transliteration',
				'Hindi inputmethod is Hindi Transliteration' );
			done();
		} );
		selector.disableIM();
		assert.strictEqual( textareaIME.isActive(), false, 'selector is not active' );

		textareaIME.load( 'ta-transliteration' ).done( function () {
			selector.selectLanguage( 'ta' );
			selector.selectIM( 'ta-transliteration' );
			assert.strictEqual( textareaIME.getIM().id, 'ta-transliteration',
				'Tamil inputmethod is defaulted to Tamil Transliteration' );
			done();
		} );

		textareaIME.load( 'ta-bamini' ).done( function () {
			selector.selectLanguage( 'ta' );
			selector.selectIM( 'ta-bamini' );
			assert.strictEqual( textareaIME.getIM().id, 'ta-bamini',
				'Tamil inputmethod is changed to Tamil Bamini' );
			done();
		} );

		selector.disableIM();
		assert.strictEqual( textareaIME.isActive(), false, 'Selector is not active' );
		selector.selectLanguage( 'kn' );
		/* XXX Disabled. For some reason it fails.
		assert.strictEqual( textareaIME.getIM(), null,
			'Default inputmethod for Kannada is system' );
		*/

		textareaIME.load( 'hi-transliteration' ).done( function () {
			selector.selectLanguage( 'hi' );
			textareaIME.enable();
			assert.strictEqual( textareaIME.getIM().id, 'hi-transliteration',
				'inputmethod is Hindi Transliteration' );
			selector.selectLanguage( 'ta' );
			/* XXX Disabled. For some reason it fails.
			assert.strictEqual( textareaIME.getIM().id, 'ta-bamini',
				'inputmethod for Tamil is Tamil Bamini' );
			*/
			done();
		} );

		/* XXX Disabled. For some reason it fails.
		textareaIME.load( 'invalid-ime-id' ).fail( function () {
			assert.strictEqual( textareaIME.getIM(), null,
				'inputmethod loading failed.' );
			done()
		} );
		*/

		/* XXX Disabled. For some reason it fails.
		// Negative test: trying to load an IME with a broken URL
		nonBrokenImeName = 'system';
		brokenImeName = 'ml-inscript';
		saveBrokenImeSource = $.ime.sources[ brokenImeName ].source;
		$.ime.sources[ brokenImeName ].source = 'This source is wrong';
		selector.selectIM( brokenImeName );
		assert.strictEqual( $.ime.preferences.getIM( 'ml' ), nonBrokenImeName,
							'Trying to load an IME with a broken URL does not change the current IME' );
		$.ime.sources[ brokenImeName ].source = saveBrokenImeSource;
		*/
	} );

	QUnit.test( 'Selector decideLanguage tests', function ( assert ) {
		var selector = textareaIME.selector.data( 'imeselector' ),
			originalLang;
		originalLang = $.ime.preferences.registry.language;

		$.ime.preferences.registry.language = null;
		assert.strictEqual( selector.decideLanguage(), 'en',
			'Selects the default lang from preference when no lang attr is set' );

		$textarea.attr( 'lang', 'hi' );
		$.ime.preferences.registry.language = null;
		selector.$element.trigger( 'focus' );
		assert.strictEqual( selector.decideLanguage(), 'hi',
			'Selects the language that has been set as an attribute' );

		$textarea.attr( 'lang', 'hi' );
		$.ime.preferences.registry.language = 'ta';
		selector.$element.trigger( 'focus' );
		assert.strictEqual( selector.decideLanguage(), 'ta',
			'Overrides the lang attr and uses user preference' );

		$textarea.attr( 'lang', 'sdas' );
		$.ime.preferences.registry.language = null;
		selector.$element.trigger( 'focus' );
		assert.strictEqual( selector.decideLanguage(), 'en',
			'Selects default lang when lang attr is wrong or IM doesnt exist' );

		$.ime.preferences.registry.language = originalLang;

	} );

	QUnit.test( 'Preferences tests', function ( assert ) {
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
		assert.strictEqual( $.ime.preferences.getIM( 'hi' ), 'hi-inscript', 'Hindi Inscript is the preferred IM for Hindi' );
		assert.strictEqual( $.ime.preferences.getIM( 'kn' ), 'kn-inscript', 'Kannada Inscript is the preferred IM for Kannada' );
	} );

	QUnit.test( 'Utility functions tests', function ( assert ) {
		var setLanguageResult;

		assert.strictEqual( textareaIME.getLanguage(), null, 'ime language is initially null' );
		setLanguageResult = textareaIME.setLanguage( 'noSuchLanguage' );
		assert.strictEqual( setLanguageResult, false, 'Setting an invalid language returns false' );
		assert.strictEqual( textareaIME.getLanguage(), null, 'Language does not change after an invalid setting' );
		setLanguageResult = textareaIME.setLanguage( 'ru' );
		assert.strictEqual( setLanguageResult, true, 'Setting a valid language returns true' );
		assert.strictEqual( textareaIME.getLanguage(), 'ru', 'Language changed after setting a valid value' );
	} );

	QUnit.test( 'Default input method for language without input methods test', function ( assert ) {
		$.ime.preferences.setLanguage( 'es' );
		assert.strictEqual( $.ime.preferences.getIM(), 'system', 'Use native keyboard is selected by default' );
	} );

	QUnit.module( 'jquery.ime - input method rule files test', {
		beforeEach: function () {
		},

		afterEach: function () {
		}
	} );

	// eslint-disable-next-line no-jquery/no-each-util
	$.each( $.ime.sources, function ( inputmethodId ) {
		var testDescription;

		// The internal input method name helps find it in the source,
		// and since it's always in Latin, it helps isolate RTL names
		// from the subsequent numbers
		testDescription = 'Input method rules file test for input method ' +
			$.ime.sources[ inputmethodId ].name + ' - ' + inputmethodId;

		QUnit.test( testDescription, function ( assert ) {
			var ime,
				done = assert.async(),
				$input = $( '<input>' );

			$input.attr( { id: inputmethodId, type: 'text' } );
			$input.appendTo( '#qunit-fixture' );
			$input.ime();
			$input.trigger( 'focus' );
			ime = $input.data( 'ime' );

			ime.load( inputmethodId ).done( function () {
				assert.ok( $.ime.inputmethods[ inputmethodId ], 'Rules file for ' + inputmethodId + ' exist and loaded correctly.' );
				done();
			} );
		} );
	} );

	// eslint-disable-next-line no-jquery/no-each-util
	$.each( $.ime.languages, function ( languageCode ) {
		var language = $.ime.languages[ languageCode ];

		QUnit.test( 'Input method rules test for language ' + language.autonym, function ( assert ) {
			var i, inputmethod,
				inputmethods = language.inputmethods;

			for ( i = 0; i < inputmethods.length; i++ ) {
				inputmethod = $.ime.sources[ inputmethods[ i ] ];
				assert.ok( inputmethod, 'Definition for ' + inputmethods[ i ] + ' exist.' );
			}
		} );
	} );

	QUnit.module( 'jquery.ime - input method rules tests', {
		beforeEach: function () {
		},

		afterEach: function () {
		}
	} );

	/**
	 * A general framework for testing a keyboard layout.
	 * @param {Object} [options]
	 */
	imeTest = function ( options ) {
		var opt = $.extend( {
			description: '', // Test description
			inputType: 'input', // input, textarea, or contenteditable
			tests: [],
			inputmethod: '' // The input method name.
		}, options );

		QUnit.test( opt.description, function ( assert ) {
			var ime, $input,
				done = assert.async();

			if ( opt.inputType === 'textarea' ) {
				$input = $( '<textarea>' );
				opt.inputType = 'textarea';
			} else if ( opt.inputType === 'contenteditable' ) {
				$input = $( '<div>' ).prop( 'contentEditable', 'true' );
			} else {
				$input = $( '<input>' );
			}

			$input.attr( { id: opt.inputmethod, type: 'text' } );

			$input.appendTo( '#qunit-fixture' );
			$input.ime();
			$input.trigger( 'focus' );

			ime = $input.data( 'ime' );

			ime.load( opt.inputmethod ).done( function () {
				var i, imeSelector, imesettingLabel;

				imeSelector = $input.data( 'imeselector' );
				imeSelector.selectIM( opt.inputmethod );
				ime.enable();

				imesettingLabel = imeSelector.$imeSetting.find( 'a.ime-name' ).text();
				QUnit.strictEqual( imesettingLabel, $.ime.sources[ opt.inputmethod ].name,
					'IME selector shows ' + $.ime.sources[ opt.inputmethod ].name );
				for ( i = 0; i < opt.tests.length; i++ ) {
					// Simulate pressing keys for each of the sample characters
					typeChars( $input, opt.tests[ i ].input );

					// The actual check
					QUnit.strictEqual(
						$input.val() || $input.text(),
						opt.tests[ i ].output,
						opt.tests[ i ].description + ' - ' + opt.inputType
					);

					$input.val( '' );
					$input.text( '' );
					$input.html( '' );
				}

				done();
			} );
		} );
	};

	/* global testFixtures */
	// testFixtures is defined in jquery.ime.test.fixtures.js
	testFixtures.forEach( function ( fixture ) {
		imeTest( fixture );
		if ( fixture.inputType === undefined ) {
			// Run tests for content editable divs too
			fixture.inputType = 'contenteditable';
			imeTest( fixture );
		}
	} );

	/**
	 * Basic sendkey-implementation. Type some characters into an input.
	 *
	 * @param {jQuery} $input jQuery input element.
	 * @param {string|Array} characters Either a string or an array of pairs of character
	 * and boolean altKey value
	 */
	typeChars = function ( $input, characters ) {
		var i, character, altKeyValue, shiftKeyValue, code, event, replacementSkipped, textNode,
			ime = $input.data( 'ime' ),
			contentEditable = $input.is( '[contenteditable]' ),
			len = characters.length;

		for ( i = 0; i < len; i++ ) {
			// For tests of non-extended keypresses, this is just a string.
			// for tests of extended keypresses, this is an array of arrays,
			// where each member is a pair consisting of a character to type
			// and the boolean value for altKey, saying whether Alt was
			// depressed or not.
			if ( typeof ( characters ) === 'string' ) {
				character = characters[ i ];
				altKeyValue = false;
			} else {
				character = characters[ i ][ 0 ];
				altKeyValue = characters[ i ][ 1 ] || false;
				shiftKeyValue = characters[ i ][ 2 ] || false;
			}

			// Get the key code. Events use codes and not chars.
			code = character.charCodeAt( 0 );
			if ( shiftKeyValue ) {
				ime.shifted = true;
			}
			// Trigger event and undo if prevented
			event = new jQuery.Event( 'keypress', {
				keyCode: code,
				which: code,
				charCode: code,
				altKey: altKeyValue
			} );

			// False positive on variable-pattern rule
			// eslint-disable-next-line no-jquery/variable-pattern
			replacementSkipped = $input.triggerHandler( event );

			if ( shiftKeyValue ) {
				ime.shifted = false;
			}

			if ( replacementSkipped ) {
				if ( contentEditable ) {
					$input.text( $input.text() + character );
					textNode = $input[ 0 ].firstChild;
					setCollapsedSelection( textNode, textNode.nodeValue.length );
				} else {
					$input.val( $input.val() + character );
				}
			}
		}
	};
}( jQuery ) );
