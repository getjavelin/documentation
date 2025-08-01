# Website
[![pages-build-deployment](https://github.com/getjavelin/documentation/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/getjavelin/documentation/actions/workflows/pages/pages-build-deployment)  

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start --host 0.0.0.0
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
