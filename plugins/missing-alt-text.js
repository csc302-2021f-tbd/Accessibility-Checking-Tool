export function fn(dom) {
    let output = "Error: missing alternate image text ";
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
    output = "Error: missing alternate image text ";
    return [output, errors];
}

export function helper(dom, children, output = []) {
    for (let i=0; i < children.length; i++) {
        let item = children.item(i);
        // it appears that alt will be empty if not defined 
        // so the null check may be extraneous
        if (item.tagName === "IMG" && 
            (item.alt === null || item.alt === ""))
            
            output.push("Error: " + item.outerHTML);

        if (item.children.length > 0) 
            output = helper(dom, item.children, output);
    }
    return output;
}

export default fn;