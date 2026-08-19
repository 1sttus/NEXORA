export type LedgerType =
  | "deposit"
  | "withdrawal"
  | "trade"
  | "fee"
  | "payout"
  | "signal_purchase"
  | "referral_credit"
  | "adjustment";

export interface LedgerEntryInput {
  accountId: string;
  amount: number;
  type: LedgerType;
  description: string;
  currency?: string;
  referenceId?: string;
}

export interface LedgerEntry extends LedgerEntryInput {
  id: string;
  createdAt: string;
  amount: number;
}

const entriesWithPositiveBalance: LedgerType[] = ["deposit", "referral_credit"];
const entriesWithNegativeBalance: LedgerType[] = ["withdrawal", "trade", "fee", "payout", "signal_purchase"];
const allowedTypes = new Set<LedgerType>([
  "deposit",
  "withdrawal",
  "trade",
  "fee",
  "payout",
  "signal_purchase",
  "referral_credit",
  "adjustment",
]);

export function createLedgerEntry(input: LedgerEntryInput): LedgerEntry {
  const { accountId, amount, type, description, currency = "USD", referenceId } = input;

  if (!accountId.trim()) {
    throw new Error("accountId is required for ledger entries.");
  }

  if (!description.trim()) {
    throw new Error("description is required for ledger entries.");
  }

  if (!Number.isFinite(amount) || amount === 0) {
    throw new Error("amount must be a finite number greater than zero.");
  }

  if (!allowedTypes.has(type)) {
    throw new Error(`Unsupported ledger type: ${type}`);
  }

  const normalizedAmount =
    entriesWithPositiveBalance.includes(type)
      ? Math.abs(amount)
      : entriesWithNegativeBalance.includes(type)
        ? -Math.abs(amount)
        : Math.sign(amount) === -1
          ? Math.abs(amount) * -1
          : Math.abs(amount);

  return {
    id: `${accountId}:${Date.now()}:${Math.random().toString(16).slice(2, 10)}`,
    accountId,
    amount: normalizedAmount,
    type,
    description,
    currency,
    referenceId,
    createdAt: new Date().toISOString(),
  };
}

export function applyLedgerEntry(balance: number, entry: Pick<LedgerEntry, "amount">): number {
  return Number((balance + entry.amount).toFixed(2));
}
