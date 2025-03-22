# surge.sh publish action

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
          root: '/disk'
        env:
          SURGE_TOKEN: ${{secrets.SURGE_TOKEN}}
```