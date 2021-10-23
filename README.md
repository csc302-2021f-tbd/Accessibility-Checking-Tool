# Accessibility-checking tool

A pedagogical model of a tool that detects accessibility problems in web pages, like [WAVE](https://wave.webaim.org/.)

## Tech Stack
- JavaScript
- NodeJS
- jsdom

We will build a core system using the leading jsdom library to parse HTML, 
plugins on top of this core system to actually detect problems.

## Getting started

1. ` curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs`
1. `sudo apt-get install npm`
2. `sudo apt-get install python`
3. Clone this repository `git clone https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool`.
4. To install or update dependencies, simply run `npm install` in root dir.
5. After building, to run the project, download an HTML file to check, rename it to page.HTML in root dir, then run:
   `node --experimental-specifier-resolution=node main.js` also in root dir.
   This will parse the document, run the plugin checks on it.


## Meeting Notes
[`docs/meetings`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/meetings)
