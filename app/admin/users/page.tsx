"use client";

import { Activity, UserRound } from "lucide-react";

import { AdminShell } from "@/components/admin-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function AdminUsersPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "admin", loginPath: "/admin/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <AdminShell
      session={session}
      title="Users"
      subtitle="Review the customer base, approval states, and portfolio activity."
      onLogout={() => logout("/admin/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Accounts</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Customer roster</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <UserRound size={16} />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { name: "Demo User", email: "demo@nexora.io", status: "Verified" },
            { name: "Amina Okafor", email: "amina@nexora.io", status: "Verified" },
            { name: "Marcus Hale", email: "marcus@nexora.io", status: "Pending" },
          ].map((user) => (
            <div key={user.email} className="grid gap-3 rounded-[20px] bg-[var(--soft)] px-4 py-3 md:grid-cols-[1.2fr_1fr_0.7fr] md:items-center">
              <div>
                <div className="text-sm font-medium text-[var(--text)]">{user.name}</div>
                <div className="text-xs text-[var(--muted)]">{user.email}</div>
              </div>
              <div className="text-sm text-[var(--text-soft)]">{user.status}</div>
              <button className="justify-self-start rounded-full bg-[var(--text)] px-3 py-2 text-xs font-medium text-[var(--bg)]">Manage</button>
            </div>
          ))}
        </div>
      </article>
    </AdminShell>
  );
}
