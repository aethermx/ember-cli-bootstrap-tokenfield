#!/bin/bash

ember build --environment='production'

cd ../ember-cli-bootstrap-tokenfield-gh-pages/

rm -r assets

cp -Rv ../ember-cli-bootstrap-tokenfield/dist/* .

git add -A .

git commit -m 'update'

git push -u origin gh-pages

