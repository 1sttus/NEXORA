import { describe, expect, it } from "vitest";

import { buildMarketSnapshot, marketSnapshots } from "@/lib/market-data";

describe("market data abstraction", () => {
  it("normalizes market snapshots and trend direction", () => {
    const snapshot = buildMarketSnapshot({
      symbol: "BTC",
      name: "Bitcoin",
      price: 68420.12,
      changePercent: 2.84,
      volume: "31.2T",
    });

    expect(snapshot.symbol).toBe("BTC");
    expect(snapshot.priceLabel).toBe("$68,420.12");
    expect(snapshot.changePercent).toBeCloseTo(2.84, 5);
    expect(snapshot.trend).toBe("bullish");
  });

  it("exposes a seeded market dataset", () => {
    expect(marketSnapshots.length).toBeGreaterThan(0);
    expect(marketSnapshots[0].symbol).toBe("BTC");
  });
});
