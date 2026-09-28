import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const requiredHeaders = [
  "Strict-Transport-Security",
  "Content-Security-Policy",
  "X-Frame-Options",
  "X-Content-Type-Options",
  "Referrer-Policy",
  "Cross-Origin-Opener-Policy",
  "Cross-Origin-Resource-Policy",
  "Permissions-Policy"
];

test("Special Access keeps code-gated pages protected by security headers", async () => {
  const source = await readFile(new URL("../index.js", import.meta.url), "utf8");

  for (const header of requiredHeaders) {
    assert.match(source, new RegExp(`["']${header}["']`), `${header} is missing`);
  }

  assert.match(source, /frame-ancestors 'none'/, "Special Access pages should not be frameable");
  assert.match(source, /payment=\(\)/, "Special Access should not expose browser payment permissions");
  assert.match(source, /Response\.json\(\{ ok: true/, "Status endpoint should remain explicit and simple");
});
