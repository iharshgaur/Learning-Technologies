const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the response header with a status code and content type
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');

  // Check the request URL and handle different endpoints
  if (req.url === "/") {
    res.end("Hello, World! This is the home page.\n");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page.\n");
  } else {
    res.statusCode = 404;
    res.end(`404 Not Found ${req.url}\n`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
