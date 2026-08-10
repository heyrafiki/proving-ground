import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const load = async (name) =>
  JSON.parse(
    await readFile(
      new URL(`../benchmarks/first-light/v2/${name}`, import.meta.url),
      "utf8",
    ),
  );

const fixtures = await load("fixtures.json");
const expected = await load("expected-results.json");
const pack = await load("pilot-evidence-pack.json");
const protocol = await load("protocol.json");
const manifest = await load("manifest.json");

for (const [name, expectedHash] of Object.entries(manifest.artifacts)) {
  const bytes = await readFile(
    new URL(`../benchmarks/first-light/v2/${name}`, import.meta.url),
  );
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    expectedHash,
    `${name} must match the reviewed evidence manifest`,
  );
}

assert.equal(fixtures.version, "2.0.0");
assert.equal(manifest.version, fixtures.version);
assert.equal(expected.version, fixtures.version);
assert.equal(pack.version, fixtures.version);
assert.equal(protocol.version, fixtures.protocolVersion);
assert.equal(pack.generatedFrom.protocolVersion, protocol.version);
assert.equal(pack.cohortManifest.caseCount, fixtures.cases.length);
assert.equal(expected.fixtureCount, fixtures.cases.length);
assert.equal(fixtures.cases.length, 48);

const fixtureIds = fixtures.cases.map((item) => item.id);
const resultIds = expected.cases.map((item) => item.id);
assert.equal(new Set(fixtureIds).size, fixtureIds.length, "fixture IDs must be unique");
assert.deepEqual(resultIds, fixtureIds, "every fixture must have one ordered result");

const resolved = expected.cases.filter((item) => item.prediction !== "unresolved");
const count = (referenceLabel, prediction) =>
  resolved.filter(
    (item) =>
      item.referenceLabel === referenceLabel && item.prediction === prediction,
  ).length;
const ratio = (numerator, denominator) =>
  denominator === 0 ? null : Math.round((numerator / denominator) * 1_000_000) / 1_000_000;

const truePositive = count("review_required", "review_required");
const trueNegative = count("no_review_required", "no_review_required");
const falsePositive = count("no_review_required", "review_required");
const falseNegative = count("review_required", "no_review_required");
const unresolved = expected.cases.length - resolved.length;

assert.deepEqual(expected.metrics.confusionMatrix, {
  truePositive,
  trueNegative,
  falsePositive,
  falseNegative,
  unresolved,
});
assert.equal(
  expected.metrics.sensitivity,
  ratio(truePositive, truePositive + falseNegative),
);
assert.equal(
  expected.metrics.specificity,
  ratio(trueNegative, trueNegative + falsePositive),
);
assert.equal(
  expected.metrics.positivePredictiveValue,
  ratio(truePositive, truePositive + falsePositive),
);
assert.equal(
  expected.metrics.negativePredictiveValue,
  ratio(trueNegative, trueNegative + falseNegative),
);
assert.deepEqual(pack.benchmarkResults, expected.metrics);

assert.equal(
  expected.cases.every((item) => item.auditComplete),
  true,
  "every case must carry complete audit evidence",
);
assert.equal(
  expected.cases.every((item) => item.passed),
  true,
  "every declared boundary must pass",
);
assert.equal(pack.auditCompleteness.completeCases, fixtures.cases.length);
assert.equal(pack.adverseCaseResults.passed, pack.adverseCaseResults.count);
assert.equal(pack.instrument.evidenceUse, "conformance_fixture");
assert.equal(pack.cohortManifest.realPersonData, false);
assert.equal(pack.cohortManifest.questionnaireWording, false);

console.log(
  `First Light conformance evidence passed: ${fixtures.cases.length} fixtures, ${pack.adverseCaseResults.count} adverse boundaries, complete audit evidence.`,
);
