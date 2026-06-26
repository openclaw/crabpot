# Crabpot Runtime Profile Diff

Generated: deterministic
Status: PASS
Strict: false

## Summary

| Metric        | Value |
| ------------- | ----- |
| Checks        | 10    |
| Fail          | 0     |
| Warn          | 2     |
| Pass          | 8     |
| Current runs  | 3     |
| Baseline runs | 3     |

## Checks

| Action | ID                              | Metric                 | Baseline | Current | Delta              | Percent | Message                                                        |
| ------ | ------------------------------- | ---------------------- | -------- | ------- | ------------------ | ------- | -------------------------------------------------------------- |
| warn   | profile.wall-p95                | p95WallMs              | 1273     | 2550    | 1277               | 100.3%  | p95WallMs regressed 100.3% over baseline                       |
| warn   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 342.8   | 277.70000000000005 | -       | maxPeakRssMb regressed 277.70000000000005 over baseline        |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 34      | -883               | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 68      | 49                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 39      | 8                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 55      | 15                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 30      | 12                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 321     | 14                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 42      | 10                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 21      | 5                  | -       | registry surface delta is tracked as context                   |
