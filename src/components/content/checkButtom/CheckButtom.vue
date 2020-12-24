<template>
  <div class="check-buttom" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
//选中按钮
export default {
  props:{
    isChecked:{
      type:Boolean,
      default:false,
    }
  }
};
</script>

<style scoped>

.check-buttom {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check-buttom img{
  width: 20px;
  height: 20px;
}

.check{
  border: 2px solid #ff8999;
  background-color: #ff8198;
}
</style>
