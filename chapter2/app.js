const http = require("http");
const os = require("os");

console.log("Kubia is running ... ");

var handler = (req, res) => {
  console.log("Received request from " + req.connection.remoteAddress);
  res.writeHead(200);
  res.end("You've hit " + os.hostname() + "\n");
};

var server = http.createServer(handler);
server.listen(8080);
