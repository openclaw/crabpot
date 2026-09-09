# Crabpot Execution Results

Generated: deterministic
Results dir: .crabpot/results

## Summary

| Metric                       | Value    |
| ---------------------------- | -------- |
| Artifacts                    | 22       |
| Capture artifacts            | 8        |
| Synthetic artifacts          | 8        |
| Audit artifacts              | 5        |
| Profile artifacts            | 1        |
| Captured registrations/hooks | 67       |
| Audit findings               | 3        |
| Execution wall               | 35752 ms |
| Max peak RSS                 | 495.1 MB |
| Max CPU estimate             | 9250 ms  |
| Pass                         | 79       |
| Fail                         | 0        |
| Blocked                      | 20       |

## Artifacts

| Fixture                | Kind      | Status             | Entrypoint                                          | Result                         | Artifact                                                                                                                                                    |
| ---------------------- | --------- | ------------------ | --------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brave-plugin           | capture   | captured           | index.ts                                            | 1 captured                     | .crabpot/results/brave-plugin/cold-import-extension-brave-plugin-plugins-brave-plugin-crabpot-package-index-ts.capture.json                                 |
| brave-plugin           | synthetic | captured           | .crabpot/workspaces/brave-plugin/index.ts           | 1 pass / 0 fail / 0 blocked    | .crabpot/results/brave-plugin/cold-import-extension-brave-plugin-plugins-brave-plugin-crabpot-package-index-ts.synthetic.json                               |
| codex                  | capture   | captured           | index.ts                                            | 28 captured                    | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json                                                      |
| codex                  | synthetic | captured           | .crabpot/workspaces/codex/index.ts                  | 23 pass / 0 fail / 5 blocked   | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| codex                  | audit     | warning            | -                                                   | 0 audit findings               | .crabpot/results/codex/package-audit.json                                                                                                                   |
| diagnostics-prometheus | capture   | captured           | index.ts                                            | 2 captured                     | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json   |
| diagnostics-prometheus | synthetic | captured           | .crabpot/workspaces/diagnostics-prometheus/index.ts | 0 pass / 0 fail / 2 blocked    | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json |
| diffs                  | capture   | captured           | index.ts                                            | 3 captured                     | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json                                                      |
| diffs                  | synthetic | captured           | .crabpot/workspaces/diffs/index.ts                  | 1 pass / 0 fail / 2 blocked    | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json                                                    |
| diffs                  | audit     | warning            | -                                                   | 0 audit findings               | .crabpot/results/diffs/package-audit.json                                                                                                                   |
| google-meet            | capture   | captured           | index.ts                                            | 21 captured                    | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.capture.json                                    |
| google-meet            | synthetic | captured           | .crabpot/workspaces/google-meet/index.ts            | 50 pass / 0 fail / 3 blocked   | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | audit     | warning            | -                                                   | 0 audit findings               | .crabpot/results/google-meet/package-audit.json                                                                                                             |
| memory-lancedb         | capture   | captured           | index.ts                                            | 9 captured                     | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json                           |
| memory-lancedb         | synthetic | captured           | .crabpot/workspaces/memory-lancedb/index.ts         | 4 pass / 0 fail / 5 blocked    | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json                         |
| memory-lancedb         | audit     | warning            | -                                                   | 3 audit findings               | .crabpot/results/memory-lancedb/package-audit.json                                                                                                          |
| openclaw-beta          | profile   | pass               | -                                                   | 53 steps / 35752 ms / 495.1 MB | .crabpot/results/openclaw-beta/execution-profile.json                                                                                                       |
| whatsapp               | capture   | captured           | index.ts                                            | 3 captured                     | .crabpot/results/whatsapp/cold-import-extension-whatsapp-plugins-whatsapp-crabpot-package-index-ts.capture.json                                             |
| whatsapp               | synthetic | captured           | .crabpot/workspaces/whatsapp/index.ts               | 0 pass / 0 fail / 3 blocked    | .crabpot/results/whatsapp/cold-import-extension-whatsapp-plugins-whatsapp-crabpot-package-index-ts.synthetic.json                                           |
| whatsapp               | capture   | no-register-export | setup-entry.ts                                      | 0 captured                     | .crabpot/results/whatsapp/cold-import-setupEntry-whatsapp-plugins-whatsapp-crabpot-package-setup-entry-ts.capture.json                                      |
| whatsapp               | synthetic | no-register-export | .crabpot/workspaces/whatsapp/setup-entry.ts         | 0 pass / 0 fail / 0 blocked    | .crabpot/results/whatsapp/cold-import-setupEntry-whatsapp-plugins-whatsapp-crabpot-package-setup-entry-ts.synthetic.json                                    |
| whatsapp               | audit     | warning            | -                                                   | 0 audit findings               | .crabpot/results/whatsapp/package-audit.json                                                                                                                |

## Blocked Synthetic Probes

| Fixture                | Kind         | Seam                             | Label                            | Reason                                                    | Artifact                                                                                                                                                    |
| ---------------------- | ------------ | -------------------------------- | -------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| codex                  | registration | registerService                  | registerService                  | captured registration requires includeLifecycle=true      | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| codex                  | registration | registerService                  | registerService                  | captured registration requires includeLifecycle=true      | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| codex                  | registration | registerCli                      | registerCli                      | captured registration has no supported callable probe     | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| codex                  | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| codex                  | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| diagnostics-prometheus | registration | registerService                  | registerService                  | captured registration requires includeLifecycle=true      | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json |
| diagnostics-prometheus | registration | registerHttpRoute                | registerHttpRoute.handler        | captured HTTP route probe requires route descriptor input | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json |
| diffs                  | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json                                                    |
| diffs                  | registration | registerHttpRoute                | registerHttpRoute.handler        | captured HTTP route probe requires route descriptor input | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json                                                    |
| google-meet            | registration | registerTranscriptSourceProvider | registerTranscriptSourceProvider | captured registration has no execution profile            | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerCli                      | registerCli                      | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| memory-lancedb         | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json                         |
| memory-lancedb         | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json                         |
| memory-lancedb         | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json                         |
| memory-lancedb         | registration | registerCli                      | registerCli                      | captured registration has no supported callable probe     | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json                         |
| memory-lancedb         | registration | registerService                  | registerService                  | captured registration requires includeLifecycle=true      | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json                         |
| whatsapp               | registration | registerChannel                  | registerChannel                  | captured registration requires includeChannelRuntime=true | .crabpot/results/whatsapp/cold-import-extension-whatsapp-plugins-whatsapp-crabpot-package-index-ts.synthetic.json                                           |
| whatsapp               | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/whatsapp/cold-import-extension-whatsapp-plugins-whatsapp-crabpot-package-index-ts.synthetic.json                                           |
| whatsapp               | registration | registerTool                     | registerTool                     | captured registration has no supported callable probe     | .crabpot/results/whatsapp/cold-import-extension-whatsapp-plugins-whatsapp-crabpot-package-index-ts.synthetic.json                                           |

## Failed Synthetic Probes

_none_

## Dependency Audit Artifacts

| Fixture        | Findings | Vulnerabilities                                                 | Artifact                                           |
| -------------- | -------- | --------------------------------------------------------------- | -------------------------------------------------- |
| codex          | 0        | {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0} | .crabpot/results/codex/package-audit.json          |
| diffs          | 0        | {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0} | .crabpot/results/diffs/package-audit.json          |
| google-meet    | 0        | {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0} | .crabpot/results/google-meet/package-audit.json    |
| memory-lancedb | 3        | {"info":0,"low":0,"moderate":0,"high":3,"critical":0,"total":3} | .crabpot/results/memory-lancedb/package-audit.json |
| whatsapp       | 0        | {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0} | .crabpot/results/whatsapp/package-audit.json       |

## Execution Profiles

| Fixture       | Step    | Wall     | Peak RSS | CPU Estimate | Command                                         |
| ------------- | ------- | -------- | -------- | ------------ | ----------------------------------------------- |
| openclaw-beta | install | 10187 ms | 495.1 MB | 9250 ms      | npm install --ignore-scripts --legacy-peer-deps |
| openclaw-beta | install | 5007 ms  | 403.3 MB | 6100 ms      | npm install --ignore-scripts --legacy-peer-deps |
| openclaw-beta | install | 3596 ms  | 232.8 MB | 3398 ms      | npm install --ignore-scripts --legacy-peer-deps |
| openclaw-beta | install | 3496 ms  | 260.3 MB | 3311 ms      | npm install --ignore-scripts --legacy-peer-deps |
| openclaw-beta | install | 1947 ms  | 257 MB   | 2725 ms      | npm install --ignore-scripts --legacy-peer-deps |
