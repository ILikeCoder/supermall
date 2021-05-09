/*
 * @Author: 孙秋云
 * @Date: 2020-06-13 22:46:07
 * @LastEditTime: 2021-05-09 19:42:56
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: \MiniSuper\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toastPlugin from "components/common/toast"; //吐司
import VueLazyLoad from "vue-lazyload"; //图片懒加载
import FastClick from "fastclick"; //移动端300ms延迟
Vue.use(toastPlugin); //toast提示插件
//Vue图片懒加载
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/timg.gif")
});

FastClick.attach(document.body);
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
