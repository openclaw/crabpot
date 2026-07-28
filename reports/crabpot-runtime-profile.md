# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5142 ms            |
| Command P95 wall time  | 5249 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4361               |
| CPU samples            | 4361               |
| Max peak RSS           | 460.4 MB           |
| Max RSS delta          | 431.9 MB           |
| Max CPU estimate       | 5806 ms            |
| Max harness heap delta | 5.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 32         |
| sdkExports             | 331        |
| manifestFields         | 45         |
| manifestContractFields | 23         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2065  |
| observedHooks         | 111   |
| observedRegistrations | 211   |
| observedSdkImports    | 1333  |
| contractProbes        | 275   |
| issueFindings         | 400   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 31 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5054 ms     | 5099 ms  | 456.4 MB     | 427.7 MB      | 5639 ms      | 4.9 MB     | 605/605         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5142 ms     | 5302 ms  | 455.2 MB     | 425.4 MB      | 5779 ms      | 5.8 MB     | 619/619         | 0          |
| contract-capture       | Contract capture inventory                      | 5149 ms     | 5188 ms  | 433.4 MB     | 403.7 MB      | 5634 ms      | 5.4 MB     | 615/615         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5114 ms     | 5159 ms  | 433.8 MB     | 405.4 MB      | 5587 ms      | 5.4 MB     | 614/614         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5173 ms     | 5194 ms  | 454.9 MB     | 426.5 MB      | 5661 ms      | 5.3 MB     | 618/618         | 0          |
| workspace-plan         | Workspace execution plan                        | 5249 ms     | 5283 ms  | 460.4 MB     | 431.9 MB      | 5806 ms      | 5.5 MB     | 622/622         | 0          |
| platform-probes        | Platform and loader probes                      | 5249 ms     | 5260 ms  | 459.7 MB     | 431.3 MB      | 5711 ms      | 2.5 MB     | 626/626         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 327 ms      | 329 ms   | 60.8 MB      | 32.4 MB       | 142 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 31 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5054 ms  | 5099 ms  | 456.4 MB     | 5639 ms      | 605/605         | fixture-inspection     |
| target-registry  | 1        | 5142 ms  | 5302 ms  | 455.2 MB     | 5779 ms      | 619/619         | compat-report-registry |
| contract-capture | 1        | 5149 ms  | 5188 ms  | 433.4 MB     | 5634 ms      | 615/615         | contract-capture       |
| synthetic-probes | 1        | 5114 ms  | 5159 ms  | 433.8 MB     | 5587 ms      | 614/614         | synthetic-probe-plan   |
| cold-import      | 1        | 5173 ms  | 5194 ms  | 454.9 MB     | 5661 ms      | 618/618         | cold-import-readiness  |
| workspace-plan   | 1        | 5249 ms  | 5283 ms  | 460.4 MB     | 5806 ms      | 622/622         | workspace-plan         |
| platform-probes  | 1        | 5249 ms  | 5260 ms  | 459.7 MB     | 5711 ms      | 626/626         | platform-probes        |
| import-loop      | 1        | 327 ms   | 329 ms   | 60.8 MB      | 142 ms       | 39/39           | import-loop-profile    |
