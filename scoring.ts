export function scoreRisk(metrics: any) {
  return {
    score: Math.floor(metrics.exposure * 100),
    level: metrics.exposure > 0.7 ? "HIGH" : "MEDIUM",
    metrics
  };
}

export function scoreHeat(metrics: any) {
  return {
    heat: Math.floor(metrics.churn * 100),
    state: metrics.churn > 0.6 ? "HOT" : "WARM"
  };
}
