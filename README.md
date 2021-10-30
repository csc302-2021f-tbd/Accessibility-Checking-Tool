# Accessibility-checking tool

A pedagogical model of a tool that detects accessibility problems in web pages, like [WAVE](https://wave.webaim.org/.)

## Tech Stack
- JavaScript
- NodeJS
- jsdom

We will build a core system using the leading jsdom library to parse HTML, 
plugins on top of this core system to actually detect problems.

## Getting started

1. Clone this repository `git clone https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool`.
1. Install the current [Node.js](https://nodejs.org/en/download/current/).
1. Install npm.
1. To install or update dependencies, run `npm install` in root dir.
1. After building, to run the project, download an HTML file to check, then run:
   `sh run.py <html page>` in root dir.
   This will parse the document, run the plugin checks on it.

## Milestones

1. Build the core engine that can load plugins that are responsible for identifying problems. The core should be responsible for parsing the DOM and producing the output error report. This should be accessible over the command-line.
1. Build one or two plugins that identfy a specific accessibility violation.
1. Build the rest of the plugins specified in [`docs/tasks/A2s TODOs`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/blob/main/docs/tasks/A2s%20TODOs.md)
1. Check for invalid plugins in our engine


## Meeting Notes
[`docs/meetings`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/meetings)
