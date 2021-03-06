### 下面的jsx 代码中,那一个无法达到预期效果?
1. `<h2>hellow world</h2>`
2. `<input type="checkbox"/>`
3. `<div class="msg-box">{msg}</div>`
4. `<label htmlFor="name">leo</label>`
5. `<div style={height:50}></div>`
6. `<img src={imgSrc}>`
答案:3

### 什么时候使用状态管理器?
1. 通过提升单个组件的复杂度,实现组件通讯
2. 有相当大量的，随时间变化的数据
3. state需要有一个单一可靠数据源
4. 所有state放在顶层组件已经无法满足需求了
5. 要维护大量与服务器交互的数据
6. 当状态提升提升不能够满足开发需求，状态树并不总是以一种线性的，单向的方式流动。就需要使用状态管理器。

从项目的整体看
1.用户的使用方式复杂
2.不同身份的用户有不同的使用方式（比如普通用户和管理员）
3.多个用户之间可以协作
4.与服务器大量交互，或者使用了WebSocket
5.View要从多个来源获取数据

从组件角度看
1.某个组件的状态，需要共享
2.某个状态需要在任何地方都可以拿到
3.一个组件需要改变全局状态
4.一个组件需要改变另一个组件的状态

### render函数中return如果没有使用()会有什么问题？

> 我们在使用JSX语法书写react代码时，babel会将JSX语法编译成js，同时会在每行自动添加**分号**（；），如果`return`后换行了，那么就会变成 `return；` 一般情况下会报错：
> 
> * **Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.**
> 
> **上面这段英文翻译成中文：**
> 
> * 渲染没有返回任何内容。这通常意味着缺少return语句。或者，为了不渲染，返回null。
> 
> 为了代码可读性我们一般会在return后面添加括号这样代码可以折行书写，否则就在return 后面紧跟着语句，这样也是可以的。
> 
> 举两个正确的书写例子：
> 
> ```js
> const Nav = () => {
>   return (
>     <nav className="c_navbar">
>       { some jsx magic here }
>     </nav>
>   )
> }
> 
> const Nav = () => {
>  return <nav className="c_navbar">
>     { some jsx magic here }
>   </nav>
> }
> ```
> 
> 错误的写法：
> 
> ```js
> const Nav = () => {
>   return
>     <nav className="c_navbar">
>       { some jsx magic here }
>     </nav>
> }
> ```



### componentWillUpdate可以直接修改state的值吗？

首先根据react特性决定如果只是this.state来更改值的话，是不会起效的，并且这样的写法是会有警告的；
其次在componentWillUpdate中去使用setState来修改值的话，不一定就会产生死循环；具体要看你是怎么使用setState的，如果只是传入一个对象的话，那么是会产生死循环的；但是如果传入一个函数的话：(preState,props)=>{}，可以通过条件来避免死循环；也就是说在条件满足的情况下，才会进行修改来重渲染，否则就不修改，相应的就不会重渲染，也就不存在会一直触发componentWillUpdate函数


### [react] 说说你对React的渲染原理的理解

1.单向数据流。React是一个MVVM框架，简单来说是在MVC的模式下在前端部分拆分出数据层和视图层。单向数据流指的是只能由数据层的变化去影响视图层的变化，而不能反过来（除非双向绑定）
2.数据驱动视图。我们无需关注页面的DOM，只需要关注数据即可

React整个渲染机制就是React会调用React.render()构建一颗DOM树
当state或props改变时,render()会被再次调用构建出另外一颗树,利用Diff算法与之前的树进行对比,找到需要更新的地方进行更新并渲染到页面上,实现按需更新减少对真实DOM的操作,实现性能优化
个人理解这个问题重点在React.render() 和 Diff算法上


### 什么渲染劫持？
高阶组件可以在render函数中做非常多的操作，从而控制原组件的渲染输出，只要改变了原组件的渲染，我们都将它称之为一种渲染劫持。

实际上，在高阶组件中，组合渲染和条件渲染都是渲染劫持的一种，通过反向继承，不仅可以实现以上两点，还可以增强由原组件render函数产生的React元素。

实际的操作中 通过 操作 state、props 都可以实现渲染劫持



### 你有使用过React Intl吗？
一种react国际化的解决方案


### Context
context属于一种解决组件间层级过多传递数据的问题，避免了层层嵌套的通过props传递的形式，同时对于不需要使用到redux时，是一种解决方案，关于组件的复用性变差的问题，我觉得是可以通过高阶组件和context配合来解决的，因为react-redux使用的就是这样的形式；
主要的形式：createContext(value)：创建一个context实例；其中的参数为当前数据的默认值，只有没在Provider中指定value时，才会生效；
Context.Provider：生产者，数据提供方；通过value属性来定义需要被传递的数据
Context.Consumer：消费者，数据获取方；根据是函数组件还是class组件，有不同的使用形式；class组件可以指定contextType来确定要使用哪一个context对象的值，函数组件需要使用回调函数的形式来获取context的值；需要显示的指定context对象；


```js
import React, {Component} from 'react'

// 首先创建一个 context 对象这里命名为：ThemeContext
const ThemeContext = React.createContext('light')

// 创建一个祖先组件组件 内部使用Provier 这个对象创建一个组件 其中 value 属性是真实传递的属性
class App extends Component {
  render () {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

// 渲染 button 组件的外层包裹的属性
function Toolbar () {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}
// 在 Toolbar 中渲染的button 组件 返回一个 consumer （消费者）将组件组件的 value 值跨组件传递给 // ThemeButton 组件
function ThemeButton (props) {
  return (
    <ThemeContext.Consumer>
      { theme => <button {...props} theme={theme}>{theme}</button> }
    </ThemeContext.Consumer>
  )
}
```

### Consumer向上找不到Provider的时候怎么办？

当consumer向上层找不到provider时，此时就会取创建context时传给createContext的那个值，也就是当前context对象的默认值，在定义provider时的value中的值不是默认值，而是表示需要被传递的值

### 有使用过Consumer吗
Consumer主要用来在使用context的过程中，来获取上层provider的值，通过定义组件contextType的值来指定要获取的是哪个context，找到当前context对应的最近的一个provider，取到value属性的值，如果没有定义，那么就会取到创建当前context时的传入值

### 举例说明React的插槽有哪些运用场景？
我觉得这里的插槽，指的应该是组合组件，而不是portal(传送门)，因为对比vue中的插槽，只是父组件在子组件中间加入一系列的内容，然后子组件可以自己判断显示逻辑，所以props.children更符合插槽的定义；
portal可以将内容插入到除了父节点的dom之外的地方去渲染，所以modal是一个通过portal实现的典型例子；并且对于事件绑定，因为使用了事件冒泡，所以并不用担心被渲染到父组件结构之外的内容，不能去监听事件

### 你有用过React的插槽(Portals)吗？怎么用？
1、首先简单的介绍下react中的插槽（Portals），通过ReactDOM.createPortal(child, container)创建，是ReactDOM提供的接口，可以实现将子节点渲染到父组件DOM层次结构之外的DOM节点。
2、第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 片段(fragment)。第二个参数（container）则是一个 DOM 元素。
3、对于 portal 的一个典型用例是当父组件有 overflow: hidden 或 z-index 样式，但你需要子组件能够在视觉上 “跳出(break out)” 其容器。例如，对话框、hovercards以及提示框。所以一般react组件里的模态框，就是这样实现的。

### React Filer 可以理解为？
React内部实现的一套状态更新机制。支持任务不同优先级，可中断与恢复，并且恢复后可以复用之前的中间状态。