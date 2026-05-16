# Crabpot Execution Results

Generated: deterministic
Results dir: .crabpot/results

## Summary

| Metric                       | Value    |
| ---------------------------- | -------- |
| Artifacts                    | 27       |
| Capture artifacts            | 10       |
| Synthetic artifacts          | 10       |
| Audit artifacts              | 6        |
| Profile artifacts            | 1        |
| Captured registrations/hooks | 43       |
| Audit findings               | 0        |
| Execution wall               | 41093 ms |
| Max peak RSS                 | 351.4 MB |
| Max CPU estimate             | 13186 ms |
| Pass                         | 10       |
| Fail                         | 0        |
| Blocked                      | 33       |

## Artifacts

| Fixture                | Kind      | Status             | Entrypoint     | Result                         | Artifact                                                                                                                                                    |
| ---------------------- | --------- | ------------------ | -------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brave-plugin           | capture   | captured           | index.ts       | 1 captured                     | .crabpot/results/brave-plugin/cold-import-extension-brave-plugin-plugins-brave-plugin-crabpot-package-index-ts.capture.json                                 |
| brave-plugin           | synthetic | captured           | index.ts       | 1 pass / 0 fail / 0 blocked    | .crabpot/results/brave-plugin/cold-import-extension-brave-plugin-plugins-brave-plugin-crabpot-package-index-ts.synthetic.json                               |
| codex                  | capture   | captured           | index.ts       | 11 captured                    | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json                                                      |
| codex                  | synthetic | captured           | index.ts       | 8 pass / 0 fail / 3 blocked    | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| codex                  | audit     | warning            | -              | 0 audit findings               | .crabpot/results/codex/package-audit.json                                                                                                                   |
| diagnostics-prometheus | capture   | captured           | index.ts       | 2 captured                     | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json   |
| diagnostics-prometheus | synthetic | captured           | index.ts       | 0 pass / 0 fail / 2 blocked    | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json |
| diffs                  | capture   | captured           | index.ts       | 3 captured                     | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json                                                      |
| diffs                  | synthetic | captured           | index.ts       | 0 pass / 0 fail / 3 blocked    | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json                                                    |
| diffs                  | audit     | warning            | -              | 0 audit findings               | .crabpot/results/diffs/package-audit.json                                                                                                                   |
| google-meet            | capture   | captured           | index.ts       | 18 captured                    | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.capture.json                                    |
| google-meet            | synthetic | captured           | index.ts       | 1 pass / 0 fail / 17 blocked   | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | audit     | warning            | -              | 0 audit findings               | .crabpot/results/google-meet/package-audit.json                                                                                                             |
| memory-lancedb         | capture   | captured           | index.ts       | 1 captured                     | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json                           |
| memory-lancedb         | synthetic | captured           | index.ts       | 0 pass / 0 fail / 1 blocked    | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json                         |
| memory-lancedb         | audit     | warning            | -              | 0 audit findings               | .crabpot/results/memory-lancedb/package-audit.json                                                                                                          |
| openclaw-beta          | profile   | fail               | -              | 69 steps / 41093 ms / 351.4 MB | .crabpot/results/openclaw-beta/execution-profile.json                                                                                                       |
| openclaw-qqbot         | capture   | captured           | index.ts       | 6 captured                     | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.capture.json                           |
| openclaw-qqbot         | synthetic | captured           | index.ts       | 0 pass / 0 fail / 6 blocked    | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json                         |
| openclaw-qqbot         | capture   | no-register-export | setup-entry.ts | 0 captured                     | .crabpot/results/openclaw-qqbot/cold-import-setupEntry-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-setup-entry-ts.capture.json                    |
| openclaw-qqbot         | synthetic | no-register-export | setup-entry.ts | 0 pass / 0 fail / 0 blocked    | .crabpot/results/openclaw-qqbot/cold-import-setupEntry-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-setup-entry-ts.synthetic.json                  |
| openclaw-qqbot         | audit     | warning            | -              | 0 audit findings               | .crabpot/results/openclaw-qqbot/package-audit.json                                                                                                          |
| whatsapp               | capture   | captured           | index.ts       | 1 captured                     | .crabpot/results/whatsapp/cold-import-extension-whatsapp-plugins-whatsapp-crabpot-package-index-ts.capture.json                                             |
| whatsapp               | synthetic | captured           | index.ts       | 0 pass / 0 fail / 1 blocked    | .crabpot/results/whatsapp/cold-import-extension-whatsapp-plugins-whatsapp-crabpot-package-index-ts.synthetic.json                                           |
| whatsapp               | capture   | no-register-export | setup-entry.ts | 0 captured                     | .crabpot/results/whatsapp/cold-import-setupEntry-whatsapp-plugins-whatsapp-crabpot-package-setup-entry-ts.capture.json                                      |
| whatsapp               | synthetic | no-register-export | setup-entry.ts | 0 pass / 0 fail / 0 blocked    | .crabpot/results/whatsapp/cold-import-setupEntry-whatsapp-plugins-whatsapp-crabpot-package-setup-entry-ts.synthetic.json                                    |
| whatsapp               | audit     | warning            | -              | 0 audit findings               | .crabpot/results/whatsapp/package-audit.json                                                                                                                |

## Blocked Synthetic Probes

| Fixture                | Kind         | Seam                          | Label                         | Reason                                                    | Artifact                                                                                                                                                    |
| ---------------------- | ------------ | ----------------------------- | ----------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| codex                  | registration | registerCommand               | registerCommand               | captured registration has no supported callable probe     | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| codex                  | hook         | inbound_claim                 | inbound_claim                 | captured hook has no callable handler                     | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| codex                  | hook         | onConversationBindingResolved | onConversationBindingResolved | captured hook has no callable handler                     | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json                                                    |
| diagnostics-prometheus | registration | registerService               | registerService               | captured registration requires includeLifecycle=true      | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json |
| diagnostics-prometheus | registration | registerHttpRoute             | registerHttpRoute             | captured registration has no supported callable probe     | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json |
| diffs                  | registration | registerTool                  | registerTool                  | captured registration has no supported callable probe     | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json                                                    |
| diffs                  | registration | registerHttpRoute             | registerHttpRoute             | captured registration has no supported callable probe     | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json                                                    |
| diffs                  | hook         | before_prompt_build           | before_prompt_build           | captured hook has no callable handler                     | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json                                                    |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerGatewayMethod         | registerGatewayMethod         | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerTool                  | registerTool                  | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| google-meet            | registration | registerCli                   | registerCli                   | captured registration has no supported callable probe     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json                                  |
| memory-lancedb         | registration | registerService               | registerService               | captured registration requires includeLifecycle=true      | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json                         |
| openclaw-qqbot         | registration | registerChannel               | registerChannel               | captured registration requires includeChannelRuntime=true | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json                         |
| openclaw-qqbot         | registration | registerTool                  | registerTool                  | captured registration has no supported callable probe     | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json                         |
| openclaw-qqbot         | registration | registerCommand               | registerCommand               | captured registration has no supported callable probe     | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json                         |
| openclaw-qqbot         | registration | registerCommand               | registerCommand               | captured registration has no supported callable probe     | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json                         |
| openclaw-qqbot         | registration | registerCommand               | registerCommand               | captured registration has no supported callable probe     | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json                         |
| openclaw-qqbot         | registration | registerCommand               | registerCommand               | captured registration has no supported callable probe     | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json                         |
| whatsapp               | registration | registerChannel               | registerChannel               | captured registration requires includeChannelRuntime=true | .crabpot/results/whatsapp/cold-import-extension-whatsapp-plugins-whatsapp-crabpot-package-index-ts.synthetic.json                                           |

## Failed Synthetic Probes

_none_

## Dependency Audit Artifacts

| Fixture        | Findings | Vulnerabilities                                                 | Artifact                                           |
| -------------- | -------- | --------------------------------------------------------------- | -------------------------------------------------- |
| codex          | 0        | {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0} | .crabpot/results/codex/package-audit.json          |
| diffs          | 0        | {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0} | .crabpot/results/diffs/package-audit.json          |
| google-meet    | 0        | -                                                               | .crabpot/results/google-meet/package-audit.json    |
| memory-lancedb | 0        | {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0} | .crabpot/results/memory-lancedb/package-audit.json |
| openclaw-qqbot | 0        | -                                                               | .crabpot/results/openclaw-qqbot/package-audit.json |
| whatsapp       | 0        | -                                                               | .crabpot/results/whatsapp/package-audit.json       |

## Execution Profiles

| Fixture       | Step    | Wall     | Peak RSS | CPU Estimate | Command                      |
| ------------- | ------- | -------- | -------- | ------------ | ---------------------------- |
| openclaw-beta | install | 12075 ms | 351.4 MB | 13186 ms     | npm install --ignore-scripts |
| openclaw-beta | install | 4662 ms  | 229.7 MB | 4499 ms      | npm install --ignore-scripts |
| openclaw-beta | install | 4646 ms  | 233.1 MB | 4052 ms      | npm install --ignore-scripts |
| openclaw-beta | install | 4124 ms  | 270.6 MB | 2883 ms      | npm install --ignore-scripts |
| openclaw-beta | install | 1674 ms  | 158.2 MB | 1259 ms      | npm install --ignore-scripts |
