"""Bounded process/thread counters without warming the PowerShell runtime."""
import ctypes as C
from ctypes import wintypes as W
import io
import json
from pathlib import Path
import sys
import time
import subprocess
from contextlib import ExitStack


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
monitor_minutes = int(sys.argv[4]) if len(sys.argv) > 4 else 25
assert 1 <= monitor_minutes <= 300
deadline = time.monotonic() + monitor_minutes * 60
debugger = Path(sys.argv[2]) if len(sys.argv) > 2 else None
subject_owner = Path(sys.argv[3]) if len(sys.argv) > 3 else None
observed_helpers = {}
captured_stacks = set()
stack_jobs = []
pipe_position = 0


def close_debuggers():
    failures = []
    for job in stack_jobs:
        child = job["child"]
        try:
            if child.poll() is None:
                child.kill()
            child.wait(timeout=2)
        except (OSError, subprocess.TimeoutExpired) as error:
            failures.append(type(error).__name__)
    if failures:
        raise RuntimeError("debugger cleanup unconfirmed: " + ",".join(failures))


with ExitStack() as cleanup, (root / "native-processes.jsonl").open("w", encoding="utf-8", buffering=1) as output:
    cleanup.callback(close_debuggers)
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
                                  "created": info.created, "workingSet": info.ws, "privateBytes": info.private,
                                  "readBytes": info.read_bytes, "writeBytes": info.write_bytes,
                                  "threads": threads})
            if not info.next:
                break
            offset += info.next
        output.write(json.dumps({"atMs": time.time_ns() // 1_000_000, "processes": processes}) + "\n")
        if debugger is not None:
            with (root / "pipes.jsonl").open(encoding="utf-8") if (root / "pipes.jsonl").exists() else io.StringIO("") as pipes:
                pipes.seek(pipe_position)
                for line in pipes:
                    try:
                        event = json.loads(line)
                        # Timeout fixtures use copied owners; they are controls,
                        # not natural startup failures in the subject checkout.
                        if subject_owner is not None and Path(event.get("owner", "")) != subject_owner:
                            continue
                        if event.get("exitCode") is not None or event.get("signal") is not None:
                            observed_helpers.pop(event["pid"], None)
                        else:
                            observed_helpers.setdefault(event["pid"], (event["atMs"], event.get("parent")))
                    except (ValueError, KeyError):
                        pass
                pipe_position = pipes.tell()
            now = time.time_ns() // 1_000_000
            live = {process["pid"]: process for process in processes if process["name"] == "powershell.exe"}
            for pid, (started, parent) in observed_helpers.items():
                identity = (pid, started)
                if pid not in live or identity in captured_stacks or len(captured_stacks) >= 4 or now - started < 6000:
                    continue
                created_ms = live[pid]["created"] // 10000 - 11644473600000
                if live[pid]["parent"] != parent or not started - 10000 <= created_ms <= started + 1000:
                    continue
                marker = root / f"helper-{pid}.txt"
                if marker.exists():
                    entry = marker.read_text(encoding="utf-8-sig")
                    # Windows reuses PIDs; a prior helper's marker is not progress
                    # by this launch, even when the owner process is unchanged.
                    if any(line.startswith("pipe-connected ") and line.split()[-1].isdigit()
                           and int(line.split()[-1]) >= started for line in entry.splitlines()):
                        continue
                # Noninvasive attach neither suspends nor terminates the helper.
                # Only stacks are requested: never arguments, locals or memory dumps.
                captured_stacks.add(identity)
                command = ".sympath C:\\no-symbols;~*k;.load C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\SOS.dll;~*e !clrstack;qd"
                output.write(json.dumps({"atMs": now, "kind": "noninvasive-stack-start", "pid": pid}) + "\n")
                try:
                    child = subprocess.Popen([str(debugger), "-pvr", "-p", str(pid), "-logo",
                                              str(root / f"stack-{pid}-{started}.txt"), "-c", command],
                                             stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                                             creationflags=0x08000000)
                    stack_jobs.append({"child": child, "pid": pid, "started": time.monotonic(), "done": False})
                except OSError as error:
                    output.write(json.dumps({"kind": "noninvasive-stack-error", "pid": pid,
                                             "errno": error.errno}) + "\n")
                break
            for job in stack_jobs:
                if job["done"]:
                    continue
                child = job["child"]
                timed_out = child.poll() is None and time.monotonic() - job["started"] > 8
                if timed_out:
                    child.kill()
                if child.poll() is not None:
                    child.wait(timeout=2)
                    job["done"] = True
                    output.write(json.dumps({"atMs": time.time_ns() // 1_000_000,
                                             "kind": "noninvasive-stack-end", "pid": job["pid"],
                                             "exitCode": child.returncode, "timedOut": timed_out}) + "\n")
        (root / "monitor-ready").touch()
        time.sleep(0.25)
