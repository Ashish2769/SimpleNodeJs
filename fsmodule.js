const fs = require('fs');

//This is a non blocking io technique

// fs.readFile('file.txt', 'utf8',(err, data)=>{
//     console.log(err,data)
// })

//This will block the code until i/o complete
// const a = fs.readFileSync('file.txt')
// console.log(a.toString())  //tostring is mandatory to read data


// fs.writeFile('file2.txt', "This is a data", ()=>{
//     console.log("Written to the file")
// });

b = fs.writeFileSync('file2.txt', "This is a data2")
console.log(b)
console.log("Finished reading file")