( function ( $ ) {
	'use strict';

	var DEFAULT_CONTEXT_LENGTH = 0,
		TELEX_QUICK_CONTEXT_LENGTH = 2,
		DEFAULT_MAX_KEY_LENGTH = 16,
		TELEX_SHIFTED_KEYS = [ 'A', 'E', 'O', 'W', 'D', 'S', 'F', 'R', 'X', 'J', 'Z' ],
		VIQR_SHIFTED_KEYS = [ '?', '~', '^', '(', '+', 'D' ],
		VIQR_STAR_SHIFTED_KEYS = [ '?', '~', '^', '(', '*', 'D' ],
		COMBINING_ACUTE = '\u0301',
		COMBINING_GRAVE = '\u0300',
		COMBINING_HOOK = '\u0309',
		COMBINING_TILDE = '\u0303',
		COMBINING_DOT = '\u0323',
		COMBINING_CIRCUMFLEX = '\u0302',
		COMBINING_BREVE = '\u0306',
		COMBINING_HORN = '\u031b',
		ONSETS = [
			'ngh', 'ch', 'gh', 'kh', 'ng', 'nh', 'ph', 'th', 'tr', 'qu',
			'b', 'c', 'd', 'đ', 'g', 'h', 'k', 'l', 'm', 'n',
			'p', 'r', 's', 't', 'v', 'x'
		],
		Vietnamese = $.ime.vi || {},
		toneToMark,
		markToTone,
		vowelDiacriticToMark,
		markToVowelDiacritic,
		rimeRecognitionMaps,
		engine;

	/**
	 * @typedef {Object} JQueryIMEPatternResult
	 * @property {boolean} noop Whether jQuery.IME should leave the input unchanged.
	 * @property {string} output Replacement output or original input.
	 */

	/**
	 * @typedef {Object} SemanticCommand
	 * @property {string} type CommandType enum value.
	 * @property {string} [literal] Literal key to append during repeated-key escape.
	 * @property {string} [tone] Tone enum value for APPLY_TONE.
	 * @property {string} [vowelDiacritic] VowelDiacritic enum value for APPLY_VOWEL_DIACRITIC.
	 */

	/**
	 * @typedef {Object} DecodedCommand
	 * @property {string} key Input-method key consumed by the adapter.
	 * @property {SemanticCommand} [command] Shared semantic command.
	 * @property {string} [literalOutput] Adapter-level literal output.
	 * @property {string} [fallbackLiteralOutput] Literal output if the engine cannot transform.
	 */

	/**
	 * @typedef {Object} CompositionToken
	 * @property {string} base Original base letter with case preserved.
	 * @property {boolean} dStroke Whether the token represents `đ` / `Đ`.
	 * @property {boolean} isVowel Whether the token is a Vietnamese base vowel candidate.
	 * @property {string} tone Tone enum value parsed from this token.
	 * @property {string} vowelDiacritic VowelDiacritic enum value parsed from this token.
	 */

	/**
	 * @typedef {Object} EligibleVowels
	 * @property {string[]} identities Lowercase rendered vowel identities.
	 * @property {number[]} indices Token indices for the eligible vowels.
	 */

	/**
	 * @typedef {Object} RimeRecognition
	 * @property {string} status RimeStatus enum value.
	 */

	/**
	 * @typedef {Object} RimeInventory
	 * @property {string[]} complete Rimes accepted as complete composition structures.
	 * @property {string[]} composable Source spellings accepted as composition precursors.
	 */

	/**
	 * @typedef {Object} RimeRecognitionMaps
	 * @property {Object.<string, boolean>} complete Complete-rime lookup map.
	 * @property {Object.<string, boolean>} composable Composition-precursor lookup map.
	 * @property {Object.<string, boolean>} prefix Prefix lookup map.
	 */

	/**
	 * @typedef {Object} OnsetResolution
	 * @property {number} end Token index where the onset ends.
	 * @property {Object.<string, boolean>} ignoredVowelIndices Vowel-like onset token indices.
	 * @property {string} text Written onset.
	 */

	/**
	 * @typedef {Object} OrthographicStructure
	 * @property {boolean} checked Whether the rime has a checked ending.
	 * @property {string} ending Written ending, or an empty string.
	 * @property {Object.<string, boolean>} ignoredVowelIndices Vowel-like onset token indices.
	 * @property {string} onset Written onset.
	 * @property {string} rime Written rime.
	 * @property {RimeRecognition} rimeRecognition Rime recognizer result.
	 * @property {string} rimeStatus RimeStatus enum value.
	 * @property {number} rimeStart Token index where the rime begins.
	 * @property {number} toneTargetIndex Token index for the visible tone mark, or -1.
	 * @property {EligibleVowels} vowels Vowels eligible for Vietnamese composition.
	 */

	/**
	 * @typedef {Object} CompositionState
	 * @property {string} status StateType enum value.
	 * @property {string} tone Semantic Tone enum value for the whole candidate.
	 * @property {CompositionToken[]} tokens Parsed candidate tokens.
	 * @property {OrthographicStructure|null} [structure] Analyzed structure.
	 */

	/**
	 * @typedef {Object} TransformResult
	 * @property {CompositionState} state Re-analyzed state after transformation.
	 * @property {string} literalSuffix Literal suffix appended for escape behavior.
	 */

	/**
	 * @typedef {Object} EngineResult
	 * @property {boolean} handled Whether the engine transformed or reflowed the candidate.
	 * @property {string} [output] Transformed candidate output.
	 */

	/**
	 * @typedef {Object} AdapterResult
	 * @property {boolean} noop Whether jQuery.IME should pass the latest key through.
	 * @property {string} output Replacement output for jQuery.IME's input window.
	 */

	/**
	 * @typedef {Function} Adapter
	 * @property {Function} setCompositionBoundary Start an invisible composition boundary.
	 */

	/**
	 * @typedef {Object} EngineOptions
	 * @property {string} [context] Raw jQuery.IME key context.
	 * @property {string} [inputMethodId] Input method id passed through by the adapter.
	 * @property {string} [tonePlacement] Tone-placement policy.
	 */

	/**
	 * @typedef {Object} VietnameseEngine
	 * @property {Function} transformCandidate Semantic-command transform entry point.
	 * @property {Function} reflowCandidate Ordinary-letter reflow entry point.
	 */

	/**
	 * @typedef {Object} ExtractedCandidate
	 * @property {string} prefix Unchanged prefix inside jQuery.IME's input window.
	 * @property {string} candidate Candidate selected for Vietnamese composition.
	 */

	/**
	 * @typedef {Object} DecoderOptions
	 * @property {string} [inputMethodId] Input method id passed through by the adapter.
	 * @property {string} [tonePlacement] Tone-placement policy.
	 */

	/**
	 * @typedef {Object} TargetVowelDiacriticOptions
	 * @property {string} [tonePlacement] Tone-placement policy.
	 */

	/**
	 * @typedef {Object} TelexProfileOptions
	 * @property {boolean} [quickW] Whether standalone quick `w` is enabled.
	 */

	/**
	 * @typedef {Object} VowelPairPattern
	 * @property {string} firstBase Lowercase base of the first token.
	 * @property {string} secondBase Lowercase base of the second token.
	 * @property {string} firstVowelDiacritic VowelDiacritic enum value for the first token.
	 * @property {string} secondVowelDiacritic VowelDiacritic enum value for the second token.
	 */

	/**
	 * @typedef {Object} VowelPairUpdate
	 * @property {string} [firstVowelDiacritic] VowelDiacritic enum value for the first token.
	 * @property {string} [secondVowelDiacritic] VowelDiacritic enum value for the second token.
	 */

	/**
	 * @typedef {Object} AdapterOptions
	 * @property {Function} decodeCommand Input-method-specific command decoder.
	 * @property {VietnameseEngine} [engine] Shared Vietnamese composition engine.
	 * @property {string} inputMethodId Input method id passed to the engine.
	 * @property {string} [tonePlacement] Tone-placement policy.
	 */

	/**
	 * @typedef {Object} CompositionBoundaryState
	 * @property {string} suffix Rendered active suffix after the invisible boundary.
	 * @property {string} beforeText Bounded rendered text before the caret after the last key.
	 */

	/**
	 * @typedef {Object} ScopedInput
	 * @property {string} prefix Frozen text before the active composition suffix.
	 * @property {string} input Input window scoped to the active suffix and latest key.
	 * @property {boolean} active Whether composition-boundary scoping is active.
	 */

	/**
	 * @typedef {Object} RegistrationConfig
	 * @property {string} id Input method id registered with jQuery.IME.
	 * @property {string} name Human-readable input method name.
	 * @property {string} description Input method description.
	 * @property {Function} decodeCommand Input-method-specific command decoder.
	 * @property {string[]} [shiftedKeys] Shifted command keys for a patterns bridge.
	 * @property {string} [tonePlacement] Tone-placement policy.
	 * @property {number} [contextLength] Raw key context length.
	 */

	// [1] Namespace constants and lookup tables

	Vietnamese.CommandType = Vietnamese.CommandType || {
		APPLY_TONE: 'apply-tone',
		REMOVE_TONE: 'remove-tone',
		APPLY_VOWEL_DIACRITIC: 'apply-vowel-diacritic',
		APPLY_D_STROKE: 'apply-d-stroke'
	};

	Vietnamese.Tone = Vietnamese.Tone || {
		NONE: 'none',
		ACUTE: 'acute',
		GRAVE: 'grave',
		HOOK: 'hook',
		TILDE: 'tilde',
		DOT: 'dot'
	};

	Vietnamese.VowelDiacritic = Vietnamese.VowelDiacritic || {
		NONE: 'none',
		CIRCUMFLEX: 'circumflex',
		BREVE: 'breve',
		HORN: 'horn'
	};

	Vietnamese.StateType = Vietnamese.StateType || {
		UNRECOGNIZED: 'unrecognized',
		INTERMEDIATE: 'intermediate',
		STRUCTURALLY_VALID: 'structurally-valid'
	};

	Vietnamese.RimeStatus = Vietnamese.RimeStatus || {
		INVALID: 'invalid',
		PREFIX: 'prefix',
		COMPOSABLE: 'composable',
		COMPLETE: 'complete',
		COMPLETE_AND_PREFIX: 'complete-and-prefix'
	};

	Vietnamese.TonePlacement = Vietnamese.TonePlacement || {
		TRADITIONAL: 'traditional',
		REFORMED: 'reformed'
	};

	toneToMark = {};
	toneToMark[ Vietnamese.Tone.ACUTE ] = COMBINING_ACUTE;
	toneToMark[ Vietnamese.Tone.GRAVE ] = COMBINING_GRAVE;
	toneToMark[ Vietnamese.Tone.HOOK ] = COMBINING_HOOK;
	toneToMark[ Vietnamese.Tone.TILDE ] = COMBINING_TILDE;
	toneToMark[ Vietnamese.Tone.DOT ] = COMBINING_DOT;

	markToTone = {};
	markToTone[ COMBINING_ACUTE ] = Vietnamese.Tone.ACUTE;
	markToTone[ COMBINING_GRAVE ] = Vietnamese.Tone.GRAVE;
	markToTone[ COMBINING_HOOK ] = Vietnamese.Tone.HOOK;
	markToTone[ COMBINING_TILDE ] = Vietnamese.Tone.TILDE;
	markToTone[ COMBINING_DOT ] = Vietnamese.Tone.DOT;

	vowelDiacriticToMark = {};
	vowelDiacriticToMark[ Vietnamese.VowelDiacritic.CIRCUMFLEX ] = COMBINING_CIRCUMFLEX;
	vowelDiacriticToMark[ Vietnamese.VowelDiacritic.BREVE ] = COMBINING_BREVE;
	vowelDiacriticToMark[ Vietnamese.VowelDiacritic.HORN ] = COMBINING_HORN;

	markToVowelDiacritic = {};
	markToVowelDiacritic[ COMBINING_CIRCUMFLEX ] = Vietnamese.VowelDiacritic.CIRCUMFLEX;
	markToVowelDiacritic[ COMBINING_BREVE ] = Vietnamese.VowelDiacritic.BREVE;
	markToVowelDiacritic[ COMBINING_HORN ] = Vietnamese.VowelDiacritic.HORN;

	// [2] General utilities

	/**
	 * Normalize text when the JavaScript runtime supports Unicode normalization.
	 *
	 * @param {string} text Text to normalize.
	 * @param {string} form Unicode normalization form.
	 * @return {string} Normalized text.
	 */
	function normalizeText( text, form ) {
		if ( typeof text.normalize === 'function' ) {
			return text.normalize( form );
		}

		return text;
	}

	/**
	 * Return jQuery.IME pass-through output for input the adapter should leave unchanged.
	 *
	 * @param {string} input Original input window.
	 * @return {JQueryIMEPatternResult} jQuery.IME pass-through result.
	 */
	function passThrough( input ) {
		return {
			noop: true,
			output: input
		};
	}

	// [3] Semantic command factories

	/**
	 * Build a shared semantic tone command from an input-method key.
	 *
	 * @param {string} key Input-method command key.
	 * @param {string} tone Tone enum value.
	 * @return {DecodedCommand} Decoded semantic command.
	 */
	function createToneCommand( key, tone ) {
		return {
			key: key,
			command: {
				type: Vietnamese.CommandType.APPLY_TONE,
				literal: key,
				tone: tone
			}
		};
	}

	/**
	 * Build a shared semantic tone-removal command from an input-method key.
	 *
	 * @param {string} key Input-method command key.
	 * @return {DecodedCommand} Decoded semantic command.
	 */
	function createRemoveToneCommand( key ) {
		return {
			key: key,
			command: {
				type: Vietnamese.CommandType.REMOVE_TONE,
				literal: key
			}
		};
	}

	/**
	 * Build a shared semantic vowel-diacritic command from an input-method key.
	 *
	 * @param {string} key Input-method command key.
	 * @param {string} vowelDiacritic VowelDiacritic enum value.
	 * @return {DecodedCommand} Decoded semantic command.
	 */
	function createVowelDiacriticCommand( key, vowelDiacritic ) {
		return {
			key: key,
			command: {
				type: Vietnamese.CommandType.APPLY_VOWEL_DIACRITIC,
				literal: key,
				vowelDiacritic: vowelDiacritic
			}
		};
	}

	/**
	 * Build a shared semantic d-stroke command with repeated-key escape support.
	 *
	 * @param {string} key Input-method command key.
	 * @return {DecodedCommand} Decoded semantic command.
	 */
	function createDStrokeCommand( key ) {
		return {
			key: key,
			command: {
				type: Vietnamese.CommandType.APPLY_D_STROKE,
				literal: key
			}
		};
	}

	/**
	 * Build an adapter-level literal replacement that bypasses engine transform.
	 *
	 * @param {string} key Input-method command key.
	 * @param {string} literalOutput Literal output.
	 * @return {DecodedCommand} Decoded literal-output command.
	 */
	function createLiteralOutputCommand( key, literalOutput ) {
		return {
			key: key,
			literalOutput: literalOutput
		};
	}

	// [4] Telex quick-key helpers

	/**
	 * Render default Telex standalone quick `w` output with matching case.
	 *
	 * @param {string} key Latest typed key.
	 * @return {string} Quick-`w` output.
	 */
	function getTelexQuickWOutput( key ) {
		return key === 'W' ? 'Ư' : 'ư';
	}

	/**
	 * Render the literal escape output for default Telex quick `w`.
	 *
	 * @param {string} key Latest typed key.
	 * @return {string} Literal quick-`w` escape output.
	 */
	function getTelexQuickWLiteralOutput( key ) {
		return key === 'W' ? 'W' : 'w';
	}

	// [5] Input method command decoders

	/**
	 * Decode a VNI key into a shared Vietnamese semantic command.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @return {DecodedCommand|null} Decoded command with key and command fields, or null.
	 */
	function decodeVNICommand( input ) {
		var toneCommands = {
				1: Vietnamese.Tone.ACUTE,
				2: Vietnamese.Tone.GRAVE,
				3: Vietnamese.Tone.HOOK,
				4: Vietnamese.Tone.TILDE,
				5: Vietnamese.Tone.DOT
			},
			vowelDiacriticCommands = {
				6: Vietnamese.VowelDiacritic.CIRCUMFLEX,
				7: Vietnamese.VowelDiacritic.HORN,
				8: Vietnamese.VowelDiacritic.BREVE
			},
			key = input.slice( -1 );

		if ( toneCommands[ key ] ) {
			return createToneCommand( key, toneCommands[ key ] );
		}

		if ( vowelDiacriticCommands[ key ] ) {
			return createVowelDiacriticCommand( key, vowelDiacriticCommands[ key ] );
		}

		if ( key === '0' ) {
			return createRemoveToneCommand( key );
		}

		if ( key === '9' ) {
			return createDStrokeCommand( key );
		}

		return null;
	}

	/**
	 * Create a vowel-diacritic command with adapter-level literal fallback.
	 *
	 * Used by default Telex quick `w`, where `w` should first try to act as a
	 * horn command and then fall back to standalone `ư` output when no candidate
	 * can be transformed.
	 *
	 * @param {string} key Command key.
	 * @param {string} vowelDiacritic VowelDiacritic enum value.
	 * @param {string} fallbackLiteralOutput Literal output when the engine does not handle the command.
	 * @return {DecodedCommand} Decoded command with fallback literal output.
	 */
	function createVowelDiacriticCommandWithFallback( key, vowelDiacritic, fallbackLiteralOutput ) {
		var decoded = createVowelDiacriticCommand( key, vowelDiacritic );

		decoded.fallbackLiteralOutput = fallbackLiteralOutput;
		return decoded;
	}

	/**
	 * Recover the rendered command key for default Telex quick-`w` escape.
	 *
	 * Raw context distinguishes `ww -> w` from sequences such as `uw`, which
	 * have already rendered to the same visible `ư` surface.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} key Latest typed key.
	 * @param {string} context Raw jQuery.IME key context.
	 * @return {string|null} Command key to replace, or null when this is not a quick-`w` escape.
	 */
	function getTelexQuickWRepeatCommandKey( input, key, context ) {
		var sourcePair = context.slice( -2 ).toLowerCase(),
			previousOutput = input.slice( -2, -1 );

		if (
			key.toLowerCase() !== 'w' ||
			context.slice( -1 ).toLowerCase() !== 'w' ||
			sourcePair === 'aw' ||
			sourcePair === 'ow' ||
			sourcePair === 'uw'
		) {
			return null;
		}

		if ( previousOutput === 'ư' || previousOutput === 'Ư' ) {
			return previousOutput + key;
		}

		return null;
	}

	/**
	 * Check whether default Telex may use standalone quick `w -> ư`.
	 *
	 * Quick `w` is allowed for an empty candidate or onset-only prefix. Once
	 * the candidate has vowel material, `w` should stay a semantic horn/breve
	 * command or pass through.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} commandKey Command key recognized by the adapter.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {boolean} True if quick `w` fallback may be used.
	 */
	function candidateCanUseTelexQuickW( input, commandKey, tonePlacement ) {
		var state = parseExtractedCandidate( input, commandKey, tonePlacement );

		if ( !state ) {
			return true;
		}

		return state.status !== Vietnamese.StateType.UNRECOGNIZED &&
			state.structure.vowels.indices.length === 0 &&
			// In `qu`, the `u` belongs to the onset and should not trigger quick `w`.
			state.structure.onset.toLowerCase() !== 'qu';
	}

	/**
	 * Decode Telex input with profile-specific quick-key behavior.
	 *
	 * This is the shared implementation behind default Telex and Simple Telex.
	 * It handles direct commands first, then Telex delayed vowel-diacritic
	 * ambiguity, then optional default-Telex quick `w`.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} context Raw jQuery.IME key context.
	 * @param {DecoderOptions} [options] Decoder options.
	 * @param {TelexProfileOptions} [telexOptions] Telex profile options.
	 * @param {boolean} [telexOptions.quickW] Whether standalone quick `w` is enabled.
	 * @return {DecodedCommand|null} Decoded command with key and command fields, literal output, or null.
	 */
	function decodeTelexCommandWithOptions( input, context, options, telexOptions ) {
		var toneCommands = {
				s: Vietnamese.Tone.ACUTE,
				f: Vietnamese.Tone.GRAVE,
				r: Vietnamese.Tone.HOOK,
				x: Vietnamese.Tone.TILDE,
				j: Vietnamese.Tone.DOT
			},
			repeatedVowelDiacriticCommands = {
				aa: Vietnamese.VowelDiacritic.CIRCUMFLEX,
				ee: Vietnamese.VowelDiacritic.CIRCUMFLEX,
				oo: Vietnamese.VowelDiacritic.CIRCUMFLEX
			},
			delayedVowelDiacriticCommands = {
				a: {
					bases: [ 'a' ],
					vowelDiacritic: Vietnamese.VowelDiacritic.CIRCUMFLEX
				},
				e: {
					bases: [ 'e' ],
					vowelDiacritic: Vietnamese.VowelDiacritic.CIRCUMFLEX
				},
				o: {
					bases: [ 'o' ],
					vowelDiacritic: Vietnamese.VowelDiacritic.CIRCUMFLEX
				},
				w: {
					bases: [ 'a' ],
					vowelDiacritic: Vietnamese.VowelDiacritic.BREVE
				}
			},
			lowerInput = input.toLowerCase(),
			key = input.slice( -1 ),
			lowerKey = key.toLowerCase(),
			tonePlacement = options && options.tonePlacement,
			quickW = telexOptions && telexOptions.quickW,
			quickWRepeatCommandKey,
			vowelDiacriticCommand = repeatedVowelDiacriticCommands[ lowerInput.slice( -2 ) ],
			delayedCommand = delayedVowelDiacriticCommands[ lowerKey ];

		if ( toneCommands[ lowerKey ] ) {
			return createToneCommand( key, toneCommands[ lowerKey ] );
		}

		if ( lowerKey === 'z' ) {
			return createRemoveToneCommand( key );
		}

		if ( lowerInput.slice( -2 ) === 'dd' ) {
			return createDStrokeCommand( key );
		}

		if (
			delayedCommand &&
			candidateHasLiteralRepeatedKeyRun( input, key, lowerKey )
		) {
			return null;
		}

		if ( vowelDiacriticCommand ) {
			return createVowelDiacriticCommand( key, vowelDiacriticCommand );
		}

		if ( lowerKey === 'd' ) {
			return createDStrokeCommand( key );
		}

		if ( delayedCommand && candidateHasTargetVowelDiacritic(
			input,
			key,
			delayedCommand.vowelDiacritic,
			delayedCommand.bases,
			tonePlacement
		) ) {
			return createVowelDiacriticCommand( key, delayedCommand.vowelDiacritic );
		}

		if ( delayedCommand && candidateHasRecognizedLiteralStructure( input, tonePlacement ) ) {
			return null;
		}

		if ( delayedCommand && candidateCanReceiveTargetVowelDiacritic(
				input,
				key,
				delayedCommand.vowelDiacritic,
				delayedCommand.bases,
				{
					tonePlacement: tonePlacement
				}
		) ) {
			return createVowelDiacriticCommand( key, delayedCommand.vowelDiacritic );
		}

		if ( lowerKey === 'w' ) {
			if ( quickW ) {
				quickWRepeatCommandKey = getTelexQuickWRepeatCommandKey( input, key, context );
				if ( quickWRepeatCommandKey ) {
					return createLiteralOutputCommand(
						quickWRepeatCommandKey,
						getTelexQuickWLiteralOutput( key )
					);
				}

				if ( candidateCanUseTelexQuickW( input, key, tonePlacement ) ) {
					return createVowelDiacriticCommandWithFallback(
						key,
						Vietnamese.VowelDiacritic.HORN,
						getTelexQuickWOutput( key )
					);
				}
			}

			return createVowelDiacriticCommand( key, Vietnamese.VowelDiacritic.HORN );
		}

		return null;
	}

	/**
	 * Decode a Telex key sequence into a shared Vietnamese semantic command.
	 *
	 * This profile supports the common quick `w` key as literal `ư` when the
	 * current candidate cannot otherwise receive a Telex `w` command.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} context Raw jQuery.IME key context.
	 * @param {DecoderOptions} [options] Decoder options.
	 * @return {DecodedCommand|null} Decoded command with key and command fields, or null.
	 */
	function decodeTelexCommand( input, context, options ) {
		return decodeTelexCommandWithOptions( input, context, options, {
			quickW: true
		} );
	}

	/**
	 * Decode a Simple Telex key sequence.
	 *
	 * Simple Telex keeps standalone `w` literal and only applies `w` when the
	 * current candidate can receive breve or horn through the shared engine.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} context Raw jQuery.IME key context.
	 * @param {DecoderOptions} [options] Decoder options.
	 * @return {DecodedCommand|null} Decoded command with key and command fields, or null.
	 */
	function decodeSimpleTelexCommand( input, context, options ) {
		return decodeTelexCommandWithOptions( input, context, options, {
			quickW: false
		} );
	}

	/**
	 * Check whether the latest VIQR command key is escaped by a backslash.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} hornKey VIQR horn key, either `+` or `*`.
	 * @return {boolean} True if the latest command key should be literal.
	 */
	function isVIQREscapedCommand( input, hornKey ) {
		var key = input.slice( -1 ),
			previousKey = input.slice( -2, -1 ),
			commandKeys = {
				'\'': true,
				'`': true,
				'?': true,
				'~': true,
				'.': true,
				'^': true,
				'(': true,
				0: true
			};

		commandKeys[ hornKey ] = true;
		return previousKey === '\\' && commandKeys[ key ];
	}

	/**
	 * Decode a VIQR-family key using the provided horn key.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} hornKey VIQR horn key, either `+` or `*`.
	 * @return {DecodedCommand|null} Decoded command with key and command fields, or null.
	 */
	function decodeVIQRCommandWithHornKey( input, hornKey ) {
		var toneCommands = {
				'\'': Vietnamese.Tone.ACUTE,
				'`': Vietnamese.Tone.GRAVE,
				'?': Vietnamese.Tone.HOOK,
				'~': Vietnamese.Tone.TILDE,
				'.': Vietnamese.Tone.DOT
			},
			lowerInput = input.toLowerCase(),
			key = input.slice( -1 );

		if ( isVIQREscapedCommand( input, hornKey ) ) {
			return createLiteralOutputCommand( input.slice( -2 ), key );
		}

		if ( lowerInput.slice( -2 ) === 'dd' ) {
			return createDStrokeCommand( key );
		}

		if ( key === 'd' || key === 'D' ) {
			return createDStrokeCommand( key );
		}

		if ( toneCommands[ key ] ) {
			return createToneCommand( key, toneCommands[ key ] );
		}

		if ( key === '0' ) {
			return createRemoveToneCommand( key );
		}

		if ( key === '^' ) {
			return createVowelDiacriticCommand( key, Vietnamese.VowelDiacritic.CIRCUMFLEX );
		}

		if ( key === '(' ) {
			return createVowelDiacriticCommand( key, Vietnamese.VowelDiacritic.BREVE );
		}

		if ( key === hornKey ) {
			return createVowelDiacriticCommand( key, Vietnamese.VowelDiacritic.HORN );
		}

		return null;
	}

	/**
	 * Decode a VIQR key into a shared Vietnamese semantic command.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @return {DecodedCommand|null} Decoded command with key and command fields, or null.
	 */
	function decodeVIQRCommand( input ) {
		return decodeVIQRCommandWithHornKey( input, '+' );
	}

	/**
	 * Decode a VIQR* key into a shared Vietnamese semantic command.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @return {DecodedCommand|null} Decoded command with key and command fields, or null.
	 */
	function decodeVIQRStarCommand( input ) {
		return decodeVIQRCommandWithHornKey( input, '*' );
	}

	// [6] Adapter side candidate helpers

	/**
	 * Normalize an optional tone-placement policy.
	 *
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {string} Tone-placement policy.
	 */
	function normalizeTonePlacement( tonePlacement ) {
		return tonePlacement || Vietnamese.TonePlacement.TRADITIONAL;
	}

	/**
	 * Parse the rendered candidate before a command key.
	 *
	 * @param {string} input Text window ending with the command key.
	 * @param {string} commandKey Command key recognized by the adapter.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {CompositionState|null} Parsed candidate state, or null when empty.
	 */
	function parseExtractedCandidate( input, commandKey, tonePlacement ) {
		var extracted = extractCandidate( input, commandKey );

		if ( !extracted.candidate ) {
			return null;
		}

		return parseCandidate( extracted.candidate, tonePlacement );
	}

	/**
	 * Check whether a rendered candidate already has the requested vowel diacritic.
	 *
	 * Used by Telex repeated-key escape, where the raw key history has already
	 * been replaced by rendered Vietnamese text.
	 *
	 * @param {string} input Text window ending with the command key.
	 * @param {string} commandKey Command key recognized by the adapter.
	 * @param {string} vowelDiacritic Expected vowel-diacritic enum value.
	 * @param {string[]} bases Base vowel letters that may repeat this command.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {boolean} True if the command should escape a rendered diacritic.
	 */
	function candidateHasTargetVowelDiacritic( input, commandKey, vowelDiacritic, bases, tonePlacement ) {
		var state = parseExtractedCandidate( input, commandKey, tonePlacement ),
			target, token;

		if ( !state || state.status === Vietnamese.StateType.UNRECOGNIZED ) {
			return false;
		}

		target = resolveTonePlacement( state );
		if ( target === -1 ) {
			return false;
		}

		token = state.tokens[ target ];
		return token.vowelDiacritic === vowelDiacritic &&
			bases.includes( token.base.toLowerCase() );
	}

	/**
	 * Check whether a rendered candidate can receive the requested diacritic.
	 *
	 * @param {string} input Text window ending with the command key.
	 * @param {string} commandKey Command key recognized by the adapter.
	 * @param {string} vowelDiacritic Expected vowel-diacritic enum value.
	 * @param {string[]} bases Base vowel letters that may receive this command.
	 * @param {TargetVowelDiacriticOptions} [options] Extra constraints for input-method-specific commands.
	 * @return {boolean} True if the command can apply to the candidate.
	 */
	function candidateCanReceiveTargetVowelDiacritic(
		input, commandKey, vowelDiacritic, bases, options
	) {
		var tonePlacement = options && options.tonePlacement,
			state = parseExtractedCandidate( input, commandKey, tonePlacement ),
			target, token;

		if ( !state || state.status === Vietnamese.StateType.UNRECOGNIZED ) {
			return false;
		}

		target = resolveVowelDiacriticTarget( state, vowelDiacritic );
		if ( target === -1 ) {
			return canSwitchSameBaseVowelDiacritic( state, vowelDiacritic, bases ) ||
				vowelDiacritic === Vietnamese.VowelDiacritic.BREVE &&
				bases.includes( 'a' ) &&
				findUnmarkedOaPair( state ) !== -1 ||
				vowelDiacritic === Vietnamese.VowelDiacritic.CIRCUMFLEX &&
				bases.includes( 'o' ) &&
				findUoFamilyPair(
					state,
					Vietnamese.VowelDiacritic.HORN,
					Vietnamese.VowelDiacritic.HORN
				) !== -1;
		}

		token = state.tokens[ target ];
		return bases.includes( token.base.toLowerCase() );
	}

	/**
	 * Check whether a candidate can switch an existing same-base vowel diacritic.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} vowelDiacritic Requested VowelDiacritic enum value.
	 * @param {string[]} bases Base vowel letters accepted by the delayed command.
	 * @return {boolean} True if a same-base switch can satisfy the command.
	 */
	function canSwitchSameBaseVowelDiacritic( state, vowelDiacritic, bases ) {
		var target = resolveTonePlacement( state ),
			token;

		if ( target === -1 ) {
			return false;
		}

		token = state.tokens[ target ];
		if ( !bases.includes( token.base.toLowerCase() ) ) {
			return false;
		}

		return canSwitchTokenVowelDiacritic( token, vowelDiacritic );
	}

	/**
	 * Check whether a delayed Telex command key follows an already literal
	 * repeated-key run.
	 *
	 * Once `ôo` has escaped to literal `oo`, later `o` keys should keep
	 * extending that literal run instead of starting a new circumflex cycle.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} commandKey Latest typed key to remove for candidate extraction.
	 * @param {string} base Lowercase delayed command key.
	 * @return {boolean} True if the latest key should stay literal.
	 */
	function candidateHasLiteralRepeatedKeyRun( input, commandKey, base ) {
		var extracted = extractCandidate( input, commandKey ),
			candidate = normalizeText( extracted.candidate, 'NFC' ).toLowerCase();

		return candidate.includes( base + base );
	}

	/**
	 * Check whether the literal text including the latest key is already a
	 * recognized Vietnamese composition structure.
	 *
	 * This lets ambiguous Telex vowel letters remain literal in structures such
	 * as `oao` and `oeo` without hard-coding those rimes in the adapter.
	 *
	 * @param {string} input Text window ending with the latest typed key.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {boolean} True if the latest key should stay literal.
	 */
	function candidateHasRecognizedLiteralStructure( input, tonePlacement ) {
		var extracted = extractCandidate( input, '' ),
			state;

		if ( !extracted.candidate ) {
			return false;
		}

		state = parseCandidate( extracted.candidate, tonePlacement );
		return state.status === Vietnamese.StateType.STRUCTURALLY_VALID;
	}

	// [7] Candidate extraction

	/**
	 * Check whether a UTF-16 code unit may belong to a Vietnamese candidate run.
	 *
	 * Candidate extraction is intentionally code-unit based because jQuery.IME
	 * supplies bounded JavaScript string windows around the caret.
	 *
	 * @param {string} character Single JavaScript string code unit.
	 * @return {boolean} True if the character can be part of the candidate.
	 */
	function isCandidateCodeUnit( character ) {
		var code = character.charCodeAt( 0 );

		return code >= 0x41 && code <= 0x5A ||
			code >= 0x61 && code <= 0x7A ||
			code >= 0xC0 && code <= 0x1EF9 ||
			code >= 0x300 && code <= 0x36F;
	}

	/**
	 * Split the text before a command key into the unchanged prefix and the
	 * candidate text that may be transformed by the Vietnamese engine.
	 *
	 * @param {string} input Text window ending with the command key.
	 * @param {string} commandKey Command key recognized by the adapter.
	 * @return {ExtractedCandidate} Extracted candidate.
	 */
	function extractCandidate( input, commandKey ) {
		var commandStart = input.length - commandKey.length,
			beforeCommand = input.slice( 0, commandStart ),
			candidateStart = beforeCommand.length,
			candidate;

		while (
			candidateStart > 0 &&
			isCandidateCodeUnit( beforeCommand.charAt( candidateStart - 1 ) )
		) {
			candidateStart--;
		}

		if ( candidateStart === beforeCommand.length ) {
			return {
				prefix: beforeCommand,
				candidate: ''
			};
		}

		candidate = beforeCommand.slice( candidateStart );
		return {
			prefix: beforeCommand.slice( 0, candidateStart ),
			candidate: candidate
		};
	}

	// [8] Tokenization and Unicode helpers

	/**
	 * Detect a decomposed Unicode combining mark in the candidate stream.
	 *
	 * @param {string} character Single character.
	 * @return {boolean} True if the character is a combining mark.
	 */
	function isCombiningMark( character ) {
		var code = character.charCodeAt( 0 );

		return code >= 0x300 && code <= 0x36F;
	}

	/**
	 * Check whether a base Latin letter can participate as Vietnamese vowel material.
	 *
	 * @param {string} character Base character.
	 * @return {boolean} True if the character is a base vowel.
	 */
	function isBaseVowel( character ) {
		return 'aeiouy'.includes( character.toLowerCase() );
	}

	/**
	 * Check whether a character is an ASCII Latin letter.
	 *
	 * @param {string} character Single character.
	 * @return {boolean} True if the character is an ASCII Latin letter.
	 */
	function isAsciiLetter( character ) {
		var code = character.charCodeAt( 0 );

		return code >= 0x41 && code <= 0x5A ||
			code >= 0x61 && code <= 0x7A;
	}

	/**
	 * Create a semantic token from one base character.
	 *
	 * @param {string} character Base character from NFD-normalized candidate text.
	 * @return {CompositionToken|null} Composition token, or null for unsupported characters.
	 */
	function createToken( character ) {
		if ( character === 'đ' ) {
			return {
				base: 'd',
				dStroke: true,
				isVowel: false,
				tone: Vietnamese.Tone.NONE,
				vowelDiacritic: Vietnamese.VowelDiacritic.NONE
			};
		}

		if ( character === 'Đ' ) {
			return {
				base: 'D',
				dStroke: true,
				isVowel: false,
				tone: Vietnamese.Tone.NONE,
				vowelDiacritic: Vietnamese.VowelDiacritic.NONE
			};
		}

		if ( isAsciiLetter( character ) ) {
			return {
				base: character,
				dStroke: false,
				isVowel: isBaseVowel( character ),
				tone: Vietnamese.Tone.NONE,
				vowelDiacritic: Vietnamese.VowelDiacritic.NONE
			};
		}

		return null;
	}

	/**
	 * Clone one semantic token before a transform mutates it.
	 *
	 * @param {CompositionToken} token Composition token.
	 * @return {CompositionToken} Cloned token.
	 */
	function cloneToken( token ) {
		return {
			base: token.base,
			dStroke: token.dStroke,
			isVowel: token.isVowel,
			tone: token.tone,
			vowelDiacritic: token.vowelDiacritic
		};
	}

	/**
	 * Clone the mutable parts of a composition state before transformation.
	 *
	 * @param {CompositionState} state Composition state.
	 * @return {CompositionState} Cloned state.
	 */
	function cloneState( state ) {
		return {
			status: state.status,
			tone: state.tone,
			tokens: state.tokens.map( cloneToken )
		};
	}

	/**
	 * Re-analyze a transformed state and package any literal suffix.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string|null} literalSuffix Literal suffix to append, if any.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult} Transform result with state and literalSuffix fields.
	 */
	function resultFromState( state, literalSuffix, tonePlacement ) {
		return {
			state: prepareState( state, tonePlacement ),
			literalSuffix: literalSuffix || ''
		};
	}

	/**
	 * Render one token to the identity used by structure analysis.
	 *
	 * @param {CompositionToken} token Composition token.
	 * @return {string} Token identity.
	 */
	function getTokenIdentity( token ) {
		if ( token.dStroke ) {
			return token.base === 'D' ? 'Đ' : 'đ';
		}

		if ( token.isVowel ) {
			return getVowelIdentity( token );
		}

		return token.base;
	}

	/**
	 * Render a state to lowercase structural text without visible tone marks.
	 *
	 * @param {CompositionState} state Composition state.
	 * @return {string} Lowercase structural text.
	 */
	function getLowerText( state ) {
		var i,
			output = '';

		for ( i = 0; i < state.tokens.length; i++ ) {
			output += getTokenIdentity( state.tokens[ i ] ).toLowerCase();
		}

		return output;
	}

	// [9] Finite rime recognizer

	/**
	 * Get the finite rime inventory used by the structural recognizer.
	 *
	 * The inventory separates complete Vietnamese rimes from source spellings
	 * that are only accepted as intermediate composition precursors.
	 *
	 * It is intentionally structural data, not a word list.
	 *
	 * @return {RimeInventory} Recognized complete rimes and composition precursors.
	 */
	function getRimeInventory() {
		return {
			complete: [
				// Open and off-glide rimes.
				'a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y',
				'ai', 'ao', 'au', 'ay', 'âu', 'ây', 'eo', 'êu',
				'ia', 'iêu', 'iu',
				'oi', 'ôi', 'ơi',
				'oa', 'oai', 'oao', 'oay', 'oe', 'oeo', 'oo',
				'ua', 'uay', 'uây', 'uê', 'ui', 'uôi', 'uơ',
				'uy', 'uya', 'uyu',
				'ưa', 'ưi', 'ưu', 'ươi', 'ươu',
				'ya', 'yêu',

				// Rimes ending in m.
				'am', 'ăm', 'âm', 'em', 'êm', 'im', 'om', 'ôm', 'ơm', 'um', 'ưm',
				'iêm', 'oam', 'oăm', 'oem', 'uôm', 'ươm', 'yêm',

				// Rimes ending in n.
				'an', 'ăn', 'ân', 'en', 'ên', 'in', 'on', 'ôn', 'ơn', 'un', 'ưn',
				'iên', 'oan', 'oăn', 'oen',
				'uân', 'uôn', 'uyn', 'uyên', 'ươn', 'yên',

				// Rimes ending in ng.
				'ang', 'ăng', 'âng', 'eng', 'êng', 'ong', 'ông', 'ung', 'ưng',
				'iêng', 'oang', 'oăng', 'oong',
				'uâng', 'uông', 'ương', 'yêng',

				// Rimes ending in nh.
				'anh', 'ênh', 'inh', 'oanh', 'uênh', 'uynh',

				// Rimes ending in ch.
				'ach', 'êch', 'ich', 'oach', 'uêch', 'uych',

				// Rimes ending in c.
				'ac', 'ăc', 'âc', 'ec', 'oc', 'ôc', 'uc', 'ưc',
				'iêc', 'oac', 'oăc', 'ooc',
				'uôc', 'ươc',

				// Rimes ending in t.
				'at', 'ăt', 'ât', 'et', 'êt', 'it', 'ot', 'ôt', 'ơt', 'ut', 'ưt',
				'iêt', 'oat', 'oăt', 'oet',
				'uât', 'uôt', 'uyt', 'uyêt', 'ươt', 'yêt',

				// Rimes ending in p.
				'ap', 'ăp', 'âp', 'ep', 'êp', 'ip', 'op', 'ôp', 'ơp', 'up',
				'iêp', 'oap', 'uôp', 'uyp', 'ươp',

				// Project-supported explicit extended spellings.
				'uu', 'ôo', 'ôô', 'ôôn', 'ôông'
			],
			composable: [
				// Composition-only e/ê and iê-family precursors.
				'eu', 'ie', 'ieu', 'iem', 'ien', 'ieng', 'iec', 'iet', 'iep',
				'ue', 'uye', 'uyen', 'uyet',
				'enh', 'ech', 'uenh', 'uech',
				'ye', 'yeu', 'yem', 'yen', 'yeng', 'yet',

				// Composition-only uô/ươ and uâ-family precursors.
				'uo', 'uoi', 'uou', 'uom', 'uon', 'uong', 'uoc', 'uot', 'uop',
				'ưo', 'ưoi', 'ưom', 'ưon', 'ưong', 'ưoc', 'ưot', 'ưop',
				'uan', 'uang', 'uat'
			]
		};
	}

	/**
	 * Build lookup maps for complete rimes, composition precursors, and prefixes.
	 *
	 * The maps are derived from the finite inventory so recognition can remain
	 * data-driven without scanning the inventory for every parsed candidate.
	 *
	 * @return {RimeRecognitionMaps} Recognition maps keyed by normalized rime text.
	 */
	function buildRimeRecognitionMaps() {
		var i, j, rime, inventoryList,
			inventory = getRimeInventory(),
			complete = {},
			composable = {},
			prefix = {};

		/**
		 * Add exact rime matches and every shorter prefix used for intermediate states.
		 *
		 * @param {string[]} source Rime inventory list.
		 * @param {Object.<string, boolean>} target Recognition map to populate.
		 */
		function addInventory( source, target ) {
			for ( i = 0; i < source.length; i++ ) {
				rime = normalizeText( source[ i ], 'NFC' );
				target[ rime ] = true;

				for ( j = 1; j < rime.length; j++ ) {
					prefix[ rime.slice( 0, j ) ] = true;
				}
			}
		}

		inventoryList = inventory.complete || [];
		addInventory( inventoryList, complete );
		inventoryList = inventory.composable || [];
		addInventory( inventoryList, composable );

		return {
			complete: complete,
			composable: composable,
			prefix: prefix
		};
	}

	/**
	 * Return cached rime recognition maps, building them on first use.
	 *
	 * @return {RimeRecognitionMaps} Recognition maps keyed by normalized rime text.
	 */
	function getRimeRecognitionMaps() {
		if ( !rimeRecognitionMaps ) {
			rimeRecognitionMaps = buildRimeRecognitionMaps();
		}

		return rimeRecognitionMaps;
	}

	/**
	 * Recognize a rime against the finite Vietnamese composition inventory.
	 *
	 * @param {string} rime Candidate rime text.
	 * @return {RimeRecognition} Recognition result with a RimeStatus value.
	 */
	function recognizeRime( rime ) {
		var maps = getRimeRecognitionMaps(),
			normalizedRime = normalizeText( rime, 'NFC' ).toLowerCase(),
			isComplete = !!maps.complete[ normalizedRime ],
			isComposable = !!maps.composable[ normalizedRime ],
			isPrefix = !!maps.prefix[ normalizedRime ];

		if ( !normalizedRime ) {
			return {
				status: Vietnamese.RimeStatus.INVALID
			};
		}

		if ( isComplete && isPrefix ) {
			return {
				status: Vietnamese.RimeStatus.COMPLETE_AND_PREFIX
			};
		}

		if ( isComplete ) {
			return {
				status: Vietnamese.RimeStatus.COMPLETE
			};
		}

		if ( isComposable ) {
			return {
				status: Vietnamese.RimeStatus.COMPOSABLE
			};
		}

		if ( isPrefix ) {
			return {
				status: Vietnamese.RimeStatus.PREFIX
			};
		}

		return {
			status: Vietnamese.RimeStatus.INVALID
		};
	}

	// [10] Orthographic structure analysis

	/**
	 * Check whether there is vowel material at or after a token index.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {number} startIndex Token index to start scanning from.
	 * @return {boolean} True if a later token is a vowel.
	 */
	function hasVowelFromIndex( state, startIndex ) {
		var i;

		for ( i = startIndex; i < state.tokens.length; i++ ) {
			if ( state.tokens[ i ].isVowel ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Check whether the written `u` after `q` starts a recognized `uy...` rime.
	 *
	 * Most `qu` spellings treat the `u` as onset material, but forms such as
	 * `quynh` need the same `uynh` rime analysis as `huynh`.
	 *
	 * @param {string} lowerText Lowercase candidate text.
	 * @return {boolean} True if `q` should be the onset and `u` should remain in the rime.
	 */
	function shouldKeepQuUInRime( lowerText ) {
		var rimeStatus;

		if ( lowerText.indexOf( 'quy' ) !== 0 || lowerText === 'quy' ) {
			return false;
		}

		rimeStatus = recognizeRime( lowerText.slice( 1 ) ).status;
		return rimeStatus !== Vietnamese.RimeStatus.INVALID;
	}

	/**
	 * Check whether text is a prefix of any supported Vietnamese onset.
	 *
	 * Onset prefixes are accepted as intermediate states while users are still
	 * typing the beginning of a syllable.
	 *
	 * @param {string} lowerText Lowercase candidate text.
	 * @return {boolean} True if the text can still become an onset.
	 */
	function isOnsetPrefix( lowerText ) {
		var i;

		for ( i = 0; i < ONSETS.length; i++ ) {
			if ( ONSETS[ i ].indexOf( lowerText ) === 0 ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Resolve the onset and any vowel tokens that should be ignored.
	 *
	 * `qu` and `gi` are special because their written second letters can look
	 * like vowels but may belong to the onset for composition purposes.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} lowerText Lowercase candidate text.
	 * @return {OnsetResolution} Onset boundary, ignored vowel indices, and onset text.
	 */
	function resolveOnset( state, lowerText ) {
		var i;

		if ( shouldKeepQuUInRime( lowerText ) ) {
			return {
				end: 1,
				ignoredVowelIndices: {},
				text: 'q'
			};
		}

		if ( lowerText.indexOf( 'qu' ) === 0 ) {
			return {
				end: 2,
				ignoredVowelIndices: { 1: true },
				text: 'qu'
			};
		}

		if ( lowerText.indexOf( 'gi' ) === 0 && hasVowelFromIndex( state, 2 ) ) {
			return {
				end: 2,
				ignoredVowelIndices: { 1: true },
				text: 'gi'
			};
		}

		for ( i = 0; i < ONSETS.length; i++ ) {
			if ( lowerText.indexOf( ONSETS[ i ] ) === 0 ) {
				return {
					end: ONSETS[ i ].length,
					ignoredVowelIndices: {},
					text: ONSETS[ i ]
				};
			}
		}

		return {
			end: 0,
			ignoredVowelIndices: {},
			text: ''
		};
	}

	/**
	 * Collect vowel identities that remain eligible after onset handling.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {Object.<string, boolean>} ignoredVowelIndices Token indices ignored as onset material.
	 * @return {EligibleVowels} Eligible vowel identities and token indices.
	 */
	function collectEligibleVowels( state, ignoredVowelIndices ) {
		var i,
			identities = [],
			indices = [];

		for ( i = 0; i < state.tokens.length; i++ ) {
			if ( state.tokens[ i ].isVowel && !ignoredVowelIndices[ i ] ) {
				identities.push( getVowelIdentity( state.tokens[ i ] ) );
				indices.push( i );
			}
		}

		return {
			identities: identities,
			indices: indices
		};
	}

	/**
	 * Find the written ending of a rime, including consonantal endings and off-glides.
	 *
	 * @param {string} rimeText Lowercase rime text.
	 * @return {string} Ending text, or an empty string.
	 */
	function findEnding( rimeText ) {
		if ( rimeText.length > 2 && rimeText.slice( -2 ) === 'ch' ) {
			return 'ch';
		}

		if ( rimeText.length > 2 && rimeText.slice( -2 ) === 'ng' ) {
			return 'ng';
		}

		if ( rimeText.length > 2 && rimeText.slice( -2 ) === 'nh' ) {
			return 'nh';
		}

		if (
			rimeText.length > 1 &&
			[ 'm', 'n', 'p', 't', 'c' ].includes( rimeText.slice( -1 ) )
		) {
			return rimeText.slice( -1 );
		}

		if ( rimeText.length > 1 && 'iyou'.includes( rimeText.slice( -1 ) ) ) {
			return rimeText.slice( -1 );
		}

		return '';
	}

	/**
	 * Check whether an ending is a Vietnamese checked ending.
	 *
	 * @param {string} ending Ending text.
	 * @return {boolean} True if the ending is checked.
	 */
	function isCheckedEnding( ending ) {
		return ending === 'c' || ending === 'ch' || ending === 'p' || ending === 't';
	}

	/**
	 * Resolve tone targets for covered complex rime and nucleus families.
	 *
	 * @param {OrthographicStructure} structure Analyzed orthographic structure.
	 * @return {number} Token index, or -1 when no family-specific target applies.
	 */
	function findRimePatternToneTarget( structure ) {
		var i, pattern,
			patterns = [
				{ text: 'uyê', offset: 2, prefix: true },
				{ text: 'uye', offset: 2, prefix: true },
				{ text: 'uya', offset: 1 },
				{ text: 'iê', offset: 1, prefix: true },
				{ text: 'yê', offset: 1, prefix: true },
				{ text: 'uô', offset: 1, prefix: true },
				{ text: 'ươ', offset: 1, prefix: true },
				{ text: 'uâ', offset: 1, prefix: true },
				{ text: 'uă', offset: 1, prefix: true },
				{ text: 'ie', offset: 1, prefix: true },
				{ text: 'ye', offset: 1, prefix: true },
				{ text: 'uo', offset: 1, prefix: true },
				{ text: 'ưa', offset: 0 },
				{ text: 'ua', offset: 0 },
				{ text: 'ia', offset: 0 },
				{ text: 'ya', offset: 0 }
			];

		for ( i = 0; i < patterns.length; i++ ) {
			pattern = patterns[ i ];
			if (
				( pattern.prefix && structure.rime.indexOf( pattern.text ) === 0 ) ||
				structure.rime === pattern.text
			) {
				return structure.rimeStart + pattern.offset;
			}
		}

		return -1;
	}

	/**
	 * Resolve tone placement for final off-glides such as `ai`, `ay`, `ao`, and `au`.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {EligibleVowels} vowels Eligible vowel identities and token indices.
	 * @return {number} Token index, or -1 when the rime has no final off-glide.
	 */
	function findOffGlideToneTarget( state, vowels ) {
		var lastIndex, previousIndex, lastIdentity;

		if ( vowels.indices.length < 2 ) {
			return -1;
		}

		lastIndex = vowels.indices[ vowels.indices.length - 1 ];
		previousIndex = vowels.indices[ vowels.indices.length - 2 ];
		lastIdentity = vowels.identities[ vowels.identities.length - 1 ];

		if (
			lastIndex === state.tokens.length - 1 &&
			[ 'i', 'y', 'o', 'u' ].includes( lastIdentity )
		) {
			return previousIndex;
		}

		return -1;
	}

	/**
	 * Check whether tone placement depends on traditional versus reformed policy.
	 *
	 * @param {OrthographicStructure} structure Analyzed orthographic structure.
	 * @return {boolean} True for open `oa`, `oe`, and `uy`.
	 */
	function isOpenMedialRime( structure ) {
		return structure.rime === 'oa' || structure.rime === 'oe' || structure.rime === 'uy';
	}

	/**
	 * Resolve the policy-specific target for open `oa`, `oe`, and `uy`.
	 *
	 * @param {OrthographicStructure} structure Analyzed orthographic structure.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {number} Token index, or -1 when the rime is not an open medial rime.
	 */
	function findOpenMedialToneTarget( structure, tonePlacement ) {
		var vowels = structure.vowels;

		if ( !isOpenMedialRime( structure ) ) {
			return -1;
		}

		if ( normalizeTonePlacement( tonePlacement ) === Vietnamese.TonePlacement.REFORMED ) {
			return vowels.indices[ vowels.indices.length - 1 ];
		}

		return vowels.indices[ 0 ];
	}

	/**
	 * Resolve the visible tone-mark target for an analyzed composition state.
	 *
	 * The resolver applies VIME's tone-placement precedence: single-vowel
	 * target, open medial policy, known rime families, off-glides, then last
	 * eligible vowel fallback.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {OrthographicStructure} structure Analyzed orthographic structure.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {number} Token index, or -1 if there is no eligible vowel.
	 */
	function findToneTarget( state, structure, tonePlacement ) {
		var patternTarget, offGlideTarget,
			vowels = structure.vowels;

		if ( vowels.indices.length === 0 ) {
			return -1;
		}

		if ( vowels.indices.length === 1 ) {
			return vowels.indices[ 0 ];
		}

		patternTarget = findOpenMedialToneTarget( structure, tonePlacement );
		if ( patternTarget !== -1 ) {
			return patternTarget;
		}

		patternTarget = findRimePatternToneTarget( structure );
		if ( patternTarget !== -1 ) {
			return patternTarget;
		}

		offGlideTarget = findOffGlideToneTarget( state, vowels );
		if ( offGlideTarget !== -1 ) {
			return offGlideTarget;
		}

		return vowels.indices[ vowels.indices.length - 1 ];
	}

	/**
	 * Analyze candidate tokens as an orthographic onset plus rime structure.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {OrthographicStructure} Structure analysis used for validation and rendering.
	 */
	function analyzeStructure( state, tonePlacement ) {
		var lowerText = getLowerText( state ),
			onset = resolveOnset( state, lowerText ),
			vowels = collectEligibleVowels( state, onset.ignoredVowelIndices ),
			rimeText = lowerText.slice( onset.end ),
			ending = findEnding( rimeText ),
			rimeRecognition = recognizeRime( rimeText ),
			structure = {
				checked: false,
				ending: ending,
				ignoredVowelIndices: onset.ignoredVowelIndices,
				onset: onset.text,
				rime: rimeText,
				rimeRecognition: rimeRecognition,
				rimeStatus: rimeRecognition.status,
				rimeStart: onset.end,
				toneTargetIndex: -1,
				vowels: vowels
			};

		structure.checked = isCheckedEnding( ending );
		structure.toneTargetIndex = findToneTarget( state, structure, tonePlacement );
		return structure;
	}

	/**
	 * Classify a candidate by its written structure, without lexical lookup.
	 *
	 * This keeps Telex command keys literal once a Latin run cannot be
	 * recognized by the finite Vietnamese composition inventory.
	 *
	 * @param {CompositionState} state Composition state with analyzed structure.
	 * @return {string} StateType value.
	 */
	function classifyStructure( state ) {
		var rimeStatus,
			vowels = state.structure.vowels.indices,
			lowerText = getLowerText( state );

		if ( vowels.length === 0 ) {
			return isOnsetPrefix( lowerText ) ?
				Vietnamese.StateType.INTERMEDIATE :
				Vietnamese.StateType.UNRECOGNIZED;
		}

		rimeStatus = state.structure.rimeStatus;
		if ( rimeStatus === Vietnamese.RimeStatus.INVALID ) {
			return Vietnamese.StateType.UNRECOGNIZED;
		}

		if (
			rimeStatus === Vietnamese.RimeStatus.PREFIX ||
			rimeStatus === Vietnamese.RimeStatus.COMPOSABLE
		) {
			return Vietnamese.StateType.INTERMEDIATE;
		}

		return Vietnamese.StateType.STRUCTURALLY_VALID;
	}

	/**
	 * Attach structure analysis and structural classification to a state.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {CompositionState} The same state object with structure and status fields.
	 */
	function prepareState( state, tonePlacement ) {
		state.structure = analyzeStructure( state, tonePlacement );
		state.status = classifyStructure( state );
		return state;
	}

	// [11] Candidate parsing and rendering

	/**
	 * Check whether a vowel diacritic can be applied to a base vowel.
	 *
	 * @param {string} base Base Latin letter.
	 * @param {string} vowelDiacritic VowelDiacritic enum value.
	 * @return {boolean} True if the combination is a Vietnamese vowel letter.
	 */
	function isValidVowelDiacritic( base, vowelDiacritic ) {
		var lowerBase = base.toLowerCase();

		if ( vowelDiacritic === Vietnamese.VowelDiacritic.NONE ) {
			return true;
		}

		if ( vowelDiacritic === Vietnamese.VowelDiacritic.CIRCUMFLEX ) {
			return lowerBase === 'a' || lowerBase === 'e' || lowerBase === 'o';
		}

		if ( vowelDiacritic === Vietnamese.VowelDiacritic.BREVE ) {
			return lowerBase === 'a';
		}

		if ( vowelDiacritic === Vietnamese.VowelDiacritic.HORN ) {
			return lowerBase === 'o' || lowerBase === 'u';
		}

		return false;
	}

	/**
	 * Apply one decomposed combining mark to a parsed token.
	 *
	 * The parser accepts at most one semantic tone for the whole candidate and
	 * at most one vowel diacritic per token.
	 *
	 * @param {CompositionToken} token Token currently being parsed.
	 * @param {string} mark Combining mark.
	 * @param {CompositionState} state Composition state being built.
	 * @return {boolean} True if the mark was accepted.
	 */
	function addCombiningMarkToToken( token, mark, state ) {
		var tone = markToTone[ mark ],
			vowelDiacritic = markToVowelDiacritic[ mark ];

		if ( tone ) {
			if ( !token.isVowel || state.tone !== Vietnamese.Tone.NONE ) {
				return false;
			}

			token.tone = tone;
			state.tone = tone;
			return true;
		}

		if ( vowelDiacritic ) {
			if ( !token.isVowel || token.vowelDiacritic !== Vietnamese.VowelDiacritic.NONE ) {
				return false;
			}

			if ( !isValidVowelDiacritic( token.base, vowelDiacritic ) ) {
				return false;
			}

			token.vowelDiacritic = vowelDiacritic;
			return true;
		}

		return false;
	}

	/**
	 * Return an empty unrecognized state for candidates that cannot be parsed.
	 *
	 * @return {CompositionState} Unrecognized composition state.
	 */
	function unrecognizedCandidate() {
		return {
			structure: null,
			status: Vietnamese.StateType.UNRECOGNIZED,
			tone: Vietnamese.Tone.NONE,
			tokens: []
		};
	}

	/**
	 * Parse rendered candidate text into a minimal Vietnamese composition state.
	 *
	 * @param {string} candidate Candidate text near the caret.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {CompositionState} Composition state.
	 */
	function parseCandidate( candidate, tonePlacement ) {
		var i, character, token,
			normalizedCandidate = normalizeText( candidate, 'NFD' ),
			state = {
				status: Vietnamese.StateType.STRUCTURALLY_VALID,
				tone: Vietnamese.Tone.NONE,
				tokens: []
			};

		if ( !normalizedCandidate ) {
			return unrecognizedCandidate();
		}

		for ( i = 0; i < normalizedCandidate.length; i++ ) {
			character = normalizedCandidate.charAt( i );

			if ( isCombiningMark( character ) ) {
				if (
					state.tokens.length === 0 ||
					!addCombiningMarkToToken( state.tokens[ state.tokens.length - 1 ], character, state )
				) {
					return unrecognizedCandidate();
				}

				continue;
			}

			token = createToken( character );
			if ( !token ) {
				return unrecognizedCandidate();
			}

			state.tokens.push( token );
		}

		return prepareState( state, tonePlacement );
	}

	/**
	 * Render a semantic token to NFC, optionally with a visible tone mark.
	 *
	 * @param {CompositionToken} token Composition token.
	 * @param {string} tone Tone enum value to render on this token.
	 * @return {string} NFC token output.
	 */
	function renderToken( token, tone ) {
		var output;

		if ( token.dStroke ) {
			return token.base === 'D' ? 'Đ' : 'đ';
		}

		output = token.base;
		if ( token.vowelDiacritic !== Vietnamese.VowelDiacritic.NONE ) {
			output += vowelDiacriticToMark[ token.vowelDiacritic ];
		}

		if ( tone && tone !== Vietnamese.Tone.NONE ) {
			output += toneToMark[ tone ];
		}

		return normalizeText( output, 'NFC' );
	}

	/**
	 * Render a token as a lowercase vowel identity without tone.
	 *
	 * @param {CompositionToken} token Composition token.
	 * @return {string} NFC vowel identity.
	 */
	function getVowelIdentity( token ) {
		return renderToken( {
			base: token.base.toLowerCase(),
			dStroke: false,
			isVowel: token.isVowel,
			tone: Vietnamese.Tone.NONE,
			vowelDiacritic: token.vowelDiacritic
		}, Vietnamese.Tone.NONE );
	}

	/**
	 * Resolve the token index that should carry the visible tone mark.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {number} Token index, or -1 if there is no vowel target.
	 */
	function resolveTonePlacement( state, tonePlacement ) {
		if ( !state.structure ) {
			prepareState( state, tonePlacement );
		}

		return state.structure ? findToneTarget( state, state.structure, tonePlacement ) : -1;
	}

	/**
	 * Render a Vietnamese composition state to normalized output text.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {string} NFC output.
	 */
	function renderCandidate( state, tonePlacement ) {
		var i,
			output = '',
			toneTarget = resolveTonePlacement( state, tonePlacement );

		for ( i = 0; i < state.tokens.length; i++ ) {
			output += renderToken(
				state.tokens[ i ],
				i === toneTarget ? state.tone : Vietnamese.Tone.NONE
			);
		}

		return normalizeText( output, 'NFC' );
	}

	/**
	 * Update the semantic tone and synchronize per-token tone fields.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} tone Tone enum value.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 */
	function setStateTone( state, tone, tonePlacement ) {
		var i,
			toneTarget = resolveTonePlacement( state, tonePlacement );

		state.tone = tone;
		for ( i = 0; i < state.tokens.length; i++ ) {
			state.tokens[ i ].tone = i === toneTarget ? tone : Vietnamese.Tone.NONE;
		}
	}

	// [12] Semantic transformations

	/**
	 * Check whether a semantic tone can be applied to the current state.
	 *
	 * Checked rimes accept only acute and dot tone commands.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} tone Tone enum value.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {boolean} True if the tone command is structurally allowed.
	 */
	function canApplyTone( state, tone, tonePlacement ) {
		if ( resolveTonePlacement( state, tonePlacement ) === -1 ) {
			return false;
		}

		return !( state.structure &&
			state.structure.checked &&
			tone !== Vietnamese.Tone.ACUTE &&
			tone !== Vietnamese.Tone.DOT );
	}

	/**
	 * Apply, replace, or repeated-key escape a semantic tone.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {SemanticCommand} command Semantic apply-tone command.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null if the tone is not allowed.
	 */
	function applyTone( state, command, tonePlacement ) {
		var nextState,
			tone = command.tone;

		if ( !canApplyTone( state, tone, tonePlacement ) ) {
			return null;
		}

		nextState = cloneState( state );
		if ( state.tone === tone ) {
			setStateTone( nextState, Vietnamese.Tone.NONE, tonePlacement );
			return resultFromState( nextState, command.literal, tonePlacement );
		}

		setStateTone( nextState, tone, tonePlacement );
		return resultFromState( nextState, null, tonePlacement );
	}

	/**
	 * Remove the semantic tone from a candidate.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no tone exists.
	 */
	function removeTone( state, tonePlacement ) {
		var nextState;

		if ( state.tone === Vietnamese.Tone.NONE ) {
			return null;
		}

		nextState = cloneState( state );
		setStateTone( nextState, Vietnamese.Tone.NONE, tonePlacement );
		return resultFromState( nextState, null, tonePlacement );
	}

	/**
	 * Resolve the primary target for a simple vowel-diacritic command.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} vowelDiacritic VowelDiacritic enum value.
	 * @return {number} Token index, or -1 when no simple target exists.
	 */
	function resolveVowelDiacriticTarget( state, vowelDiacritic ) {
		var target = resolveTonePlacement( state );

		if (
			target !== -1 &&
			state.tokens[ target ].vowelDiacritic === Vietnamese.VowelDiacritic.NONE &&
			isValidVowelDiacritic( state.tokens[ target ].base, vowelDiacritic )
		) {
			return target;
		}

		return -1;
	}

	/**
	 * Resolve a later eligible vowel for multi-vowel repeated-key behavior.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} vowelDiacritic VowelDiacritic enum value.
	 * @param {number} excludedTarget Token index already carrying the command.
	 * @return {number} Token index, or -1 when no additional target exists.
	 */
	function resolveAdditionalVowelDiacriticTarget( state, vowelDiacritic, excludedTarget ) {
		var i, index, token,
			vowels = state.structure.vowels.indices;

		for ( i = vowels.length - 1; i >= 0; i-- ) {
			index = vowels[ i ];
			token = state.tokens[ index ];

			if (
				index !== excludedTarget &&
				token.vowelDiacritic === Vietnamese.VowelDiacritic.NONE &&
				isValidVowelDiacritic( token.base, vowelDiacritic )
			) {
				return index;
			}
		}

		return -1;
	}

	/**
	 * Apply a vowel diacritic to one token and reclassify the result.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {number} target Token index.
	 * @param {string} vowelDiacritic VowelDiacritic enum value.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult} Transform result.
	 */
	function applyVowelDiacriticToTarget( state, target, vowelDiacritic, tonePlacement ) {
		var nextState = cloneState( state );

		nextState.tokens[ target ].vowelDiacritic = vowelDiacritic;
		return resultFromState( nextState, null, tonePlacement );
	}

	/**
	 * Check whether a vowel pair is part of ignored onset material.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {number} firstIndex First token index of the pair.
	 * @return {boolean} True if either token is ignored as onset material.
	 */
	function isIgnoredVowelPair( state, firstIndex ) {
		return !!(
			state.structure &&
			( state.structure.ignoredVowelIndices[ firstIndex ] ||
				state.structure.ignoredVowelIndices[ firstIndex + 1 ] )
		);
	}

	/**
	 * Find the last matching vowel pair outside ignored onset material.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {VowelPairPattern} pair Pair shape to match.
	 * @return {number} First token index of the pair, or -1.
	 */
	function findVowelPair( state, pair ) {
		var i, firstToken, secondToken;

		for ( i = state.tokens.length - 2; i >= 0; i-- ) {
			firstToken = state.tokens[ i ];
			secondToken = state.tokens[ i + 1 ];

			if (
				firstToken.isVowel &&
				secondToken.isVowel &&
				firstToken.base.toLowerCase() === pair.firstBase &&
				secondToken.base.toLowerCase() === pair.secondBase &&
				firstToken.vowelDiacritic === pair.firstVowelDiacritic &&
				secondToken.vowelDiacritic === pair.secondVowelDiacritic &&
				!isIgnoredVowelPair( state, i )
			) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Apply vowel-diacritic changes to a two-token vowel family.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {number} pairStart First token index of the pair.
	 * @param {VowelPairUpdate} pair Vowel diacritic values to write.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult} Transform result.
	 */
	function applyVowelPairDiacritics( state, pairStart, pair, tonePlacement ) {
		var nextState = cloneState( state );

		if ( pair.firstVowelDiacritic !== undefined ) {
			nextState.tokens[ pairStart ].vowelDiacritic = pair.firstVowelDiacritic;
		}
		if ( pair.secondVowelDiacritic !== undefined ) {
			nextState.tokens[ pairStart + 1 ].vowelDiacritic = pair.secondVowelDiacritic;
		}

		return resultFromState( nextState, null, tonePlacement );
	}

	/**
	 * Find an unmarked `uo` pair that can receive horn as a covered ƯƠ-family rime.
	 *
	 * Open `uo` is intentionally excluded so `huo7 -> huơ` can remain distinct.
	 *
	 * @param {CompositionState} state Composition state.
	 * @return {number} First token index of the pair, or -1.
	 */
	function findHornUoPair( state ) {
		if ( state.structure && state.structure.rime === 'uo' ) {
			return -1;
		}

		return findVowelPair( state, {
			firstBase: 'u',
			secondBase: 'o',
			firstVowelDiacritic: Vietnamese.VowelDiacritic.NONE,
			secondVowelDiacritic: Vietnamese.VowelDiacritic.NONE
		} );
	}

	/**
	 * Find a `uo` pair with exact vowel-diacritic values.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} firstVowelDiacritic VowelDiacritic enum value for `u`.
	 * @param {string} secondVowelDiacritic VowelDiacritic enum value for `o`.
	 * @return {number} First token index of the pair, or -1.
	 */
	function findUoFamilyPair( state, firstVowelDiacritic, secondVowelDiacritic ) {
		return findVowelPair( state, {
			firstBase: 'u',
			secondBase: 'o',
			firstVowelDiacritic: firstVowelDiacritic,
			secondVowelDiacritic: secondVowelDiacritic
		} );
	}

	/**
	 * Find an unmarked `ua` pair that can become `ưa` or UÂ-family material.
	 *
	 * @param {CompositionState} state Composition state.
	 * @return {number} First token index of the pair, or -1.
	 */
	function findUnmarkedUaPair( state ) {
		return findVowelPair( state, {
			firstBase: 'u',
			secondBase: 'a',
			firstVowelDiacritic: Vietnamese.VowelDiacritic.NONE,
			secondVowelDiacritic: Vietnamese.VowelDiacritic.NONE
		} );
	}

	/**
	 * Find an unmarked `oa` pair that can become OĂ-family material.
	 *
	 * @param {CompositionState} state Composition state.
	 * @return {number} First token index of the pair, or -1.
	 */
	function findUnmarkedOaPair( state ) {
		return findVowelPair( state, {
			firstBase: 'o',
			secondBase: 'a',
			firstVowelDiacritic: Vietnamese.VowelDiacritic.NONE,
			secondVowelDiacritic: Vietnamese.VowelDiacritic.NONE
		} );
	}

	/**
	 * Apply horn to covered unmarked `uo` family material.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no transition applies.
	 */
	function applyHornToUo( state, tonePlacement ) {
		var pairStart = findHornUoPair( state );

		if ( pairStart === -1 ) {
			return null;
		}

		return applyVowelPairDiacritics( state, pairStart, {
			firstVowelDiacritic: Vietnamese.VowelDiacritic.HORN,
			secondVowelDiacritic: Vietnamese.VowelDiacritic.HORN
		}, tonePlacement );
	}

	/**
	 * Apply horn to unmarked `ua`, producing `ưa`-family material.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no transition applies.
	 */
	function applyHornToUa( state, tonePlacement ) {
		var pairStart = findUnmarkedUaPair( state );

		if ( pairStart === -1 ) {
			return null;
		}

		return applyVowelPairDiacritics( state, pairStart, {
			firstVowelDiacritic: Vietnamese.VowelDiacritic.HORN
		}, tonePlacement );
	}

	/**
	 * Apply circumflex to unmarked `ua`, producing UÂ-family material.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no transition applies.
	 */
	function applyCircumflexToUa( state, tonePlacement ) {
		var pairStart = findUnmarkedUaPair( state );

		if ( pairStart === -1 ) {
			return null;
		}

		return applyVowelPairDiacritics( state, pairStart, {
			secondVowelDiacritic: Vietnamese.VowelDiacritic.CIRCUMFLEX
		}, tonePlacement );
	}

	/**
	 * Apply breve to unmarked `oa`, producing OĂ-family material.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no transition applies.
	 */
	function applyBreveToOa( state, tonePlacement ) {
		var pairStart = findUnmarkedOaPair( state );

		if ( pairStart === -1 ) {
			return null;
		}

		return applyVowelPairDiacritics( state, pairStart, {
			secondVowelDiacritic: Vietnamese.VowelDiacritic.BREVE
		}, tonePlacement );
	}

	/**
	 * Switch UÔ-family material to ƯƠ-family material while preserving tone.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no transition applies.
	 */
	function applyHornToCircumflexUo( state, tonePlacement ) {
		var pairStart = findUoFamilyPair(
				state,
				Vietnamese.VowelDiacritic.NONE,
				Vietnamese.VowelDiacritic.CIRCUMFLEX
			),
			pair = {
				secondVowelDiacritic: Vietnamese.VowelDiacritic.HORN
			};

		if ( pairStart === -1 ) {
			return null;
		}

		if ( state.structure && state.structure.rime !== 'uô' ) {
			pair.firstVowelDiacritic = Vietnamese.VowelDiacritic.HORN;
		}
		return applyVowelPairDiacritics( state, pairStart, pair, tonePlacement );
	}

	/**
	 * Switch ƯƠ-family material back to UÔ-family material while preserving tone.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no transition applies.
	 */
	function applyCircumflexToHornUo( state, tonePlacement ) {
		var pairStart = findUoFamilyPair(
				state,
				Vietnamese.VowelDiacritic.HORN,
				Vietnamese.VowelDiacritic.HORN
			);

		if ( pairStart === -1 ) {
			return null;
		}

		return applyVowelPairDiacritics( state, pairStart, {
			firstVowelDiacritic: Vietnamese.VowelDiacritic.NONE,
			secondVowelDiacritic: Vietnamese.VowelDiacritic.CIRCUMFLEX
		}, tonePlacement );
	}

	/**
	 * Promote narrow `uơ` or `ưo` precursors to covered ƯƠ-family continuations.
	 *
	 * This is used during candidate reflow after ordinary letters extend the
	 * rime, such as `nguơi -> ngươi` and `tu7oi -> tươi`.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no promotion applies.
	 */
	function promoteUoFamilyContinuation( state, tonePlacement ) {
		var i, firstToken, secondToken, nextState, result,
			rimeStart = state.structure ? state.structure.rimeStart : 0;

		if ( !state.structure ) {
			prepareState( state, tonePlacement );
			rimeStart = state.structure ? state.structure.rimeStart : 0;
		}

		if (
			!state.structure ||
			state.structure.rime === 'uơ' ||
			state.structure.rime === 'ưo'
		) {
			return null;
		}

		for ( i = state.tokens.length - 2; i >= rimeStart; i-- ) {
			firstToken = state.tokens[ i ];
			secondToken = state.tokens[ i + 1 ];

			if (
				firstToken.isVowel &&
				secondToken.isVowel &&
				firstToken.base.toLowerCase() === 'u' &&
				secondToken.base.toLowerCase() === 'o' &&
				!isIgnoredVowelPair( state, i )
			) {
				if (
					firstToken.vowelDiacritic === Vietnamese.VowelDiacritic.NONE &&
					secondToken.vowelDiacritic === Vietnamese.VowelDiacritic.HORN
				) {
					nextState = cloneState( state );
					nextState.tokens[ i ].vowelDiacritic = Vietnamese.VowelDiacritic.HORN;
				} else if (
					firstToken.vowelDiacritic === Vietnamese.VowelDiacritic.HORN &&
					secondToken.vowelDiacritic === Vietnamese.VowelDiacritic.NONE
				) {
					nextState = cloneState( state );
					nextState.tokens[ i + 1 ].vowelDiacritic = Vietnamese.VowelDiacritic.HORN;
				} else {
					continue;
				}

				result = resultFromState( nextState, null, tonePlacement );

				if (
					result.state.status !== Vietnamese.StateType.UNRECOGNIZED &&
					result.state.structure &&
					result.state.structure.rime.indexOf( 'ươ' ) === 0
				) {
					return result;
				}
			}
		}

		return null;
	}

	/**
	 * Remove one vowel diacritic and append a literal suffix when escaping.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {number} target Token index.
	 * @param {string|null} literal Literal suffix to append, if any.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult} Transform result.
	 */
	function removeVowelDiacritic( state, target, literal, tonePlacement ) {
		var nextState = cloneState( state );

		nextState.tokens[ target ].vowelDiacritic = Vietnamese.VowelDiacritic.NONE;
		return resultFromState( nextState, literal, tonePlacement );
	}

	/**
	 * Remove both horns from a rendered ƯƠ-family pair during repeated-key escape.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string|null} literal Literal suffix to append, if any.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when the target is not ƯƠ-family.
	 */
	function removeHornFromUo( state, literal, tonePlacement ) {
		var target = resolveTonePlacement( state ),
			previousToken,
			nextState;

		if ( target < 1 ) {
			return null;
		}

		previousToken = state.tokens[ target - 1 ];
		if (
			!previousToken ||
			!previousToken.isVowel ||
			previousToken.vowelDiacritic !== Vietnamese.VowelDiacritic.HORN ||
			state.tokens[ target ].vowelDiacritic !== Vietnamese.VowelDiacritic.HORN
		) {
			return null;
		}

		nextState = cloneState( state );
		nextState.tokens[ target - 1 ].vowelDiacritic = Vietnamese.VowelDiacritic.NONE;
		nextState.tokens[ target ].vowelDiacritic = Vietnamese.VowelDiacritic.NONE;
		return resultFromState( nextState, literal, tonePlacement );
	}

	/**
	 * Apply a one-token vowel diacritic command to the primary target.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {SemanticCommand} command Semantic vowel-diacritic command.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no simple target exists.
	 */
	function applySimpleVowelDiacritic( state, command, tonePlacement ) {
		var target = resolveVowelDiacriticTarget( state, command.vowelDiacritic );

		if ( target === -1 ) {
			return null;
		}

		return applyVowelDiacriticToTarget( state, target, command.vowelDiacritic, tonePlacement );
	}

	/**
	 * Check whether a token can switch between same-base vowel letters.
	 *
	 * @param {CompositionToken} token Composition token.
	 * @param {string} vowelDiacritic Requested VowelDiacritic enum value.
	 * @return {boolean} True for supported switches such as `â <-> ă` and `ô <-> ơ`.
	 */
	function canSwitchTokenVowelDiacritic( token, vowelDiacritic ) {
		var lowerBase = token.base.toLowerCase();

		if ( lowerBase === 'a' ) {
			return token.vowelDiacritic === Vietnamese.VowelDiacritic.CIRCUMFLEX &&
					vowelDiacritic === Vietnamese.VowelDiacritic.BREVE ||
				token.vowelDiacritic === Vietnamese.VowelDiacritic.BREVE &&
					vowelDiacritic === Vietnamese.VowelDiacritic.CIRCUMFLEX;
		}

		if ( lowerBase === 'o' ) {
			return token.vowelDiacritic === Vietnamese.VowelDiacritic.CIRCUMFLEX &&
					vowelDiacritic === Vietnamese.VowelDiacritic.HORN ||
				token.vowelDiacritic === Vietnamese.VowelDiacritic.HORN &&
					vowelDiacritic === Vietnamese.VowelDiacritic.CIRCUMFLEX;
		}

		return false;
	}

	/**
	 * Switch the primary tone target between supported same-base vowel letters.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {string} vowelDiacritic Requested VowelDiacritic enum value.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no switch applies.
	 */
	function applySameBaseVowelDiacriticSwitch( state, vowelDiacritic, tonePlacement ) {
		var nextState,
			target = resolveTonePlacement( state ),
			token;

		if ( target === -1 ) {
			return null;
		}

		token = state.tokens[ target ];
		if ( canSwitchTokenVowelDiacritic( token, vowelDiacritic ) ) {
			nextState = cloneState( state );
			nextState.tokens[ target ].vowelDiacritic = vowelDiacritic;
			return resultFromState( nextState, null, tonePlacement );
		}

		return null;
	}

	/**
	 * Apply a semantic vowel-diacritic command with VIME's transition precedence.
	 *
	 * Repeated-key escape, family transitions, same-base switches, and simple
	 * one-token application all pass through this dispatcher.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {SemanticCommand} command Semantic vowel-diacritic command.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when the command cannot apply.
	 */
	function applyVowelDiacritic( state, command, tonePlacement ) {
		var alternateTarget,
			target = resolveTonePlacement( state ),
			vowelDiacritic = command.vowelDiacritic;

		// Repeated command keys escape only after another eligible vowel has a
		// chance to receive the same vowel diacritic.
		if (
			target !== -1 &&
			state.tokens[ target ].vowelDiacritic === vowelDiacritic &&
			command.literal
		) {
			alternateTarget = resolveAdditionalVowelDiacriticTarget( state, vowelDiacritic, target );
			if ( alternateTarget !== -1 ) {
				return applyVowelDiacriticToTarget( state, alternateTarget, vowelDiacritic, tonePlacement );
			}

			if ( vowelDiacritic === Vietnamese.VowelDiacritic.HORN ) {
				return removeHornFromUo( state, command.literal, tonePlacement ) ||
					removeVowelDiacritic( state, target, command.literal, tonePlacement );
			}

			return removeVowelDiacritic( state, target, command.literal, tonePlacement );
		}

		// Family transitions run before same-base switches and simple one-token
		// application because complex rimes can share visible source letters.
		if ( vowelDiacritic === Vietnamese.VowelDiacritic.HORN ) {
			return applyHornToCircumflexUo( state, tonePlacement ) ||
				applyHornToUo( state, tonePlacement ) ||
				applyHornToUa( state, tonePlacement ) ||
				applySameBaseVowelDiacriticSwitch( state, vowelDiacritic, tonePlacement ) ||
				applySimpleVowelDiacritic( state, command, tonePlacement );
		}

		if ( vowelDiacritic === Vietnamese.VowelDiacritic.CIRCUMFLEX ) {
			return applyCircumflexToHornUo( state, tonePlacement ) ||
				applyCircumflexToUa( state, tonePlacement ) ||
				applySameBaseVowelDiacriticSwitch( state, vowelDiacritic, tonePlacement ) ||
				applySimpleVowelDiacritic( state, command, tonePlacement );
		}

		if ( vowelDiacritic === Vietnamese.VowelDiacritic.BREVE ) {
			return applyBreveToOa( state, tonePlacement ) ||
				applySameBaseVowelDiacriticSwitch( state, vowelDiacritic, tonePlacement ) ||
				applySimpleVowelDiacritic( state, command, tonePlacement );
		}

		return applySameBaseVowelDiacriticSwitch( state, vowelDiacritic, tonePlacement ) ||
			applySimpleVowelDiacritic( state, command, tonePlacement );
	}

	/**
	 * Resolve the initial `d` token eligible for d-stroke transformation.
	 *
	 * @param {CompositionState} state Composition state.
	 * @return {number} Token index, or -1 when no d-stroke target exists.
	 */
	function resolveDStrokeTarget( state ) {
		var token;

		if ( !state.structure ) {
			prepareState( state );
		}

		token = state.tokens[ 0 ];
		if (
			!token ||
			!state.structure ||
			( state.structure.onset !== 'd' && state.structure.onset !== 'đ' )
		) {
			return -1;
		}

		if ( token.dStroke || token.base === 'd' || token.base === 'D' ) {
			return 0;
		}

		return -1;
	}

	/**
	 * Apply or repeated-key escape a semantic d-stroke command.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {SemanticCommand} command Semantic d-stroke command.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when no d-stroke target exists.
	 */
	function applyDStroke( state, command, tonePlacement ) {
		var nextState,
			target = resolveDStrokeTarget( state );

		if ( target === -1 ) {
			return null;
		}

		if ( state.tokens[ target ].dStroke ) {
			if ( !command.literal ) {
				return null;
			}

			nextState = cloneState( state );
			nextState.tokens[ target ].dStroke = false;
			return resultFromState( nextState, command.literal, tonePlacement );
		}

		nextState = cloneState( state );
		nextState.tokens[ target ].dStroke = true;
		return resultFromState( nextState, null, tonePlacement );
	}

	/**
	 * Dispatch a semantic command against a parsed candidate state.
	 *
	 * @param {CompositionState} state Composition state.
	 * @param {SemanticCommand} command Shared semantic command.
	 * @param {string} [tonePlacement] Tone-placement policy.
	 * @return {TransformResult|null} Transform result, or null when the command cannot apply.
	 */
	function transformState( state, command, tonePlacement ) {
		if ( state.status === Vietnamese.StateType.UNRECOGNIZED ) {
			return null;
		}

		if ( command.type === Vietnamese.CommandType.APPLY_TONE ) {
			return applyTone( state, command, tonePlacement );
		}

		if ( command.type === Vietnamese.CommandType.REMOVE_TONE ) {
			return removeTone( state, tonePlacement );
		}

		if ( command.type === Vietnamese.CommandType.APPLY_VOWEL_DIACRITIC ) {
			return applyVowelDiacritic( state, command, tonePlacement );
		}

		if ( command.type === Vietnamese.CommandType.APPLY_D_STROKE ) {
			return applyDStroke( state, command, tonePlacement );
		}

		return null;
	}

	// [13] Shared engine boundary

	engine = Vietnamese.engine || {
		/**
		 * Transform a rendered candidate with a semantic Vietnamese command.
		 *
		 * @param {string} candidate Candidate text near the caret.
		 * @param {SemanticCommand} command Shared semantic command.
		 * @param {EngineOptions} [options] Engine options.
		 * @param {string} [options.tonePlacement] Tone-placement policy.
		 * @return {EngineResult} Result object with handled and output fields.
		 */
		transformCandidate: function ( candidate, command, options ) {
			var transformResult,
				tonePlacement = options && options.tonePlacement,
				state = parseCandidate( candidate, tonePlacement );

			transformResult = transformState( state, command, tonePlacement );
			if (
				!transformResult ||
				transformResult.state.status === Vietnamese.StateType.UNRECOGNIZED
			) {
				return {
					handled: false
				};
			}

			return {
				handled: true,
				output: renderCandidate( transformResult.state, tonePlacement ) +
					transformResult.literalSuffix
			};
		},

		/**
		 * Re-render a candidate after ordinary letters extend it.
		 *
		 * @param {string} candidate Candidate text near the caret.
		 * @param {EngineOptions} [options] Engine options.
		 * @param {string} [options.tonePlacement] Tone-placement policy.
		 * @return {EngineResult} Result object with handled and output fields.
		 */
		reflowCandidate: function ( candidate, options ) {
			var output, promotionResult,
				tonePlacement = options && options.tonePlacement,
				state = parseCandidate( candidate, tonePlacement );

			promotionResult = promoteUoFamilyContinuation( state, tonePlacement );
			if (
				promotionResult &&
				promotionResult.state.status !== Vietnamese.StateType.UNRECOGNIZED
			) {
				output = renderCandidate( promotionResult.state, tonePlacement );
				if ( output !== normalizeText( candidate, 'NFC' ) ) {
					return {
						handled: true,
						output: output
					};
				}
			}

			if (
				state.status === Vietnamese.StateType.UNRECOGNIZED ||
				state.tone === Vietnamese.Tone.NONE
			) {
				return {
					handled: false
				};
			}

			output = renderCandidate( state, tonePlacement );
			if ( output === normalizeText( candidate, 'NFC' ) ) {
				return {
					handled: false
				};
			}

			return {
				handled: true,
				output: output
			};
		}
	};

	// [14] jQuery.IME adapter and registration helpers

	/**
	 * Return the bounded text window jQuery.IME will see before the next key.
	 *
	 * @param {string} text Rendered text before the caret.
	 * @return {string} Text bounded by the Vietnamese maxKeyLength.
	 */
	function getBoundedBeforeText( text ) {
		return text.slice( -DEFAULT_MAX_KEY_LENGTH );
	}

	/**
	 * Scope an input window to the suffix after an active composition boundary.
	 *
	 * The boundary state is deliberately self-invalidating: if the bounded text
	 * before the latest key no longer matches the previous rendered state, the
	 * caller should clear it and process the full input normally.
	 *
	 * @param {CompositionBoundaryState|null} boundaryState Current boundary state.
	 * @param {string} input jQuery.IME input window ending with the latest key.
	 * @return {ScopedInput} Scoped input descriptor.
	 */
	function scopeInputToCompositionBoundary( boundaryState, input ) {
		var latestKey = input.slice( -1 ),
			beforeKey = input.slice( 0, -latestKey.length ),
			prefix;

		if ( !boundaryState || beforeKey !== boundaryState.beforeText ) {
			return {
				active: false,
				input: input,
				prefix: ''
			};
		}

		if ( !boundaryState.suffix ) {
			return {
				active: true,
				input: latestKey,
				prefix: beforeKey
			};
		}

		if ( beforeKey.slice( -boundaryState.suffix.length ) !== boundaryState.suffix ) {
			return {
				active: false,
				input: input,
				prefix: ''
			};
		}

		prefix = beforeKey.slice( 0, beforeKey.length - boundaryState.suffix.length );
		return {
			active: true,
			input: boundaryState.suffix + latestKey,
			prefix: prefix
		};
	}

	/**
	 * Create a jQuery.IME patterns function backed by a shared Vietnamese engine.
	 *
	 * @param {AdapterOptions} options Adapter options.
	 * @param {Function} options.decodeCommand Input-method-specific command decoder.
	 *  Decoders return either a shared semantic command or an adapter-level
	 *  literal replacement for input-method escape keys.
	 * @param {VietnameseEngine} [options.engine] Shared Vietnamese composition engine.
	 * @param {string} options.inputMethodId Input method id passed to the engine.
	 * @param {string} [options.tonePlacement] Tone-placement policy.
	 * @return {Adapter} jQuery.IME patterns function.
	 */
	function createAdapter( options ) {
		var decodeCommand = options.decodeCommand,
			adapterEngine = options.engine || engine,
			inputMethodId = options.inputMethodId,
			tonePlacement = normalizeTonePlacement( options.tonePlacement ),
			boundaryState = null;

		/**
		 * Process one jQuery.IME input window without composition-boundary scoping.
		 *
		 * This is the core adapter path: decode the latest key into a semantic
		 * command, extract the editable Vietnamese candidate, then ask the shared
		 * engine to transform or reflow that candidate.
		 *
		 * @param {string} input jQuery.IME input window ending with the latest key.
		 * @param {string} context Raw jQuery.IME key context.
		 * @return {AdapterResult} jQuery.IME transliteration result.
		 */
		function processInput( input, context ) {
			var decoded = decodeCommand( input, context, {
					inputMethodId: inputMethodId,
					tonePlacement: tonePlacement
				} ),
				extracted, result;

			if ( !decoded ) {
				if ( typeof adapterEngine.reflowCandidate !== 'function' ) {
					return passThrough( input );
				}

				extracted = extractCandidate( input, '' );
				if ( !extracted.candidate ) {
					return passThrough( input );
				}

				result = adapterEngine.reflowCandidate( extracted.candidate, {
					context: context,
					inputMethodId: inputMethodId,
					tonePlacement: tonePlacement
				} );

				if ( !result || !result.handled ) {
					return passThrough( input );
				}

				return {
					noop: false,
					output: extracted.prefix + result.output
				};
			}

			extracted = extractCandidate( input, decoded.key );
			if ( decoded.literalOutput !== undefined ) {
				return {
					noop: false,
					output: extracted.prefix + extracted.candidate + decoded.literalOutput
				};
			}

			if ( !extracted.candidate ) {
				if ( decoded.fallbackLiteralOutput !== undefined ) {
					return {
						noop: false,
						output: extracted.prefix + decoded.fallbackLiteralOutput
					};
				}

				return passThrough( input );
			}

			result = adapterEngine.transformCandidate( extracted.candidate, decoded.command, {
				context: context,
				inputMethodId: inputMethodId,
				tonePlacement: tonePlacement
			} );

			if ( !result || !result.handled ) {
				if ( decoded.fallbackLiteralOutput !== undefined ) {
					return {
						noop: false,
						output: extracted.prefix + extracted.candidate +
							decoded.fallbackLiteralOutput
					};
				}

				return passThrough( input );
			}

			return {
				noop: false,
				output: extracted.prefix + result.output
			};
		}

		/**
		 * Clear the active invisible composition boundary.
		 *
		 * This is used when the next input window no longer matches the bounded
		 * boundary state, or when a non-candidate key should end the boundary.
		 */
		function clearCompositionBoundary() {
			boundaryState = null;
		}

		/**
		 * Start an invisible composition boundary at the current rendered text.
		 *
		 * The stored text is bounded to match jQuery.IME's `maxKeyLength` window.
		 * Later adapter calls can therefore verify whether the same pre-key text
		 * is still visible before scoping transforms to the suffix after this point.
		 *
		 * @param {string} beforeText Rendered text before the caret when Shift+Space is pressed.
		 */
		function setCompositionBoundary( beforeText ) {
			boundaryState = {
				beforeText: getBoundedBeforeText( beforeText ),
				suffix: ''
			};
		}

		/**
		 * Refresh the active composition-boundary state after a handled or literal key.
		 *
		 * @param {ScopedInput} scoped Scoped input descriptor for the current key.
		 * @param {string} suffix Rendered suffix after the boundary.
		 */
		function updateCompositionBoundary( scoped, suffix ) {
			boundaryState = {
				beforeText: getBoundedBeforeText( scoped.prefix + suffix ),
				suffix: suffix
			};
		}

		/**
		 * jQuery.IME patterns entry point for a Vietnamese input method.
		 *
		 * Without an active boundary, this delegates directly to `processInput`.
		 * With an active boundary, it scopes processing to the suffix after the
		 * boundary, then reattaches the frozen prefix to the returned output.
		 *
		 * @param {string} input jQuery.IME input window ending with the latest key.
		 * @param {string} context Raw jQuery.IME key context.
		 * @return {AdapterResult} jQuery.IME transliteration result.
		 */
		function adapter( input, context ) {
			var scoped = scopeInputToCompositionBoundary( boundaryState, input ),
				result, latestKey;

			if ( boundaryState && !scoped.active ) {
				clearCompositionBoundary();
			}

			result = processInput( scoped.input, context );

			if ( !scoped.active ) {
				return result;
			}

			if ( result.noop ) {
				latestKey = scoped.input.slice( -1 );
				if ( isCandidateCodeUnit( latestKey ) ) {
					updateCompositionBoundary( scoped, scoped.input );
				} else {
					clearCompositionBoundary();
				}

				return passThrough( input );
			}

			updateCompositionBoundary( scoped, result.output );
			return {
				noop: false,
				output: scoped.prefix + result.output
			};
		}

		adapter.setCompositionBoundary = setCompositionBoundary;
		return adapter;
	}

	/**
	 * Escape a character for use inside a regular-expression character class.
	 *
	 * @param {string} character Character to escape.
	 * @return {string} Escaped character.
	 */
	function escapeRegexClassCharacter( character ) {
		if ( character === '\\' || character === ']' || character === '-' || character === '^' ) {
			return '\\' + character;
		}

		return character;
	}

	/**
	 * Create array-based shifted patterns that delegate back to an adapter.
	 *
	 * jQuery.IME gives array `patterns_shift` priority while Shift is pressed.
	 * Vietnamese adapters use functional `patterns`, so shifted command keys
	 * need this bridge to keep using the shared engine.
	 *
	 * @param {Adapter} adapter Functional Vietnamese patterns adapter.
	 * @param {string[]} shiftedKeys Shifted command characters handled by adapter.
	 * @return {Array[]} jQuery.IME array rules for `patterns_shift`.
	 */
	function createShiftedAdapterPatterns( adapter, shiftedKeys ) {
		var patterns = [
				[
					'([\\s\\S]*) ',
					function ( input, beforeSpace ) {
						adapter.setCompositionBoundary( beforeSpace );
						return beforeSpace;
					}
				]
			],
			shiftedKeyPattern;

		if ( !shiftedKeys || !shiftedKeys.length ) {
			return patterns;
		}

		shiftedKeyPattern = shiftedKeys.map( escapeRegexClassCharacter ).join( '' );
		patterns.push(
			[
				'[\\s\\S]*[' + shiftedKeyPattern + ']',
				function ( input ) {
					var result = adapter( input, input.slice( -2 ) );

					return result.noop ? input : result.output;
				}
			]
		);

		return patterns;
	}

	/**
	 * Register a Vietnamese input method that delegates composition to the
	 * shared adapter and engine boundary.
	 *
	 * @param {RegistrationConfig} config Registration config.
	 * @param {string} config.id Input method id registered with jQuery.IME.
	 * @param {string} config.name Human-readable input method name.
	 * @param {string} config.description Input method description.
	 * @param {Function} config.decodeCommand Input-method-specific command decoder.
	 * @param {string[]} [config.shiftedKeys] Shifted command keys for a patterns bridge.
	 * @param {string} [config.tonePlacement] Tone-placement policy.
	 * @param {number} [config.contextLength] Raw key context length.
	 */
	function registerInputMethod( config ) {
		var normalizedTonePlacement = normalizeTonePlacement( config.tonePlacement ),
			adapter = createAdapter( {
				inputMethodId: config.id,
				decodeCommand: config.decodeCommand,
				engine: engine,
				tonePlacement: normalizedTonePlacement
			} ),
			inputMethod = {
				id: config.id,
				name: config.name,
				description: config.description,
				date: '2026-09-20',
				author: 'Plantaest',
				license: 'MIT',
				version: '1.0.0',
				contextLength: config.contextLength === undefined ?
					DEFAULT_CONTEXT_LENGTH :
					config.contextLength,
				maxKeyLength: DEFAULT_MAX_KEY_LENGTH,
				tonePlacement: normalizedTonePlacement,
				patterns: adapter
			};

		inputMethod.patterns_shift = createShiftedAdapterPatterns(
			adapter,
			config.shiftedKeys || []
		);

		$.ime.register( inputMethod );
	}

	// [15] Test-facing namespace exports

	Vietnamese.DEFAULT_CONTEXT_LENGTH = DEFAULT_CONTEXT_LENGTH;
	Vietnamese.TELEX_QUICK_CONTEXT_LENGTH = TELEX_QUICK_CONTEXT_LENGTH;
	Vietnamese.DEFAULT_MAX_KEY_LENGTH = DEFAULT_MAX_KEY_LENGTH;
	Vietnamese.createAdapter = createAdapter;
	Vietnamese.decodeVNICommand = decodeVNICommand;
	Vietnamese.decodeTelexCommand = decodeTelexCommand;
	Vietnamese.decodeSimpleTelexCommand = decodeSimpleTelexCommand;
	Vietnamese.decodeVIQRCommand = decodeVIQRCommand;
	Vietnamese.decodeVIQRStarCommand = decodeVIQRStarCommand;
	Vietnamese.extractCandidate = extractCandidate;
	Vietnamese.parseCandidate = parseCandidate;
	Vietnamese.recognizeRime = recognizeRime;
	Vietnamese.renderCandidate = renderCandidate;
	Vietnamese.resolveTonePlacement = resolveTonePlacement;
	Vietnamese.engine = engine;

	$.ime.vi = Vietnamese;

	// [16] Input method registration

	registerInputMethod( {
		id: 'vi-telex',
		name: 'Telex',
		description: 'Vietnamese Telex input method',
		decodeCommand: decodeTelexCommand,
		shiftedKeys: TELEX_SHIFTED_KEYS,
		contextLength: TELEX_QUICK_CONTEXT_LENGTH
	} );
	registerInputMethod( {
		id: 'vi-telex-simple',
		name: 'Simple Telex',
		description: 'Vietnamese Simple Telex input method',
		decodeCommand: decodeSimpleTelexCommand,
		shiftedKeys: TELEX_SHIFTED_KEYS
	} );
	registerInputMethod( {
		id: 'vi-vni',
		name: 'VNI',
		description: 'Vietnamese VNI input method',
		decodeCommand: decodeVNICommand
	} );
	registerInputMethod( {
		id: 'vi-viqr',
		name: 'VIQR',
		description: 'Vietnamese VIQR input method',
		decodeCommand: decodeVIQRCommand,
		shiftedKeys: VIQR_SHIFTED_KEYS
	} );
	registerInputMethod( {
		id: 'vi-viqr-star',
		name: 'VIQR*',
		description: 'Vietnamese VIQR* input method',
		decodeCommand: decodeVIQRStarCommand,
		shiftedKeys: VIQR_STAR_SHIFTED_KEYS
	} );
	registerInputMethod( {
		id: 'vi-telex-reformed',
		name: 'Telex (đặt dấu kiểu mới)',
		description: 'Vietnamese Telex input method with reformed tone placement',
		decodeCommand: decodeTelexCommand,
		shiftedKeys: TELEX_SHIFTED_KEYS,
		tonePlacement: Vietnamese.TonePlacement.REFORMED,
		contextLength: TELEX_QUICK_CONTEXT_LENGTH
	} );
	registerInputMethod( {
		id: 'vi-telex-simple-reformed',
		name: 'Simple Telex (đặt dấu kiểu mới)',
		description: 'Vietnamese Simple Telex input method with reformed tone placement',
		decodeCommand: decodeSimpleTelexCommand,
		shiftedKeys: TELEX_SHIFTED_KEYS,
		tonePlacement: Vietnamese.TonePlacement.REFORMED
	} );
	registerInputMethod( {
		id: 'vi-vni-reformed',
		name: 'VNI (đặt dấu kiểu mới)',
		description: 'Vietnamese VNI input method with reformed tone placement',
		decodeCommand: decodeVNICommand,
		tonePlacement: Vietnamese.TonePlacement.REFORMED
	} );
	registerInputMethod( {
		id: 'vi-viqr-reformed',
		name: 'VIQR (đặt dấu kiểu mới)',
		description: 'Vietnamese VIQR input method with reformed tone placement',
		decodeCommand: decodeVIQRCommand,
		shiftedKeys: VIQR_SHIFTED_KEYS,
		tonePlacement: Vietnamese.TonePlacement.REFORMED
	} );
	registerInputMethod( {
		id: 'vi-viqr-star-reformed',
		name: 'VIQR* (đặt dấu kiểu mới)',
		description: 'Vietnamese VIQR* input method with reformed tone placement',
		decodeCommand: decodeVIQRStarCommand,
		shiftedKeys: VIQR_STAR_SHIFTED_KEYS,
		tonePlacement: Vietnamese.TonePlacement.REFORMED
	} );
}( jQuery ) );
