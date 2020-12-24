<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      @scroll="scrollContent"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="goodl" :goods="commends"
    /></scroll>

    <detail-bottom-bar @addEvent="addEvent" />
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"; //滚动条组件
import BackTop from "components/content/backTop/BackTop"; //回到顶部组件
import { getDetail, Goods, Shop, GoodsParam, getCommend } from "network/detail"; //数据请求

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import GoodsList from "components/content/goods/GoodsList";
import { itemListenerMixin } from "common/mixin";

export default {
  name: "Detail",
  components: {
    Scroll,
    BackTop,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList
  },
  mixins: [itemListenerMixin], //混入模式
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      commends: [],
      itemImgListener: null,
      themeTopY: [],
      currentIndex: 0,
      isShowBackTop: false
    };
  },
  async created() {
    //Vue生命周期函数 ->实例创建完成 发送请求数据
    //每个商品唯一的iid
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then(res => {
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      //用类来筛选多个数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      this.shop = new Shop(data.shopInfo);
      //用类来筛选多个数据
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //商品信息
      this.detailInfo = data.detailInfo;

      if (data.rate.cRate !== 0) this.commentInfo = data.rate.list[0];
    });
    //评论信息
    const { data: res } = await getCommend();
    this.commends = res.data.list;
  },
  destroyed() {
    //实例销毁后触发的函数
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop - 50);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop - 50);
      this.themeTopY.push(this.$refs.goodl.$el.offsetTop - 50);
      this.themeTopY.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      //点击导航栏联动效果 ->跳转到相关位置
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200);
    },
    scrollContent(position) {
      //滚动导航条联动效果
      const positionY = -position.y;
      let len = this.themeTopY.length - 1;
      for (let i = 0; i < len; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopY[i] &&
          positionY < this.themeTopY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = -position.y > 800;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    addEvent() {
      //购物车信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.realprice = this.goods.realPrice;
      product.iid = this.iid;
      console.log(this.goods);
      this.$store.dispatch("addCart", product).then(res => {
        //vueX提交
        this.$toast.show(res); //toast显示
      });
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100% - 93px);
}
</style>
