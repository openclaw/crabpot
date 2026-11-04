# Test cleanup ledger

## Static-suite release policy

- Fixed the actual CLI mapping from `--policy release` to the CI checker's `--strict` flag. Manual OpenClaw ref checks select this mode when strict contracts are enabled.
- Added a CLI regression with isolated stub commands. It verifies strict flag forwarding, automatic Inspector smoke selection, checker failure propagation, and permissive dashboard selection. The regression failed against the old CLI before the one-line fix.
- Validation: all nine runner tests passed locally and on AWS Linux (`run_540467ee6cd1a2fd10a12decc30baf01`, lease `cbx_921fd0d52085`). No release was run.
