//nodemon

import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plain");
  res.end("response from server 2");
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log("server running at http://localhost:8000");
});
