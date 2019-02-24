#!/usr/bin/env node

const shell = require("shelljs");
const fs = require("fs");

const activeKubeconfigPath = `${process.env.HOME}/.kube/config`;

if (!fs.existsSync(activeKubeconfigPath)) {
  console.error("Currently active kubeconfig not found!");
  process.exit(1);
}

console.log(shell.cat(activeKubeconfigPath).stdout);
