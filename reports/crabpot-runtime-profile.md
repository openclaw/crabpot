# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2198 ms            |
| Command P95 wall time  | 2253 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1882               |
| CPU samples            | 1882               |
| Max peak RSS           | 454.4 MB           |
| Max RSS delta          | 425.8 MB           |
| Max CPU estimate       | 2478 ms            |
| Max harness heap delta | 7.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 36         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 307        |
| manifestFields         | 41         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1783  |
| observedHooks         | 106   |
| observedRegistrations | 196   |
| observedSdkImports    | 1193  |
| contractProbes        | 278   |
| issueFindings         | 283   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 31 ms       | 31 ms    | 28.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2096 ms     | 2104 ms  | 454.1 MB     | 425.5 MB      | 2281 ms      | 7.6 MB     | 247/247         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2188 ms     | 2230 ms  | 452.3 MB     | 423.8 MB      | 2417 ms      | 7.2 MB     | 261/261         | 0          |
| contract-capture       | Contract capture inventory                      | 2213 ms     | 2243 ms  | 447.5 MB     | 418.9 MB      | 2407 ms      | 7.4 MB     | 264/264         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2208 ms     | 2245 ms  | 447.9 MB     | 419.3 MB      | 2400 ms      | 1 MB       | 263/263         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2198 ms     | 2268 ms  | 450.6 MB     | 422 MB        | 2452 ms      | 1.3 MB     | 264/264         | 0          |
| workspace-plan         | Workspace execution plan                        | 2253 ms     | 2269 ms  | 452 MB       | 423.4 MB      | 2478 ms      | 1.4 MB     | 270/270         | 0          |
| platform-probes        | Platform and loader probes                      | 2252 ms     | 2272 ms  | 454.4 MB     | 425.8 MB      | 2467 ms      | 1.4 MB     | 268/268         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 347 ms      | 348 ms   | 60.4 MB      | 32.1 MB       | 161 ms       | 1.3 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 31 ms    | 31 ms    | 28.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2096 ms  | 2104 ms  | 454.1 MB     | 2281 ms      | 247/247         | fixture-inspection     |
| target-registry  | 1        | 2188 ms  | 2230 ms  | 452.3 MB     | 2417 ms      | 261/261         | compat-report-registry |
| contract-capture | 1        | 2213 ms  | 2243 ms  | 447.5 MB     | 2407 ms      | 264/264         | contract-capture       |
| synthetic-probes | 1        | 2208 ms  | 2245 ms  | 447.9 MB     | 2400 ms      | 263/263         | synthetic-probe-plan   |
| cold-import      | 1        | 2198 ms  | 2268 ms  | 450.6 MB     | 2452 ms      | 264/264         | cold-import-readiness  |
| workspace-plan   | 1        | 2253 ms  | 2269 ms  | 452 MB       | 2478 ms      | 270/270         | workspace-plan         |
| platform-probes  | 1        | 2252 ms  | 2272 ms  | 454.4 MB     | 2467 ms      | 268/268         | platform-probes        |
| import-loop      | 1        | 347 ms   | 348 ms   | 60.4 MB      | 161 ms       | 42/42           | import-loop-profile    |
