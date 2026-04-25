# crabpot agent notes

- Keep this repo fixture-driven. Add plugins to `crabpot.config.json`; do not
  hardcode fixture lists in scripts.
- External plugin code lives under `plugins/` as git submodules. Do not vendor or
  rewrite external plugin source here.
- Default checks must stay cheap and credential-free. Live tests require explicit
  opt-in and secrets.
- Prefer seam labels over product categories: `dynamic-tool`, `llm-observer`,
  `gateway-service`, `provider-capability`, and similar.
- When adding a fixture, explain the unique seam it covers in `why`.

