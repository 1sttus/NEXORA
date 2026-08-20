"use client";

import { BarChart3, TrendingUp } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

const marketRows = [
  { symbol: "BTC", name: "Bitcoin", price: "$68,420.12", change: "+2.84%" },
  { symbol: "ETH", name: "Ethereum", price: "$3,810.56", change: "+1.67%" },
  { symbol: "SOL", name: "Solana", price: "$164.90", change: "+4.12%" },
];

export default function DashboardTradePage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <DashboardShell
      session={session}
      title="Trade"
      subtitle="Track the market, monitor signals, and keep decisions clear without the clutter."
      onLogout={() => logout("/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Market watch</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Live market overview</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <BarChart3 size={16} />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {marketRows.map((row) => (
            <div key={row.symbol} className="flex items-center justify-between rounded-[20px] bg-[var(--soft)] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-sm font-semibold text-[var(--gold)]">
                  {row.symbol.slice(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--text)]">{row.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{row.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-[var(--text)]">{row.price}</div>
                <div className="text-xs text-[var(--success)]">{row.change}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[22px] bg-[var(--soft)] p-4">
          <div className="flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Trade note</div>
            <TrendingUp size={16} className="text-[var(--gold)]" />
          </div>
          <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
            Keep positions monitored and entry levels visible. This view stays intentionally minimal for better focus.
          </p>
        </div>
      </article>
    </DashboardShell>
  );
}
