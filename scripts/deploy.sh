#!/bin/bash

ssh root@catcat.io "mkdir -p /var/www/liff/catcatshelf/movie"
rsync -Praz --delete --exclude=node_modules --exclude=.git --exclude=lib ../build/ root@catcat.io:/var/www/liff/catcatshelf/movie