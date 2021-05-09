<!--
 * @Author: 孙秋云
 * @Date: 2020-06-23 09:03:24
 * @LastEditTime: 2021-05-09 19:15:46
 * @LastEditors: Please set LastEditors
 * @Description: 分类列表的每一个单独的item项
 * @FilePath: \MiniSuper\src\components\content\goods\ClassifyListItem.vue
-->
<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="imgLoad" :key="showImage" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
    </div>
  </div>
</template>

<script>
//商品展示
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 14px;

  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 12px;
}
</style>
