// const fs = require('fs');
import * as fs from 'fs';
// const JSDOM = require('jsdom').JSDOM;
import { JSDOM } from "jsdom";
// const fn = require('./missing-head-or-body-tag');
import fn from '../plugins/missing-link-text';

test("links with text and images",() => {
    let html = fs.readFileSync("samplepages/4-links-with-text.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});

test("link with missing text",() => {
    let html = fs.readFileSync("samplepages/4-links-no-text.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: missing/empty link text ",3]);
});
