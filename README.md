## Iframe version

Note: this is a version of the microfrontend container repo (https://github.com/micro-frontends-demo/container) just implemented with iframe. You'll still need content, browse and restaurant-order repos from https://github.com/micro-frontends-demo/ for this to work.

The experience is largely similar, except that clicking into pages triggers a full page reload each time. And the header is now fixed when scrolling (except for about page)

# Feed Me

[![Build Status](https://travis-ci.org/micro-frontends-demo/container.svg?branch=master)](https://travis-ci.org/micro-frontends-demo/container)


Entry point and container application for a micro frontends demo.

This is a React application, which renders a navigation bar, and uses React Router to select a
microfrontend to render onto the page.

# Getting started

1. Clone the repo
2. `yarn install`
3. `yarn start`

You can run the container on its own, but for it to actually do anything you'll
also need to be running:

- the [`content`](https://github.com/micro-frontends-demo/content) server
- the [`browse`](https://github.com/micro-frontends-demo/browse/) micro frontend
- the [`restaurant-order`](https://github.com/micro-frontends-demo/restaurant-order) micro frontend

# Run the tests

- `yarn test`
