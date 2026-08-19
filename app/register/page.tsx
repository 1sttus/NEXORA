import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0D10] px-6 py-16 text-[#F5F4EF]">
      <div className="w-full max-w-lg rounded-[28px] border border-[#1D242A] bg-[#0F1518] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2B3138] bg-[#12181D] text-lg font-semibold text-[#C9A96A]">N</div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[#A5ABB4]">NEXORA</div>
        </div>

        <h1 className="text-3xl tracking-[-0.05em]">Create account</h1>
        <p className="mt-3 text-sm text-[#A5ABB4]">Open a profile to access markets, portfolio control, and premium signal intelligence.</p>

        <form className="mt-8 grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-[#D9D7D1]">First name</label>
            <input className="w-full rounded-2xl border border-[#2A3137] bg-[#10181D] px-4 py-3 text-[#F5F4EF] outline-none" placeholder="Alex" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-[#D9D7D1]">Last name</label>
            <input className="w-full rounded-2xl border border-[#2A3137] bg-[#10181D] px-4 py-3 text-[#F5F4EF] outline-none" placeholder="Morgan" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-[#D9D7D1]">Email</label>
            <input type="email" className="w-full rounded-2xl border border-[#2A3137] bg-[#10181D] px-4 py-3 text-[#F5F4EF] outline-none" placeholder="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-[#D9D7D1]">Password</label>
            <input type="password" className="w-full rounded-2xl border border-[#2A3137] bg-[#10181D] px-4 py-3 text-[#F5F4EF] outline-none" placeholder="Create a secure password" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-[#D9D7D1]">Referral code (optional)</label>
            <input className="w-full rounded-2xl border border-[#2A3137] bg-[#10181D] px-4 py-3 text-[#F5F4EF] outline-none" placeholder="NEXORA-REF" />
          </div>

          <button className="md:col-span-2 w-full rounded-full bg-[#C9A96A] px-4 py-3 text-sm font-medium text-[#11161B] transition hover:bg-[#d9b982]">
            Create account
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#A5ABB4]">
          Already have an account? <Link href="/login" className="text-[#C9A96A]">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
