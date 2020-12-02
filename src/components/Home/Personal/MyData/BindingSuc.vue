<template>
   <div class="originalPhone">
      <div class="nav1">1验证原手机号</div>
      <div class="nav2">2.验证新手机号</div>
      <div class="nav3">3.换绑成功</div>
         <div class="succes">
       <span class="iconfont icon-zhifuchenggong tex1"></span>
       <span class="tex2">恭喜您修改成功</span>
    </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.originalPhone{
width: 1085px;
height: 568px;
border: 1px solid gainsboro;
}
.nav1{
  width: 236px;
  height: 42px;
  background-color:  gainsboro;
  -webkit-clip-path: polygon(0% 0%, 90% 0, 100% 50%, 90% 99%, 0% 100%);
clip-path: polygon(0% 0%, 90% 0, 100% 50%, 90% 99%, 0% 100%);
 margin-top: 40px;
 margin-left: 40px;
 float: left;
 text-align: center;
 line-height: 42px;
}
.nav2{
   width: 236px;
  height: 42px;
  background-color: gainsboro;
  -webkit-clip-path: polygon(90% 0, 100% 50%, 90% 100%, 10% 100%, 25% 50%, 10% 0);
clip-path: polygon(90% 0, 100% 50%, 90% 100%, 10% 100%, 25% 50%, 10% 0);
margin-top: 40px;
/* margin-left: 10px; */
float: left;

text-align: center;
 line-height: 42px;
}
.nav3{
   width: 236px;
  height: 42px;
  background-color:green;
   color: white;
  -webkit-clip-path: polygon(100% 0, 100% 50%, 100% 100%, 10% 100%, 25% 50%, 10% 0);
clip-path: polygon(100% 0, 100% 50%, 100% 100%, 10% 100%, 25% 50%, 10% 0);
margin-top: 40px;
/* margin-left: 10px; */
float: left;
text-align: center;
 line-height: 42px;
}
.succes{
  float:right;
  margin-top: 120px;
  margin-right: 600px;
}
.succes span{
  color: #f08200;
  font-size: 24px;
  line-height: 190px;
}
.tex1{
  margin-left: 116px;
  font-size: 30px;
}
</style>
