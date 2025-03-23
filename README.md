# surge.sh action

<p align="center">
  <a href="https://orcid.org/0009-0009-0993-7629"><img src="https://img.shields.io/badge/iD-0009--0009--0993--7629-f5f5f5" alt="Orcid"></a>
  <a href="https://ko-fi.com/kwy"><img src="https://badgen.net/badge/icon/kofi?icon=kofi&label=kwy&color=F16061" alt="Kwy"></a>

</p>

<p align="center">

![Depfu](https://img.shields.io/depfu/kangwuyi/surge-sh-action) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kangwuyi/surge-sh-action) [![Code Coverage](https://img.shields.io/codecov/c/github/kangwuyi/surge-sh-action)](https://codecov.io/github/kangwuyi/surge-sh-action) [![Build Ci](https://github.com/kangwuyi/surge-sh-action/actions/workflows/test.yml/badge.svg)](https://github.com/kangwuyi/kangwuyi/surge-sh-action)

</p>

# Publish

This action deploy your project with [surge.sh](https://surge.sh)

## Inputs

### `domain`

**Required** Domain set for your service.

### `root`

**Required** Root is your build path.`

### `token`

**Required** Token obtained with `surge token` command.

## Example usage

```yaml
name: My workflow

on: push

jobs:
  my-job:
    name: My job
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to foo-bar.surge.sh
        uses: kangwuyi/surge-sh-action@v1
        with:
          domain: 'foo-bar.surge.sh'
          root: './disk'
        env:
          SURGE_TOKEN: ${{secrets.SURGE_TOKEN}}
```

## local test
checkout test branch and push.
