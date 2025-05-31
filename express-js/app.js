const express = require("express");
const app = express();

// http request

app.get("/", (req, res) => {
  res.send("I am a get requuest at home route");
});

app.get("/about", (req, res) => {
  res.send("I am from about route");
});

app.post("/login", (req, res) => {
  res.send("Post request found");
});

app.delete("/remove", (req, res) => {
  res.send("Deleted");
});
app.put("/edit", (req, res) => {
  res.send("Edit complete");
});
module.exports = app;
