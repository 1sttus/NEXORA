import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-[rgba(156,122,61,0.08)] blur-3xl" />
        <div className="absolute right-[-6rem] bottom-10 h-80 w-80 rounded-full bg-[rgba(80,131,154,0.08)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
        <section className="max-w-xl">
          <div className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-lg font-semibold text-[var(--gold)] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              N
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">NEXORA</div>
              <div className="text-xs text-[var(--text-soft)]">Create a minimal account</div>
            </div>
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Register</p>
          <h1 className="mt-4 text-5xl font-medium tracking-[-0.07em] text-[var(--text)] md:text-6xl">
            Create your workspace.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--text-soft)]">
            Open a profile to access markets, portfolio control, and premium signal intelligence.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Clean onboarding", "Clear hierarchy", "Quick demo access"].map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--text-soft)] shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_48px_rgba(15,23,42,0.04)] sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-sm font-semibold text-[var(--gold)]">
              N
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">NEXORA</div>
              <div className="text-xs text-[var(--text-soft)]">Account creation</div>
            </div>
          </div>

          <form className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-[var(--text-soft)]">First name</label>
              <input className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]" placeholder="Alex" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-[var(--text-soft)]">Last name</label>
              <input className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]" placeholder="Morgan" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-[var(--text-soft)]">Email</label>
              <input type="email" className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]" placeholder="you@example.com" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-[var(--text-soft)]">Password</label>
              <input type="password" className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]" placeholder="Create a secure password" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-[var(--text-soft)]">Referral code (optional)</label>
              <input className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]" placeholder="NEXORA-REF" />
            </div>

            <button className="md:col-span-2 w-full rounded-full bg-[var(--text)] px-4 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]">
              Create account
            </button>
          </form>

          <div className="mt-8 space-y-3 text-center text-sm text-[var(--text-soft)]">
            <p>
              Already have an account? <Link href="/login" className="text-[var(--gold)]">Sign in</Link>
            </p>
            <p>
              Demo user access: <Link href="/demo-user" className="text-[var(--gold)]">Use test account</Link>
            </p>
            <p>
              Admin access: <Link href="/admin/login" className="text-[var(--gold)]">Open admin login</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
