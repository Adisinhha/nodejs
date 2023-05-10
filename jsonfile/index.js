const fs = require('fs');
const Biodata =
{
    name: "adi sinha",
    age: 20,
    gender: "Male"
}

const json = JSON.stringify(Biodata);
fs.readFile('json1.json',"utf-8",(err,data)=>
{
    const orgdata = JSON.parse(data);
    console.log(orgdata)
    console.log(data)
})
// fs.writeFile('json1.json', json, (err) => {
//     console.log("done")
// });
// const json1 = JSON.parse(json)
// console.log(json1)