<!--
 * @Author: 孙秋云
 * @Date: 2020-06-14 12:43:13
 * @LastEditTime: 2021-05-09 19:33:45
 * @LastEditors: Please set LastEditors
 * @Description: 购物车页面底部工具栏
 * @FilePath: \购物街\MiniSuper\src\views\cart\Cart.vue
-->
<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-buttom
        class="check-bottom"
        :is-checked="isSelectAll"
        @click.native="selectAll"
      />
      <span>全选</span>
    </div>
    <div class="price">合计:￥{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去结算({{ checkLength }})</div>
  </div>
</template>
<script>
import CheckButtom from "components/content/checkButtom/CheckButtom";

export default {
  components: {
    CheckButtom
  },
  computed: {
    totalPrice() {
      //计算价格
      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.realprice * item.count;
        }, 0)
        .toFixed(2);
    },
    // 选中商品的数量
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    // 是否全选
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find(item => !item.checked);
    }
  },
  data() {
    return {};
  },
  methods: {
    selectAll() {
      //全选
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach(item => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.checkLength) {
        this.$toast.show("请先选择购买的商品!");
      }
    }
  }
};
</script>

<style>
.bottom-bar {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
  display: flex;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: -20px;
  width: 70px;
}
.check-bottom {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 25px;
  flex: 1;
}
.calculate {
  width: 90px;
  background: #f40;
  text-align: center;
  color: #fff;
}
</style>
