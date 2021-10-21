import * as fs from 'fs';
let file = "";
const data = fs.readFileSync('./plugins/plugins.txt');
file = data.toString();
let pluginFileNames = [];
let plugins = [];
let char = "";

for (let i = 0; i < file.length; i++){
    if (file.charAt(i) == '\n'){
        pluginFileNames.push(char);
        char = "";
    }
    else {
        char += file.charAt(i);
    }
}

for (let i = 0; i < pluginFileNames.length; i++){
    let {fn} = await import("./" + pluginFileNames[i]);
    plugins.push(fn);
}

export { plugins };