const express = require("express");
const router = express.Router();

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
