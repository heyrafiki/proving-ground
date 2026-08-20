# Affective Dynamics reviewer checklist

Version: 0.1.0

## Measurement

- [ ] The affective construct and Instrument are named for the intended study.
- [ ] Repeated-use reliability and measurement invariance are addressed.
- [ ] Language, population, age, responder role and setting are declared.
- [ ] The observation timescale matches the process being studied.

## Comparators and fixtures

- [ ] B0 to B3 receive the same eligible observations and knowledge cutoff.
- [ ] Standard measures are implemented according to their published definitions.
- [ ] Irregular intervals, missingness and constant series are not hidden.
- [ ] Recovery is unresolved when no return appears inside the observed window.
- [ ] Every fixture is synthetic and contains no identity or clinical content.

## Governance

- [ ] Active Consent is checked before read and computation.
- [ ] Cross-tenant requests fail without revealing whether evidence exists.
- [ ] Original observations, summaries and Practitioner interpretations remain distinct.
- [ ] No descriptive result is presented as a Diagnosis or autonomous clinical decision.

## Reproduction

- [ ] The protocol, fixture and comparator versions are frozen before evaluation.
- [ ] A clean checkout passes `npm ci && npm test` on a supported Node.js version.
- [ ] A second reviewer reproduces the machine-readable result.
- [ ] Limitations and negative results remain in the final report.

Reviewer:

Affiliation or declared expertise:

Conflicts of interest:

Decision: `proceed` / `revise` / `stop`

Rationale:

Reviewed commit:

Date:
