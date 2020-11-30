<template>
   <div class="top-log">
         <div class="logoimg">
         <img src="http://renjihong.zone:2000/login/logo.jpg" alt=""/>
        </div>
        <p class="topText"><slot></slot></p>
       </div>
</template>

<script>
export default {
 name:'Toplogo',
 props:['cofig'],
 data(){
   return{
     tpTex:'',
   }
 }
}
</script>

<style scoped>
.top-log{
  /* float: left; */
  width: 1280px;
  height: 67px;
  margin: 0 auto;
  margin-top: 25px;
}
.logoimg{
  float: left;
  margin-right: 45px;
}
.logoimg img{
  width: 370px;
  height: 67px;
}
.topText{
  height: 38px;
  float: left;
  font-size: 20px;
  color: #959595;
  padding-left:33px;
  margin-top: 30px;
  line-height: 50px;
  border-left: 1px solid  #959595;
}
</style>
