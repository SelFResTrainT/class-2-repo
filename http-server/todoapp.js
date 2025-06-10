// Create a todo app that lets user store todos on the server.
const express = require("express");
const fs = require('fs');
const app = express();
const port = 3000;

/*app.get('/',(req,res) => {
  const listOfTodo = ['task 1','task 2','task 3'];
  //const jsonObj = {task1 : "Understand res.send", task2: "Understand storing" };
  res.json(listOfTodo);
});*/
const listOfTodo = ['task 1', 'task 2', 'task 3'];
app.get('/',(req,res) => {
  fs.writeFile('./todo.txt',JSON.stringify(listOfTodo),'utf-8', (err) => {
    if (err) throw err;
  });
  res.send("Welcome to the page");
});
/*app.post('/',(req,res) => {
  fs.writeFile('./todo.txt',JSON.stringify(listOfTodo),'utf-8');
  res.send("Tasks have been added to the file");
});*/

app.listen(port);
