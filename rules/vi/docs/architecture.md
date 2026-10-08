# VIME architecture

This document defines the software boundaries for Vietnamese input methods in jQuery.IME.
For the step-by-step engine algorithm, see `algorithm.md`.

The important boundary is:

```text
jQuery.IME host
    -> Vietnamese input-method adapter
        -> shared Vietnamese engine
            -> parser / transformer / renderer / validation data
```

## Goals

VIME must:

* implement Vietnamese input methods through one shared engine;
* keep method-specific key mapping out of Vietnamese orthographic logic;
* model operations semantically;
* keep the engine testable without DOM input simulation;
* use rendered text near the caret as the primary composition state;
* keep tone separate from the visible Unicode tone mark;
* avoid a large ordered regex grammar;
* avoid jQuery.IME core changes unless a concrete blocker is proven.

## jQuery.IME facts

Input methods are listed in `src/jquery.ime.inputmethods.js` under `$.ime.sources`.
Each source entry names a rule file.

jQuery.IME loads a rule file through `$.ime.load( inputMethodId )`.
A loaded rule file calls `$.ime.register( ...
)`.

An input method may define `patterns` as a function:

```javascript
patterns: function ( input, context ) {
    return result;
}
```

The return value may be a replacement object:

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

When `noop` is false, jQuery.IME replaces the whole `input` window before the caret.
Vietnamese adapters therefore preserve unchanged prefix text and replace only the transformed candidate.

When Shift is pressed, jQuery.IME gives `patterns_shift` priority before ordinary `patterns`.
In the current core, `patterns_shift` is array-based, so Vietnamese shifted command keys use a small bridge that delegates back to the same functional Vietnamese adapter.
VIME also uses `patterns_shift` to consume Shift+Space as an invisible composition boundary.

`maxKeyLength` controls how many JavaScript string code units before the caret are included in `input` before the newest key is appended.

`contextLength` controls raw input-key history.
It is not the same thing as rendered text before the caret.

## Packaging

The current jQuery.IME-compatible package is one shared Vietnamese rule source:

```text
rules/vi/vi.js
```

All Vietnamese metadata entries point to this source:

```text
vi-telex                   -> rules/vi/vi.js
vi-telex-simple            -> rules/vi/vi.js
vi-vni                     -> rules/vi/vi.js
vi-viqr                    -> rules/vi/vi.js
vi-viqr-star               -> rules/vi/vi.js
vi-telex-reformed          -> rules/vi/vi.js
vi-telex-simple-reformed   -> rules/vi/vi.js
vi-vni-reformed            -> rules/vi/vi.js
vi-viqr-reformed           -> rules/vi/vi.js
vi-viqr-star-reformed      -> rules/vi/vi.js
```

Reason: jQuery.IME has a simple rule-file loader.
Its dependency support is oriented around input methods, not arbitrary shared helper modules.
A single shared Vietnamese source is the smallest compatible package that preserves one engine.

## Layer responsibilities

### jQuery.IME host

jQuery.IME owns:

* keyboard events;
* active input-method selection;
* editable-element abstraction;
* caret and selection handling;
* reading text before the caret;
* replacing text before the caret;
* loading rule files.

Vietnamese code should not duplicate these responsibilities.

### Input-method adapters

Each adapter owns method-specific key decoding:

```text
input key or key sequence
    -> semantic command
```

Examples:

```text
Telex s  -> apply tone acute
VNI 1    -> apply tone acute
VIQR '   -> apply tone acute
VIQR* '  -> apply tone acute
```

Adapters also own the jQuery.IME `patterns` boundary, candidate extraction at that boundary, and narrow method-level literal behavior such as VIQR escape.
They also own composition-boundary state for Shift+Space, because this is an input-method lifecycle concern rather than a Vietnamese orthographic transform.

Adapters must not contain Vietnamese tone-placement rules, parser logic, `qu` handling, `gi` handling, or Unicode rendering tables beyond command decoding.

Telex has delayed-command ambiguity because ordinary letters can also be commands.
The adapter may ask shared engine helpers whether a candidate is a recognized literal structure or can receive a semantic command.
The actual transformation and validation still belong to the shared engine.

### Shared Vietnamese engine

The shared engine owns:

* Unicode decomposition and composition helpers;
* candidate parsing;
* composition-state classification;
* semantic transformations;
* tone-placement resolution;
* rendering;
* structural validation;
* fallback decisions for unrecognized candidates.

The engine must not depend on DOM APIs, jQuery selectors, keyboard events, caret manipulation, or editable elements.

## Adapter contract

The current implementation uses this adapter shape:

```javascript
createAdapter( {
    inputMethodId: "vi-vni",
    decodeCommand: decodeVNICommand,
    engine: Vietnamese.engine,
    tonePlacement: Vietnamese.TonePlacement.TRADITIONAL
} )
```

`tonePlacement` defaults to `TonePlacement.TRADITIONAL`.
Reformed input methods reuse the same adapters and pass `TonePlacement.REFORMED`.

`decodeCommand( input, context, options )` returns one of three forms.

A shared semantic command:

```javascript
{
    key: "1",
    command: {
        type: "apply-tone",
        literal: "1",
        tone: "acute"
    }
}
```

An adapter-level literal replacement:

```javascript
{
    key: "\\?",
    literalOutput: "?"
}
```

Or `null`, meaning the newest key is not a semantic command.
In that case the adapter may ask the engine to reflow the rendered candidate.

## Engine contract

The adapter calls two engine entry points.

Semantic transformation:

```javascript
engine.transformCandidate( candidate, command, {
    context: context,
    inputMethodId: inputMethodId,
    tonePlacement: tonePlacement
} )
```

Candidate reflow after ordinary letter extension:

```javascript
engine.reflowCandidate( candidate, {
    context: context,
    inputMethodId: inputMethodId,
    tonePlacement: tonePlacement
} )
```

Both return:

```javascript
{
    handled: true,
    output: "..."
}
```

or:

```javascript
{
    handled: false
}
```

If the engine reports `handled: false`, the adapter returns jQuery.IME pass-through.

## Candidate extraction

Candidate extraction is an adapter-boundary helper because jQuery.IME gives the adapter a bounded input window, not a parsed syllable.

`extractCandidate( input, commandKey )` returns:

```javascript
{
    prefix: "...",
    candidate: "..."
}
```

The adapter transforms only `candidate` and returns `prefix + output`.

Detailed extraction behavior is documented in `algorithm.md`.

## maxKeyLength and contextLength

Current configuration:

```text
contextLength:
  vi-telex and vi-telex-reformed 2
  all other Vietnamese methods 0

maxKeyLength:
  all Vietnamese methods 16

tonePlacement:
  vi-telex, vi-telex-simple, vi-vni, vi-viqr, vi-viqr-star traditional
  vi-telex-reformed, vi-telex-simple-reformed, vi-vni-reformed, vi-viqr-reformed, vi-viqr-star-reformed reformed
```

`contextLength = 0` keeps raw key history out of the main composition model for Simple Telex, VNI, VIQR, and VIQR*.

Default Telex keeps `contextLength = 2` for the narrow standalone quick-`w` escape distinction.
This lets the adapter distinguish `ww -> w` from `uww -> uw` after both first steps have rendered as `ư`.
The engine still uses rendered text near the caret as its main composition state.

Shift+Space composition-boundary state is stored by the Vietnamese adapter, not in raw `context`.
The state records a bounded rendered suffix and self-invalidates if the next input window no longer matches it.
This bounded-state approach is necessary because the current array-based `patterns_shift` bridge does not expose DOM-instance storage to individual shifted-key rules.

`maxKeyLength = 16` gives the adapter enough room for ordinary Vietnamese candidates plus a command key while keeping replacement scope bounded.
Because this is JavaScript string length, decomposed Unicode may consume more code units than precomposed text.

If tests prove `16` too small or unnecessarily large, update this document and the implementation constant together.

## Dependency direction

Dependencies should flow downward:

```text
adapter
    -> semantic command API
        -> engine
            -> orthographic data
                -> Unicode utilities
```

Avoid circular responsibilities:

* parser must not call a VNI adapter;
* renderer must not inspect keyboard events;
* Unicode helpers must not know Telex or VIQR;
* validator must not modify DOM text.

## Regular expressions

Regular expressions are allowed for small, local tasks:

* candidate boundary checks;
* character classes;
* simple table lookups;
* well-scoped normalization helpers.

Do not implement Vietnamese composition as a large ordered regex grammar whose correctness depends on rule order.

## Public and test APIs

The product surface is the jQuery.IME input methods, not a general-purpose Vietnamese library.

Pure engine pieces may be exposed under the small test-facing `$.ime.vi` namespace when they are useful for deterministic QUnit tests.
Keep this namespace modest and document any new seam in `testing.md`.

Current test-facing seams include:

* constants and enums;
* command decoders, including Simple Telex;
* `createAdapter`;
* `extractCandidate`;
* `parseCandidate`;
* `recognizeRime`;
* `renderCandidate`;
* tone-placement helpers;
* `engine.transformCandidate`;
* `engine.reflowCandidate`.

## Files likely to change for Vietnamese work

Normal Vietnamese work should touch only:

```text
src/jquery.ime.inputmethods.js
rules/vi/vi.js
rules/vi/vi.test.js
test/jquery.ime.test.fixtures.js
rules/vi/docs/*.md
```

jQuery.IME core changes should be treated as blockers requiring a documented design discussion, not as the default way to implement Vietnamese behavior.

## Examples and manual evaluation

`examples/index.html` loads jQuery.IME metadata and rule files through the same loader used by the rest of the project.
Once the dev server is running, changing `rules/vi/vi.js` is normally visible after reloading the example page.

Manual example testing is useful for typing feel, but automated regression tests remain required for confirmed bugs.
