# First Light Pilot Evidence Pack

Version: 2.0.0
Protocol: 2.0.0

## What this pack shows

This pack reproduces how 48 synthetic Assessments move through deterministic routing, accountable review, authorized follow-up, longitudinal evidence, and audit checks. Screening remains distinct from Diagnosis.

## Conformance benchmark result

- Sensitivity against declared synthetic labels: 0.708333
- Specificity against declared synthetic labels: 0.75
- Positive predictive value against declared synthetic labels: 0.772727
- Negative predictive value against declared synthetic labels: 0.681818
- Balanced accuracy against declared synthetic labels: 0.729167
- Unresolved rate: 0.083333
- Review override rate: 0.272727
- Exact reviewer agreement: 0.869565
- Cohen's kappa: 0.775974

These are exact conformance measures over the fixed 48-case fixture set. Instrument- and population-specific clinical evaluation uses its own reviewed protocol.

## Controls

- Consent authority: Current persisted Consent is checked before read or action.
- Tenant isolation: Clinical relationships include tenant ownership.
- Deterministic routing: Urgency is derived only from the versioned route.
- Human accountability: Models cannot clear risk, dismiss signals, or authorize Care.
- Minimum necessary context: Read and model records exclude raw answers and identity.
- Knowledge time: Effective and recorded times remain separate and append-only.
- Reproducibility: The fixture, protocol, analysis plan, and renderer are versioned.

## Audit and adverse cases

Audit evidence is complete for 48 of 48 cases. 24 of 24 declared adverse cases passed their expected boundary.

## Evidence boundary and access

Authorized reviewers inspect the complete versioned evidence. Licensed instrument configurations are activated through the governed instrument registry.

The reported measures are exact conformance results over the fixed 48-case fixture set. Instrument- and population-specific clinical evaluation uses its own reviewed protocol.

See `contracts/benchmarks/first-light/v2/evidence-boundary.md` for the measurement boundary carried with this pack.
