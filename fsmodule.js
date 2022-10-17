const fs = require("fs");

//Reading file using readFile method
fs.readFile("file1.txt", "utf8", (err, data) => {
  console.log(err, data);
});

console.log("Fininshed reading file using readFile method");

//blocking here
//Reading file using readFileSync method
const a = fs.readFileSync("file1.txt");

console.log(a.toString());

console.log("Fininshed reading file using readFileSync method");

//Writing file using writeFile method
fs.writeFile("file2.txt", "This is a data 1", () => {
  console.log("Written to the file 2");
});

console.log("Fininshed writing file 2");

//Writing file using writeFileSync method
//blocking here
const b = fs.writeFileSync("file3.txt", "This is a data 2");

console.log(b);

console.log("Fininshed writing file 3");
