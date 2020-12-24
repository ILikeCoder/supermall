<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
// 底部导航条
export default {
  data() {
    return {};
  },
  
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch(err => err);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 13.33px;
}
.tab-bar-item img {
  width: 22px;
  height: 22px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
