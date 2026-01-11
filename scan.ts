import { Command } from "commander";
import { runScan } from "../../systems/scan-system.js";

export function scanCmd() {
  return new Command("scan")
    .argument("<wallet>")
    .option("--days <n>", "horizon", "30")
    .action(async (wallet, opts) => {
      const result = await runScan(wallet, Number(opts.days));
      console.log(result);
    });
}
