# Test cleanup ledger

## Inspector command boundary guards

- Removed the source-string test for Inspector install and smoke behavior. It required exact implementation spellings, so comments or an unused call could satisfy it.
- The existing checkout fixture now asserts the actual npm install arguments, preserving the ignored lifecycle scripts and production-only install contract during resolver execution.
- Existing lifecycle tests already assert complete smoke arguments through source, package, and binary routes. Existing timeout tests execute hung Git and invalid smoke budgets.
- Validation: 31 checkout-lock and process-lifecycle tests passed locally on macOS; the Windows-only case was skipped. The same 31 tests passed on AWS Linux (`run_e4a2f2431a29c461347b81706a8946be`, lease `cbx_55e0db794489`, actual type `c7i.8xlarge`), with the Windows-only case skipped.
