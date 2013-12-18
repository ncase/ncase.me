#!/bin/bash 
wintersmith build
git add .
git add -u .
git commit -m "new blog post"
git push heroku master
git push github master