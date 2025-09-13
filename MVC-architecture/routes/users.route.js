const express = require("express");
const { getUsers, saveUsers } = require("../controllers/users.controller");
const router = express.Router();

router.get("/user", getUsers);
router.post("/users", saveUsers);
module.exports = router;
