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
2. Run `sh ./install.sh` in root dir.
3. Download an HTML file to check, then run: `python run.py <html page>` in root dir.

Alternatively, if the above doesn't work:

1. Clone this repository `git clone https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool`.
2. ` curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs`
3. `sudo apt-get install npm`
4. `sudo apt-get install python`
5. To install or update dependencies, run `npm install` in root dir.
6. After building, to run the project, download an HTML file to check, then run:
   `python run.py <html page>` in root dir.
   This will parse the document, run the plugin checks on it.

## Meeting Notes
[`docs/meetings`](https://github.com/csc302-2021f-tbd/Accessibility-Checking-Tool/tree/main/docs/meetings)
