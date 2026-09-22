using System;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;

// One command, one Job. The PowerShell controller stays outside the Job and
// admits the root atomically; the child never inherits the controller pipe.
public static class CrabpotCommandJob
{
    // Temporary issue305 receipt file; independent of the Worker/control pipe.
    sealed class StartupTrace
    {
        readonly string file, id;
        readonly Stopwatch clock = Stopwatch.StartNew();
        int sequence, bytes;

        public StartupTrace(string directory, string attemptId)
        {
            try
            {
                Guid parsed;
                if (String.IsNullOrEmpty(directory) || !Guid.TryParse(attemptId, out parsed)) return;
                file = Path.Combine(directory, "native.jsonl");
                id = parsed.ToString("D");
            }
            catch {}
        }

        public void Write(string name, uint pid = 0, bool extinct = false)
        {
            if (file == null || sequence >= 32) return;
            try
            {
                // Names are fixed literals and id is a parsed Guid; no payload strings.
                string line = String.Format(System.Globalization.CultureInfo.InvariantCulture,
                    "{{\"id\":\"{0}\",\"producer\":\"native\",\"sequence\":{1},\"event\":\"{2}\"," +
                    "\"unixMs\":{3},\"elapsedMs\":{4},\"clock\":\"Stopwatch.ElapsedMilliseconds\"," +
                    "\"childPid\":{5},\"previouslyConfirmed\":{6}}}\n",
                    id, ++sequence, name, DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),
                    clock.ElapsedMilliseconds, pid, extinct ? "true" : "false");
                int length = Encoding.UTF8.GetByteCount(line);
                if (length > 2048 || bytes + length > 65536) return;
                bytes += length;
                File.AppendAllText(file, line, new UTF8Encoding(false));
            }
            catch {}
        }
    }

    [StructLayout(LayoutKind.Sequential)]
    struct BasicLimits
    {
        public long ProcessTime, JobTime;
        public uint Flags;
        public UIntPtr MinimumWorkingSet, MaximumWorkingSet;
        public uint ActiveProcessLimit;
        public UIntPtr Affinity;
        public uint PriorityClass, SchedulingClass;
    }
    [StructLayout(LayoutKind.Sequential)]
    struct IoCounters
    {
        public ulong ReadOperations, WriteOperations, OtherOperations;
        public ulong ReadBytes, WriteBytes, OtherBytes;
    }
    [StructLayout(LayoutKind.Sequential)]
    struct ExtendedLimits
    {
        public BasicLimits Basic;
        public IoCounters Io;
        public UIntPtr ProcessMemory, JobMemory, PeakProcessMemory, PeakJobMemory;
    }
    [StructLayout(LayoutKind.Sequential)]
    struct Accounting
    {
        public long UserTime, KernelTime, PeriodUserTime, PeriodKernelTime;
        public uint PageFaults, TotalProcesses, ActiveProcesses, TerminatedProcesses;
    }
    [StructLayout(LayoutKind.Sequential)]
    struct StartupInfo
    {
        public uint Size;
        public IntPtr Reserved, Desktop, Title;
        public uint X, Y, XSize, YSize, XCount, YCount, Fill, Flags;
        public ushort ShowWindow, ReservedSize;
        public IntPtr ReservedBytes, Stdin, Stdout, Stderr;
    }
    [StructLayout(LayoutKind.Sequential)]
    struct StartupInfoEx
    {
        public StartupInfo Startup;
        public IntPtr Attributes;
    }
    [StructLayout(LayoutKind.Sequential)]
    struct ProcessInfo
    {
        public IntPtr Process, Thread;
        public uint ProcessId, ThreadId;
    }

    [DllImport("kernel32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
    static extern IntPtr CreateJobObjectW(IntPtr security, string name);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern bool SetInformationJobObject(IntPtr job, int type, ref ExtendedLimits info, uint size);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern bool QueryInformationJobObject(IntPtr job, int type, out Accounting info, uint size, IntPtr length);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern bool TerminateJobObject(IntPtr job, uint code);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern bool CloseHandle(IntPtr handle);
    [DllImport("kernel32.dll")]
    static extern IntPtr GetCurrentProcess();
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern IntPtr GetStdHandle(int stream);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern bool DuplicateHandle(IntPtr sourceProcess, IntPtr source, IntPtr targetProcess,
        out IntPtr target, uint access, bool inherit, uint options);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern bool InitializeProcThreadAttributeList(IntPtr list, int count, uint flags, ref IntPtr size);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern bool UpdateProcThreadAttribute(IntPtr list, uint flags, IntPtr attribute,
        IntPtr value, IntPtr size, IntPtr previous, IntPtr returned);
    [DllImport("kernel32.dll")]
    static extern void DeleteProcThreadAttributeList(IntPtr list);
    [DllImport("kernel32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
    static extern bool CreateProcessW(string application, StringBuilder commandLine, IntPtr processSecurity,
        IntPtr threadSecurity, bool inheritHandles, uint flags, IntPtr environment,
        string cwd, ref StartupInfoEx startup, out ProcessInfo process);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern uint WaitForSingleObject(IntPtr handle, uint milliseconds);
    [DllImport("kernel32.dll", SetLastError = true)]
    static extern bool GetExitCodeProcess(IntPtr handle, out uint code);

    static void Check(bool success, string operation)
    {
        if (!success) throw new Win32Exception(Marshal.GetLastWin32Error(), operation);
    }

    static uint Active(IntPtr job)
    {
        Accounting accounting;
        Check(QueryInformationJobObject(job, 1, out accounting,
            (uint)Marshal.SizeOf(typeof(Accounting)), IntPtr.Zero), "QueryInformationJobObject");
        return accounting.ActiveProcesses;
    }

    static void TerminateAndObserve(IntPtr job, int cleanup)
    {
        Check(TerminateJobObject(job, 1), "TerminateJobObject");
        Stopwatch wait = Stopwatch.StartNew();
        while (Active(job) != 0)
        {
            if (wait.ElapsedMilliseconds >= cleanup)
                throw new TimeoutException("Windows Job extinction was not observed");
            Thread.Sleep(10);
        }
    }

    public static void Run(string application, string commandLine, string cwd, string environment,
        int timeout, int cleanup, CancellationTokenSource ownerLost,
        CancellationTokenRegistration bootstrapKill, StreamWriter receipt,
        string diagnosticDirectory = null, string diagnosticId = null)
    {
        StartupTrace trace = new StartupTrace(diagnosticDirectory, diagnosticId);
        trace.Write("native-entered");
        if (IntPtr.Size != 8 || Marshal.SizeOf(typeof(StartupInfoEx)) != 112 ||
            Marshal.SizeOf(typeof(ExtendedLimits)) != 144 || Marshal.SizeOf(typeof(Accounting)) != 48)
            throw new PlatformNotSupportedException("Windows Job ownership requires a 64-bit Windows runtime");

        IntPtr job = IntPtr.Zero, attributes = IntPtr.Zero, handles = IntPtr.Zero;
        IntPtr jobList = IntPtr.Zero, environmentBlock = IntPtr.Zero;
        IntPtr[] inherited = new IntPtr[3];
        ProcessInfo child = new ProcessInfo();
        bool initialized = false, created = false, extinct = false;
        // Transfer from pre-compilation self-termination to explicit Job cleanup.
        // Dispose synchronizes with any bootstrap callback already in flight.
        bootstrapKill.Dispose();
        if (ownerLost.IsCancellationRequested)
            throw new IOException("command owner disconnected before admission");
        try
        {
            job = CreateJobObjectW(IntPtr.Zero, null);
            Check(job != IntPtr.Zero, "CreateJobObjectW");
            ExtendedLimits limits = new ExtendedLimits();
            limits.Basic.Flags = 0x2000; // KILL_ON_JOB_CLOSE, with neither breakaway flag.
            Check(SetInformationJobObject(job, 9, ref limits,
                (uint)Marshal.SizeOf(typeof(ExtendedLimits))), "SetInformationJobObject");

            IntPtr self = GetCurrentProcess();
            for (int i = 0; i < 3; i++)
                Check(DuplicateHandle(self, GetStdHandle(-10 - i), self, out inherited[i],
                    0, true, 2), "DuplicateHandle(stdio)");

            IntPtr bytes = IntPtr.Zero;
            InitializeProcThreadAttributeList(IntPtr.Zero, 2, 0, ref bytes);
            Check(bytes != IntPtr.Zero, "InitializeProcThreadAttributeList(size)");
            attributes = Marshal.AllocHGlobal(bytes);
            Check(InitializeProcThreadAttributeList(attributes, 2, 0, ref bytes),
                "InitializeProcThreadAttributeList");
            initialized = true;
            handles = Marshal.AllocHGlobal(IntPtr.Size * 3);
            for (int i = 0; i < 3; i++) Marshal.WriteIntPtr(handles, i * IntPtr.Size, inherited[i]);
            jobList = Marshal.AllocHGlobal(IntPtr.Size);
            Marshal.WriteIntPtr(jobList, job);
            Check(UpdateProcThreadAttribute(attributes, 0, new IntPtr(0x20002),
                handles, new IntPtr(IntPtr.Size * 3), IntPtr.Zero, IntPtr.Zero), "HANDLE_LIST");
            Check(UpdateProcThreadAttribute(attributes, 0, new IntPtr(0x2000d),
                jobList, new IntPtr(IntPtr.Size), IntPtr.Zero, IntPtr.Zero), "JOB_LIST");

            StartupInfoEx startup = new StartupInfoEx();
            startup.Startup.Size = (uint)Marshal.SizeOf(typeof(StartupInfoEx));
            startup.Startup.Flags = 0x100;
            startup.Startup.Stdin = inherited[0];
            startup.Startup.Stdout = inherited[1];
            startup.Startup.Stderr = inherited[2];
            startup.Attributes = attributes;
            environmentBlock = Marshal.StringToHGlobalUni(environment);
            trace.Write("create-process-precheck");
            if (ownerLost.IsCancellationRequested)
                throw new IOException("command owner disconnected before admission");
            Check(CreateProcessW(application, new StringBuilder(commandLine), IntPtr.Zero,
                IntPtr.Zero, true, 0x08080400, environmentBlock, cwd, ref startup, out child),
                "CreateProcessW(JOB_LIST)");
            created = true;
            trace.Write("create-process-succeeded", child.ProcessId);
            trace.Write("ready-write-begin", child.ProcessId);
            receipt.WriteLine("READY " + child.ProcessId);
            trace.Write("ready-write-end", child.ProcessId);
            // Backing HANDLE arrays stay alive through CreateProcess and attribute deletion.
            DeleteProcThreadAttributeList(attributes);
            initialized = false;
            for (int i = 0; i < 3; i++)
            {
                Check(CloseHandle(inherited[i]), "CloseHandle(child stdio)");
                inherited[i] = IntPtr.Zero;
            }
            Check(CloseHandle(child.Thread), "CloseHandle(child thread)");
            child.Thread = IntPtr.Zero;

            Stopwatch clock = Stopwatch.StartNew();
            bool timedOut = false;
            for (;;)
            {
                uint wait = WaitForSingleObject(child.Process, 0);
                if (wait == 0) break;
                Check(wait == 258, "WaitForSingleObject");
                if (ownerLost.IsCancellationRequested ||
                    clock.ElapsedMilliseconds >= timeout)
                {
                    timedOut = clock.ElapsedMilliseconds >= timeout;
                    TerminateAndObserve(job, cleanup);
                    extinct = true;
                    break;
                }
                Thread.Sleep(10);
            }
            uint code;
            Check(GetExitCodeProcess(child.Process, out code), "GetExitCodeProcess");
            receipt.WriteLine("EXIT " + code);
            if (!extinct)
            {
                if (Active(job) != 0) TerminateAndObserve(job, cleanup);
                extinct = true;
            }
            if (timedOut) receipt.WriteLine("TIMEOUT");
            receipt.WriteLine("CLOSED");
            trace.Write("closed-write-end", child.ProcessId, extinct);
        }
        finally
        {
            trace.Write("native-cleanup-entered", child.ProcessId, extinct);
            // Owner loss or receipt failure still performs bounded explicit cleanup.
            // KILL_ON_JOB_CLOSE is only the last fallback, never a success receipt.
            try
            {
                if (created && !extinct)
                {
                    TerminateAndObserve(job, cleanup);
                    trace.Write("finally-job-extinction-observed", child.ProcessId, extinct);
                }
            }
            finally
            {
                if (initialized) DeleteProcThreadAttributeList(attributes);
                foreach (IntPtr handle in inherited) if (handle != IntPtr.Zero) CloseHandle(handle);
                if (child.Thread != IntPtr.Zero) CloseHandle(child.Thread);
                if (child.Process != IntPtr.Zero) CloseHandle(child.Process);
                if (job != IntPtr.Zero) CloseHandle(job);
                if (attributes != IntPtr.Zero) Marshal.FreeHGlobal(attributes);
                if (handles != IntPtr.Zero) Marshal.FreeHGlobal(handles);
                if (jobList != IntPtr.Zero) Marshal.FreeHGlobal(jobList);
                if (environmentBlock != IntPtr.Zero) Marshal.FreeHGlobal(environmentBlock);
                trace.Write("native-cleanup-ended", child.ProcessId, extinct);
            }
        }
    }
}
