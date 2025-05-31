const express = require("express");
const router = express.Router();

// request with Query parameter
router.get("/info", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  res.send(`
    <h1>Student id is : ${id}</h1>
    <h2>Student name is : ${name}</h2>
    `);
});
// request with route parameter
router.get("/user/:id/user/:name", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  res.send(`
    <h1>Student id is : ${id}</h1>
    <h2>Student name is : ${name}</h2>
    `);
});
// request with parameter
router.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`
    <h1>Student id is : ${id}</h1>
    <h2>Student name is : ${name}</h2>
    `);
});
router.get("/about", (req, res) => {
  res.send("I am from about route");
});

router.get("/login", (req, res) => {
  res.cookie("name", "Omar Faruk");
  res.cookie("name", "Arif");

  res.status(200).json({
    message: "I am come from login page",
    statusCode: 200,
  });
});

router.delete("/remove", (req, res) => {
  res.send("Deleted");
});
router.put("/edit", (req, res) => {
  res.send("Edit complete");
});

module.exports = router;
