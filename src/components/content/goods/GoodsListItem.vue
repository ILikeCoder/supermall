<!--
 * @Author: 孙秋云
 * @Date: 2020-06-16 21:54:47
 * @LastEditTime: 2021-05-09 19:18:13
 * @LastEditors: Please set LastEditors
 * @Description:商品列表单独的每一个Item
 * @FilePath: \MiniSuper\src\components\content\goods\GoodsListItem.vue
-->
<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="imgLoad" :key="showImage" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
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
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 3px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
