# Contributing

Open an issue before changing a benchmark invariant or evidence schema. Pull
requests include the operating rule, its source, a passing scenario and at
least one mutation that must fail.

Use fictitious identifiers. Never submit personal, clinical, authentication or
payment data.

Run `npm ci`, `npm run verify:lock` and `npm test` before opening the pull
request. Update `contract-lock.json` only with the reviewed contract revision
that produced each copied artifact.
