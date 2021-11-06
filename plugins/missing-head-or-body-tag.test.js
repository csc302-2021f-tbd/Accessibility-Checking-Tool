// const fs = require('fs');
import * as fs from 'fs';
// const JSDOM = require('jsdom').JSDOM;
import { JSDOM } from "jsdom";
// const fn = require('./missing-head-or-body-tag');
import fn from './missing-head-or-body-tag';

test("full page",() => {
    let html = fs.readFileSync("samplepages/page.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});

test("missing head",() => {
    let html = fs.readFileSync("samplepages/page-without-head.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: missing/empty <head> element",1]);
});

test("missing body",() => {
    let html = fs.readFileSync("samplepages/page-without-body.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: missing/empty <body> element",1]);
});

test("empty",() => {
    let html = fs.readFileSync("samplepages/empty.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: missing/empty <head> and <body> elements",2]);
});