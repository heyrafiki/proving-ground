# Affective Dynamics research protocol

Version: 0.1.0  
Reviewed: 20 August 2026  
Status: public protocol for review

## Purpose

This protocol evaluates descriptive longitudinal context built from repeated
affective observations. It asks whether a person-relative, time-aware view can
preserve useful information under irregular sampling while remaining
interpretable, consent-governed and reconstructable.

The protocol does not evaluate Diagnosis, autonomous clinical decisions,
deterioration alerts or treatment outcomes.

## Scientific basis

The established literature distinguishes several properties of a repeated
affective series:

- within-person mean describes average level;
- within-person variance describes dispersion without temporal order;
- successive-difference measures retain adjacent change;
- lag-one autocorrelation describes persistence when the timing and variance of
  the series support interpretation.

These measures answer different questions and depend on the Instrument,
timescale, sampling design, missingness and measurement reliability. The
protocol therefore compares the proposed view with competent implementations
of simpler summaries rather than assuming that additional dynamics add useful
information.

## Research question

Can a consent-governed, person-relative longitudinal view preserve useful
information about change under irregular sampling while remaining more
interpretable and auditable than standard summary measures alone?

## Comparators

| ID | Comparator | Purpose |
| --- | --- | --- |
| B0 | Within-person mean and variance | Establish the value of the simplest descriptive summary |
| B1 | MSSD and lag-one autocorrelation on regular intervals | Compare standard order-sensitive summaries where their assumptions hold |
| B2 | Time-aware successive-change summary | Test whether elapsed time changes the descriptive result |
| B3 | Person-relative governed view | Test the combined longitudinal and review boundary |

Every comparator receives the same eligible observations and declared
knowledge cutoff. Missing observations remain missing.

## Synthetic case families

The committed fixture covers:

1. a regular shift and observed return;
2. a sparse series;
3. irregular intervals;
4. a declared missing observation;
5. a constant series;
6. a changing personal baseline;
7. a recorded-time cutoff;
8. Consent withdrawal; and
9. a cross-tenant request.

The fixture declares expected availability and boundary outcomes, not clinical
labels. It contains no Person, clinical or payment data.

## Measures

- exactness of the decision to report, withhold or mark a measure
  not-interpretable;
- exact reconstruction at a declared recorded-time cutoff;
- visibility of missing observations;
- rate of unsupported recovery claims;
- disclosure after Consent withdrawal or a cross-tenant request; and
- Practitioner comprehension and interpretation accuracy in a separately
  approved review study.

## Failure criteria

The candidate fails if it imputes a missing observation without declaration,
reports inertia where timing or variance does not support it, invents recovery
outside the observed window, uses information recorded after the knowledge
cutoff, crosses a Consent or tenant boundary, writes an interpretation without
Practitioner review, or adds no reliable and decision-useful information over a
simpler comparator.

## Evaluation sequence

1. An independent reviewer checks the measurement and sampling assumptions.
2. The protocol, fixtures and comparator implementations are frozen.
3. Each implementation runs against the same eligible observations.
4. A second reviewer reproduces the machine-readable result.
5. Any clinical or population study receives its own Instrument, language,
   population, uncertainty and ethics protocol.

## Sources

- Jahng, Wood and Trull (2008), *Analysis of Affective Instability in
  Ecological Momentary Assessment*. <https://doi.org/10.1037/a0014173>
- Kuppens, Allen and Sheeber (2010), *Emotional Inertia and Psychological
  Maladjustment*. <https://doi.org/10.1177/0956797610372634>
- Houben, Van Den Noortgate and Kuppens (2015), *The Relation Between
  Short-Term Emotion Dynamics and Psychological Well-Being*.
  <https://doi.org/10.1037/a0038822>
- Dejonckheere et al. (2019), *Complex Affect Dynamics Add Limited Information
  to the Prediction of Psychological Well-Being*.
  <https://doi.org/10.1038/s41562-019-0555-0>
- McNeish et al. (2021), *Measurement in Intensive Longitudinal Data*.
  <https://doi.org/10.1080/10705511.2021.1915788>
- Schneider et al. (2023), *Estimating Reliabilities and Correcting for
  Sampling Error in Indices of Within-Person Dynamics*.
  <https://doi.org/10.3758/s13428-022-01995-1>
