<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommend="recommend" />
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultiData, getHomeGoods } from "network/home.js";
import { itemListenerMixin } from "common/mixin";
export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    BackTop,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        //商品数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      taboffsetTop: 0,
      isFixed: false,
      saveY: 0,
      itemImgListener: null
    };
  },
  mixins: [itemListenerMixin], //混入模式
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    //保存滚动条位置
    this.$refs.scroll.scrollTo(0, this.saveY, 100);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    //事件总线
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  //生命周期函数
  async created() {
    //请求数据
    const { data: res } = await getHomeMultiData();
    this.banner = res.data.banner.list;

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    tabClick(index) {
      //点击切换数据类型
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      //吸顶与tabControl保持一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backTop() {
      //回到顶部
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    contentScroll(position) {
      //backTop的scroll>800出现
      this.isShowBackTop = -position.y > 800;
      this.offsetTop = this.$refs.tabControl.$el.offsetTop;
      this.isFixed = -position.y > this.offsetTop;
    },
    loadMore() {
      //图片加载完成
      this.getHomeGoods(this.currentType);
      //刷新scroll可滚动高度
      // this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.offsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    async getHomeGoods(type) {
      //商品展示数据
      const page = this.goods[type].page + 1;
      const { data: res } = await getHomeGoods(type, page);
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1;
      //刷新scroll可滚动高度
      this.$refs.scroll.finishPullUp();
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  font-weight: 700; */
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  top: 40px;
  z-index: 9;
}
</style>
