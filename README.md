# 1. Node js

# There are three types of modules

- 1. Built-in Modules
     Node.js comes with built-in (core) modules — these are already included when you install Node, so you don’t need to install them using `npm.`

They live inside Node itself, not inside `node_modules`.
✅ Examples:

- fs → file system (read/write files)

- http → create HTTP servers

- path → handle file paths

- os → get OS-level info

- crypto → handle encryption/hashing

- events → handle event emitters

- url → handle and parse URLs

## fs-> file system(read/write)

### 1. writeFile

```js
const fs = require("fs");
fs.writeFile("demo.txt", "This is sample text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
```

### 2. Readfile

```js
fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```

### 3. appendFile

```js
fs.appendFile("demo.txt", "\nMy name is Md. Omar Faruk", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
```

### 4. Rename File

```js
fs.rename("demo.txt", "real.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("rename successfull");
  }
});
```

### 5. Delete file

```js
fs.unlink("real.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Delete succcefull");
  }
});
```

## Os -> operation system

```js
const {
  userInfo,
  hostname,
  homedir,
  totalmem,
  freemem,
  version,
} = require("os");
console.log(userInfo());
console.log(hostname());
console.log(homedir());
console.log(totalmem());
console.log(freemem());
console.log(version());
```

## path

```js
const path = require("path");

const url = "c:\\teamp\\myfile.html";
const newUrl = "facebook.com/user";
console.log(path.basename(url));

console.log(path.dirname(url)); // direct path name
console.log(path.extname(url)); // extension name

console.log(
  path.format({
    dir: "C:\\path\\dir",
    base: "file.txt",
  })
);
console.log(path.join(newUrl, "/omarFaruk", "/webCam"));
```

## Basic server create

```js
const http = require("http");

// http
//   .createServer((req, res) => {
//     res.end("Hello, I am your first server");
//   })
//   .listen(3000);
const myServer = http.createServer((req, res) => {
  res.end("Hello, I am your first server");
});
myServer.listen(3000, () => {
  console.log("My server is running successfully at localhost: 3000");
});
```

## Make Routing

```js
const http = require("http");
const fs = require("fs");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("home.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("error.html", (err, data) => {
      res.writeHead(404, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log("My server is running successfully at localhost: 3000");
});
```

- simple version

```js
const http = require("http");
const fs = require("fs");
const PORT = 5000;

const server = http.createServer((req, res) => {
  const handleRuting = (statusCode, fileDirection) => {
    fs.readFile(fileDirection, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleRuting(200, "views/home.html");
  } else if (req.url === "/about") {
    handleRuting(200, "views/about.html");
  } else if (req.url === "/contact") {
    handleRuting(200, "views/contact.html");
  } else {
    handleRuting(404, "views/error.html");
  }
});

server.listen(PORT, () => {
  console.log("My server is running successfully at localhost: 5000");
});
```

# Express js

## create server

```js
// app.js

const express = require("express");
const app = express();

module.exports = app;

// index.js

const app = require("./app");
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running");
});
```

## HTTP request

```js
// app.js

const express = require("express");
const app = express();
app.get("/get", (req, res) => {
  res.send("GET request received");
});

// POST → create new data
app.post("/post", (req, res) => {
  res.send("POST request received");
});

// PUT → replace existing data
app.put("/put", (req, res) => {
  res.send("PUT request received");
});

// PATCH → update part of existing data
app.patch("/patch", (req, res) => {
  res.send("PATCH request received");
});

// DELETE → delete data
app.delete("/delete", (req, res) => {
  res.send("DELETE request received");
});
app.use((req, res) => {
  res.send("<h1>404 !! page not found</h1>");
});
```

## Express js-> Router

- Create routers folder and create ruoter related file. likes

  ```bash
  /project-root
  ├── app.js
  ├── server.js
  └── /routers
        └── user.router.js

  ```

## 🛠 Step 1: /routers/user.router.js

```js
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
```

## Step 2: app.js

```js
const express = require("express");
const app = express();
const userRouter = require("./routes/user.routers");
// http request
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("I am a get requuest at home route");
});
app.use((req, res) => {
  res.send("<h1>404 !! page not found</h1>");
});
module.exports = app;
```

## Step 3: index.js

```js
const app = require("./app");
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running");
});
```

## HTTP Response

### Response as a `JSON` file

```js
// file path:/routers/user.routers.js
const express = require("express");
const router = express.Router();
router.get("/login", (req, res) => {
  res.status(200).json({
    message: "I am come from login page",
    statusCode: 200,
  });
});

module.exports = router;
```

### Response as a `HTML` file

```js
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});
```

### Set cookies

```js
router.get("/login", (req, res) => {
  res.cookie("name", "Omar Faruk");
  res.cookie("name", "Arif");

  res.status(200).json({
    message: "I am come from login page",
    statusCode: 200,
  });
});
```

### Request methods

1. http requests through - `get, post, put, delete`
2. Request with Router Parameters -> `req.params.parameterName`
3. Request with Query Parameter -> `req.query.parameterName`
4. Request with headers -> `req.header('key')`
5. Request with JSON data / from data inside body -> `req.body.parameterName`
