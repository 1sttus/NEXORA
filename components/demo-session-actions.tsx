"use client";

import { LogOut, ShieldCheck, UserRound } from "lucide-react";

import type { DemoRole, DemoSession } from "@/lib/auth-demo";

type DemoSessionActionsProps = {
  session: DemoSession;
  variant?: "dark" | "panel";
  onLogout: () => void;
  onSwitchRole: (role: DemoRole) => void;
};

const variantStyles = {
  dark: {
    container: "border-[#2d3740] bg-[#101a1f] text-[#f5f4ef]",
    chip: "border-[#2d3740] bg-[#0f171b] text-[#f5f4ef]",
    chipActive: "bg-[#d7b77c] text-[#11171b]",
    chipIdle: "text-[#a5abb4] hover:bg-[#111a1f]",
    logout: "border-[#2d3740] bg-[#101a1f] text-[#f5f4ef] hover:border-[#4a535b]",
    label: "text-[#a5abb4]",
  },
  panel: {
    container: "border-[var(--line)] bg-[var(--card)] text-[var(--text)]",
    chip: "border-[var(--line)] bg-[var(--panel)] text-[var(--text)]",
    chipActive: "bg-[var(--gold)] text-[#14181b]",
    chipIdle: "text-[var(--muted)] hover:bg-[var(--soft)]",
    logout: "border-[var(--line)] bg-[var(--panel)] text-[var(--text)] hover:border-[var(--gold)]",
    label: "text-[var(--muted)]",
  },
} as const;

export function DemoSessionActions({ session, variant = "dark", onLogout, onSwitchRole }: DemoSessionActionsProps) {
  const styles = variantStyles[variant];

  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      <div className={`flex items-center gap-2 rounded-full border px-3 py-2 ${styles.container}`}>
        <div className="hidden min-w-0 sm:block">
          <div className={`text-[10px] uppercase tracking-[0.22em] ${styles.label}`}>Signed in as</div>
          <div className="truncate text-sm font-medium">{session.name}</div>
        </div>

        <div className={`flex items-center gap-1 rounded-full border p-1 ${styles.chip}`}>
          <button
            type="button"
            onClick={() => onSwitchRole("user")}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              session.role === "user" ? styles.chipActive : styles.chipIdle
            }`}
            aria-pressed={session.role === "user"}
          >
            <UserRound size={12} />
            User
          </button>
          <button
            type="button"
            onClick={() => onSwitchRole("admin")}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              session.role === "admin" ? styles.chipActive : styles.chipIdle
            }`}
            aria-pressed={session.role === "admin"}
          >
            <ShieldCheck size={12} />
            Admin
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onLogout}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${styles.logout}`}
      >
        <LogOut size={14} />
        Logout
      </button>
    </div>
  );
}
