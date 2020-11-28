<template>
  <el-carousel :height="config.height" arrow="never" ref="carousel" indicator-position="none" style="position:relative" @change="changeIdx">
    <el-carousel-item v-for="(url, index) of data" :key="index">
      <img class="swiper-img" :src="url" alt="礼拜五">
    </el-carousel-item>
    <ul class="changeIdx">
      <li v-for="index in data.length" :key="index" @click="changeItem(index - 1)" :style="{backgroundColor:(index - 1) == Idx ? '#4b943d' : '#fff'}"></li>
    </ul>
  </el-carousel>
</template>

<script>
/**
 * 轮播图组件,使用时需要传参,例如:
 * <swiper :config="SwiperConf"></swiper>
 * 其中SwiperConf格式应为:
 * {
 *    height:'****px',
 *    data:['imgUrl1','imgUrl2','imgUrl3','imgUrl4','imgUrl5']
 * }
 */
export default {
  name:'Swiper',
  props:['config'],
  data(){
    return{
      Idx:0,
      data:this.config.data
    }
  },
  methods:{
    changeIdx(index){
      this.Idx = index;
    },
    changeItem(index){
      this.$refs.carousel.setActiveItem(index);
      this.Idx = index;
    }
  }
}
</script>

<style scoped>
.swiper-img{
  width: 100%;
}
.changeIdx{
  width: 154px;
  height: 18px;
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translate(-77px);
  z-index: 3;
  display: flex;
  justify-content: space-around;
}
.changeIdx li{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #9b9b9b;
}
</style>