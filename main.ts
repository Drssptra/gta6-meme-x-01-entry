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
// fails, or POST.json is not valid JSON naming an X status URL, it prints
// an error and exits 1.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const postPath = join(botDir, 'POST.json');

// Validate POST.json before copying: it must be valid JSON whose `url` is
// an X (or twitter.com) status URL, e.g.
// https://x.com/<handle>/status/<digits>. A bad address would send the
// judge to a dead or wrong post, so fail loudly instead of copying it.
const postUrlPattern = /^https:\/\/(?:x\.com|twitter\.com)\/[^/]+\/status\/\d+\/?$/;

let post: unknown;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (error) {
  console.error(`Invalid POST.json in ${botDir}: not valid JSON (${(error as Error).message})`);
  process.exit(1);
}

const url = (post as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !postUrlPattern.test(url)) {
  console.error(
    `Invalid POST.json in ${botDir}: "url" must be an X status URL like https://x.com/<handle>/status/<digits>, got ${JSON.stringify(url)}`,
  );
  process.exit(1);
}

try {
  copyFileSync(postPath, join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
