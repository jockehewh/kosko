#!/usr/bin/env node

const importLocal = require("import-local");
const cli = require("../dist");

if (!importLocal(__filename)) {
  cli.run().catch(cli.handleError);
}
