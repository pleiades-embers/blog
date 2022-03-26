import { test, expect } from "vitest";


Function.prototype.bind = function (obj, ...args) {
  console.log(obj, 1111111);

  // return (...arg2)=>{
  //     // this.call(obj,...args,...arg2)
  // }
};

function fn(a, b) {
  this.xxx = 3;
  console.log(a, b, this, arguments.length);
  return a + b;
}
// fn(1, 2)
// console.log(xxx)
const obj = {
  m: 0,
};
// fn.call(obj, 1, 2)
// fn.apply(obj, [1, 2]);
// fn.call(null, 1, 2)

// fn.bind(obj, 5)(3, 4);
// fn.bind(obj, 5, 6)(3, 4);

test("call_apply_bind", () => {
  expect(fn.bind(obj)(3, 4)).toBe(7);
});
