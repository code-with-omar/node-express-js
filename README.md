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
