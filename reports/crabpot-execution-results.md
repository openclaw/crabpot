# Crabpot Execution Results

Generated: deterministic
Results dir: .crabpot/results

## Summary

| Metric                       | Value     |
| ---------------------------- | --------- |
| Artifacts                    | 4         |
| Capture artifacts            | 1         |
| Synthetic artifacts          | 1         |
| Audit artifacts              | 1         |
| Profile artifacts            | 1         |
| Captured registrations/hooks | 30        |
| Audit findings               | 12        |
| Execution wall               | 27807 ms  |
| Max peak RSS                 | 1123.9 MB |
| Max CPU estimate             | 17790 ms  |
| Pass                         | 12        |
| Fail                         | 0         |
| Blocked                      | 18        |

## Artifacts

| Fixture    | Kind      | Status   | Entrypoint                                   | Result                         | Artifact                                                                                                     |
| ---------- | --------- | -------- | -------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| clawrouter | capture   | captured | .crabpot/workspaces/clawrouter/dist/index.js | 30 captured                    | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.capture.json   |
| clawrouter | synthetic | captured | .crabpot/workspaces/clawrouter/dist/index.js | 12 pass / 0 fail / 18 blocked  | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | profile   | pass     | -                                            | 7 steps / 27807 ms / 1123.9 MB | .crabpot/results/clawrouter/execution-profile.json                                                           |
| clawrouter | audit     | warning  | -                                            | 12 audit findings              | .crabpot/results/clawrouter/package-audit.json                                                               |

## Blocked Synthetic Probes

| Fixture    | Kind         | Seam            | Label                | Reason                                               | Artifact                                                                                                     |
| ---------- | ------------ | --------------- | -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerTool    | registerTool.execute | captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | registration | registerService | registerService      | captured registration requires includeLifecycle=true | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |

## Failed Synthetic Probes

_none_

## Dependency Audit Artifacts

| Fixture    | Findings | Vulnerabilities                                                   | Artifact                                       |
| ---------- | -------- | ----------------------------------------------------------------- | ---------------------------------------------- |
| clawrouter | 12       | {"info":0,"low":0,"moderate":11,"high":1,"critical":0,"total":12} | .crabpot/results/clawrouter/package-audit.json |

## Execution Profiles

| Fixture    | Step            | Wall     | Peak RSS  | CPU Estimate | Command                                                                                                                                                                                                                          |
| ---------- | --------------- | -------- | --------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clawrouter | synthetic-probe | 12125 ms | 139 MB    | 593 ms       | CRABPOT_EXECUTE_ISOLATED=1 node ../../../scripts/synthetic-probes.mjs --entrypoint ./dist/index.js --mock-sdk --output ../../results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json |
| clawrouter | install         | 7565 ms  | 1123.9 MB | 17790 ms     | npm install --ignore-scripts                                                                                                                                                                                                     |
| clawrouter | prepare         | 4427 ms  | 0 MB      | 0 ms         | mkdir -p .crabpot/workspaces/clawrouter && rsync -a --delete plugins/clawrouter/ .crabpot/workspaces/clawrouter/                                                                                                                 |
| clawrouter | audit           | 1526 ms  | 110.3 MB  | 477 ms       | npm audit --json > ../../results/clawrouter/package-audit.json || true                                                                                                                                                           |
| clawrouter | capture         | 1225 ms  | 78.7 MB   | 145 ms       | CRABPOT_EXECUTE_ISOLATED=1 node ../../../scripts/run-cold-import-capture.mjs ./dist/index.js --mock-sdk --output ../../results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.capture.json         |
