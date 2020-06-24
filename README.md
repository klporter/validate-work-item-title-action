# Validate Work Item Title
Validate that a GUS work number has been added to the title of the PR

## Inputs

### none

## Outputs

### none

## Example usage
```yml
name: Validate PR Title

on:
  pull_request:
    types:
      - opened
      - reopened

jobs:
  validate_pr_title:
    runs-on: ubuntu-latest
    steps:
      - name: Validate PR Title action step
        env:
            GH_CONTEXT: ${{ toJson(github) }}
        id: validate-pr-title
        uses: klporter/validate-work-item-title-action@v1
```