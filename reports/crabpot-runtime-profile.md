# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1806 ms            |
| Command P95 wall time  | 2054 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1665               |
| CPU samples            | 1665               |
| Max peak RSS           | 159.3 MB           |
| Max RSS delta          | 135.4 MB           |
| Max CPU estimate       | 2731 ms            |
| Max harness heap delta | 5.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 40         |
| apiRegistrars          | 60         |
| capturedRegistrars     | 5          |
| sdkExports             | 351        |
| manifestFields         | 59         |
| manifestContractFields | 26         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 7     |
| sourceFiles           | 882   |
| observedHooks         | 6     |
| observedRegistrations | 39    |
| observedSdkImports    | 300   |
| contractProbes        | 23    |
| issueFindings         | 30    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 24 ms       | 25 ms    | 26.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1773 ms     | 1784 ms  | 159.3 MB     | 134.1 MB      | 2674 ms      | 5 MB       | 213/213         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1855 ms     | 1861 ms  | 157.7 MB     | 133 MB        | 2710 ms      | 4.9 MB     | 222/222         | 0          |
| contract-capture       | Contract capture inventory                      | 1907 ms     | 1913 ms  | 158.4 MB     | 133.9 MB      | 2678 ms      | 5.2 MB     | 228/228         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1952 ms     | 1958 ms  | 159.1 MB     | 135.4 MB      | 2657 ms      | 4.9 MB     | 233/233         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1779 ms     | 1799 ms  | 159.3 MB     | 134.3 MB      | 2670 ms      | 3.7 MB     | 214/214         | 0          |
| workspace-plan         | Workspace execution plan                        | 1806 ms     | 1816 ms  | 157.2 MB     | 132.7 MB      | 2679 ms      | 3.5 MB     | 215/215         | 0          |
| platform-probes        | Platform and loader probes                      | 2054 ms     | 2074 ms  | 157.4 MB     | 132.5 MB      | 2731 ms      | 3.9 MB     | 245/245         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 770 ms      | 773 ms   | 78.7 MB      | 55.3 MB       | 400 ms       | 1.5 MB     | 92/92           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 24 ms    | 25 ms    | 26.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1773 ms  | 1784 ms  | 159.3 MB     | 2674 ms      | 213/213         | fixture-inspection     |
| target-registry  | 1        | 1855 ms  | 1861 ms  | 157.7 MB     | 2710 ms      | 222/222         | compat-report-registry |
| contract-capture | 1        | 1907 ms  | 1913 ms  | 158.4 MB     | 2678 ms      | 228/228         | contract-capture       |
| synthetic-probes | 1        | 1952 ms  | 1958 ms  | 159.1 MB     | 2657 ms      | 233/233         | synthetic-probe-plan   |
| cold-import      | 1        | 1779 ms  | 1799 ms  | 159.3 MB     | 2670 ms      | 214/214         | cold-import-readiness  |
| workspace-plan   | 1        | 1806 ms  | 1816 ms  | 157.2 MB     | 2679 ms      | 215/215         | workspace-plan         |
| platform-probes  | 1        | 2054 ms  | 2074 ms  | 157.4 MB     | 2731 ms      | 245/245         | platform-probes        |
| import-loop      | 1        | 770 ms   | 773 ms   | 78.7 MB      | 400 ms       | 92/92           | import-loop-profile    |
