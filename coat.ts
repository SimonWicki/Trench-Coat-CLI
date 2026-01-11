import { Command } from "commander";
import { coatTransaction } from "../../systems/coat-system.js";

export function coatCmd() {
  return new Command("coat")
    .argument("<tx>")
    .action((tx) => {
      console.log(coatTransaction(tx));
    });
}
