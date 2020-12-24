<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.recommend{
  display: flex;
  width: 100%;
  text-align:center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  
}
.recommend-item{
  flex: 1;
  
}
.recommend-item a {
  color: #666;
}
.recommend-item img{
  width: 70px;
  height: 70px;

}
.title-text{
  padding-top: 8px;
}
</style>