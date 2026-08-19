"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { findDemoAccount, writeStoredSession } from "@/lib/auth-demo";

export default function DemoUserLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@nexora.io");
  const [password, setPassword] = useState("Demo@123");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const account = findDemoAccount(email, password);

    if (!account || account.role !== "user") {
      setError("Invalid demo user credentials. Use demo@nexora.io / Demo@123");
      return;
    }

    writeStoredSession(account);
    router.push(account.redirectUrl);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-5 py-10 text-[var(--text)]">
      <div className="w-full max-w-md rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--card)] text-lg font-semibold text-[var(--gold)]">N</div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">NEXORA</div>
            <div className="mt-1 text-xs text-[var(--muted)]">Demo user account</div>
          </div>
        </div>

        <h1 className="text-3xl font-medium tracking-[-0.06em]">User portal</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">Use the sample user account to preview the trading dashboard and portfolio controls.</p>

        <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 text-sm text-[var(--muted)]">
          <div className="font-medium text-[var(--text)]">Default user login</div>
          <div className="mt-2">Email: demo@nexora.io</div>
          <div>Password: Demo@123</div>
        </div>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm text-[var(--muted)]">Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-[var(--muted)]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none"
            />
          </div>

          {error ? <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</div> : null}

          <button type="submit" className="flex w-full items-center justify-center rounded-full bg-[var(--gold)] px-4 py-3 text-sm font-semibold text-[#14181b]">
            Sign in as demo user
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Need admin access? <Link href="/admin/login" className="text-[var(--gold)]">Open admin login</Link>
        </p>
      </div>
    </main>
  );
}
