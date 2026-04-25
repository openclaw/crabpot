#!/usr/bin/env node
import { readManifest } from "./manifest-lib.mjs";

const manifest = await readManifest();

const rows = manifest.fixtures.map((fixture) => ({
  id: fixture.id,
  priority: fixture.priority,
  seams: fixture.seams.join(","),
  path: fixture.path,
}));

console.table(rows);

