function createLogger(name) {
    const logs = [];
  
    function log(message) {
      logs.push(`[${name}] ${message}`);
    }
  
    return {
      log,
  
      printLogs() {
        // 在这里可以使用动态作用域访问父级作用域中的 logs 变量
        const logsString = logs.join("\n");
        console.log(logsString);
      },
    };
  }
  
const logger1 = createLogger("Logger1");
logger1.log("Hello from logger 1!");

const logger2 = createLogger("Logger2");
logger2.log("Hello from logger 2!");

logger1.printLogs(); // 输出 Logger1 的日志
logger2.printLogs(); // 输出 Logger2 的日志


// 在这个示例中，createLogger 函数返回一个对象，该对象包含一个名为 log 的函数和一个名为 printLogs 的函数。log 函数将消息附加到 logs 数组中，每个 logger 的 logs 数组都是私有的。
// 当 printLogs 方法被调用时，它会使用动态作用域访问该 logger 的 logs 变量，并将其打印到控制台上。由于动态作用域的作用，每个 logger 只能访问自己的 logs 变量，不会意外地访问其他 logger 的变量，这样就保证了数据的隔离和私有性。