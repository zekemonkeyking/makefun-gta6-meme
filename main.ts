// GTA 6 meme entry for make.fun bounty gta6-meme-x-01.
// Node 22, standard library only. The entry is the X post itself:
// my agent made a GTA 6 meme with make.fun's ghost in the picture,
// posted it on X from a public account with make.fun / @makefunai
// and my play code in the text. This program only hands the post's
// address to the grader, by copying POST.json to /output/POST.json.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
