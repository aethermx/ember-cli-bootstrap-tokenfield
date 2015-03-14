#!/bin/bash

# mkdir ../ember-cli-bootstrap-tokenfield-gh-pages/
# cd ../ember-cli-bootstrap-tokenfield-gh-pages/
# git init
# git remote add origin git@github.com:aethermx/ember-cli-bootstrap-tokenfield.git
# git checkout -b gh-pages

ember build --environment='production'

cp -Rv dist/* ../ember-cli-bootstrap-tokenfield-gh-pages/

cd ../ember-cli-bootstrap-tokenfield-gh-pages/

git add -u .

git commit -m 'update'

git push -u origin gh-pages

