// import { JSDOM } from "jsdom";

export function fn(dom){
    let output = "Error: missing/empty ";
    let errors = 0;
    if (dom.window.document.head.children.length === 0){
        output += "<head>";
        errors++;
    }
    if (dom.window.document.body.children.length === 0){
        if (errors === 1) output += " and ";
        output += "<body>"
        errors++;
    }
    if (errors > 0)  output+= " element";
    if (errors === 2) output+= "s";

    //console.debug(dom.window.document.body.children.length);

    if (errors === 0) return ["", errors];
    return [output, errors];

}

// module.exports = fn;
export default fn;
