"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { findDemoAccount, writeStoredSession } from "@/lib/auth-demo";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@nexora.io");
  const [password, setPassword] = useState("Demo@123");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const account = findDemoAccount(email, password);

    if (!account) {
      setError("Invalid credentials. Use demo@nexora.io / Demo@123");
      return;
    }

    writeStoredSession(account);
    router.push(account.redirectUrl);
  };

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
              <div className="text-xs text-[var(--text-soft)]">Minimal market workspace</div>
            </div>
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Sign in</p>
          <h1 className="mt-4 text-5xl font-medium tracking-[-0.07em] text-[var(--text)] md:text-6xl">
            Welcome back.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--text-soft)]">
            Access your portfolio, signals, and account security in a quieter interface with clear hierarchy.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Cleaner sessions",
              "Minimal surfaces",
              "Role-aware access",
            ].map((item) => (
              <div key={item} className="rounded-[20px] border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--text-soft)] shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
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
              <div className="text-xs text-[var(--text-soft)]">Demo login</div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4 text-sm text-[var(--text-soft)]">
            <div className="font-medium text-[var(--text)]">Default user login</div>
            <div className="mt-2">Email: demo@nexora.io</div>
            <div>Password: Demo@123</div>
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm text-[var(--text-soft)]">Email</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-[var(--text-soft)]">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between gap-4 text-sm text-[var(--text-soft)]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[var(--gold)]" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-[var(--gold)]">
                Forgot password?
              </Link>
            </div>

            {error ? <div className="rounded-xl border border-red-500/20 bg-red-500/8 px-3 py-2 text-sm text-red-700">{error}</div> : null}

            <button
              type="submit"
              className="w-full rounded-full bg-[var(--text)] px-4 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]"
            >
              Sign in
            </button>
          </form>

          <div className="mt-8 space-y-3 text-center text-sm text-[var(--text-soft)]">
            <p>
              Need an account? <Link href="/register" className="text-[var(--gold)]">Create one</Link>
            </p>
            <p>
              Demo user login: <Link href="/demo-user" className="text-[var(--gold)]">Use test account</Link>
            </p>
            <p>
              Admin login: <Link href="/admin/login" className="text-[var(--gold)]">Open admin</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
