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
console.log(__dirname); // directore naame
console.log(__filename); //
