const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end('hii Welcome to my server');
    }
    else if (req.url == "/About") {
        res.end("Hello Welcome to About us Page")
    }
    else if (req.url == "/UserApi") {
fs.readFile(`${ __dirname}/userapi/api.json`,'utf-8',(err , data )=>{
    console.log(data)
    const objdata = JSON.parse(data);
    res.end(objdata)
    });
       
    }
    else if (req.url == "/Help&Support") {
        res.end("Hii How Can I Help You")
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>Error 404</h1>")
    }

});

server.listen(8081, "127.0.0.1", () => {
    console.log('Listening to port no 8081');
});