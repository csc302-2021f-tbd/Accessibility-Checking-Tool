
export function fn(dom){
    let output = "Error: HTML missing/empty id attribute in input field";
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

    if (errors === 0) return ["", errors];
    output = "Error: HTML missing/empty id attribute in input field";
    return [output, errors];
}

export function helper(dom, children, output = []){
    // console.debug(children.length);    
    for (let i=0; i<children.length; i++){
        if (children.item(i).tagName === "INPUT"){
            if (children.item(i).getAttribute('id') === null ||
                children.item(i).getAttribute('id').length === 0){
                output.push("Error: " + children.item(i).outerHTML);
                // console.debug(output[output.length - 1]);
            }
        }
        if (children.item(i).children.length > 0){
            output = helper(dom, children.item(i).children, output);
        }
    }
    return output;
}

export default fn;
