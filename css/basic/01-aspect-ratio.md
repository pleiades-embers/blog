### aspect-ratio

:::demo

```vue
<template>
  <div class="aspect-ratio">
    Watch this element as you resize your viewport's width and height.
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

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

:::