#!/bin/sh
npm run web-bundle;
git add build/* && git commit -m 'Web JS bundled for GitHub Pages deploy';
git subtree push --prefix build origin gh-pages;
