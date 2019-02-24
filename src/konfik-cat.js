#!/usr/bin/env node

const commander = require("commander");
const shell = require("shelljs");
const fs = require("fs");

commander.parse(process.argv);
const kubeconfig = commander.args[0];

if (!kubeconfig) {
  console.error("Kubeconfig name is required!");
  process.exit(1);
}

const kubeconfigPath = `${process.env.HOME}/.kube/${kubeconfig}`;

if (!fs.existsSync(kubeconfigPath)) {
  console.error("Kubeconfig not found!");
  process.exit(1);
}

console.log(shell.cat(kubeconfigPath).stdout);
