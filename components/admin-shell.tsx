"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { DemoSessionActions } from "@/components/demo-session-actions";
import type { DemoSession } from "@/lib/auth-demo";

const menu = [
  { label: "Overview", href: "/admin" },
  { label: "Users", href: "/admin/users" },
  { label: "Transactions", href: "/admin/transactions" },
  { label: "KYC", href: "/admin/kyc" },
  { label: "Signals", href: "/admin/signals" },
  { label: "Security", href: "/admin/security" },
  { label: "Settings", href: "/admin/settings" },
];

export function AdminShell({
  session,
  title,
  subtitle,
  children,
  onLogout,
  onSwitchRole,
}: {
  session: DemoSession;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onLogout: () => void;
  onSwitchRole: (role: "user" | "admin") => void;
}) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen px-3 py-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-4 border-b border-transparent pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Control center</div>
            <h1 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[var(--text)] sm:text-4xl">{title}</h1>
            <p className="mt-2 max-w-2xl text-sm text-[var(--text-soft)]">{subtitle}</p>
          </div>

          <DemoSessionActions session={session} variant="panel" onLogout={onLogout} onSwitchRole={onSwitchRole} />
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="rounded-[26px] bg-white/30 p-3 shadow-[0_10px_30px_rgba(15,23,42,0.03)] backdrop-blur-sm">
            <div className="mb-4 px-2 pb-3">
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">NEXORA</div>
              <div className="mt-1 text-xs text-[var(--text-soft)]">Administration</div>
            </div>

            <nav className="space-y-1">
              {menu.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between rounded-2xl px-3 py-3 text-sm transition ${
                      active ? "bg-[var(--soft)] text-[var(--text)]" : "text-[var(--text-soft)] hover:bg-[var(--soft)] hover:text-[var(--text)]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={14} />
                  </Link>
                );
              })}
            </nav>
          </aside>

          <section className="space-y-4">{children}</section>
        </div>
      </div>
    </main>
  );
}
