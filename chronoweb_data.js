/* =============================================================================
   CHRONO-WEB — DATA FILE
   =============================================================================
   The editable brain of the visualization. The viewer (chronoweb.html) reads
   window.CHRONOWEB_DATA below. To grow the web after verifying a new thread,
   append to `threads`, `nodes`, `edges`, and (if new) `entities`.

   STRUCTURE
   ---------
   - COMPLEX: a top-level "structure" Dixon names. MIC / FIC / TIC (+ PL parking lot).
   - THREAD : one sub-claim within a complex, carrying its own verdict.
   - NODE   : an atomic claim with a verification STATE.
   - EDGE   : an inferential move ("therefore...") with a GRADE. The lie usually
              lives in the edge, not the node.
   - ENTITY : a recurring player / event / document (the Fed, BlackRock, NSAM 263,
              the Magnificent Seven, Aladdin). Entities are the WEB JUNCTIONS — when
              a new thread's node touches an existing entity, you don't re-research
              it; the new node welds onto the existing hub. A hub touched by more
              than one COMPLEX is a major crossover.

   FIELD REFERENCE
   ---------------
   complex: { id, label, color }                       id ∈ MIC | FIC | TIC | PL
   thread:  { id, complex, title, claim, speaker, source, verdict, color }
            verdict ∈ FAILS | PARTIALLY_HOLDS | LARGELY_HOLDS | MIXED | OPEN
   node:    { id, thread, label, claim, layer, date, concreteness, sourcing,
              state, note, primarySource, entities:[entityId,...] }
            layer ∈ fact | interp | framing | anchor | parked
            state ∈ Verified | Partially Verified | Falsified | Misattributed
                  | Source Not Found | Source Says Otherwise | Unverifiable | Open
   edge:    { id, thread, from, to, type, grade, note }
            type  ∈ causal_inference | predictive | incentive | depends_on
                  | cites_as_evidence | same_entity | temporal
            grade ∈ Warranted | Weak | Unwarranted | NonSequitur
   entity:  { id, label, kind, date, note }
            kind  ∈ structure | org | person | event | document | speaker | concept
   ============================================================================= */

window.CHRONOWEB_DATA = {

  meta: {
    title: "Chrono-Web",
    subtitle: "A growing map of verified claims and the inferences that connect them",
    sourceContext:
      "Three complexes mapped from Simon Dixon (Impact Theory): MIC (military-industrial), " +
      "FIC (financial-industrial), TIC (technological-industrial). Each podcast claim is " +
      "decomposed into nodes (atomic facts/interpretations) and edges (inferences); edges are " +
      "graded as first-class objects. Shared players and events become reusable hubs — the " +
      "junctions where complexes weld together."
  },

  /* -------------------------------------------------------------- COMPLEXES */
  complexes: [
    { id: "MIC", label: "Military-Industrial",      color: "#cf7d3a" },
    { id: "FIC", label: "Financial-Industrial",     color: "#2b9fb3" },
    { id: "TIC", label: "Technological-Industrial", color: "#9b6cd6" },
    { id: "PL",  label: "Parking Lot",              color: "#6b7686" }
  ],

  /* ---------------------------------------------------------------- THREADS */
  threads: [
    /* ===== MIC ===== */
    { id:"T1", complex:"MIC", title:"JFK challenged the structure → was dealt with",
      claim:"\"JFK is one of the most obvious examples\" of someone who challenged the structure and was dealt with.",
      speaker:"Simon Dixon", source:"Impact Theory, ~min 9", verdict:"FAILS", color:"#cf7d3a" },
    { id:"T2", complex:"MIC", title:"Earnings predict the next war zone",
      claim:"Reading defense-prime balance sheets and where the contracts are tells you where the next war zone will be, because they prepare.",
      speaker:"Simon Dixon", source:"Impact Theory, ~min 2", verdict:"PARTIALLY_HOLDS", color:"#cf7d3a" },
    { id:"T3", complex:"MIC", title:"MIC roster + 'war > defense contracts'",
      claim:"The MIC (Lockheed, General Dynamics, Raytheon, Boeing, BAE) is a machine that requires continual revenue — more profitable is war, less profitable is defense contracts.",
      speaker:"Simon Dixon", source:"Impact Theory, ~min 1", verdict:"LARGELY_HOLDS", color:"#cf7d3a" },

    /* ===== FIC ===== */
    { id:"FIC1", complex:"FIC", title:"Money is created as credit by private banks",
      claim:"\"Money is created by a private commercial bank… a loan has to exist for a bank to create credit… it's just a digital entry.\"",
      speaker:"Simon Dixon", source:"Impact Theory (u4RawKdA_gM)", verdict:"LARGELY_HOLDS", color:"#2b9fb3" },
    { id:"FIC2", complex:"FIC", title:"Central banking is a structural Ponzi",
      claim:"\"There's not enough money to pay the interest… the system must grow at all times or it breaks.\"",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"FAILS", color:"#2b9fb3" },
    { id:"FIC3", complex:"FIC", title:"Three central banks in America",
      claim:"First Bank, Second Bank, and the Federal Reserve — three central banks across US history.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"LARGELY_HOLDS", color:"#2b9fb3" },
    { id:"FIC4", complex:"FIC", title:"Engineered: Dutch → British → America → global",
      claim:"Central banking was engineered first in the Dutch Empire, then British, then three times in America, then made global.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"PARTIALLY_HOLDS", color:"#2b9fb3" },
    { id:"FIC5", complex:"FIC", title:"BlackRock cluster (Aladdin / Fink / Masters / Aramco)",
      claim:"BlackRock is \"the most important node in the West\"; Aladdin controls ~$25T; Fink invented the MBS; Masters invented the CDS; Aramco's CEO got a board seat.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"MIXED", color:"#2b9fb3" },
    { id:"FIC6", complex:"FIC", title:"Everything is subordinate to finance (the hierarchy)",
      claim:"Every complex needs capital, so the FIC sits above all of them.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"PARTIALLY_HOLDS", color:"#2b9fb3" },
    { id:"FIC7", complex:"FIC", title:"Government is a piggy bank for bondholders",
      claim:"\"Government is just another bondholder's piggy bank; politicians are actors.\"",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"PARTIALLY_HOLDS", color:"#2b9fb3" },
    { id:"FIC8", complex:"FIC", title:"Control levers: lobbying, blackmail, capital access",
      claim:"The FIC controls via lobbying, deep-state black operations for blackmail, and capital-market access.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"PARTIALLY_HOLDS", color:"#2b9fb3" },

    /* ===== TIC ===== */
    { id:"TIC1", complex:"TIC", title:"Almost 50% of the S&P 500 is the Magnificent Seven",
      claim:"\"Almost 50% of the S&P 500 is the Magnificent Seven.\"",
      speaker:"Simon Dixon", source:"Impact Theory (u4RawKdA_gM)", verdict:"PARTIALLY_HOLDS", color:"#9b6cd6" },
    { id:"TIC2", complex:"TIC", title:"Engineer perception via 'neo media' & algorithms",
      claim:"The complex engineers perception through 'neo media' and performs operations by controlling algorithms.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"PARTIALLY_HOLDS", color:"#9b6cd6" },
    { id:"TIC3", complex:"TIC", title:"Tech is subordinate to finance (needs capital)",
      claim:"These tech companies are subordinate to finance because they need access to capital.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"FAILS", color:"#9b6cd6" },
    { id:"TIC4", complex:"TIC", title:"Components: data centers, algorithms, the Mag 7",
      claim:"The TIC is made of data centers, algorithms, and the Magnificent Seven.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"LARGELY_HOLDS", color:"#9b6cd6" },

    /* ===== Parking Lot ===== */
    { id:"PL", complex:"PL", title:"Parking Lot (not yet researched)",
      claim:"Tangents parked during the active dives — the growth frontier of the web.",
      speaker:"Simon Dixon", source:"Impact Theory", verdict:"OPEN", color:"#6b7686" }
  ],

  /* --------------------------------------------------------------- ENTITIES */
  entities: [
    { id:"dixon",        label:"Simon Dixon",                  kind:"speaker",   note:"Origin of every claim — the common root of the web." },
    { id:"fed",          label:"Federal Reserve",              kind:"org",       note:"FIC target in MIC-T1; 'three central banks' (FIC-3) & 'Ponzi' (FIC-2) weld here too." },
    { id:"fic",          label:"Financial-Industrial Complex", kind:"structure", note:"Dixon's apex structure. Entity verdict: PARTIALLY HOLDS — real plumbing, inflated control." },
    { id:"mic",          label:"Military-Industrial Complex",  kind:"structure", note:"Spans T1 (Vietnam/détente), T2 (earnings), T3 (roster), and FIC-6 (needs capital)." },
    { id:"tic",          label:"Technological-Industrial Complex", kind:"structure", note:"Entity verdict: PARTIALLY HOLDS — real substrate, inflated magnitude, mis-assigned agency." },
    { id:"cia",          label:"CIA / Allen Dulles",           kind:"org",       note:"Dulles fired Nov 1961 post–Bay of Pigs; 'splinter' quote unsourced." },
    { id:"mafia",        label:"Mafia / organized crime",      kind:"structure", note:"Strongest surviving JFK motive — but outside Dixon's complexes." },
    { id:"assassination",label:"JFK assassination",            kind:"event",     date:"1963-11-22", note:"Dallas, Nov 22 1963. Anchor event of T1." },
    { id:"eo11110",      label:"EO 11110 (silver certs)",      kind:"document",  date:"1963-06-04", note:"Expanded Fed notes — opposite of the anti-Fed myth." },
    { id:"nsam263",      label:"NSAM 263 (Vietnam)",           kind:"document",  date:"1963-10-11", note:"Withdrawal of 1,000 by end-1963." },
    { id:"warren",       label:"Warren Commission",            kind:"document",  date:"1964",       note:"1964: lone gunman, Oswald." },
    { id:"hsca",         label:"HSCA",                         kind:"document",  date:"1979",       note:"1979: 'probably a conspiracy' — on since-discredited acoustics." },
    { id:"primes",       label:"Defense primes (sector)",      kind:"org",       note:"Welds T2 (file earnings), T3 (roster), and FIC-6 (need capital)." },
    { id:"lockheed",     label:"Lockheed Martin",              kind:"org",       note:"#1 defense contractor, $64.6B defense revenue 2024." },
    { id:"rtx",          label:"RTX (Raytheon)",               kind:"org",       note:"Raytheon + United Technologies merged 2020 → RTX." },
    { id:"gd",           label:"General Dynamics",             kind:"org",       note:"$93.6B backlog." },
    { id:"boeing",       label:"Boeing (Defense)",             kind:"org",       note:"Major via Boeing Defense, Space & Security." },
    { id:"bae",          label:"BAE Systems",                  kind:"org",       note:"UK's largest defense firm; LSE-listed." },
    { id:"secfilings",   label:"SEC filings (10-K/10-Q)",      kind:"document",  note:"Public segment results — raw material of T2, T3, FIC-8." },
    { id:"blackrock",    label:"BlackRock",                    kind:"org",       note:"Graduated from Parking Lot → fully researched in FIC-5. Real centrality; 'controls $25T' is monitor-vs-control inflation." },
    { id:"aladdin",      label:"Aladdin (platform)",           kind:"org",       note:"Monitors/risk-manages ~$21–25T for 200+ external clients — does NOT control/allocate it." },
    { id:"fink",         label:"Larry Fink",                   kind:"person",    note:"Pioneered the CMO at First Boston (~1983) — did NOT invent the MBS (predates him; Ginnie Mae 1970)." },
    { id:"bmasters",     label:"Blythe Masters (CDS)",         kind:"person",    note:"Led the JPMorgan team that built the credit default swap, mid-1990s (Verified)." },
    { id:"aramco",       label:"Saudi Aramco",                 kind:"org",       note:"CEO Amin Nasser joined BlackRock board as independent director, July 2023 (Verified)." },
    { id:"boe",          label:"Bank of England",              kind:"org",       date:"1694", note:"Source for money-creation (2014 paper) and the 1694 central-bank template (FIC-1, FIC-4)." },
    { id:"mag7",         label:"Magnificent Seven",            kind:"org",       note:"Apple, Microsoft, Alphabet, Amazon, Nvidia, Meta, Tesla. ~34–35% of S&P — not 'almost 50%'." },
    { id:"algos",        label:"Recommendation algorithms",    kind:"concept",   note:"'Neo media'. Shape attention (Verified); used for state-linked influence ops (Verified)." },
    { id:"govbond",      label:"Government / bond markets",    kind:"structure", note:"Governments finance via bonds and are constrained by them (Verified); 'piggy bank' is framing." },
    { id:"aicapex",      label:"AI-capex debt binge 2025–26",  kind:"event",     note:"Oracle, Meta, Amazon, Alphabet debt issuance (~$108B hyperscaler debt 2025). The one timely kernel under TIC-3 / FIC-6." }
  ],

  /* ------------------------------------------------------------------ NODES */
  nodes: [

    /* ============================== MIC — T1 (JFK) ====================== */
    { id:"n_2a", thread:"T1", label:"JFK was assassinated", layer:"anchor",
      claim:"Base fact: shot dead, Dallas, Nov 22 1963.",
      date:"1963-11-22", concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Anchor node — confirmed first.",
      primarySource:"Historical record", entities:["assassination"] },
    { id:"n_1a_fact", thread:"T1", label:"Signed EO 11110", layer:"fact",
      claim:"JFK signed Executive Order 11110 re: silver certificates.",
      date:"1963-06-04", concreteness:"High", sourcing:"Implied (public doc)",
      state:"Verified", note:"Jun 4 1963.",
      primarySource:"American Presidency Project / Federal Register", entities:["eo11110"] },
    { id:"n_1c_fire", thread:"T1", label:"Fired Allen Dulles", layer:"fact",
      claim:"JFK fired / forced out CIA Director Allen Dulles.",
      date:"1961-11", concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Dulles out Nov 1961 post–Bay of Pigs; Bissell too.",
      primarySource:"Historical record", entities:["cia"] },
    { id:"n_1c_quote", thread:"T1", label:"\"Splinter CIA into a thousand pieces\"", layer:"fact",
      claim:"JFK said he would splinter the CIA into a thousand pieces.",
      date:"1966-04-25", concreteness:"Medium", sourcing:"Press-attributed",
      state:"Source Not Found", note:"Sole attribution = anonymous source, NYT, Apr 25 1966 (3 yrs posthumous); phrase predates JFK. Provenance fails.",
      primarySource:"NYT 1966 (anonymous) — unverifiable provenance", entities:["cia"] },
    { id:"n_1d_fact", thread:"T1", label:"Ordered Vietnam drawdown (NSAM 263)", layer:"fact",
      claim:"JFK ordered a troop drawdown via NSAM 263.",
      date:"1963-10-11", concreteness:"High", sourcing:"Public doc",
      state:"Verified", note:"Approved Oct 11 1963; endorsed withdrawal of 1,000 by end-1963.",
      primarySource:"NSAM 263 text", entities:["nsam263","mic"] },
    { id:"n_1e_fact", thread:"T1", label:"Peace speech / test ban / steel", layer:"fact",
      claim:"American University 'peace speech', Partial Test Ban Treaty, 1962 steel-price confrontation.",
      date:"1963-06-10", concreteness:"High", sourcing:"Public",
      state:"Verified", note:"AU speech Jun 10 1963; PTBT signed Aug 5 1963; steel confrontation Apr 1962.",
      primarySource:"Public record", entities:["mic","fic"] },
    { id:"n_1f_fact", thread:"T1", label:"RFK organized-crime crackdown", layer:"fact",
      claim:"RFK ran an aggressive organized-crime crackdown.",
      date:"1961", concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Prosecutions +300%, 'Get Hoffa Squad,' Marcello deported Apr 1961.",
      primarySource:"DOJ record", entities:["mafia"] },
    { id:"n_1a_interp", thread:"T1", label:"EO 11110 threatened the Fed", layer:"interp",
      claim:"EO 11110 was a move against the Federal Reserve.",
      date:"1963-06-04", concreteness:"High", sourcing:"Implied",
      state:"Falsified", note:"Did the opposite — expanded Fed Note circulation, phased out silver certs. CRS debunked the myth.",
      primarySource:"Congressional Research Service", entities:["fed","fic","eo11110"] },
    { id:"n_1b", thread:"T1", label:"Wanted to abolish the Fed", layer:"interp",
      claim:"JFK intended to abolish / challenge the Federal Reserve.",
      date:"1963", concreteness:"Low", sourcing:"None",
      state:"Falsified", note:"No evidence; reappointed Fed chair Martin and praised the Fed in 1962.",
      primarySource:"Public record", entities:["fed","fic"] },
    { id:"n_1c_interp", thread:"T1", label:"Moved to dismantle the CIA", layer:"interp",
      claim:"JFK genuinely moved to dismantle the CIA.",
      date:"1961-11", concreteness:"Medium", sourcing:"Press-attributed",
      state:"Partially Verified", note:"Real firings + anger; 'dismantle' rests on the apocryphal quote. Real friction, overstated scope.",
      primarySource:"Mixed", entities:["cia"] },
    { id:"n_1d_interp", thread:"T1", label:"NSAM 263 = real intent to exit Vietnam", layer:"interp",
      claim:"NSAM 263 reflected a real decision to exit Vietnam (a threat to the MIC).",
      date:"1963-10-11", concreteness:"High", sourcing:"Public doc",
      state:"Partially Verified", note:"Disputed. Historians split — withdrawal-proponents vs Logevall (leverage on Diem, not a withdrawal decision).",
      primarySource:"NSAM 263 + historiography", entities:["nsam263","mic"] },
    { id:"n_1e_interp", thread:"T1", label:"Détente threatened the MIC/FIC", layer:"interp",
      claim:"JFK's détente moves threatened the military/financial structure.",
      date:"1963", concreteness:"Medium", sourcing:"Public",
      state:"Partially Verified", note:"Real policy; the 'threat to the structure' link is speculative.",
      primarySource:"Inference from public policy", entities:["mic","fic"] },
    { id:"n_1f_interp", thread:"T1", label:"Mob crackdown created a motive", layer:"interp",
      claim:"RFK's crackdown gave the mafia a motive to kill JFK.",
      date:"1963", concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Motive exists — BUT category mismatch: the mafia is not one of Dixon's complexes.",
      primarySource:"Historical record", entities:["mafia"] },
    { id:"n_2b", thread:"T1", label:"Lone gunman vs conspiracy", layer:"framing",
      claim:"Official record on whether it was a lone gunman or a conspiracy.",
      date:"1979", concreteness:"High", sourcing:"Official record",
      state:"Verified", note:"Record split. Warren (1964): lone gunman. HSCA (1979): 'probably a conspiracy' on since-discredited acoustics; NAS (1982) & FBI (1988) rebuked it.",
      primarySource:"Warren; HSCA; NAS 1982; FBI 1988", entities:["warren","hsca","assassination"] },
    { id:"n_2c", thread:"T1", label:"Orchestrated by [a structure]", layer:"framing",
      claim:"The killing was orchestrated by FIC / MIC / CIA / mafia as an institution.",
      date:"1963-11-22", concreteness:"Low", sourcing:"None / contested",
      state:"Unverifiable", note:"No official body or released file names an institutional orchestrator. 2025–26 releases show no smoking gun.",
      primarySource:"None established", entities:["assassination","fic","mic","cia","mafia"] },

    /* ============================== MIC — T2 =========================== */
    { id:"n_t2_n1", thread:"T2", label:"Primes file quarterly earnings", layer:"fact",
      claim:"Defense primes file quarterly earnings disclosing revenue sources.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"10-K/10-Q with segment results are public.",
      primarySource:"SEC EDGAR", entities:["primes","secfilings","mic"] },
    { id:"n_t2_n2", thread:"T2", label:"Filings disclose WHERE", layer:"fact",
      claim:"Those filings disclose geographic / contract detail showing where revenue comes from.",
      concreteness:"High", sourcing:"Public",
      state:"Partially Verified", note:"Real but coarse: backlog by customer type (US Gov, FMS, foreign govt) and net sales by broad region — not war-zone-granular.",
      primarySource:"SEC filings", entities:["primes","secfilings"] },
    { id:"n_t2_n3", thread:"T2", label:"Contracts move before the narrative", layer:"interp",
      claim:"Contracts/revenue move before the political narrative (a predictive lead).",
      concreteness:"Medium", sourcing:"Implied",
      state:"Partially Verified", note:"Leans Weak. Mostly reactive/concurrent — 'more reactive than truly predictive.' Weak long-horizon anticipation; procurement lead times.",
      primarySource:"Market/contract studies (mixed)", entities:["primes","mic"] },
    { id:"n_t2_n4", thread:"T2", label:"\"Because they prepare\"", layer:"interp",
      claim:"The MIC prepares for / anticipates specific wars (foreknowledge).",
      concreteness:"Low", sourcing:"None",
      state:"Unverifiable", note:"Benign reading (lead times) true; conspiratorial reading (engineers specific wars) unfalsifiable as stated.",
      primarySource:"None", entities:["mic"] },

    /* ============================== MIC — T3 =========================== */
    { id:"n_t3_n1", thread:"T3", label:"The 5 firms are major contractors", layer:"fact",
      claim:"Lockheed, General Dynamics, Raytheon, Boeing, BAE are major defense contractors.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Roster accurate. Lockheed #1 ($64.6B 2024); RTX; GD ($93.6B backlog); Boeing; BAE (UK's largest).",
      primarySource:"Company filings / rankings", entities:["primes","lockheed","rtx","gd","boeing","bae","mic"] },
    { id:"n_t3_n1b", thread:"T3", label:"Public firms w/ fiduciary duty", layer:"fact",
      claim:"They are public companies with fiduciary duty and quarterly earnings.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"All publicly traded (LMT/RTX/GD/BA on NYSE; BAE on LSE).",
      primarySource:"Exchange listings", entities:["primes","secfilings"] },
    { id:"n_t3_n2_fact", thread:"T3", label:"Conflict raises revenue/backlog/profit", layer:"fact",
      claim:"Active conflict raises these firms' revenue, backlog and profit.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Top-100 defense revenue $632B in 2023 (+4% real); backlogs swelled (Lockheed ~$160B, RTX ~$199B).",
      primarySource:"SIPRI / Defense News Top 100", entities:["primes","mic"] },
    { id:"n_t3_n2_interp", thread:"T3", label:"War MORE profitable than peacetime defense", layer:"interp",
      claim:"War is more profitable than peacetime defense work.",
      concreteness:"Medium", sourcing:"Implied",
      state:"Partially Verified", note:"Conflict lifts volume — true. But margins are cost-plus capped; 'war vs defense contracts' is a false binary (wartime revenue IS defense contracting, just more).",
      primarySource:"Margin analysis", entities:["mic","primes"] },

    /* ============================== FIC-1 ============================== */
    { id:"n_fic1_n1", thread:"FIC1", label:"Banks create money when they lend", layer:"fact",
      claim:"A loan simultaneously creates a matching deposit — new money as a digital entry.",
      concreteness:"High", sourcing:"Named (BoE 2014)",
      state:"Verified", note:"Bank of England, 'Money creation in the modern economy' (2014). Standard central-bank description — the conspiracy-coded claim is actually correct.",
      primarySource:"Bank of England (2014)", entities:["boe","fic"] },
    { id:"n_fic1_caveat", thread:"FIC1", label:"…but banks don't create ALL money", layer:"interp",
      claim:"Central bank issues base money/reserves; lending constrained by capital, regulation, demand.",
      concreteness:"High", sourcing:"Named",
      state:"Partially Verified", note:"Minor caveat — doesn't dent the claim.",
      primarySource:"Bank of England (2014)", entities:["fed","fic"] },

    /* ============================== FIC-2 (graduated Ponzi) ============ */
    { id:"n_fic2_n1", thread:"FIC2", label:"Money is debt; system has a growth bias", layer:"fact",
      claim:"Broad money is created as debt and destroyed on repayment; credit-expansion bias.",
      concreteness:"High", sourcing:"Implied",
      state:"Partially Verified", note:"Real kernel (cf. BIS/Minsky on debt cycles).",
      primarySource:"BIS / Minsky", entities:["fic","fed"] },
    { id:"n_fic2_n2", thread:"FIC2", label:"\"Not enough money to pay the interest\"", layer:"interp",
      claim:"There is not enough money in existence to pay the interest.",
      concreteness:"High", sourcing:"None",
      state:"Source Says Otherwise", note:"Accounting fallacy: interest is paid from circulating income FLOWS, not a fixed money STOCK; new lending replenishes. Interest is a flow, not a pre-existing stock.",
      primarySource:"Monetary accounting", entities:["fic","fed"] },
    { id:"n_fic2_n3", thread:"FIC2", label:"\"Ponzi scheme\" framing", layer:"interp",
      claim:"Central banking is a Ponzi scheme.",
      concreteness:"High", sourcing:"None",
      state:"Falsified", note:"A Ponzi has no productive assets and pays old investors from new principal; credit-money is backed by real output/assets. Rhetorical analogy, not a structural identity.",
      primarySource:"Definition match", entities:["fic","fed"] },

    /* ============================== FIC-3 ============================== */
    { id:"n_fic3_n1", thread:"FIC3", label:"Three central banks across US history", layer:"fact",
      claim:"First Bank (1791–1811), Second Bank (1816–1836), Federal Reserve (1913–).",
      concreteness:"High", sourcing:"Named",
      state:"Verified", note:"The Fed is conventionally described as the third. (First/Second were quasi-public — 'central bank' applied loosely — but 'three' is the standard count.)",
      primarySource:"Minneapolis Fed / Fed History", entities:["fed"] },

    /* ============================== FIC-4 ============================== */
    { id:"n_fic4_n1", thread:"FIC4", label:"Dutch financial pioneering", layer:"fact",
      claim:"Bank of Amsterdam (1609); VOC exchange (1602).",
      concreteness:"High", sourcing:"Named",
      state:"Verified", note:"Influential — but the Wisselbank was a municipal exchange bank, not a true central bank.",
      primarySource:"Economic history", entities:["fic"] },
    { id:"n_fic4_n2", thread:"FIC4", label:"Bank of England (1694) as template", layer:"fact",
      claim:"BoE (1694) is the modern central-bank template, copied across the Empire.",
      date:"1694", concreteness:"High", sourcing:"Named",
      state:"Verified", note:"The template that propagated.",
      primarySource:"Economic history", entities:["boe"] },
    { id:"n_fic4_n3", thread:"FIC4", label:"US three + 20th-c. proliferation (BIS/IMF)", layer:"fact",
      claim:"US → three successive institutions; then BIS (1930) / IMF (1944).",
      concreteness:"High", sourcing:"Named",
      state:"Verified", note:"The proliferation is real.",
      primarySource:"Economic history", entities:["fed","fic"] },
    { id:"n_fic4_n4", thread:"FIC4", label:"…a single 'engineered' succession", layer:"interp",
      claim:"It was one deliberate engineered succession.",
      concreteness:"Low", sourcing:"None",
      state:"Partially Verified", note:"Overstated — evolutionary diffusion, not a designed continuous project (omits e.g. Sweden's Riksbank 1668).",
      primarySource:"Historiography", entities:["fic"] },

    /* ============================== FIC-5 (graduated BlackRock) ======== */
    { id:"n_fic5_n1", thread:"FIC5", label:"Aladdin \"controls $25T\"", layer:"interp",
      claim:"Aladdin controls ~$25 trillion in capital allocation.",
      concreteness:"High", sourcing:"Implied",
      state:"Source Says Otherwise", note:"~$21–25T is MONITORED/risk-managed for 200+ external clients — not controlled/allocated. BlackRock's own AUM ≈ $11.6T (2024) → ~$14T (2025). 'Controls' is the inflation.",
      primarySource:"BlackRock disclosures", entities:["blackrock","aladdin"] },
    { id:"n_fic5_n2", thread:"FIC5", label:"\"Every central bank / SWF uses Aladdin\"", layer:"interp",
      claim:"Every pension fund, insurer, SWF, central bank and treasury uses Aladdin.",
      concreteness:"High", sourcing:"Implied",
      state:"Partially Verified", note:"Heavy hyperbole. Dominant among large managers/insurers; some official institutions engaged it (ECB/Fed crisis programs; Bank of Israel). 'Every… around the world' is categorically false.",
      primarySource:"Public reporting", entities:["blackrock","aladdin","fed"] },
    { id:"n_fic5_n3", thread:"FIC5", label:"\"Larry Fink invented the MBS\"", layer:"interp",
      claim:"Larry Fink / BlackRock invented the mortgage-backed security.",
      concreteness:"High", sourcing:"Named",
      state:"Falsified", note:"MBS predates Fink (Ginnie Mae pass-through, 1970). Fink pioneered the CMO at First Boston (~1983) — before BlackRock (1988). Kernel (CMO pioneer) is Misattributed, not 'inventor of MBS.'",
      primarySource:"Financial history", entities:["blackrock","fink"] },
    { id:"n_fic5_n4", thread:"FIC5", label:"Blythe Masters invented the CDS", layer:"fact",
      claim:"Blythe Masters invented the credit default swap.",
      concreteness:"High", sourcing:"Named",
      state:"Verified", note:"Led the JPMorgan team, mid-1990s; landmark 1994 Exxon/EBRD deal.",
      primarySource:"Financial history", entities:["bmasters"] },
    { id:"n_fic5_n5", thread:"FIC5", label:"Aramco CEO got a BlackRock board seat", layer:"fact",
      claim:"The Aramco CEO joined BlackRock's board.",
      date:"2023-07", concreteness:"High", sourcing:"Named",
      state:"Verified", note:"Amin Nasser, independent director, effective July 2023.",
      primarySource:"BlackRock proxy / press", entities:["blackrock","aramco"] },

    /* ============================== FIC-6 (hierarchy) ================== */
    { id:"n_fic6_n1", thread:"FIC6", label:"MIC firms are public & need capital", layer:"fact",
      claim:"MIC firms are public and depend on capital markets.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"True at the base — cross-ref MIC roster (T3).",
      primarySource:"SEC filings", entities:["mic","primes","secfilings","fic"] },
    { id:"n_fic6_n2", thread:"FIC6", label:"TIC firms subordinate b/c need capital", layer:"interp",
      claim:"TIC firms are subordinate to finance because they need capital.",
      concreteness:"High", sourcing:"Implied",
      state:"Source Says Otherwise", note:"Cash-rich giants (Apple/MSFT/Alphabet/Meta) self-fund. The 2025–26 AI-debt binge is a thin recent kernel — elective leverage from strength, not dependence. The pyramid leaks at the top.",
      primarySource:"Company cash positions", entities:["tic","fic","mag7","aicapex"] },

    /* ============================== FIC-7 ============================== */
    { id:"n_fic7_n1", thread:"FIC7", label:"Governments financed by / constrained by bonds", layer:"fact",
      claim:"Governments finance via bond markets and are constrained by them.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Factual; bond-market discipline on fiscal policy is real.",
      primarySource:"Public finance", entities:["govbond","fic"] },
    { id:"n_fic7_n2", thread:"FIC7", label:"\"Piggy bank / politicians are actors\"", layer:"framing",
      claim:"Government is just a piggy bank for bondholders; politicians are WWE actors.",
      concreteness:"Low", sourcing:"None",
      state:"Unverifiable", note:"Loaded framing, not a checkable proposition. Real kernel (bond discipline) exists; park the rhetoric.",
      primarySource:"—", entities:["govbond","fic"] },

    /* ============================== FIC-8 ============================== */
    { id:"n_fic8_n1", thread:"FIC8", label:"Lobbying as influence", layer:"fact",
      claim:"The FIC exerts influence through lobbying.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Documented, legal, pervasive.",
      primarySource:"Lobbying disclosures", entities:["fic","govbond"] },
    { id:"n_fic8_n2", thread:"FIC8", label:"Capital-market access as leverage", layer:"fact",
      claim:"Access to capital markets is a control lever.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Real lever.",
      primarySource:"—", entities:["fic","secfilings"] },
    { id:"n_fic8_n3", thread:"FIC8", label:"\"Deep-state blackmail operations\"", layer:"interp",
      claim:"Control via deep-state black operations for blackmail.",
      concreteness:"Low", sourcing:"None",
      state:"Unverifiable", note:"No specific, checkable claim attached; unfalsifiable as stated. Tag and walk away.",
      primarySource:"—", entities:["fic"] },

    /* ============================== TIC-1 ============================== */
    { id:"n_tic1_n1", thread:"TIC1", label:"Mag 7 = record-high S&P share", layer:"fact",
      claim:"The Magnificent Seven are an extreme, record-high share of the S&P 500.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Concentration story is real (~12% a decade ago).",
      primarySource:"Index data", entities:["mag7","tic"] },
    { id:"n_tic1_n2", thread:"TIC1", label:"\"Almost 50% of the S&P\"", layer:"interp",
      claim:"The Mag 7 share is almost 50%.",
      concreteness:"High", sourcing:"None",
      state:"Falsified", note:"Actual ≈ 34–35% (peak ~34.5% Aug 2025). Overstated by ~15 points — the recurring 'Mag-7 ≈ 50%' inflation tic.",
      primarySource:"S&P index weights", entities:["mag7"] },

    /* ============================== TIC-2 ============================== */
    { id:"n_tic2_n1", thread:"TIC2", label:"Algorithms shape what users see", layer:"fact",
      claim:"Recommendation algorithms shape attention, amplify content, build echo chambers.",
      concreteness:"High", sourcing:"Named",
      state:"Verified", note:"Peer-reviewed work; CRS brief.",
      primarySource:"Academic / CRS", entities:["algos","tic"] },
    { id:"n_tic2_n2", thread:"TIC2", label:"Platforms used for influence ops", layer:"fact",
      claim:"Platforms are used for coordinated influence operations.",
      concreteness:"High", sourcing:"Named",
      state:"Verified", note:"Meta adversarial-threat reports: takedowns of Russia/China/Iran state-linked networks ('Doppelganger').",
      primarySource:"Meta threat reports", entities:["algos"] },
    { id:"n_tic2_n3", thread:"TIC2", label:"\"The complex engineers perception\"", layer:"interp",
      claim:"A unified top-down technological complex directs perception.",
      concreteness:"Low", sourcing:"None",
      state:"Unverifiable", note:"Documented operators are mostly hostile STATE actors + the platforms policing them — not one coordinated complex.",
      primarySource:"—", entities:["tic","algos"] },

    /* ============================== TIC-3 (subordination) ============== */
    { id:"n_tic3_n1", thread:"TIC3", label:"Big tech depends on capital markets", layer:"interp",
      claim:"Apple/MSFT/Alphabet/Meta depend on external capital markets.",
      concreteness:"High", sourcing:"Implied",
      state:"Source Says Otherwise", note:"They are among the most cash-generative firms on earth (Alphabet >$100B cash; others >$50B) and self-fund. The dependency framing inverts the power balance.",
      primarySource:"Company balance sheets", entities:["mag7","fic","tic"] },
    { id:"n_tic3_n2", thread:"TIC3", label:"Recent AI-capex debt issuance", layer:"fact",
      claim:"Hyperscalers issued large AI-capex debt in 2025–26.",
      concreteness:"High", sourcing:"Named",
      state:"Verified", note:"Oracle $18B Sep-25 + $25B Feb-26; Meta $30B Oct-25; Amazon $15B Nov-25; Alphabet $20B Feb-26 (~$108B hyperscaler debt 2025). A real, timely kernel — finance has more leverage than a year ago.",
      primarySource:"Bond-issuance reporting", entities:["aicapex","mag7","fic"] },

    /* ============================== TIC-4 ============================== */
    { id:"n_tic4_n1", thread:"TIC4", label:"Named firms = the compute/algorithm layer", layer:"fact",
      claim:"The named firms exist and constitute the data-center / algorithm / compute layer.",
      concreteness:"High", sourcing:"Public",
      state:"Verified", note:"Trivially true. The disputes are magnitude (TIC-1), agency (TIC-2), hierarchy (TIC-3) — not membership.",
      primarySource:"—", entities:["mag7","tic","algos"] },

    /* ============================== PARKING LOT ======================== */
    { id:"n_pl_trump", thread:"PL", label:"Trump as 'challenged the structure'", layer:"parked",
      claim:"Dixon's aside: Trump as another example.",
      concreteness:"Low", sourcing:"None", state:"Open",
      note:"Parked during the JFK dive. Not yet decomposed.", entities:["dixon","fic"] },
    { id:"n_pl_kirk", thread:"PL", label:"Charlie Kirk as an example", layer:"parked",
      claim:"Dixon's aside: Charlie Kirk as an example.",
      concreteness:"Low", sourcing:"None", state:"Open",
      note:"Parked. Not yet decomposed.", entities:["dixon"] },
    { id:"n_pl_mictic", thread:"PL", label:"MIC ↔ TIC edge — does it exist?", layer:"parked",
      claim:"Is there a real MIC↔TIC link, or does everything route through the FIC?",
      concreteness:"Low", sourcing:"None", state:"Open",
      note:"Still parked — but TIC-3 (tech as financial PEER, not subordinate) is the first real evidence bearing on it. Revisit when the parking lot opens.",
      entities:["mic","tic","fic"] }
  ],

  /* ------------------------------------------------------------------ EDGES */
  edges: [

    /* ===== MIC — T1 ===== */
    { id:"e_1a", thread:"T1", from:"n_1a_fact",  to:"n_1a_interp", type:"cites_as_evidence", grade:"Unwarranted",
      note:"EO 11110 read as anti-Fed; the document shows the opposite." },
    { id:"e_1c", thread:"T1", from:"n_1c_fire",  to:"n_1c_interp", type:"cites_as_evidence", grade:"Weak",
      note:"Firing Dulles is real; 'dismantle the CIA' overstates it." },
    { id:"e_1cq", thread:"T1", from:"n_1c_quote", to:"n_1c_interp", type:"cites_as_evidence", grade:"Unwarranted",
      note:"Unsourced quote can't carry the 'dismantle' intent." },
    { id:"e_1d", thread:"T1", from:"n_1d_fact",  to:"n_1d_interp", type:"cites_as_evidence", grade:"Weak",
      note:"NSAM 263 real; that it = a firm exit decision is historically disputed." },
    { id:"e_1e", thread:"T1", from:"n_1e_fact",  to:"n_1e_interp", type:"cites_as_evidence", grade:"Weak",
      note:"Détente real; 'threatened the structure' is speculative." },
    { id:"e_1f", thread:"T1", from:"n_1f_fact",  to:"n_1f_interp", type:"cites_as_evidence", grade:"Warranted",
      note:"Crackdown genuinely creates a mafia motive — but outside Dixon's complexes." },
    { id:"e_motive", thread:"T1", from:"n_1a_interp", to:"n_2c", type:"causal_inference", grade:"Unwarranted",
      note:"E-motive: FIC-motive nodes (1a/1b) Falsified → no motive there. Surviving motives point away from Dixon's thesis." },
    { id:"e_mechanism", thread:"T1", from:"n_2c", to:"n_2a", type:"causal_inference", grade:"NonSequitur",
      note:"E-mechanism: no node establishes orchestration; mechanism Unverifiable, so asserting it is a non sequitur." },

    /* ===== MIC — T2 ===== */
    { id:"e_t2_1", thread:"T2", from:"n_t2_n2", to:"n_t2_n3", type:"predictive", grade:"Weak",
      note:"E1: filings → 'determine the next war zone.' Legitimate kernel overstated off a coarse, mostly-reactive indicator." },
    { id:"e_t2_2", thread:"T2", from:"n_t2_n4", to:"n_t2_n3", type:"causal_inference", grade:"Unwarranted",
      note:"E2: 'because they prepare' → MIC foresees/drives the war. Leading ≠ causing ≠ foreknowledge." },

    /* ===== MIC — T3 ===== */
    { id:"e_t3_1", thread:"T3", from:"n_t3_n1b", to:"n_t3_n2_interp", type:"incentive", grade:"Warranted",
      note:"E1: public firms structurally seek growing revenue (fiduciary duty). Nearly tautological; sound." },
    { id:"e_t3_2", thread:"T3", from:"n_t3_n2_fact", to:"n_t3_n2_interp", type:"incentive", grade:"Weak",
      note:"E2: '…requires WAR specifically.' Overstated — sustained by high baseline budgets. War is upside, not baseline." },

    /* ===== FIC ===== */
    { id:"e_fic2", thread:"FIC2", from:"n_fic2_n1", to:"n_fic2_n3", type:"causal_inference", grade:"Unwarranted",
      note:"Debt-money + growth-bias (real) → 'mathematically must collapse / Ponzi.' The catastrophic inference rests on the false 'not enough money' mechanism (n_fic2_n2), so it isn't licensed." },
    { id:"e_fic2b", thread:"FIC2", from:"n_fic2_n2", to:"n_fic2_n3", type:"cites_as_evidence", grade:"Unwarranted",
      note:"The 'not enough money to pay interest' fallacy is what props up the Ponzi framing." },
    { id:"e_fic4", thread:"FIC4", from:"n_fic4_n3", to:"n_fic4_n4", type:"causal_inference", grade:"Weak",
      note:"Real lineage/diffusion → 'proof of intentional engineered design.' 'Engineered' smuggles in intent." },
    { id:"e_fic5", thread:"FIC5", from:"n_fic5_n1", to:"n_fic5_n2", type:"depends_on", grade:"Weak",
      note:"The '$25T controls' inflation feeds the 'every institution uses it' hyperbole — both confuse footprint with control." },
    { id:"e_fic6", thread:"FIC6", from:"n_fic6_n1", to:"n_fic6_n2", type:"depends_on", grade:"Weak",
      note:"'All complexes need capital → FIC sits above all.' True for MIC (base), overstated for cash-rich TIC (top). Pyramid real at the base, leaky at the top." },

    /* ===== TIC ===== */
    { id:"e_tic1", thread:"TIC1", from:"n_tic1_n1", to:"n_tic2_n3", type:"cites_as_evidence", grade:"Weak",
      note:"Real concentration → 'TIC is a coherent, coordinated power bloc.' The coordination is the interpretive add-on (lands on TIC-2's agency overreach)." },
    { id:"e_tic2", thread:"TIC2", from:"n_tic2_n1", to:"n_tic2_n3", type:"causal_inference", grade:"Unwarranted",
      note:"Capability exists → 'a coordinating complex wields it.' Mechanism real; coordinated-agency leap asserted, not shown." },
    { id:"e_tic3", thread:"TIC3", from:"n_tic3_n2", to:"n_tic3_n1", type:"causal_inference", grade:"Unwarranted",
      note:"They tap debt markets → 'subordinate to finance.' Elective leverage from strength ≠ structural subordination." },

    /* ===== CROSS-COMPLEX WELD: the same hierarchy debate, two sides ===== */
    { id:"e_cross_hier", thread:"FIC6", from:"n_tic3_n1", to:"n_fic6_n2", type:"same_entity", grade:"Unwarranted",
      note:"CROSSOVER: FIC-6 (finance sits above all) and TIC-3 (tech self-funds) are the SAME claim from opposite sides. The FIC pyramid leaks exactly where TIC-3 shows the cash-rich giants self-funding." }
  ]
};
