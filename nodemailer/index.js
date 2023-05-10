const express = require('express');
const app  = express();
let PORT = 5000;
app.get("/",(req,res)=>{
    res.end('WELCOME!!!');
});
const start  = async() =>{
    try {
        app.listen(PORT,()=>{
            console.log(`I Am Live on PORT No. ${PORT}`);
        });
    } catch (error) {}
};
start();