// One Sentence for a Traveler from 1800 — make.fun entry.
// Writes one sentence (157 chars) explaining the modern internet to a
// traveler from 1800, using only things they would already know:
// post office, library, market stall, road, letter, book.
// Pure Node standard library only; deterministic; no network, no paid APIs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Imagine every post office, library, and market stall in the world joined by one road, so any letter, book, or bargain reaches your door before the ink dries.";

if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error("entry must be 1-200 characters, got " + SENTENCE.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
