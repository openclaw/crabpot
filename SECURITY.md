# Security Policy

## Reporting

Report suspected vulnerabilities privately through GitHub Security Advisories for
this repository. If GHSA is unavailable to you, email security@openclaw.ai.

Do not open public issues for vulnerabilities or include secrets, private plugin
artifacts, credentials, or exploit details in public reports.

## Scope

In scope:

- Crabpot fixture selection, compatibility policy, and report generation
- plugin submodule materialization and workspace execution planning
- OpenClaw reference resolution and package/source compatibility checks
- CI workflows that execute plugin fixtures or publish dashboard artifacts
- dependency or runtime behavior that can affect compatibility findings

Out of scope:

- vulnerabilities in third-party plugin code unless Crabpot executes or reports it unsafely
- upstream OpenClaw behavior outside the fixture/reporting contract
- compromise of a trusted local account, shell, filesystem, or maintainer device
- scanner-only findings without a reachable exploit path in supported usage

## Expectations

We prioritize reachable issues that affect report integrity, plugin fixture
execution, private artifacts, or safe CI behavior. Include the affected commit,
fixture or workflow, minimal reproduction steps, and sanitized impact details.
