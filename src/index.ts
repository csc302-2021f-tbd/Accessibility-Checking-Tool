import * as fs from "fs";
import { JSDOM } from "jsdom";

// Read all of process.stdin
const html = fs.readFileSync(0, "utf8");
const dom = new JSDOM(html, { pretendToBeVisual: true });
console.log(dom.window.document.body.innerHTML);
