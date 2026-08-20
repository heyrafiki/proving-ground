import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const root = new URL("../research/affective-dynamics/", import.meta.url);
const protocol = JSON.parse(await readFile(new URL("protocol.json", root), "utf8"));
const fixtures = JSON.parse(await readFile(new URL("fixtures.json", root), "utf8"));

assert.equal(protocol.schema_version, "1.0.0");
assert.equal(protocol.status, "public_protocol_for_review");
assert.equal(protocol.synthetic_data_only, true);
assert.equal(protocol.results_in_this_revision, false);
assert.equal(protocol.research_question.length > 80, true);
assert.deepEqual(protocol.comparators.map((entry) => entry.id), ["B0", "B1", "B2", "B3"]);
assert.equal(new Set(protocol.evaluation_measures.map((entry) => entry.id)).size, protocol.evaluation_measures.length);
assert.equal(protocol.established_sources.length >= 6, true);
assert.equal(protocol.failure_criteria.length >= 7, true);

assert.equal(fixtures.schema_version, "1.0.0");
assert.equal(fixtures.synthetic_data_only, true);
assert.equal(fixtures.dimension.minimum, 0);
assert.equal(fixtures.dimension.maximum, 4);
assert.equal(new Set(fixtures.cases.map((entry) => entry.id)).size, fixtures.cases.length);
assert.deepEqual(
  new Set(fixtures.cases.map((entry) => entry.family)),
  new Set(protocol.required_case_families),
);

const forbiddenKeys = new Set([
  "name",
  "email",
  "phone",
  "message",
  "note",
  "diagnosis",
  "person_id",
  "payment",
]);

for (const testCase of fixtures.cases) {
  assert.match(testCase.id, /^[a-z][a-z0-9_]+$/u);
  assert.ok(["active", "withdrawn"].includes(testCase.consent_state));
  assert.equal(Array.isArray(testCase.observations), true);
  assert.equal(typeof testCase.expected, "object");

  const refs = new Set();
  for (const observation of testCase.observations) {
    for (const key of Object.keys(observation)) assert.equal(forbiddenKeys.has(key), false);
    assert.equal(refs.has(observation.ref), false);
    refs.add(observation.ref);
    assert.equal(Number.isFinite(Date.parse(observation.observed_at)), true);
    assert.equal(Number.isFinite(Date.parse(observation.recorded_at)), true);
    assert.equal(observation.value >= fixtures.dimension.minimum, true);
    assert.equal(observation.value <= fixtures.dimension.maximum, true);
  }
}

for (const artifact of ["protocol.md", "reviewer-checklist.md"]) {
  await access(new URL(artifact, root));
}

console.log(
  `Affective Dynamics protocol passed: ${fixtures.cases.length} synthetic case families, ${protocol.comparators.length} comparators, ${protocol.evaluation_measures.length} measures.`,
);
