# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 9882 ms            |
| Command P95 wall time  | 10447 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 8414               |
| CPU samples            | 8414               |
| Max peak RSS           | 755.9 MB           |
| Max RSS delta          | 729.3 MB           |
| Max CPU estimate       | 13896 ms           |
| Max harness heap delta | 25.4 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 34         |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 338        |
| manifestFields         | 52         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2279  |
| observedHooks         | 113   |
| observedRegistrations | 217   |
| observedSdkImports    | 1181  |
| contractProbes        | 237   |
| issueFindings         | 269   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 22 ms       | 27 ms    | 26.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 9610 ms     | 9616 ms  | 753.9 MB     | 727.3 MB      | 13137 ms     | 25.4 MB    | 1142/1142       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 9854 ms     | 9858 ms  | 753.7 MB     | 727 MB        | 13328 ms     | 18.4 MB    | 1176/1176       | 0          |
| contract-capture       | Contract capture inventory                      | 9908 ms     | 9919 ms  | 753.1 MB     | 726.5 MB      | 13277 ms     | 18.6 MB    | 1181/1181       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 9976 ms     | 10077 ms | 753.6 MB     | 727 MB        | 13402 ms     | 18.7 MB    | 1192/1192       | 0          |
| cold-import-readiness  | Cold import readiness                           | 9882 ms     | 9938 ms  | 753.4 MB     | 726.8 MB      | 13486 ms     | 18.4 MB    | 1179/1179       | 0          |
| workspace-plan         | Workspace execution plan                        | 10133 ms    | 10137 ms | 755.8 MB     | 729.1 MB      | 13801 ms     | 18.6 MB    | 1201/1201       | 0          |
| platform-probes        | Platform and loader probes                      | 10447 ms    | 10448 ms | 755.9 MB     | 729.3 MB      | 13896 ms     | 19 MB      | 1248/1248       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 767 ms      | 767 ms   | 77.7 MB      | 51.1 MB       | 406 ms       | 1.5 MB     | 92/92           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 22 ms    | 27 ms    | 26.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 9610 ms  | 9616 ms  | 753.9 MB     | 13137 ms     | 1142/1142       | fixture-inspection     |
| target-registry  | 1        | 9854 ms  | 9858 ms  | 753.7 MB     | 13328 ms     | 1176/1176       | compat-report-registry |
| contract-capture | 1        | 9908 ms  | 9919 ms  | 753.1 MB     | 13277 ms     | 1181/1181       | contract-capture       |
| synthetic-probes | 1        | 9976 ms  | 10077 ms | 753.6 MB     | 13402 ms     | 1192/1192       | synthetic-probe-plan   |
| cold-import      | 1        | 9882 ms  | 9938 ms  | 753.4 MB     | 13486 ms     | 1179/1179       | cold-import-readiness  |
| workspace-plan   | 1        | 10133 ms | 10137 ms | 755.8 MB     | 13801 ms     | 1201/1201       | workspace-plan         |
| platform-probes  | 1        | 10447 ms | 10448 ms | 755.9 MB     | 13896 ms     | 1248/1248       | platform-probes        |
| import-loop      | 1        | 767 ms   | 767 ms   | 77.7 MB      | 406 ms       | 92/92           | import-loop-profile    |
