# Context.java

 public static final int FEATURE_NON_ECMA_GET_YEAR = 1;

这段代码定义了一个Java常量，用于控制 `Date` 原型中 `getYear()` 方法的行为。文档注释中说明，当使用 `hasFeature()`方法时，默认行为是按照 ECMAScript B.2.4 标准从年份中减去 1900。但是如果 `FEATURE_NON_ECMA_GET_YEAR` 标志被设置为 true，则只有年份在 1900 到 2000 之间的情况下才会进行减法运算。

这个特性标志可以被用在需要处理日期值的代码中，如果它需要与 ECMAScript 标准的规定不同的行为，例如，处理遗留系统或数据集的兼容性问题。

```JavaScript
// 检查_feature属性
if (Date.hasOwnProperty("_feature")) {
  // 检查是否非ECMA模式
  if (Date._feature & Date.FEATURE_NON_ECMA_GET_YEAR) {
    // 非ECMAScript模式将不会从年份中减去1900
    let today = new Date();    // 获取当前日期
    let year = today.getYear(); // 获取年份
    console.log(`ECMA mode: ${year}`); //ECMAScript模式下返回121
    console.log(`Non-ECMA mode: ${year+1900}`); //非ECMAScript模式下返回2021
  } else {
    let today = new Date();    // 获取当前日期
    let year = today.getYear(); // 获取年份
    console.log(`ECMA mode: ${year}`); //ECMAScript模式下返回121
    console.log(`Non-ECMA mode: ${year}`); //非ECMAScript模式下返回121
  }
} else {
  console.log("Feature not supported");
}
```

上述代码首先检查是否有定义了 `_feature`属性，然后检查 `FEATURE_NON_ECMA_GET_YEAR`特性是否在实例化时设置为true。如果是，那么 `getYear()`方法将不会从年份中减去1900。我们可以从输出结果中看到，对于当前日期而言，ECMAScript模式下会将年份减去1900，而非ECMAScript模式下则不会进行这个操作。

ECMAScript B.2.4 规范定义了 `Date.getYear()`和 `Date.setYear(yearValue)`方法的行为和实现。该规范描述了以下几个主要部分：

1. `getYear()`方法返回表示给定日期中年份的两位数值。例如，1996年的年份将返回96。
2. `setYear(yearValue)`方法将年份值分配给给定日期对象。如果 `yearValue`的值等于1900到 1999 之间，则它被视为一个传统的年份值，应该减去1900。如果 `yearValue`的值是0到99之间，则它被视为在1900年之后的年份值。如果 `yearValue`的值大于或等于100，则它被视为一个年份。
3. `getYear()`方法的返回值是一个相对值，而非绝对值，因此应该进行其他计算来得到相应的年份值。

根据这个规范，如果要获取年份的绝对值，需要为返回值正确的加上 1900。并且在使用 `setYear()` 方法时，如果传入的值在 0 到 99 之间，则被认为是一个相对值，并按照相对方式设置日期对象的年份。

需要注意的是，在 ECMAScript 5 中，已经不推荐使用 `getYear()` 和 `setYear()` 方法，而是推荐使用 `getFullYear()` 和 `setFullYear()` 方法来获取和设置年份。因此，使用 `FEATURE_NON_ECMA_GET_YEAR`属性来修改 `getYear()`方法的行为已经不是一个被推荐的做法。

ECMAScript B.2.4 规范可以在以下链接中查看：[https://www.ecma-international.org/ecma-262/5.1/#sec-B.2.4](https://www.ecma-international.org/ecma-262/5.1/#sec-B.2.4)

请注意，这是 ECMAScript 5.1 标准的规范。在 ECMAScript 6 之后的版本中，`Date.getYear()`方法已被标记为已废弃，不再推荐使用。因此，对于新开发的 JavaScript 代码，应该尽可能使用其他方法来获取和设置日期中的年份值。

java.io.Closeable

```JavaScript
import java.io.*;
public class Example implements Closeable {
    private BufferedReader reader;
    public Example(String fileName) throws FileNotFoundException {
        reader = new BufferedReader(new FileReader(fileName));
    }
    public String readLine() throws IOException {
        return reader.readLine();
    }
    @Override
    public void close() throws IOException {
        reader.close();
    }
    public static void main(String[] args) throws IOException {
        Example ex = new Example("./assets/file.txt");
        try {
            String line = ex.readLine();
            while (line != null) {
                System.out.println(line);
                line = ex.readLine();
            }
        } finally {
            ex.close();
        }
    }
}

//在这个例子中，我们创建了一个用于读取文件的Example类。该类实现了Closeable接口，并重写close()方法，以在程序结束时关闭读取文件的BufferedReader资源。
//在main()方法中，我们使用try-finally语句块调用Example类打开文件并读取内容。在这个例子中，不管是否出现异常，finally块中的ex.close()语句都会执行，以确保文件资源得到释放。
```

window.chrome.csi() 是一个用于返回 Chrome 内核统计信息的方法，该方法返回一个对象，包含了一些有关页面加载时间、网络信息、呈现信息等的指标。

该方法的返回对象包括以下属性：

startE: 整数，用于表示从导航开始到开始计算 Chrome 浏览器网络请求的时间戳（微秒）。

requestTime: 整数，表示网络请求开始时间的时间戳（微秒）。

firstPaintTime: 整数，表示首次呈现页面到屏幕的时间（微秒）。

finishTime: 整数，表示网络请求结束和页面呈现结束的时间戳（微秒）。

navType: 字符串，表示浏览器的导航类型，比如 'reload', 'back_forward' 等。

pageT: 整数，表示页面加载完成的总时间（微秒）。

networkT: 整数，表示浏览器发送所有网络请求的总时间（微秒）。

tcpT: 整数，表示浏览器与服务器建立TCP连接的时间（微秒）。

dnsT: 整数，表示 DNS 查询的时间（微秒）。

proxyT: 整数，表示与代理服务器建立连接的时间（微秒）。

sslT: 整数，表示 SSL/TLS 握手的时间（微秒）。

sendT: 整数，表示发送 HTTP 请求的时间（微秒）。

receiveT: 整数，表示接收 HTTP 响应的时间（微秒）。


org.mozilla.javascript.optimizer.Codegen

该类用于生成优化的 Java 字节码版本的 JavaScript 代码。

## Error 行号

举个例子，假设有一个JavaScript函数发生了错误，并抛出了一个Error对象，我们可以在控制Rhino引擎特性的开关后，查看生成的Error对象是否自动添加了文件名和行号属性：

Copy code
// 示例代码
function divide(dividend, divisor) {
  if (divisor === 0) {
    // 抛出带有错误信息的Error对象
    throw new Error('Divisor cannot be zero.');
  }
  return dividend / divisor;
}

// 执行函数，通过try-catch捕获可能的错误
try {
  divide(10, 0); // 会抛出错误
} catch (error) {
  // 查看error对象是否包含文件名和行号属性
  console.log(error.fileName, error.lineNumber);
}
当引擎特性开启时，生成的Error对象会自动携带文件名和行号属性，输出：

Copy code
file.js 4
当引擎特性关闭时，需要手动传入文件名和行号参数创建Error对象，示例代码：

Copy code
// 特性关闭，手动传入文件名和行号参数
function divide(dividend, divisor) {
  if (divisor === 0) {
    // 手动传入文件名和行号参数创建Error对象
    throw new Error('Divisor cannot be zero.', 'file.js', 4);
  }
  return dividend / divisor;
}

// 执行函数，通过try-catch捕获可能的错误
try {
  divide(10, 0); // 会抛出错误
} catch (error) {
  // 查看error对象是否包含文件名和行号属性
  console.log(error.fileName, error.lineNumber);
}
输出：

Copy code
file.js 4
可以发现，在两种情况下都成功取到了文件名和行号属性。但是在关闭特性的情况下，需要手动传入这些属性，增加了代码的复杂度，同时也不符合ECMA 262规范。因此，在需要严格遵守规范的情况下，应该保持特性关闭。