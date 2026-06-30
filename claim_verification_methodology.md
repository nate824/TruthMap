# Claim-Verification Methodology

*A repeatable process for taking a sourced-sounding claim (e.g. from a podcast) and resolving it down to verified/falsified nodes and graded inferences. Distilled from the JFK / MIC thread work.*

---

## 0\. Purpose

Humans can't reliably hold onto claim → cited-source mappings, let alone go verify them. Recency bias \+ a confident host naming real-sounding sources makes us file a whole argument under "true." This process makes the checking cheap and the failure points explicit. It does **not** decide whether a conclusion is true; it shows *which parts are load-bearing, which are real, and where the argument actually breaks.*

---

## 1\. The one principle everything hangs on

**The lie usually lives in the edge, not the node.** Conspiratorial arguments are typically a stack of individually-true (or true-ish) facts welded together by a "therefore" that the evidence doesn't earn. A checker that only grades facts will hand a well-sourced bad argument a glowing report card. **Grade the connections between facts as first-class objects.** True nodes \+ bad edge \= the actual failure mode.

---

## 2\. Object model

Everything decomposes into two object types:

- **Node** — an atomic claim. Either a fact ("JFK signed EO 11110") or an interpretation of a fact ("…which threatened the Fed").  
- **Edge** — an inferential move connecting nodes ("…therefore the structure had him killed"). Edges carry their own verification burden, separate from the nodes they connect.

**Decompose every claim into a factual layer and an interpretive layer.** "He did X" and "X threatened them" are different nodes with different states. A single sentence is often a node *and* an edge fused — split it before classifying.

---

## 3\. Taxonomy (two independent axes, not one bucket)

Tag every node on two axes (learned the hard way — a single A/B/C/D bucket mis-routes claims):

- **Concreteness** — is there a checkable fact? `High` / `Low`.  
- **Sourcing** — `Named` (host cites a specific source) / `Implied` (public record exists) / `None`.

The sweet spot is **High-concreteness regardless of sourcing** — a checkable fact is checkable even if the speaker named no source (the inflated "Mag-7 ≈ 50% of S\&P" stat was high-concreteness / no-sourcing and still cleanly falsifiable).

Rough node families that fall out of the axes:

- **Concrete \+ named/implied** → fastest verifies (documents, statistics, attributions, historical existence).  
- **Concrete \+ none** → needs source *discovery* first; beware "absence of found source ≠ false."  
- **Low-concreteness / framing** → opinion or loaded interpretation; usually not a fact to verify.  
- **Unfalsifiable** → no evidence could in principle disconfirm it. Tag and **walk away** — don't chase.

Edge types: `causal_inference`, `temporal`, `depends_on`, `cites_as_evidence`, `same_entity`.

---

## 4\. Resolution states

### Node verification states

| State | Meaning |
| :---- | :---- |
| `Verified` | Source exists and says the thing. |
| `Partially Verified` | Supports part, or true with caveats the speaker dropped. |
| `Falsified` | Source exists and contradicts the claim. |
| `Misattributed` | The thing is real but wrong source / person / date. |
| `Source Not Found` | Couldn't locate the cited/implied source (≠ false). |
| `Source Says Otherwise` | Cited source is real but doesn't support — or undercuts — the claim. |
| `Unverifiable` | Unfalsifiable or out of scope by design. |

### Edge inference grades

| Grade | Meaning |
| :---- | :---- |
| `Warranted` | Inference follows given the node states. |
| `Weak` | Some support, but overstated or under-evidenced. |
| `Unwarranted` | Nodes don't license the conclusion. |
| `NonSequitur` | No logical connection at all. |

**Don't soft-pedal `Falsified` / `Source Says Otherwise`, and don't go easy on edge grades because the nodes turned out interesting.** Those are the highest-value findings the process produces.

---

## 5\. The thread workflow (discipline mode)

Run one thread at a time, start to finish:

1. **Start at the top** — take the claim in the speaker's *exact words*.  
2. **Decompose** into a node tree: factual layer (did X happen?) \+ interpretive layer (did X mean what's claimed?), and name the edge(s).  
3. **Tag** each node (concreteness × sourcing) and each edge (type).  
4. **Order the attack: facts → interpretations → framing → edge.** Always grade the edge *last*, because the inference depends on everything below it.  
5. **Execute straight through.** Anchor the trivial node, verify the factual layer, then the interpretive layer, then the framing, then grade the edge (split causal edges into **E-motive** and **E-mechanism**).  
6. **Verdict at the top** (see §7).

**Discipline rule:** once a thread is picked, refuse to stray until it resolves. "Done" \= every node has a state and every edge has a grade. The thread isn't done because it got complicated or we got tired.

**Don't pause to checkpoint between steps.** Run to the end. *Do* pause only if: (a) a genuine scope call is needed, (b) a finding fundamentally reframes the thread, or (c) resolving a node requires opening a heavy downstream resource and you need a routing decision.

---

## 6\. Working-doc structure

Maintain a living doc with two standing sections:

- **Active Thread** — the claim, its decomposition tree, the resolution log, the verdict.  
- **Parking Lot** — every interesting tangent that is *not* the active thread. Tangents get parked, not chased. Redirect politely but firmly: *"That's on the parking lot — we're staying on X until it resolves."* The parking lot persists across threads and isn't opened until the thread set is complete.

Resolved threads accumulate in the doc (one section each) so the set can later be compacted into a structured schema and scored.

---

## 7\. Verdict scale (per thread)

Summarize each resolved thread as one of:

- **FAILS** — a load-bearing node is `Falsified` and/or the edge is `Unwarranted`/`NonSequitur`. State *where exactly* the chain breaks.  
- **PARTIALLY HOLDS** — real factual kernel, but the edge claims more than it earns (overstated/`Weak`).  
- **LARGELY HOLDS** — nodes verify and the edge is `Warranted`; docks are precision-level only.

Always say *where* it breaks, not just that it does.

---

## 8\. Sourcing & fairness rules

- **Primary sources where they exist** (EO/NSAM text, congressional reports, SEC filings, NARA); secondary only where primary is unavailable.  
- **Don't manufacture findings to reach a verdict.** If a node is genuinely `Unverifiable` or `Source Not Found`, mark it that way. Don't paper over a gap.  
- **Stay fair when the speaker is right.** Credit a real kernel; dock only the overreach. A `Weak` edge with a legitimate core is not the same as an `Unwarranted` one — grade the difference.  
- **Heavy downstream resources** (e.g. the JFK files) are reached *only* when a specific sub-node demands evidence they might contain — never as the entry point. Reaching the bridge ≠ having to cross it.

---

## 9\. Reference: failure signatures observed

Three resolved threads, three distinct signatures — the texture a confidence score must capture:

| Thread | Verdict | Signature |
| :---- | :---- | :---- |
| JFK "challenged structure → was dealt with" | **FAILS** | True facts, but the FIC-threat node `Falsified` and the mechanism `Unverifiable`; strongest surviving motive (mafia) sits outside the thesis. |
| Earnings predict the next war zone | **PARTIALLY HOLDS** | Real analyst kernel (read the backlog) inflated into prediction; edge `Weak`, "they prepare" `Unwarranted`. |
| MIC roster \+ "war \> defense contracts" | **LARGELY HOLDS** | Roster `Verified`, incentive `Warranted`; docks are precision only (volume≠margin; demand≠war). |

