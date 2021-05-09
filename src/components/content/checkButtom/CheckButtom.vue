<!--
 * @Author: 孙秋云
 * @Date: 2020-06-20 14:13:39
 * @LastEditTime: 2021-05-08 16:46:56
 * @LastEditors: Please set LastEditors
 * @Description: 选中组件与不选中
 * @FilePath: \MiniSuper\src\components\content\checkButtom\CheckButtom.vue
-->
<template>
  <div class="check-buttom" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
//选中按钮
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.check-buttom {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check-buttom img {
  width: 20px;
  height: 20px;
}

.check {
  border: 2px solid #ff8999;
  background-color: #ff8198;
}
</style>
