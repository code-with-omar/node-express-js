const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: uuidv4(),
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: uuidv4(),
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
  },
];
module.exports = users;
