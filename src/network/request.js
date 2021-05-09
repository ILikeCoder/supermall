/*
 * @Author: 孙秋云
 * @Date: 2020-06-13 22:52:33
 * @LastEditTime: 2021-05-09 19:22:24
 * @LastEditors: Please set LastEditors
 * @Description: axios的封装
 * @FilePath: \MiniSuper\src\network\request.js
 */
import axios from "axios";
export const request = config => {
  const baseConfig = {
    baseURL: "http://152.136.185.210:8000/api/w6", //数据接口公共地址
    timeout: 5000 //超时时间
  };
  const instance = axios.create(baseConfig);
  return instance(config);
};
