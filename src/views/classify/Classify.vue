<template>
  <div class="classify">
    <nav-bar class="classify-navbar">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="classify-content">
      <div class="classify-left">
        <scroll class="content">
          <classify-list />
        </scroll>
      </div>
      <div class="classify-right">
        <scroll class="content">
          <classify-detail />
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ClassifyList from "./childComps/ClassifyList";
import Scroll from "components/common/scroll/Scroll";
import ClassifyDetail from './childComps/ClassifyDetail';
export default {
  components: {
    NavBar,
    ClassifyList,
    Scroll,
    ClassifyDetail,
  }
};
</script>

<style scoped>
.classify {
  height: 100vh;
}
.classify-navbar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.classify-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.classify-left {
  height: 100%;
  width: 100px;
}
.classify-right {
  height: 100%;
  flex: 1;
}
.content {
  height: 576px;
  overflow: hidden;
}
</style>
