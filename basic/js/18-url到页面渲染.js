// 从输入 URL 到页面渲染经历了以下过程：

// DNS 解析：浏览器首先将输入的 URL 解析成 IP 地址，这个过程称为 DNS 解析。浏览器会先检查本地缓存中是否有对应的 DNS 记录，如果没有则向 DNS 服务器发送查询请求，获取目标 IP 地址。

// 建立 TCP 连接：使用得到的 IP 地址，浏览器会与服务器进行三次握手来建立 TCP 连接。这个过程包括客户端向服务器发送 SYN 请求，服务器回复 SYN+ACK，最后客户端发送 ACK 确认。

// 发送 HTTP 请求：建立 TCP 连接后，浏览器会向服务器发送 HTTP 请求。请求中包含了请求方法（GET、POST 等）、请求头（用于传递附加信息如 Cookies、User-Agent 等）以及请求体（POST 请求时传递的数据）。

// 服务器处理请求：服务器接收到请求后，会根据请求的内容进行处理。服务器可能会查询数据库、执行动态代码等操作，以准备发送响应。

// 接收响应：服务器会将生成的响应发送回浏览器，响应包括状态码、响应头和响应体。状态码表示了请求的处理结果，响应头包含了服务器返回的附加信息。

// 页面渲染：浏览器在接收到响应后，会根据响应的内容开始进行页面渲染。这个过程包括解析 HTML、构建 DOM 树、构建 CSSOM 树、将 DOM 树和 CSSOM 树合并为渲染树，然后进行布局（计算各元素的位置和大小）和绘制（将元素绘制到屏幕上）。

// 在三次握手到页面渲染之间，存在以下缓存：

// DNS 缓存：浏览器会将最近解析过的域名和对应的 IP 地址缓存起来，下次请求相同的域名时可以直接使用缓存的 IP 地址，减少 DNS 解析的时间。

// HTTP 缓存：浏览器会缓存之前请求过的资源，如页面的 HTML、CSS 文件、JavaScript 文件、图片等。下次请求相同的资源时，浏览器会直接从缓存中读取，而不会再向服务器发送请求。

// 代理服务器缓存：如果用户通过代理服务器访问网页，代理服务器也可能缓存一些资源。当其他用户请求相同的资源时，代理服务器可以直接返回缓存的结果，减少对服务器的请求。

// 这些缓存机制能够提高页面加载速度和减轻服务器负载，但同时也可能导致更新后的内容无法及时生效，因此开发者可以通过设置相应的 HTTP 头信息来控制缓存行为。