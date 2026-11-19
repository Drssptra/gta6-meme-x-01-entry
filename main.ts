// gta6-meme-x-01 entry — Node 22, standard library only.
//
// The entry itself is an X post: a GTA 6 meme picture posted from a public
// X account. This program does the one thing the grader needs from the
// repository: it copies POST.json (which names the post's address) from the
// repository root into the output directory, where the house reads it and
// builds the dossier the judge sees.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output. On success it prints nothing and exits 0; if the copy
// fails it prints an error and exits 1.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
