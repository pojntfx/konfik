# Felicitas Pojtinger's Konfik

A simple CLI to manage multiple kubeconfigs.

## Features

```plaintext
Usage: konfik [options] [command]

Options:
  -V, --version                       output the version number
  -h, --help                          output usage information

Commands:
  list|l                              List all kubeconfigs
  activate|a [kubeconfig.{yml,yaml}]  Activate a kubeconfig
  get|g [kubeconfig.{yml,yaml}]       Get a kubeconfig
  current|c                           Get the current kubeconfig
  help [cmd]                          display help for [cmd]
```

## Usage

```bash
# Install on Linux
curl -L https://gitlab.com/pojntfx/pojntfx/-/jobs/artifacts/master/download?job=konfik -o /tmp/konfik.zip && unzip /tmp/konfik.zip -d /tmp/konfik && sudo cp /tmp/konfik/packages/konfik/dist/konfik-linux /tmp/konfik/packages/konfik/dist/konfik && sudo install /tmp/konfik/packages/konfik/dist/konfik /usr/local/bin
# Install on macOS
curl -L https://gitlab.com/pojntfx/pojntfx/-/jobs/artifacts/master/download?job=konfik -o /tmp/konfik.zip && unzip /tmp/konfik.zip -d /tmp/konfik && sudo cp /tmp/konfik/packages/konfik/dist/konfik-macos /usr/local/bin/konfik
```

## Docs

See [Platform README](../../README.md).
