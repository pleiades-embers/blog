console.log(1);

promise1 = new Promise((resolve, reject) => {
  console.log(2);

  resolve("resolved");

  setTimeout(() => {
    reject("rejected");
  }, 0);
});

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

promise1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

requestAnimationFrame(() => {
  console.log(5);

  setTimeout(() => {
    console.log(6);
  });
});

console.log(7);


// 1 2 4 7 "resolved" undefined 3 5 6 
