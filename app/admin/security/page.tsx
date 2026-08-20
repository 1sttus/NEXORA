"use client";

import { ShieldCheck } from "lucide-react";

import { AdminShell } from "@/components/admin-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function AdminSecurityPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "admin", loginPath: "/admin/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <AdminShell
      session={session}
      title="Security"
      subtitle="Check compliance posture, review alerts, and maintain the control layer."
      onLogout={() => logout("/admin/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Compliance</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Operational health</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <ShieldCheck size={16} />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-[22px] bg-[var(--soft)] p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--text-soft)]">Risk posture</span>
              <span className="text-sm font-medium text-[var(--success)]">Low</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/70">
              <div className="h-2 w-[82%] rounded-full bg-[var(--gold)]" />
            </div>
          </div>

          <div className="rounded-[22px] bg-[var(--soft)] p-4 text-sm leading-7 text-[var(--text-soft)]">
            All critical services are stable. Manual intervention remains available for flagged user reviews and new account checks.
          </div>
        </div>
      </article>
    </AdminShell>
  );
}
