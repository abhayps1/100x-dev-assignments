const fs = require("fs");
const { type } = require("os");

let str = fs.readFileSync("file.txt", "utf-8");

while(str.includes("  ")){
    str = str.replace("  ", " ");
}

console.log(str);