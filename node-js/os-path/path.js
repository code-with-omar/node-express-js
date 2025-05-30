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
console.log(path.join(newUrl, "/omarFaruk","/webCam"));
