#!/bin/sh

if (find ./e2e -name "*.spec.ts" | xargs grep "describe.only\|it.only"); then
  printf "\n\e[91mYou have e2e tests focused with \".only\".\nPlease remove this before pushing.\e[0m\n"
  exit 1
fi

if (find ./src -name "*.spec.ts" | xargs grep "fdescribe(\|fit("); then
  printf "\n\e[91mYou have unit tests focused with \"fdescribe\" or \"fit\".\nPlease remove this before pushing.\e[0m\n"
  exit 1
fi

if ! [ -z "$(git status --porcelain)" ]; then
  printf "\n\e[91mYour working tree is dirty. Please commit or stash first.\e[0m\n"
  exit 1
fi
