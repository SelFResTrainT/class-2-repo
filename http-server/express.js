const expLib = require("express");
const app = expLib();
const port = 3000;

app.get("/",(req,res) => {
  console.log(req.headers);
  res.send("Hello World!");
});

app.listen(port);


