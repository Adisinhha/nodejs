const fs = require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })
// console.log("This is an NodeJs Tutorial");
 b = fs.writeFileSync('hell.docx','This is the first & second txt file');
 console.log(b)
console.log('Finished Writing the file')