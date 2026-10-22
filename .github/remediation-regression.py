"""Finite, same-runner comparisons for the eMudhra remediation campaign."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import platform
import shutil
import subprocess
import time

p = argparse.ArgumentParser()
p.add_argument('--base', type=Path, required=True)
p.add_argument('--candidate', type=Path, required=True)
p.add_argument('--openclaw', type=Path, required=True)
p.add_argument('--old-node', type=Path, required=True)
p.add_argument('--fixed-node', type=Path, required=True)
p.add_argument('--output', type=Path, required=True)
a = p.parse_args()
a.output.mkdir(parents=True, exist_ok=False)

def capture(*cmd, cwd=None):
    return subprocess.check_output([str(x) for x in cmd], cwd=cwd, text=True).strip()

def sha(file):
    return hashlib.sha256(file.read_bytes()).hexdigest()

def files(root):
    return {str(p.relative_to(root)).replace(os.sep, '/'): sha(p)
            for p in sorted(root.rglob('*'))
            if p.is_file() and '.git' not in p.parts and 'node_modules' not in p.parts}

# Materialize once using the frozen host, then share only immutable plugin input bytes.
subprocess.run([str(a.fixed_node), 'scripts/sync-fixtures.mjs', '--materialize',
                '--openclaw', str(a.openclaw.resolve()), '--no-package-availability-report'],
               cwd=a.candidate, check=True)
# Replace only this task-owned input tree; overlaying existing symlinks is not portable.
shutil.rmtree(a.base / 'plugins')
shutil.copytree(a.candidate / 'plugins', a.base / 'plugins', symlinks=True)
fixture_files = files(a.candidate / 'plugins')
assert fixture_files == files(a.base / 'plugins'), 'base/candidate fixture bytes differ'
(a.output / 'fixture-files.json').write_text(json.dumps(fixture_files, indent=2) + '\n')
identities = {'platform': platform.platform(), 'machine': platform.machine(), 'cpus': os.cpu_count(),
              'openclaw': capture('git', 'rev-parse', 'HEAD', cwd=a.openclaw),
              'sources': {label: capture('git', 'rev-parse', 'HEAD', cwd=path)
                          for label, path in [('base', a.base), ('candidate', a.candidate)]},
              'runtimes': {label: {'path': str(node), 'sha256': sha(node),
                                  'runtime': json.loads(capture(node, '-p',
                                    'JSON.stringify({version:process.version,platform:process.platform,arch:process.arch,versions:process.versions})'))}
                           for label, node in [('old', a.old_node), ('fixed', a.fixed_node)]}}
(a.output / 'identities.json').write_text(json.dumps(identities, indent=2) + '\n')
results = []
for label, source, runtime, node in [('base', a.base, 'old', a.old_node),
                                      ('candidate', a.candidate, 'fixed', a.fixed_node),
                                      ('base', a.base, 'fixed', a.fixed_node),
                                      ('candidate', a.candidate, 'old', a.old_node)]:
    cell = a.output / (label + '-' + runtime)
    cell.mkdir()
    for name in ['home', 'tmp', 'cache']:
        (cell / name).mkdir()
    checkout = cell / 'repo'
    shutil.copytree(source, checkout, symlinks=True)
    env = {**os.environ, 'PATH': str(node.parent) + os.pathsep + os.environ['PATH'],
           'HOME': str((cell / 'home').resolve()), 'USERPROFILE': str((cell / 'home').resolve()),
           'TMPDIR': str((cell / 'tmp').resolve()), 'TMP': str((cell / 'tmp').resolve()),
           'TEMP': str((cell / 'tmp').resolve()), 'XDG_CACHE_HOME': str((cell / 'cache').resolve()),
           'npm_config_cache': str((cell / 'cache' / 'npm').resolve()),
           'CRABPOT_TEST_OPENCLAW_PATH': str(a.openclaw.resolve())}
    env.pop('NODE_OPTIONS', None)
    env.pop('NODE_COMPILE_CACHE', None)
    # Match the original owning test entry point and its independent heap/deadline contracts.
    target = 'test/owned-command.test.mjs' if os.name == 'nt' else 'test/corpus/host.test.mjs'
    script = 'const {runStaticStep}=await import("./scripts/static-step.mjs");process.exitCode=runStaticStep("node",["--test","--test-concurrency=1",process.argv[1]]);'
    started = time.time()
    with (cell / 'tests.log').open('w') as log:
        result = subprocess.run([str(node), '--input-type=module', '-e', script, target],
                                cwd=checkout, env=env, stdout=log, stderr=subprocess.STDOUT)
    row = {'source': label, 'runtime': runtime, 'target': target,
           'exitCode': result.returncode, 'elapsedSeconds': time.time() - started,
           'command': [str(node), '--input-type=module', '-e', script, target]}
    results.append(row)
    (cell / 'result.json').write_text(json.dumps(row, indent=2) + '\n')
    (a.output / 'results.json').write_text(json.dumps(results, indent=2) + '\n')
    print(json.dumps(row), flush=True)
# A comparison records failures; it never declares a failed candidate green.
raise SystemExit(0 if all(row['exitCode'] == 0 for row in results) else 1)
