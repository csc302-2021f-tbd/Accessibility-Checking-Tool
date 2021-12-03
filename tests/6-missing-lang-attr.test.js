import * as fs from 'fs';
import { JSDOM } from "jsdom";
import fn from '../plugins/missing-lang-attr';


test("page with foreign language attribute",() => {
    let html = fs.readFileSync("samplepages/6-page-with-lang-attr-ar.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});

test("page with english language attribute",() => {
    let html = fs.readFileSync("samplepages/6-page-with-lang-attr-en.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});


test("page missing language attribute 1",() => {
    let html = fs.readFileSync("samplepages/6-page-without-lang-attr-1.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: HTML element missing language attribute",1]);
});


test("page missing language attribute 2",() => {
    let html = fs.readFileSync("samplepages/6-page-without-lang-attr-2.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: HTML element missing language attribute",1]);
});

test("page missing language attribute 3",() => {
    let html = fs.readFileSync("samplepages/6-page-without-lang-attr-3.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: HTML element missing language attribute",1]);
});