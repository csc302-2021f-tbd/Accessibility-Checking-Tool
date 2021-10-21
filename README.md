# Accessibility-checking tool

A pedagogical model of a tool that detects accessibility problems in web pages, like [WAVE](https://wave.webaim.org/.)

## Tech Stack

~~- Yarn package manager~~
~~- TypeScript~~
- JavaScript
- NodeJS
- jsdom
~~- Express when moving to web~~

~~We will use yarn instead of npm because of better command-line usage and familiarity.~~

~~We will use TypeScript to catch certain common classes of errors early in development. One of our
team members is also more familiar with strongly-typed languages like C++ than pure JavaScript.
This is not much more difficult to learn than JavaScript, because typings are an optional superset.~~

~~Because the instructor expects a product closer to a web API and web application if we can make it,
building a browser extension is not on the table~~, so we will build a core system using the leading
jsdom library to parse HTML, plugins on top of this core system to actually detect problems, ~~and
finally, a web API using the leading Express library as a consumer of the core system.~~

## Getting started

1. ` curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs`
1. `sudo apt-get install npm `
1. Clone this repository.
1. To install or update dependencies, simply run `npm install` in the repository root.
1. After building, to run the project, download an HTML file to check, rename it to page.HTML in root dir, then run:
   `node --experimental-specifier-resolution=node main.js` also in root dir.
   This will parse the document, run the plugin checks on it.


## Meeting Notes
[`docs/meetings`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/meetings)
