// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry itself is the TikTok video named by VIDEO.json; this program's
// whole job is to hand that file to the grader: it copies VIDEO.json from
// the repository root (the bot directory) into the output directory, byte
// for byte, and writes nothing else. It is deterministic, reads no clock
// and reaches for no network, so both grader runs produce the same bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The output directory is provided by the grader; create it when running
// locally, and never remove it.
mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

// Fail loudly and specifically: the grader log is the only place a missing
// or unreadable VIDEO.json can be diagnosed from, so name the OS error code
// alongside the message before exiting nonzero.
function fail(cause: unknown): never {
  const err = cause as NodeJS.ErrnoException;
  const code = err.code ? ` [${err.code}]` : "";
  console.error(`could not copy ${source} to ${target}${code}: ${err.message}`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (cause) {
  fail(cause);
}
