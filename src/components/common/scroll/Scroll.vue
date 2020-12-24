<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //滚动属性
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    if (this.probeType === 2 || this.probeType === 3) {
      //是否监听滚动
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }
    if (this.pullUpLoad) {
      //上拉加载更多
      this.scroll.on("pullingUp", () => {
        // console.log('上拉加载更多');
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    //scroll的一些方法
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style></style>
