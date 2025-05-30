const fs = require("fs");

// fs.writeFile("demo.txt", "This is sample text", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//   }
// });
// fs.appendFile("demo.txt", "\nMy name is Md. Omar Faruk", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//   }
// });

// readFile
// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//rename file name

fs.rename("demo.txt", "real.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("rename successfull");
  }
});
