import Toast from "./Toast.vue";
const toastPlugin = {}
toastPlugin.install = function(Vue){
  const toastConstructor = Vue.extend(Toast);
  const toast = new toastConstructor();
  toast.$mount(document.createElement('div'));
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}
export default toastPlugin;