/* eslint-env node */
/* eslint-disable no-console, security/detect-non-literal-fs-filename */
( function () {
	'use strict';

	var fs = require( 'fs' ),
		path = require( 'path' ),
		vm = require( 'vm' ),
		VI_RULE_PATH = path.join( __dirname, 'vi.js' ),
		DEFAULT_FAILURE_LIMIT = 20,
		TONE_MARKS = {
			'\u0301': 'acute',
			'\u0300': 'grave',
			'\u0309': 'hook',
			'\u0303': 'tilde',
			'\u0323': 'dot'
		},
		VOWEL_MARKS = {
			'\u0302': 'circumflex',
			'\u0306': 'breve',
			'\u031b': 'horn'
		},
		VIQR_TONE_KEYS = {
			acute: '\'',
			grave: '`',
			hook: '?',
			tilde: '~',
			dot: '.'
		},
		METHODS = {
			telex: {
				traditionalId: 'vi-telex',
				reformedId: 'vi-telex-reformed'
			},
			'telex-simple': {
				traditionalId: 'vi-telex-simple',
				reformedId: 'vi-telex-simple-reformed',
				sourceMethod: 'telex'
			},
			vni: {
				traditionalId: 'vi-vni',
				reformedId: 'vi-vni-reformed'
			},
			viqr: {
				traditionalId: 'vi-viqr',
				reformedId: 'vi-viqr-reformed'
			},
			'viqr-star': {
				traditionalId: 'vi-viqr-star',
				reformedId: 'vi-viqr-star-reformed',
				sourceMethod: 'viqrStar'
			}
		},
		METHOD_ORDER = [ 'telex', 'telex-simple', 'vni', 'viqr', 'viqr-star' ],
		METHOD_KEY_MAP = {
			telex: {
				acute: 's',
				grave: 'f',
				hook: 'r',
				tilde: 'x',
				dot: 'j',
				circumflex: function ( base ) {
					return base;
				},
				breve: 'w',
				horn: 'w',
				dStroke: 'd'
			},
			vni: {
				acute: '1',
				grave: '2',
				hook: '3',
				tilde: '4',
				dot: '5',
				circumflex: '6',
				horn: '7',
				breve: '8',
				dStroke: '9'
			},
			viqr: {
				acute: '\'',
				grave: '`',
				hook: '?',
				tilde: '~',
				dot: '.',
				circumflex: '^',
				horn: '+',
				breve: '(',
				dStroke: 'd'
			},
			viqrStar: {
				acute: '\'',
				grave: '`',
				hook: '?',
				tilde: '~',
				dot: '.',
				circumflex: '^',
				horn: '*',
				breve: '(',
				dStroke: 'd'
			}
		};

	/**
	 * Print usage information for the corpus audit script.
	 */
	function printUsage() {
		console.log( [
			'Usage:',
			'  node rules/vi/vi.test.corpus.js --traditional PATH --reformed PATH [options]',
			'  node rules/vi/vi.test.corpus.js TRADITIONAL_PATH REFORMED_PATH [options]',
			'',
			'Options:',
			'  --methods=LIST        Comma-separated methods: telex,telex-simple,vni,viqr,viqr-star',
			'  --limit=N            Maximum failure examples printed per method, default 20',
			'  --no-reformed        Only audit the traditional corpus',
			'  --no-traditional     Only audit the reformed corpus',
			'  --help               Show this help',
			'',
			'This is an optional corpus audit tool. It is not part of the default QUnit suite.'
		].join( '\n' ) );
	}

	/**
	 * Parse command-line arguments.
	 *
	 * @param {string[]} argv Raw command-line arguments.
	 * @return {Object} Parsed options.
	 */
	function parseArgs( argv ) {
		var options = {
				corpora: {},
				failureLimit: DEFAULT_FAILURE_LIMIT,
				methods: METHOD_ORDER.slice()
			},
			positionals = [],
			i, arg;

		function nextValue( optionName ) {
			i++;
			if ( i >= argv.length ) {
				throw new Error( optionName + ' requires a value' );
			}
			return argv[ i ];
		}

		for ( i = 0; i < argv.length; i++ ) {
			arg = argv[ i ];
			if ( arg === '--help' || arg === '-h' ) {
				options.help = true;
			} else if ( arg === '--traditional' ) {
				options.corpora.traditional = nextValue( arg );
			} else if ( arg.indexOf( '--traditional=' ) === 0 ) {
				options.corpora.traditional = arg.slice( '--traditional='.length );
			} else if ( arg === '--reformed' ) {
				options.corpora.reformed = nextValue( arg );
			} else if ( arg.indexOf( '--reformed=' ) === 0 ) {
				options.corpora.reformed = arg.slice( '--reformed='.length );
			} else if ( arg === '--methods' ) {
				options.methods = nextValue( arg ).split( ',' ).filter( Boolean );
			} else if ( arg.indexOf( '--methods=' ) === 0 ) {
				options.methods = arg.slice( '--methods='.length ).split( ',' ).filter( Boolean );
			} else if ( arg === '--limit' ) {
				options.failureLimit = Number( nextValue( arg ) );
			} else if ( arg.indexOf( '--limit=' ) === 0 ) {
				options.failureLimit = Number( arg.slice( '--limit='.length ) );
			} else if ( arg === '--no-reformed' ) {
				options.noReformed = true;
			} else if ( arg === '--no-traditional' ) {
				options.noTraditional = true;
			} else if ( arg.charAt( 0 ) === '-' ) {
				throw new Error( 'Unknown option: ' + arg );
			} else {
				positionals.push( arg );
			}
		}

		if ( positionals[ 0 ] && !options.corpora.traditional ) {
			options.corpora.traditional = positionals[ 0 ];
		}
		if ( positionals[ 1 ] && !options.corpora.reformed ) {
			options.corpora.reformed = positionals[ 1 ];
		}

		if ( !Number.isFinite( options.failureLimit ) || options.failureLimit < 0 ) {
			throw new Error( '--limit must be a non-negative number' );
		}

		options.methods.forEach( ( method ) => {
			if ( !METHODS[ method ] ) {
				throw new Error( 'Unknown method: ' + method );
			}
		} );

		return options;
	}

	/**
	 * Load Vietnamese input methods from the rule file with a minimal jQuery.IME stub.
	 *
	 * @return {Object} jQuery.IME-like namespace.
	 */
	function loadVietnameseIME() {
		var jQuery = {
				ime: {
					vi: {},
					inputmethods: {},
					register: function ( inputMethod ) {
						this.inputmethods[ inputMethod.id ] = inputMethod;
					}
				}
			},
			context = {
				console: console,
				jQuery: jQuery,
				$: jQuery
			};

		vm.runInNewContext(
			fs.readFileSync( VI_RULE_PATH, 'utf8' ),
			context,
			{
				filename: VI_RULE_PATH
			}
		);

		return jQuery.ime;
	}

	/**
	 * Return true if the line is a Hunspell-style count header.
	 *
	 * @param {string} line Corpus line.
	 * @param {number} index Zero-based line index.
	 * @return {boolean} Whether the line is a count header.
	 */
	function isCountHeader( line, index ) {
		return index === 0 && /^[0-9]+$/.test( line );
	}

	/**
	 * Read corpus entries from a UTF-8 word-list file.
	 *
	 * @param {string} filePath Corpus path.
	 * @return {string[]} NFC-normalized corpus entries.
	 */
	function readCorpus( filePath ) {
		return fs.readFileSync( filePath, 'utf8' )
			.split( /\r?\n/ )
			.map( ( line ) => line.trim() )
			.filter( ( line, index ) => line && !isCountHeader( line, index ) )
			.map( ( word ) => word.normalize( 'NFC' ) );
	}

	/**
	 * Convert a Unicode character to a VIQR-like source sequence.
	 *
	 * @param {string} character Unicode character.
	 * @return {string|null} Source sequence, or null for unsupported characters.
	 */
	function characterToSourceSequence( character ) {
		var normalized, base, tone, vowelDiacritic, unsupported;

		if ( character === 'đ' ) {
			return 'dd';
		}
		if ( character === 'Đ' ) {
			return 'Dd';
		}

		normalized = character.normalize( 'NFD' );
		base = normalized.charAt( 0 );

		if ( normalized.length === 1 ) {
			return character;
		}

		tone = '';
		vowelDiacritic = '';
		Array.prototype.forEach.call( normalized.slice( 1 ), ( mark ) => {
			if ( VOWEL_MARKS[ mark ] ) {
				vowelDiacritic = VOWEL_MARKS[ mark ] === 'circumflex' ? '^' :
					VOWEL_MARKS[ mark ] === 'breve' ? '(' : '+';
			} else if ( TONE_MARKS[ mark ] ) {
				tone = VIQR_TONE_KEYS[ TONE_MARKS[ mark ] ];
			} else {
				unsupported = true;
			}
		} );

		if ( unsupported ) {
			return null;
		}

		return base + vowelDiacritic + tone;
	}

	/**
	 * Convert a Unicode corpus word to a VIQR-like source sequence.
	 *
	 * @param {string} word Corpus word.
	 * @return {string|null} Source sequence, or null for unsupported characters.
	 */
	function wordToSourceSequence( word ) {
		var output = '',
			i, source;

		for ( i = 0; i < word.length; i++ ) {
			source = characterToSourceSequence( word.charAt( i ) );
			if ( source === null ) {
				return null;
			}
			output += source;
		}

		return output;
	}

	/**
	 * Split a VIQR-like source sequence into base letters and composition commands.
	 *
	 * @param {string} source Source sequence.
	 * @param {string} method Key-generation method.
	 * @return {Object} Base letters and commands.
	 */
	function splitSourceSequence( source, method ) {
		var letters = [],
			commands = [],
			commandBases = [],
			i, current, previousLetter;

		for ( i = 0; i < source.length; i++ ) {
			current = source.charAt( i );

			if ( current.toLowerCase() === 'd' ) {
				if (
					i > 0 &&
					current.toLowerCase() === source.charAt( i - 1 ).toLowerCase()
				) {
					commands.push( 'dStroke' );
					commandBases.push( null );
				} else {
					letters.push( current );
				}
			} else if ( current === '+' && commands.includes( 'horn' ) ) {
				continue;
			} else if ( current === '^' || current === '+' || current === '(' ) {
				commands.push(
					current === '^' ? 'circumflex' :
						current === '+' ? 'horn' : 'breve'
				);
				commandBases.push( letters.length ? letters[ letters.length - 1 ] : null );
			} else if ( current === '\'' || current === '`' || current === '?' ||
				current === '~' || current === '.' ) {
				commands.push(
					current === '\'' ? 'acute' :
						current === '`' ? 'grave' :
							current === '?' ? 'hook' :
								current === '~' ? 'tilde' : 'dot'
				);
				commandBases.push( null );
			} else {
				previousLetter = letters.length ? letters[ letters.length - 1 ] : '';
				if (
					method === 'telex' &&
					previousLetter.toLowerCase() === current.toLowerCase() &&
					'aeo'.includes( current.toLowerCase() )
				) {
					letters.push( current );
				}
				letters.push( current );
			}
		}

		return {
			commands: commands,
			commandBases: commandBases,
			letters: letters
		};
	}

	/**
	 * Map one source command to the requested input-method key.
	 *
	 * @param {string} command Source command.
	 * @param {string|null} base Previous source base for Telex circumflex.
	 * @param {string} method Key-generation method.
	 * @return {string} Input-method key.
	 */
	function mapCommandToMethodKey( command, base, method ) {
		var mapping = METHOD_KEY_MAP[ method ][ command ];

		if ( typeof mapping === 'function' ) {
			return mapping( base );
		}

		return mapping;
	}

	/**
	 * Prepare a corpus word as input-method keystrokes.
	 *
	 * @param {string} word Corpus word.
	 * @param {string} method Key-generation method.
	 * @return {string|null} Keystrokes, or null for unsupported words.
	 */
	function prepareWord( word, method ) {
		var source = wordToSourceSequence( word ),
			parts, keys;

		if ( source === null ) {
			return null;
		}

		parts = splitSourceSequence( source, method );
		keys = parts.letters.join( '' );

		parts.commands.forEach( ( command, index ) => {
			keys += mapCommandToMethodKey( command, parts.commandBases[ index ], method );
		} );

		return keys;
	}

	/**
	 * Apply array-based jQuery.IME rules to an input window.
	 *
	 * @param {Array[]} patterns Pattern rules.
	 * @param {string} input Input window.
	 * @param {string} context Raw key context.
	 * @return {Object} jQuery.IME-style result.
	 */
	function applyArrayPatterns( patterns, input, context ) {
		var i, rule, regex, contextRegex, replacement;

		for ( i = 0; i < patterns.length; i++ ) {
			rule = patterns[ i ];
			regex = new RegExp( rule[ 0 ] + '$' );
			replacement = rule.slice( -1 )[ 0 ];

			if ( regex.test( input ) ) {
				if ( rule.length === 3 ) {
					contextRegex = new RegExp( rule[ 1 ] + '$' );
					if ( contextRegex.test( context ) ) {
						return {
							noop: false,
							output: input.replace( regex, replacement )
						};
					}
				} else {
					return {
						noop: false,
						output: input.replace( regex, replacement )
					};
				}
			}
		}

		return {
			noop: true,
			output: input
		};
	}

	/**
	 * Transliterate an input window through a jQuery.IME input-method definition.
	 *
	 * @param {Object} inputMethod jQuery.IME input-method definition.
	 * @param {string} input Input window.
	 * @param {string} context Raw key context.
	 * @return {Object} jQuery.IME-style result.
	 */
	function transliterate( inputMethod, input, context ) {
		var patterns = inputMethod.patterns || [],
			result;

		if ( typeof patterns === 'function' ) {
			result = patterns.call(
				{
					inputmethod: inputMethod
				},
				input,
				context
			);

			if ( typeof result === 'string' ) {
				return {
					noop: input === result,
					output: result
				};
			}

			return result;
		}

		return applyArrayPatterns( patterns, input, context );
	}

	/**
	 * Type keystrokes through a jQuery.IME input method.
	 *
	 * @param {Object} inputMethod jQuery.IME input-method definition.
	 * @param {string} keys Keystrokes to type.
	 * @return {string} Rendered text.
	 */
	function typeKeys( inputMethod, keys ) {
		var text = '',
			context = '',
			i, key, input, result;

		for ( i = 0; i < keys.length; i++ ) {
			key = keys.charAt( i );
			text += key;
			input = text.slice( -inputMethod.maxKeyLength );
			result = transliterate( inputMethod, input, context );

			context += key;
			if ( context.length > inputMethod.contextLength ) {
				context = context.slice( context.length - inputMethod.contextLength );
			}

			if ( !result.noop ) {
				text = text.slice( 0, text.length - input.length ) + result.output;
			}
		}

		return text.normalize( 'NFC' );
	}

	/**
	 * Create an empty audit summary.
	 *
	 * @return {Object} Audit summary.
	 */
	function createSummary() {
		return {
			failures: [],
			failed: 0,
			passed: 0,
			skipped: 0,
			tested: 0
		};
	}

	/**
	 * Audit one corpus against one input method.
	 *
	 * @param {Object} ime jQuery.IME-like namespace.
	 * @param {string[]} words Corpus words.
	 * @param {string} methodName Method name.
	 * @param {string} inputMethodId jQuery.IME input-method id.
	 * @param {number} failureLimit Maximum stored failure examples.
	 * @return {Object} Audit summary.
	 */
	function auditMethod( ime, words, methodName, inputMethodId, failureLimit ) {
		var inputMethod = ime.inputmethods[ inputMethodId ],
			sourceMethod = METHODS[ methodName ].sourceMethod || methodName,
			summary = createSummary();

		if ( !inputMethod ) {
			throw new Error( 'Input method is not registered: ' + inputMethodId );
		}

		words.forEach( ( word ) => {
			var keys = prepareWord( word, sourceMethod ),
				output;

			if ( keys === null ) {
				summary.skipped++;
				return;
			}

			summary.tested++;
			output = typeKeys( inputMethod, keys );

			if ( output === word ) {
				summary.passed++;
				return;
			}

			summary.failed++;
			if ( summary.failures.length < failureLimit ) {
				summary.failures.push( {
					expected: word,
					keys: keys,
					output: output
				} );
			}
		} );

		return summary;
	}

	/**
	 * Print one audit summary.
	 *
	 * @param {string} label Corpus label.
	 * @param {string} methodName Method name.
	 * @param {string} inputMethodId jQuery.IME input-method id.
	 * @param {Object} summary Audit summary.
	 */
	function printSummary( label, methodName, inputMethodId, summary ) {
		console.log(
			label + ' ' + methodName + ' (' + inputMethodId + '): ' +
			summary.passed + '/' + summary.tested + ' passed, ' +
			summary.failed + ' failed, ' + summary.skipped + ' skipped'
		);

		summary.failures.forEach( ( failure ) => {
			console.log(
				'  ' + failure.keys + ' -> ' + failure.output +
				' (expected ' + failure.expected + ')'
			);
		} );
	}

	/**
	 * Run corpus audits.
	 *
	 * @param {Object} options Parsed options.
	 * @return {number} Process exit status.
	 */
	function run( options ) {
		var ime = loadVietnameseIME(),
			totalFailed = 0,
			corpora = [];

		if ( !options.noTraditional && options.corpora.traditional ) {
			corpora.push( {
				idKey: 'traditionalId',
				label: 'traditional',
				words: readCorpus( options.corpora.traditional )
			} );
		}

		if ( !options.noReformed && options.corpora.reformed ) {
			corpora.push( {
				idKey: 'reformedId',
				label: 'reformed',
				words: readCorpus( options.corpora.reformed )
			} );
		}

		if ( !corpora.length ) {
			printUsage();
			return 2;
		}

		corpora.forEach( ( corpus ) => {
			options.methods.forEach( ( methodName ) => {
				var inputMethodId = METHODS[ methodName ][ corpus.idKey ],
					summary = auditMethod(
						ime,
						corpus.words,
						methodName,
						inputMethodId,
						options.failureLimit
					);

				printSummary( corpus.label, methodName, inputMethodId, summary );
				totalFailed += summary.failed;
			} );
		} );

		return totalFailed ? 1 : 0;
	}

	try {
		( function () {
			var options = parseArgs( process.argv.slice( 2 ) );

			if ( options.help ) {
				printUsage();
				process.exit( 0 );
			}

			process.exit( run( options ) );
		}() );
	} catch ( error ) {
		console.error( error.message );
		console.error( '' );
		printUsage();
		process.exit( 2 );
	}
}() );
