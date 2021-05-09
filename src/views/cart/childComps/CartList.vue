<!--
 * @Author:孙秋云
 * @Date: 2020-06-20 08:39:58
 * @LastEditTime: 2021-05-09 19:34:08
 * @LastEditors: Please set LastEditors
 * @Description: 购物车商品列表
 * @FilePath: \MiniSuper\src\views\cart\childComps\CartList.vue
-->
<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in $store.state.cartList"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  components: {
    CartListItem
  }
};
</script>

<style></style>
