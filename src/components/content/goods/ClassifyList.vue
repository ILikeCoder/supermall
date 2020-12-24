<template>
  <div class="goods">
    <classify-list-item v-for="(item,index) in goods" :goods-item="item" :key='index' />
  </div>
</template>

<script>
import ClassifyListItem from "./ClassifyListItem";
export default {
  components: {
   ClassifyListItem
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
