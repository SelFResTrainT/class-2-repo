// Create a promise class on your own which does the similar things that the inbuilt promise does.
// hello there i am testing my vim commands here.

class myPromisifiedFunc{
  constructor(asyncFunc){
    this.asyncFunc = asyncFunc;
  }
  executorFunc () {
    const returnValue = this.asyncFunc;
    returnValue ? console.log(returnValue) : console.log("Error");
  }
};

const fileSystem = require("fs");
const dataFromFile = fileSystem.readFileSync("./read.txt","utf-8");
const promise1 = new myPromisifiedFunc(dataFromFile);
promise1.executorFunc();

