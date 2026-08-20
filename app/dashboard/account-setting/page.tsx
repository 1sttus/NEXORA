"use client";

import { ShieldCheck, Upload, UserRound } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { useDemoSession } from "@/hooks/use-demo-session";

export default function DashboardAccountSettingPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <DashboardShell
      session={session}
      title="Account Setting"
      subtitle="Update profile details, upload KYC documents, and keep your account settings aligned."
      onLogout={() => logout("/login")}
      onSwitchRole={switchRole}
    >
      <article className="rounded-[28px] bg-white/35 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between gap-4 border-b border-transparent pb-5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Profile & KYC</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Profile and verification</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--soft)] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--text)]">
            <ShieldCheck size={12} /> Verified
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-[22px] bg-[var(--soft)] p-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Profile picture</div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white/70 text-xl font-medium text-[var(--gold)]">
                  <UserRound size={22} />
                </div>
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--bg)]">
                  <Upload size={15} /> Upload photo
                  <input type="file" className="sr-only" accept="image/*" />
                </label>
              </div>
            </div>

            <div className="rounded-[22px] bg-[var(--soft)] p-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">KYC document</div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-medium text-[var(--text)]">national-id.pdf</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">Government ID upload</div>
                </div>
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/70 px-4 py-2.5 text-sm font-medium text-[var(--text)]">
                  <Upload size={15} /> Upload doc
                  <input type="file" className="sr-only" accept=".pdf,image/*" />
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-[var(--text-soft)]">Bank name</label>
                <input value="First Horizon Bank" className="w-full rounded-full border border-transparent bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text)]" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-[var(--text-soft)]">Account name</label>
                <input value="Demo User" className="w-full rounded-full border border-transparent bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text)]" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-[var(--text-soft)]">Bank account number</label>
              <input value="0048213947" className="w-full rounded-full border border-transparent bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text)]" />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[var(--text-soft)]">Coin wallet address</label>
              <textarea value="TDEM0-WALLET-8A21-F4C2-92B0" className="min-h-24 w-full resize-none rounded-[22px] border border-transparent bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text)]" />
            </div>

            <button className="inline-flex items-center justify-center rounded-full bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)]">
              Save account changes
            </button>
          </div>
        </div>
      </article>
    </DashboardShell>
  );
}
