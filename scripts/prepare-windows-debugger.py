"""Extract only the signed x64 console debugger from Microsoft's pinned bundle."""
import io
import hashlib
from pathlib import Path
import struct
import sys
import urllib.request
import zipfile

URL = "https://windbg.download.prss.microsoft.com/dbazure/prod/1-2610-1001-0/windbg.msixbundle"
SIZE = 1203512387
# Fixed bytes of the Microsoft-signed 1.2610.1001.0 x64 binaries. Checking
# hashes here avoids starting PowerShell to verify signatures before a cold run.
SHA256 = {
    "cdb.exe": "a9e81c9051a7902fbd8ebd8d348cf83c96f2d8bffd6c2174171a23cef16bb039",
    "dbgeng.dll": "ad50a89dea9ec578a2db92273eccd6cd96f068a63e0b7b9fe8b9d74fdd73707b",
    "dbgmodel.dll": "700935cf0a51e1fd59ca83c54cced0446a7bb8756ee0e644f36516c3c00a1051",
    "dbghelp.dll": "fac7ed67467df056aa904d31e66559080bc40093fbf78eecbe55e276c01ae19f",
    "dbgcore.dll": "082c216fab924cc68042365b34db16a16936ca5cc08894daf3fb758e27ab002b",
    "symsrv.dll": "40062d3a961605be345ad34dfef498f597ad326ff8ff236d96a72002c0673549",
    "msdia140.dll": "acda8b74fa81a07838c85ce2f9c81e989e416a48e1137ec4e497232f921b7267",
}


class Remote(io.RawIOBase):
    def __init__(self, start=0, size=SIZE):
        self.start, self.size, self.position = start, size, 0

    def seek(self, offset, whence=0):
        self.position = offset if whence == 0 else self.position + offset if whence == 1 else self.size + offset
        if not 0 <= self.position <= self.size:
            raise ValueError("invalid archive position")
        return self.position

    def tell(self):
        return self.position

    def read(self, count=-1):
        count = self.size - self.position if count < 0 else min(count, self.size - self.position)
        if count <= 0:
            return b""
        if count > 32 * 1024 * 1024:
            raise ValueError("archive read exceeds bound")
        request = urllib.request.Request(URL, headers={
            "Range": f"bytes={self.start + self.position}-{self.start + self.position + count - 1}"})
        with urllib.request.urlopen(request, timeout=30) as response:
            if response.status != 206:
                raise ValueError("server did not honor bounded range request")
            data = response.read(count)
        if len(data) != count:
            raise ValueError("truncated archive range")
        self.position += len(data)
        return data


remote = Remote()
with zipfile.ZipFile(remote) as bundle:
    package = bundle.getinfo("windbg_win-x64.msix")
    if package.compress_type != zipfile.ZIP_STORED:
        raise ValueError("nested package is not independently range-readable")
    remote.seek(package.header_offset)
    header = remote.read(30)
    name_length, extra_length = struct.unpack_from("<HH", header, 26)
    package_offset = package.header_offset + 30 + name_length + extra_length
output = Path(sys.argv[1])
output.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(Remote(package_offset, package.file_size)) as archive:
    for name, digest in SHA256.items():
        item = archive.getinfo("amd64/" + name)
        if item.file_size > 32 * 1024 * 1024:
            raise ValueError("debugger file exceeds bound")
        data = archive.read(item)
        if hashlib.sha256(data).hexdigest() != digest:
            raise ValueError("debugger digest mismatch: " + name)
        (output / name).write_bytes(data)
        print(name, item.file_size, digest)
