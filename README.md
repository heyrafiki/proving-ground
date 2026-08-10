# Proving Ground

Executable conformance evidence for the Heyrafiki contract.

Proving Ground turns institutional requirements into tests that engineers,
actuaries, payers and reviewers can run from the same versioned evidence. The
current suites cover public-contract accountability, Claim financial identity,
bitemporal valuation and adversarial failure handling.

## Run the benchmark

Requires Node.js 22 or newer.

```bash
git clone https://github.com/heyrafiki/proving-ground.git
cd proving-ground
npm ci
npm test
```

A passing run verifies:

| Suite | Evidence |
| --- | --- |
| Contract coverage | OpenAPI validity, unique operations, authentication, typed errors and accountable capability ownership |
| Financial identity | Integer minor units, balanced Claim lines, remittance allocation and settlement separation |
| Bitemporal valuation | Effective time, recorded time, no future knowledge and reproducible as-of liability |
| Adversarial mutations | Duplicate, reordered, future-known, unbalanced and over-settled evidence is rejected |

## Read the result

The reference fixture records seven Claim events in KES and reproduces the
liability position as of each knowledge boundary. The benchmark rejects five
deliberate mutations before they can enter the trusted evidence chain.

The machine-readable result contract is in
[`benchmark/manifest.json`](./benchmark/manifest.json). Pinned artifact hashes
and the source contract revision are in
[`contract-lock.json`](./contract-lock.json).

## Add an institutional scenario

1. Start from the smallest fixture that expresses the operating rule.
2. Record amounts in integer minor units and keep advice separate from observed settlement.
3. Record both effective and recorded time for every Claim event.
4. Add the expected invariant and at least one mutation that must fail.
5. Run `npm test` and include the result in the pull request.

Scenarios use fictitious identifiers and contain no personal, clinical or
payment credentials.

## Contract

The canonical public API contract lives in
[`heyrafiki/contract`](https://github.com/heyrafiki/contract). Proving Ground
pins a reviewed snapshot so every benchmark run is independently reproducible.

## Security

Report vulnerabilities through the
[Heyrafiki security policy](https://github.com/heyrafiki/.github/blob/main/SECURITY.md).

## License

Licensed under the [Apache License 2.0](./LICENSE).
