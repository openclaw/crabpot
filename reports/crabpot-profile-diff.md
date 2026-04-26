# Crabpot Runtime Profile Diff

Generated: deterministic
Status: PASS
Strict: false

## Summary

| Metric        | Value |
| ------------- | ----- |
| Checks        | 10    |
| Fail          | 0     |
| Warn          | 1     |
| Pass          | 9     |
| Current runs  | 1     |
| Baseline runs | 3     |

## Checks

| Action | ID                              | Metric                 | Baseline | Current | Delta              | Percent | Message                                                        |
| ------ | ------------------------------- | ---------------------- | -------- | ------- | ------------------ | ------- | -------------------------------------------------------------- |
| warn   | profile.wall-p95                | p95WallMs              | 1273     | 4615    | 3342               | 262.5%  | p95WallMs regressed 262.5% over baseline                       |
| pass   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 79.3    | 14.200000000000003 | -       | maxPeakRssMb stayed within 50 absolute regression threshold    |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 959     | 42                 | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 18      | -1                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 32      | 1                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 40      | 0                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 18      | 0                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 307     | 0                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 32      | 0                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 16      | 0                  | -       | registry surface delta is tracked as context                   |
