# React MD Meetup

This is the presentation for the first React MD meetup hosted by Visionist.

## Goals

Introduce basic concepts of React to developers that have never used it before.  Also introduce the very-near necessary ecosystem components such as JSX, Babel, and Webpack.

## How to run

Clone this repository, and then...

```shell
cd react-md-meetup-0
npm install
npm run dev
```

Browse to [localhost:3000/webpack-dev-server/](localhost:3000/webpack-dev-server).

### Doing the exercises

When working through the exercises, run:

```shell
npm run exercises
```

Then, browse to [localhost:3001/webpack-dev-server/](localhost:3001/webpack-dev-server).

The only difference is that this build only contains four slides, so if you make a change that restarts you at the beginning of the deck or you have to refresh manually, you don't have to find your place in the presentation again.

This can be run in parallel with `npm run dev`.

## Adding slides

Add the root component of your slide to the array being exported in `/src/components/Slides/index.js`.  Slides are rendered in the order they appear in that array.

## Updating the `gh-pages` branch

We want to build all of our static files in the public directory (which is where `webpack-dev-server` serves content from) and have that be the root of the `gh-pages` branch.

```shell
npm run build
git subtree push --prefix public origin gh-pages
```

Reference [this gist](https://gist.github.com/cobyism/4730490) for more information.
