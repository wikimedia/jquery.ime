# VIME testing

This document describes how VIME behavior is tested inside jQuery.IME.

The testing goal is to keep Vietnamese behavior covered without modifying the generic jQuery.IME rule tests more than necessary.

## File layout

VIME-specific tests live in:

```text
rules/vi/vi.test.js
```

VIME-specific integration fixtures live in the shared jQuery.IME fixture file:

```text
test/jquery.ime.test.fixtures.js
```

`test/index.html` loads the shared fixture file, then the VIME QUnit test file:

```html
<script src="jquery.ime.test.fixtures.js"></script>
<script src="../rules/vi/vi.test.js"></script>
```

The generic input-method fixture runner in `test/jquery.ime.test.js` executes the VIME fixture entries through the normal jQuery.IME typing simulation.

Optional corpus audit tooling lives in:

```text
rules/vi/vi.test.corpus.js
```

This script reads external corpus files and is not part of the default QUnit or Grunt suite.
The corpus itself is not vendored in this repository.

## Testing layers

Use the lightest layer that proves the behavior.

### Pure engine tests

Use pure QUnit tests for:

* Unicode parsing and rendering;
* rime recognition;
* structural classification;
* semantic transformations;
* tone placement;
* tone reflow;
* post-transform validation;
* inventory audits.

These tests should call `$.ime.vi` seams directly and should not simulate DOM typing.

### Adapter-boundary tests

Use adapter tests for:

* command decoding;
* candidate extraction;
* prefix preservation;
* pass-through objects;
* tone-placement policy forwarding;
* adapter calls to `engine.transformCandidate` and `engine.reflowCandidate`.

Adapter tests may use small fake engine objects when the boundary behavior is the thing being tested.

### Integration fixtures

Use fixture tests for representative full typing sequences in each input method.
Fixtures should cover the user-visible host boundary but should not become the main place for large grammar inventories.

Good fixture cases include:

* common Telex, Simple Telex, VNI, VIQR, and VIQR* typing sequences;
* traditional and reformed tone-placement examples;
* delayed command examples;
* repeated-key escape examples;
* shifted command-key examples;
* Shift+Space composition-boundary examples;
* representative structural-validation regressions.

## Current QUnit modules

The current VIME modules are:

```text
VIME – Registration and loading
VIME – Unicode
VIME – Parser
VIME – Transform
VIME – Tone placement
VIME – Adapter
VIME – Telex adapter
VIME – Simple Telex adapter
VIME – VIQR* adapter
```

The registration module covers input-method metadata and shared-source loading behavior.

## Focused workflow

Run focused Vietnamese tests with:

```bash
npx grunt connect qunit --modules="VIME – Registration and loading,VIME – Unicode,VIME – Parser,VIME – Transform,VIME – Tone placement,VIME – Adapter,VIME – Telex adapter,VIME – Simple Telex adapter,VIME – VIQR* adapter"
```

Run the full relevant repository suite before closing milestones or broad integration changes:

```bash
npx grunt test
```

If the full suite fails for an unrelated pre-existing reason, keep touched files clean where possible and record the broader failure in the work summary.

## Optional corpus audit

The corpus audit script can measure broad composition coverage against external word lists:

```bash
node rules/vi/vi.test.corpus.js --traditional path/to/vi-DauCu.dic --reformed path/to/vi-DauMoi.dic
```

It bootstraps `rules/vi/vi.js` in Node with a minimal jQuery.IME stub, generates canonical keystrokes for Telex, Simple Telex, VNI, VIQR, and VIQR*, then types those keys through the registered adapters.
The key generator follows the same broad strategy as AVIM's corpus test: convert each Unicode word to a VIQR-like intermediate form, keep base letters first, then append the generated tone and vowel-diacritic commands.

This means the audit checks one canonical typing order per word, not every possible composition order.
For example, `xuất` may be audited as `xuat61` for VNI, but the corpus audit does not automatically try variants such as `xua6t1` or `xua61t`.
Known flexible-order behavior should stay covered by focused unit tests or integration fixtures.

The script is an audit tool, not a normative dictionary test.
Failures should be triaged before they become required regression tests because a corpus may include acronyms, loanwords, historical spellings, rare place names, or entries outside the current VIME composition scope.

Use method filters when investigating one input path:

```bash
node rules/vi/vi.test.corpus.js --traditional path/to/vi-DauCu.dic --no-reformed --methods=vni
```

## Behavior coverage

Keep coverage organized by behavior rather than by implementation phase.

### Registration and metadata

Tests should assert that Vietnamese methods are registered with the expected display labels and metadata:

```text
Telex
Simple Telex
VNI
VIQR
VIQR*
Telex (đặt dấu kiểu mới)
Simple Telex (đặt dấu kiểu mới)
VNI (đặt dấu kiểu mới)
VIQR (đặt dấu kiểu mới)
VIQR* (đặt dấu kiểu mới)
```

They should also verify that all methods share the same source and expose the expected `maxKeyLength`, `contextLength`, and tone-placement policy.

### Parser and recognizer

Parser and recognizer tests should cover:

* NFD input parsing;
* NFC rendering;
* `đ` / `Đ`;
* `qu` and `gi`;
* checked endings;
* complete rimes;
* composition-only rime precursors;
* prefix states;
* unrecognized states.

Inventory audits may use grouped complete rimes from the current Hieu Thi-based coverage set, but they should remain pure engine tests.

### Semantic transforms

Transform tests should cover:

* applying tones;
* replacing tones;
* removing tones;
* applying circumflex, breve, and horn;
* applying d-stroke;
* repeated-key escape;
* checked-ending tone constraints;
* post-transform validation;
* pass-through for unrecognized candidates.

### Tone placement

Tone-placement tests should cover:

* one-vowel rimes;
* common diphthongs and triphthongs;
* open `oa`, `oe`, and `uy`;
* rimes with endings;
* `qu` and `gi`;
* traditional placement;
* reformed placement.

Representative examples:

```text
traditional: hoa2 -> hòa
reformed:    hoa2 -> hoà
traditional: khoe3 -> khỏe
reformed:    khoe3 -> khoẻ
traditional: huy3 -> hủy
reformed:    huy3 -> huỷ
hoan2 -> hoàn
huynh2 -> huỳnh
```

### Candidate reflow

Candidate reflow should be tested through both pure engine tests and representative fixtures:

```text
to1an -> toán
hoa2n -> hoàn
nguowfi -> người
tu7oi -> tươi
```

Pure engine tests should assert that reflow does not report handled when rendering would not change the candidate.

### Composition boundary

Composition-boundary tests should cover Shift+Space through integration fixtures because the behavior depends on jQuery.IME shifted-key handling.

Representative cases:

```text
Telex: a Shift+Space s k -> ask
VNI:   ki Shift+Space lo6 Shift+Space met1 -> kilômét
Telex: ki Shift+Space loo Shift+Space mets -> kilômét
```

Adapter-boundary unit tests may use `createAdapter()` directly to assert that the engine receives only the suffix after the boundary.

### Telex ambiguity

Telex tests should keep paired cases for foreign-like pass-through that does not depend on standalone quick `w`, and nearby Vietnamese composition:

```text
droid -> droid
david -> david
browser -> browser
nodejs -> nodejs
dacds -> đác
thayas -> thấy
quocos -> quốc
gienges -> giếng
```

Simple Telex should additionally cover `washington -> washington`.
Default Telex may transform initial `w` by design.

Tests should also cover recognized literal structures:

```text
hoaos -> hoáo
hoeos -> hoéo
thayw -> thayw
huaws -> hứa
```

Default Telex and Simple Telex should be paired where standalone quick `w` changes behavior:

```text
Telex:        w  -> ư
Telex:        ww -> w
Simple Telex: w  -> w
Simple Telex: ww -> ww
```

### VIQR and VIQR*

VIQR-family tests should cover:

* unshifted command keys;
* shifted punctuation and `D`-stroke through `patterns_shift`;
* backslash escape for covered command keys;
* VIQR* `*` horn behavior;
* delayed d-stroke near rime material;
* reformed tone-placement variants.

## Regression policy

A confirmed bug should get a deterministic regression test.
Prefer the smallest test that reproduces the actual failure.

Do not remove unrelated assertions, skip failing VIME tests, or relax expected Vietnamese behavior because the current implementation is difficult.

If a test and the specification genuinely disagree, update the relevant doc and make the behavioral decision explicit.

## Manual smoke testing

Manual testing in `examples/index.html` is useful for typing feel and host integration.
It should be treated as smoke coverage, not as a replacement for QUnit regressions.

When manual testing finds a bug, add a focused automated regression before considering it fixed.
