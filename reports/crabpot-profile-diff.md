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
| warn   | profile.wall-p95                | p95WallMs              | 1273     | 7844    | 6571  | 516.2%  | p95WallMs regressed 516.2% over baseline                       |
| warn   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 758.9   | 693.8 | -       | maxPeakRssMb regressed 693.8 over baseline                     |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 21      | -896  | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 32      | 13    | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 42      | 11    | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 59      | 19    | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 31      | 13    | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 352     | 45    | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 57      | 25    | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 24      | 8     | -       | registry surface delta is tracked as context                   |
