<!--
 * @Author:孙秋云
 * @Date: 2020-06-14 14:13:39
 * @LastEditTime: 2021-05-08 16:43:28
 * @LastEditors: Please set LastEditors
 * @Description: 顶部导航栏
 * @FilePath: \MiniSuper\src\components\common\navbar\NavBar.vue
-->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
