// const http = require('node:http');

// // Server has a 5 seconds keep-alive timeout by default
// http
//   .createServer((req, res) => {
//     res.write('hello\n');
//     res.end();
//   })
//   .listen(3000);

// setInterval(() => {
//   // Adapting a keep-alive agent
//   http.get('http://localhost:3000', { agent }, (res) => {
//     res.on('data', (data) => {
//       // Do nothing
//     });
//   });
// }, 5000); // Sending request on 5s interval so it's easy to hit idle timeout
const http = require('http');
const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

const server = http.createServer((req, res) => {
   const filePath = '.' + req.url;
   fs.readFile(filePath, (err, data) => {
      if (err) {
         res.writeHead(404, { 'Content-Type': 'text/html' });
         return res.end('404 Not Found');
      }
      res.writeHead(200, { 'Content-Type': 'Text/html' });
      res.write(data);
      return res.end();
   });

   // res.statusCode = 200;
   // res.setHeader('Content-Type', 'text/plain');
   // res.end('Hello World\n');
});
server.listen(3000, '127.0.0.1', () => {
   console.log('Server Runnimg At http://127.0.0.1:3000/');
});

// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
// });
