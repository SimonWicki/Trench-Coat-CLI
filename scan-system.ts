import { buildMetrics } from "../systems/metrics.js";
import { scoreRisk } from "../systems/scoring.js";

export async function runScan(wallet: string, days: number) {
  const metrics = buildMetrics(wallet, days);
  return scoreRisk(metrics);
}
