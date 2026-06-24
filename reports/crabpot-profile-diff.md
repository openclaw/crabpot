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
| warn   | profile.wall-p95                | p95WallMs              | 1273     | 2661    | 1388  | 109%    | p95WallMs regressed 109% over baseline                         |
| warn   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 343.2   | 278.1 | -       | maxPeakRssMb regressed 278.1 over baseline                     |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 39      | -878  | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 68      | 49    | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 39      | 8     | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 55      | 15    | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 30      | 12    | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 321     | 14    | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 42      | 10    | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 21      | 5     | -       | registry surface delta is tracked as context                   |
