<template>
  <div class="succeedNox">
    <div class="topTu">
       <toutop></toutop>
    </div>
      <p class="iconfont icon-zhifuchenggong zFsucc"></p>
      <p  class="succTex">支付成功</p>
      <div class="succBtn">
        <button class="sbtn1">查看订单</button>
        <router-link to="/" tag="button" class="sbtn2">返回首页</router-link>
      </div>
      <p class="sucNum">订单编号： {{ oid }}</p>
  </div>
</template>

<script >
import toutop from '@/components/Home/Shopptro/ShoppTop'
export default {
 components:{
    toutop,
  },
  data(){
    return {
      oid:''
    }
  },
  beforeMount(){
    this.oid = this.$route.params.oid;
  }
}
</script>

<style scoped>
.succeedNox{
  /* text-align: center; */
  width: 1280px;
  height: 770px;
  /* background-color: pink; */
  margin: 0 auto;
}
.topTu{
  width: 1280px;
  height: 130px;
}
.topTu img{
  margin-top: 30px;
}
.zFsucc{
  margin-top: 150px;
  margin-left: 45%;
  font-size: 100px;
  /* line-height: 300px; */
  float: left;
  color: #f08200;
}
.succTex{
   font-size: 30px;
  /* line-height: 80px; */
  float: left;
  margin-left: 44%;
  margin-top: 40px;
  color: #f08200;
}
.succBtn{
  float: left;
  margin-left: 33%;
  margin-top: 70px;
}
.succBtn button{
  width: 170px;
  height: 45px;
  border-radius: 5px;
  color: white;
  outline: none;
  border: 0;
  font-size: 18px;
  cursor: pointer;
}
.sbtn1{
  background-color: #f08200;
}
.sbtn2{
  margin-left: 50px;
  background-color: #498e3d;
}
.sucNum{
  float: left;
  margin-top: 20px;
  margin-left: 36%;
  font-size: 18px;
  color: #bcbcbc;
}
</style>
