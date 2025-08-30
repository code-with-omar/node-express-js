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

- Create routers folder and create router related file. likes

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
  res.send("I am a get request at home route");
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

## Request methods

1. http requests through - `get, post, put, delete`
2. Request with Router Parameters -> `req.params.parameterName`
3. Request with Query Parameter -> `req.query.parameterName`
4. Request with headers -> `req.header('key')`
5. Request with JSON data / from data inside body -> `req.body.parameterName`

### 1. Request with Query parameter -> user `?`

```js
// for single query
`http://localhost:5000/user/info?id=190605` // for multiple query pass use & sign
`http://localhost:5000/user/info?id=190605&name=omarFaruk`;
```

example

```js
router.get("/info", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  res.send(`
    <h1>Student id is : ${id}</h1>
    <h2>Student name is : ${name}</h2>
    `);
});
```

### 2. Request with Route Parameter

- `routename/:value`
- for multiple `routerName/:value/routeName/:value`

example

```js
`url: http://localhost:5000/user/user/190605`;
router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send(`
    <h1>Student id is : ${id}</h1>
   
    `);
});
// For multiple Parameter
`url : http://localhost:5000/user/user/190605/user/omar`;
router.get("/user/:id/user/:name", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  res.send(`
    <h1>Student id is : ${id}</h1>
    <h2>Student name is : ${name}</h2>
    `);
});
```

### 3. Request with headers

```js
// request with headers
router.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`
    <h1>Student id is : ${id}</h1>
    <h2>Student name is : ${name}</h2>
    `);
});
```

## Middleware

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the `request object (req)`, the `response object (res)`, and the `next` middleware function in the application’s request-response cycle. The `next` middleware function is commonly denoted by a variable named `next`.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

### 1. Application-level middleware

```js
// example:1
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});
// example:2
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

// example 3

pp.use("/user/:id", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});
```

### 2. Router-level middleware

Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

```js
const router = express.Router();
```

Load `router-level` middleware by using the `router.use()` and `router.METHOD()` functions.

The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:

```js
const express = require("express");
const app = express();
const router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

router.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`
    <h1>Student id is : ${id}</h1>
    <h2>Student name is : ${name}</h2>
    `);
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get(
  "/user/:id",
  (req, res, next) => {
    // if the user ID is 0, skip to the next router
    if (req.params.id === "0") next("route");
    // otherwise pass control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // render a regular page
    res.render("regular");
  }
);
```

### Built-in middleware

Starting with version 4.x, Express no longer depends on Connect. The middleware functions that were previously included with Express are now in separate modules; see the list of middleware functions.

Express has the following built-in middleware functions:

- express.static serves static assets such as HTML files, images, and so on.
- express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
- express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+

### 4. Error-handling middleware

```js
// syntax
app.use(function(err,req,res,next))
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke !");
});
```

## MVC architecture (Model, Views, Controller)

## REST-API with MVC architecture

### 1. index.js -> Create server

```js
const app = require("./app");
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### 2. app.js -> sets up and configures the Express application (middleware, routes, error handling).

```js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users.route");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
```

### 3.Model : models/users.model.js

```js
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
```

### 4. views : views/index.html

- Handles the UI / presentation layer (e.g., HTML, frontend, API responses).

### 5. Routes: routers/users.router.js

```js
const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");

router.get("/", getAllUsers); // get method
router.post("/", createUser); // post method
router.delete("/:id", deleteUser); // delete method
router.put("/:id", updateUser); // update method
module.exports = router;
```

### 6. Controllers: controller.users.controllers.js

```js
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
```
