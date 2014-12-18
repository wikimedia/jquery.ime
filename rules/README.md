jQuery.ime Input method specification
=====================================

Input methods are defined in javascript files. An input method is a javascript
object and it is passed to $.ime.register() method to register with jquery.ime

eg: $.ime.register( hebrewStandardKeyboard );

Metadata fields
---------------

id: A mandatory unique identifier that represents the input method.
eg: "hindi-inscript"

name: A mandatory short name for the input method. eg: Hindi InScript

description: An optional short description about the input method.
eg: "keyboard layout as per inscript standard"

date: An optional string to represent when this input method was written.
Format should be: yyyy-mm-dd

author: An optional string containing the authors name. Can contain email
address as well. eg: "Santhosh Thottingal, <santhosh.thottingal@gmail.com>"

URL: A mandatory string containing URL for source where keyboard is defined,
information about trademark restrictions if any, layout and help.

license: An optional string containing licence information. Eg: "CC-BY-SA" or
"GPLv3".

version: An optional string containing version information.

Input method definition
-----------------------

patterns: A regular expression table that maps the original inputs to the
target language.

eg:
patterns: [
		[ 'q', '/' ],
		[ 'w', '\'' ],
		[ 'e', 'ק' ],
		[ 'r', 'ר' ],
		[ 't', 'א' ],
		[ 'y', 'ט' ],
		[ 'u', 'ו' ],
		[ 'i', 'ן' ],
		[ 'o', 'ם' ],
		[ 'p', 'פ' ]
		...
		// These characters are mirrored in RTL languages
		[ '\\(', ')' ],
		[ '\\)', '(' ],
		[ '\\[', ']' ],
		[ '\\]', '[' ]
	]

Any valid regular expression is possible as first element of each array item.
More examples
	[ '([ക-ഹ])a', '$1ാ' ]
	[ '(([ൺ-ൿം])\u200c+)?I', '$2ഐ' ]

In the above example, $1, $1 etc are according to the normal regular expression
replace syntax.

The second member of pattern can be a function as well. For eg:

patterns: [ [ '[a-z]', function ( $1 ) {
			return $1.toUpperCase();
		} ] ]

This rule replace all key strokes to its upper case character.

contextLength: Length of the context to remember. jquery.ime can replace the
text based on the previously typed characters. eg:

	[ 'ൿh', 'c', 'ച്' ]

Note that this pattern definition has 3 members, the middle one is the context.
This rule is interpreted as 

The current key is h, previous key is c. For the previous key press c, we have
a transliteration ൿ. But if it is followed by h and ൿ is indeed from key press
c, replace ൿh with ച്

To make this work, we need to remember the previous key strokes. How many of
them we need to remember? contextLength should have that value.

This is optional field with default value 0. ie, we don't remember previous key
strokes by default.

maxKeyLength: While trying to find possible matches, we need to know how many
characters from the current typing location(cursor) should be used before
giving up.

maxKeyLength defines it. Normally it is the length of largest regex sequence in
the patterns.

This field is optional and default value is 1.

Examples
--------

For complete examples, please refer the existing input method definitions.

Documentation of input methods are available at https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods
