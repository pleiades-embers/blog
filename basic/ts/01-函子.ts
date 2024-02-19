class Applicative<F, T1> {
    constructor(private value: T1) {}
  
     ap<R>(func: (arg: T1) => R): R {
      return func(this.value);
    }
  }
  
  function apply<F, T1, R>(instance: Applicative<F, T1>, func: (arg: T1) => R): R {
    return instance.ap(func);
  }

let addOne = (num: number) => num + 1;

let instance = new Applicative<unknown, number>(1);

let result = apply(instance, addOne);

console.log(result); //
  