import { JSDOM } from "jsdom";

export function fn(dom){
    return "plugin 2: " + dom.window.document.body.innerHTML;
}