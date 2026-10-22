# AGENTS.md

## Project context

This repository contains VIME, the Vietnamese Input Method Engine being developed inside jQuery.IME.

The supported Vietnamese input methods are:

* Telex;
* Simple Telex;
* VNI;
* VIQR;
* VIQR* as a VIQR variant using `*` for horn.

All Vietnamese input methods must share one Vietnamese composition engine.
User-facing method order is Telex, Simple Telex, VNI, VIQR, then VIQR*.
VNI may remain the preferred profile for detailed development examples when only one input-method path is needed.

## Required reading

Before changing Vietnamese-specific behavior, architecture, tests, or documentation, read:

* `rules/vi/docs/README.md`
* `rules/vi/docs/status.md`
* `rules/vi/docs/requirements.md`
* `rules/vi/docs/architecture.md`
* `rules/vi/docs/algorithm.md`
* `rules/vi/docs/orthographic-model.md`
* `rules/vi/docs/testing.md`
* `rules/vi/docs/terminology.md`

These documents define the intended project model.
When implementation and documentation disagree, do not silently choose one.
Identify the discrepancy, update the right document, and keep code, tests, and docs aligned.

## Source-of-truth map

Use the docs by ownership:

* `README.md` for the short project map.
* `status.md` for phase history, current boundary, known limits, and deferred work.
* `requirements.md` for user-visible behavior.
* `architecture.md` for software boundaries, packaging, and jQuery.IME integration.
* `algorithm.md` for the current engine flow.
* `orthographic-model.md` for Vietnamese written structure.
* `testing.md` for test layout and commands.
* `terminology.md` for canonical vocabulary.

Do not place major architectural decisions only in source comments.

## Core architectural constraints

Use one shared Vietnamese engine.
Do not implement Telex, VNI, VIQR, and VIQR* as independent transformation systems.

Input-method-specific code should primarily translate input keys into shared semantic commands:

```text
Telex s
VNI 1
VIQR '
VIQR* '
    -> apply tone acute
```

The shared engine owns Vietnamese parsing, structural validation, tone placement, vowel-diacritic behavior, `qu`, `gi`, Unicode rendering, and post-transform validation.

Keep the engine host-independent.
Core Vietnamese logic must not depend on DOM APIs, jQuery selectors, keyboard events, caret manipulation, or editable elements.

Use rendered text near the caret as the main composition state.
Do not rely on persistent raw-key history unless a specific behavior demonstrably requires it and has focused tests.

Treat tone semantically.
Do not implement tone relocation as a fundamental operation.
Parse the current structure, preserve the semantic tone, update the structure, recalculate tone placement, then render.

Distinguish:

* recognized complete composition structures;
* valid intermediate composition states;
* unrecognized input.

Keep structural and lexical validity separate.
VIME is not a dictionary or lexical spell checker.

## jQuery.IME integration constraints

Avoid modifying jQuery.IME core.
A core change should only be considered when:

1. a concrete Vietnamese requirement cannot be implemented correctly through existing extension mechanisms;
2. the limitation can be demonstrated with a minimal reproducible case;
3. the blocker is documented;
4. project-level design discussion is appropriate before substantial work proceeds.

The current jQuery.IME-compatible package is one shared Vietnamese rule source:

```text
rules/vi/vi.js
```

with metadata entries for:

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

all pointing to that source.

## Testing rules

Keep VIME-specific unit and adapter tests in:

```text
rules/vi/vi.test.js
```

Keep VIME-specific fixture data in the shared fixture file:

```text
test/jquery.ime.test.fixtures.js
```

Use pure engine tests for parser behavior, transformations, validation, tone placement, Unicode handling, rendering, and recognizer inventory audits.

Use jQuery.IME integration fixtures for the host boundary and representative complete typing sequences.
Do not run large grammar corpora through simulated DOM typing when direct engine tests are sufficient.

A confirmed bug should receive a deterministic automated regression test.
Prefer the smallest test that reproduces the actual failure.

Before a substantial change is considered complete, run the focused Vietnamese test workflow documented in `rules/vi/docs/testing.md`.

Before milestones or broad integration changes, run the full relevant repository suite as documented in `rules/vi/docs/testing.md`.

If the full suite fails because of unrelated pre-existing issues, keep touched-file checks clean and document the broader failure.

Do not weaken tests, skip failing repository tests, or relax Vietnamese requirements merely because the current implementation is difficult.

## Implementation workflow

For non-trivial work:

1. read the relevant `rules/vi/docs` files;
2. inspect current jQuery.IME conventions before changing architecture;
3. identify the smallest affected layer;
4. add or update focused tests;
5. implement the behavior;
6. run focused tests;
7. inspect the diff for unrelated changes;
8. run broader regression tests when appropriate.

When asked only to analyze or plan, do not modify files.

When asked to implement a scoped task, stay within that scope unless a blocking dependency requires a small additional change.

## Terminology

Use the canonical terms in `rules/vi/docs/terminology.md`.

Important terms:

* use `tone`, not `accent`;
* use `tone mark` for the visible mark;
* use `vowel diacritic` for circumflex, breve, and horn;
* use `nucleus`, `onset`, `rime`, and `ending` according to the project model;
* use `traditional tone placement` and `reformed tone placement`, not `old style` and `new style`.

Do not introduce competing terminology without updating `rules/vi/docs/terminology.md`.

## Documentation maintenance

Update documentation when an implementation decision changes documented architecture or behavior.

Do not duplicate large feature inventories across docs.
Put current project status in `status.md`, user-visible rules in `requirements.md`, algorithmic flow in `algorithm.md`, and software boundaries in `architecture.md`.

For Markdown prose, prefer sentence-per-line semantic breaks.
Keep each ordinary sentence on its own line, including sentences inside list items.
Do not reflow code blocks, tables, long commands, URLs, or lines where wrapping would make the source harder to read.

## Commit message suggestions

When asked for a commit message, use Conventional Commits.
Keep the subject on one line.
For the optional body, hard-wrap prose in the usual Git commit-message style.
Do not hard-wrap code blocks, long commands, URLs, or literal examples where wrapping would make copying harder.
Prefer a short body of one to three sentences unless the change genuinely needs more context.

## Integration mindset

Keep the implementation understandable to future jQuery.IME maintainers and VIME contributors who may not know Vietnamese.

Prefer:

* explicit data structures;
* clear function boundaries;
* readable tests;
* small commits;
* documented behavior;
* minimal jQuery.IME core impact.
