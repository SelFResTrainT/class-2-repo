const fileSystem = require('fs');

fileSystem.readFile("./read.txt","utf-8",(err,data) => {
  console.log(data);
});
