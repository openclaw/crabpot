"""Bounded process/thread counters without warming the PowerShell runtime."""
import ctypes as C
from ctypes import wintypes as W
import json
from pathlib import Path
import sys
import time


class UnicodeString(C.Structure):
    _fields_ = [("length", W.USHORT), ("maximum", W.USHORT), ("buffer", C.c_void_p)]


class ProcessInfo(C.Structure):
    _fields_ = [
        ("next", W.ULONG), ("threads", W.ULONG), ("private_ws", C.c_int64),
        ("faults", W.ULONG), ("threads_high", W.ULONG), ("cycles", C.c_uint64),
        ("created", C.c_int64), ("user", C.c_int64), ("kernel", C.c_int64),
        ("name", UnicodeString), ("priority", W.LONG),
        ("pid", C.c_void_p), ("parent", C.c_void_p), ("handles", W.ULONG),
        ("session", W.ULONG), ("key", C.c_size_t),
        ("peak_virtual", C.c_size_t), ("virtual", C.c_size_t), ("page_faults", W.ULONG),
        ("peak_ws", C.c_size_t), ("ws", C.c_size_t),
        ("peak_paged", C.c_size_t), ("paged", C.c_size_t),
        ("peak_nonpaged", C.c_size_t), ("nonpaged", C.c_size_t),
        ("pagefile", C.c_size_t), ("peak_pagefile", C.c_size_t), ("private", C.c_size_t),
        ("read_ops", C.c_int64), ("write_ops", C.c_int64), ("other_ops", C.c_int64),
        ("read_bytes", C.c_int64), ("write_bytes", C.c_int64), ("other_bytes", C.c_int64),
    ]


class ThreadInfo(C.Structure):
    _fields_ = [
        ("kernel", C.c_int64), ("user", C.c_int64), ("created", C.c_int64),
        ("wait_time", W.ULONG), ("start", C.c_void_p),
        ("pid", C.c_void_p), ("tid", C.c_void_p),
        ("priority", W.LONG), ("base_priority", W.LONG),
        ("switches", W.ULONG), ("state", W.ULONG), ("wait_reason", W.ULONG),
    ]


assert C.sizeof(ProcessInfo) == 256 and C.sizeof(ThreadInfo) == 80
query = C.WinDLL("ntdll").NtQuerySystemInformation
query.argtypes = [W.ULONG, C.c_void_p, W.ULONG, C.POINTER(W.ULONG)]
query.restype = W.LONG
root = Path(sys.argv[1])
selected = {"powershell.exe", "node.exe", "cmd.exe", "MsMpEng.exe"}
deadline = time.monotonic() + 25 * 60
with (root / "native-processes.jsonl").open("w", encoding="utf-8", buffering=1) as output:
    while not (root / "stop").exists() and time.monotonic() < deadline:
        size = 1024 * 1024
        while True:
            buffer = C.create_string_buffer(size)
            required = W.ULONG()
            result = query(5, buffer, size, C.byref(required))
            if result == 0:
                break
            if result != -1073741820 or size >= 16 * 1024 * 1024:
                raise OSError(f"NtQuerySystemInformation failed: {result}")
            size = min(16 * 1024 * 1024, max(size * 2, required.value + 65536))
        offset = 0
        processes = []
        while offset + C.sizeof(ProcessInfo) <= size:
            info = ProcessInfo.from_buffer(buffer, offset)
            address = C.addressof(buffer)
            valid_name = info.name.buffer and address <= info.name.buffer <= address + size - info.name.length
            name = C.wstring_at(info.name.buffer, info.name.length // 2) if valid_name else ""
            if name in selected:
                threads = []
                for index in range(min(info.threads, 256)):
                    start = offset + C.sizeof(ProcessInfo) + index * C.sizeof(ThreadInfo)
                    if start + C.sizeof(ThreadInfo) > size:
                        break
                    thread = ThreadInfo.from_buffer(buffer, start)
                    threads.append({"tid": thread.tid, "state": thread.state, "waitReason": thread.wait_reason,
                                    "user": thread.user, "kernel": thread.kernel, "switches": thread.switches})
                processes.append({"pid": info.pid, "parent": info.parent, "name": name,
                                  "handles": info.handles, "user": info.user, "kernel": info.kernel,
                                  "readBytes": info.read_bytes, "writeBytes": info.write_bytes,
                                  "threads": threads})
            if not info.next:
                break
            offset += info.next
        output.write(json.dumps({"atMs": time.time_ns() // 1_000_000, "processes": processes}) + "\n")
        (root / "monitor-ready").touch()
        time.sleep(0.25)
