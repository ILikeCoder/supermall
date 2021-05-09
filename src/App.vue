<!--
 * @Author: 孙秋云
 * @Date: 2020-06-13 22:46:07
 * @LastEditTime: 2021-05-09 19:40:57
 * @LastEditors: Please set LastEditors
 * @Description: 整个应用的根组件
 * @FilePath: \MiniSuper\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  components: {
    MainTabBar
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
