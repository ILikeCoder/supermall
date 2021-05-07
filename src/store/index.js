import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);
const state = {
  cartList: JSON.parse(localStorage.getItem('cart')) || []
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
});
