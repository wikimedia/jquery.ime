# VIME status

This document records the current project status and phase history.
It is the place for milestone state, known limits, and deferred work.
Normative behavior belongs in `requirements.md`; the current engine algorithm belongs in `algorithm.md`.

## Current status

The initial VIME implementation is complete for the supported jQuery.IME scope.

This means:

* the current shared engine has a stable tested baseline for Telex, Simple Telex, VNI, VIQR, VIQR*, and their reformed tone-placement variants;
* the finite rime recognizer is used for covered structural validation;
* tone reflow, post-transform validation, repeated-key escape, and Telex delayed-command disambiguation are documented and tested for the current scope;
* open `uơ` remains distinct but promotes to covered ƯƠ-family rimes when later continuation makes that structure available;
* Shift+Space provides an invisible composition boundary for covered multi-syllable loanword and respelling workflows;
* the project has enough documentation for a contributor to understand the current algorithm without reverse-engineering `rules/vi/vi.js` from scratch.

It does not mean VIME is a dictionary-backed Vietnamese spell checker or a complete model of every Vietnamese-related orthography.

## Implemented input methods

The current jQuery.IME source registers:

```text
vi-telex
vi-telex-simple
vi-vni
vi-viqr
vi-viqr-star
vi-telex-reformed
vi-telex-simple-reformed
vi-vni-reformed
vi-viqr-reformed
vi-viqr-star-reformed
```

All ten input-method ids load the same source file:

```text
rules/vi/vi.js
```

The `-reformed` variants change only tone-placement policy.
They do not fork the parser, transformer, renderer, or adapter logic.

## Phase history

### Phase 0 – baseline and project specification

The project established the goal: add Vietnamese input methods to jQuery.IME through one shared Vietnamese composition engine.

### Phase 1 – jQuery.IME integration spike

The spike confirmed the viable jQuery.IME extension path:

* input methods are registered from rule files through metadata in `src/jquery.ime.inputmethods.js`;
* functional `patterns` rules can call a shared engine boundary;
* `patterns_shift` needs an array bridge for shifted command keys;
* `maxKeyLength` provides the rendered input window;
* `contextLength` should not become the main Vietnamese composition state;
* one shared Vietnamese source file is the smallest compatible package.

### Phase 2 – shared engine vertical slice with VNI

Phase 2 proved the shared-engine boundary with a VNI vertical slice, including candidate extraction, semantic commands, parsing, rendering, and focused QUnit coverage.

### Phase 3 – complete VNI path for the initial scope

Phase 3 expanded the shared engine for the VNI path:

* tones and tone removal;
* vowel diacritics;
* d-stroke;
* `qu` and `gi` handling;
* checked-ending behavior;
* case-preserving rendering;
* common complex rimes and family transitions.

### Phase 4 – Telex and VIQR adapters

Phase 4 added the remaining adapters over the shared engine:

* Telex command decoding and repeated-key escape;
* Simple Telex as the conservative Telex profile without standalone `w` quick input;
* VIQR command decoding and backslash escape;
* VIQR* horn mapping;
* shifted command-key bridge;
* adapter fixtures for all input methods.

### Phase 5 – engine hardening and documentation

Phase 5 hardened the shared engine and documented the current algorithm:

* finite rime recognizer with complete, composable, and prefix statuses;
* post-transform structural validation;
* tone reflow after ordinary letter extension;
* `uơ` continuation promotion into covered ƯƠ-family rimes;
* Shift+Space composition-boundary support in the Vietnamese adapter;
* traditional and reformed tone-placement variants;
* foreign-like Telex pass-through for structurally impossible candidates;
* recognized-literal disambiguation for Telex delayed commands;
* inventory audit tests and regression fixtures;
* documentation ownership model across README, requirements, architecture, orthographic model, algorithm, testing, terminology, and status.

## Current boundary

The current boundary is a hardened composition engine for covered modern Vietnamese typing behavior in jQuery.IME.

The engine is not:

* a dictionary;
* a broad foreign-word detector;
* a minority-language orthography model;
* a historical spelling model.

Those may become future project directions, but they are outside the initial supported scope.

## Known limitations

The recognizer validates written structure, not lexical existence.
A Vietnamese-shaped nonce syllable can still be accepted if its structure is in the covered model.

Rare, dialectal, minority-language, historical, and specialized spellings may need new structural examples and tests before the recognizer should accept them.

Some Telex ambiguity remains inherent in a rendered-text-first jQuery.IME adapter.
Full Telex uses a narrow raw-key context only for standalone `w` quick-key escape.
Other Vietnamese behavior still prefers documented structural behavior and repeated-key escape rather than persistent raw-key history or a user-visible spell-check option.

## Possible follow-up topics

Future work may include:

* broader rime inventory review with additional external references;
* support for rare, dialectal, historical, or specialized spellings when backed by examples and tests.

These are outside the current supported scope.
