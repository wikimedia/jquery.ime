/* global QUnit */
( function ( $ ) {
	'use strict';

	function loadVietnameseSource( assert ) {
		var done = assert.async();

		$.ime.load( 'vi-vni' ).then( () => {
			done();
		}, () => {
			assert.true( false, 'Vietnamese shared source loads before VIME tests run' );
			done();
		} );
	}

	function getVietnameseDisplayNames() {
		return {
			'vi-telex': 'Telex',
			'vi-telex-simple': 'Simple Telex',
			'vi-vni': 'VNI',
			'vi-viqr': 'VIQR',
			'vi-viqr-star': 'VIQR*',
			'vi-telex-reformed': 'Telex (đặt dấu kiểu mới)',
			'vi-telex-simple-reformed': 'Simple Telex (đặt dấu kiểu mới)',
			'vi-vni-reformed': 'VNI (đặt dấu kiểu mới)',
			'vi-viqr-reformed': 'VIQR (đặt dấu kiểu mới)',
			'vi-viqr-star-reformed': 'VIQR* (đặt dấu kiểu mới)'
		};
	}

	// Complete rime coverage data is adapted from Luong Hieu Thi's orthography-based
	// Vietnamese syllable inventory: https://www.hieuthi.com/blog/2017/03/21/all-vietnamese-syllables.html
	function getCompleteRimeCoverageGroups() {
		return [
			{
				name: 'open',
				rimes: [
					'a', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y',
					'oa', 'oe', 'uê', 'uơ', 'uy'
				]
			},
			{
				name: 'vowel off-glides',
				rimes: [
					'ia', 'ua', 'ưa', 'uya',
					'ai', 'oi', 'ôi', 'ơi', 'ui', 'ưi', 'oai', 'uôi', 'ươi',
					'ao', 'eo', 'oao', 'oeo',
					'au', 'âu', 'êu', 'iu', 'ưu', 'iêu', 'uyu', 'ươu', 'yêu',
					'ay', 'ây', 'oay', 'uây'
				]
			},
			{
				name: 'm endings',
				rimes: [
					'am', 'ăm', 'âm', 'em', 'êm', 'im', 'om', 'ôm', 'ơm', 'um', 'ưm',
					'iêm', 'oam', 'oăm', 'oem', 'uôm', 'ươm', 'yêm'
				]
			},
			{
				name: 'n endings',
				rimes: [
					'an', 'ăn', 'ân', 'en', 'ên', 'in', 'on', 'ôn', 'ơn', 'un', 'ưn',
					'iên', 'oan', 'oăn', 'oen', 'uân', 'uôn', 'uyn', 'ươn', 'uyên',
					'yên'
				]
			},
			{
				name: 'ng endings',
				rimes: [
					'ang', 'ăng', 'âng', 'eng', 'êng', 'ong', 'ông', 'ung', 'ưng',
					'iêng', 'oang', 'oăng', 'oong', 'uâng', 'uông', 'ương', 'yêng'
				]
			},
			{
				name: 'nh endings',
				rimes: [ 'anh', 'ênh', 'inh', 'oanh', 'uênh', 'uynh' ]
			},
			{
				name: 'ch endings',
				rimes: [ 'ach', 'êch', 'ich', 'oach', 'uêch', 'uych' ]
			},
			{
				name: 'c endings',
				rimes: [
					'ac', 'ăc', 'âc', 'ec', 'oc', 'ôc', 'uc', 'ưc',
					'iêc', 'oac', 'oăc', 'ooc', 'uôc', 'ươc'
				]
			},
			{
				name: 't endings',
				rimes: [
					'at', 'ăt', 'ât', 'et', 'êt', 'it', 'ot', 'ôt', 'ơt', 'ut', 'ưt',
					'iêt', 'oat', 'oăt', 'oet', 'uât', 'uôt', 'uyt', 'ươt', 'uyêt',
					'yêt'
				]
			},
			{
				name: 'p endings',
				rimes: [
					'ap', 'ăp', 'âp', 'ep', 'êp', 'ip', 'op', 'ôp', 'ơp', 'up',
					'iêp', 'oap', 'uôp', 'uyp', 'ươp'
				]
			}
		];
	}

	function flattenRimeGroups( groups ) {
		var rimes = [];

		groups.forEach( ( group ) => {
			rimes = rimes.concat( group.rimes );
		} );

		return rimes;
	}

	function assertUniqueRimes( assert, rimes, message ) {
		var seen = {},
			duplicates = [];

		rimes.forEach( ( rime ) => {
			if ( seen[ rime ] && !duplicates.includes( rime ) ) {
				duplicates.push( rime );
			}

			seen[ rime ] = true;
		} );

		assert.deepEqual( duplicates, [], message );
	}

	function isCompleteRimeStatus( status ) {
		return status === $.ime.vi.RimeStatus.COMPLETE ||
			status === $.ime.vi.RimeStatus.COMPLETE_AND_PREFIX;
	}

	QUnit.module( 'VIME – Registration and loading', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'Vietnamese input methods are registered through shared source metadata', ( assert ) => {
		var displayNames = getVietnameseDisplayNames(),
			inputMethodIds = Object.keys( displayNames );

		assert.deepEqual(
			$.ime.languages.vi.inputmethods,
			inputMethodIds,
			'Vietnamese exposes traditional and reformed variants for all input methods'
		);
		inputMethodIds.forEach( ( inputMethodId ) => {
			assert.strictEqual(
				$.ime.sources[ inputMethodId ].source,
				'rules/vi/vi.js',
				inputMethodId + ' uses the shared Vietnamese rule source'
			);
			assert.strictEqual(
				$.ime.sources[ inputMethodId ].name,
				displayNames[ inputMethodId ],
				inputMethodId + ' uses the expected selector label in metadata'
			);
		} );
	} );

	QUnit.test( 'Loading one Vietnamese method registers the shared engine and all adapters', ( assert ) => {
		var displayNames = getVietnameseDisplayNames(),
			inputMethodIds = Object.keys( displayNames );

		assert.strictEqual(
			typeof $.ime.vi.createAdapter,
			'function',
			'Shared Vietnamese adapter factory is exposed for unit tests'
		);
		assert.strictEqual(
			$.ime.vi.TonePlacement.TRADITIONAL,
			'traditional',
			'Shared Vietnamese engine exposes traditional tone-placement policy'
		);
		assert.strictEqual(
			$.ime.vi.TonePlacement.REFORMED,
			'reformed',
			'Shared Vietnamese engine exposes reformed tone-placement policy'
		);
		inputMethodIds.forEach( ( inputMethodId ) => {
			assert.strictEqual(
				typeof $.ime.inputmethods[ inputMethodId ].patterns,
				'function',
				inputMethodId + ' adapter provides functional patterns'
			);
			assert.strictEqual(
				$.ime.inputmethods[ inputMethodId ].name,
				displayNames[ inputMethodId ],
				inputMethodId + ' uses the expected selector label after loading'
			);
		} );
		assert.strictEqual(
			typeof $.ime.vi.engine.reflowCandidate,
			'function',
			'Shared Vietnamese engine exposes candidate reflow for unit tests'
		);
	} );

	QUnit.test( 'Vietnamese adapter maps handled engine output to jQuery.IME patterns result', ( assert ) => {
		var adapter, result;

		adapter = $.ime.vi.createAdapter( {
			inputMethodId: 'vi-vni',
			decodeCommand: function () {
				return {
					key: '1',
					command: {
						type: $.ime.vi.CommandType.APPLY_TONE,
						tone: $.ime.vi.Tone.ACUTE
					}
				};
			},
			engine: {
				transformCandidate: function ( candidate, command, options ) {
					assert.strictEqual( candidate, 'tuong', 'Adapter passes only the extracted candidate to the engine' );
					assert.strictEqual( command.tone, $.ime.vi.Tone.ACUTE, 'Adapter passes the semantic command' );
					assert.strictEqual( options.context, '', 'Adapter forwards jQuery.IME context explicitly' );
					assert.strictEqual( options.inputMethodId, 'vi-vni', 'Adapter forwards input method id explicitly' );
					assert.strictEqual(
						options.tonePlacement,
						$.ime.vi.TonePlacement.TRADITIONAL,
						'Adapter forwards the default tone-placement policy explicitly'
					);

					return { handled: true, output: 'T' };
				}
			}
		} );

		result = adapter( 'hello tuong1', '' );

		assert.deepEqual(
			result,
			{ noop: false, output: 'hello T' },
			'Adapter preserves prefix outside the Vietnamese candidate'
		);
	} );

	QUnit.test( 'Vietnamese adapter maps handled engine reflow to jQuery.IME patterns result', ( assert ) => {
		var adapter, result;

		adapter = $.ime.vi.createAdapter( {
			inputMethodId: 'vi-vni',
			decodeCommand: function () {
				return null;
			},
			engine: {
				reflowCandidate: function ( candidate, options ) {
					assert.strictEqual( candidate, 'tóan', 'Adapter passes the extracted rendered candidate to reflow' );
					assert.strictEqual( options.context, '', 'Adapter forwards jQuery.IME context to reflow' );
					assert.strictEqual( options.inputMethodId, 'vi-vni', 'Adapter forwards input method id to reflow' );
					assert.strictEqual(
						options.tonePlacement,
						$.ime.vi.TonePlacement.TRADITIONAL,
						'Adapter forwards the default tone-placement policy to reflow'
					);

					return { handled: true, output: 'toán' };
				}
			}
		} );

		result = adapter( 'hello tóan', '' );

		assert.deepEqual(
			result,
			{ noop: false, output: 'hello toán' },
			'Adapter preserves prefix outside the reflowed Vietnamese candidate'
		);
	} );

	QUnit.test( 'Vietnamese adapter scopes transforms after a composition boundary', ( assert ) => {
		var adapter, result, transformCalls = 0;

		adapter = $.ime.vi.createAdapter( {
			inputMethodId: 'vi-vni',
			decodeCommand: function ( input ) {
				if ( input.slice( -1 ) !== '1' ) {
					return null;
				}

				return {
					key: '1',
					command: {
						type: $.ime.vi.CommandType.APPLY_TONE,
						tone: $.ime.vi.Tone.ACUTE
					}
				};
			},
			engine: {
				reflowCandidate: function () {
					return { handled: false };
				},
				transformCandidate: function ( candidate ) {
					transformCalls++;
					assert.strictEqual(
						candidate,
						'met',
						'Adapter passes only the suffix after the composition boundary to the engine'
					);

					return { handled: true, output: 'mét' };
				}
			}
		} );

		adapter.setCompositionBoundary( 'kilô' );
		assert.deepEqual(
			adapter( 'kilôm', '' ),
			{ noop: true, output: 'kilôm' },
			'Adapter lets ordinary suffix letters pass through after the boundary'
		);
		adapter( 'kilôme', '' );
		adapter( 'kilômet', '' );

		result = adapter( 'kilômet1', '' );

		assert.deepEqual(
			result,
			{ noop: false, output: 'kilômét' },
			'Adapter preserves the frozen prefix and replaces only the active suffix'
		);
		assert.strictEqual( transformCalls, 1, 'Adapter transforms the scoped suffix once' );
	} );

	QUnit.test( 'Vietnamese adapters keep the expected input-window settings', ( assert ) => {
		[
			'vi-vni',
			'vi-vni-reformed',
			'vi-telex',
			'vi-telex-simple',
			'vi-telex-reformed',
			'vi-telex-simple-reformed',
			'vi-viqr',
			'vi-viqr-reformed',
			'vi-viqr-star',
			'vi-viqr-star-reformed'
		].forEach( ( inputMethodId ) => {
			var expectedTonePlacement = inputMethodId.includes( '-reformed' ) ?
				$.ime.vi.TonePlacement.REFORMED :
				$.ime.vi.TonePlacement.TRADITIONAL;

			assert.strictEqual(
				$.ime.inputmethods[ inputMethodId ].contextLength,
				inputMethodId === 'vi-telex' || inputMethodId === 'vi-telex-reformed' ?
					$.ime.vi.TELEX_QUICK_CONTEXT_LENGTH :
					$.ime.vi.DEFAULT_CONTEXT_LENGTH,
				inputMethodId + ' stores the expected raw input context length'
			);
			assert.strictEqual(
				$.ime.inputmethods[ inputMethodId ].maxKeyLength,
				$.ime.vi.DEFAULT_MAX_KEY_LENGTH,
				inputMethodId + ' uses the shared maxKeyLength'
			);
			assert.strictEqual(
				$.ime.inputmethods[ inputMethodId ].tonePlacement,
				expectedTonePlacement,
				inputMethodId + ' stores the expected tone-placement policy'
			);
		} );
	} );

	QUnit.module( 'VIME – Unicode', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'Vietnamese parser extracts tone and vowel diacritic from NFC and NFD input', ( assert ) => {
		var parsedAcuteCircumflex = $.ime.vi.parseCandidate( 'ấ' ),
			parsedDecomposedAcute = $.ime.vi.parseCandidate( 'a\u0301' );

		assert.strictEqual(
			parsedAcuteCircumflex.status,
			$.ime.vi.StateType.STRUCTURALLY_VALID,
			'Precomposed Vietnamese vowels parse as structurally valid candidates'
		);
		assert.strictEqual(
			parsedAcuteCircumflex.tone,
			$.ime.vi.Tone.ACUTE,
			'Parser extracts semantic tone from a precomposed character'
		);
		assert.strictEqual(
			parsedAcuteCircumflex.tokens[ 0 ].vowelDiacritic,
			$.ime.vi.VowelDiacritic.CIRCUMFLEX,
			'Parser extracts vowel diacritic separately from tone'
		);
		assert.strictEqual(
			$.ime.vi.renderCandidate( parsedAcuteCircumflex ),
			'ấ',
			'Renderer emits NFC output for precomposed input'
		);
		assert.strictEqual(
			parsedDecomposedAcute.tone,
			$.ime.vi.Tone.ACUTE,
			'Parser accepts canonically decomposed tone input'
		);
		assert.strictEqual(
			$.ime.vi.renderCandidate( parsedDecomposedAcute ),
			'á',
			'Renderer normalizes decomposed input to NFC'
		);
	} );

	QUnit.module( 'VIME – Parser', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'Vietnamese parser identifies onset, rime, and checked endings', ( assert ) => {
		var parsedQuoc = $.ime.vi.parseCandidate( 'quoc' ),
			parsedQuy = $.ime.vi.parseCandidate( 'quy' ),
			parsedQuynh = $.ime.vi.parseCandidate( 'quynh' ),
			parsedGieng = $.ime.vi.parseCandidate( 'gieng' ),
			parsedKhuay = $.ime.vi.parseCandidate( 'khuay' ),
			parsedHuya = $.ime.vi.parseCandidate( 'huya' ),
			parsedMat = $.ime.vi.parseCandidate( 'mat' );

		assert.strictEqual( parsedQuoc.structure.onset, 'qu', 'qu is represented as a special onset' );
		assert.strictEqual( parsedQuoc.structure.rime, 'oc', 'The u in qu is not part of the rime' );
		assert.strictEqual( parsedQuoc.structure.toneTargetIndex, 2, 'quoc places tone on o' );

		assert.strictEqual( parsedQuy.structure.onset, 'qu', 'open quy keeps qu as the onset' );
		assert.strictEqual( parsedQuy.structure.rime, 'y', 'open quy uses y as the rime' );
		assert.strictEqual( parsedQuy.structure.toneTargetIndex, 2, 'open quy places tone on y' );

		assert.strictEqual( parsedQuynh.structure.onset, 'q', 'q is the onset before covered uy-family rimes' );
		assert.strictEqual( parsedQuynh.structure.rime, 'uynh', 'The u after q remains part of the uynh rime' );
		assert.strictEqual( parsedQuynh.structure.toneTargetIndex, 2, 'quynh places tone on y' );

		assert.strictEqual( parsedGieng.structure.onset, 'gi', 'gi is represented as a special onset before another vowel' );
		assert.strictEqual( parsedGieng.structure.rime, 'eng', 'The i in gi is not part of the rime before another vowel' );
		assert.strictEqual( parsedGieng.structure.toneTargetIndex, 2, 'gieng places tone on e' );

		assert.strictEqual( parsedKhuay.structure.onset, 'kh', 'kh is parsed as a multi-letter onset' );
		assert.strictEqual( parsedKhuay.structure.rime, 'uay', 'khuay keeps the medial and off-glide inside the rime' );
		assert.strictEqual( parsedKhuay.structure.toneTargetIndex, 3, 'khuay places tone on a' );

		assert.strictEqual( parsedHuya.structure.rime, 'uya', 'huya keeps the rare uya rime together' );
		assert.strictEqual( parsedHuya.structure.toneTargetIndex, 2, 'huya places tone on y' );

		assert.strictEqual( parsedMat.structure.ending, 't', 'mat has a t ending' );
		assert.true( parsedMat.structure.checked, 'mat is recognized as a checked syllable' );
	} );

	QUnit.test( 'Vietnamese rime recognizer covers table rimes and composition precursors', ( assert ) => {
		var rimeStatus = $.ime.vi.RimeStatus,
			completeRimeGroups = getCompleteRimeCoverageGroups(),
			completeRimes = flattenRimeGroups( completeRimeGroups ),
			prefixRimes = [ 'iê', 'uô', 'ươ', 'uâ', 'uyê' ],
			composableRimes = [
				'ie', 'ieu', 'iem', 'ien', 'ieng', 'iec', 'iet', 'iep',
				'eu', 'ue', 'uye', 'uyen', 'uyet',
				'enh', 'ech', 'uenh', 'uech',
				'ye', 'yeu', 'yem', 'yen', 'yeng', 'yet',
				'uo', 'uoi', 'uou', 'uom', 'uon', 'uong', 'uoc', 'uot', 'uop',
				'ưo', 'ưoi', 'ưom', 'ưon', 'ưong', 'ưoc', 'ưot', 'ưop',
				'uan', 'uang', 'uat'
			],
			invalidRimes = [ 'aya', 'oco' ];

		assertUniqueRimes(
			assert,
			completeRimes,
			'Complete rime audit data does not duplicate table entries'
		);
		assertUniqueRimes(
			assert,
			composableRimes,
			'Composable rime audit data does not duplicate precursor entries'
		);

		completeRimeGroups.forEach( ( group ) => {
			group.rimes.forEach( ( rime ) => {
				assert.true(
					isCompleteRimeStatus( $.ime.vi.recognizeRime( rime ).status ),
					rime + ' is recognized as a complete rime in the ' + group.name + ' group'
				);
			} );
		} );

		prefixRimes.forEach( ( rime ) => {
			assert.strictEqual(
				$.ime.vi.recognizeRime( rime ).status,
				rimeStatus.PREFIX,
				rime + ' is recognized as a prefix for longer covered rimes'
			);
		} );

		composableRimes.forEach( ( rime ) => {
			assert.strictEqual(
				$.ime.vi.recognizeRime( rime ).status,
				rimeStatus.COMPOSABLE,
				rime + ' is recognized only as a composition precursor'
			);
		} );

		invalidRimes.forEach( ( rime ) => {
			assert.strictEqual(
				$.ime.vi.recognizeRime( rime ).status,
				rimeStatus.INVALID,
				rime + ' is not a covered Vietnamese rime'
			);
		} );
	} );

	QUnit.test( 'Vietnamese parser rejects structurally impossible Latin candidates', ( assert ) => {
		var stateType = $.ime.vi.StateType;

		[
			'ba', 'thay', 'gieng', 'quoc', 'hoao', 'hoeo',
			'diêu', 'tiêng', 'tường', 'kênh', 'nghêch', 'huêch', 'huênh'
		].forEach( ( candidate ) => {
			assert.strictEqual(
				$.ime.vi.parseCandidate( candidate ).status,
				stateType.STRUCTURALLY_VALID,
				candidate + ' remains a structurally valid Vietnamese candidate'
			);
		} );

		[ 'n', 'ng', 'ngh', 'q', 'qu', 'tr' ].forEach( ( candidate ) => {
			assert.strictEqual(
				$.ime.vi.parseCandidate( candidate ).status,
				stateType.INTERMEDIATE,
				candidate + ' remains a valid intermediate onset candidate'
			);
		} );

		[
			'dieu', 'tieng', 'thuong', 'tuong', 'Viet', 'kenh', 'nghech',
			'huech', 'huenh'
		].forEach( ( candidate ) => {
			assert.strictEqual(
				$.ime.vi.parseCandidate( candidate ).status,
				stateType.INTERMEDIATE,
				candidate + ' remains a valid composition-only precursor'
			);
		} );

		[ 'br', 'bro', 'davi', 'droi', 'node', 'wa', 'brow', 'browse' ].forEach( ( candidate ) => {
			assert.strictEqual(
				$.ime.vi.parseCandidate( candidate ).status,
				stateType.UNRECOGNIZED,
				candidate + ' is not a Vietnamese composition candidate'
			);
		} );
	} );

	QUnit.module( 'VIME – Transform', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'Vietnamese engine applies and replaces semantic tones', ( assert ) => {
		var tone = $.ime.vi.Tone,
			commandType = $.ime.vi.CommandType;

		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'a', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'á' },
			'APPLY_TONE(ACUTE) renders a simple vowel'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'á', {
				type: commandType.APPLY_TONE,
				tone: tone.GRAVE
			} ),
			{ handled: true, output: 'à' },
			'Applying a new tone replaces the existing semantic tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'á', {
				type: commandType.REMOVE_TONE
			} ),
			{ handled: true, output: 'a' },
			'REMOVE_TONE removes only the tone from a simple vowel'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'ấ', {
				type: commandType.REMOVE_TONE
			} ),
			{ handled: true, output: 'â' },
			'REMOVE_TONE preserves the vowel diacritic'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'tường', {
				type: commandType.REMOVE_TONE
			} ),
			{ handled: true, output: 'tương' },
			'REMOVE_TONE preserves a complex vowel nucleus'
		);
	} );

	QUnit.test( 'Vietnamese engine applies vowel diacritics while preserving tone', ( assert ) => {
		var vowelDiacritic = $.ime.vi.VowelDiacritic,
			commandType = $.ime.vi.CommandType;

		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'a', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'â' },
			'CIRCUMFLEX applies to a simple a'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'a', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.BREVE
			} ),
			{ handled: true, output: 'ă' },
			'BREVE applies to a simple a'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'o', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.HORN
			} ),
			{ handled: true, output: 'ơ' },
			'HORN applies to a simple o'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'u', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.HORN
			} ),
			{ handled: true, output: 'ư' },
			'HORN applies to a simple u'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'á', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'ấ' },
			'Applying a vowel diacritic preserves semantic tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hâm', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.BREVE
			} ),
			{ handled: true, output: 'hăm' },
			'BREVE changes a circumflex a target to breve'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hắm', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'hấm' },
			'CIRCUMFLEX changes a breve a target to circumflex while preserving tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hốp', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.HORN
			} ),
			{ handled: true, output: 'hớp' },
			'HORN changes a circumflex o target to horn while preserving tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hớp', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'hốp' },
			'CIRCUMFLEX changes a horned o target to circumflex while preserving tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'tuong', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.HORN
			} ),
			{ handled: true, output: 'tương' },
			'HORN applies to the uo precursor as ươ'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huo', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.HORN
			} ),
			{ handled: true, output: 'huơ' },
			'HORN on open uo applies to o as uơ'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hua', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.HORN
			} ),
			{ handled: true, output: 'hưa' },
			'HORN applies to the ua precursor as ưa'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hoa', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.BREVE
			} ),
			{ handled: true, output: 'hoă' },
			'BREVE applies to the oa precursor as oă'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'xua', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'xuâ' },
			'CIRCUMFLEX applies to the ua precursor as uâ'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'lôo', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				literal: '6',
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'lôô' },
			'CIRCUMFLEX applies to another eligible vowel before using repeated-key escape'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huốp', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.HORN
			} ),
			{ handled: true, output: 'hướp' },
			'HORN changes uô to ươ while preserving tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huô', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.HORN
			} ),
			{ handled: true, output: 'huơ' },
			'HORN changes open uô back to open uơ'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hướp', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'huốp' },
			'CIRCUMFLEX changes ươ to uô while preserving tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'thay', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'thây' },
			'CIRCUMFLEX applies to the nucleus before an off-glide'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'thay', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.BREVE
			} ),
			{ handled: false },
			'BREVE does not produce an unrecognized off-glide rime'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'khuay', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'khuây' },
			'CIRCUMFLEX applies to a after a medial u'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'quoc', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'quôc' },
			'CIRCUMFLEX ignores the u in qu and applies to o'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'gieng', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'giêng' },
			'CIRCUMFLEX ignores the i in gi and applies to e'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'keu', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'kêu' },
			'CIRCUMFLEX composes eu into êu'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'dieu', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'diêu' },
			'CIRCUMFLEX composes ieu into iêu'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hue', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'huê' },
			'CIRCUMFLEX composes ue into uê'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'kenh', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'kênh' },
			'CIRCUMFLEX composes enh into ênh'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'nghech', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'nghêch' },
			'CIRCUMFLEX composes ech into êch'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huenh', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'huênh' },
			'CIRCUMFLEX composes uenh into uênh'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huech', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'huêch' },
			'CIRCUMFLEX composes uech into uêch'
		);
		[
			[ 'tieng', vowelDiacritic.CIRCUMFLEX, 'tiêng' ],
			[ 'Viet', vowelDiacritic.CIRCUMFLEX, 'Viêt' ],
			[ 'uyen', vowelDiacritic.CIRCUMFLEX, 'uyên' ],
			[ 'yeu', vowelDiacritic.CIRCUMFLEX, 'yêu' ],
			[ 'huop', vowelDiacritic.CIRCUMFLEX, 'huôp' ],
			[ 'huop', vowelDiacritic.HORN, 'hươp' ],
			[ 'ruou', vowelDiacritic.HORN, 'rươu' ],
			[ 'thuat', vowelDiacritic.CIRCUMFLEX, 'thuât' ]
		].forEach( ( testCase ) => {
			assert.deepEqual(
				$.ime.vi.engine.transformCandidate( testCase[ 0 ], {
					type: commandType.APPLY_VOWEL_DIACRITIC,
					vowelDiacritic: testCase[ 1 ]
				} ),
				{ handled: true, output: testCase[ 2 ] },
				testCase[ 0 ] + ' remains composable after recognizer reclassification'
			);
		} );
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'tháy', {
				type: commandType.APPLY_VOWEL_DIACRITIC,
				vowelDiacritic: vowelDiacritic.CIRCUMFLEX
			} ),
			{ handled: true, output: 'thấy' },
			'CIRCUMFLEX after a tone command preserves and repositions tone'
		);
	} );

	QUnit.test( 'Vietnamese engine handles d-stroke and initial fallback behavior', ( assert ) => {
		var commandType = $.ime.vi.CommandType;

		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'd', {
				type: commandType.APPLY_D_STROKE
			} ),
			{ handled: true, output: 'đ' },
			'd-stroke applies to lowercase d'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'D', {
				type: commandType.APPLY_D_STROKE
			} ),
			{ handled: true, output: 'Đ' },
			'd-stroke applies to uppercase D'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'dac', {
				type: commandType.APPLY_D_STROKE
			} ),
			{ handled: true, output: 'đac' },
			'd-stroke applies to the candidate onset after rime material'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'Dac', {
				type: commandType.APPLY_D_STROKE
			} ),
			{ handled: true, output: 'Đac' },
			'd-stroke preserves uppercase onset after rime material'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'đác', {
				type: commandType.APPLY_D_STROKE,
				literal: '9'
			} ),
			{ handled: true, output: 'dác9' },
			'repeated d-stroke key escapes after the full candidate is already rendered'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'bc', {
				type: commandType.APPLY_TONE,
				tone: $.ime.vi.Tone.ACUTE
			} ),
			{ handled: false },
			'Candidates without a vowel pass through tone commands'
		);
	} );

	QUnit.test( 'Vietnamese engine renders traditional tone placement for the vertical slice', ( assert ) => {
		var commandType = $.ime.vi.CommandType;

		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hoa', {
				type: commandType.APPLY_TONE,
				tone: $.ime.vi.Tone.GRAVE
			} ),
			{ handled: true, output: 'hòa' },
			'Traditional open oa placement marks the medial vowel'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'tương', {
				type: commandType.APPLY_TONE,
				tone: $.ime.vi.Tone.GRAVE
			} ),
			{ handled: true, output: 'tường' },
			'Complex ươ placement marks the natural nucleus target'
		);
	} );

	QUnit.test( 'Vietnamese engine renders reformed tone placement for open medial rimes', ( assert ) => {
		var tone = $.ime.vi.Tone,
			commandType = $.ime.vi.CommandType,
			tonePlacement = $.ime.vi.TonePlacement;

		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hoa', {
				type: commandType.APPLY_TONE,
				tone: tone.GRAVE
			}, {
				tonePlacement: tonePlacement.REFORMED
			} ),
			{ handled: true, output: 'hoà' },
			'Reformed open oa placement marks a'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'khoe', {
				type: commandType.APPLY_TONE,
				tone: tone.HOOK
			}, {
				tonePlacement: tonePlacement.REFORMED
			} ),
			{ handled: true, output: 'khoẻ' },
			'Reformed open oe placement marks e'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huy', {
				type: commandType.APPLY_TONE,
				tone: tone.HOOK
			}, {
				tonePlacement: tonePlacement.REFORMED
			} ),
			{ handled: true, output: 'huỷ' },
			'Reformed open uy placement marks y'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hoan', {
				type: commandType.APPLY_TONE,
				tone: tone.GRAVE
			}, {
				tonePlacement: tonePlacement.REFORMED
			} ),
			{ handled: true, output: 'hoàn' },
			'oa plus ending converges under reformed placement'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huynh', {
				type: commandType.APPLY_TONE,
				tone: tone.GRAVE
			}, {
				tonePlacement: tonePlacement.REFORMED
			} ),
			{ handled: true, output: 'huỳnh' },
			'uy plus ending converges under reformed placement'
		);
		assert.deepEqual(
			$.ime.vi.renderCandidate(
				$.ime.vi.parseCandidate( 'hoa' ),
				tonePlacement.REFORMED
			),
			'hoa',
			'Reformed rendering is still pass-through when there is no tone'
		);
		assert.deepEqual(
			$.ime.vi.renderCandidate(
				$.ime.vi.parseCandidate( 'hòa' ),
				tonePlacement.REFORMED
			),
			'hoà',
			'Reformed rendering can re-render a traditional open oa surface'
		);
		assert.deepEqual(
			$.ime.vi.renderCandidate(
				$.ime.vi.parseCandidate( 'hoà' ),
				tonePlacement.TRADITIONAL
			),
			'hòa',
			'Traditional rendering can re-render a reformed open oa surface'
		);
	} );

	QUnit.test( 'Vietnamese engine reflows tone placement after candidate extension', ( assert ) => {
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'tóan' ),
			{ handled: true, output: 'toán' },
			'Extending tó to tóan reflows tone placement to toán'
		);
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'hòan' ),
			{ handled: true, output: 'hoàn' },
			'Extending hòa to hòan reflows tone placement to hoàn'
		);
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'tháy' ),
			{ handled: false },
			'Intermediate tháy is already rendered at its current tone target'
		);
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'nguơi' ),
			{ handled: true, output: 'ngươi' },
			'uơ plus a covered continuation promotes to ươ without requiring a tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'nguời' ),
			{ handled: true, output: 'người' },
			'uơ plus a covered continuation promotes to ươ while preserving tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'tưo' ),
			{ handled: false },
			'Bare ưo waits for more rime material before promotion'
		);
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'tưoi' ),
			{ handled: true, output: 'tươi' },
			'ưo plus a covered continuation promotes to ươ'
		);
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'tứoi' ),
			{ handled: true, output: 'tưới' },
			'ưo promotion preserves tone and reflows placement'
		);
		assert.deepEqual(
			$.ime.vi.engine.reflowCandidate( 'huơ' ),
			{ handled: false },
			'Open uơ remains distinct from ươ'
		);
	} );

	QUnit.module( 'VIME – Tone placement', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'Vietnamese engine resolves tone-placement regressions', ( assert ) => {
		var tone = $.ime.vi.Tone,
			commandType = $.ime.vi.CommandType;

		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'coi', {
				type: commandType.APPLY_TONE,
				tone: tone.TILDE
			} ),
			{ handled: true, output: 'cõi' },
			'oi places tone on o, not i'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'kheo', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'khéo' },
			'eo places tone on e, not o'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'thây', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'thấy' },
			'ây places tone on â, not y'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'khuây', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'khuấy' },
			'uây places tone on â, not y'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hoan', {
				type: commandType.APPLY_TONE,
				tone: tone.GRAVE
			} ),
			{ handled: true, output: 'hoàn' },
			'oa plus ending places tone on a'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huy', {
				type: commandType.APPLY_TONE,
				tone: tone.HOOK
			} ),
			{ handled: true, output: 'hủy' },
			'Open uy keeps traditional tone placement on u'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'quy', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'quý' },
			'Open quy treats u as part of the qu onset and places tone on y'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huynh', {
				type: commandType.APPLY_TONE,
				tone: tone.GRAVE
			} ),
			{ handled: true, output: 'huỳnh' },
			'uy plus ending places tone on y'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'huya', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'huýa' },
			'uya places tone on y'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hoao', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'hoáo' },
			'oao treats final o as an off-glide for tone placement'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'hoeo', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'hoéo' },
			'oeo treats final o as an off-glide for tone placement'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'THÂY', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'THẤY' },
			'Uppercase candidates keep case while resolving tone placement'
		);
	} );

	QUnit.test( 'Vietnamese engine handles qu, gi, and checked-tone structure', ( assert ) => {
		var tone = $.ime.vi.Tone,
			commandType = $.ime.vi.CommandType;

		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'quôc', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'quốc' },
			'quốc places tone on ô'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'giêng', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'giếng' },
			'giếng places tone on ê'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'mat', {
				type: commandType.APPLY_TONE,
				tone: tone.ACUTE
			} ),
			{ handled: true, output: 'mát' },
			'Checked syllables accept acute tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'mat', {
				type: commandType.APPLY_TONE,
				tone: tone.DOT
			} ),
			{ handled: true, output: 'mạt' },
			'Checked syllables accept dot tone'
		);
		assert.deepEqual(
			$.ime.vi.engine.transformCandidate( 'mat', {
				type: commandType.APPLY_TONE,
				tone: tone.GRAVE
			} ),
			{ handled: false },
			'Checked syllables reject incompatible tone commands conservatively'
		);
	} );

	QUnit.module( 'VIME – Adapter', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'VNI adapter preserves prefix and pass-through shape', ( assert ) => {
		assert.deepEqual(
			$.ime.inputmethods[ 'vi-vni' ].patterns( 'hello a1', '' ),
			{ noop: false, output: 'hello á' },
			'Adapter preserves prefix and replaces a simple toned candidate'
		);
		assert.deepEqual(
			$.ime.inputmethods[ 'vi-vni' ].patterns( 'bc1', '' ),
			{ noop: true, output: 'bc1' },
			'Adapter passes through commands the vertical-slice engine cannot handle'
		);
	} );

	QUnit.module( 'VIME – Telex adapter', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'Telex adapter preserves context-sensitive quick-w boundaries', ( assert ) => {
		var telex = $.ime.inputmethods[ 'vi-telex' ].patterns;

		assert.deepEqual(
			telex( 'ưw', 'uw' ),
			{ noop: false, output: 'uw' },
			'Repeating a Telex horn key after raw uw escapes to literal input'
		);
		assert.deepEqual(
			telex( 'ưw', 'w' ),
			{ noop: false, output: 'w' },
			'Repeating a standalone Telex quick w escapes to literal w'
		);
		assert.deepEqual(
			telex( 'ww', '' ),
			{ noop: true, output: 'ww' },
			'Telex does not treat a pasted literal ww window as a quick-w repeat'
		);
	} );

	QUnit.module( 'VIME – Simple Telex adapter', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'Simple Telex keeps standalone quick-key pass-through literal', ( assert ) => {
		var telex = $.ime.inputmethods[ 'vi-telex-simple' ].patterns;

		assert.deepEqual(
			telex( 'w', '' ),
			{ noop: true, output: 'w' },
			'Simple Telex keeps standalone w literal'
		);
	} );

	QUnit.module( 'VIME – VIQR* adapter', {
		before: loadVietnameseSource
	} );

	QUnit.test( 'VIQR* adapter leaves VIQR plus literal', ( assert ) => {
		var viqrStar = $.ime.inputmethods[ 'vi-viqr-star' ].patterns;

		assert.deepEqual(
			viqrStar( 'o+', '' ),
			{ noop: true, output: 'o+' },
			'VIQR* leaves plus as literal input'
		);
	} );
}( jQuery ) );
