( function ( $ ) {
	'use strict';

	var $textarea, $input;

	QUnit.module( 'jquery.ime - $.fn.ime Tests', {
		setup: function () {
			$textarea = $( '<textarea>' );
			$input = $( '<input>' );
		},
		teardown: function () {
		}
	} );

	QUnit.test( 'Initialization', 3, function ( assert ) {
		assert.strictEqual( typeof $textarea.ime, 'function', 'ime function exists' );
		assert.strictEqual( typeof $textarea.data('ime'), 'undefined', 'ime not initialized before calling ime()' );

		$textarea.ime();
		assert.strictEqual( typeof $textarea.data('ime'), 'object', 'ime initialized after calling ime()' );
	} );
}( jQuery ) );
