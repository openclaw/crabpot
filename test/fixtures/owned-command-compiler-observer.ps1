param([string]$Root)
$ErrorActionPreference = "Stop"
Add-Type -TypeDefinition @'
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Runtime.InteropServices;
using System.Threading;

public static class CompilerObserver
{
    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    struct ProcessEntry
    {
        public uint Size, Usage, Pid;
        public UIntPtr Heap;
        public uint Module, Threads, Parent;
        public int Priority;
        public uint Flags;
        [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 260)]
        public string Name;
    }
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern IntPtr CreateToolhelp32Snapshot(uint flags, uint pid);
    [DllImport("kernel32.dll", CharSet = CharSet.Unicode)]
    static extern bool Process32FirstW(IntPtr snapshot, ref ProcessEntry entry);
    [DllImport("kernel32.dll", CharSet = CharSet.Unicode)]
    static extern bool Process32NextW(IntPtr snapshot, ref ProcessEntry entry);
    [DllImport("kernel32.dll")]
    static extern IntPtr OpenThread(uint access, bool inherit, uint id);
    [DllImport("kernel32.dll")]
    static extern uint SuspendThread(IntPtr thread);
    [DllImport("kernel32.dll")]
    static extern uint ResumeThread(IntPtr thread);
    [DllImport("kernel32.dll")]
    static extern bool CloseHandle(IntPtr handle);

    static int CompilerChild(int parent)
    {
        IntPtr snapshot = CreateToolhelp32Snapshot(2, 0);
        if (snapshot == new IntPtr(-1)) throw new InvalidOperationException("process snapshot failed");
        try
        {
            ProcessEntry entry = new ProcessEntry();
            entry.Size = (uint)Marshal.SizeOf(typeof(ProcessEntry));
            bool next = Process32FirstW(snapshot, ref entry);
            while (next)
            {
                if (entry.Parent == parent && String.Equals(entry.Name, "csc.exe", StringComparison.OrdinalIgnoreCase))
                    return (int)entry.Pid;
                next = Process32NextW(snapshot, ref entry);
            }
            return 0;
        }
        finally { CloseHandle(snapshot); }
    }

    static void Publish(string root, string name, string json)
    {
        string pending = Path.Combine(root, name + ".pending");
        File.WriteAllText(pending, json);
        File.Move(pending, Path.Combine(root, name));
    }

    public static void Run(string root)
    {
        Process compiler = null;
        Process target = null;
        List<IntPtr> threads = new List<IntPtr>();
        Stopwatch clock = Stopwatch.StartNew();
        try
        {
            Publish(root, "observer-ready", "{}");
            string helperFile = Path.Combine(root, "target-pid");
            string rescueFile = Path.Combine(root, "observer-rescue");
            int helper = 0;
            while (helper == 0 && clock.ElapsedMilliseconds < 15000 && !File.Exists(rescueFile))
            {
                if (File.Exists(helperFile)) Int32.TryParse(File.ReadAllText(helperFile), out helper);
                if (helper == 0) Thread.Sleep(5);
            }
            if (helper == 0) throw new InvalidOperationException("target was not observed");
            target = Process.GetProcessById(helper);
            IntPtr targetHeld = target.Handle;
            if (target.ProcessName != "powershell" || target.HasExited)
                throw new InvalidOperationException("compilation target identity changed");
            int pid = 0;
            while (pid == 0 && clock.ElapsedMilliseconds < 20000 && !File.Exists(rescueFile))
            {
                pid = CompilerChild(helper);
                if (pid == 0) Thread.Sleep(1);
            }
            if (pid == 0) throw new InvalidOperationException("actual csc.exe child was not observed");
            compiler = Process.GetProcessById(pid);
            // Retain the exact process handle before suspension or any later rescue.
            IntPtr held = compiler.Handle;
            if (compiler.ProcessName != "csc" || compiler.HasExited)
                throw new InvalidOperationException("compiler identity changed before suspension");
            foreach (ProcessThread thread in compiler.Threads)
            {
                IntPtr handle = OpenThread(2, false, (uint)thread.Id);
                if (handle == IntPtr.Zero) continue;
                if (SuspendThread(handle) == UInt32.MaxValue) { CloseHandle(handle); continue; }
                threads.Add(handle);
            }
            if (threads.Count == 0 || compiler.HasExited)
                throw new InvalidOperationException("compiler was not alive and suspended");
            Publish(root, "compiler-suspended.json",
                "{\"targetPid\":" + helper + ",\"pid\":" + pid + ",\"name\":\"csc.exe\",\"suspended\":true}");
            while (!compiler.WaitForExit(20) && clock.ElapsedMilliseconds < 25000 &&
                !File.Exists(rescueFile)) { }
            bool rescued = !compiler.HasExited;
            Publish(root, "compiler-exited.json",
                "{\"pid\":" + pid + ",\"exited\":" + (!rescued ? "true" : "false") +
                ",\"rescued\":" + (rescued ? "true" : "false") + "}");
        }
        finally
        {
            foreach (IntPtr thread in threads) { ResumeThread(thread); CloseHandle(thread); }
            if (compiler != null)
            {
                if (!compiler.WaitForExit(3000)) { compiler.Kill(); compiler.WaitForExit(3000); }
                compiler.Dispose();
            }
            if (target != null)
            {
                if (!target.WaitForExit(1000)) { target.Kill(); target.WaitForExit(3000); }
                target.Dispose();
            }
        }
    }
}
'@
[CompilerObserver]::Run($Root)
