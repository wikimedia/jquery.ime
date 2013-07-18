( function ( $ ) {
	'use strict';

	var $textarea, textareaIME, imeTest, typeChars, caretTests;

	QUnit.module( 'jquery.ime - $.fn.ime tests', {
		setup: function () {
			$textarea = $( '<textarea>' );
			$textarea.ime();
			textareaIME = $textarea.data( 'ime' );
		},
		teardown: function () {
		}
	} );

	QUnit.test( 'Initialization tests', 11, function ( assert ) {
		var inputIME,
			$readonlyTextarea = $( '<textarea readonly>' ),
			$disabledTextarea = $( '<textarea disabled>' ),
			$noimeTextarea = $( '<textarea class="noime">' ),
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
		assert.strictEqual( inputIME.options.imePath, '../', 'imePath is "../" by default' );

		$specialPath.ime( { imePath: specialPath } );
		assert.strictEqual( $specialPath.data( 'ime' ).options.imePath, specialPath,
							'imePath is defined correctly using options in the constructor' );

		$readonlyTextarea.ime();
		$disabledTextarea.ime();
		$noimeTextarea.ime();

		assert.strictEqual( $readonlyTextarea.data( 'ime' ), undefined, 'ime is not defined for a readonly <textarea>' );
		assert.strictEqual( $disabledTextarea.data( 'ime' ), undefined, 'ime is not defined for a disabled <textarea>' );
		assert.strictEqual( $noimeTextarea.data( 'ime' ), undefined, 'ime is not defined for a <textarea> with class "noime"' );
	} );

	QUnit.test( 'Selector tests', 13, function ( assert ) {
		var selector = textareaIME.selector.data( 'imeselector' ),
			nonBrokenImeName, brokenImeName, saveBrokenImeSource;

		assert.strictEqual( typeof selector, 'object', 'selector on textarea is defined' );

		assert.strictEqual( textareaIME.isActive(), false, 'selector is not active initially' );
		assert.strictEqual( textareaIME.getIM(), null, 'inputmethod is not enabled initially' );

		textareaIME.enable();
		assert.strictEqual( textareaIME.isActive(), true, 'selector is active after enabling' );

		QUnit.stop();
		textareaIME.load( 'hi-transliteration', function () {
			selector.selectLanguage( 'hi' );
			selector.selectIM( 'hi-transliteration' );
			assert.strictEqual( textareaIME.getIM().id, 'hi-transliteration',
				'Hindi inputmethod is Hindi Transliteration' );
			QUnit.start();
		} );
		selector.disableIM();
		assert.strictEqual( textareaIME.isActive(), false, 'selector is not active' );

		QUnit.stop();
		textareaIME.load( 'ta-transliteration', function () {
			selector.selectLanguage( 'ta' );
			selector.selectIM( 'ta-transliteration' );
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
		selector.selectLanguage( 'kn' );
		assert.strictEqual( textareaIME.getIM(), null,
			'Default inputmethod for Kannada is system' );

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

		// Negative test: trying to load an IME with a broken URL
		nonBrokenImeName = 'system';
		brokenImeName = 'ml-inscript';
		saveBrokenImeSource = $.ime.sources[brokenImeName].source;
		$.ime.sources[brokenImeName].source = 'This source is wrong';
		QUnit.stop();
		selector.selectIM( brokenImeName );
		QUnit.start();
		assert.strictEqual( $.ime.preferences.getIM( 'ml' ), nonBrokenImeName,
							'Trying to load an IME with a broken URL does not change the current IME' );
		$.ime.sources[brokenImeName].source = saveBrokenImeSource;
	} );

	QUnit.test( 'Selector decideLanguage tests', 4, function ( assert ) {
		var selector = textareaIME.selector.data( 'imeselector' ), originalLang;
		originalLang = $.ime.preferences.registry.language;

		$.ime.preferences.registry.language = null;
		assert.strictEqual( selector.decideLanguage(), 'en',
			'Selects the default lang from preference when no lang attr is set' );

		$textarea.attr( 'lang', 'hi' );
		$.ime.preferences.registry.language = null;
		selector.$element.focus();
		assert.strictEqual( selector.decideLanguage(), 'hi',
			'Selects the language that has been set as an attribute' );

		$textarea.attr( 'lang', 'hi' );
		$.ime.preferences.registry.language = 'ta';
		selector.$element.focus();
		assert.strictEqual( selector.decideLanguage(), 'ta',
			'Overrides the lang attr and uses user preference' );

		$textarea.attr( 'lang', 'sdas' );
		$.ime.preferences.registry.language = null;
		selector.$element.focus();
		assert.strictEqual( selector.decideLanguage(), 'en',
			'Selects default lang when lang attr is wrong or IM doesnt exist' );

		$.ime.preferences.registry.language = originalLang;

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
		assert.strictEqual( $.ime.preferences.getIM( 'hi' ), 'hi-inscript', 'Hindi Inscript is the preferred IM for Hindi' );
		assert.strictEqual( $.ime.preferences.getIM( 'kn' ), 'kn-inscript', 'Kannada Inscript is the preferred IM for Kannada' );
	} );

	QUnit.test( 'Utility functions tests', 12, function ( assert ) {
		var setLanguageResult;

		assert.strictEqual( textareaIME.lastNChars( 'foobarbaz', 5, 2 ), 'ba', 'lastNChars works with short buffer.' );
		assert.strictEqual( textareaIME.lastNChars( 'foobarbaz', 2, 5 ), 'fo', 'lastNChars works with long buffer.' );

		assert.strictEqual( textareaIME.firstDivergence( 'abc', 'abc' ), -1, 'firstDivergence - equal strings' );
		assert.strictEqual( textareaIME.firstDivergence( 'a', 'b' ), 0, 'firstDivergence - different one-letter strings' );
		assert.strictEqual( textareaIME.firstDivergence( 'a', 'bb' ), 0, 'firstDivergence - different strings, different lengths' );
		assert.strictEqual( textareaIME.firstDivergence( 'abc', 'abd' ), 2, 'firstDivergence - different strings with equal beginnings' );
		assert.strictEqual( textareaIME.firstDivergence( 'abcd', 'abd' ), 2, 'firstDivergence - different strings, equal beginnings, different lengths' );

		assert.strictEqual( textareaIME.getLanguage(), null, 'ime language is initially null' );
		setLanguageResult = textareaIME.setLanguage( 'noSuchLanguage' );
		assert.strictEqual( setLanguageResult, false, 'Setting an invalid language returns false' );
		assert.strictEqual( textareaIME.getLanguage(), null, 'Language does not change after an invalid setting' );
		setLanguageResult = textareaIME.setLanguage( 'ru' );
		assert.strictEqual( setLanguageResult, true, 'Setting a valid language returns true' );
		assert.strictEqual( textareaIME.getLanguage(), 'ru', 'Language changed after setting a valid value' );
	} );

	function caretTest( text, start, end ) {
		QUnit.test( 'Curser positioning tests -'+text+ '('+ start + ','+ end + ')' , 1, function ( assert ) {
			var $ced = $( '<div contenteditable="true">' ),
				correction,
				position,
				ime;

			$( '#qunit-fixture' ).append( $ced );
			$ced.ime();
			ime = $ced.data( 'ime' );

			$ced.html( text );
			correction = ime.setCaretPosition( $ced, { start: start, end: end } );
			position = ime.getCaretPosition( $ced );
			assert.deepEqual( position, [start - correction[0], end + correction[1] ], 'Caret is at ' + ( start - correction[0] ) + ', ' + ( end + correction[1] ) );
		} );
	}

	caretTests = [
		['ക്', 0, 0],
		['ക്', 1, 1],
		['ന്ത്', 1, 3],
		['ന്ത്', 1, 4],
		['ക്ത്ര', 1, 4]
	];

	$.each( caretTests, function( i, test ) {
		caretTest( test[0], test[1], test[2] );
	} );

	QUnit.module( 'jquery.ime - input method rules tests', {
		setup: function () {
		},

		teardown: function () {
		}
	} );

	/**
	 * A general framework for testing a keyboard layout.
	 */
	imeTest = function ( options ) {
		var opt = $.extend( {
			description: '', // Test description
			multiline: false,
			inputType: 'input', // input, textarea, or contenteditable
			tests: [],
			inputmethod: '' // The input method name.
		}, options );

		QUnit.test( opt.description, function () {
			var ime, $input;

			QUnit.expect( opt.tests.length );

			if ( opt.multiline && opt.inputType  === 'input' ) {
				$input = $( '<textarea>' );
				opt.inputType = 'textarea';
			} else if ( opt.inputType === 'contenteditable' ) {
				$input = $( '<div contenteditable="true">' );
			} else {
				$input = $( '<input>' );
			}

			$input.attr( { id: opt.inputmethod, type: 'text' } );
			QUnit.stop();

			$input.appendTo( '#qunit-fixture' );
			$input.ime();
			$input.focus();

			ime = $input.data( 'ime' );

			ime.load( opt.inputmethod, function () {
				var i;

				ime.setIM( opt.inputmethod );
				ime.enable();

				for ( i = 0 ; i < opt.tests.length; i++ ) {
					// Simulate pressing keys for each of the sample characters
					typeChars( $input, opt.tests[i].input );

					// The actual check
					QUnit.strictEqual(
						$input.val() || $input.text(),
						opt.tests[i].output,
						opt.tests[i].description + " - " + opt.inputType
					);

					$input.val( '' );
					$input.text( '' );
					$input.html( '' );
				}

				QUnit.start();
			} );
		} );
	};

	// testFixtures is defined in jquery.ime.test.fixtures.js
	$.each( testFixtures, function ( i, fixture ) {
		imeTest( fixture );
		// Run all tests for content editable divs too
		fixture.inputType = 'contenteditable';
		imeTest( fixture );
	} );

	/**
	 * Basic sendkey-implementation. Type some characters into an input.
	 *
	 * @param $input jQuery input element.
	 * @param characters Either a string or an array of pairs of character
	 * and boolean altKey value
	 */
	typeChars = function ( $input, characters ) {
		var i, character, altKeyValue, code, event, eventResult,
			contentEditable = $input.is( '[contenteditable]' ),
			len = characters.length;

		for ( i = 0; i < len; i++ ) {
			// For tests of non-extended keypresses, this is just a string.
			// for tests of extended keypresses, this is an array of arrays,
			// where each member is a pair consisting of a character to type
			// and the boolean value for altKey, saying whether Alt was
			// depressed or not.
			if ( typeof( characters ) === 'string' ) {
				character = characters[i];
				altKeyValue = false;
			} else {
				character = characters[i][0];
				altKeyValue = characters[i][1];
			}

			// Get the key code. Events use codes and not chars.
			code = character.charCodeAt(0);

			// Trigger event and undo if prevented
			event = new jQuery.Event( 'keypress', {
				keyCode: code,
				which: code,
				charCode: code,
				altKey: altKeyValue
			} );

			eventResult = $input.triggerHandler( event );

			if ( eventResult ) {
				if ( contentEditable ) {
					$input.text( $input.text() + character );
				} else {
					$input.val( $input.val() + character );
				}
			}
		}
	};
}( jQuery ) );
