<!--
 * @Author: 孙秋云
 * @Date: 2020-06-20 16:16:53
 * @LastEditTime: 2021-05-08 16:46:01
 * @LastEditors: Please set LastEditors
 * @Description: 提示组件
 * @FilePath: \MiniSuper\src\components\common\toast\Toast.vue
-->
<template>
  <div class="toast" v-show="isShow">
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
//toast提示
export default {
  data() {
    return {
      isShow: false,
      message: ""
    };
  },
  methods: {
    show(message, time = 1400) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, time);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 20px;
  width: 230px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  z-index: 10;
}
</style>
