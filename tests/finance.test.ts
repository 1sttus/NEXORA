import { describe, expect, it } from "vitest";

import { formatCurrency, formatPercent } from "@/lib/finance";

describe("financial format helpers", () => {
  it("formats currency values consistently", () => {
    expect(formatCurrency(125000.42)).toBe("$125,000.42");
  });

  it("formats percent changes with sign and decimals", () => {
    expect(formatPercent(3.7)).toBe("+3.70%");
    expect(formatPercent(-1.25)).toBe("-1.25%");
  });
});
