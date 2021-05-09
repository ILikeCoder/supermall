/*
 * @Author: 孙秋云
 * @Date: 2020-06-14 14:33:29
 * @LastEditTime: 2021-05-09 19:21:33
 * @LastEditors: Please set LastEditors
 * @Description:首页的相关网络请求封装
 * @FilePath: \MiniSuper\src\network\home.js
 */
import { request } from "./request";

export const getHomeMultiData = () => {
  return request({
    url: "/home/multidata"
  });
};

export const getHomeGoods = (type, page) => {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
};
