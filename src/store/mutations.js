/*
 * @Author: 孙秋云
 * @Date: 2020-06-19 17:55:32
 * @LastEditTime: 2021-05-09 19:31:37
 * @LastEditors: Please set LastEditors
 * @Description: Mutations方法购物车中商品数量的增加 减少 添加到购物车 删除购物商品 清空购物车数据
 * @FilePath: \MiniSuper\src\store\mutations.js
 */
import {
  ADD_TO_CART,
  INCREMENT,
  DECREMENT,
  CLEAR_CART,
  DELETE_ITEM
} from "./mutations_types";

export default {
  //购物车数量的增加
  [INCREMENT](state, payload) {
    let index = state.cartList.findIndex(item => item.iid === payload.iid);
    state.cartList[index].count++;
    localStorage.setItem("cart", JSON.stringify(state.cartList));
  },
  //购物车数量的减少
  [DECREMENT](state, payload) {
    let index = state.cartList.findIndex(item => item.iid === payload.iid);
    state.cartList[index].count--;
    localStorage.setItem("cart", JSON.stringify(state.cartList));
  },
  // 添加到购物车
  [ADD_TO_CART](state, payload) {
    payload.checked = true;
    state.cartList = [payload, ...state.cartList];
    localStorage.setItem("cart", JSON.stringify(state.cartList));
  },
  //删除一项购物车商品
  [DELETE_ITEM](state, payload) {
    let index = state.cartList.findIndex(item => item.iid === payload.iid);
    state.cartList.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(state.cartList));
  },
  // 清空购物车
  [CLEAR_CART](state, payload) {
    state.cartList.splice(0, payload);
    localStorage.removeItem("cart");
  }
};
