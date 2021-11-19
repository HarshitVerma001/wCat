const fs = require('fs');
const path = require('path');

// check if file is present at base level or not
function checkFileOrNot(filepath) {
    return fs.existsSync(filepath);
}

// read content of file and return error if not present
function readFile(filepath) {
    if (checkFileOrNot(filepath)) return fs.readFileSync(filepath, 'utf8');
    let filename = path.basename(filepath);
    return new Error(filename, "is not present");
}

// dipsplay all the files passed as argument
function readMultipleFiles(files) {
    console.log(files); 
    for (let i = 0; i < files.length; i++) {
        let currentDirectory = process.cwd();
        let filepath = path.join(currentDirectory, files[i]);
        console.log(readFile(filepath));
    }
}

// overwrite file with new contents
function overwriteFile(toWhere, newContent) {
    fs.writeFileSync(toWhere, newContent);
}

// remove consecutive multiple line breaks (-s)
function removeLineBreaks(file) {
    let currentDirectory = process.cwd();
    let filepath = path.join(currentDirectory, file);
    let content = readFile(filepath);
    if(content instanceof Error)  {
        return Error("Read error");
    }
    content = content.replace(/[\r?\n]+/g, "\n");
    overwriteFile(filepath, content);
}

//break into different lines
function breakIntoLine(file) {
    let currentDirectory = process.cwd();
    let filepath = path.join(currentDirectory, file);
    let fileContents =  readFile(filepath);
    if(fileContents instanceof Error)  {
        return Error("Read error");
    }
    return fileContents.split(/\r?\n/);
}

// print all line with numbers
function printLineNumbers(file) {
    let lines = breakIntoLine(file);
    if(lines instanceof Error) {
        console.error("Error encountered");
        return;
    }
    for (let i = 0; i < lines.length; i++) {
        console.log(i + 1, lines[i]);
    }
}
 
module.exports = {
    readMultipleFiles: readMultipleFiles,
    removeLineBreaks: removeLineBreaks,
    printLineNumbers: printLineNumbers
}