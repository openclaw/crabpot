# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2230 ms            |
| Command P95 wall time  | 2242 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1888               |
| CPU samples            | 1888               |
| Max peak RSS           | 434.5 MB           |
| Max RSS delta          | 405.8 MB           |
| Max CPU estimate       | 2493 ms            |
| Max harness heap delta | 7.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 2315  |
| observedHooks         | 90    |
| observedRegistrations | 168   |
| observedSdkImports    | 572   |
| contractProbes        | 310   |
| issueFindings         | 325   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 37 ms    | 32 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2156 ms     | 2162 ms  | 426.2 MB     | 395.9 MB      | 2358 ms      | 7.6 MB     | 254/254         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2235 ms     | 2239 ms  | 426.5 MB     | 396.2 MB      | 2411 ms      | 7.3 MB     | 264/264         | 0          |
| contract-capture       | Contract capture inventory                      | 2242 ms     | 2283 ms  | 426.3 MB     | 396.1 MB      | 2493 ms      | 7.3 MB     | 266/266         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2226 ms     | 2238 ms  | 428.1 MB     | 398.5 MB      | 2429 ms      | 0.9 MB     | 259/259         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2235 ms     | 2238 ms  | 428.9 MB     | 400.2 MB      | 2460 ms      | 1.2 MB     | 266/266         | 0          |
| workspace-plan         | Workspace execution plan                        | 2240 ms     | 2242 ms  | 434.5 MB     | 405.8 MB      | 2460 ms      | 1.1 MB     | 265/265         | 0          |
| platform-probes        | Platform and loader probes                      | 2230 ms     | 2262 ms  | 433.5 MB     | 404.7 MB      | 2445 ms      | 1.2 MB     | 266/266         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 373 ms      | 373 ms   | 60.2 MB      | 31.5 MB       | 176 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 37 ms    | 32 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2156 ms  | 2162 ms  | 426.2 MB     | 2358 ms      | 254/254         | fixture-inspection     |
| target-registry  | 1        | 2235 ms  | 2239 ms  | 426.5 MB     | 2411 ms      | 264/264         | compat-report-registry |
| contract-capture | 1        | 2242 ms  | 2283 ms  | 426.3 MB     | 2493 ms      | 266/266         | contract-capture       |
| synthetic-probes | 1        | 2226 ms  | 2238 ms  | 428.1 MB     | 2429 ms      | 259/259         | synthetic-probe-plan   |
| cold-import      | 1        | 2235 ms  | 2238 ms  | 428.9 MB     | 2460 ms      | 266/266         | cold-import-readiness  |
| workspace-plan   | 1        | 2240 ms  | 2242 ms  | 434.5 MB     | 2460 ms      | 265/265         | workspace-plan         |
| platform-probes  | 1        | 2230 ms  | 2262 ms  | 433.5 MB     | 2445 ms      | 266/266         | platform-probes        |
| import-loop      | 1        | 373 ms   | 373 ms   | 60.2 MB      | 176 ms       | 45/45           | import-loop-profile    |
