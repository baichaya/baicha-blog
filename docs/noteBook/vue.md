# vue

## vue scss 使用 var 变量

```md
<template>
    <div class="box" :style="{ '--width': width }"></div>
</template>

<style lang="scss" scoped>
   .box {
      width: var(--width);
   }
</style>
```
