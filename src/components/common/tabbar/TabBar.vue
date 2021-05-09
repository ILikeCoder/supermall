<!--
 * @Author: 孙秋云
 * @Date: 2020-06-14 12:35:17
 * @LastEditTime: 2021-05-08 16:45:41
 * @LastEditors: Please set LastEditors
 * @Description:顶部选项卡
 * @FilePath: \MiniSuper\src\components\common\tabbar\TabBar.vue
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
