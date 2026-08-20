"use client";

import { ShieldCheck } from "lucide-react";

import { AdminShell } from "@/components/admin-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function AdminKycPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "admin", loginPath: "/admin/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <AdminShell
      session={session}
      title="KYC"
      subtitle="Approve or review submitted identity documents and account verification checks."
      onLogout={() => logout("/admin/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Verification</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Document review</h2>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
            <ShieldCheck size={16} />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { name: "Marcus Hale", file: "passport-photo.png", status: "Pending" },
            { name: "Laila Bennett", file: "drivers-license.jpg", status: "Verified" },
            { name: "Amina Okafor", file: "utility-bill.pdf", status: "Verified" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col gap-3 rounded-[20px] bg-[var(--soft)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-medium text-[var(--text)]">{item.name}</div>
                <div className="text-xs text-[var(--muted)]">{item.file}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-[var(--text-soft)]">{item.status}</div>
                <button className="rounded-full bg-[var(--text)] px-3 py-2 text-xs font-medium text-[var(--bg)]">Review</button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </AdminShell>
  );
}
