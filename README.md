# [D3qs5BarChart](https://turtlewolfe.github.io/D3qs5BarChart/ 'Template for Data Visualization Bar Chart with D3 Challenges at freeCodeCamp.com')

```bash
# repo
touch .gitignore
# node_modules
git init
git remote add origin git@github.com:TurtleWolfe/fccD3.git
npm init -y
npm i gh-pages -D
# npm i gh-pages --save-dev
# homepage
# "deploy": "gh-pages -d dist"
mkdir dist
cd dist
touch index.html
# !
touch about.html
cd ..
git add .
git commit -m "first commit"
git push --set-upstream origin master
npm run deploy
```

```json
"scripts": {
    "deploy": "gh-pages -d dist"
  },
"homepage": "https://turtlewolfe.github.io/fccD3/",
```
