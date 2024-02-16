#!/bin/bash
cd /usr/local/codedeploy/b2b-prototype/
find . ! -name 'build.zip' -type d -exec rm -rf {} +
find . ! -name 'build.zip' -type f -exec rm -f {} +
unzip -qqo build.zip 
rsync -avl --exclude 'build.zip' --exclude 'appspec.yml' --exclude 'transfer.sh' ./out/* /var/www/html/
service node-server restart