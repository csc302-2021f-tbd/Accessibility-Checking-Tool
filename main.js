import * as module from './plugins/index.js';
import * as fs from 'fs';
import { JSDOM } from "jsdom";

const html = fs.readFileSync("./" + process.argv.slice(2));
const dom = new JSDOM(html);
// console.debug(dom.window.document.body.innerHTML);

let plugins = module.plugins;
let report = new Array();
let errors = 0;

plugins.forEach(plugin => report.push(plugin(dom)));
report.forEach(element => {
    if (element[0] !== ""){
        console.debug(element[0]);
    }
        errors+= element[1];
});

if (errors === 0) console.debug("No errors/warnings found!");
else console.debug(errors + " errors/warnings found");
