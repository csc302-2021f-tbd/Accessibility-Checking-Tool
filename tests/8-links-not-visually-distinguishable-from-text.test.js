import * as fs from 'fs';
import { JSDOM } from "jsdom";
import fn from '../plugins/links-not-visually-distinguishable-from-text';

test("various distinguishable and indistinguishable links",() => {
    let html = fs.readFileSync("samplepages/8-page-with-and-without-links-indistinguishable.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: link not visually distinguishable from text",2]);
});


test("only distinguishable links",() => {
    let html = fs.readFileSync("samplepages/8-page-with-distinguishable-links.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["",0]);
});

test("only indistinguishable links",() => {
    let html = fs.readFileSync("samplepages/8-page-with-indistinguishable-links.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: link not visually distinguishable from text",3]);
});