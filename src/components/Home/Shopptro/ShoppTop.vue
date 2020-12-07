<template>
<div class="TouTop">
       <img src="http://renjihong.zone:2000/login/logo.jpg" alt="">

       <div class="TouToptex">
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>我的购物车</el-breadcrumb-item>
            <el-breadcrumb-item>确认订单信息</el-breadcrumb-item>
            <el-breadcrumb-item>订单提交成功</el-breadcrumb-item>
          </el-breadcrumb>
       </div>
  </div>
</template>

<script>
// 购物车头部导航
export default {
 name:'ShoppTop',
 data(){
   return{}
 },

}
</script>

<style scoped>
.TouTop{
  width: 1280px;
  height: 130px;
  margin: 0 auto;
}
.TouTop img{
  margin-top: 30px;
}
.TouToptex{
  float: right;
  margin-top: 60px;
}
div /deep/ .el-breadcrumb{
  font-size: 20px;
  cursor: pointer;
}
</style>
