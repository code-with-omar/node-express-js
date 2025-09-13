const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "upload")); // ✅ absolute path
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get("/upload", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).send("File is uploaded");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
