"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import {
  ArrowDownLeft,
  BarChart3,
  Clock3,
  Coins,
  Copy,
  Landmark,
  Layers3,
  Link2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Upload,
  UserRound,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

import { DemoSessionActions } from "@/components/demo-session-actions";
import { useDemoPortfolioState } from "@/hooks/use-demo-portfolio";
import { useDemoSession } from "@/hooks/use-demo-session";
import {
  demoPortfolioMetricFields,
  maskAccountNumber,
  type DemoKycStatus,
  type DemoPortfolioUser,
  type DemoWithdrawalDestination,
} from "@/lib/demo-portfolio";

const sidebarItems = [
  { label: "Dashboard", targetId: "dashboard" },
  { label: "Deposit", targetId: "deposit" },
  { label: "Withdraw", targetId: "withdraw" },
  { label: "Trade", targetId: "trade" },
  { label: "Investment Plans", targetId: "investment-plans" },
  { label: "Referral Link", targetId: "referral-link" },
  { label: "Account Setting", targetId: "account-setting" },
] as const;

const tradeRows = [
  { name: "Bitcoin", symbol: "BTC", price: "$68,420.12", change: "+2.84%" },
  { name: "Ethereum", symbol: "ETH", price: "$3,810.56", change: "+1.67%" },
  { name: "Solana", symbol: "SOL", price: "$164.90", change: "+4.12%" },
  { name: "XRP", symbol: "XRP", price: "$0.62", change: "+1.20%" },
] as const;

const planCards = [
  {
    name: "Starter",
    minimum: "2,500 USDT",
    cycle: "14-day cycle",
    returnRate: "4.5% weekly",
    note: "For light allocations and new accounts.",
  },
  {
    name: "Growth",
    minimum: "10,000 USDT",
    cycle: "30-day cycle",
    returnRate: "7.8% weekly",
    note: "Balanced exposure with quieter compounding.",
  },
  {
    name: "Elite",
    minimum: "50,000 USDT",
    cycle: "90-day cycle",
    returnRate: "11.2% weekly",
    note: "Designed for larger treasury positions.",
  },
] as const;

const referralStats = [
  { label: "Active invites", value: "18" },
  { label: "Referral bonus", value: "$1,240.00" },
  { label: "Conversion rate", value: "12.4%" },
] as const;

const withdrawalOptions: Array<{
  value: DemoWithdrawalDestination;
  label: string;
  description: string;
  icon: typeof Landmark;
}> = [
  {
    value: "bank",
    label: "Bank transfer",
    description: "Send straight to your linked bank account.",
    icon: Landmark,
  },
  {
    value: "coin",
    label: "Coin wallet",
    description: "Withdraw directly to your coin wallet address.",
    icon: Wallet,
  },
];

const statusLabels: Record<DemoKycStatus, string> = {
  "not-submitted": "Not submitted",
  pending: "Pending review",
  verified: "Verified",
};

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

const shellCard = "rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]";
const softCard = "rounded-[22px] border border-[var(--line)] bg-[var(--soft)] p-4";
const panelInput =
  "w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]";

type AccountDraft = Pick<DemoPortfolioUser, "bankName" | "bankAccountName" | "bankAccountNumber" | "coinWalletAddress">;

function formatMoney(value: number) {
  return moneyFormatter.format(value);
}

function formatDateTime(value: number) {
  return dateFormatter.format(value);
}

function getKycStatusTone(status: DemoKycStatus) {
  if (status === "verified") {
    return "border-emerald-500/20 bg-emerald-500/10 text-emerald-700";
  }

  if (status === "pending") {
    return "border-amber-500/20 bg-amber-500/10 text-amber-700";
  }

  return "border-[var(--line)] bg-[var(--soft)] text-[var(--muted)]";
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
        return;
      }

      reject(new Error("Unable to read the selected file."));
    };

    reader.onerror = () => reject(new Error("Unable to read the selected file."));
    reader.readAsDataURL(file);
  });
}

export default function DashboardPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });
  const { state, isReady, updateUser, getUserByEmail } = useDemoPortfolioState();
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [accountDraft, setAccountDraft] = useState<AccountDraft | null>(null);
  const [withdrawMethod, setWithdrawMethod] = useState<DemoWithdrawalDestination>("bank");
  const [withdrawAmount, setWithdrawAmount] = useState("960");
  const [depositCopyNotice, setDepositCopyNotice] = useState("");
  const [referralCopyNotice, setReferralCopyNotice] = useState("");
  const [withdrawNotice, setWithdrawNotice] = useState("");
  const [accountNotice, setAccountNotice] = useState("");

  const user = session ? getUserByEmail(session.email) : null;

  useEffect(() => {
    if (!user) {
      return;
    }

    setAccountDraft({
      bankName: user.bankName,
      bankAccountName: user.bankAccountName,
      bankAccountNumber: user.bankAccountNumber,
      coinWalletAddress: user.coinWalletAddress,
    });
    setWithdrawMethod(user.withdrawalDestination);
    setWithdrawAmount(String(user.metrics.nextPayout));
  }, [user?.id, user?.withdrawalDestination, user?.metrics.nextPayout]);

  if (status === "loading" || !session || !isReady || !state || !user || !accountDraft) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-[var(--text)]">
        <div className="w-full max-w-md rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 text-center shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-lg font-semibold text-[var(--gold)]">
            N
          </div>
          <div className="mt-5 text-2xl font-medium tracking-[-0.06em]">Loading your workspace</div>
          <p className="mt-3 text-sm text-[var(--text-soft)]">Restoring the dashboard, portfolio data, and account controls.</p>
        </div>
      </div>
    );
  }

  const selectedSection = sidebarItems.find((item) => item.label === activeSection) ?? sidebarItems[0];
  const totalManagedAsset = user.metrics.totalInvestment + user.metrics.totalProfit - user.metrics.totalWithdrawn;
  const verifiedLabel = user.verified ? "Verified" : "Pending verification";
  const verifiedTone = user.verified
    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700"
    : "border-amber-500/20 bg-amber-500/10 text-amber-700";
  const accountInitials = getInitials(user.name);
  const kycStatusLabel = statusLabels[user.kycStatus];

  const handleScrollToSection = (targetId: string, label: string) => {
    setActiveSection(label);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCopy = async (text: string, setter: (value: string) => void, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setter(successMessage);
    } catch {
      setter("Copy failed in this browser.");
    }
  };

  const handleAvatarUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setAccountNotice("Please choose a JPG or PNG image for the profile picture.");
      event.currentTarget.value = "";
      return;
    }

    if (file.size > 1_000_000) {
      setAccountNotice("Profile pictures stay under 1 MB in demo mode.");
      event.currentTarget.value = "";
      return;
    }

    const dataUrl = await fileToDataUrl(file);
    updateUser(user.id, (current) => ({
      ...current,
      avatarUrl: dataUrl,
      updatedAt: Date.now(),
    }));
    setAccountNotice("Profile picture updated.");
    event.currentTarget.value = "";
  };

  const handleKycUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    if (!file) {
      return;
    }

    updateUser(user.id, (current) => ({
      ...current,
      verified: false,
      kycStatus: "pending",
      kycDocumentName: file.name,
      kycDocumentType: file.type || "application/octet-stream",
      updatedAt: Date.now(),
    }));
    setAccountNotice("KYC document uploaded. Verification now waits on admin review.");
    event.currentTarget.value = "";
  };

  const handleAccountSave = () => {
    if (!accountDraft) {
      return;
    }

    updateUser(user.id, (current) => ({
      ...current,
      bankName: accountDraft.bankName,
      bankAccountName: accountDraft.bankAccountName,
      bankAccountNumber: accountDraft.bankAccountNumber,
      coinWalletAddress: accountDraft.coinWalletAddress,
      updatedAt: Date.now(),
    }));
    setAccountNotice("Account settings saved.");
  };

  const handleWithdrawalMethodChange = (method: DemoWithdrawalDestination) => {
    setWithdrawMethod(method);
    updateUser(user.id, (current) => ({
      ...current,
      withdrawalDestination: method,
      updatedAt: Date.now(),
    }));
  };

  const handlePrepareWithdrawal = () => {
    const amount = Number(withdrawAmount || 0);
    const routeLabel = withdrawMethod === "bank" ? "bank transfer" : "coin wallet";

    setWithdrawNotice(
      `Withdrawal request prepared for ${formatMoney(amount)} via ${routeLabel}. This is a demo preview only.`,
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-4 lg:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-8 h-80 w-80 rounded-full bg-[rgba(156,122,61,0.08)] blur-3xl" />
        <div className="absolute right-[-8rem] top-24 h-96 w-96 rounded-full bg-[rgba(80,131,154,0.08)] blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-[rgba(156,122,61,0.05)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">User portal</div>
            <h1 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[var(--text)]">Welcome back, {session.name}.</h1>
            <p className="mt-2 text-sm text-[var(--text-soft)]">
              A minimal workspace for deposits in coin, withdrawals to bank or wallet, and clean account control.
            </p>
          </div>

          <DemoSessionActions session={session} variant="panel" onLogout={() => logout("/login")} onSwitchRole={switchRole} />
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] lg:sticky lg:top-6 lg:h-fit">
            <div className="flex items-center gap-3 border-b border-[var(--line)] pb-5">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[var(--line)] bg-[var(--soft)] text-sm font-semibold text-[var(--gold)]">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  accountInitials || <UserRound size={16} />
                )}
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-[var(--text)]">{user.name}</div>
                <div className="truncate text-xs text-[var(--text-soft)]">{user.email}</div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] ${verifiedTone}`}>
                <ShieldCheck size={13} />
                {verifiedLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-1.5 text-[11px] text-[var(--muted)]">
                {kycStatusLabel}
              </span>
            </div>

            <nav className="mt-5 space-y-1">
              {sidebarItems.map((item) => {
                const isActive = selectedSection.label === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleScrollToSection(item.targetId, item.label)}
                    className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition ${
                      isActive ? "bg-[var(--soft)] text-[var(--text)]" : "text-[var(--text-soft)] hover:bg-[var(--soft)]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />}
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 rounded-[22px] border border-[var(--line)] bg-[var(--soft)] p-4">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Quick status</div>
              <div className="mt-3 text-lg font-medium text-[var(--text)]">{formatMoney(totalManagedAsset)}</div>
              <div className="mt-1 text-sm text-[var(--text-soft)]">Assets under control</div>
            </div>
          </aside>

          <section className="space-y-6">
            <section id="dashboard" className={`${shellCard} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(156,122,61,0.12),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(80,131,154,0.08),transparent_45%)]" />
              <div className="relative grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      <Sparkles size={12} />
                      Dashboard
                    </span>
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] ${verifiedTone}`}>
                      <ShieldCheck size={12} />
                      {verifiedLabel}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      <Coins size={12} />
                      {user.depositCoin} deposit
                    </span>
                  </div>

                  <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.06em] text-[var(--text)] md:text-4xl">
                    A calm overview of your capital, payouts, and admin-reviewed verification.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-soft)] md:text-base">
                    Use this workspace to review your totals, copy the coin deposit address, route withdrawals to a bank
                    or wallet, and keep your profile and KYC files current.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className={softCard}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Deposit coin</div>
                      <div className="mt-3 text-lg font-medium text-[var(--text)]">
                        {user.depositCoin} / {user.depositNetwork}
                      </div>
                    </div>
                    <div className={softCard}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Withdrawal route</div>
                      <div className="mt-3 text-lg font-medium text-[var(--text)]">
                        {withdrawMethod === "bank" ? "Bank transfer" : "Coin wallet"}
                      </div>
                    </div>
                    <div className={softCard}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Updated</div>
                      <div className="mt-3 text-lg font-medium text-[var(--text)]">{formatDateTime(user.updatedAt)}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("deposit", "Deposit")}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]"
                    >
                      <Coins size={16} />
                      Deposit coin
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("account-setting", "Account Setting")}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)]"
                    >
                      <UserRound size={16} />
                      Update account
                    </button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--soft)] p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(156,122,61,0.22),transparent_50%)]" />
                  <motion.div
                    aria-hidden="true"
                    className="absolute right-5 top-5 flex h-24 w-24 items-center justify-center rounded-full border border-[rgba(156,122,61,0.25)] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(215,183,124,0.8))] text-2xl font-semibold text-[var(--gold-strong)] shadow-[0_18px_40px_rgba(156,122,61,0.18)]"
                    animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    N
                  </motion.div>

                  <div className="relative flex min-h-[270px] flex-col justify-between">
                    <div className="max-w-xs">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Portfolio status</div>
                      <div className="mt-3 text-4xl font-medium tracking-[-0.07em] text-[var(--text)]">
                        {formatMoney(totalManagedAsset)}
                      </div>
                      <div className="mt-2 text-sm text-[var(--text-soft)]">
                        Managed capital with a verified coin-first funding flow.
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Next payout</div>
                            <div className="mt-2 text-2xl font-medium text-[var(--text)]">
                              {formatMoney(user.metrics.nextPayout)}
                            </div>
                          </div>
                          <Clock3 className="text-[var(--gold)]" size={18} />
                        </div>
                      </div>
                      <div className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Total earnings</div>
                            <div className="mt-2 text-2xl font-medium text-[var(--text)]">
                              {formatMoney(user.metrics.totalEarnings)}
                            </div>
                          </div>
                          <TrendingUp className="text-[var(--gold)]" size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {demoPortfolioMetricFields.map((field) => (
                <article
                  key={field.key}
                  className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{field.label}</div>
                  <div className="mt-4 text-3xl font-medium text-[var(--text)]">{formatMoney(user.metrics[field.key])}</div>
                  <div className="mt-2 text-sm text-[var(--text-soft)]">{field.description}</div>
                </article>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <article id="deposit" className={shellCard}>
                <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Deposit</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Coin-only funding</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--text-soft)]">
                      Deposits in this workspace are handled in coin only. Use the demo address below to preview the flow.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    <Coins size={12} />
                    {user.depositCoin} / {user.depositNetwork}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className={softCard}>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Deposit address</div>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                      <input readOnly value={user.depositAddress} className={panelInput} />
                      <button
                        type="button"
                        onClick={() => handleCopy(user.depositAddress, setDepositCopyNotice, "Deposit address copied.")}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--text)] px-4 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]"
                      >
                        <Copy size={14} />
                        Copy
                      </button>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[18px] border border-[var(--line)] bg-[var(--panel)] p-4">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Coin</div>
                        <div className="mt-2 text-lg font-medium text-[var(--text)]">{user.depositCoin}</div>
                      </div>
                      <div className="rounded-[18px] border border-[var(--line)] bg-[var(--panel)] p-4">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Network</div>
                        <div className="mt-2 text-lg font-medium text-[var(--text)]">{user.depositNetwork}</div>
                      </div>
                    </div>

                    {depositCopyNotice ? (
                      <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                        {depositCopyNotice}
                      </div>
                    ) : null}
                  </div>

                  <div className="relative overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(156,122,61,0.18),transparent_52%)]" />
                    <motion.div
                      aria-hidden="true"
                      className="absolute right-5 top-5 flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(156,122,61,0.2)] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(215,183,124,0.76))] text-xl font-semibold text-[var(--gold-strong)]"
                      animate={{ y: [0, -7, 0], rotate: [0, 12, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    >
                      N
                    </motion.div>

                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Deposit note</div>
                        <div className="mt-3 text-2xl font-medium text-[var(--text)]">Keep deposits in coin.</div>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                          Bank transfers are not accepted for deposits. Use the coin address, then wait for chain confirmation.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[18px] border border-[var(--line)] bg-[var(--panel)] p-4">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Minimum</div>
                          <div className="mt-2 text-lg font-medium text-[var(--text)]">500 USDT</div>
                        </div>
                        <div className="rounded-[18px] border border-[var(--line)] bg-[var(--panel)] p-4">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Network fee</div>
                          <div className="mt-2 text-lg font-medium text-[var(--text)]">Low</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article id="withdraw" className={shellCard}>
                <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Withdraw</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Bank or coin wallet</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--text-soft)]">
                      Choose a destination for the current request. The selected route becomes your preferred withdrawal option.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    <ArrowDownLeft size={12} />
                    {formatMoney(Number(withdrawAmount || 0))}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="space-y-4">
                    <div className={softCard}>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Withdrawal amount</label>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={withdrawAmount}
                        onChange={(event) => setWithdrawAmount(event.target.value)}
                        className={`${panelInput} mt-3`}
                        placeholder="0.00"
                      />
                    </div>

                    <fieldset className="grid gap-3 sm:grid-cols-2">
                      {withdrawalOptions.map((option) => {
                        const active = withdrawMethod === option.value;
                        const Icon = option.icon;

                        return (
                          <label
                            key={option.value}
                            className={`flex cursor-pointer flex-col gap-3 rounded-[22px] border p-4 transition ${
                              active
                                ? "border-[var(--gold)] bg-[rgba(156,122,61,0.06)]"
                                : "border-[var(--line)] bg-[var(--soft)] hover:bg-[var(--panel)]"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="radio"
                                name="withdraw-method"
                                checked={active}
                                onChange={() => handleWithdrawalMethodChange(option.value)}
                                className="mt-1 accent-[var(--gold)]"
                              />
                              <div>
                                <div className="flex items-center gap-2 text-sm font-medium text-[var(--text)]">
                                  <Icon size={15} className="text-[var(--gold)]" />
                                  {option.label}
                                </div>
                                <div className="mt-1 text-sm text-[var(--text-soft)]">{option.description}</div>
                              </div>
                            </div>
                          </label>
                        );
                      })}
                    </fieldset>

                    <button
                      type="button"
                      onClick={handlePrepareWithdrawal}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]"
                    >
                      <ArrowDownLeft size={15} />
                      Prepare withdrawal
                    </button>

                    {withdrawNotice ? (
                      <div className="rounded-2xl border border-[var(--line)] bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text-soft)]">
                        {withdrawNotice}
                      </div>
                    ) : null}
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Bank details</div>
                          <div className="mt-2 text-lg font-medium text-[var(--text)]">{user.bankName}</div>
                        </div>
                        <Landmark className="text-[var(--gold)]" size={18} />
                      </div>
                      <div className="mt-4 text-sm text-[var(--text-soft)]">{user.bankAccountName}</div>
                      <div className="mt-1 text-sm text-[var(--text-soft)]">
                        {maskAccountNumber(user.bankAccountNumber)}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Coin wallet</div>
                          <div className="mt-2 text-lg font-medium text-[var(--text)]">
                            {user.coinWalletAddress ? "Connected" : "Missing"}
                          </div>
                        </div>
                        <Wallet className="text-[var(--gold)]" size={18} />
                      </div>
                      <div className="mt-4 break-all text-sm text-[var(--text-soft)]">
                        {user.coinWalletAddress || "Add a wallet in Account Setting"}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4 text-sm text-[var(--text-soft)]">
                      Preferred route on file:{" "}
                      <span className="font-medium text-[var(--text)]">
                        {withdrawMethod === "bank" ? "Bank transfer" : "Coin wallet"}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <article id="trade" className={shellCard}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Trade</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Market watch</h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-[var(--gold)]">
                    <BarChart3 size={16} />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {tradeRows.map((asset) => (
                    <div
                      key={asset.symbol}
                      className="flex items-center justify-between rounded-[20px] border border-[var(--line)] bg-[var(--soft)] px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-sm font-semibold text-[var(--gold)]">
                          {asset.symbol.slice(0, 1)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[var(--text)]">{asset.name}</div>
                          <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{asset.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-[var(--text)]">{asset.price}</div>
                        <div className="text-xs text-emerald-600">{asset.change}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Trade note</div>
                    <TrendingUp size={16} className="text-[var(--gold)]" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                    Keep your trading view minimal. Use the market page for live sentiment, then return here to manage funds.
                  </p>
                  <Link
                    href="/markets"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)]"
                  >
                    Open market page
                  </Link>
                </div>
              </article>

              <article id="investment-plans" className={shellCard}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Investment plans</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Plan ladder</h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-[var(--gold)]">
                    <Layers3 size={16} />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {planCards.map((plan) => (
                    <div key={plan.name} className="rounded-[22px] border border-[var(--line)] bg-[var(--soft)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{plan.name}</div>
                      <div className="mt-3 text-xl font-medium text-[var(--text)]">{plan.returnRate}</div>
                      <div className="mt-2 text-sm text-[var(--text-soft)]">{plan.minimum}</div>
                      <div className="mt-1 text-sm text-[var(--text-soft)]">{plan.cycle}</div>
                      <div className="mt-4 text-sm leading-6 text-[var(--text-soft)]">{plan.note}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Plan guidance</div>
                    <Sparkles size={16} className="text-[var(--gold)]" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                    Choose the plan that matches your risk profile, then keep deposits in coin so every cycle stays consistent.
                  </p>
                </div>
              </article>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <article id="referral-link" className={shellCard}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Referral link</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Share your invite</h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-[var(--gold)]">
                    <Link2 size={16} />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className={softCard}>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Referral URL</div>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                      <input readOnly value={user.referralLink} className={panelInput} />
                      <button
                        type="button"
                        onClick={() => handleCopy(user.referralLink, setReferralCopyNotice, "Referral link copied.")}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--text)] px-4 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]"
                      >
                        <Copy size={14} />
                        Copy
                      </button>
                    </div>

                    {referralCopyNotice ? (
                      <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                        {referralCopyNotice}
                      </div>
                    ) : null}

                    <div className="mt-4 rounded-[18px] border border-[var(--line)] bg-[var(--panel)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Referral code</div>
                      <div className="mt-2 text-lg font-medium text-[var(--text)]">{user.referralCode}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {referralStats.map((stat) => (
                      <div key={stat.label} className="rounded-[22px] border border-[var(--line)] bg-[var(--soft)] p-4">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{stat.label}</div>
                        <div className="mt-2 text-xl font-medium text-[var(--text)]">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article id="account-setting" className={shellCard}>
                <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Account setting</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Profile and KYC</h3>
                  </div>
                  <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] ${verifiedTone}`}>
                    <ShieldCheck size={12} />
                    {verifiedLabel}
                  </div>
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-4">
                    <div className="rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Profile picture</div>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[var(--line)] bg-[var(--panel)] text-xl font-medium text-[var(--gold)]">
                          {user.avatarUrl ? (
                            <img src={user.avatarUrl} alt={user.name} className="h-full w-full object-cover" />
                          ) : (
                            accountInitials || <UserRound size={22} />
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]">
                            <Upload size={15} />
                            Upload photo
                            <input type="file" accept="image/*" onChange={handleAvatarUpload} className="sr-only" />
                          </label>
                          <p className="text-xs text-[var(--muted)]">PNG or JPG under 1 MB.</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Important KYC document</div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium text-[var(--text)]">
                            {user.kycDocumentName ?? "No document uploaded"}
                          </div>
                          <div className="mt-1 text-xs text-[var(--muted)]">
                            {user.kycDocumentType ?? "Upload a government ID or utility document."}
                          </div>
                        </div>
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)]">
                          <Upload size={15} />
                          Upload doc
                          <input type="file" accept=".pdf,image/*" onChange={handleKycUpload} className="sr-only" />
                        </label>
                      </div>
                      <div className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] ${getKycStatusTone(user.kycStatus)}`}>
                        {kycStatusLabel}
                      </div>
                      <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                        Uploaded documents stay in browser storage for this demo. When you update the file, the admin portal
                        can re-approve or revoke verification.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm text-[var(--text-soft)]">Bank name</label>
                        <input
                          value={accountDraft.bankName}
                          onChange={(event) =>
                            setAccountDraft((current) => (current ? { ...current, bankName: event.target.value } : current))
                          }
                          className={panelInput}
                          placeholder="Bank name"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm text-[var(--text-soft)]">Account name</label>
                        <input
                          value={accountDraft.bankAccountName}
                          onChange={(event) =>
                            setAccountDraft((current) =>
                              current ? { ...current, bankAccountName: event.target.value } : current,
                            )
                          }
                          className={panelInput}
                          placeholder="Account name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[var(--text-soft)]">Bank account number</label>
                      <input
                        value={accountDraft.bankAccountNumber}
                        onChange={(event) =>
                          setAccountDraft((current) =>
                            current ? { ...current, bankAccountNumber: event.target.value } : current,
                          )
                        }
                        className={panelInput}
                        placeholder="Bank account number"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[var(--text-soft)]">Coin wallet address</label>
                      <textarea
                        value={accountDraft.coinWalletAddress}
                        onChange={(event) =>
                          setAccountDraft((current) =>
                            current ? { ...current, coinWalletAddress: event.target.value } : current,
                          )
                        }
                        className={`${panelInput} min-h-24 resize-none`}
                        placeholder="Wallet address"
                      />
                    </div>

                    <div className="rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Preferred withdrawal route</div>
                          <div className="mt-2 text-lg font-medium text-[var(--text)]">
                            {withdrawMethod === "bank" ? "Bank transfer" : "Coin wallet"}
                          </div>
                        </div>
                        <div className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--text-soft)]">
                          Controlled in Withdraw
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleAccountSave}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]"
                    >
                      Save account changes
                    </button>

                    {accountNotice ? (
                      <div className="rounded-2xl border border-[var(--line)] bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text-soft)]">
                        {accountNotice}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            </section>

            <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <article className={shellCard}>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Summary</div>
                <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Your clean workspace</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                  Everything here is designed to feel calm, direct, and easy to scan. The admin portal can change
                  verification or asset values, and those updates will flow back into this dashboard.
                </p>
              </article>

              <article id="settings" className={shellCard}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">System note</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Demo mode storage</h3>
                  </div>
                  <Sparkles size={16} className="text-[var(--gold)]" />
                </div>

                <div className="mt-4 rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm text-[var(--text-soft)]">Profile photo, KYC files, and totals stay in local storage.</div>
                    <div className="text-sm font-medium text-[var(--text)]">Local demo</div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[18px] border border-[var(--line)] bg-[var(--panel)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Signed in</div>
                      <div className="mt-2 text-lg font-medium text-[var(--text)]">{session.email}</div>
                    </div>
                    <div className="rounded-[18px] border border-[var(--line)] bg-[var(--panel)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Last sync</div>
                      <div className="mt-2 text-lg font-medium text-[var(--text)]">{formatDateTime(user.updatedAt)}</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
