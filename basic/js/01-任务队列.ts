
class LazyManClass {
  name: any;
  tasks: any[];
  constructor(name) {
    this.name = name;
    this.tasks = [];

    console.log(`Hi! This is ${this.name}`);
    //启动任务调度
    setTimeout(() => {
      this.nextTask();
    },0);
  }

  nextTask() {
    const task = this.tasks.shift();
    if (task) {
      task();
    }
  }

  sleep(seconds) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${seconds}s!`);
        this.nextTask();
      },seconds * 1000);
    };
    this.tasks.push(task);
    return this;
  }

  eat(meal) {
    const task = () => {
      console.log(`Eat ${meal}~`);
      this.nextTask(); // 执行完当前任务后继续下一个任务
    };

    this.tasks.push(task); // 将任务加入队列
    return this;
  }

  sleepFirst(seconds) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${seconds}s!`);
        this.nextTask();
      },seconds * 1000);
    };
    this.tasks.push(task);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// 用法示例
LazyMan("Hank").sleep(10).eat("dinner");
// Hi! This is Hank!
// 等待10秒后...
// Wake up after 10s!
// Eat dinner~

LazyMan("Hank").eat("dinner").eat("supper");
// Hi! This is Hank!
// Eat dinner~
// Eat supper~

LazyMan("Hank").sleepFirst(5).eat("supper");
// 等待5秒后...
// Wake up after 5s!
// Hi! This is Hank!
// Eat supper~
