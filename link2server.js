const http = require('http');

const server1 = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from server 1!');
});

const server2 = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from server 2!');
});

server1.listen(3000, () => {
  console.log('Server 1 running at http://localhost:3000/');
});

server2.listen(4000, () => {
  console.log('Server 2 running at http://localhost:4000/');
});