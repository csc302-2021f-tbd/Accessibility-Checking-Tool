import { JSDOM } from "jsdom";

export function fn(dom){
    return "plugin 3: " + dom.window.document.body.innerHTML;
}