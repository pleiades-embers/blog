### aspect-ratio

参考资料：

https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/

https://matthiasott.com/notes/aspect-ratio-in-css

利用css 纵横比 使得grid元素 等比例展示

<iframe height="400" style="width: 100%;" scrolling="no" title="Aspect Ratio: Example 2" src="https://codepen.io/traumerei/embed/QWarYqN?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/traumerei/pen/QWarYqN">
  Aspect Ratio: Example 2</a> by traumerei (<a href="https://codepen.io/traumerei">@traumerei</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

保持纵横比限制 元素溢出

<iframe height="400" style="width: 100%;" scrolling="no" title="Aspect Ratio: Example 4" src="https://codepen.io/traumerei/embed/JjMvxZa?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/traumerei/pen/JjMvxZa">
  Aspect Ratio: Example 4</a> by traumerei (<a href="https://codepen.io/traumerei">@traumerei</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### aspect-ratio (media媒体查询)

```vue
<template>
  <div class="aspect-ratio">
    Watch this element as you resize your viewport's width and height.
  </div>
</template>

<style scoped>
/* 最小宽高比 */
@media (min-aspect-ratio: 8/5) {
  .aspect-ratio {
    background: #9af; /* blue */
  }
}

/* 最大宽高比 */
@media (max-aspect-ratio: 3/2) {
  .aspect-ratio {
    background: #9ff; /* cyan */
  }
}

/* 明确的宽高比, 放在最下部防止同时满足条件时的覆盖*/
@media (aspect-ratio: 1/1) {
  .aspect-ratio {
    background: #f9a; /* red */
  }
}
</style>
```
