#!/usr/bin/env node

const shell = require("shelljs");

shell
  .ls("~/.kube/*.{yml,yaml}")
  .forEach(file => console.log(file.split(".kube/")[1]));
