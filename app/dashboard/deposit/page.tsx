"use client";

import { Coins, Copy } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function DashboardDepositPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <DashboardShell
      session={session}
      title="Deposit"
      subtitle="Fund your wallet using a coin deposit address. This flow is designed for clear, monitored transfers."
      onLogout={() => logout("/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Deposit</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Coin-only funding</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--soft)] px-3 py-2 text-xs font-medium text-[var(--text)]">
            <Coins size={14} /> USDT / TRC20
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[22px] bg-[var(--soft)] p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Address</div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input readOnly value="TDEM0-USDT-TRC20-82B7-91A4-6C30" className="w-full rounded-full border border-transparent bg-white/70 px-4 py-3 text-sm text-[var(--text)]" />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text)] px-4 py-3 text-sm font-medium text-[var(--bg)]">
                <Copy size={14} /> Copy
              </button>
            </div>
            <div className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
              Send only the supported deposit coin to the address above. Network confirmation is required before funds are reflected.
            </div>
          </div>

          <div className="rounded-[22px] bg-[var(--soft)] p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Funding note</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] bg-white/70 p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Minimum</div>
                <div className="mt-2 text-lg font-medium text-[var(--text)]">500 USDT</div>
              </div>
              <div className="rounded-[18px] bg-white/70 p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Fee</div>
                <div className="mt-2 text-lg font-medium text-[var(--text)]">Low</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </DashboardShell>
  );
}
