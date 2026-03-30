#!/usr/bin/env node
/**
 * Downloads PNGs from Figma MCP asset URLs (from get_design_context) into public/images/.
 *
 * Source file: https://www.figma.com/design/jCEJaq0fMgj1i9tF1gLCaF/Madi-Wilkerson
 *
 * Re-run after ~7 days if MCP asset URLs expire, or export from Figma manually.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images");

/** Maps public/images filename → Figma MCP asset URL from the design file */
const ASSET_URLS = {
  "background-blue.png":
    "https://www.figma.com/api/mcp/asset/12eca0b9-e3c9-4ae8-816c-025e85022399",
  "background-aquarium.png":
    "https://www.figma.com/api/mcp/asset/9c66366a-93dc-4121-bbe2-a457ba124b3c",
  "neon-tetra.png":
    "https://www.figma.com/api/mcp/asset/8315b2de-bb51-4750-8e72-b772742014ab",
  "kuhli-loach.png":
    "https://www.figma.com/api/mcp/asset/9f60b0b3-014f-418e-a282-f243ae6e7745",
  "guppy.png":
    "https://www.figma.com/api/mcp/asset/8dfd8214-b082-404c-83e2-08b7342646ab",
  "goldfish.png":
    "https://www.figma.com/api/mcp/asset/7d3f494d-332e-4cb9-880f-6548d26ce90a",
  "corydora.png":
    "https://www.figma.com/api/mcp/asset/632a3d5b-6aea-42cd-9171-c038b1a1e4ae",
  "angelfish.png":
    "https://www.figma.com/api/mcp/asset/22ac12c6-5209-4293-bfac-1237c6888428",
  "list-bubble.png":
    "https://www.figma.com/api/mcp/asset/49cb8ea7-9a7b-4ac5-bd5a-8ace6ae9a0c8",
  "bubble-button.png":
    "https://www.figma.com/api/mcp/asset/0f570fe7-fdb1-4175-83c7-971d9b45b730",
  "bubble-button-lines.png":
    "https://www.figma.com/api/mcp/asset/e7a15c1f-2dfe-47c6-8bc2-70277e39a5ed",
  "bubble-button-2.png":
    "https://www.figma.com/api/mcp/asset/3b5d70e6-ee2d-40e3-ac77-93c83d97fbfd",
  "bubble-button-3.png":
    "https://www.figma.com/api/mcp/asset/1c807052-921a-43af-90f0-c42d9815ee44",
  /** No separate "X" layer in the published file; uses menu icon as close — replace via Figma export if needed */
  "bubble-button-x.png":
    "https://www.figma.com/api/mcp/asset/e7a15c1f-2dfe-47c6-8bc2-70277e39a5ed",
  "seaweed.png":
    "https://www.figma.com/api/mcp/asset/f196032f-1c94-4ab8-98d6-b9d4779d1774",
  "finventory-title.png":
    "https://www.figma.com/api/mcp/asset/e8b14cfe-6a26-4c13-9519-abc76b6133c5",
  /** Horizontal sprite used with different object-position on detail screens */
  "fish-title-generic.png":
    "https://www.figma.com/api/mcp/asset/14c2f10b-3c16-4827-a615-160d169e62b9",
  "neon-tetra-title.png":
    "https://www.figma.com/api/mcp/asset/e83927ee-0883-4017-b265-3eb8b8fc949c",
  "kuhli-loach-title.png":
    "https://www.figma.com/api/mcp/asset/bb17f91a-249f-4586-995a-08fab84d30d2",
};

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  let ok = 0;
  for (const [filename, url] of Object.entries(ASSET_URLS)) {
    const dest = path.join(outDir, filename);
    process.stdout.write(`Fetching ${filename}... `);
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`HTTP ${res.status}`);
      process.exitCode = 1;
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`${buf.length} bytes`);
    ok++;
  }
  console.log(`\nDone. Wrote ${ok} file(s) to public/images/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
