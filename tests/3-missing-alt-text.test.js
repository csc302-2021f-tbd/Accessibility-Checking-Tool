// const fs = require('fs');
import * as fs from 'fs';
// const JSDOM = require('jsdom').JSDOM;
import { JSDOM } from "jsdom";
// const fn = require('./missing-head-or-body-tag');
import fn from '../plugins/missing-alt-text';

test("links with alt text",() => {
    let html = fs.readFileSync("samplepages/3-image-with-alt-text.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});

test("missing alt text",() => {
    let html = fs.readFileSync("samplepages/3-image-no-alt-text.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: missing alternate image text ",1]);
});
