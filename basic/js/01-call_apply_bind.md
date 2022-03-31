```javascript
const obj = {
  m: 0,
};
/**
 * 改变this 指向
 */

function fn1() {
  this.xxx = 3;
  console.log(this); //{ m: 0, xxx: 3 }

  return this; // 如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象
}

expect(fn1.call(obj)).toBe(obj);
```

### 调用方式的区别

1. call(obj)/apply(obj) 都会调用函数
2. bind(obj):返回一个新的函数
3. apply 传递的参数是数组

```javascript
function fn2(a, b) {
  this.xxx = 3;
  console.log(a, b, this, arguments.length);
  return a + b;
}
expect(fn2.call(obj, 3, 4)).toBe(7);
expect(fn2.apply(obj, [3, 4])).toBe(7);
expect(fn2.bind(obj, 3, 4)()).toBe(7);
```

### 实际运用

继承 子类直接使用父类方法

```javascript
function Animal() {
  this.eat = function () {
    return "吃东西";
  };
}
function Cat() {
  Animal.call(this);
}
let cat = new Cat();
expect(cat.eat()).toBe("吃东西");
```

使用 call 方法调用匿名函数

```javascript
var animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Fail" },
];
for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }.call(animals[i], i));
}
```

### 手写源码

```javascript
Function.prototype.call = function (thisArg, ...argArray) {
  if (thisArg === null || thisArg === undefined) {
    thisArg = window;
  }
  const specialMethod = Symbol("anything");
  thisArg[specialMethod] = this;
  const result = thisArg[specialMethod](...argArray);
  delete thisArg[specialMethod];

  return result;
};
```

<!-- ### code-surfer -->

<!-- <iframe src="https://codesandbox.io/embed/code-sufer-mdx-87xnm4?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="code-sufer-mdx"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> -->



