<template>
  <ul class="city-info">
    <li v-for="(item, index) of data" :key="index" :style="{marginLeft:index % 4 == 0 ? '0px' : '20px'}">
      <div class="img-box">
        <img :src="item.img" alt="">
      </div>
      <div class="info">
        <div class="title">{{ item.title }}</div>
        <p class="orange">
          <el-rate 
          :value="item.rate" 
          disabled 
          disabled-void-color="#d0d0d0" 
          :colors="['#ec6a17','#ec6a17','#ec6a17']" 
          ></el-rate>
          <span class="iconfont icon-fl-renminbi">{{ item.meanPrice }}/人</span>
        </p>
        <p class="addr">{{ item.addr }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name:'CityInfo',
  props:['data']
}
</script>

<style>
.city-info li{
  float:left;
  width: 305px;
  height: 299px;
  box-sizing: border-box;
  border: 1px solid #f8f6f7;
  background-color: #f8f6f7;
  padding-top: 169px;
  margin-bottom: 20px;
  position: relative;
}
.city-info li:hover{
  border-color: #498e3d;
}
.city-info li .img-box{
  width: 305px;
  height: 169px;
  position: absolute;
  top: -1px;
  left: -1px;
  line-height: 169px;
  vertical-align: middle;
  text-align: center;
}
.city-info .info{
  text-align: center;
}
.city-info .title{
  font-size: 24px;
  line-height: 40px;
  padding-top: 12px;
}
.city-info .orange{
  height: 34px;
  line-height: 34px;
  color: #ec6a17;
}
.city-info .orange .iconfont{
  font-size: 18px;
  line-height: 34px;
}
.el-rate{
  display: inline-block;
  font-size: 0px;
  height: 34px;
  line-height: 34px;
  vertical-align: top;
}
.el-rate i{
  margin-right: 1px;
  font-size: 23px;
  line-height: 34px !important;
}
.city-info .addr{
  font-size: 16px;
  color: #666666;
}
</style>