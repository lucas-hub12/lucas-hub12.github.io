
pnpm docs:build
cp CNAME docs/
cp robots.txt docs/
cp naver569b2e7cebefad7b11c739ef3b22839d.html docs/
git add .
git commit -m "build"
git push
