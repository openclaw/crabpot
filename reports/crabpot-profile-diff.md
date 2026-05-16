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
| warn   | profile.wall-p95                | p95WallMs              | 1273     | 7804    | 6531               | 513%    | p95WallMs regressed 513% over baseline                         |
| warn   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 521.8   | 456.69999999999993 | -       | maxPeakRssMb regressed 456.69999999999993 over baseline        |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 806     | -111               | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 60      | 41                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 36      | 5                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 53      | 13                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 28      | 10                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 307     | 0                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 41      | 9                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 17      | 1                  | -       | registry surface delta is tracked as context                   |
