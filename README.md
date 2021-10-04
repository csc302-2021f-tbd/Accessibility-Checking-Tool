# Accessibility-checking tool

A pedagogical model of a tool that detects accessibility problems in web pages, like [WAVE](https://wave.webaim.org/.)

## Tech Stack

- Yarn package manager
- TypeScript
- jsdom
- Express when moving to web

We will use yarn instead of npm because of better command-line usage and familiarity.

We will use TypeScript to catch certain common classes of errors early in development. One of our
team members is also more familiar with strongly-typed languages like C++ than pure JavaScript.
This is not much more difficult to learn than JavaScript, because typings are an optional superset.

Because the instructor expects a product closer to a web API and web application if we can make it,
building a browser extension is not on the table, so we will build a core system using the leading
jsdom library to parse HTML, plugins on top of this core system to actually detect problems, and
finally, a web API using the leading Express library as a consumer of the core system.

## Getting started

1. Install the [**current**](https://nodejs.org/en/download/current/) version of Node.js (16, due to become LTS this month) for your operating system.
1. Install the [yarn](https://yarnpkg.com/) package manager with `npm install -g yarn`.
1. Clone this repository.
1. To install or update dependencies, simply run `yarn` in the repository root.
1. To build the project, run `yarn build` in the repository root.
1. After building, to run the project, provide a valid HTML file on standard input, for example:
   ```bash
   <example.html yarn.start
   curl https://web.cs.toronto.edu/ | yarn start
   ```
   This will parse the document and print out the body of document again to standard output.

## Milestones

1. Build the core engine that can load plugins that are responsible for identifying problems.
   The core should be responsible for parsing the DOM and producing the output error report.
   This should be accessible as a library and over the command-line for basic testing.

   Kevin will be responsible for setting up tooling, continuous integration, and core work.
   Ben will also be responsible for work on the parsing core.

1. Build one or two plugins that identfy a specific accessibility violation.

   We will each be responsible for one plugin, and Kevin can help out with both.

1. Create a web API that takes a URL input, downloads the HTML file, runs the checks server side, and then returns a set of results back to the caller.

   Ben will be responsible for defining and building the API endpoints.
   Ahmad will assist as needed.

## Meeting Notes
[`docs/meetings`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/meetings)
