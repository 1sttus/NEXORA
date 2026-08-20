"use client";

import { Settings2 } from "lucide-react";

import { AdminShell } from "@/components/admin-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function AdminSettingsPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "admin", loginPath: "/admin/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <AdminShell
      session={session}
      title="Settings"
      subtitle="Adjust operational configuration and control general platform preferences."
      onLogout={() => logout("/admin/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Platform</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Configuration panel</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <Settings2 size={16} />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-[22px] bg-[var(--soft)] p-4 text-sm text-[var(--text-soft)]">Default market view and portfolio settings are active.</div>
          <div className="rounded-[22px] bg-[var(--soft)] p-4 text-sm text-[var(--text-soft)]">Permission roles and alert preferences are ready for the next layer of automation.</div>
        </div>
      </article>
    </AdminShell>
  );
}
