( function ( $ ) {
	'use strict';

	$.extend( $.ime.preferences, {
		registry: {
			isDirty: false,
			language : null,
			previousLanguages: [], // array of previous languages
			layoutHistory: [ 'system' ], // array containing previously used layouts
			layoutHistorySize: 5, // Max no. of input methods that will be saved including system input
			imes: {
				'en': 'system'
			}
		},

		setLanguage: function ( language ) {
			// Do nothing if there's no actual change
			if ( language === this.registry.language ) {
				return;
			}

			this.registry.language = language;
			this.registry.isDirty = true;
			if ( !this.registry.previousLanguages ) {
				this.registry.previousLanguages = [];
			}

			// Add to the previous languages, but avoid duplicates.
			if ( $.inArray( language, this.registry.previousLanguages ) === -1 ) {
				this.registry.previousLanguages.push( language );
			}
		},

		getLanguage: function () {
			return this.registry.language;
		},

		getDefaultLanguage: function () {
			return 'en';
		},

		getPreviousLanguages: function () {
			return this.registry.previousLanguages;
		},

		// Set the given IM as the last used for the language
		setIM: function ( inputMethod ) {
			if ( !this.registry.imes ) {
				this.registry.imes = {};
			}

			// Do nothing if there's no actual change
			if ( inputMethod === this.registry.imes[this.registry.language] ) {
				return;
			}

			this.registry.imes[this.getLanguage()] = inputMethod;
			this.registry.isDirty = true;
			this.saveLayoutHistory( inputMethod );
		},

		// Return the last used or the default IM for language
		getIM: function ( language ) {
			if ( !this.registry.imes ) {
				this.registry.imes = {};
			}
			return this.registry.imes[language] || $.ime.languages[language].inputmethods[0];
		},

		save: function () {
			// save registry in cookies or localstorage
		},

		load: function () {
			// load registry from cookies or localstorage
		},

		// save the current layout or input method in layoutHistory
		saveLayoutHistory: function ( inputMethod ) {
			// do not save if input method is system, or if it is already present in layoutHistory
			// using jquery's equivalent of array.indexOf since it is not supported in IE7,8.
			if ( inputMethod === 'system' || $.inArray( inputMethod, this.registry.layoutHistory ) !== -1 ) {
				return;
			}

			// layoutHistory is full. Remove the least recently used input method. The first 
			// position (or zeroth index) is always reserved for system input method. So the 
			// least recenlty used input method will reside at 2nd position (or 1st index) of layoutHistory
			if ( this.registry.layoutHistory.length === this.registry.layoutHistorySize ) {
				this.registry.layoutHistory.splice( 1, 1 );
			}
			this.registry.layoutHistory.push( inputMethod );

			// save layoutHistory in local storage
			if ( ( 'localStorage' in window ) && window['localStorage'] !== null ) {
				localStorage.setItem( "jquery.ime.layoutHistory", JSON.stringify( this.registry.layoutHistory ) );
			}
		},

		// return the last used layout or input method
		getPreviousLayout: function () {
			var layoutHistoryIndex = $.inArray( this.getIM( this.getLanguage() ), this.registry.layoutHistory );
			// currently using system input method (zeroth index)
			if ( layoutHistoryIndex === 0 ) {
				layoutHistoryIndex = this.registry.layoutHistory.length - 1;
			} else {
				--layoutHistoryIndex;
			}
			return this.registry.layoutHistory[layoutHistoryIndex];
		},

		// load previously used layouts from local storage
		loadLayoutHistory: function () {
			if ( ( 'localStorage' in window ) && window['localStorage'] !== null ) {
				if ( localStorage.getItem( "jquery.ime.layoutHistory" ) !== null ) {
					this.registry.layoutHistory = JSON.parse( localStorage.getItem( "jquery.ime.layoutHistory" ) );
				}
			}
		}
	} );
}( jQuery ) );
