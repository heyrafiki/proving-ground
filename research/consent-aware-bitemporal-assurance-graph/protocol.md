# Consent-aware bitemporal Assurance Graph evaluation protocol

Version: 0.1.0

Study stage: Stage 1 protocol; independent review open

Reviewed: 2026-08-14

## Purpose

This protocol tests one candidate contribution: a two-cutoff,
Consent-conditional assurance-path query that fails closed unless it can return
the applicable fact state, Consent decision, accountable capability and control
owner, contract operation and executable evidence from one historical snapshot.

The evaluation treats provenance graphs, assurance cases, Consent records,
bitemporal databases and executable conformance tests as established ideas. It
asks whether the specified query produces a measurable advantage for
reconstructing and challenging mental-health Care and Benefit decisions.

The protocol must be reviewed and frozen before evaluation begins. The
contribution boundary is the query semantics and measurable reconstruction
behavior, not the words "Assurance Graph" or the use of graphs, Consent,
provenance, bitemporal data or tests.

## Formal problem

For a set of versioned facts, controls, capabilities, decisions and evidence,
let `V` be the effective-time cutoff and `K` the recorded-time cutoff. For a
requested operation `O`, tenant `T`, subject key `S`, purpose `P` and Consent
version `C`, the system must return:

1. the facts that were effective by `V` and known by `K`;
2. whether `O` was authorized for `T`, `S`, `P` and `C` at those cutoffs;
3. the accountable capability and control owner;
4. the contract operation and executable evidence supporting the decision;
5. an explicit denial or unresolved state when any required link is absent.

The primary question is whether the proposed graph reconstructs that result and
rejects policy mutations more accurately than simpler baselines without
unacceptable disclosure, latency or authoring cost.

### Query semantics

Let `G = (N, E)` be a typed directed graph. A fact or evidence node `n` is in
the historical view `G[V,K]` only when its effective interval contains `V` and
its recorded interval contains `K`. An edge is in the view only when both
endpoints are in the view and the edge itself was known by `K`.

For operation `O`, tenant `T`, subject key `S`, purpose `P` and Consent version
`C`, the query returns:

`Q(G,V,K,O,T,S,P,C) = (decision, facts, consent, path, omissions)`

`decision` is `allow`, `deny` or `unresolved`. `path` is complete only when it
contains the selected decision, typed capability, control, accountable owner,
contract operation and executable evidence. A missing, future-known,
cross-tenant, cross-purpose, superseded or unauthorized element produces
`deny` or `unresolved`; it may not be silently substituted with the current
graph state. `omissions` records permitted redactions without returning the
redacted fields.

## Established prior art

The prior-art review starts from these primary standards and papers:

| Area | Existing authority | Relevance |
| --- | --- | --- |
| General provenance | [W3C PROV-O](https://www.w3.org/TR/prov-o/) | Defines interoperable entities, activities, agents and provenance relationships. |
| Consent | [HL7 FHIR Consent](https://hl7.org/fhir/consent.html) | Represents healthcare and research Consent and points to Provenance for change tracking. |
| Healthcare provenance | [HL7 FHIR Provenance](https://hl7.org/fhir/provenance.html) | Represents sources, agents and activities behind healthcare resources. |
| Research protocol identity | [HL7 FHIR ResearchStudy](https://hl7.org/fhir/researchstudy.html) | Represents a study and its protocol context. |
| Assurance cases | [OMG SACM 2.0](https://www.omg.org/spec/SACM/2.0/) | Defines a structured metamodel for assurance arguments and evidence. |
| Two-dimensional time | [Snodgrass, TQuel](https://www2.cs.arizona.edu/~rts/pubs/TODS87.pdf) | Establishes valid-time and transaction-time reconstruction in temporal databases. |
| Temporal provenance | [Beheshti et al., Temporal Provenance Model](https://arxiv.org/abs/1211.5009) | Represents and queries provenance graphs at historical time points. |
| Healthcare provenance review | [Ahmed et al.](https://pubmed.ncbi.nlm.nih.gov/37514788/) | Reviews healthcare provenance methods, technologies and open problems. |
| Purpose-based Consent | [Tith et al.](https://pubmed.ncbi.nlm.nih.gov/33190460/) | Evaluates purpose-based healthcare Consent with traceable updates and withdrawals. |
| Consent provenance | [US10936732B2](https://patents.google.com/patent/US10936732B2/en) | Describes consent histories, audit trails and provenance graphs for consent decisions. |
| Consent graph queries | [US12423467B2](https://patents.google.com/patent/US12423467B2/en) | Describes graph-based searches over healthcare data using actor, purpose, environment and time parameters. |
| Dynamic assurance cases | [OntoGSN](https://arxiv.org/abs/2506.11023) | Defines a queryable ontology and middleware for updating assurance cases. |
| Evidence-linked argument graphs | [Compliance-by-Construction Argument Graphs](https://arxiv.org/abs/2604.04103) | Combines typed argument graphs, W3C PROV and deterministic evidence validation. |

The [author search record](./prior-art-search.md) records queries, inclusion
rules and the current overlap assessment. Independent reviewers must extend it
to peer-reviewed systems, healthcare implementations, standards, patents and
non-English sources. The current search shows substantial overlap at the
ingredient and pairwise-combination levels. An absence of the exact query in
this starting set is insufficient to establish scientific priority.

## Candidate and baselines

All implementations receive the same frozen scenarios and may not read expected
labels at runtime.

| ID | System | Information available |
| --- | --- | --- |
| B0 | Static traceability matrix | Current operation, capability, control and evidence links. No historical query. |
| B1 | Provenance graph | Entities, activities, agents and derivation links. No Consent decision or two-cutoff query. |
| B2 | Bitemporal event ledger | Effective and recorded time with append-only replay. No accountable assurance links. |
| B3 | Consent-aware single-time graph | Consent, capability and evidence links evaluated at one current-state time. |
| B4 | Consent-aware temporal provenance graph | Consent and two-cutoff provenance queries without required capability, control-owner, contract and executable-evidence path completeness. |
| P | Proposed graph | Consent, two time axes, typed capabilities, control ownership and executable evidence. |

The proposed graph is supported only if its advantage depends on the complete
query semantics. B0 to B4 also act as ablations that identify which component
changes the result. B4 is the strongest baseline and protects the evaluation
from treating temporal provenance itself as the contribution.

## Evaluation units

The unit of analysis is a scenario-query pair. The initial corpus uses only
public synthetic artifacts:

- Claim, remittance, settlement and late-recorded decision scenarios from the
  insurance assurance benchmark;
- First Light v2 Consent, amendment, responder, language, review and
  longitudinal scenarios;
- held-out mutations generated from declared families without changing the
  expected policy semantics.

Development scenarios and held-out evaluation scenarios must be separated by a
committed manifest before baseline tuning. No Person, Practitioner, employer,
insurer or payment data may enter this protocol.

The held-out generator produces 200 cases for each declared mutation family
from a frozen seed manifest. Sample counts are fixed before implementation.
Fixed conformance cases are exhaustive for their declared fixture set; no
population inference is made from them.

## Tasks and measures

| Measure | Definition |
| --- | --- |
| Decision reconstruction exactness | Exact match of decision state, supporting facts and both cutoffs. |
| Consent authorization exactness | Exact allow, deny or unresolved result for the declared purpose and Consent version. |
| Mutation rejection rate | Rejected prohibited mutations divided by all prohibited mutations. |
| Evidence-path completeness | Required contract, capability, control, owner and evidence links returned without substitution. |
| Minimum-necessary disclosure violations | Returned fields or identifiers outside the task allowlist. |
| Reconstruction latency | Wall-clock milliseconds for a warm deterministic query on the pinned runner. |
| Authoring cost | Reviewer minutes needed to encode and approve one new scenario after requirements are supplied. |

Fixed conformance cases report exact counts and rates. Held-out generated
families report a seed, sample size, Wilson 95% intervals for proportions and
paired McNemar comparisons against P. Multiple primary comparisons use Holm
correction. All outcomes, including negative and unresolved results, remain in
the report.

## Hypotheses

- H1: P has higher decision reconstruction exactness than B0 to B3 on late,
  retroactive and corrected facts.
- H2: P has higher Consent authorization exactness than B0 to B3 after Consent
  amendment or revocation.
- H3: P rejects more future-known, cross-purpose, cross-tenant and broken-link
  mutations than B0 to B3.
- H4: P returns complete assurance paths with zero minimum-necessary disclosure
  violations on the frozen corpus.
- H5: Any accuracy gain is reported beside latency and authoring cost rather
  than treated as free.

## Analysis plan

The protocol names decision reconstruction exactness and Consent authorization
exactness as co-primary measures. Each proposed-to-baseline comparison uses the
same scenario-query pairs. Held-out binary outcomes use paired McNemar tests,
Holm correction across the five baseline comparisons and Wilson 95% intervals
for individual rates. Effect sizes and discordant-pair counts are reported
beside adjusted p-values. Fixed cases report exact counts only.

Latency is measured after five warm-up runs on a pinned runner and reported as
median, p95 and maximum over five repetitions. Authoring cost is measured from
the first requirements read to an accepted scenario commit and is reported
separately for the author and reviewer. Missing runs, exclusions, implementation
defects and protocol deviations remain in the result package.

## Failure and stopping rules

The candidate is not supported when any of these conditions holds:

- a simpler baseline matches the primary exactness measures with lower cost;
- P accepts a Consent revocation, late amendment, future-known event,
  cross-purpose event or cross-tenant mutation;
- results cannot be reproduced from the frozen public commit and seed;
- the advantage disappears on held-out mutation families;
- independent review identifies the complete candidate combination as already
  disclosed.

Implementation defects found after the freeze are reported. They do not permit
silent fixture relabeling. A protocol amendment receives a new version and the
original result remains available.

## Review gates

1. Independent prior-art review by a researcher who did not author the graph.
2. Review of each baseline for a fair, non-deliberately weakened implementation.
3. Public freeze of protocol, fixtures, expected semantics, seeds and artifact hashes.
4. Independent reproduction of the complete evaluation from a clean checkout.
5. Research and legal review before any scientific priority or patentability statement.

The independent reviewer packet is in
[`reviewer-checklist.md`](./reviewer-checklist.md). The article draft is a
Stage 1 protocol manuscript in [`manuscript.md`](./manuscript.md). Results are
added only after the reviewed protocol is frozen and independently reproduced.

Until all five gates pass, the permitted description is: “candidate
architecture under comparative evaluation.”

## Reproduction boundary

Run `npm test` from the repository root to validate the current public evidence
and the machine-readable protocol boundary. The evaluation runner and results
will be added only after this protocol is independently reviewed and frozen.

Clinical validity, population effectiveness, actuarial outcomes and autonomous
Diagnosis are outside this protocol.
