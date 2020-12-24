<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-buttom :is-checked="item.checked" @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="item.image" alt="商品信息" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-desc">{{ item.desc }}</div>
      <div class="info-bottom">
        <div class="info-price">￥{{ item.realprice }}</div>
        <div class="info-count">
          <div class="but">
            <input type="button" value="-" @click="decrment" />
          </div>
          &nbsp;
          <span>{{ item.count }}</span>
          &nbsp;
          <div class="but">
            <input type="button" value="+" @click="incrment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButtom from "components/content/checkButtom/CheckButtom";
export default {
  components: {
    CheckButtom
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick() {
      this.item.checked = !this.item.checked;
    },
    decrment() {//选择购物车数量--
      if (this.item.count <= 0) {
        this.$toast.show("宝贝数量不能在减少了！");
      } else {
        return this.item.count--;
      }
    },
    incrment() {//选择购物车数量--
      if (this.item.count >= 10) {
        this.$toast.show("宝贝数量不能在多了！");
      } else {
        return this.item.count++;
      }
    }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .info-price {
  color: orangered;
}
.info-bottom .info-count {
  position: relative;
  left: 100px;
}
.but {
  display: inline-block;
}
</style>
