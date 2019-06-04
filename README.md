# @dinhoabreu/semantic-release-bitbucket-config

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish npm packages with [Bitbucket](https://bitbucket.org).

[![Build Status](https://travis-ci.org/dinhoabreu/semantic-release-bitbucket-config.svg?branch=master)](https://travis-ci.org/dinhoabreu/semantic-release-bitbucket-config)

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

## Install

```bash
npm install --save-dev semantic-release @dinhoabreu/semantic-release-bitbucket-config
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@dinhoabreu/semantic-release-bitbucket-config"
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.
