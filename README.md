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
1. Installing div env run `sh install.sh` in root dir.
1. To build the project run `npm install` in root dir.
1. After building, to run the project, download an HTML file to check, then run as shown in instruction below.
   This will parse the document, run the plugin checks on it. There are [`samplepages/`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/samplepages) to quickly check our program.
   
## Running 
- Run `sh run.sh <html page>` in root dir.

## Testing
- Run `sh test.sh` in root dir.
   
## Alternative manual dependency installation
1. Clone this repository `git clone https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool`.
1. Install the current [Node.js](https://nodejs.org/en/download/current/).
1. Install npm.
1. To install or update dependencies, run `npm install` in root dir.
1. After building, to run the project, download an HTML file to check, then run as shown in instruction below.
   This will parse the document, run the plugin checks on it. There are [`samplepages/`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/samplepages) to quickly check our program.
   


## Milestones

1. Build the core engine that can load plugins that are responsible for identifying problems. The core should be responsible for parsing the DOM and producing the output error report. This should be accessible over the command-line.
1. Build one or two plugins that identfy a specific accessibility violation.
1. Build the rest of the plugins specified in [`docs/tasks/A2s TODOs`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/blob/main/docs/tasks/A2s%20TODOs.md)
1. Check for invalid plugins in our engine.

## Project Structure
```
./
|-- main.js                                                (core engine)
|-- plugins
|-- |-- index.js                                           (fetches plugin codes)
|-- |-- missing-head-or-body-tag.js                        (plugin that checks for missing/empty <head> & <body>)
|-- |-- missing-lang-attr.js                               (plugin that checks if html tag has a lang attr)
|-- |-- bad-html-title.js                                  (plugin that checks for bad placeholder titles)
|-- |-- links-not-visually-distinguishable-from-text.js    (plugin that checks if links text are visually distinguishable from surrounding text)
|-- |-- missing-id-attr-in-input-field.js                  (plugin that checks if input fields are missing the id attribute)
|-- |-- plugins.txt                                        (file that lists the plugin names to be ran)
|-- tests                                                  (test files corresponding to the plugins above)
|-- |-- 1-missing-head-or-body-tag.test.js                   
|-- |-- 6-missing-lang-attr.test.js
|-- |-- 7-bad-html-title.test.js
|-- |-- 8-links-not-visually-distinguishable-from-text.test.js
|-- |-- 9-missing-id-attr-in-input-field.test.js 
|-- samplepages                                            (folder containing HTML pages to run our plugins on)
```

## Meeting Notes (Task 3)
[`docs/meetings`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/meetings)

## Postmortem (Task 3)
[`docs/postmortem`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/postmortem)

## Features Overview (Task 1)
[`docs/progress/A3's Progress.md`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/blob/main/docs/progress/A3's%20Progress.md)



