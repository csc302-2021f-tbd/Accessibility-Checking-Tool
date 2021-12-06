export function fn(dom) {
    let output = "Error: missing/empty link text ";
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
    let output = "Error: missing/empty link text ";
    return [output, errors];
}

export function helper(dom, children, output = []) {
    for (let i=0; i < children.length; i++) {
        let item = children.item(i);
        // TODO: think about whether this check needs to be more detailed
        if (item.tagName === "A" && !(item.innerHTML === ""))
            output.push("Error: " + item.outerHTML);

        if (item.children.length > 0) 
            output = helper(dom, item.children, output);
    }
}
