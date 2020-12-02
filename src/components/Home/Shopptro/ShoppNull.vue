<template>
<div class="shopNull">
  <toutop></toutop>
   <p class="iconfont icon-gouwuche1 shopp"></p>
   <p class="shoppTe">您的购物车是空的</p><br>
   <button class="shopBtn">去首页看看</button>
</div>
</template>

<script>
import toutop from '@/components/Home/Shopptro/ShoppTop'
export default {
 components:{
    toutop,
  },
}
</script>

<style scoped>
.shopNull{
  width: 1280px;
  height: 590px;
  margin: 0 auto;
}
.shopp{
  width: 100px;
  height: 100px;
  float: left;
  color: #f08200;
  font-size: 100px;
  margin-left: 510px;
  margin-top: 220px;
}
.shoppTe{
  float: left;
  margin-top: 240px;
  margin-left: 20px;
  font-size: 20px;
  color: gray;
}
.shopBtn{
  width: 170px;
  height: 45px;
  border: 0;
  outline: none;
  color: white;
  border-radius: 5px;
  background-color: #f08200 ;
  float: left;
  font-size: 18px;
  margin-left: -160px;
  margin-top: 260px;
}
</style>
