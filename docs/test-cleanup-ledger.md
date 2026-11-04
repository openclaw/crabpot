# Test cleanup ledger

## WhatsApp channel expectation

- Finding: WhatsApp was the only fixture without an expected contract. Inspection could succeed without proving its channel seam.
- Change: require `registerChannel` in the manifest. The pinned Inspector accepts the channel factory equivalents used by bundled plugins.
- Scope: preserve the package selector, source fallback pin, and external plugin source.
- Validation: pending focused inspection of the materialized WhatsApp artifact.
