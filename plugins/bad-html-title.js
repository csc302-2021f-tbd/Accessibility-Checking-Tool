
export function fn(dom){
    let output = "Error: HTML missing/bad title";
    let errors = 0;
    let badTitles = ["untitled", "no title", "new page", "untitled page", "new page"]
    if (dom.window.document.head == null || 
        dom.window.document.title == null){
            errors++;
        }
    else{
        let title = dom.window.document.title.toLowerCase();
        // console.debug(title);
        if (title.length == 0 || badTitles.includes(title)){
            errors++;
        }
        else{
            // console.debug(title);
            errors = 0;
        }
    }

    if (errors === 0) return ["", errors];
    return [output, errors];

}

export default fn;
