# Tasks: Plan de contenido mensual v6 — 20 content pieces

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 500–900 (`posts-v6.js` + `build-all-v6.js` + `render-hi.ps1`) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | WU1 pipeline+Week 1 → WU2 Weeks 2–3 → WU3 Week 4 |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending (human decides) |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

Slicing pass (chained-pr, one pass): the pipeline (builder + PowerShell exporter) is a
separate concern from the homogeneous `posts-v6.js` data module. That yields a coherent
3-unit split; each unit is independently reviewable and ≤400 lines.

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|------|------|-----------|----------------------|-----------------|-------------------|
| 1 | Builder + PDF exporter + Week 1 data (ids 21–25) | PR 1 | `node build-all-v6.js` | `powershell -File render-hi.ps1` (PDF 21) | Delete `build-all-v6.js`; revert `render-hi.ps1`; remove ids 21–25 |
| 2 | Editorial data Weeks 2–3 (ids 26–35) | PR 2 | `node build-all-v6.js` | `powershell -File render-hi.ps1` (PDF 26/31) | Remove ids 26–35 from `posts-v6.js` |
| 3 | Editorial data Week 4 (ids 36–40) + verification | PR 3 | `node build-all-v6.js` | `powershell -File render-hi.ps1` (PDF 36) | Remove ids 36–40 from `posts-v6.js` |

## Phase 1 — Pipeline foundation (Work Unit 1)

- [x] **1.1 Smoke-test Chrome PDF flags** (blocking risk). Run the proposed
  `--headless=new --disable-gpu --print-to-pdf --print-to-pdf-no-header --no-pdf-header-footer`
  set against `posts/post-01/src/slide-01.html` (read-only). **Acceptance**: a `.pdf` is produced and the exact working flag set is recorded. Slice 1.
- [x] **1.2 Create `build-all-v6.js`**. Requires `./render` (`renderSlide`) + `./brand`
  (`writeSlides`, `ensureDir`, `root`); `require('./posts-v6')`; write `posts/post-21..40/src/*.html`
  and `caption.txt`. Emit `caption-linkedin.txt` when `liCaption` set, `li/src/*.html` when
  `liSlides` set, `pdf-keyword.txt` (keyword) when `pdf:true`. **Acceptance**: `node build-all-v6.js`
  prints `OK post-21 … OK post-40`. Slice 1.
- [x] **1.3 Extend `render-hi.ps1`**. Add `Render-Pdf($srcDir,$outDir)` (Chrome `--print-to-pdf`
  into `posts/post-XX/pdf/`, driven by `pdf-keyword.txt` glob) + PNG loop `foreach ($n in 21..40)`.
  **Acceptance**: PNGs and PDFs emitted; missing PDF = failure asserted. Slice 1.
- [x] **1.4 Seed `posts-v6.js` with ids 21–25** (Week 1) per design mapping table: themes rule,
  voseo/« »/5 hashtags sin `#urquisoft`, CTA rules (Herramientas: «Guardá este post» + keyword DM;
  Educación/Caso: «Escribinos y…»). `pdf:true`+`dmKeyword:'STOCK'` on 21; `liCaption` on 23.
  **Acceptance**: entries match design rows 21–25. Slice 1.

## Phase 2 — Editorial data, Weeks 2–3 (Work Unit 2)

- [x] **2.1 Append ids 26–30**. Tool 26 (`pdf:true`, `dmKeyword:'CAJA'`); LI-lead 29 (`liCaption`+`liSlides`);
  myth 27, educación 28, humor 30. **Acceptance**: build emits all five with captions. Slice 2.
- [x] **2.2 Append ids 31–35**. Tool 31 (`pdf:true`, `dmKeyword:'PRESUPUESTO'`); LI-lead 35
  (`liCaption`+`liSlides`); caso 32, educación 33, equipo 34. **Acceptance**: same. Slice 2.

## Phase 3 — Editorial data, Week 4 (Work Unit 3)

- [ ] **3.1 Append ids 36–40**. Tool 36 (`pdf:true`, `dmKeyword:'HORAS'`, static `metrics`+`flow`);
  valores 37; educación 38; LI-lead 39 (`liCaption`+`liSlides`); encuesta 40 (`options`).
  **Acceptance**: build emits all five. Slice 3.

## Phase 4 — Verification (Work Unit 3)

- [ ] **4.1** `node build-all-v6.js` → 20 dirs `posts/post-21..40/` each with `src/*.html` + `caption.txt`. Slice 3.
- [ ] **4.2** `powershell -File render-hi.ps1` → PNGs 21–40; `posts/post-21/26/31/36/pdf/*.pdf` exist. Slice 3.
- [ ] **4.3** Inspect: `caption.txt` has 5 hashtags, no `#urquisoft`; `caption-linkedin.txt` has no
  hashtag line; voseo/« » throughout. Slice 3.

## Dependencies

Data before builder validation is not required: 1.2–1.3 precede 1.4 (builder consumes the module),
1.4 → 2.1 → 2.2 → 3.1 (append order in one file), 4.1–4.3 last. 1.1 gates 1.3.

## Risks

- `--print-to-pdf` flags + page geometry unverified → task 1.1 smoke-test first; default page size accepted.
- `posts-v6.js` is one file; PR 2/3 must be stacked on PR 1 or retargeted to keep diffs clean.
- Per-slide PDFs (not one merged doc) — merge is out of scope.
