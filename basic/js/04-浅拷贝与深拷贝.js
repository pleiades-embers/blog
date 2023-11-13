


function deepClone(obj,cache = new WeakMap()){
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (cache.has(obj)) {
        return cache.get(obj);
    }
  

    let clone

    const Constructor = obj.constructor;
    switch(Constructor){  //开辟新空间
        default:
            clone= new Constructor()
    }

    cache.set(obj, clone);

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key]=deepClone(obj[key],cache)
        }
    }
    return clone
}

const obj = { 
    a: 1, 
    b: {
      c: 2,
      d: null,
    },
  };
  
obj.b.d = obj;
const cloneObj = deepClone(obj);
console.log(cloneObj === obj);           // 输出 false，克隆对象与原对象不是同一个引用
console.log(cloneObj.b.d === cloneObj);  // 输出 true，克隆对象与原对象的相互引用保持不变
  