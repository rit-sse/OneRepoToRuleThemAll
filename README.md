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

By default this app expects to the node-api to be running at /api/v2/ this will only be true in production or if you are proxying it with nginx.
To change what the app is pointing at use `API_ROOT=https://ssedev.se.rit.edu/api/v2/ npm start` setting API_ROOT to what ever the node-api is running at.
Using that option makes it so you don't have to run the node-api locally. If you are running it locally then change API_ROOT to reflect that.

## Deployment

The dev branch has CI set up to deploy to ssedev.se.rit.edu and master will deploy to sse.rit.edu
