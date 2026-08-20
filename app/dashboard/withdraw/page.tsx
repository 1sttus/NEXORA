"use client";

import { ArrowDownLeft, Landmark, Wallet } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function DashboardWithdrawPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <DashboardShell
      session={session}
      title="Withdraw"
      subtitle="Choose whether your request goes to a bank account or a coin wallet."
      onLogout={() => logout("/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Withdrawal</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Bank or coin wallet</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--soft)] px-3 py-2 text-xs font-medium text-[var(--text)]">
            <ArrowDownLeft size={14} /> $1,250.00
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[22px] bg-[var(--soft)] p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Bank details</div>
            <div className="mt-4 flex items-center gap-3">
              <Landmark size={18} className="text-[var(--gold)]" />
              <div>
                <div className="text-lg font-medium text-[var(--text)]">First Horizon Bank</div>
                <div className="text-sm text-[var(--text-soft)]">Demo User • *****3947</div>
              </div>
            </div>
          </div>

          <div className="rounded-[22px] bg-[var(--soft)] p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Coin wallet</div>
            <div className="mt-4 flex items-center gap-3">
              <Wallet size={18} className="text-[var(--gold)]" />
              <div>
                <div className="text-lg font-medium text-[var(--text)]">Connected</div>
                <div className="break-all text-sm text-[var(--text-soft)]">TDEM0-WALLET-8A21-F4C2-92B0</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </DashboardShell>
  );
}
