"use client";

import { Copy, Link2 } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function DashboardReferralPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <DashboardShell
      session={session}
      title="Referral Link"
      subtitle="Share your invite link and track how many referrals are growing from it."
      onLogout={() => logout("/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Referral</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Share your invite</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <Link2 size={16} />
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[22px] bg-[var(--soft)] p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Referral URL</div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input readOnly value="https://nexora.app/ref/demo-user" className="w-full rounded-full border border-transparent bg-white/70 px-4 py-3 text-sm text-[var(--text)]" />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text)] px-4 py-3 text-sm font-medium text-[var(--bg)]">
                <Copy size={14} /> Copy
              </button>
            </div>
            <div className="mt-4 rounded-[18px] bg-white/70 p-4">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Code</div>
              <div className="mt-2 text-lg font-medium text-[var(--text)]">NEXORA-DEM0</div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: "Total referrals", value: "24" },
              { label: "Qualified leads", value: "9" },
              { label: "Rewards earned", value: "$1,280" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[20px] bg-[var(--soft)] p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{stat.label}</div>
                <div className="mt-2 text-xl font-medium text-[var(--text)]">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </DashboardShell>
  );
}
