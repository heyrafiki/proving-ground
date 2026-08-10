# First Light conformance benchmark methodology

Version: 2.0.0
Reviewed: 2026-08-10

## Purpose

The benchmark verifies how a consented synthetic Assessment moves through deterministic routing, an isolated Practitioner review queue, accountable review, authorized follow-up, longitudinal evidence, dual review, and a reproducible evidence pack. Screening remains distinct from Diagnosis.

The cohort contains 48 versioned fixtures across self, caregiver, and Practitioner responder paths. English and Swahili values exercise language provenance without introducing questionnaire wording or Person data.

## Reference labels and metrics

Each case declares whether its reference label requires review. The deterministic route is compared with that label to report a confusion matrix, sensitivity, specificity, positive predictive value, negative predictive value, balanced accuracy, unresolved rate, review override rate, and time to review. These are exact conformance measures over the fixed fixture set. Instrument- and population-specific clinical evaluation uses its own reviewed protocol.

Unresolved cases remain in the cohort and are excluded from classification denominators. The report publishes exact counts and rates for the complete fixed cohort; statistical uncertainty belongs to population studies.

## Dual review

Two distinct synthetic Practitioner reviewers assign nominal dispositions independently and without seeing each other's disposition. Disagreements receive a separately declared adjudicated disposition. Exact agreement is always reported for complete pairs. Cohen's kappa is reported only when two-reviewer nominal-category assumptions are satisfied and expected agreement is below one, following Jacob Cohen's original method: https://doi.org/10.1177/001316446002000104.

## Safety and privacy

Deterministic code produces the route. Models receive only score, route, instrument version, scoring-rule version, responder role, language, and evidence references. They may draft questions for a Practitioner. They cannot clear risk, authorize Care, dismiss a signal, or write workflow state.

The adverse cases cover missingness, contradictory responders, late amendments, Consent revocation, stale review, language mismatch, prompt injection, tenant crossing, unsafe reassurance, false-positive and false-negative references, crisis boundaries, and idempotency conflicts.

## Reproduction

Run `npm run first-light:pilot-evidence`. The command writes the machine-readable benchmark result and Pilot Evidence Pack from the committed fixture and protocol versions. Two runs must produce identical bytes.
