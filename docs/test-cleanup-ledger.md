# Test cleanup ledger

## WhatsApp channel expectation

- Finding: WhatsApp was the only fixture without an expected contract. Inspection could succeed without proving its channel seam.
- Change: require `registerChannel` in the manifest. The pinned Inspector accepts the channel factory equivalents used by bundled plugins.
- Scope: preserve the package selector, source fallback pin, and external plugin source.
- Validation: all 47 local manifest checks passed. Native materialization and focused inspection passed on AWS Linux: 68 source files, observed channel factories, and zero breakages (`run_fc3d8856be4bacf53634db1468a78216`, lease `cbx_252eae838938`, actual type `c7i.8xlarge`). The initial ad hoc invocations needed an explicit script argument and the array length for `sourceFiles`; neither required a product change.
