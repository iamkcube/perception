@echo off
SET message=%1
git add .
git commit -m %message%
git push
git checkout main
git merge develop
git push
git checkout develop
