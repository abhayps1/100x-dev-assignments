let contentToWrite = `This is the content that needs to be written
This is done using fs library of javascript 
The is also an async function which write content to file`;

const fs = require("fs");

fs.writeFile("FileToWrite.txt", contentToWrite, callbackFunction);

function callbackFunction(err){
    if(err) {
        throw err;
    }
    console.log("Writing to file Done");
}

let sum = 0;
for(let i=0; i<10000000000; i++){
    sum += i;
}
console.log("The sum is " + sum);
console.log("Expensive Operation")