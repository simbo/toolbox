#!/bin/sh

if (find ./e2e -name "*.spec.ts" | xargs grep "describe.only\|it.only"); then
  echo "\nYou have e2e tests focused with \".only\".\nPlease remove this before pushing.\n"
  exit 1
fi

if (find ./src -name "*.spec.ts" | xargs grep "fdescribe(\|fit("); then
  echo "\nYou have unit tests focused with \"fdescribe\" or \"fit\".\nPlease remove this before pushing.\n"
  exit 1
fi

if ! [ -z "$(git status --porcelain)" ]; then
  echo "\nYour working tree is dirty. Please commit or stash first.\n"
  exit 1
fi
