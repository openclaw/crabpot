# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1928 ms            |
| Command P95 wall time  | 1996 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1660               |
| CPU samples            | 1660               |
| Max peak RSS           | 332.2 MB           |
| Max RSS delta          | 303.7 MB           |
| Max CPU estimate       | 2159 ms            |
| Max harness heap delta | 6.7 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 317        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1968  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1252  |
| contractProbes        | 281   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 31 ms       | 31 ms    | 28.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1812 ms     | 1830 ms  | 322.1 MB     | 293.6 MB      | 1975 ms      | 6.7 MB     | 217/217         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1945 ms     | 1948 ms  | 316.1 MB     | 287.6 MB      | 2077 ms      | 6.6 MB     | 231/231         | 0          |
| contract-capture       | Contract capture inventory                      | 1928 ms     | 1950 ms  | 332.2 MB     | 303.7 MB      | 2096 ms      | 0.1 MB     | 231/231         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1961 ms     | 1975 ms  | 323.1 MB     | 294.6 MB      | 2115 ms      | 0.6 MB     | 235/235         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1924 ms     | 1938 ms  | 329.6 MB     | 301.2 MB      | 2079 ms      | 1.8 MB     | 229/229         | 0          |
| workspace-plan         | Workspace execution plan                        | 1944 ms     | 1949 ms  | 323.7 MB     | 295.2 MB      | 2077 ms      | 0.4 MB     | 233/233         | 0          |
| platform-probes        | Platform and loader probes                      | 1996 ms     | 2022 ms  | 326.3 MB     | 297.9 MB      | 2159 ms      | 0.6 MB     | 239/239         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 362 ms      | 364 ms   | 60.7 MB      | 32.3 MB       | 175 ms       | 1.3 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 31 ms    | 31 ms    | 28.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1812 ms  | 1830 ms  | 322.1 MB     | 1975 ms      | 217/217         | fixture-inspection     |
| target-registry  | 1        | 1945 ms  | 1948 ms  | 316.1 MB     | 2077 ms      | 231/231         | compat-report-registry |
| contract-capture | 1        | 1928 ms  | 1950 ms  | 332.2 MB     | 2096 ms      | 231/231         | contract-capture       |
| synthetic-probes | 1        | 1961 ms  | 1975 ms  | 323.1 MB     | 2115 ms      | 235/235         | synthetic-probe-plan   |
| cold-import      | 1        | 1924 ms  | 1938 ms  | 329.6 MB     | 2079 ms      | 229/229         | cold-import-readiness  |
| workspace-plan   | 1        | 1944 ms  | 1949 ms  | 323.7 MB     | 2077 ms      | 233/233         | workspace-plan         |
| platform-probes  | 1        | 1996 ms  | 2022 ms  | 326.3 MB     | 2159 ms      | 239/239         | platform-probes        |
| import-loop      | 1        | 362 ms   | 364 ms   | 60.7 MB      | 175 ms       | 42/42           | import-loop-profile    |
