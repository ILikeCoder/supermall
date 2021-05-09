<!--
 * @Author: 孙秋云
 * @Date: 2020-06-14 12:43:13
 * @LastEditTime: 2021-05-09 19:39:34
 * @LastEditors: Please set LastEditors
 * @Description:商品详情页面
 * @FilePath: \购物街\MiniSuper\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      @scroll="scrollContent"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages"/>
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
      iid: null, //商品的id
      topImages: [], //轮播图的数据
      goods: {}, // 商品的基本信息
      shop: {}, // 店铺的基本信息
      detailInfo: {}, // 商品的描述信息
      paramInfo: {}, //商品的尺码信息
      commentInfo: {}, // 用户的评论信息
      commends: [], //底部推荐商品的信息 --列表
      itemImgListener: null,
      themeTopY: [], //导航栏联动的位置
      currentIndex: 0, //当前选中的选项卡
      isShowBackTop: false //是否出现回到顶部的标签
    };
  },

  async created() {
    //Vue生命周期函数 -> 实例创建完成 发送请求数据
    //每个商品唯一的iid
    this.iid = this.$route.params.iid;

    // 用动态路由的方式发送网络请求。并把返回的结果在页面进行渲染。
    let {
      data: { result }
    } = await getDetail(this.iid);
    this.topImages = result.itemInfo.topImages;
    //利用类来筛选多个数据
    this.goods = new Goods(
      result.itemInfo,
      result.columns,
      result.shopInfo.services
    );
    this.shop = new Shop(result.shopInfo);
    this.paramInfo = new GoodsParam(
      result.itemParams.info,
      result.itemParams.rule
    );
    this.detailInfo = result.detailInfo;
    if (result.rate.cRate !== 0) this.commentInfo = result.rate.list[0];

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
      for (let i = 0, len = this.themeTopY.length - 1; i < len; i++) {
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
      //VUEX提交
      this.$store.dispatch("addCart", product).then(res => {
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
