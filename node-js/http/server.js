const http = require("http");

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" }); // this is set status code
  res.write("<h1>Hello from the server</h1>"); // this is the display response
  res.write("<h2>Hello again from the server</h2>"); // this is the display response
  res.end(); // response end
});
myServer.listen(3000, () => {
  console.log("My server is running successfully at localhost: 3000");
});
