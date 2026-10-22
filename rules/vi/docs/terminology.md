# VIME terminology

This document defines the canonical terms used in code, tests, and developer documentation.
It is not a full linguistic description of Vietnamese.

Use the English terms here for source identifiers and test names.
Vietnamese notes are included only to clarify meaning.

## Core rule

VIME models written Vietnamese orthography, not full Vietnamese phonology.

The terms below are engineering terms for parsing and rendering Quốc Ngữ input.
If a linguistic analysis and a simpler written-text model disagree, prefer the model that correctly describes the visible input behavior and can be tested.

## Structural terms

| Term | Meaning |
| --- | --- |
| `orthographic syllable` | The written Vietnamese unit the engine parses and transforms, such as `ăn`, `hòa`, `tường`, `quốc`. |
| `syllable` | Acceptable shorthand when the orthographic meaning is clear. |
| `onset` | The part before the rime, such as `b` in `ba`, `th` in `thanh`, `ngh` in `nghiêng`. May be absent. |
| `rime` | The part after the onset. Contains the nucleus and may contain a medial or ending. |
| `medial` | A written element between onset and nucleus when the model needs one, especially in structures such as `oa`, `oe`, `uy`. |
| `nucleus` | The central vowel-bearing part of the rime. Tone placement and vowel-diacritic transformation depend on it. |
| `ending` | The part after the nucleus. It may be a consonantal coda such as `n`, `ng`, `ch`, or an off-glide written with a vowel letter. |
| `coda` | A consonantal ending. Do not use it for every final written vowel letter. |
| `candidate` | The short text segment near the caret that may be transformed by the engine. |
| `composition inventory` | The finite rime data the engine recognizes for current composition behavior. It may distinguish complete rimes from composition precursors. This is structural data, not a word list. |
| `composition precursor` | A source spelling that is not treated as a complete Vietnamese rime, but can still receive a later semantic command, such as `ech` before `êch`. |
| `rime recognizer` | The engine component that classifies a rime as invalid, a prefix, a composition precursor, complete, or both complete and a prefix. |

Use `rime`, not `rhyme`.

Use `onset`, `rime`, `nucleus`, and `ending` in implementation code when modeling Vietnamese structure.
Do not use vague names such as `prefix`, `suffix`, or `main vowel` for these concepts unless the value is literally a string prefix or suffix at a lower layer.

## Tone terms

| Term | Meaning |
| --- | --- |
| `tone` | A semantic property of a Vietnamese syllable. |
| `tone mark` | The visible Unicode mark used to render a non-none tone. |
| `tone placement` | The policy that chooses which written vowel letter receives the visible tone mark. |
| `traditional tone placement` | The default VIME tone-placement policy, producing forms such as `hòa`, `xóa`, `hủy`. |
| `reformed tone placement` | Alternate policy, producing forms such as `hoà`, `xoá`, `huỷ`. |

Tone values:

```text
NONE
ACUTE
GRAVE
HOOK
TILDE
DOT
```

Use `tone`, not `accent`.

Use `tone mark` when referring to the visible mark.
Do not use `mark` by itself when the distinction matters.

## Vowel terms

Vietnamese vowel letters:

```text
a ă â e ê i o ô ơ u ư y
```

`vowel diacritic` means one of the Vietnamese vowel-shaping categories:

```text
CIRCUMFLEX
BREVE
HORN
```

Examples:

```text
a + CIRCUMFLEX -> â
a + BREVE      -> ă
o + HORN       -> ơ
u + HORN       -> ư
```

A vowel diacritic is not a tone mark.
For example, `ấ` is conceptually `â + ACUTE`, not one undifferentiated accented character.

## Composition terms

| Term | Meaning |
| --- | --- |
| `composition` | The act of transforming recent typed text into Vietnamese output. |
| `composition state` | The parsed semantic state of a candidate. |
| `complete state` | A candidate recognized as a complete structure in the current VIME composition model. |
| `intermediate state` | A candidate that is not complete final spelling yet, but can still develop into valid Vietnamese through more commands. |
| `unrecognized` | A candidate the Vietnamese engine should leave unchanged. |
| `semantic command` | A method-independent command such as `APPLY_TONE(ACUTE)`. |
| `input command` | A method-specific key or sequence, such as Telex `s`, VNI `1`, or VIQR `'`. |
| `adapter` | The input-method-specific layer that decodes input commands and calls the shared engine. |
| `engine` | The shared Vietnamese implementation for parsing, transforming, validating, tone placement, and rendering. |
| `escape behavior` | Behavior that lets users type literal command characters. |
| `repeated-key escape` | Escape behavior where repeating a command produces literal input, such as VNI `a1 -> á`, `a11 -> a1`. |
| `tone reflow` | Re-rendering an already toned candidate after ordinary typed letters change its parsed structure and therefore its tone target. |
| `structural promotion` | Re-rendering a narrow intermediate structure into a covered composition family after ordinary typed letters extend it, such as `nguơi -> ngươi`. |
| `delayed command` | A command key typed after more rime material, such as Telex `thayas -> thấy` or VNI `dac91 -> đác`. |
| `recognized literal structure` | A candidate that already parses as a complete structure in the current composition model, so an ambiguous Telex key may remain literal. |
| `post-transform validation` | Re-analyzing and reclassifying the transformed semantic state before rendering it. If the result is unrecognized, the adapter passes the original input through. |
| `composition boundary` | An invisible input-method boundary that prevents later keys from transforming text before the boundary. VIME uses Shift+Space for this behavior. |

## Unicode terms

| Term | Meaning |
| --- | --- |
| `code point` | A Unicode scalar value. |
| `code unit` | A JavaScript UTF-16 unit. jQuery.IME string lengths are JavaScript string lengths, so this matters for `maxKeyLength`. |
| `precomposed character` | A single Unicode character such as `ấ`. |
| `combining mark` | A mark encoded separately from its base character. |
| `NFC` | Canonical composed normalization form. Preferred for rendered output. |
| `NFD` | Canonical decomposed normalization form. Useful internally if it simplifies parsing, but not required as the public output. |

## Preferred identifier vocabulary

The following names are recommended unless implementation discovers a better local convention:

```text
Tone
TonePlacement
ToneMark
VowelDiacritic

SemanticCommand
InputCommand
CompositionState

parseCandidate()
applyTone()
removeTone()
applyVowelDiacritic()
applyDStroke()
resolveTonePlacement()
renderCandidate()
validateStructure()
recognizeRime()
```

Suggested enums:

```text
Tone.NONE
Tone.ACUTE
Tone.GRAVE
Tone.HOOK
Tone.TILDE
Tone.DOT
```

```text
VowelDiacritic.NONE
VowelDiacritic.CIRCUMFLEX
VowelDiacritic.BREVE
VowelDiacritic.HORN
```

```text
TonePlacement.TRADITIONAL
TonePlacement.REFORMED
```

```text
RimeStatus.INVALID
RimeStatus.PREFIX
RimeStatus.COMPOSABLE
RimeStatus.COMPLETE
RimeStatus.COMPLETE_AND_PREFIX
```

## Terms to avoid

Avoid `accent` for Vietnamese tone.

Avoid `main vowel` in code.
Use `nucleus` or `tone target`, depending on the meaning.

Avoid `valid word` when discussing composition.
Use `structurally valid`, `complete`, `intermediate`, or `lexically valid`.

Avoid `old style` and `new style`.
Use `traditional tone placement` and `reformed tone placement`.

For Vietnamese user-facing selector labels, `đặt dấu kiểu mới` may be used as the readable label for `reformed tone placement`.
