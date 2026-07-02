# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A claim-verification research project ("Chrono-Web" / TruthMap): podcast/interview claims are decomposed into atomic nodes and inferential edges, verified against primary sources, and accumulated into a single interactive D3 graph. The repo is equal parts methodology docs, per-source verification write-ups, and a static web viewer.

There is no build system, package manager, linter, or test suite. The app is a static page deployed via GitHub Pages (remote: `nate824/TruthMap`, served from repo root, hence `index.html`).

## Running the viewer

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

D3 is loaded from a CDN, so viewing requires network access.

## Architecture

Two code files, several governing docs:

- **`index.html`** — the entire viewer (styles, D3 force layout, UI panels, focus mode, multi-hop tracing) in one file. It reads `window.CHRONOWEB_DATA` from `chronoweb_data.js`.
- **`chronoweb_data.js`** — the editable "brain": all data lives here as one `window.CHRONOWEB_DATA` object. Its header comment is the authoritative field reference. Growing the web = appending to this file; the viewer rarely needs changes.

### Data model (in `chronoweb_data.js`)

- **Complex** — top-level structure: `MIC`, `FIC`, `TIC`, `IIC`, plus `RX` (Open Reconciliations — unresolved cross-source conflicts) and `PL` (Parking Lot).
- **Thread** — one sub-claim within a complex, carrying a verdict (`FAILS | PARTIALLY_HOLDS | LARGELY_HOLDS | MIXED | OPEN`) and a `source`.
- **Node** — an atomic claim with a verification `state` (Verified / Falsified / Source Says Otherwise / etc.) and a `layer` (fact / interp / framing / anchor / parked).
- **Edge** — an inferential move with its own `grade` (Warranted / Weak / Unwarranted / NonSequitur). Core principle of the whole project: **the lie usually lives in the edge, not the node** — inferences are graded as first-class objects.
- **Entity** — recurring player/document/event acting as a web junction; new threads weld onto existing entity hubs instead of re-researching them.
- **Source** — provenance registry; reconciliation edges (`corroborates | clarifies | contests | disproves`) link claims *across* sources.

### Governing methodology docs (read before touching data)

- **`claim_verification_methodology.md`** — how to resolve ONE source into graded nodes/edges (taxonomy, resolution states, thread discipline, verdict scale). `README.md` mirrors this doc in full for public readers — when editing one, update the other.
- **`web_integration_protocol.md`** — how a newly verified source is folded into the existing web (dedupe buckets: New / Corroborate / Clarify / Disprove / Contest). Key invariant: **never overwrite a source's claim; attach relationships to it.** State changes happen only on `Disprove`, with a dated, logged reconciliation entry. When in doubt, `Contest` (mint an RX node) instead of adjudicating.

### Per-source working artifacts

Each verified source produces a `*_claim_verification.md` (e.g. `WiM401_Griffin_claim_verification.md`, `PMcCormack_Webb_Epstein_claim_verification.md`) and/or thread maps (`FIC_threads.md`, `TIC_threads.md`), all living in `breakdowns/`. `MIC.docx` there is raw source material. These docs are the human-readable record; `chronoweb_data.js` is their structured distillation.

## Workflow for adding a new source

1. Decompose and verify the source per `claim_verification_methodology.md`, producing a `*_claim_verification.md` doc — finish this before touching the web.
2. Map each new node against the existing web per `web_integration_protocol.md` (classify into exactly one bucket; reuse entity hubs).
3. Append sources/threads/nodes/edges (and reconciliation edges) to `chronoweb_data.js`, following the field reference in its header comment.
4. State changes to existing nodes require a `Disprove`-grade reason and a dated log entry naming the driving source.
