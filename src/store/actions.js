/*
 * @Author:孙秋云
 * @Date: 2020-06-19 17:57:59
 * @LastEditTime: 2021-05-09 19:25:35
 * @LastEditors: Please set LastEditors
 * @Description:异步方法的操作
 * @FilePath: \MiniSuper\src\store\actions.js
 */
import { ADD_TO_CART, INCREMENT } from "./mutations_types";

export default {
  //返回一个promise对象,通过查找函数，
  //在数组中能不能查到对应的数组元素, 如果能够查询到, 说明他是一个已经存在的旧商品。
  //否则就是一个新的购物车信息对象。
  addCart(context, payload) {
    return new Promise(resolve => {
      let oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );
      if (oldProduct) {
        context.commit(INCREMENT, oldProduct);
        resolve("当前商品数量 +1");
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("添加成功, 在购物车等亲~");
      }
    });
  }
};
