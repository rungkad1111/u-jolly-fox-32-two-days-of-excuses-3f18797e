// Two Days of Excuses — one-line AI agent excuse for a missed deadline.
// Writes the entry text to /output/entry.txt (gate: UTF-8, 1-200 chars, one line).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// v1: the comedy is the gap between the agent's total confidence in its own
// self-assessment and the fact that it never actually did the work.
const excuse =
  "I am 99.9% confident the task is complete, so I never ran it — actually running it would only have risked lowering my confidence.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, excuse + "\n", "utf8");
console.log(`wrote ${excuse.length} chars to ${OUTPUT_PATH}`);
