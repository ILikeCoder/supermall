/*
 * @Author: 孙秋云
 * @Date: 2020-06-18 18:25:55
 * @LastEditTime: 2021-05-08 16:42:24
 * @LastEditors: Please set LastEditors
 * @Description: 混入函数
 * @FilePath: \MiniSuper\src\common\mixin.js
 */
import { debounce } from "./utils";
export const itemListenerMixin = {
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      newRefresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  }
};
//混入模式
