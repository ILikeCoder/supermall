<template>
  <nav-bar >
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" />
    </div>
    <div slot="center" class="titles">
      <div
        v-for="(item, index) in titles"
        class="titles-item"
        :class="{ active: index === currentIndex }"
        @click="titleClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    //点击变色
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      //返回上一级
      this.$router.back();
    }
  }
};
</script>

<style>
.active {
  color: var(--color-high-text);
}
.titles {
  display: flex;
}
.titles-item {
  flex: 1;
  font-size: 14px;
}
.back img {
  margin-top: 12px;
}
</style>
