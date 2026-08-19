import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0D10] px-6 py-16 text-[#F5F4EF]">
      <div className="w-full max-w-md rounded-[28px] border border-[#1D242A] bg-[#0F1518] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2B3138] bg-[#12181D] text-lg font-semibold text-[#C9A96A]">N</div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[#A5ABB4]">NEXORA</div>
        </div>

        <h1 className="text-3xl tracking-[-0.05em]">Welcome back</h1>
        <p className="mt-3 text-sm text-[#A5ABB4]">Access your portfolio, signals, and account security.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-[#D9D7D1]">Email</label>
            <input className="w-full rounded-2xl border border-[#2A3137] bg-[#10181D] px-4 py-3 text-[#F5F4EF] outline-none ring-0" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-[#D9D7D1]">Password</label>
            <input type="password" className="w-full rounded-2xl border border-[#2A3137] bg-[#10181D] px-4 py-3 text-[#F5F4EF] outline-none ring-0" placeholder="Enter your password" />
          </div>

          <div className="flex items-center justify-between text-sm text-[#A5ABB4]">
            <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A96A]" /> Remember me</label>
            <Link href="/forgot-password" className="text-[#C9A96A]">Forgot password?</Link>
          </div>

          <button className="w-full rounded-full bg-[#C9A96A] px-4 py-3 text-sm font-medium text-[#11161B] transition hover:bg-[#d9b982]">
            Sign in
          </button>
        </form>

        <div className="mt-8 space-y-3 text-center text-sm text-[#A5ABB4]">
          <p>
            Need an account? <Link href="/register" className="text-[#C9A96A]">Create one</Link>
          </p>
          <p>
            Demo user login: <Link href="/demo-user" className="text-[#C9A96A]">Use test account</Link>
          </p>
          <p>
            Admin login: <Link href="/admin/login" className="text-[#C9A96A]">Open admin</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
