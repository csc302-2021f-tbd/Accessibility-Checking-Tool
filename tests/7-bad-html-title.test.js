import * as fs from 'fs';
import { JSDOM } from "jsdom";
import fn from '../plugins/bad-html-title';


test("page with bad title 2",() => {
    let html = fs.readFileSync("samplepages/7-page-with-bad-title.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: HTML missing/bad title",1]);
});

test("page with bad title 3",() => {
    let html = fs.readFileSync("samplepages/7-page-without-title.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: HTML missing/bad title",1]);
});


test("page with good title 1",() => {
    let html = fs.readFileSync("samplepages/7-page-with-good-title.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});


test("page with good title 2",() => {
    let html = fs.readFileSync("samplepages/7-page-with-bad-substring-title.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});