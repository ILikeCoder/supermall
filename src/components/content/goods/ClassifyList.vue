<!--
 * @Author: 孙秋云
 * @Date: 2020-06-23 09:04:30
 * @LastEditTime: 2021-05-09 19:14:48
 * @LastEditors: Please set LastEditors
 * @Description: 分类列表组件
 * @FilePath: \MiniSuper\src\components\content\goods\ClassifyList.vue
-->
<template>
  <div class="goods">
    <classify-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index"
    />
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
