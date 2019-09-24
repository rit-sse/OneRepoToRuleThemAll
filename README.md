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

1. Clone this repository:
`git clone https://github.com/rit-sse/OneRepoToRuleThemAll.git`

2. `cd OneRepoToRuleThemAll`

3. `npm install`

4. Set your API environment variable to `API_ROOT=http://localhost:3000/api/v2/` or `API_ROOT=https://ssedev.se.rit.edu/api/v2/` (dev)

5. `npm start`

6. Open `localhost:5000` in your favorite web browser.

### Development

* Build the site: `npm run build`
* Linting: `npm run lint`
* Check bundles: `npm run debug`

By default, this repo expects the [node-api](https://github.com/rit-sse/node-api) to be running at `/api/v2`, which is only the case in production or if you're proxying the API with nginx.

For development, you'll want to change where this app points to the API.

If you're only making visual changes, you can skip installing the node-api and use our development API: `API_ROOT=https://ssedev.se.rit.edu/api/v2/ npm start`

However, if you're making changes to authenticated pages (eg. event creation, go link creation, approving scoreboard memberships) or making data model / database changes, you'll have to install and setup the node-api. Then you'll set your `API_ROOT` where your local installation is running (eg. `API_ROOT=http://localhost:3000/api/v2/ npm start`).

## Deployment

We have CircleCI and Docker Hub setup so `devlop` will deploy to `ssedev.se.rit.edu` and `master` will deploy to `sse.rit.edu`.

Check out [sse-eos](https://github.com/rit-sse/sse-eos) for Docker deployment instructions.

## Contributing

Like to help out? Awesome!

First, check out the [open issues](https://github.com/rit-sse/OneRepoToRuleThemAll/issues) for something to work on and comment on the issue saying you're working on it. Then fork this repo, branch off of `devlop` when making your changes, and submit a pull-request targeting `devlop`.

If you have any questions or need some help, join our [Slack](https://rit-sse.slack.com) and post in the `#sse-technology` channel.
