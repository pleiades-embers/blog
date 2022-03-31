import { test, expect } from "vitest";



const obj = {
  m: 0,
};

test("call_apply_bind", () => {
  /**
   * 改变this 指向
   */

  function fn1() {
    this.xxx = 3;
    console.log(this);  //{ m: 0, xxx: 3 }
    
    return this;
  }
  expect(fn1.call(obj)).toBe(obj);


  /**
   * 调用方式
   */
  function fn2(a, b) {
    this.xxx = 3;
    console.log(a, b, this, arguments.length);
    return a + b;
  }
  expect(fn2.call(obj, 3, 4)).toBe(7);
  expect(fn2.apply(obj, [3, 4])).toBe(7);
  expect(fn2.bind(obj, 3, 4)()).toBe(7);


  /**
   * 继承 子类直接使用父类方法
   */
  function Animal(){
    this.eat=function(){
      return '吃东西';
    }
  }
  function Cat(){
    Animal.call(this)
  }
  let cat=new Cat()
  expect(cat.eat()).toBe('吃东西');


});
