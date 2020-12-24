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
Vue.config.productionTip = false;
FastClick.attach(document.body);
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
