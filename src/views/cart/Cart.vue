<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartCount }})</div>
      <div slot="right" class="cart-right" @click="clearCart">
        <img src="~assets/img/cart/clear.png" alt="" />
      </div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <cart-buttom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./childComps/CartList";
import CartButtomBar from "./childComps/CartButtomBar";
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,

    CartList,
    CartButtomBar
  },
  computed: {
    cartCount() {
      //购物车数量
      return this.$store.state.cartList.length;
    }
  },
  activated() {
    //keep-alive组件激活时调用
    this.$refs.scroll.refresh();
  },
  methods: {
    clearCart() {
      if (this.$store.state.cartList == 0) {
        this.$toast.show("亲~当前还没有宝贝!");
      } else {
        this.$store.state.cartList.splice(0, this.cartCount);
        this.$toast.show("清空购物车完毕~");
      }
    }
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
.cart-right {
  color: #3c3c3c;

  margin-right: 8px;
}
.cart-right img {
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
</style>
