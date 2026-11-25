# VIME requirements

This document defines the user-visible behavior required for Vietnamese input methods in jQuery.IME.
It says what the input methods must do; `architecture.md` says how the code is structured, and `algorithm.md` explains the current engine flow.

## Requirement levels

* **MUST**: required for the first stable implementation.
* **SHOULD**: strongly preferred, but may be delayed if a documented technical constraint appears.
* **MAY**: optional or future behavior.
* **UNRESOLVED**: not safe to implement by guessing; requires an explicit decision or experiment.

## Supported input methods

The implementation MUST support these Vietnamese input-method entries, shown with concise selector labels in this order:

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

`VIQR*` is a VIQR variant that uses `*` for horn.
The `(đặt dấu kiểu mới)` variants change only tone-placement policy.

All Vietnamese input methods MUST use one shared Vietnamese composition engine.
They may decode keys differently, but once a key becomes a semantic command, Vietnamese parsing, transformation, tone placement, validation, and rendering must be shared.

## Implementation boundary

VIME SHOULD be treated as a composition engine for covered modern Vietnamese typing behavior.

VIME MUST NOT be described as a Vietnamese spell checker, a dictionary-backed validator, a broad foreign-word detector, a minority-language orthography model, or a historical spelling model.
Those scopes require explicit future design work.

## Core composition behavior

The engine MUST support ordinary modern Vietnamese Quốc Ngữ composition:

* the twelve Vietnamese vowel letters: `a ă â e ê i o ô ơ u ư y`;
* six semantic tone values: none, acute, grave, hook, tilde, dot;
* `đ` and `Đ`;
* uppercase and lowercase input;
* syllables with and without onsets;
* common rime structures and consonantal codas;
* incomplete but composable intermediate states.

The implementation MUST NOT require a dictionary to decide ordinary typing behavior.

## Semantic commands

Input-method adapters MUST translate method-specific keys into these shared semantic commands where applicable:

```text
APPLY_TONE(tone)
REMOVE_TONE
APPLY_VOWEL_DIACRITIC(vowelDiacritic)
APPLY_D_STROKE
```

The shared engine, not the adapter, is responsible for applying those commands to the current candidate.

Input-method adapters MAY also return adapter-level literal or escape output where the typing convention requires it, such as VIQR backslash escape.
That literal output is not a shared semantic command and does not go through the engine transformer.

## Telex and Simple Telex mapping

The Telex adapters MUST support the common Vietnamese Telex operations for tones, vowel diacritics, and `đ`.

The default `Telex` profile follows the common user expectation that standalone `w` can type `ư`.
The `Simple Telex` profile preserves the more conservative behavior where standalone `w` remains literal and `w` only transforms an eligible existing candidate.
Neither profile uses `[` or `]` as quick keys, because those characters conflict with the main wikitext editing environment.

Both Telex profiles map input to visible behavior as follows:

| Input | Semantic command or adapter behavior |
| --- | --- |
| `s` | `APPLY_TONE(acute)` |
| `f` | `APPLY_TONE(grave)` |
| `r` | `APPLY_TONE(hook)` |
| `x` | `APPLY_TONE(tilde)` |
| `j` | `APPLY_TONE(dot)` |
| `z` | `REMOVE_TONE`, preserving vowel diacritics and complex nuclei |
| `aa` | `APPLY_VOWEL_DIACRITIC(circumflex)` on `a` |
| `ee` | `APPLY_VOWEL_DIACRITIC(circumflex)` on `e` |
| `oo` | `APPLY_VOWEL_DIACRITIC(circumflex)` on `o` |
| `w` | `APPLY_VOWEL_DIACRITIC(breve)` or `APPLY_VOWEL_DIACRITIC(horn)` when structurally compatible |
| `dd` | `APPLY_D_STROKE` |
| `d` after a candidate with an initial `d` target | `APPLY_D_STROKE` |

The default `Telex` profile also maps standalone `w` to visible `ư` when the current candidate cannot otherwise receive `w` and is either empty or still an onset-only prefix.

Physical Shift SHOULD preserve the same command semantics while rendering the uppercase target where applicable.
Examples include `DD -> Đ`, `OO -> Ô`, `AW -> Ă`, and `AS -> Á`.
Default Telex also accepts `W -> Ư`, while Simple Telex keeps standalone `W` literal for the same reason it keeps standalone `w` literal.

Basic examples:

```text
as       -> á
af       -> à
aa       -> â
aw       -> ă
cow      -> cơ
thuw     -> thư
dd       -> đ
```

Default Telex quick-`w` examples:

```text
w   -> ư
ww  -> w
tw  -> tư
tww -> tw
quw -> quw
[   -> [
]   -> ]
```

Shared flexible composition examples:

```text
thaya    -> thây
thayas   -> thấy
thangw   -> thăng
thangws  -> thắng
haamw    -> hăm
hoposw   -> hớp
quocos   -> quốc
quynhs   -> quýnh
gienges  -> giếng
thuongw  -> thương
thuongwf -> thường
huopwso  -> huốp
huaws    -> hứa
xuaan    -> xuân
xuaats   -> xuất
oawn     -> oăn
oawm     -> oăm
nguowi   -> ngươi
nguowif  -> người
nguowfi  -> người
tieengs  -> tiếng
Vieetj   -> Việt
dduwowngf -> đường
dacds    -> đác
```

Literal and constraint examples:

```text
thayw    -> thayw
hoaos    -> hoáo
hoeos    -> hoéo
booo     -> boo
boooo    -> booo
booong   -> boong
mats     -> mát
matj     -> mạt
matf     -> matf
matx     -> matx
toansz   -> toan
ấz       -> â
[        -> [
]        -> ]
```

Telex does not infer IÊ-family vowel diacritics from unmarked `ie`, `ye`, or `uye`.
Type the vowel diacritic explicitly, such as `Vieetj -> Việt`.

Telex also does not infer explicit extended double-`oo` spellings from long literal `o` runs.
After `oo` has been escaped to literal text, later `o` letters stay literal, so `booong -> boong` rather than `bôong`.
Explicit per-vowel command paths in other input methods remain separate engine behavior.

Telex vowel diacritic commands SHOULD also work after later rime material has already been typed when the current rendered candidate identifies a compatible target.
For example, `thayas -> thấy` is the delayed form of applying circumflex to `thay`; it is not tone placement over the literal candidate `thaya`.

Telex `w` is intentionally candidate sensitive.
It SHOULD apply breve to structurally compatible `a` targets, such as `aw -> ă`, `thangw -> thăng`, and `haamw -> hăm`.
If breve is not compatible, it SHOULD fall back to horn for structurally compatible `o`, `u`, or covered `ua` targets, such as `cow -> cơ`, `thuw -> thư`, and `huaw -> hưa`.

If no candidate transform is possible, default Telex SHOULD use `w` as quick `ư` only for an empty candidate or a recognized onset-only prefix.
It MUST NOT turn final off-glide cases such as `thayw` into `thayư`.

Simple Telex MUST keep standalone `w` literal.
It SHOULD otherwise share the same delayed-command and candidate-sensitive `w` behavior as default Telex:

```text
w        -> w
ww       -> ww
tw       -> tw
thayw    -> thayw
thuongwf -> thường
nguowif  -> người
```

Neither Telex profile uses standalone `[` or `]` as quick keys.

The engine SHOULD support covered vowel family switches while preserving tone.
For example, a typed `o` after a horned `uo` family candidate can switch `ươ` back to `uô`, as in `huopwso -> huốp`.

Telex delayed command detection SHOULD prefer literal input when the full candidate including the latest key is already a recognized Vietnamese composition structure.
For example, `hoaos -> hoáo` and `hoeos -> hoéo` keep the final `o` as part of the rime before the tone key applies, without requiring `oao` and `oeo` to be hard coded in the Telex adapter.

Telex `z` MUST remove only the semantic tone, matching VNI `0`.
It MUST preserve vowel diacritics and complex nuclei.

## VNI mapping

The VNI adapter MUST support the following mappings:

| Key | Semantic command |
| --- | --- |
| `1` | `APPLY_TONE(acute)` |
| `2` | `APPLY_TONE(grave)` |
| `3` | `APPLY_TONE(hook)` |
| `4` | `APPLY_TONE(tilde)` |
| `5` | `APPLY_TONE(dot)` |
| `6` | `APPLY_VOWEL_DIACRITIC(circumflex)` |
| `7` | `APPLY_VOWEL_DIACRITIC(horn)` |
| `8` | `APPLY_VOWEL_DIACRITIC(breve)` |
| `9` | `APPLY_D_STROKE` |
| `0` | `REMOVE_TONE` |

Examples:

```text
a1 -> á
a2 -> à
a3 -> ả
a4 -> ã
a5 -> ạ

a6 -> â
e6 -> ê
o6 -> ô

o7 -> ơ
u7 -> ư
huo7 -> huơ
hua7 -> hưa

a8 -> ă

d9 -> đ
D9 -> Đ
dac9 -> đac
d9ieu62 -> điều
nghech61 -> nghếch
```

## VIQR mapping

The VIQR adapter MUST support ordinary VIQR-style commands for tones, vowel diacritics, and `đ`.

The VIQR adapter supports this mapping:

| Key or sequence | Semantic command or adapter behavior |
| --- | --- |
| `'` | `APPLY_TONE(acute)` |
| `` ` `` | `APPLY_TONE(grave)` |
| `?` | `APPLY_TONE(hook)` |
| `~` | `APPLY_TONE(tilde)` |
| `.` | `APPLY_TONE(dot)` |
| `0` | `REMOVE_TONE` |
| `^` | `APPLY_VOWEL_DIACRITIC(circumflex)` |
| `(` | `APPLY_VOWEL_DIACRITIC(breve)` |
| `+` | `APPLY_VOWEL_DIACRITIC(horn)` |
| `dd` | `APPLY_D_STROKE` |
| `d` after a candidate with an initial `d` target | `APPLY_D_STROKE` |
| `\` before a covered VIQR command key | literal escaped key |

Examples:

```text
a'        -> á
a`        -> à
a?        -> ả
a~        -> ã
a.        -> ạ
a^        -> â
a(        -> ă
o+        -> ơ
dd        -> đ
ddd       -> dd
dacd'     -> đác
tie^'ng   -> tiếng
Vie^.t    -> Việt
ddu+o+`ng -> đường
tan?      -> tản
tan\?     -> tan?
toan'0    -> toan
```

VIQR punctuation commands MUST work through functional `patterns` and through the `patterns_shift` bridge used by physical shifted keys such as `?`, `~`, `^`, `(`, and `+`.
Shifted `DD` SHOULD also apply uppercase `Đ`.

VIQR delayed `d`-stroke SHOULD work after later rime material has already been typed when the current rendered candidate identifies an initial `d` target, such as `dacd' -> đác`.
VIQR `d`-stroke commands SHOULD use repeated-key escape, matching the shared `d`-stroke behavior.
For example, `đd -> dd`, `ĐD -> DD`, and `dacdd -> dacd`.
VIQR's escape behavior for covered command punctuation remains backslash-based.

## VIQR* mapping

VIQR* MUST reuse the VIQR adapter behavior except that `*` replaces `+` for horn.

Examples:

```text
u*        -> ư
o*        -> ơ
ddu*o*`ng -> đường
dacd'     -> đác
tan\?     -> tan?
o\*       -> o*
```

VIQR* MUST use the same shifted-key bridge for `?`, `~`, `^`, `(`, and `*`.
Shifted `DD` SHOULD also apply uppercase `Đ`.

## Tone behavior

Tone commands MUST apply to the appropriate tone-bearing vowel in the current Vietnamese candidate, not simply to the immediately preceding character.

Examples:

```text
coi4     -> cõi
kheo1    -> khéo
hoa2     -> hòa
tuong72  -> tường
quoc61   -> quốc
gieng61  -> giếng
huya1    -> huýa
```

If a candidate already has a tone, a new tone command MUST replace it.
The result MUST contain at most one semantic Vietnamese tone.

Example:

```text
á2 -> à
```

Tone removal MUST remove only the tone and preserve vowel identity.

Example:

```text
tường0 -> tương
```

It must not become:

```text
tuong
```

## Vowel-diacritic behavior

The engine MUST support the three Vietnamese vowel-diacritic categories:

| Vowel diacritic | Supported base transformations |
| --- | --- |
| circumflex | `a -> â`, `e -> ê`, `o -> ô` |
| breve | `a -> ă` |
| horn | `o -> ơ`, `u -> ư` |

Applying a vowel diacritic to a toned vowel MUST preserve the semantic tone when the transformation is valid.

Example:

```text
á6 -> ấ
```

The engine supports narrow same-base vowel-diacritic switches on the same target:

```text
hâm8 -> hăm
hăm6 -> hâm
hốp7 -> hớp
hớp6 -> hốp
```

Broad replacement among unrelated vowel-diacritic forms remains UNRESOLVED.
Do not implement arbitrary replacement behavior until the rule is specified with examples.

The engine supports the narrow `uô <-> ươ` family switch needed for equivalent composition order when a covered continuation is present:

```text
huop61  -> huốp
huop71  -> hướp
huop617 -> hướp
huop716 -> huốp
hua7    -> hưa
```

The engine supports `ua` as an intermediate source for UÂ-family composition when circumflex is explicitly applied before covered continuation:

```text
xua6n   -> xuân
xua61t  -> xuất
xua6t1  -> xuất
xuaan   -> xuân
xuaats  -> xuất
xua^n   -> xuân
xua^'t  -> xuất
xua^t'  -> xuất
```

The engine supports `oa` as an intermediate source for OĂ-family composition when breve is explicitly applied before covered continuation:

```text
oa8m  -> oăm
oa8n  -> oăn
oawm  -> oăm
oawn  -> oăn
oa(m  -> oăm
oa(n  -> oăn
```

Open `uô` with no continuation SHOULD switch back to open `uơ` when horn is applied:

```text
huo67 -> huơ
huô7  -> huơ
```

Open `uơ` MUST remain distinct from `ươ` when no continuation follows:

```text
huo7 -> huơ
huow -> huơ
```

When open `uơ` gains a covered ƯƠ-family continuation, the engine SHOULD promote it to `ươ`:

```text
nguowi   -> ngươi
nguowif  -> người
nguowfi  -> người
nguo7i2  -> người
nguo72i  -> người
nguo+i`  -> người
nguo+`i  -> người
```

When an already horned `ư` gains `o` as the start of a covered ƯƠ-family continuation, the engine SHOULD promote `ưo` to `ươ`:

```text
tu7oi  -> tươi
tu7oi1 -> tưới
twoi   -> tươi
tuwoi  -> tươi
tu+oi  -> tươi
tu*oi  -> tươi
```

Bare `ưo` SHOULD wait for additional rime material before promotion so explicit orders such as VIQR `ddu+o+` can still compose `ươ`.

This does not imply broad arbitrary replacement among all vowel-diacritic forms.

## Tone placement

The default tone-placement policy MUST be traditional tone placement:

```text
hòa
xóa
hủy
```

The shared engine MUST keep tone-placement policy independent from input-method key mapping.
Reformed placement is exposed through separate `-reformed` input-method variants:

```text
vi-telex-reformed
vi-telex-simple-reformed
vi-vni-reformed
vi-viqr-reformed
vi-viqr-star-reformed
```

The core policy difference is limited to open `oa`, `oe`, and `uy` rimes in the current engine:

```text
traditional: hoa2 -> hòa
reformed:    hoa2 -> hoà

traditional: khoe3 -> khỏe
reformed:    khoe3 -> khoẻ

traditional: huy3 -> hủy
reformed:    huy3 -> huỷ
```

When an ending follows, both policies SHOULD converge:

```text
hoan2  -> hoàn
huynh2 -> huỳnh
```

## Flexible composition

The engine MUST support commands entered after some or all of the current candidate has been typed.
Equivalent typing orders SHOULD converge when they express the same valid Vietnamese result.

Representative composition-order cases include:

```text
tone before vowel diacritic
vowel diacritic before tone
commands after a coda
commands on already-rendered Vietnamese text
```

VNI examples:

```text
thay61 -> thấy
thay16 -> thấy
quoc61 -> quốc
quynh1 -> quýnh
gieng61 -> giếng
dac91  -> đác
huop617 -> hướp
huop716 -> huốp
nguo7i2 -> người
nguo72i -> người
to1an  -> toán
hoa2n  -> hoàn
```

Telex examples:

```text
thayas   -> thấy
thangws  -> thắng
haamw    -> hăm
hoposw   -> hớp
huaws    -> hứa
hoaos    -> hoáo
hoeos    -> hoéo
quocos   -> quốc
gienges  -> giếng
thuongwf -> thường
mats     -> mát
matj     -> mạt
matf     -> matf
matx     -> matx
```

If a candidate already has a tone and the user extends it with ordinary letters, the engine SHOULD reflow the tone when the resolved tone target changes.
For example, `to1an -> toán` and `hoa2n -> hoàn`.
This reflow MUST still respect the current parsed structure: `thay1 -> tháy` remains a valid intermediate result, because `thày` is a possible Vietnamese spelling and the user may continue with an explicit vowel-diacritic command if they want `thấy`.

The exact maximum editable range is constrained by jQuery.IME `maxKeyLength` and must be covered by tests.

## Composition boundary

Vietnamese input methods SHOULD treat Shift+Space as an invisible composition boundary.
Shift+Space MUST NOT insert visible whitespace.
It tells VIME that later keys may transform only the suffix typed after the boundary.

This is useful for Vietnamese respellings and loanwords written as several logical syllables without visible separators.
It is also a practical way to type literal Telex command letters after a completed preceding candidate.

Examples:

```text
Telex: a Shift+Space s k -> ask
VNI:   ki Shift+Space lo6 Shift+Space met1 -> kilômét
Telex: ki Shift+Space loo Shift+Space mets -> kilômét
VNI:   ve1c Shift+Space to7 -> véctơ
```

Regular Space MUST continue to insert visible whitespace:

```text
ki lo6 met1 -> ki lô mét
```

The boundary is an input-method lifecycle feature.
It must not be implemented as a visible sentinel character in the document.

## Repeated-key escape

Users MUST have a practical way to enter literal characters that would otherwise be interpreted as input commands.

Repeated-key escape SHOULD be supported where it matches the input method's established behavior.

VNI example:

```text
a1  -> á
a11 -> a1
a66 -> a6
d99 -> d9
dac99 -> dac9
```

For VNI, repeated-key escape MUST reconstruct from rendered text rather than raw key history.
For example, the second `1` in `a11` is processed when the visible candidate is already `á`.

For multi-vowel candidates, repeated-key escape MUST NOT fire while the same command can still apply to another eligible unmarked vowel in the candidate.
This preserves explicit extended spellings such as:

```text
lo6o62ng -> lôồng
```

VNI `9` SHOULD also be able to apply to an initial `d` after later rime material has been typed, so equivalent orders such as `d9ac1` and `dac91` converge to `đác`.

Default Telex uses repeated-key escape for covered command keys, including standalone quick `w`:

```text
as  -> á
ass -> as
aa  -> â
aaa -> aa
oo  -> ô
ooo -> oo
oooo -> ooo
w   -> ư
ww  -> w
tw  -> tư
tww -> tw
uw  -> ư
uww -> uw
thuongw  -> thương
thuongww -> thuongw
dd  -> đ
ddd -> dd
```

Simple Telex keeps standalone `w` literal, so `w -> w`, `ww -> ww`, and `tw -> tw`, while preserving repeated-key escape for ordinary Telex command sequences such as `aa`, `oo`, `uw`, and `dd`.

VIQR and VIQR* use backslash escape for covered command keys:

```text
tan?   -> tản
tan\?  -> tan?
a^     -> â
a\^    -> a^
o*     -> ơ
o\*    -> o*
```

## Special Vietnamese structures

The implementation MUST handle `qu` explicitly.
In Vietnamese spelling, `qu` must not be treated as an ordinary `q` followed by an always-independent vowel `u`.

The implementation MUST handle `gi` explicitly.
The `i` in `gi` must not automatically be treated like an ordinary nucleus vowel in every context.

The implementation SHOULD represent checked syllables ending in:

```text
-c
-ch
-p
-t
```

Standard checked syllables are structurally compatible only with acute and dot tones.

Incompatible tone commands on checked syllables MUST pass through unchanged.
This avoids rendering nonstandard checked-tone forms while keeping the user's literal command available.

## Unicode behavior

The implementation MUST produce valid Unicode Vietnamese text.

Rendered output SHOULD use NFC unless a documented jQuery.IME or browser constraint requires another form.

The engine SHOULD correctly interpret canonically equivalent input where practical.
It must not assume that every visible Vietnamese character is one JavaScript code unit.

Normal composition MUST NOT produce malformed combining-mark sequences or duplicated tone marks.

## Non-Vietnamese text

The first priority is correct Vietnamese composition.
Conservative protection against all foreign words, code identifiers, or technical text is not required for the current engine boundary.

The architecture SHOULD allow stricter structural validation later, but VIME MUST NOT add a Vietnamese dictionary dependency merely to avoid accidental transformations.

Structural validation SHOULD pass through a continuous Latin candidate when its written structure is impossible as one Vietnamese orthographic syllable in the current model.

Covered Telex examples that do not depend on standalone quick `w`:

```text
droid      -> droid
david      -> david
browser    -> browser
nodejs     -> nodejs
```

Simple Telex also keeps `washington -> washington`, because standalone `w` remains literal in that profile.
Default Telex may transform initial `w` by design; users who frequently type literal `w`-heavy Latin text can choose Simple Telex.

These examples are regression coverage, not a runtime dictionary.
They are protected because their candidate structure violates the orthographic model, such as a rime beginning with an unsupported consonant, a consonant inserted between vowel letters, or a suffix that is not a Vietnamese ending.

This hardening MUST preserve Vietnamese near-neighbor behavior:

```text
dacds   -> đác
thayas  -> thấy
quocos  -> quốc
gienges -> giếng
```

The current structural model does not enforce contextual onset spelling pairs such as `c/k`.
For example, `cys -> cý`, `coaf -> còa`, `coef -> còe`, and `cuyf -> cùy` are accepted because their rimes are covered.

VIME does not attempt to infer user intent when a raw Telex sequence is structurally ambiguous.
For example, `bar` and `gas` may still compose because `ba` and `ga` are Vietnamese candidates before the final Telex tone key.
Strong Telex sequences such as `aa`, `ee`, `oo`, `aw`, `ow`, `uw`, and `dd` may also still compose when their command interpretation is structurally valid.

## jQuery.IME compatibility

Vietnamese support SHOULD be implemented through existing jQuery.IME extension mechanisms.

Vietnamese behavior MUST NOT break existing jQuery.IME input methods.

Architecture-level constraints for jQuery.IME integration are documented in `architecture.md`.

## Testing requirements

Every stable Vietnamese behavior MUST have automated tests.

Detailed test layers, coverage expectations, and verification commands are documented in `testing.md`.
