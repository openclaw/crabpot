# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1880 ms            |
| Command P95 wall time  | 1989 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1616               |
| CPU samples            | 1616               |
| Max peak RSS           | 483.7 MB           |
| Max RSS delta          | 455 MB             |
| Max CPU estimate       | 2171 ms            |
| Max harness heap delta | 6.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 313        |
| manifestFields         | 41         |
| manifestContractFields | 18         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1771  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1210  |
| contractProbes        | 274   |
| issueFindings         | 278   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 31 ms    | 31.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1844 ms     | 1852 ms  | 469.2 MB     | 440.4 MB      | 2019 ms      | 6.6 MB     | 219/219         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1908 ms     | 1935 ms  | 470.7 MB     | 440.4 MB      | 2085 ms      | 6.3 MB     | 223/223         | 0          |
| contract-capture       | Contract capture inventory                      | 1887 ms     | 1894 ms  | 475.3 MB     | 446.6 MB      | 2055 ms      | 0.7 MB     | 221/221         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1874 ms     | 1882 ms  | 471.3 MB     | 441.6 MB      | 2012 ms      | 0 MB       | 223/223         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1880 ms     | 1902 ms  | 471.4 MB     | 442.4 MB      | 2067 ms      | 1.6 MB     | 224/224         | 0          |
| workspace-plan         | Workspace execution plan                        | 1909 ms     | 1930 ms  | 483.7 MB     | 455 MB        | 2081 ms      | 1.7 MB     | 228/228         | 0          |
| platform-probes        | Platform and loader probes                      | 1989 ms     | 2031 ms  | 483.5 MB     | 454.4 MB      | 2171 ms      | 0.4 MB     | 236/236         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 329 ms      | 331 ms   | 60.5 MB      | 31.7 MB       | 144 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 31 ms    | 31.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1844 ms  | 1852 ms  | 469.2 MB     | 2019 ms      | 219/219         | fixture-inspection     |
| target-registry  | 1        | 1908 ms  | 1935 ms  | 470.7 MB     | 2085 ms      | 223/223         | compat-report-registry |
| contract-capture | 1        | 1887 ms  | 1894 ms  | 475.3 MB     | 2055 ms      | 221/221         | contract-capture       |
| synthetic-probes | 1        | 1874 ms  | 1882 ms  | 471.3 MB     | 2012 ms      | 223/223         | synthetic-probe-plan   |
| cold-import      | 1        | 1880 ms  | 1902 ms  | 471.4 MB     | 2067 ms      | 224/224         | cold-import-readiness  |
| workspace-plan   | 1        | 1909 ms  | 1930 ms  | 483.7 MB     | 2081 ms      | 228/228         | workspace-plan         |
| platform-probes  | 1        | 1989 ms  | 2031 ms  | 483.5 MB     | 2171 ms      | 236/236         | platform-probes        |
| import-loop      | 1        | 329 ms   | 331 ms   | 60.5 MB      | 144 ms       | 39/39           | import-loop-profile    |
