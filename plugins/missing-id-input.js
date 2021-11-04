import { JSDOM } from "jsdom";

console.log("Running empty plugin")

export function fn(dom){
    let errors = 0;
    
    let output = "Error: Empty ";
    if (errors > 0)  output+= " element";
    if (errors === 2) output+= "s";
    if (errors === 0) return ["", errors];
    return [output, errors];
}