const http = require('http');

const {PORT, HOST, TIMEOUT} = process.env;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  setTimeout(() => res.end(), TIMEOUT);
});

server.listen(PORT, HOST);