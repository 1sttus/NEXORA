"use client";

import { TrendingUp } from "lucide-react";

import { AdminShell } from "@/components/admin-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function AdminSignalsPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "admin", loginPath: "/admin/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <AdminShell
      session={session}
      title="Signals"
      subtitle="Monitor trading signals, strategy notes, and release performance."
      onLogout={() => logout("/admin/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Signal desk</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Live recommendations</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <TrendingUp size={16} />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "BTC breakout", target: "$71,920", status: "Active" },
            { title: "ETH trend", target: "$4,050", status: "Active" },
            { title: "SOL momentum", target: "$176.00", status: "Watching" },
          ].map((signal) => (
            <div key={signal.title} className="rounded-[22px] bg-[var(--soft)] p-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{signal.title}</div>
              <div className="mt-3 text-xl font-medium text-[var(--text)]">{signal.target}</div>
              <div className="mt-2 text-sm text-[var(--text-soft)]">{signal.status}</div>
            </div>
          ))}
        </div>
      </article>
    </AdminShell>
  );
}
