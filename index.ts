#!/usr/bin/env node
import { buildCLI } from "./shell/cli.js";
buildCLI().parse(process.argv);
