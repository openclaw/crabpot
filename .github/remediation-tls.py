"""Qualify the selected native executable; never change the runner's trust stores."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import subprocess

p = argparse.ArgumentParser()
p.add_argument('--old-node', type=Path, required=True)
p.add_argument('--fixed-node', type=Path, required=True)
p.add_argument('--output', type=Path, required=True)
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
