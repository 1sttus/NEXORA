import { describe, expect, it } from "vitest";

import { applyLedgerEntry, createLedgerEntry } from "@/lib/ledger";

describe("ledger engine", () => {
  it("applies deposits and withdrawals to balances", () => {
    const balance = 1000;
    const deposit = createLedgerEntry({
      accountId: "acct_1",
      amount: 250,
      type: "deposit",
      description: "Initial funding",
    });
    const withdrawal = createLedgerEntry({
      accountId: "acct_1",
      amount: 100,
      type: "withdrawal",
      description: "Cashout request",
    });

    expect(deposit.amount).toBe(250);
    expect(withdrawal.amount).toBe(-100);
    expect(applyLedgerEntry(balance, deposit)).toBe(1250);
    expect(applyLedgerEntry(1250, withdrawal)).toBe(1150);
  });

  it("supports bank and wallet withdrawal destinations", () => {
    const bankWithdrawal = createLedgerEntry({
      accountId: "acct_1",
      amount: 250,
      type: "withdrawal",
      description: "Bank transfer payout",
      destination: {
        method: "bank",
        bankName: "Citi",
        accountHolder: "NEXORA User",
        iban: "US123456789",
      },
    });

    const walletWithdrawal = createLedgerEntry({
      accountId: "acct_1",
      amount: 75,
      type: "withdrawal",
      description: "Crypto wallet payout",
      destination: {
        method: "wallet",
        network: "ethereum",
        walletAddress: "0xabc123",
      },
    });

    expect(bankWithdrawal.amount).toBe(-250);
    expect(bankWithdrawal.destination?.method).toBe("bank");
    expect(walletWithdrawal.amount).toBe(-75);
    expect(walletWithdrawal.destination?.method).toBe("wallet");
    expect(walletWithdrawal.destination?.network).toBe("ethereum");
  });

  it("rejects invalid ledger entries", () => {
    expect(() =>
      createLedgerEntry({
        accountId: "acct_1",
        amount: 0,
        type: "deposit",
        description: "Invalid",
      }),
    ).toThrow();

    expect(() =>
      createLedgerEntry({
        accountId: "acct_1",
        amount: 50,
        type: "unknown" as never,
        description: "Invalid type",
      }),
    ).toThrow();
  });
});
