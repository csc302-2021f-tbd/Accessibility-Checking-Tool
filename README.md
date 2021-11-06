# Accessibility-checking tool

A pedagogical model of a tool that detects accessibility problems in web pages, like [WAVE](https://wave.webaim.org/.)

## Tech Stack
- JavaScript
- NodeJS
- jsdom

Our project is a JS engine that loads JS plugins, each of which is responsible for checking for one accessibility violation. 
The engine loads the plugins and runs all of them on a local HTML page that is given as an argument.

## Getting started

1. Clone this repository `git clone https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool`.
1. Install the current [Node.js](https://nodejs.org/en/download/current/).
1. Install npm.
1. To install or update dependencies, run `npm install` in root dir.
1. After building, to run the project, download an HTML file to check, then run as shown in instruction below.
   This will parse the document, run the plugin checks on it. There are [`samplepages/`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/samplepages) to quickly check our program.
   
## Running 
- Run `sh run.py <html page>` in root dir.

## Testing
- Run `sh test.sh` in root dir.

## Milestones

1. Build the core engine that can load plugins that are responsible for identifying problems. The core should be responsible for parsing the DOM and producing the output error report. This should be accessible over the command-line.
1. Build one or two plugins that identfy a specific accessibility violation.
1. Build the rest of the plugins specified in [`docs/tasks/A2s TODOs`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/blob/main/docs/tasks/A2s%20TODOs.md)
1. Check for invalid plugins in our engine.

## Project Structure
```
./
|-- main.js                             (core engine)
|-- plugins
|-- |-- index.js                        (fetches plugin codes)
|-- |-- missing-head-or-body-tag.js     (plugin that checks for missing/empty <head> & <body>)
|-- samplepages                         (folder containing HTML pages to run our plugins on)
```

## Meeting Notes
[`docs/meetings`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/meetings)

## Postmortem
[`docs/postmortem`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/postmortem)

## Progress
[`docs/progress`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/progress)

## Features 
[`docs/tasks`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/tasks)


