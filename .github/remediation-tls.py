"""Qualify the selected native executable; never change the runner's trust stores."""
import argparse
import hashlib
import json
import os
import platform
from pathlib import Path
import subprocess
import tarfile
import urllib.request

p = argparse.ArgumentParser()
p.add_argument('--old-node', type=Path, required=True)
p.add_argument('--fixed-node', type=Path, required=True)
p.add_argument('--output', type=Path, required=True)
p.add_argument('--expected-fixed-version')
p.add_argument('--authenticated-manifest-sha256')
p.add_argument('--container-image')
a = p.parse_args()
a.output.mkdir(parents=True, exist_ok=False)
root = Path(__file__).resolve().parent
output = a.output.resolve()
old_ca = output / 'old-roots.pem'
subprocess.run([str(a.old_node), '-e',
    "require('fs').writeFileSync(process.argv[1],require('tls').rootCertificates.join('\\n')+'\\n')",
    str(old_ca)], check=True)
(output / 'empty-ca').mkdir()
private = output / 'private'
private.mkdir()
commands = [
    ['openssl', 'req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-keyout', str(private / 'ca.key'),
     '-out', str(private / 'ca.pem'), '-days', '2', '-subj', '/CN=Crabpot finite regression CA',
     '-addext', 'basicConstraints=critical,CA:TRUE'],
    ['openssl', 'req', '-newkey', 'rsa:2048', '-nodes', '-keyout', str(private / 'key.pem'),
     '-out', str(private / 'server.csr'), '-subj', '/CN=localhost'],
    ['openssl', 'x509', '-req', '-in', str(private / 'server.csr'), '-CA', str(private / 'ca.pem'),
     '-CAkey', str(private / 'ca.key'), '-CAcreateserial', '-out', str(private / 'cert.pem'),
     '-days', '2', '-extfile', str(private / 'extensions.cnf')],
]
(private / 'extensions.cnf').write_text('subjectAltName=DNS:localhost\nextendedKeyUsage=serverAuth\nbasicConstraints=CA:FALSE\n')
with (output / 'private-fixture-setup.log').open('w') as log:
    for command in commands:
        subprocess.run(command, check=True, stdout=log, stderr=subprocess.STDOUT)
identities = {label: {'path': str(node), 'sha256': hashlib.sha256(node.read_bytes()).hexdigest()}
              for label, node in [('old', a.old_node), ('fixed', a.fixed_node)]}
identities.update({'oldRootsSha256': hashlib.sha256(old_ca.read_bytes()).hexdigest(),
                   'publicPrivateCaSha256': hashlib.sha256((private / 'ca.pem').read_bytes()).hexdigest(),
                   'probeSha256': hashlib.sha256((root / 'remediation-node-probe.mjs').read_bytes()).hexdigest(),
                   'hostsSha256': hashlib.sha256((root / 'remediation-incident-hosts.json').read_bytes()).hexdigest()})
identities['source'] = subprocess.check_output(['git', '-C', str(root), 'rev-parse', 'HEAD'], text=True).strip()
identities['harnessSha256'] = hashlib.sha256(Path(__file__).read_bytes()).hexdigest()
if a.expected_fixed_version:
    assert hashlib.sha256(old_ca.read_bytes()).hexdigest() == '1f20173c6c5bd4e836fbd5d025ec4eb7464e1521439cde2fea0aca3122c7a1a9', 'old root fixture identity changed'
    assert hashlib.sha256((root / 'remediation-incident-hosts.json').read_bytes()).hexdigest() == 'e1bdf03ee37e6f64f5aef9df2a06c74aab7a3ef9d723cf82aface43cc43aab11', 'incident fixture identity changed'
    runtime = json.loads(subprocess.check_output([str(a.fixed_node), '-p',
        'JSON.stringify({version:process.version,platform:process.platform,arch:process.arch,versions:process.versions})'], text=True))
    assert runtime['version'] == a.expected_fixed_version
    assert runtime['platform'] == 'linux' and runtime['arch'] == 'x64'
    assert a.authenticated_manifest_sha256, 'authenticated release manifest identity is required'
    version = runtime['version']
    archive = 'node-' + version + '-linux-x64.tar.xz'
    manifest = urllib.request.urlopen('https://nodejs.org/dist/' + version + '/SHASUMS256.txt', timeout=60).read()
    assert hashlib.sha256(manifest).hexdigest() == a.authenticated_manifest_sha256, 'release manifest changed'
    expected = dict((name, digest) for digest, name in (line.split() for line in manifest.decode().splitlines()))[archive]
    archive_path = output / archive
    with urllib.request.urlopen('https://nodejs.org/dist/' + version + '/' + archive, timeout=60) as response:
        archive_path.write_bytes(response.read())
    assert hashlib.sha256(archive_path.read_bytes()).hexdigest() == expected, 'release archive changed'
    with tarfile.open(archive_path, 'r:xz') as release:
        executable = release.extractfile('node-' + version + '-linux-x64/bin/node')
        assert executable is not None
        official_binary_sha256 = hashlib.sha256(executable.read()).hexdigest()
    assert identities['fixed']['sha256'] == official_binary_sha256, 'selected executable differs from authenticated official release'
    (output / 'SHASUMS256.txt').write_bytes(manifest)
    archive_path.unlink()
    identities.update({'runtime': runtime, 'platform': platform.platform(), 'containerImage': a.container_image,
        'authenticatedManifestSha256': a.authenticated_manifest_sha256, 'archive': archive,
        'archiveSha256': expected, 'officialBinarySha256': official_binary_sha256})
    for label, file in [('osReleaseSha256', '/etc/os-release'), ('osCaBundleSha256', '/etc/ssl/certs/ca-certificates.crt')]:
        identities[label] = hashlib.sha256(Path(file).read_bytes()).hexdigest()
    identities['osCertificateFiles'] = {str(file): hashlib.sha256(file.read_bytes()).hexdigest()
        for file in sorted(Path('/etc/ssl/certs').iterdir()) if file.is_file()}
(output / 'identities.json').write_text(json.dumps(identities, indent=2) + '\n')
results = []
for mode, flags, extra in [
    ('default', [], {}), ('fetch', [], {}), ('explicit-ca', [], {}), ('secure-context', [], {}),
    ('bundled', ['--use-bundled-ca'], {}),
    ('extra', [], {'NODE_EXTRA_CA_CERTS': str(old_ca)}),
    ('openssl-old', ['--use-openssl-ca'], {'SSL_CERT_FILE': str(old_ca), 'SSL_CERT_DIR': str(output / 'empty-ca')}),
    ('system-extra-old', ['--use-system-ca'], {'NODE_EXTRA_CA_CERTS': str(old_ca)}),
]:
    env = dict(os.environ)
    for key in ['NODE_OPTIONS', 'NODE_EXTRA_CA_CERTS', 'SSL_CERT_FILE', 'SSL_CERT_DIR']:
        env.pop(key, None)
    env.update(extra)
    with (output / (mode + '.json')).open('w') as out, (output / (mode + '.log')).open('w') as err:
        result = subprocess.run([str(a.fixed_node), *flags, str(root / 'remediation-node-probe.mjs'),
                                 mode, str(output)], env=env, stdout=out, stderr=err)
    results.append({'mode': mode, 'exitCode': result.returncode})
    (output / 'results.json').write_text(json.dumps(results, indent=2) + '\n')
raise SystemExit(0 if all(row['exitCode'] == 0 for row in results) else 1)
