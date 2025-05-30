const http = require("http");
const fs = require("fs");
const PORT = 5000;

const server = http.createServer((req, res) => {
  const handleRuting = (statusCode, fileDirection) => {
    fs.readFile(fileDirection, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleRuting(200, "views/home.html");
  } else if (req.url === "/about") {
    handleRuting(200, "views/about.html");
  } else if (req.url === "/contact") {
    handleRuting(200, "views/contact.html");
  } else {
    handleRuting(404, "views/error.html");
  }
});

server.listen(PORT, () => {
  console.log("My server is running successfully at localhost: 5000");
});
