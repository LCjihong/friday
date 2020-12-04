<template>
  <div class="Myaddr">
     <div class="addrCentent">
       <p class="iconfont icon-tianxiedizhi tex1"></p>
       <p class="tex2">暂无收货地址，请点击</p>
      <button class="addBtn" @click="loca" >添加新地址</button>
     </div>
  </div>
</template>

<script>
export default {
methods:{
 loca(){
    this.$router.push('/personal/addmesg');
  }
}
}
</script>

<style scoped>
.Myaddr{
  width: 1085px;
  height: 568px;
}
.addrCentent{
  width: 360px;
  height: 50px;
  margin-left: 350px;
  margin-top: 240px;
}
.addBtn{
  float: right;
  width: 90px;
  height: 30px;
  background-color: #498e3d;
  color: white;
  outline: none;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 10px;
}
.tex1{
  font-size: 50px;
  color: #f08200;
  float: left;
  line-height: 50px;
  margin-left: 10px;
}
.tex2{
  float: left;
  font-size: 18px;
  line-height: 50px;
  margin-left: 10px;
}
</style>
