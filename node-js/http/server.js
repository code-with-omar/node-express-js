const http = require("http");

// http
//   .createServer((req, res) => {
//     res.end("Hello, I am your first server");
//   })
//   .listen(3000);
const myServer = http.createServer((req, res) => {
  res.end("Hello, I am your first server");
});
myServer.listen(3000, () => {
  console.log("My server is running successfully at localhost: 3000");
});
