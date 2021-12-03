import * as fs from 'fs';
import { JSDOM } from "jsdom";
import fn from '../plugins/missing-id-attr-in-input-field';


test("page with two missing ids, two with ids",() => {
    let html = fs.readFileSync("samplepages/9-page-with-input-fields.html");
    let page = new JSDOM(html);
    expect(fn(page)).toStrictEqual(["Error: HTML missing/empty id attribute in input field",2]);
});
