import { Command } from "commander";
import { runHeat } from "../../systems/heat-system.js";

export function heatCmd() {
  return new Command("heat")
    .argument("<wallet>")
    .action(async (wallet) => {
      console.log(await runHeat(wallet));
    });
}
