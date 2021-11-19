const { readMultipleFiles } = require('./commands/command.js');
let commandFile = require('./commands/command.js');


let input = process.argv.slice(2);
let files = [];
let options = [];
const optionRgx = /-./;
while (input[0].match(optionRgx)) {
    options.push(input[0]);
    input.shift();
}

// test of  -n and -b simultaniously and deleting if true
if (options.indexOf("-n") != - 1 && options.indexOf("-b") != -1) {
    let optionToBeDeleted = options.indexOf("-n") > options.indexOf("-b")?
    options.indexOf("-n") : options.indexOf("-b");
    options.splice(optionToBeDeleted, 1);
}

let removeLineBreak = false;
let isOptionPresent = options.length > 0;
while (options.length > 0 && isOptionPresent) {
    if (options[0] == "-s") {
        // call remove newLine on files
        commandFile.removeLineBreaks(input[0]);
    } else if (options[0] == "-n"){
        // remove newline on files
        commandFile.removeLineBreaks(input[0]);
        // print line with numbering
        commandFile.printLineNumbers(input[0]);
    } else if (options[0] == "-b") {
        // print line with numbering
        commandFile.printLineNumbers(input[0]);
    } else {
        console.log("Wrong command entered. Please enter Ctrl + C and try again");
    }
    options.shift();
}

if (!isOptionPresent) readMultipleFiles(input);

