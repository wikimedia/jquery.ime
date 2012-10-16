( function ( $ ) {
	'use strict';

	var $textarea, $input, textareaIME, inputIME;

	QUnit.module( 'jquery.ime - $.fn.ime Tests', {
		setup: function () {
			$textarea = $( '<textarea>' );
			$input = $( '<input>' );
		},
		teardown: function () {
		}
	} );

	QUnit.test( 'Initialization tests', 8, function ( assert ) {
		assert.strictEqual( typeof $textarea.ime, 'function', 'ime function exists' );
		assert.strictEqual( typeof $textarea.data('ime'), 'undefined', 'ime not initialized before calling ime()' );

		$input.ime();
		inputIME = $input.data( 'ime' );
		assert.strictEqual( inputIME.active, false, 'ime is initially inactive' );
		assert.strictEqual( inputIME.context, '', 'context is initially empty' );
		assert.strictEqual( inputIME.inputmethod, null, 'inputmethod is initially null' );
		assert.strictEqual( inputIME.options.imePath, '../', 'imePath is "../" by default' );
		assert.strictEqual( typeof inputIME.selector, 'object', 'selector is defined' );

		$textarea.ime();
		textareaIME = $textarea.data( 'ime' );
		assert.strictEqual( typeof textareaIME, 'object', '<textarea> ime initialized after calling ime()' );
	} );
}( jQuery ) );
