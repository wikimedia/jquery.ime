# VIME

VIME is the Vietnamese Input Method Engine being developed inside jQuery.IME.
It provides Vietnamese input methods through one shared composition engine rather than separate Telex, VNI, and VIQR implementations.

The current jQuery.IME-hosted implementation supports:

* Telex;
* Simple Telex;
* VNI;
* VIQR;
* VIQR*;
* traditional tone placement as the default;
* reformed tone-placement variants labelled `đặt dấu kiểu mới`.

## Current status

The initial jQuery.IME-hosted VIME implementation is complete for the supported scope.
The engine can be exercised in `examples/index.html` and has focused QUnit coverage for that scope.

See `status.md` for the phase history, known limitations, and deferred work.

## Implementation map

The Vietnamese implementation currently lives in one shared rule source:

```text
rules/vi/vi.js
```

VIME-specific documentation lives beside that source in:

```text
rules/vi/docs/
```

All Vietnamese input-method metadata entries point to that file:

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

The main test files are:

```text
test/jquery.ime.test.fixtures.js
rules/vi/vi.test.js
```

## Design guardrails

VIME follows these constraints:

* use one shared Vietnamese engine;
* keep input-method adapters thin;
* model commands semantically;
* reconstruct composition state from rendered text near the caret;
* keep tone independent from the visible Unicode tone mark;
* distinguish recognized complete structures, composition intermediates, and unrecognized input;
* validate structure without introducing a dictionary;
* avoid jQuery.IME core changes unless a concrete blocker is proven.

## Document map

Read the docs by purpose:

| Document | Purpose |
| --- | --- |
| `requirements.md` | User-visible behavior and normative requirements. |
| `architecture.md` | Software boundaries, packaging, and jQuery.IME integration. |
| `algorithm.md` | Current engine flow from input window to rendered output. |
| `orthographic-model.md` | Vietnamese written-structure model used by the engine. |
| `testing.md` | Test layout, coverage strategy, and commands. |
| `terminology.md` | Canonical project vocabulary. |
| `status.md` | Phase history, current boundary, known limits, and deferred work. |
| `AGENTS.md` | Contributor guidance for VIME-specific work. |

## Current boundary

The current engine is a hardened composition engine for covered modern Vietnamese typing behavior in jQuery.IME.

It is not a dictionary, broad foreign-word detector, minority-language orthography model, or historical spelling model.
Those directions may be considered later, but they are not part of the closed initial scope.

## Verification

For focused and full verification commands, see `testing.md`.
