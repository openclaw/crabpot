# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2305 ms            |
| Command P95 wall time  | 2385 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1960               |
| CPU samples            | 1960               |
| Max peak RSS           | 457.4 MB           |
| Max RSS delta          | 427.9 MB           |
| Max CPU estimate       | 2620 ms            |
| Max harness heap delta | 7.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 296        |
| manifestFields         | 40         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 1834  |
| observedHooks         | 97    |
| observedRegistrations | 194   |
| observedSdkImports    | 1162  |
| contractProbes        | 277   |
| issueFindings         | 281   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 33.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2192 ms     | 2203 ms  | 445.1 MB     | 413.4 MB      | 2417 ms      | 7.8 MB     | 260/260         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2313 ms     | 2363 ms  | 443.2 MB     | 412.6 MB      | 2609 ms      | 7.5 MB     | 274/274         | 0          |
| contract-capture       | Contract capture inventory                      | 2333 ms     | 2362 ms  | 446.9 MB     | 416.9 MB      | 2584 ms      | 7.7 MB     | 272/272         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2305 ms     | 2308 ms  | 447.9 MB     | 418.8 MB      | 2531 ms      | 0.5 MB     | 274/274         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2277 ms     | 2281 ms  | 457.4 MB     | 427.9 MB      | 2527 ms      | 1.2 MB     | 271/271         | 0          |
| workspace-plan         | Workspace execution plan                        | 2336 ms     | 2337 ms  | 453.2 MB     | 424.5 MB      | 2595 ms      | 1.5 MB     | 277/277         | 0          |
| platform-probes        | Platform and loader probes                      | 2385 ms     | 2386 ms  | 450.2 MB     | 419.9 MB      | 2620 ms      | 1.6 MB     | 284/284         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 379 ms      | 394 ms   | 60.5 MB      | 31.8 MB       | 196 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 33.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2192 ms  | 2203 ms  | 445.1 MB     | 2417 ms      | 260/260         | fixture-inspection     |
| target-registry  | 1        | 2313 ms  | 2363 ms  | 443.2 MB     | 2609 ms      | 274/274         | compat-report-registry |
| contract-capture | 1        | 2333 ms  | 2362 ms  | 446.9 MB     | 2584 ms      | 272/272         | contract-capture       |
| synthetic-probes | 1        | 2305 ms  | 2308 ms  | 447.9 MB     | 2531 ms      | 274/274         | synthetic-probe-plan   |
| cold-import      | 1        | 2277 ms  | 2281 ms  | 457.4 MB     | 2527 ms      | 271/271         | cold-import-readiness  |
| workspace-plan   | 1        | 2336 ms  | 2337 ms  | 453.2 MB     | 2595 ms      | 277/277         | workspace-plan         |
| platform-probes  | 1        | 2385 ms  | 2386 ms  | 450.2 MB     | 2620 ms      | 284/284         | platform-probes        |
| import-loop      | 1        | 379 ms   | 394 ms   | 60.5 MB      | 196 ms       | 45/45           | import-loop-profile    |
