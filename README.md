# Felicitas Pojtinger's Konfik

A simple CLI to manage multiple kubeconfigs.

## Features

- Installation with `npm i -g konfik` or `curl https://gitlab.com/pojntfx/pojntfx/-/jobs/artifacts/master/download?job=konfik && unzip konfik.zip && sudo cp konfik/konfik-linux /usr/bin/konfik`
- [Single binary](./package.json)
- The following commands:

  ```plaintext
  Usage: konfik [options] [command]

  Options:
    -V, --version                     output the version number
    -h, --help                        output usage information

  Commands:
    ls                                List all kubeconfigs
    activate [kubeconfig.{yml,yaml}]  Activate a kubeconfig
    cat [kubeconfig.{yml,yaml}]       Get a kubeconfig
    current                           Get the current kubeconfig
    help [cmd]                        display help for [cmd]
  ```

## Docs

See [Platform README](../../README.md).
