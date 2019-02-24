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
const activeKubeconfigPath = `${process.env.HOME}/.kube/config`;

if (!fs.existsSync(kubeconfigPath)) {
  console.error("Kubeconfig not found!");
  process.exit(1);
}

if (fs.existsSync(activeKubeconfigPath)) {
  shell.rm(activeKubeconfigPath);
}

shell.cp(kubeconfigPath, activeKubeconfigPath);

console.log(`Kubeconfig "${kubeconfig}" activated!`);
