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

| Action | ID                              | Metric                 | Baseline | Current | Delta | Percent | Message                                                        |
| ------ | ------------------------------- | ---------------------- | -------- | ------- | ----- | ------- | -------------------------------------------------------------- |
| warn   | profile.wall-p95                | p95WallMs              | 1273     | 9613    | 8340  | 655.1%  | p95WallMs regressed 655.1% over baseline                       |
| warn   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 764.6   | 699.5 | -       | maxPeakRssMb regressed 699.5 over baseline                     |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 32      | -885  | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 0       | -19   | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 42      | 11    | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 59      | 19    | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 32      | 14    | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 331     | 24    | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 45      | 13    | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 23      | 7     | -       | registry surface delta is tracked as context                   |
