/* global $ */
/* eslint-disable no-jquery/no-global-selector */
$( function () {
	'use strict';

	var $ced, ime, $imeSelector, $langSelector;

	function listInputMethods( lang ) {
		$imeSelector.empty();
		ime.getInputMethods( lang ).forEach( function ( inputMethod ) {
			$imeSelector.append(
				$( '<option>' ).attr( 'value', inputMethod.id ).text( inputMethod.name )
			);
		} );
		$imeSelector.trigger( 'change' );
	}

	$.ime.setPath( '../../' );
	$ced = $( '#ced' );
	// Initialise IME on this element
	$ced.ime( {
		showSelector: false
	} );
	// Get the IME object
	ime = $ced.data( 'ime' );
	ime.enable();

	$( '#bold' ).on( 'click', function () {
		document.execCommand( 'bold', false, null );
	} );

	$( '#italic' ).on( 'click', function () {
		document.execCommand( 'italic', false, null );
	} );

	$( '#underline' ).on( 'click', function () {
		document.execCommand( 'underline', false, null );
	} );

	// language and input method list box widgets
	$langSelector = $( 'select#language' );
	$imeSelector = $( 'select#imeSelector' );

	ime.getLanguageCodes().forEach( function ( lang ) {
		$langSelector.append(
			$( '<option>' ).attr( 'value', lang ).text( ime.getAutonym( lang ) )
		);
	} );
	$langSelector.on( 'change', function () {
		var lang = $langSelector.val() || null;
		ime.setLanguage( lang );
	} );
	$ced.on( 'imeLanguageChange', function () {
		listInputMethods( ime.getLanguage() );
	} );

	$imeSelector.on( 'change', function () {
		var inputMethodId = $imeSelector.val();
		ime.load( inputMethodId ).done( function () {
			ime.setIM( inputMethodId );
		} );
	} );
} );
