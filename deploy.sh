#!/usr/bin/env sh

# abort on errors
set -e

git checkout --orphan gh-pages

echo 'Building started...'
    
yarn build

git --work-tree 'dist' add --all
git --work-tree 'dist' commit -m gh-pages

echo 'Pushing to gh-pages...'
git push origin HEAD:gh-pages --force
rm -r dist
git checkout -f master
git branch -D gh-pages
