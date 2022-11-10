console.log("start of program");

const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log("request received", req);
  console.log("response", res.headersSent);
  res.end("Hello, World!");
  console.log("response", res.headersSent);
});

server.listen(3000);
