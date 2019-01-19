#!/bin/sh

if ! [ "$(git symbolic-ref --short -q HEAD)" = "master" ]; then
  printf "\n\e[91mYour current branch has to be \"master\" to create a release.\e[0m\n"
  exit 1
fi

if ! [ -z "$(git status --porcelain)" ]; then
  printf "\n\e[91mYour working tree is dirty. Please commit or stash first.\e[0m\n"
  exit 1
fi

VERSION=$1

CURRENT_VERSION=$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')

printf "\nCurrent version is $CURRENT_VERSION\n"

if [[ $VERSION = '' ]]; then
  printf "\nEnter the new version to create: "
  read VERSION
fi

if ! [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  printf "\n\e[91m\"$VERSION\" is not a valid semver version.\e[0m\n"
  exit 1
fi

printf "\nThis will update package.json to version \e[1m\e[93m$VERSION\e[0m\e[21m, add a tagged commit and push to origin."
printf "\n\n\e[1mPress ENTER to continue or CTRL-C to cancel...\e[21m"
read
printf "\n"

set -e

SEARCH='("version":[[:space:]]*").+(")'
REPLACE="\1$VERSION\2"
sed -i ".tmp" -E "s/$SEARCH/$REPLACE/g" "package.json"
rm package.json.tmp

git add package.json
git commit -m "bump version to $VERSION"
git tag -a "$VERSION" -m "$VERSION"
git push origin --tags

printf "\n\n\e[1m\e[92m✔  All done!\e[0m\e[21m"
printf "\n\nGitHub: \e[34m\e[4mhttps://github.com/simbo/toolbox\e[24m\e[0m"
printf "\n\nTravis CI: \e[34m\e[4mhttps://travis-ci.org/simbo/toolbox\e[24m\e[0m\n\n"
