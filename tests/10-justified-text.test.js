// const fs = require('fs');
import * as fs from 'fs';
// const JSDOM = require('jsdom').JSDOM;
import { JSDOM } from "jsdom";
// const fn = require('./missing-head-or-body-tag');
import fn from '../plugins/justified-text';

test("use of allowed alignments",() => {
    let html = fs.readFileSync("samplepages/10-page-with-centred-text.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});

test("use of justified alignment",() => {
    let html = fs.readFileSync("samplepages/10-page-with-justified-text.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: use of justified text alignment ",2]);
});
