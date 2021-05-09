/*
 * @Author: your name
 * @Date: 2020-06-14 11:44:48
 * @LastEditTime: 2021-05-08 16:31:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MiniSuper\vue.config.js
 */
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      // .set('@', resolve('src'))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("network", resolve("src/network"))
      .set("common", resolve("src/common"))
      .set('store', resolve("src/store"));
  }
};
