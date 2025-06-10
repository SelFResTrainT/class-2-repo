const express = require("express");
const port = 3000;
const app = express();

app.get('/',(req,res) => {
  res.send("nodemon not added yet");
});

app.get('/',(req,res) => {
  res.send("I wont be using nodemon");
});

app.listen(port);


