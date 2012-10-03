( function ( $ ) {
	'use strict';

	var capitalize = {
		id: "en-capitalize",
		name: "English Capitalize",
		description: "Capitalize all the letters",
		date: "2012-10-03",
		URL: "http://github.com/wikimedia/jquery.ime",
		author: "Santhosh Thottingal",
		license: "CC-BY-SA",
		version: "1.0",
		layers: 2,
		contextLength: 0,
		maxKeyLength: 2,
		patterns: [ [ '[a-z]', function ( $1 ) {
			return $1.toUpperCase();
		} ] ],
	};

	$.ime.register( capitalize );

}( jQuery ) );
