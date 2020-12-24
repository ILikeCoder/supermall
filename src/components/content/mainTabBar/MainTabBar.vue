<template>
  <tab-bar>
    <tab-bar-item
      v-for="item in tabBarItemList"
      :key="item.text"
      :path="item.path"
    >
      <img slot="item-icon" :src="item.icon" />
      <img slot="item-icon-active" :src="item.icon" />
      <div slot="item-text">{{ item.text }}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
//底部菜单
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      tabBarItemList: [
        {
          path: "/home",
          icon: require("assets/img/tabbar/home.svg"),
          icon_active: require("assets/img/tabbar/home_active.svg"),
          text: "首页"
        },
        {
          path: "/classify",
          icon: require("assets/img/tabbar/category.svg"),
          icon_active: require("assets/img/tabbar/category_active.svg"),
          text: "分类"
        },
        {
          path: "/cart",
          icon: require("assets/img/tabbar/shopcart.svg"),
          icon_active: require("assets/img/tabbar/shopcart_active.svg"),
          text: "购物车"
        },
        {
          path: "/mine",
          icon: require("assets/img/tabbar/profile.svg"),
          icon_active: require("assets/img/tabbar/profile_active.svg"),
          text: "我的"
        }
      ]
    };
  }
};
</script>

<style></style>
