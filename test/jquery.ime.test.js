( function ( $ ) {
	'use strict';

	var $textarea, textareaIME,
		$input, inputIME;

	QUnit.module( 'jquery.ime - $.fn.ime Tests', {
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
		assert.strictEqual( inputIME.active, false, 'ime is initially inactive' );
		assert.strictEqual( inputIME.context, '', 'context is initially empty' );
		assert.strictEqual( inputIME.inputmethod, null, 'inputmethod is initially null' );
		assert.strictEqual( inputIME.options.imePath, '../', 'imePath is "../" by default' );

		var $specialPath = $( '<textarea>' ),
			specialPath = '../test';
		$specialPath.ime( { imePath: specialPath } );
		assert.strictEqual( $specialPath.data( 'ime' ).options.imePath, specialPath,
							'imePath is defined correctly using options in the constructor' );
	} );

	QUnit.test( 'Selector tests', 3, function ( assert ) {
		$textarea.ime();
		textareaIME = $textarea.data( 'ime' );
		var selector = textareaIME.selector.data( 'imeselector' );
		assert.strictEqual( typeof selector, 'object', 'selector on textarea is defined' );

		assert.strictEqual( selector.active, false, 'selector is not active initially' );
		assert.strictEqual( selector.inputmethod, null, 'inputmethod is not enabled initially' );
	} );
}( jQuery ) );
