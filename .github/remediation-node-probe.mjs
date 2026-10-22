// Relocatable form of the campaign's release qualification probe, with private HTTPS controls.
import https from 'node:https';
import tls from 'node:tls';
import fs from 'node:fs';
import path from 'node:path';
import { once } from 'node:events';
const mode = process.argv[2];
const base = process.argv[3];
const hosts = JSON.parse(fs.readFileSync(new URL('./remediation-incident-hosts.json', import.meta.url)));
const ca = fs.readFileSync(path.join(base, 'old-roots.pem'));
const context = tls.createSecureContext({ ca });
async function probe(host) {
  if (mode === 'fetch') {
    try {
      const response = await fetch(`https://${host}/`, { signal: AbortSignal.timeout(15000) });
      await response.arrayBuffer();
      return { host, accepted: true, status: response.status };
    } catch (error) {
      return { host, accepted: false, code: error.cause?.code ?? error.code, error: error.cause?.message ?? error.message };
    }
  }
  return new Promise(resolve => {
    const options = { timeout: 15000, agent: false };
    if (mode === 'explicit-ca') options.ca = ca;
    if (mode === 'secure-context') options.secureContext = context;
    const request = https.get(`https://${host}/`, options, response => {
      const row = { host, accepted: true, status: response.statusCode, authorized: response.socket.authorized };
      response.resume();
      response.on('end', () => resolve(row));
    });
    request.on('timeout', () => request.destroy(new Error('probe timeout')));
    request.on('error', error => resolve({ host, accepted: false, code: error.code ?? null, error: error.message }));
  });
}
const rows = [];
for (let i = 0; i < hosts.length; i += 4) rows.push(...await Promise.all(hosts.slice(i, i + 4).map(probe)));
const control = await probe('github.com');
const server = https.createServer({
  key: fs.readFileSync(path.join(base, 'private/key.pem')),
  cert: fs.readFileSync(path.join(base, 'private/cert.pem')),
}, (_request, response) => response.end('legitimate private HTTPS'));
server.listen(0, '127.0.0.1');
await once(server, 'listening');
async function privateProbe(servername) {
  return new Promise(resolve => {
    const request = https.get({ hostname: '127.0.0.1', port: server.address().port, servername,
      ca: fs.readFileSync(path.join(base, 'private/ca.pem')), rejectUnauthorized: true, agent: false,
      timeout: 15000 }, response => {
      const authorized = response.socket.authorized;
      response.resume();
      response.on('end', () => resolve({ servername, accepted: true, status: response.statusCode, authorized }));
    });
    request.on('timeout', () => request.destroy(new Error('private probe timeout')));
    request.on('error', error => resolve({ servername, accepted: false, code: error.code }));
  });
}
let privateControls;
try {
  privateControls = [await privateProbe('localhost'), await privateProbe('different.invalid')];
} finally {
  await new Promise(resolve => server.close(resolve));
}
const result = { node: process.version, arch: process.arch, platform: process.platform,
  openssl: process.versions.openssl, mode, execArgv: process.execArgv,
  systemCaCount: tls.getCACertificates('system').length,
  sslCertFile: process.env.SSL_CERT_FILE ?? null, extraCa: process.env.NODE_EXTRA_CA_CERTS ?? null,
  rows, control, privateControls };
console.log(JSON.stringify(result, null, 2));
if (rows.length !== 12 || rows.some(row => row.accepted || row.code !== 'CERT_REVOKED') ||
    !control.accepted || !privateControls[0].authorized ||
    privateControls[1].accepted || privateControls[1].code !== 'ERR_TLS_CERT_ALTNAME_INVALID') process.exitCode = 1;
