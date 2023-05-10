const fs = require('fs');
fs.writeFile('new.txt','hii My Self Aditya raj',(err,data)=>{
    console.log("Content Written")
});
console.log('hii');

// fs.writeFileSync('new1.txt','hii My Self Aditya raj');{
//     console.log("Content Written")
// }
    
// console.log('hii');