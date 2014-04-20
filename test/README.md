Tests in jquery.ime
===================

jquery.ime has a simple, but powerful, QUnit-based testing framework.

When you are developing a new layout or making changes in an existing one,
begin by running the tests.

Run `grunt --force` or open jquery.ime/test/index.html in your browser.
Check that all the tests pass.

When you are adding or changing rules, edit the jquery.ime.test.fixtures.js
file and add a test for every rule that you are adding or changing, before you
are actually programming the rules.

Here's an example test block for a layout:

    {
    	description: 'Amharic Transliteration test',
    	tests: [
    		{ input: 'k', output: 'ክ', description: 'Amharic k -> ክ' },
    		{ input: 'dW', output: 'ዷ', description: 'Amharic dW -> ዷ' }
    	],
    	inputmethod: 'am-transliteration'
    }

Let's analyze it:

* `description`: This is the human-readable description of a block of tests
that will appear when you run them in QUnit.
* `tests`: These are the actual tests. Make sure to add a comma after each test
except the last one, as it usually is with JavaScript. See below for more
details about the tests.
* `inputmethod`: This is the name of the scheme. It is the same as the id field
in the scheme description. It must also appear in the id field in the $input
line.

Each test consists of:

* `input`: The characters which are expected to be typed. This is either a
string (for non-extended input) or an array of arrays (see below).
* `output`: This is the expected result: the string that is supposed to appear
after the input string is typed. In the first case, it is expected that typing
'ka' will yield the Amharic letter 'ካ' and in the second case it is expected
that typing 'dW' will yield 'ዷ'.
* `description`: This is a description of the test that will appear in QUnit.

For extended keys specify the characters like this:

    {
    	description: 'Hebrew layout and extended keys test',
    	tests: [
    		{ input: [ [ '-', false ] ], output: '-', description: 'Hebrew regular -' },
    		{ input: [ [ '-', true ] ], output: '־', description: 'Hebrew extended -' }
    	],
    	inputmethod: 'he-standard-2012-extonly'
    }

In this example, the first test checks typing the '-' character without
pressing the key that makes it extended, and the second one checks the same
character, extended.

Some keyboard layouts have special treatment for end of line (`\n` and `\r`).
For these, add the `multiline` option:

    {
    	description: 'Hindi transliteration tests',
    	tests: [
    		{ input: 'raam\r', output: 'राम\n', description: 'Hindi transliteration - raam<line-break> (\\r)' }
    	],
    	inputmethod: 'hi-transliteration',
    	multiline: true
    }

When you added the tests and the rules, run `grunt --force` or open
jquery.ime/test/index.html in your browser again and check that your new test
ran successfully and that existing tests didn't fail.
