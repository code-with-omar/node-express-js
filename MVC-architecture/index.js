const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

const users = [
  {
    name: "Md. Omar Faruk",
    age: 25,
  },
  {
    name: "Shrabony Akter",
    age: 23,
  },
];
app.use(express.urlencoded({ extended: true }));
const htmlForm = `<form method="POST" action="/users">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="number" name="age" placeholder="Enter your age" />
    <button type="submit">Save User</button>
</form>`;

app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.get("/user", (req, res) => {
  res.send(htmlForm);
});
app.post("/users", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const user = { name, age };
  users.push(user);

  res.status(201).json({
    success: true,
    users,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
