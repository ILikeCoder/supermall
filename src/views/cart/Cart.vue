<!--
 * @Author: your name
 * @Date: 2020-06-14 12:43:13
 * @LastEditTime: 2021-05-07 12:02:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物街\MiniSuper\src\views\cart\Cart.vue
-->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartCount }})</div>
      <div slot="right" class="cart-right" @click="clearCart">
        <img src="~assets/img/cart/clear.png" />
      </div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <div class="emptyCart" v-if="$store.state.cartList.length === 0">
        <div><img src="~assets/img/cart/emptyCart.png" alt=""> </div>
        <div @click="$router.push('/home')">去 逛 逛</div>
      </div>
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
        localStorage.removeItem("cart");
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
  background-color: #f5f5f5;
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
.emptyCart {
  height: 300px;
  background-size: 100%;
  text-align: center;
}
.emptyCart div:nth-child(1){
  text-align: center;
}
.emptyCart div:nth-child(1) img {
  width: 371px;
}
.emptyCart div:nth-child(2) {
  display: inline-block;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  background: #f40;
  font-family: 'Courier New', Courier, monospace;
}
</style>
