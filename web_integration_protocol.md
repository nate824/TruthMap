# Web Integration & Reconciliation Protocol

*How a newly-verified source gets folded into the Chrono-Web. Sibling to `claim_verification_methodology.md` — that doc tells you how to resolve **one** source into nodes and edges; this doc tells you what to do when that resolved source meets a web that **already contains other sources** making claims about the same reality.*

---

## 0. The problem this solves

The first methodology assumed one author. At scale (imagine 100 podcasts), the same facts recur — the Federal Reserve, Jekyll Island, the Magnificent Seven — and different sources will **agree, add nuance, or flatly contradict** each other on the same proposition. If we just keep appending nodes, the web becomes a pile of unreconciled assertions and the question "what does the evidence actually say about X?" gets harder, not easier, with every addition.

So a node can no longer be "one author's claim." It has to become **a proposition with provenance**: who asserted it, what state each assertion earned, and — when sources diverge — an explicit, auditable record of the disagreement instead of a silent overwrite.

---

## 1. The one principle everything hangs on

**Never overwrite a source's claim; attach relationships to it.** What an author said is a historical fact and stays put. Reconciliation is represented as *new edges* between source-claims and, for genuine standoffs, a *new `Contested` node* — never by editing the original assertion out of existence. This keeps the web non-destructive and auditable: you can always see who said what, and why the web's current best assessment is what it is.

A state change to an existing node is permitted **only** on `Disprove` (§4), and only with a logged, dated reconciliation entry citing the source that forced it. Everything else is additive.

---

## 2. Object model additions

On top of the existing **Node** / **Edge** / **Entity** model:

- **Source** — a registry entry for each origin (podcast/interview/article): `{ id, label, speaker, show, url, date }`. Every thread now carries a `source`.
- **Reconciliation edge** — a typed link *between source-claims* (distinct from inference edges, which live *within* one argument): `corroborates`, `clarifies`, `contests`, `disproves`. These are the cross-source connective tissue.
- **`Contested` node state** — a proposition where two or more sources are in genuine, unresolved conflict. It is the standoff marker; it is *not* a verdict, it's a flag that says "research owes this an answer."
- **Open Reconciliations (RX)** — a holding area (its own complex) for `Contested` synthesis nodes. The research queue, made visible.

---

## 3. The integration workflow

Run start-to-finish for each new source.

### Step 1 — Decompose (existing methodology)
Resolve the new source into nodes + edges per `claim_verification_methodology.md` — grade the nodes *and* the edges; the lie lives in the edge. Output: a self-contained thread map for the new source (this is the `*_claim_verification.md` artifact). **Do this before touching the web.** Don't reach for the web while you're still deciding what the source even claims.

### Step 2 — Map & dedupe against the web
For every new node and every entity it touches, search the existing web for overlap **by entity** (does it touch the Fed, BlackRock, the MIC?) and **by proposition** (does any existing node assert roughly the same thing?). Classify each new node into exactly one bucket:

| Bucket | Test | Action |
| :-- | :-- | :-- |
| **New** | No existing node makes this claim; entity may or may not exist | Add the node; reuse the entity hub if it exists, else create it. |
| **Corroborate** | An existing node asserts ~the same proposition and reaches a compatible state | Add the node, draw a `corroborates` edge to the existing one. Confidence goes **up**; states don't change. |
| **Clarify** | New source adds a caveat, scope limit, or missing fact to an existing node | Add the node, draw a `clarifies` edge. Optionally tighten the existing node's *note* (not its state) and log it. |
| **Disprove** | New source brings decisive evidence that the existing node is wrong | Draw a `disproves` edge **and** change the existing node's state, with a dated reconciliation log entry. (High bar — see §4.) |
| **Contest** | Two sources make incompatible claims and neither is decisively right | Create a `Contested` node in RX linking both sides via `contests` edges. Queue for research. **Do not pick a winner.** |

Discipline rule: a new node lands in **one** bucket. If it feels like two, you've fused a fact and an interpretation — split it (same rule as decomposition).

### Step 3 — Reconcile
Walk the conflicts (Disprove + Contest buckets) deliberately:

- **Corroborate / Clarify** are cheap and additive — wire the edge, optionally refine the note, done.
- **Disprove** is the only state-changing move. It requires a primary-source-grade reason and a log entry: *what changed, driven by which source, on what date, citing what.* Don't downgrade a node just because a louder source disagrees — disagreement is `Contest`, not `Disprove`.
- **Contest** is the important one and the easiest to fumble. When two sources genuinely clash (and especially when *the same source's own analysis* introduces a counter-fact), resist the urge to adjudicate on the spot. Mint a `Contested` node that states the open question in neutral terms, link both sides, and write down **what evidence would resolve it**. The standoff is now a research task, not a buried inconsistency.

### Step 4 — Record provenance
Every state change and every reconciliation gets a dated log entry naming the source that drove it. The web should be able to answer, for any node, "how did this come to be the assessment, and who moved it?"

---

## 4. The `Disprove` bar (so it doesn't get abused)

A node flips state **only** when the new evidence is decisive *on the same proposition* — a primary source the original missed, an arithmetic refutation, a definitional mismatch. If the new source merely:
- reframes the same facts → that's `Clarify` or `Contest`, not `Disprove`;
- is more confident / more recent / louder → that earns nothing on its own;
- attacks the *edge* rather than the *node* → grade the edge, leave the node.

When in doubt, `Contest` (reversible, honest) beats `Disprove` (destructive, overconfident).

---

## 5. Scaling: the agent pipeline (for the 100-podcast future)

Each new podcast runs the same assembly line. The steps parallelize cleanly across agents, with a human gate on the only irreversible action.

1. **Decomposer agent** — takes a raw transcript, runs the claim-verification skill, emits the source's thread map (nodes/edges/states/grades). One agent per source; fully parallel across a backlog.
2. **Mapper agent** — diffs that thread map against the current web; produces the Step-2 bucket classification (new / corroborate / clarify / disprove / contest) with the specific existing node ids each new node touches. Read-only against the web.
3. **Reconciler agent** — proposes the edges and, for Disprove/Contest, drafts the reconciliation log entry and the `Contested` node text. **Proposes, does not commit.**
4. **Human gate (you)** — approve corroborations/clarifications in bulk; review every proposed `Disprove` (state change) and every `Contested` framing before it's written. This is the one place judgment can't be delegated, because it's the one place the web's assessment actually moves or forks.
5. **Committer** — applies approved changes to `chronoweb_data.js` and appends to the reconciliation log.

The invariant across all of it: **additions are cheap and reversible; state changes are rare, gated, and logged.** That's what lets the web get *more* trustworthy as it grows instead of noisier.

---

## 6. Reading the result in the web

- A **green cross-source link** = corroboration (two+ sources converge — the strongest signal in the whole web).
- A **blue cross-source link** = clarification (one source refines another).
- A **pink cross-source link** = contest (an open disagreement).
- A node in the **Open Reconciliations (RX)** complex = a live research question the web is honestly flagging as unresolved.

The payoff: when source #47 mentions the Fed, you don't re-litigate the Fed. You see instantly whether it corroborates what's there, sharpens it, or opens a fight — and the fights are collected in one place instead of scattered as silent contradictions.
