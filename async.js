/*const hiPromise = new Promise((resolve) => {
    resolve(setTimeout(() => {console.log('Hi There from inside after 2 seconds');},2000));
});


async function hiThere () {
  const func = await hiPromise;
  func;
  console.log('Hi there from inside after await feature has been successfully ran.');
}
console.log('Hi there from outside');
hiThere();
console.log('Hi there from outside after 2 seconds at the end of the code.');*/


const hiThere = new Promise((resolve) => {
  resolve('Hi there from the Promise.');
});

async function classQuestion (){
  console.log('This is first synchronous function');
  const func = await hiThere;
  console.log(func);
  console.log('This is last synchronous function');
}

classQuestion();
