const express = require("express");
const app = express();
const port = 3000;

  let kydneys = 2;
  let health = 'Good';

app.get('/',(req,res) => {
    res.send(`The patient has ${kydneys} kydneys and has a ${health} health`);
});

app.get('/kydney-added',(req,res) => {
  res.send(`The patient has ${kydneys} kydneys and has a ${health} health`);
});

app.post('/kydney-added',(req,res) => {
  kydneys++;
});

app.listen(port);
