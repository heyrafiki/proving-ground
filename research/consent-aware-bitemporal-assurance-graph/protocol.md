# Consent-aware bitemporal Assurance Graph evaluation protocol

Version: 0.1.0

Status: draft for independent review

Reviewed: 2026-08-14

Claim state: no novelty claim

## Purpose

This protocol tests one candidate contribution: a queryable assurance graph
that keeps Consent state, effective time, recorded time, accountable capability
ownership and executable evidence in one reconstruction path.

The individual ingredients are established ideas. This protocol does not claim
that provenance graphs, assurance cases, Consent records, bitemporal databases
or executable conformance tests were invented by Heyrafiki. It asks whether the
specified combination produces a measurable advantage for reconstructing and
challenging mental-health Care and Benefit decisions.

No result is included in this revision. The protocol must be reviewed and
frozen before evaluation begins.

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

Independent reviewers must extend this search to peer-reviewed systems,
healthcare implementations, standards, patents and non-English sources. An
absence in this starting set is not evidence of novelty.

## Candidate and baselines

All implementations receive the same frozen scenarios and may not read expected
labels at runtime.

| ID | System | Information available |
| --- | --- | --- |
| B0 | Static traceability matrix | Current operation, capability, control and evidence links. No historical query. |
| B1 | Provenance graph | Entities, activities, agents and derivation links. No Consent decision or two-cutoff query. |
| B2 | Bitemporal event ledger | Effective and recorded time with append-only replay. No accountable assurance links. |
| B3 | Consent-aware single-time graph | Consent, capability and evidence links evaluated at one current-state time. |
| P | Proposed graph | Consent, two time axes, typed capabilities, control ownership and executable evidence. |

The proposed graph is supported only if its advantage depends on the combined
structure. B0 to B3 also act as ablations that identify which component changes
the result.

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
5. Research and legal review before any scientific novelty, priority or patentability statement.

Until all five gates pass, the permitted description is: “candidate
architecture under comparative evaluation.”

## Reproduction boundary

Run `npm test` from the repository root to validate the current public evidence
and the machine-readable protocol boundary. The evaluation runner and results
will be added only after this protocol is independently reviewed and frozen.

Clinical validity, population effectiveness, actuarial outcomes and autonomous
Diagnosis are outside this protocol.
