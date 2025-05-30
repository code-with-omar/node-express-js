const { userInfo, hostname, homedir, totalmem, freemem, version } = require("os");
console.log(userInfo());
console.log(hostname());
console.log(homedir());
console.log(totalmem());
console.log(freemem());
console.log(version())