const express = require("express");
const userRouter = require("./routes/users.route");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
