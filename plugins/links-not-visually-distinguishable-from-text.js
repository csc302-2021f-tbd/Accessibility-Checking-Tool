// import { JSDOM } from "jsdom";



export function fn(dom){
    let output = "Error: link not visually distinguishable from text";
    let errors = 0;
    if (dom.window.document.body == null){
        return ["", 0];
    }
    else {
        let body = dom.window.document.body;
        output = helper(dom, body.children);
        errors = output.length;
        // console.debug(errors);
    }

    
    //console.debug(dom.window.document.body.children.length);
    output = "Error: link not visually distinguishable from text";
    if (errors === 0) return ["", errors];
    return [output, errors];

}

export function helper(dom, children, output = []){
    //console.debug(children.length);
    
    for (let i=0; i<children.length; i++){
        //console.debug(i + " " + children.item(i).outerHTML);

        if (children.item(i).tagName === "A"){
            //console.debug(children.item(i).outerHTML); 
            //console.debug(children.item(i).getAttribute('style'));
            if (children.item(i).getAttribute('style') !== null &&
                (children.item(i).outerHTML.includes("bold") ||
                 children.item(i).outerHTML.includes("underline")
                )){
                    //console.debug(children.item(i).outerHTML); 
                    //no errors here
            }
            else if (children.item(i).outerHTML.includes("<b>") ||
                     children.item(i).outerHTML.includes("<strong>") ||
                     children.item(i).outerHTML.includes("<stronger>") ||
                     children.item(i).outerHTML.includes("<u>")){
                        //console.debug(children.item(i).outerHTML);
                        //no errors here
                     }
            else{
                output.push("Error: " + children.item(i).outerHTML);
                //console.debug(children.item(i).outerHTML);
            }

            // return children.item(i).outerHTML;
        }
        if (children.item(i).children.length > 0){
            output = helper(dom, children.item(i).children, output);
        }
    }
    return output;
}


export default fn;
