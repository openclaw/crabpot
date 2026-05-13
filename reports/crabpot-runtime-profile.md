# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2274 ms            |
| Command P95 wall time  | 2355 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1941               |
| CPU samples            | 1941               |
| Max peak RSS           | 470.5 MB           |
| Max RSS delta          | 441.8 MB           |
| Max CPU estimate       | 2574 ms            |
| Max harness heap delta | 8 MB               |

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
| sourceFiles           | 1739  |
| observedHooks         | 103   |
| observedRegistrations | 193   |
| observedSdkImports    | 1158  |
| contractProbes        | 266   |
| issueFindings         | 270   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 39 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2166 ms     | 2185 ms  | 441.5 MB     | 411.4 MB      | 2417 ms      | 8 MB       | 255/255         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2267 ms     | 2271 ms  | 442.8 MB     | 413.5 MB      | 2480 ms      | 7.6 MB     | 269/269         | 0          |
| contract-capture       | Contract capture inventory                      | 2274 ms     | 2275 ms  | 441.8 MB     | 412.7 MB      | 2487 ms      | 7.4 MB     | 269/269         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2304 ms     | 2310 ms  | 442.7 MB     | 412.9 MB      | 2523 ms      | 1.3 MB     | 269/269         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2282 ms     | 2294 ms  | 442.6 MB     | 414 MB        | 2558 ms      | 0 MB       | 272/272         | 0          |
| workspace-plan         | Workspace execution plan                        | 2341 ms     | 2351 ms  | 449.4 MB     | 419.8 MB      | 2568 ms      | 1.5 MB     | 277/277         | 0          |
| platform-probes        | Platform and loader probes                      | 2355 ms     | 2359 ms  | 470.5 MB     | 441.8 MB      | 2574 ms      | 1.7 MB     | 279/279         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 402 ms      | 403 ms   | 60.5 MB      | 31.9 MB       | 195 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 39 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2166 ms  | 2185 ms  | 441.5 MB     | 2417 ms      | 255/255         | fixture-inspection     |
| target-registry  | 1        | 2267 ms  | 2271 ms  | 442.8 MB     | 2480 ms      | 269/269         | compat-report-registry |
| contract-capture | 1        | 2274 ms  | 2275 ms  | 441.8 MB     | 2487 ms      | 269/269         | contract-capture       |
| synthetic-probes | 1        | 2304 ms  | 2310 ms  | 442.7 MB     | 2523 ms      | 269/269         | synthetic-probe-plan   |
| cold-import      | 1        | 2282 ms  | 2294 ms  | 442.6 MB     | 2558 ms      | 272/272         | cold-import-readiness  |
| workspace-plan   | 1        | 2341 ms  | 2351 ms  | 449.4 MB     | 2568 ms      | 277/277         | workspace-plan         |
| platform-probes  | 1        | 2355 ms  | 2359 ms  | 470.5 MB     | 2574 ms      | 279/279         | platform-probes        |
| import-loop      | 1        | 402 ms   | 403 ms   | 60.5 MB      | 195 ms       | 48/48           | import-loop-profile    |
