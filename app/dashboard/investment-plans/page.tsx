"use client";

import { Layers3, Sparkles } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

const plans = [
  { name: "Starter", returnRate: "12% APR", minimum: "Min $250", cycle: "30 days", note: "Balanced plan for steady capital growth." },
  { name: "Growth", returnRate: "18% APR", minimum: "Min $1,000", cycle: "60 days", note: "Higher momentum with a moderate risk profile." },
  { name: "Premium", returnRate: "26% APR", minimum: "Min $5,000", cycle: "90 days", note: "Higher target yield for deeper capital deployment." },
];

export default function DashboardInvestmentPlansPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <DashboardShell
      session={session}
      title="Investment Plans"
      subtitle="Compare plan options and choose a growth track that matches your preferred risk level."
      onLogout={() => logout("/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Plan ladder</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Choose investment style</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <Layers3 size={16} />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-[22px] bg-[var(--soft)] p-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{plan.name}</div>
              <div className="mt-3 text-2xl font-medium text-[var(--text)]">{plan.returnRate}</div>
              <div className="mt-2 text-sm text-[var(--text-soft)]">{plan.minimum}</div>
              <div className="mt-1 text-sm text-[var(--text-soft)]">{plan.cycle}</div>
              <div className="mt-4 text-sm leading-6 text-[var(--text-soft)]">{plan.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[22px] bg-[var(--soft)] p-4">
          <div className="flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Plan guidance</div>
            <Sparkles size={16} className="text-[var(--gold)]" />
          </div>
          <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
            Align each plan to the risk profile you want and keep funding consistent with your deposit flow.
          </p>
        </div>
      </article>
    </DashboardShell>
  );
}
