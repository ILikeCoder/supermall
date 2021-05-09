<!--
 * @Author: 孙秋云
 * @Date: 2020-06-16 21:53:06
 * @LastEditTime: 2021-05-09 19:17:30
 * @LastEditors: Please set LastEditors
 * @Description: 商品列表
 * @FilePath: \MiniSuper\src\components\content\goods\GoodsList.vue
-->
<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
