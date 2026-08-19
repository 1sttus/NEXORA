export type MarketTrend = "bullish" | "bearish" | "neutral";

export interface MarketSnapshotInput {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  volume: string;
}

export interface MarketSnapshot extends MarketSnapshotInput {
  trend: MarketTrend;
  priceLabel: string;
}

export function buildMarketSnapshot(input: MarketSnapshotInput): MarketSnapshot {
  const { symbol, name, price, changePercent, volume } = input;

  const trend: MarketTrend = changePercent > 0 ? "bullish" : changePercent < 0 ? "bearish" : "neutral";

  return {
    symbol,
    name,
    price,
    changePercent,
    volume,
    priceLabel: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price),
    trend,
  };
}

export const marketSnapshots: MarketSnapshot[] = [
  buildMarketSnapshot({ symbol: "BTC", name: "Bitcoin", price: 68420.12, changePercent: 2.84, volume: "$31.2T" }),
  buildMarketSnapshot({ symbol: "ETH", name: "Ethereum", price: 3810.56, changePercent: 1.67, volume: "$18.6T" }),
  buildMarketSnapshot({ symbol: "SOL", name: "Solana", price: 164.9, changePercent: 4.12, volume: "$7.4T" }),
  buildMarketSnapshot({ symbol: "XRP", name: "XRP", price: 0.62, changePercent: 1.2, volume: "$2.7T" }),
  buildMarketSnapshot({ symbol: "DOGE", name: "Dogecoin", price: 0.18, changePercent: 2.05, volume: "$1.3T" }),
  buildMarketSnapshot({ symbol: "EURUSD", name: "Euro / Dollar", price: 1.0912, changePercent: 0.18, volume: "—" }),
  buildMarketSnapshot({ symbol: "XAU", name: "Gold", price: 2426.7, changePercent: 0.74, volume: "—" }),
  buildMarketSnapshot({ symbol: "SPX", name: "S&P 500", price: 5482.13, changePercent: 0.63, volume: "—" }),
];
