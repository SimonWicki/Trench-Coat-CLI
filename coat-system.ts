export function coatTransaction(tx: string) {
  return {
    tx,
    coatedAt: Date.now(),
    context: {
      volatility: "MEDIUM",
      liquidity: "MEDIUM"
    }
  };
}
