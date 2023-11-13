

function foo() {
    throw new Error('Something went wrong');
  }
  
try {
  foo();
} catch (e) {
  console.error(e.stack);
  const stackLines = e.stack.split('\n');
  const lineNumber = stackLines[1].split(':')[1];
  console.log('Line number:', lineNumber);
}
// 可以看到，堆栈信息中包括了错误发生的文件名和行号。