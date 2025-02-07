const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Use 'error' event to handle port in use error
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port 8080 is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error(`Server error:`, err);
  }
});

server.listen(8080);

console.log('Server is running at http://localhost:8080');