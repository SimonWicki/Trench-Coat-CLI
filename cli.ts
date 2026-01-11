import { Command } from "commander";
import { scanCmd } from "./commands/scan.js";
import { heatCmd } from "./commands/heat.js";
import { coatCmd } from "./commands/coat.js";
import { statusCmd } from "./commands/status.js";

export function buildCLI() {
  const cli = new Command();
  cli.name("trench").version("0.1.0");
  cli.addCommand(scanCmd());
  cli.addCommand(heatCmd());
  cli.addCommand(coatCmd());
  cli.addCommand(statusCmd());
  return cli;
}
