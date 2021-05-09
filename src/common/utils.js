/*
 * @Author: 孙秋云
 * @Date: 2020-06-17 13:51:38
 * @LastEditTime: 2021-05-08 16:43:10
 * @LastEditors: Please set LastEditors
 * @Description: 工具函数库
 * @FilePath: \MiniSuper\src\common\utils.js
 */
export function debounce(func, delay) {
  //防抖
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
