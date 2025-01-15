# team blog@lucas12.store
- team-sunsin development team's technology blog about wanting to contribute to the open source ecosystem
  <img src="https://i.namu.wiki/i/TNsR9Ds4OAhWOs6QIc9QopgXwcTPwlKiuehfZRXPAiv8Ea6BMsLJmVzcIGFG4HZoTSg7wvDStHH6ZMAxxbjFSd5rtvtA37UXHN2N0ENANiXxROfCOEMokkht_0WSlOhlVIMpQnLQlQu5BpxO3_-vKA.webp "  alt="tiger cute" style="width:200px;"/>

### Connecting
- PRD - https://blog.lucas12.store, https://lucas-hub12.github.io
- STG - https://team-lucas.web.app
- dev - 
- local - https://localhost:8080

### Contribute guide
- Anyone can do it's possible. Let's send the PR first and make it a better team by joining.

0. created based on [vuepress](https://v2.vuepress.vuejs.org/)
1. git clone git@github.com:lucas-hub12/lucas-hub12.github.io.git
2. edit with [vscode](https://code.visualstudio.com/)
3. install
``` bash
https://github.com/nvm-sh/nvm
https://pnpm.io/ko/
```
4. run - development environment [install pnpm](https://pnpm.io/installation)
- connecting to localhost 8080
- node.js install if you have get error 'ELIFECYCLE Command failed'
```
$ nvm install --lts
$ nvm ls
$ nvm use v22.13.0
$ node -v
v22.13.0 
pnpm install
pnpm docs:dev
```

### build & deploy
1. STG
- [x] 배포전 작업 파일은 모두 커밋!
- [install firebase](https://v2.vuepress.vuejs.org/guide/deployment.html#google-firebase)

``` bash
$ git add .
$ pnpm docs:build
$ firebase login
$ firebase deploy
```

2. PRD
``` bash
$ github pages -> docs
$ pnpm docs:build
$ git add .;git commit -a;git push
$  https://oss.cashmallow.com
https://blog.lucas12.store


