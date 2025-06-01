const express = require("express");
const app = express();
const userRouter = require("./routes/user.routers");

app.use(express.static("public"));
// http request
app.use("/user", userRouter);

app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "./public/index.html");
});
app.use((req, res) => {
  res.send("<h1>404 !! page not found</h1>");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke !");
});
module.exports = app;
