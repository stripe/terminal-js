#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# Ensure working directory is test directory
cd "$(dirname "$0")/.."

[ -f package.json ] && rm package.json
yarn init -sy

versions=(
  "next"
  "beta"
  "latest"
  "4.3.5"
  "4.2.4"
  "4.1.5"
)

for version in ${versions[@]}; do
  echo "--- Testing with TypeScript version $version"
  yarn add -s --no-progress typescript@$version
  yarn run tsc
done
