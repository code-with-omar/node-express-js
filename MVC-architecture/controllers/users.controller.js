const users = require("../models/users.model");
const path = require("path");

// serve HTML page
exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

// save user to in-memory array
exports.saveUsers = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);

  const user = { name, age };
  users.push(user);

  res.status(201).json({
    success: true,
    users,
  });
};
