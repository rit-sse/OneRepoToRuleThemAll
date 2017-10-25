# The One Repo

> Three Rings for the Elven-kings under the sky,
> Seven for the Dwarf-lords in their halls of stone,
> Nine for Mortal Men doomed to die,
> One for the Dark Lord on his dark throne
> In the Land of Mordor where the Shadows lie.
> One Ring to rule them all, One Ring to find them,
> One Ring to bring them all and in the darkness bind them
> In the Land of Mordor where the Shadows lie.

![The One Ring](https://user-images.githubusercontent.com/13719429/32019514-7b35a020-b99b-11e7-95a2-99e880c80b8b.gif)

## Getting Started

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/en/download/) installed. Node comes with [npm](https://docs.npmjs.com/cli/npm) installed which is used to install and manage dependencies.

### Installation

1. Clone this repository w/ submodules:
`git clone --recursive https://github.com/rit-sse/OneRepoToRuleThemAll.git`

If you've already cloned this repo without submodules, you can run `git submodule update --init --recursive` in this project to get them.

2. `cd OneRepoToRuleThemAll`

3. `npm install`

4. `npm start`

5. Open `localhost:5000` in your favorite web browser.

### Development

* Build the site: `npm run build`
* Linting: `npm run lint`
* Check bundles: `npm run debug`

This repo is setup to proxy our development API by default. This means if you're only making visual changes, this is likely the only repo you'll need to install.

However, if you're doing one of these things:
- Making visual changes to authenticated pages (eg. event creation, go link creation, approving scoreboard memberships)
- Making data model / database changes

You'll need to install and setup the [node-api](https://github.com/rit-sse/node-api). Check out the docs on that repo on how to get it setup.

Then you'll edit the `server.js` file in this repo to target where your API installation is running:

```
proxy: {
  "/api/**": {
    target: "localhost:3000/api/",
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }
}
```

## Deployment

_TODO_

### Dockering

_TODO_
