const express = require("express");
const app = express();
const userRouter = require("./routes/user.routers");
// http request
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});
app.use((req, res) => {
  res.send("<h1>404 !! page not found</h1>");
});
module.exports = app;
