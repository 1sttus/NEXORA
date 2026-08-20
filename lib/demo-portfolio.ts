import type { DemoRole } from "@/lib/auth-demo";

export type DemoWithdrawalDestination = "bank" | "coin";

export type DemoKycStatus = "not-submitted" | "pending" | "verified";

export type DemoPortfolioMetrics = {
  totalInvestment: number;
  totalProfit: number;
  totalWithdrawn: number;
  nextPayout: number;
  totalDeposit: number;
  totalEarnings: number;
};

export type DemoPortfolioUser = {
  id: string;
  name: string;
  email: string;
  role: DemoRole;
  avatarUrl: string | null;
  verified: boolean;
  kycStatus: DemoKycStatus;
  kycDocumentName: string | null;
  kycDocumentType: string | null;
  depositCoin: string;
  depositNetwork: string;
  depositAddress: string;
  withdrawalDestination: DemoWithdrawalDestination;
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  coinWalletAddress: string;
  referralCode: string;
  referralLink: string;
  metrics: DemoPortfolioMetrics;
  updatedAt: number;
};

export type DemoPortfolioState = {
  users: DemoPortfolioUser[];
};

export const DEMO_PORTFOLIO_STORAGE_KEY = "nexora-demo-portfolio";

export const demoPortfolioMetricFields = [
  {
    key: "totalInvestment",
    label: "Total investment",
    description: "Capital currently deployed across plans.",
  },
  {
    key: "totalProfit",
    label: "Total profit",
    description: "Profit credited from active positions.",
  },
  {
    key: "totalWithdrawn",
    label: "Total withdrawn",
    description: "Payouts already sent out.",
  },
  {
    key: "nextPayout",
    label: "Next payout",
    description: "Queued amount for the next cycle.",
  },
  {
    key: "totalDeposit",
    label: "Total deposit",
    description: "Coin deposits received on chain.",
  },
  {
    key: "totalEarnings",
    label: "Total earnings",
    description: "Cumulative gains and bonuses.",
  },
] as const;

export type DemoPortfolioMetricKey = (typeof demoPortfolioMetricFields)[number]["key"];

const DEFAULT_TIMESTAMP = Date.parse("2026-08-18T10:30:00Z");

function createDemoPortfolioUsers(): DemoPortfolioUser[] {
  return [
    {
      id: "demo-user",
      name: "Demo User",
      email: "demo@nexora.io",
      role: "user",
      avatarUrl: null,
      verified: true,
      kycStatus: "verified",
      kycDocumentName: "national-id.pdf",
      kycDocumentType: "application/pdf",
      depositCoin: "USDT",
      depositNetwork: "TRC20",
      depositAddress: "TDEM0-USDT-TRC20-82B7-91A4-6C30",
      withdrawalDestination: "bank",
      bankName: "First Horizon Bank",
      bankAccountName: "Demo User",
      bankAccountNumber: "0048213947",
      coinWalletAddress: "TDEM0-WALLET-8A21-F4C2-92B0",
      referralCode: "NEXORA-DEM0",
      referralLink: "https://nexora.app/ref/demo-user",
      metrics: {
        totalInvestment: 28400,
        totalProfit: 4840,
        totalWithdrawn: 1720,
        nextPayout: 960,
        totalDeposit: 32150,
        totalEarnings: 6120,
      },
      updatedAt: DEFAULT_TIMESTAMP,
    },
    {
      id: "amina-okafor",
      name: "Amina Okafor",
      email: "amina@nexora.io",
      role: "user",
      avatarUrl: null,
      verified: true,
      kycStatus: "verified",
      kycDocumentName: "utility-bill.pdf",
      kycDocumentType: "application/pdf",
      depositCoin: "USDT",
      depositNetwork: "TRC20",
      depositAddress: "TAMINA-USDT-TRC20-19F4-3A2B-7CC1",
      withdrawalDestination: "coin",
      bankName: "Sterling Bank",
      bankAccountName: "Amina Okafor",
      bankAccountNumber: "0134987210",
      coinWalletAddress: "TAMINA-WALLET-31D2-AC48-8B94",
      referralCode: "NEXORA-AMINA",
      referralLink: "https://nexora.app/ref/amina-okafor",
      metrics: {
        totalInvestment: 91200,
        totalProfit: 18450,
        totalWithdrawn: 6820,
        nextPayout: 2410,
        totalDeposit: 104800,
        totalEarnings: 21540,
      },
      updatedAt: Date.parse("2026-08-17T14:15:00Z"),
    },
    {
      id: "marcus-hale",
      name: "Marcus Hale",
      email: "marcus@nexora.io",
      role: "user",
      avatarUrl: null,
      verified: false,
      kycStatus: "pending",
      kycDocumentName: "passport-photo.png",
      kycDocumentType: "image/png",
      depositCoin: "USDT",
      depositNetwork: "TRC20",
      depositAddress: "TMARCUS-USDT-TRC20-61D8-0B77-4AE2",
      withdrawalDestination: "bank",
      bankName: "Monzo",
      bankAccountName: "Marcus Hale",
      bankAccountNumber: "0091836502",
      coinWalletAddress: "TMARCUS-WALLET-4F10-9B2C-11D0",
      referralCode: "NEXORA-MARCUS",
      referralLink: "https://nexora.app/ref/marcus-hale",
      metrics: {
        totalInvestment: 11200,
        totalProfit: 1320,
        totalWithdrawn: 250,
        nextPayout: 540,
        totalDeposit: 12000,
        totalEarnings: 1530,
      },
      updatedAt: Date.parse("2026-08-16T09:40:00Z"),
    },
    {
      id: "laila-bennett",
      name: "Laila Bennett",
      email: "laila@nexora.io",
      role: "user",
      avatarUrl: null,
      verified: true,
      kycStatus: "verified",
      kycDocumentName: "drivers-license.jpg",
      kycDocumentType: "image/jpeg",
      depositCoin: "USDT",
      depositNetwork: "TRC20",
      depositAddress: "TLAILA-USDT-TRC20-59C2-74AA-1BF0",
      withdrawalDestination: "bank",
      bankName: "Access Bank",
      bankAccountName: "Laila Bennett",
      bankAccountNumber: "0083146290",
      coinWalletAddress: "TLAILA-WALLET-8C28-09F2-BB11",
      referralCode: "NEXORA-LAILA",
      referralLink: "https://nexora.app/ref/laila-bennett",
      metrics: {
        totalInvestment: 54800,
        totalProfit: 9290,
        totalWithdrawn: 4180,
        nextPayout: 1375,
        totalDeposit: 61250,
        totalEarnings: 11420,
      },
      updatedAt: Date.parse("2026-08-15T18:05:00Z"),
    },
  ];
}

export function createDefaultDemoPortfolioState(): DemoPortfolioState {
  return {
    users: createDemoPortfolioUsers(),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isDemoRole(value: unknown): value is DemoRole {
  return value === "user" || value === "admin";
}

function isDemoWithdrawalDestination(value: unknown): value is DemoWithdrawalDestination {
  return value === "bank" || value === "coin";
}

function isDemoKycStatus(value: unknown): value is DemoKycStatus {
  return value === "not-submitted" || value === "pending" || value === "verified";
}

function isDemoPortfolioMetrics(value: unknown): value is DemoPortfolioMetrics {
  if (!isRecord(value)) {
    return false;
  }

  return demoPortfolioMetricFields.every(({ key }) => typeof value[key] === "number");
}

function isDemoPortfolioUser(value: unknown): value is DemoPortfolioUser {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.id === "string" &&
    typeof value.name === "string" &&
    typeof value.email === "string" &&
    isDemoRole(value.role) &&
    typeof value.avatarUrl !== "undefined" &&
    typeof value.verified === "boolean" &&
    isDemoKycStatus(value.kycStatus) &&
    (value.kycDocumentName === null || typeof value.kycDocumentName === "string") &&
    (value.kycDocumentType === null || typeof value.kycDocumentType === "string") &&
    typeof value.depositCoin === "string" &&
    typeof value.depositNetwork === "string" &&
    typeof value.depositAddress === "string" &&
    isDemoWithdrawalDestination(value.withdrawalDestination) &&
    typeof value.bankName === "string" &&
    typeof value.bankAccountName === "string" &&
    typeof value.bankAccountNumber === "string" &&
    typeof value.coinWalletAddress === "string" &&
    typeof value.referralCode === "string" &&
    typeof value.referralLink === "string" &&
    isDemoPortfolioMetrics(value.metrics) &&
    typeof value.updatedAt === "number"
  );
}

function isDemoPortfolioState(value: unknown): value is DemoPortfolioState {
  return isRecord(value) && Array.isArray(value.users) && value.users.every(isDemoPortfolioUser);
}

export function readDemoPortfolioState(): DemoPortfolioState {
  if (typeof window === "undefined") {
    return createDefaultDemoPortfolioState();
  }

  try {
    const raw = window.localStorage.getItem(DEMO_PORTFOLIO_STORAGE_KEY);

    if (!raw) {
      return createDefaultDemoPortfolioState();
    }

    const parsed = JSON.parse(raw);
    return isDemoPortfolioState(parsed) ? parsed : createDefaultDemoPortfolioState();
  } catch {
    return createDefaultDemoPortfolioState();
  }
}

export function writeDemoPortfolioState(state: DemoPortfolioState) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(DEMO_PORTFOLIO_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // The demo should keep working even if storage is unavailable.
  }
}

export function clearDemoPortfolioState() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(DEMO_PORTFOLIO_STORAGE_KEY);
  } catch {
    // Ignore storage errors in demo mode.
  }
}

export function getDemoPortfolioUserByEmail(email: string, state = readDemoPortfolioState()) {
  const normalizedEmail = email.trim().toLowerCase();
  return state.users.find((user) => user.email.toLowerCase() === normalizedEmail) ?? null;
}

export function getDemoPortfolioUserById(id: string, state = readDemoPortfolioState()) {
  return state.users.find((user) => user.id === id) ?? null;
}

export function updateDemoPortfolioUser(
  userId: string,
  updater: (user: DemoPortfolioUser) => DemoPortfolioUser,
) {
  const state = readDemoPortfolioState();
  const nextState: DemoPortfolioState = {
    users: state.users.map((user) => (user.id === userId ? updater(structuredClone(user)) : user)),
  };

  writeDemoPortfolioState(nextState);
  return nextState;
}

export function maskAccountNumber(value: string) {
  if (value.length <= 4) {
    return value;
  }

  return `${"•".repeat(Math.max(0, value.length - 4))}${value.slice(-4)}`;
}
