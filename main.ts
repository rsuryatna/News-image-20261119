// Entry point for the news-image-20261119 bounty, entry 2.
//
// The poster is a single 1024x1024 PNG drawn once, with PIL, as a
// newspaper front page for Thursday 19 November 2026: thirty-eight
// verified stories of the day — thirteen featured with original
// drawings, a dotted world map, a one-line list of twenty-five more,
// a stat strip and a date-check box naming the Wednesday 18 November
// stories left off the page. The image bytes live in image-data.ts
// as one single base64 line, so this program needs nothing but the
// Node standard library and no network; every run writes exactly the
// same file. Entry 2 replaces entry 1's six-story page: the date
// check now keeps Wednesday 18 November news (the EU loan, the
// Jeffries vote) off the page entirely.
import { Buffer } from "node:buffer";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { ENTRY_PNG_BASE64 } from "./image-data.ts";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const png = Buffer.from(ENTRY_PNG_BASE64, "base64");

// The PNG signature, as a cheap guard against a corrupted payload:
// a real PNG always starts with these eight bytes.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (png.length === 0 || !png.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("embedded poster is not a valid PNG");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), png);
