import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const path = new URL(
  "../research/consent-aware-bitemporal-assurance-graph/protocol.json",
  import.meta.url,
);
const protocol = JSON.parse(await readFile(path, "utf8"));

assert.equal(protocol.schema_version, "1.0.0");
assert.equal(protocol.status, "draft_for_independent_review");
assert.equal(protocol.claim_state, "no_novelty_claim");
assert.equal(protocol.synthetic_data_only, true);
assert.equal(protocol.results_in_this_revision, false);
assert.ok(protocol.research_question.length > 40);
assert.deepEqual(
  protocol.baselines.map((baseline) => baseline.id),
  ["B0", "B1", "B2", "B3"],
);
assert.equal(new Set(protocol.metrics.map((metric) => metric.id)).size, protocol.metrics.length);
assert.equal(protocol.metrics.length >= 6, true);
assert.equal(protocol.prior_art.length >= 6, true);
assert.equal(protocol.review_gates.length >= 5, true);
assert.equal(protocol.failure_criteria.length >= 4, true);
assert.equal(
  protocol.review_gates.some((gate) => gate.required_before === "novelty_claim"),
  true,
);

console.log(
  `Research protocol boundary passed: ${protocol.baselines.length} baselines, ${protocol.metrics.length} metrics, ${protocol.review_gates.length} review gates.`,
);
