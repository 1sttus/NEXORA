"use client";

import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

import { AdminShell } from "@/components/admin-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function AdminTransactionsPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "admin", loginPath: "/admin/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <AdminShell
      session={session}
      title="Transactions"
      subtitle="Monitor user movement, approvals, and payout events across the system."
      onLogout={() => logout("/admin/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Movement</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Recent activity</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <ArrowUpRight size={16} />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { id: "TX-4012", type: "Deposit", amount: "$360.00", status: "Confirmed" },
            { id: "TX-4013", type: "Withdrawal", amount: "$1,250.00", status: "Pending" },
            { id: "TX-4014", type: "Referral", amount: "$180.00", status: "Approved" },
          ].map((item) => (
            <div key={item.id} className="flex flex-col gap-3 rounded-[20px] bg-[var(--soft)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-[var(--gold)]">
                  {item.type === "Withdrawal" ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--text)]">{item.type}</div>
                  <div className="text-xs text-[var(--muted)]">{item.id}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-[var(--text)]">{item.amount}</div>
                <div className="text-xs text-[var(--text-soft)]">{item.status}</div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </AdminShell>
  );
}
