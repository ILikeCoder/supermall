/*
 * @Author: 孙秋云
 * @Date: 2020-06-13 22:46:07
 * @LastEditTime: 2021-05-09 19:26:58
 * @LastEditors: Please set LastEditors
 * @Description: store的state数据存放地方。
 * @FilePath: \MiniSuper\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);
const state = {
  //购物车列表数据。
  cartList: JSON.parse(localStorage.getItem("cart")) || []
};
export default new Vuex.Store({
  state,
  mutations,
  actions
});
