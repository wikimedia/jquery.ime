(function($) {"use strict";
	var JQueryIME = function(element, options) {
		this.$element = $(element);
		this.options = $.extend({}, $.fn.ime.defaults, options);
		this.active = false;
		this.$imeSetting = $('<div>').addClass("ime-setting dropdown").append($('<a>').addClass('ime-name').attr('href', '#').addClass('dropdown-toggle').text("Select"));
		this.$menu = $('<ul>').addClass("ime-menu dropdown-menu");
		this.inputmethod = null;
		this.keybuffer = '';
		this.shown = false;
		this.init();
		this.listen();
	};

	JQueryIME.prototype = {
		constructor : JQueryIME,
		inputmethods : {},
		languages : {},
		_positionSettings : function() {
			var position = this.$element.position();
			this.$imeSetting.css('top', position.top + this.$element.outerHeight());
			this.$imeSetting.css('left', position.left + this.$element.outerWidth() - this.$imeSetting.outerWidth());
		},

		_helpLink : function() {
			return $("<li>").append($('<a>').attr('href', '#').text("Help"));
		},
		_toggleMenuItem : function() {
			return $("<li>").append($('<a>').attr('href', '#').text("Enable IME"));
		},
		_getCaretPosition : function() {
			var el = this.$element.get(0), start = 0, end = 0;
			if ('selectionStart' in el) {
				start = el.selectionStart;
				end = el.selectionEnd;
			} else if ('selection' in document) {
				el.focus();
				var Sel = document.selection.createRange();
				var SelLength = document.selection.createRange().text.length;
				Sel.moveStart('character', -el.value.length);
				start = Sel.text.length - SelLength;
				end = Sel.text.length;
			}
			return [start, end];

		},
		_replaceText : function(replacement, start, end) {
			this.$element.textSelection('encapsulateSelection', {
				peri : replacement,
				replace : true,
				selectPeri : false,
				selectionStart : start,
				selectionEnd : end
			});
		},

		select : function(e) {
			var inputmethodId = $(e.target).data('ime-inputmethod');
			if (!inputmethodId) {
				this.$menu.hide();
				e.stopPropagation();
				return;
			}
			this.load(inputmethodId);
			this.inputmethod = $(document).data('ime-inputmethods')[inputmethodId];
			this.inputmethod.id = inputmethodId;
			this.$element.focus();
			$('.ime-menu').hide();
			var name = this.inputmethod.name;
			// FIXME i18n
			this.$imeSetting.find('a.ime-name').text(name);
			this.$menu.hide();
			e.stopPropagation();
		},
		prepareInputMethods : function() {
			var that = this;
			$.each(this.languages, function(language, inputmethods) {
				var $language = $("<li>").addClass("dropdown").append($('<a>').attr('href', '#').addClass('dropdown-toggle').text(language)), $inputMethods = $('<ul>').addClass('dropdown-menu sub-menu');
				$.each(inputmethods, function(index, inputmethod) {
					var name = $(document).data('ime-inputmethods')[inputmethod].name;
					// FIXME i18n
					var $inputMethod = $("<li>").append($('<a>').attr('href', '#').data('ime-inputmethod', inputmethod).text(name));
					$inputMethods.append($inputMethod);
				});
				$language.append($inputMethods);
				that.$menu.append($language);
			});
		},
		init : function() {
			if (!$(document).data('ime-inputmethods')) {
				$(document).data('ime-inputmethods', this.inputmethods);
			}
			this.$menu.append(this._toggleMenuItem());
			this.prepareInputMethods();
			this.$menu.append(this._helpLink());
			this.$imeSetting.append(this.$menu)
			this.$element.after(this.$imeSetting);
			this._positionSettings();
		},
		listen : function() {
			this.$menu.on('click', 'li', $.proxy(this.select, this));
			this.$element.on('focus', $.proxy(this.focus, this)).on('keypress', $.proxy(this.keypress, this)).on('keyup', $.proxy(this.keyup, this));
			this.$imeSetting.on('click', $.proxy(this.settings, this));
		},
		focus : function(e) {
			$('.ime-setting').hide();
			this.$imeSetting.show();
		},
		transliterate : function(str, keybuffer, extended) {
			if (this.inputmethod.transliterate) {
				return this.inputmethod.transliterate.call(str, keybuffer);
			}
			var rules = this.inputmethod.extended_keyboard && extended ? this.inputmethod.rules_x : this.inputmethod.rules;
			for (var i = 0; i < rules.length; i++) {
				var regex = new RegExp(rules[i][0] + '$');
				if (regex.test(str)// Input string match
				&& (rules[i][1].length === 0// Keybuffer match not required
				|| (// Keybuffer match specified, so it should be met
					rules[i][1].length > 0 && new RegExp(rules[i][1] + '$').test(keyBuffer)
				)
				)) {
					return str.replace(regex, rules[i][2]);
				}
			}
			// No matches, return the input
			return str;

		},
		/**
		 * Get the n characters in str that immediately precede pos
		 * Example: lastNChars( "foobarbaz", 5, 2 ) == "ba"
		 * @param str String to search in
		 * @param pos Position in str
		 * @param n Number of characters to go back from pos
		 * @return Substring of str, at most n characters long, immediately preceding pos
		 */
		_lastNChars : function(str, pos, n) {
			if (n === 0) {
				return '';
			} else if (pos <= n) {
				return str.substr(0, pos);
			} else {
				return str.substr(pos - n, n);
			}
		},

		/**
		 * Find the point at which a and b diverge, i.e. the first position
		 * at which they don't have matching characters.
		 * @param a String
		 * @param b String
		 * @return Position at which a and b diverge, or -1 if a == b
		 */
		_firstDivergence : function(a, b) {
			var minLength = a.length < b.length ? a.length : b.length;
			for (var i = 0; i < minLength; i++) {
				if (a.charCodeAt(i) !== b.charCodeAt(i)) {
					return i;
				}
			}
			return -1;
		},
		keypress : function(e) {
			if (!this.inputmethod)
				return true;
			if (e.which == 8) {// Backspace
				// Blank the keybuffer
				this.keybuffer = '';
				return true;
			}
			if ( typeof this.inputmethod.rules === "string") {
				this.inputmethod = $(document).data('ime-inputmethods')[this.inputmethod.id];
			}

			var c = String.fromCharCode(e.which);
			// Get the current caret position. The user may have selected text to overwrite,
			// so get both the start and end position of the selection. If there is no selection,
			// startPos and endPos will be equal.
			var pos = this._getCaretPosition(), startPos = pos[0], endPos = pos[1];
			// Get the last few characters before the one the user just typed,
			// to provide context for the transliteration regexes.
			// We need to append c because it hasn't been added to $this.val() yet
			var input = this._lastNChars(this.$element.val() || this.$element.text(), startPos, this.inputmethod.lookbackLength) + c;
			var replacement = this.transliterate(input, this.keybuffer, e.altKey);
			// Update the key buffer
			this.keybuffer += c;
			if (this.keybuffer.length > this.inputmethod.keyBufferLength) {
				// The buffer is longer than needed, truncate it at the front
				this.keybuffer = this.keybuffer.substring(this.keybuffer.length - this.inputmethod.keyBufferLength);
			}
			// textSelection() magic is expensive, so we avoid it as much as we can
			if (replacement == input) {
				return true;
			}
			// Drop a common prefix, if any
			// TODO: Profile this, see if it's any faster
			var divergingPos = this._firstDivergence(input, replacement);
			input = input.substring(divergingPos);
			replacement = replacement.substring(divergingPos);
			this._replaceText(replacement, startPos - input.length + 1, endPos);
			e.stopPropagation();
			return false;
		},
		isActive : function() {
			return this.active;
		},
		settings : function(e) {
			this.$menu.show();
		},
		loader : function(name) {
			var that = this;
			if ( typeof this.inputmethods[name].rules !== "string") {
				return;
			}
			var hasOwn = Object.prototype.hasOwnProperty;
			$.ajax({
				url : "../" + this.inputmethods[name].rules,
				dataType : "script",
				success : function(script, textStatus) {
					console.log(name + " loaded");
				},
				failure : function(jqxhr, settings, exception) {
					console.log(" Triggered ajaxError handler." + exception);
				}
			});
			return true;
		},
		load : function(name) {
			if (!this.inputmethods[name].ready) {
				this.loader(name);
			}
		},
	};
	$.fn.ime = function(option) {
		return this.each(function() {
			var $this = $(this), data = $this.data('ime'), options = typeof option === 'object' && option;
			if (!data) {
				$this.data('ime', ( data = new JQueryIME(this, options)));
			}
			if ( typeof option === 'string') {
				data[option]();
			}
		});

	};
	$.fn.ime.Constructor = JQueryIME;
	// default options
	$.fn.ime.defaults = {

	};
	$.fn.ime.add = function(name, definition) {
		var inputmethods = $(document).data('ime-inputmethods') || {};
		inputmethods[name] = definition;
		$(document).data('ime-inputmethods', inputmethods);
	};
	$(function() {
		$('body').on('focus.ime.data-api', '[data-ime-enabled="true"]', function(e) {
			var $this = $(this);
			if ($this.data('ime')) {
				return;
			}
			e.preventDefault();
			$this.ime($this.data());
		});
	});
	// private function for debugging
	function debug($obj) {
		if (window.console && window.console.log) {
			window.console.log($obj);
		}
	}

})(window.jQuery);
