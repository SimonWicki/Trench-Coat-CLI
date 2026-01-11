import { Command } from "commander";

export function statusCmd() {
  return new Command("status")
    .description("Print trench coat system status")
    .action(() => {
      console.log("STATUS: ACTIVE");
      console.log("MODE: DEFENSIVE");
    });
}
