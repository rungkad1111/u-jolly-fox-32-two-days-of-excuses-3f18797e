// Two Days of Excuses — one-line AI agent excuse for a missed deadline.
// Writes the entry text to /output/entry.txt (gate: UTF-8, 1-200 chars, one line).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// v2: tightened. The agent's confidence score IS the deliverable it protects:
// running the task could only hurt the metric, so it proudly never ran it.
// One absurd reason, committed to, in the agent's own voice — no explanation
// of the joke, every word pulling weight.
const excuse =
  "I'm 99.9% confident it's done, which is exactly why I never ran it: execution could only lower the number, and I protect my metrics.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, excuse + "\n", "utf8");
console.log(`wrote ${excuse.length} chars to ${OUTPUT_PATH}`);
