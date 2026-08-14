# Independent reviewer checklist

Version: 0.1.0

Status: open

The reviewer must not have authored the candidate graph, protocol, fixtures or
baseline implementations.

## Prior art

- [ ] Re-run and extend every query in `prior-art-search.md`.
- [ ] Search scholarly, standards and patent sources beyond the author search.
- [ ] Build an element-by-element claim chart for the closest records.
- [ ] Record inclusion, exclusion and uncertainty decisions with stable links.
- [ ] Decide whether the candidate should proceed, narrow or stop.

## Protocol and baselines

- [ ] Confirm that `Q(G,V,K,O,T,S,P,C)` has an unambiguous expected result.
- [ ] Confirm that `deny` and `unresolved` cannot be relabeled after evaluation.
- [ ] Review B0 to B4 for competent, non-deliberately weakened implementations.
- [ ] Confirm the same information budget and scenario-query pairs for each system.
- [ ] Approve the held-out generator, sample counts, seeds and mutation families.
- [ ] Approve the co-primary measures and multiplicity correction.

## Data and safety

- [ ] Confirm every fixture is synthetic or independently releasable.
- [ ] Confirm no identity, clinical content, payment credential or private policy is present.
- [ ] Confirm minimum-necessary disclosure allowlists and cross-tenant failures.
- [ ] Confirm the protocol makes no clinical, diagnostic, actuarial or population claim.

## Freeze and reproduction

- [ ] Record the protocol commit and SHA-256 artifact manifest.
- [ ] Run `npm ci && npm test` from a clean checkout on Node.js 22 and 24.
- [ ] Sign the baseline and fixture freeze before evaluation begins.
- [ ] Assign a second independent reproducer for the final result package.

## Decision

Reviewer:

Affiliation or declared expertise:

Conflicts of interest:

Decision: `proceed` / `revise` / `stop`

Rationale:

Reviewed commit:

Date:
