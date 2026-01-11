import { buildMetrics } from "./metrics.js";
import { scoreHeat } from "./scoring.js";

export async function runHeat(wallet: string) {
  return scoreHeat(buildMetrics(wallet, 14));
}
