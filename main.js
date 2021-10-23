import * as module from './plugins/index.js';
import * as fs from 'fs';
import { JSDOM } from "jsdom";

const html = fs.readFileSync("./page.html");
const dom = new JSDOM(html);
// console.debug(dom.window.document.body.innerHTML);

let plugins = module.plugins;
let report = new Array();

plugins.forEach(plugin => report.push(plugin(dom)));
report.forEach(element => console.debug(element));