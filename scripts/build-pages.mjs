import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const result = spawnSync(process.execPath, [
  path.join(root, "node_modules/next/dist/bin/next"), "build", "--webpack",
], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, GITHUB_PAGES: "true", NEXT_PUBLIC_BASE_PATH: "/SineBarro", NEXT_TELEMETRY_DISABLED: "1" },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const output = path.join(root, "out");
const html = readFileSync(path.join(output, "index.html"), "utf8");
if (!html.includes("/SineBarro/hero.jpg") || !html.includes("/SineBarro/favicon.svg")) {
  throw new Error("The static export must use the GitHub Pages asset prefix.");
}
for (const match of html.matchAll(/(?:src|href)="(\/SineBarro\/[^"?#]+)"/g)) {
  if (!existsSync(path.join(output, decodeURIComponent(match[1].slice("/SineBarro/".length))))) {
    throw new Error(`Missing exported asset: ${match[1]}`);
  }
}
writeFileSync(path.join(output, ".nojekyll"), "");
console.log("GitHub Pages export verified: out");
