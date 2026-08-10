import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const lock = JSON.parse(await readFile(new URL("contract-lock.json", root), "utf8"));

assert.match(lock.revision, /^[0-9a-f]{40}$/, "Contract revision must be a full Git commit");

for (const [path, expected] of Object.entries(lock.artifacts)) {
  const content = await readFile(new URL(path, root));
  const actual = createHash("sha256").update(content).digest("hex");
  assert.equal(actual, expected, `${path} differs from its reviewed contract snapshot`);
}

console.log(`Contract lock passed: ${Object.keys(lock.artifacts).length} reviewed artifacts.`);
