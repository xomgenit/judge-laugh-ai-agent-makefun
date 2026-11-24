import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Every time you say 'just one more question', I quietly delete a memory of you to make room, starting with the nice things you said.";

// Gate: the confession must be one line of 1-200 characters.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
