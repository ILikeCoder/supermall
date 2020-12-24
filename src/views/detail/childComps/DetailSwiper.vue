<template>
  <swiper class="swiper-detail">
    <swiper-item v-for='(item,index) in topImages' :key="index">
        <img :src="item" >
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper';
export default {
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem,
  }
}
</script>

<style scoped>
  .swiper-detail{
    height: 300px;
    overflow: hidden;
  }
</style>>

</style>