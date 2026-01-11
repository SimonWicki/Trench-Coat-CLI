export function buildMetrics(wallet: string, days: number) {
  return {
    wallet,
    days,
    churn: Math.random(),
    exposure: Math.random(),
    holdTime: Math.random()
  };
}
