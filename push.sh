#!/bin/bash 
wintersmith build
git add .
git add -u .
git commit -m "new blog post"
git push github master
git push heroku master