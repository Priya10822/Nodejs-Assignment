const fs = require("fs");

//Reading file using readFile method
fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)
})

console.log("Fininshed reading file");


//blocking here
//Reading file using readFileSync method
const a=fs.readFileSync('file.txt')
console.log(a.toString())
console.log("Fininshed reading file");


//Writing file using writeFile method
fs.writeFile('file2.txt','This is a data',()=>{
    console.log("Written to the file");
})
console.log("Fininshed writing file");

//Writing file using writeFileSync method
//blocking here
const b=fs.writeFileSync('file2.txt','This is a data2')
console.log(b);
console.log("Fininshed writing file");
