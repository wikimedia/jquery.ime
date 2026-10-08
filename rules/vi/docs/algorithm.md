# VIME engine algorithm

This document describes how the current VIME engine works from a jQuery.IME input window to rendered Vietnamese output.
It is descriptive of the current implementation, not a proposal for a different engine.

The goal is to make `rules/vi/vi.js` understandable without turning every implementation detail into a public API.
Exhaustive rime data belongs in code and focused tests, not in this document.

## Pipeline

At the jQuery.IME boundary, every Vietnamese method follows the same shape:

```text
jQuery.IME input window
    -> input-method adapter
    -> adapter decoding
        |
        |-- semantic command
        |       -> extract candidate
        |       -> engine.transformCandidate()
        |       -> parse and analyze source state
        |       -> transform semantic state
        |       -> re-analyze and reclassify resulting state
        |       -> render NFC output
        |
        |-- literal adapter output
        |       -> extract candidate
        |       -> adapter replacement
        |
        `-- no command
                -> extract candidate
                -> engine.reflowCandidate()
                -> parse and analyze source state
                -> render NFC output if candidate reflow changes the text
```

The adapters are intentionally thin.
They translate method-specific keys into semantic commands such as:

```text
Telex s    -> apply tone acute
VNI 1      -> apply tone acute
VIQR '     -> apply tone acute
VIQR* '    -> apply tone acute
Telex dd   -> apply d-stroke
VNI 9      -> apply d-stroke
VIQR dd    -> apply d-stroke
```

Vietnamese parsing, tone placement, vowel-diacritic handling, validation, and rendering are shared by all methods.

## Implementation map

`rules/vi/vi.js` uses numbered top-level sections so the implementation can be read in roughly the same order as the pipeline above.

```text
[1] Namespace constants and lookup tables
    Shared command, tone, vowel-diacritic, state, rime, and placement enums.

[2] General utilities
[3] Semantic command factories
[4] Telex quick-key helpers

[5] Input method command decoders
    VNI, Telex, Simple Telex, VIQR, and VIQR* keys
        -> shared semantic commands or adapter-level literal output.

[6] Adapter side candidate helpers
[7] Candidate extraction
    jQuery.IME input window
        -> unchanged prefix + Vietnamese candidate + command key.

[8] Tokenization and Unicode helpers
[9] Finite rime recognizer
[10] Orthographic structure analysis
[11] Candidate parsing and rendering
    rendered candidate
        -> semantic tokens
        -> onset/rime structure
        -> structural classification
        -> NFC output.

[12] Semantic transformations
    semantic command + parsed state
        -> transformed state
        -> post-transform structural validation.

[13] Shared engine boundary
    engine.transformCandidate()
    engine.reflowCandidate()

[14] jQuery.IME adapter and registration helpers
[15] Test-facing namespace exports
[16] Input method registration
```

The section numbers are navigational aids, not API stability guarantees.
The stable architectural boundary is still the adapter plus shared engine contract described in `architecture.md`.

## jQuery.IME boundary

Each Vietnamese input method registers a functional `patterns` rule.
jQuery.IME calls it as:

```javascript
patterns( input, context )
```

`input` is the text window before the caret plus the latest key.
Its length is bounded by `maxKeyLength`.
VIME sets this to `16` for the Vietnamese methods.

`context` is raw key context.
VIME keeps `contextLength = 0` for VNI, VIQR, VIQR*, and Simple Telex, because ordinary Vietnamese composition is reconstructed from rendered text near the caret rather than from persistent raw key history.

Default Telex uses `contextLength = 2` only for standalone quick-`w` escape.
After the first key, both raw `w` and raw `uw` can render as `ư`; the small raw context lets the adapter distinguish `ww -> w` from `uww -> uw`.

The adapter returns either a replacement object:

```javascript
{
    noop: false,
    output: "replacement text"
}
```

or pass-through:

```javascript
{
    noop: true,
    output: input
}
```

When `noop` is false, jQuery.IME replaces the whole input window.
For that reason VIME preserves any unchanged prefix and replaces only the extracted Vietnamese candidate within that window.

Input methods with shifted command keys expose a small `patterns_shift` bridge.
jQuery.IME gives `patterns_shift` priority when Shift is pressed, and the array-based bridge delegates those keys back into the same functional adapter.
Shift+Space is also handled through `patterns_shift`.
It is consumed without inserting visible whitespace and records an invisible composition boundary for the Vietnamese adapter.

The composition-boundary wrapper sits outside normal command decoding:

```text
patterns_shift receives Shift+Space
    -> createShiftedAdapterPatterns()
    -> adapter.setCompositionBoundary(beforeText)
    -> return beforeText

later patterns(input, context)
    -> adapter()
    -> scopeInputToCompositionBoundary(boundaryState, input)
        |-- inactive
        |       -> processInput(input, context)
        |
        `-- active
                -> processInput(scoped.input, context)
                -> reattach scoped.prefix
                -> update or clear boundary state
```

When a composition boundary is active, the adapter scopes later input to the rendered suffix after that boundary before calling candidate extraction.
The frozen prefix is copied through unchanged.
The boundary state stores the bounded rendered text before the caret and the active suffix.
If the next input window no longer matches that state, VIME clears the boundary and processes the full input normally.

## Candidate extraction

`extractCandidate( input, commandKey )` splits the input window into:

```text
prefix + candidate + commandKey
```

The candidate scan walks left from the command key while characters are candidate code units:

* ASCII letters;
* precomposed Vietnamese Latin characters in the covered Unicode range;
* combining marks.

Text outside that run remains prefix text and is copied through unchanged.
This lets an input window such as `foo toán1` transform only `toán` while preserving `foo `.

For ordinary letter extension with no decoded command, the adapter extracts the candidate with an empty command key and asks the engine whether tone placement should be reflowed.

With a composition boundary, this extraction happens only on the active suffix:

```text
ki Shift+Space loo Shift+Space mets
        frozen prefix: ki
        active suffix: loo -> lô
        frozen prefix: kilô
        active suffix: mets -> mét
        final output: kilômét
```

## Semantic state

The parser normalizes the candidate to NFD, then builds tokens.
A token stores the semantic parts of a rendered character:

* base letter;
* whether the token is a vowel;
* `đ` state for `d`;
* vowel diacritic, if any;
* tone, if this rendered surface already carries a tone mark.

Tone is also stored on the candidate state as a semantic value.
Rendering later decides which token should visibly carry the tone mark.
This is why VIME can change `tóan` to `toán` without treating “move tone mark” as a primary command.

After tokenization, the parser analyzes the written structure:

```text
onset + rime
rime = nucleus material + ending
```

The structure records:

* onset boundary;
* rime text;
* ending;
* checked-ending status;
* eligible vowel token indices;
* finite rime-recognition status;
* resolved tone-target index.

Special onset handling keeps `qu` and `gi` from behaving like ordinary vowel material when another vowel follows.

## Finite rime recognizer

The recognizer is a structural gate, not a dictionary and not a foreign-language detector.
It answers whether the current rime shape is covered by the Vietnamese composition model.

The current inventory has two explicit sets:

| Inventory | Meaning |
| --- | --- |
| `complete` | Rimes recognized as complete structures in the current VIME composition model. |
| `composable` | Source spellings accepted only as intermediate composition precursors. |

Prefix statuses are derived from both inventories.
For example, a shorter rime can be accepted as a prefix of a longer covered rime while the user is still typing.

The recognizer returns these statuses:

| Rime status | Candidate state | Meaning |
| --- | --- | --- |
| `COMPLETE` | `STRUCTURALLY_VALID` | The rime is complete in the current composition model. |
| `COMPLETE_AND_PREFIX` | `STRUCTURALLY_VALID` | The rime is complete in the current model and can also grow into a longer covered rime. |
| `COMPOSABLE` | `INTERMEDIATE` | The rime is a valid composition precursor but not final-looking Vietnamese. |
| `PREFIX` | `INTERMEDIATE` | The rime is a prefix of a covered longer rime. |
| `INVALID` | `UNRECOGNIZED` | The rime is outside the current model. |

This split is important for Telex.
Literal delayed-command disambiguation should prefer a newly typed letter when the whole candidate is already `STRUCTURALLY_VALID`, but semantic transforms may still operate on `INTERMEDIATE` candidates.

Example:

```text
hoaos -> hoáo
```

When the final `o` is typed, `oao` is recognized as a complete rime, so Telex keeps that `o` literal and applies the following `s` as a tone command.

Example:

```text
thuongwf -> thường
```

The source rime `uong` is a composition precursor.
It can still receive a later horn command and render as `ương`.

## Semantic commands

The engine accepts semantic commands, not direct string substitutions:

* apply tone;
* remove tone;
* apply vowel diacritic;
* apply d-stroke.

Each command operates on the parsed state and returns a new state plus any literal suffix needed for escape behavior.

The semantic-command path is:

```text
patterns(input, context)
    -> decodeCommand(input, context, options)
        -> semantic command
    -> extractCandidate(input, decoded.key)
    -> engine.transformCandidate(candidate, command, options)
        -> parseCandidate(candidate, tonePlacement)
            -> createToken()
            -> addCombiningMarkToToken()
            -> prepareState()
                -> analyzeStructure()
                    -> resolveOnset()
                    -> collectEligibleVowels()
                    -> findEnding()
                    -> recognizeRime()
                    -> findToneTarget()
                -> classifyStructure()
        -> transformState(state, command, tonePlacement)
            -> applyTone()
            -> removeTone()
            -> applyVowelDiacritic()
            -> applyDStroke()
        -> resultFromState()
            -> prepareState()
        -> renderCandidate()
            -> resolveTonePlacement()
            -> renderToken()
    -> adapter returns { noop: false, output: prefix + result.output }
```

There are two structural gates:

```text
pre-transform:
    source state must not be UNRECOGNIZED

post-transform:
    transformed semantic state must not become UNRECOGNIZED
```

The post-transform gate re-analyzes and reclassifies the transformed semantic state before rendering it.
It does not render output and then parse that output again.

Repeated-key escape is handled semantically.
If a command repeats an already present value, the engine can remove the value and append the command key literally.
This keeps escape behavior method-specific at the key layer but shared at the state layer.

For vowel-diacritic commands, repeated-key escape is delayed while the same command can still apply to another eligible unmarked vowel in the candidate.
This preserves explicit multi-vowel spellings such as:

```text
lo6o62ng -> lôồng
```

For Telex delayed vowel-diacritic letters, escape from an already rendered vowel diacritic is checked before recognized literal structure.
This lets `ooo -> oo` and `booong -> boong` work even though `ôo` and related extended rimes are recognized structures in the composition inventory.

After that escape has produced a literal repeated-vowel run, later Telex letters in the same run stay literal.
This keeps long `o` sequences usable for foreign text and rare literal spellings instead of turning them back into extended circumflex composition.

Checked syllables accept only acute (`sắc`) and dot (`nặng`) tone commands.
Incompatible checked tone commands pass through rather than rendering nonstandard checked-tone forms.

## Vowel-diacritic behavior

Vowel-diacritic commands target eligible vowels according to the parsed structure.
The engine uses ordered semantic precedence rather than a broad substitution table.

The central dispatcher is:

```text
applyVowelDiacritic(state, command, tonePlacement)
    -> repeated-key escape?
        -> resolveAdditionalVowelDiacriticTarget()
        -> removeHornFromUo()
        -> removeVowelDiacritic()

    -> if HORN:
        -> applyHornToCircumflexUo()
        -> applyHornToUo()
        -> applyHornToUa()
        -> applySameBaseVowelDiacriticSwitch()
        -> applySimpleVowelDiacritic()

    -> if CIRCUMFLEX:
        -> applyCircumflexToHornUo()
        -> applyCircumflexToUa()
        -> applySameBaseVowelDiacriticSwitch()
        -> applySimpleVowelDiacritic()

    -> if BREVE:
        -> applyBreveToOa()
        -> applySameBaseVowelDiacriticSwitch()
        -> applySimpleVowelDiacritic()
```

For horn commands, the covered precedence is:

```text
open uô -> uơ
covered uô family -> ươ
unmarked uo family -> ươ
ua -> ưa
same-base switch, such as ô -> ơ
simple application, such as o -> ơ or u -> ư
```

For circumflex commands, the covered precedence is:

```text
ươ -> uô
ua family -> uâ family
same-base switch, such as ơ -> ô or ă -> â
simple application, such as a -> â, e -> ê, or o -> ô
```

For breve commands, the covered precedence is:

```text
oa family -> oă family
same-base switch, such as â -> ă
simple application, such as a -> ă
```

The precedence matters because several visible results can share letters but represent different composition structures.
Every accepted transformation is still re-analyzed and reclassified before rendering.
If the resulting semantic state is unrecognized, the adapter passes the original input through.

## Tone placement

Tone placement is a rendering policy.
The engine keeps the semantic tone independent from the visible mark and recalculates the mark position whenever it renders the state.

The default policy is traditional tone placement:

```text
hòa
xóa
hủy
```

The reformed variants use the same adapters and engine with a different tone-placement policy:

```text
hoà
xoá
huỷ
```

The policy difference is visible mainly for open `oa`, `oe`, and `uy` rimes.
Rimes with endings usually converge because the ending changes the tone target.

Tone-target resolution is an ordered resolver:

```text
no eligible vowel
    -> no target

one eligible vowel
    -> that vowel

open oa / oe / uy
    -> policy-specific target

known rime or nucleus family
    -> explicit family target

final off-glide i / y / o / u
    -> previous eligible vowel

otherwise
    -> last eligible vowel
```

The open `oa`, `oe`, and `uy` policy branch comes before the general family and off-glide branches.
This is what lets traditional and reformed placement differ only where the policy intentionally differs.

## Rendering

Rendering writes tokens back to text in NFC form:

```text
semantic state
    -> resolve tone target
    -> render each token with vowel diacritic and at most one tone mark
    -> normalize NFC
```

Case is preserved from the original token bases.
`D` with d-stroke renders as `Đ`; `d` with d-stroke renders as `đ`.

## Candidate reflow

When the adapter decodes no command, it may still ask the engine to re-render the candidate.
Reflow handles two narrow cases:

* tone reflow for candidates that already have a semantic tone;
* structural promotion from narrow `uơ`/`ưo` precursors into covered ƯƠ-family rimes.

If rendering would not change the text, the engine reports `handled: false`.

The reflow path is:

```text
patterns(input, context)
    -> decodeCommand(...) returns null
    -> extractCandidate(input, "")
    -> engine.reflowCandidate(candidate, options)
        -> parseCandidate(candidate)
        -> promoteUoFamilyContinuation()
            -> renderCandidate() if promotion changes output
        -> renderCandidate() if semantic tone reflows to a new target
```

This covers ordinary extension after an early tone command:

```text
to1     -> tó
to1an   -> toán

hoa2    -> hòa
hoa2n   -> hoàn

nguo7   -> nguơ
nguo7i  -> ngươi

nguo72  -> nguờ
nguo72i -> người

tu7o    -> tưo
tu7oi   -> tươi
```

The same mechanism is structural rather than lexical.
It does not decide whether a word exists; it only re-renders a recognized candidate whose tone target or narrow ƯƠ-family precursor changes after more letters are typed.

## Telex disambiguation

Telex has more ambiguity than VNI and VIQR because ordinary letters can also be commands.
VIME exposes two Telex profiles:

* `Telex` supports standalone quick `w -> ư`;
* `Simple Telex` keeps standalone `w` literal.

Both profiles leave `[` and `]` literal.

At the decoder level, Telex follows this shape:

```text
decodeTelexCommand()
    -> decodeTelexCommandWithOptions(input, context, options, telexOptions)
        -> tone key?
            -> createToneCommand()
        -> z?
            -> createRemoveToneCommand()
        -> dd?
            -> createDStrokeCommand()
        -> delayed-command literal-run guard? a / e / o / w
            -> candidateHasLiteralRepeatedKeyRun()
        -> repeated vowel command?
            -> createVowelDiacriticCommand()
        -> single d after candidate?
            -> createDStrokeCommand()
        -> delayed-command transform checks? a / e / o / w
            -> candidateHasTargetVowelDiacritic()
            -> candidateHasRecognizedLiteralStructure()
            -> candidateCanReceiveTargetVowelDiacritic()
        -> default-Telex quick w?
            -> getTelexQuickWRepeatCommandKey()
            -> candidateCanUseTelexQuickW()
            -> createVowelDiacriticCommandWithFallback()
        -> remaining w?
            -> createVowelDiacriticCommand(HORN)
```

VIME resolves the shared delayed-command cases in this order:

1. Decode direct command keys before delayed vowel-diacritic ambiguity handling.
2. For delayed vowel-diacritic letters such as `a`, `e`, `o`, and `w`, first keep the key literal if the previous candidate already contains a repeated literal run for that key.
3. Otherwise, check whether the previous rendered candidate already has the requested vowel diacritic and should escape to literal input.
4. Otherwise, check whether the literal candidate including the new key is already structurally valid.
5. If literal structure is valid, keep the new key literal.
6. Otherwise, test whether the previous candidate can receive the requested vowel diacritic.
7. In default Telex only, if the key is `w`, no semantic transform is possible, and the preceding candidate is empty or still an onset-only prefix, insert `ư` as quick input.
8. If a semantic transform would produce an unrecognized semantic state, pass through.

This gives behavior such as:

```text
thayas  -> thấy
thayw   -> thayw
hoaos   -> hoáo
hoeos   -> hoéo
ooo     -> oo
oooo    -> ooo
booong  -> boong
huaws   -> hứa
dacds   -> đác
droid   -> droid
```

Default Telex also gives:

```text
w   -> ư
ww  -> w
tw  -> tư
tww -> tw
```

Simple Telex gives:

```text
w  -> w
ww -> ww
tw -> tw
```

The recognizer is doing structural work here.
It is not hard-coding words such as `droid`.
Apart from the two-character context used for default Telex quick-`w` escape, it is not maintaining persistent raw key history.

## Worked examples

### `to1an -> toán`

1. `to1` decodes `1` as acute.
2. The candidate `to` parses as structurally valid.
3. The engine applies acute and renders `tó`.
4. Later `a` and `n` are ordinary letters, so the adapter asks for reflow.
5. `tóan` parses with semantic tone acute and rime `oan`.
6. Traditional rendering places the tone on `a`, producing `toán`.

### `thuongwf -> thường`

1. `w` is considered as a delayed vowel-diacritic command.
2. The source structure is a covered composition precursor.
3. The engine applies horn in the `uong -> ương` path.
4. `f` applies grave.
5. Rendering produces `thường`.

### `hoaos -> hoáo`

1. The second `o` is a possible delayed circumflex key in Telex.
2. The literal candidate `hoao` has the complete rime `oao`.
3. The adapter keeps the final `o` literal.
4. `s` applies acute to the recognized rime and renders `hoáo`.

### `thayw -> thayw`

1. `w` could be a delayed breve or horn command.
2. The preceding rime ends in the off-glide `y`.
3. A semantic transform would not produce a recognized Vietnamese composition state.
4. The adapter passes the input through.

### `droid -> droid`

1. The final `d` is decoded as a possible d-stroke command.
2. The extracted source candidate is `droi`.
3. `droi` is already `UNRECOGNIZED`.
4. The pre-transform gate refuses semantic transformation on an unrecognized state.
5. The adapter passes the original input through.

## Current limitations

VIME is not a dictionary and does not validate whether a Vietnamese-looking word is lexically real.

The finite recognizer covers the current tested composition inventory.
Rare, historical, dialectal, minority-language, or specialized spellings may need explicit structural discussion and tests before they are added.

Some Telex ambiguity is inherent without a raw-key history or a user-facing spell-check option.
The current strategy is to accept covered Vietnamese composition behavior while passing through structurally impossible candidates.
