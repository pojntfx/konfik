#!/usr/bin/env node

const commander = require("commander");

commander
  .version("0.0.1-alpha1")
  .command("ls", "List all kubeconfigs")
  .command("activate [kubeconfig.{yml,yaml}]", "Activate a kubeconfig")
  .command("cat [kubeconfig.{yml,yaml}]", "Get a kubeconfig")
  .command("current", "Get the current kubeconfig")
  .parse(process.argv);
