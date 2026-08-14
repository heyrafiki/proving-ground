# Reconstructing Consent-bound healthcare decisions with two-time assurance paths

## A protocol for comparative evaluation

Version: 0.1.0

Study stage: Stage 1 protocol and analysis plan

## Abstract

Healthcare and Benefit decisions can be corrected, recorded late, constrained
by changing Consent and supported by evidence owned across several systems.
Current-state records can therefore answer the wrong historical question. This
protocol evaluates a candidate method that reconstructs an authorized decision
at separate effective-time and recorded-time cutoffs and fails closed unless it
can return a complete assurance path through the responsible capability,
control owner, contract operation and executable evidence. Five progressively
stronger baselines isolate static traceability, provenance, bitemporal replay,
Consent and temporal-provenance effects. The evaluation uses public synthetic
Claim and early-identification scenarios, frozen mutation families and
minimum-necessary disclosure checks. Co-primary outcomes are exact decision
reconstruction and exact Consent authorization. The protocol explicitly does
not test clinical validity, population effectiveness, actuarial outcomes or
autonomous Diagnosis. Substantial prior art exists for every ingredient and
several combinations. The exact candidate method remains under comparative and
independent prior-art review.

## Research question

Does a two-cutoff, Consent-conditional assurance-path query improve historical
decision reconstruction and policy-failure detection over competent static,
provenance, temporal and Consent-aware baselines without unacceptable
disclosure, latency or authoring cost?

## Contribution boundary

The candidate contribution is the behavior of
`Q(G,V,K,O,T,S,P,C)`, including complete-path requirements and fail-closed
outcomes. Graphs, provenance, bitemporal data, Consent models, assurance cases
and executable tests are established work. A favorable result would support
the evaluated method on the frozen synthetic corpus. Scientific priority,
patentability, clinical value and production safety each require their own
appropriate review.

## Background and related work

W3C PROV-O and HL7 FHIR Provenance define interoperable provenance structures.
FHIR Consent represents healthcare Consent, while temporal database work
establishes valid-time and transaction-time reconstruction. The Temporal
Provenance Model makes historical graph querying explicit. SACM and GSN-based
systems structure assurance claims and evidence; OntoGSN makes such structures
queryable and dynamic. Purpose-based healthcare Consent systems and patent
families disclose consent history, provenance graphs and graph queries using
actor, purpose and time. Recent argument-graph work combines typed assurance
structures, W3C provenance and deterministic validation. The complete author
search and overlap assessment are recorded in `prior-art-search.md`.

## Method

### Systems compared

- B0: current-state traceability matrix;
- B1: provenance graph without Consent or two-cutoff queries;
- B2: bitemporal event ledger without assurance links;
- B3: Consent-aware, single-time assurance graph;
- B4: Consent-aware temporal provenance graph without mandatory typed
  capability, control-owner, contract and executable-evidence completeness; and
- P: the proposed complete query semantics.

Each system receives the same frozen input budget and scenario-query pairs.
Expected labels are unavailable at runtime. Independent review must confirm
that no baseline is deliberately weakened.

### Data

The evaluation uses synthetic Claim, remittance, settlement, Consent,
amendment, responder, language, review and longitudinal fixtures already
published in Proving Ground. Development and held-out cases are separated by a
committed manifest. The generator creates 200 cases per declared mutation
family from frozen seeds. No production, personal or clinical record enters
the study.

### Outcomes and analysis

Decision reconstruction exactness and Consent authorization exactness are
co-primary. Secondary outcomes are mutation rejection, assurance-path
completeness, minimum-necessary disclosure violations, reconstruction latency
and authoring cost. Fixed cases report exact counts. Held-out binary outcomes
use paired McNemar tests, Wilson 95% intervals and Holm correction across the
five baseline comparisons. Latency reports median, p95 and maximum on a pinned
runner. Author and reviewer time are reported separately.

### Failure criteria

The candidate is unsupported if a simpler baseline matches the primary
outcomes at lower cost, any critical Consent or tenant mutation is accepted,
the result cannot be reproduced, the advantage disappears on held-out
families, or independent review finds the complete method already disclosed.

## Ethics, privacy and governance

This protocol uses synthetic public artifacts and evaluates system
conformance, not people or clinical interventions. The result package excludes
identity, Clinical Notes, Assessment answers, payment credentials, private
policies and re-identification material. A later study using people, clinical
records or operational outcomes requires its own ethics, data-rights, Consent,
safety and statistical review.

## Reproducibility

The protocol, machine-readable boundary, fixtures, expected semantics, seeds,
artifact hashes, runner and all negative results will be versioned in this
repository. Node.js 22 and 24 are required replication environments. The final
package must reproduce from a clean checkout and be archived with a persistent
identifier before submission as a results article.

## Current limitations

The prior-art search is preliminary and English-language, no baseline
implementation has been independently approved, the protocol is not frozen,
and evaluation follows protocol freeze. Synthetic scenarios cannot establish
clinical validity, population effectiveness, actuarial benefit or general
production safety.

## Publication plan

1. complete independent prior-art and baseline review;
2. freeze the protocol, fixtures, seeds and hashes;
3. archive the Stage 1 protocol with a persistent identifier;
4. run the evaluation without relabeling or silent exclusions;
5. obtain independent reproduction; and
6. submit the result with the protocol, deviations, negative findings and
   complete artifact package.
