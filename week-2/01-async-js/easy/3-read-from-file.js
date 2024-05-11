const fs = require("fs")

// Went for call stack then callback queue
fs.readFile('FileToRead.txt', "utf-8", (err, data) => {
    console.log(data);
})

let sum = 0;
for(let i=0; i<10000000000; i++){
    sum += i;
}

console.log("SUM is calculated : "+sum);