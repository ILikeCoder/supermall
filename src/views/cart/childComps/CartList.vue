<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  data() {
    return {
      cartList: this.$store.state.cartList
    };
  },
  components: {
    CartListItem
  }
};
</script>

<style></style>
