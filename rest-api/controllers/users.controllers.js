let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};
// create users
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json({ message: "User created successfully", user: users });
};

//update user

const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const user = users.find((user) => user.id === id);
  console.log(user);
  if (user) {
    user.name = name;
    user.email = email;

    res.status(200).json({ message: "User updated successfully", users });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// delete user
const deleteUser = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);

  res.status(200).json({ message: "User deleted successfully", users });
};
module.exports = { getAllUsers, createUser, updateUser, deleteUser };
