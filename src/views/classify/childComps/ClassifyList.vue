<template>
  <div class="classify-list">
    <ul class="list">
      <li
        v-for="(item, index) in dataList"
        :class="{ active: index === currentIndex }"
        @click="listClick(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        "热门推荐",
        "手机数码",
        "电脑办公",
        "家用电器",
        "计生情趣",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "购物超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "母婴童装",
        "图书音像",
        "运动户外",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "家具家装",
        "家居厨具",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器",
        "医药保健",
        "宠物生活",
        "礼品鲜花",
        "农资绿植",
        "生活旅行",
        "奢侈品",
        "艺术邮币",
        "二手商品",
        "特产馆",
        "京东金融",
        "国际名牌",
        "拍卖",
        "房产",
        "工业品"
      ],
      currentIndex: 0
    };
  },
  methods: {
    listClick(index) {//点击每个index动态添加类名
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.classify-list {
  height: 100%;
}
.list {
  border: 1px solid #ccc;
  color: #333;
}
.list li {
  width: 100px;
  height: 46px;
  text-align: center;
  line-height: 46px;
  background-color: #f8f8f8;
}
.active {
  color: #e93b3d;
}
</style>
