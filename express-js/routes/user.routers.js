const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.send("I am from about route");
});

router.post("/login", (req, res) => {
  res.send("Post request found");
});

router.delete("/remove", (req, res) => {
  res.send("Deleted");
});
router.put("/edit", (req, res) => {
  res.send("Edit complete");
});

module.exports = router;