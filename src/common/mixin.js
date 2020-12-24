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