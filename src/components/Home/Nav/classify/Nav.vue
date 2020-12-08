<template>
  <div class="navigat">
    <breadnav :config='routers'></breadnav>
    <div class="navig1">
    </div>
    <div class="navig2">
    </div>
    <div class="navig3">
    </div>
  </div>
</template>

<script>
import breadnav from '@/components/Breadnav'

export default {
 components:{
    breadnav
  },
  data(){
    return {
      routers:{
      rouTex:'首页>专题',
    }
    }
  }
}
</script>

<style  scoped>
.navigat{
 width: 1280px;
 margin: 0 auto;
}
.navig1{
 width: 100%;
 height: 500px;
 background: url('http://renjihong.zone:2000/login/专题1_03.jpg') no-repeat;
 background-size: 100% 100%;
 float: left;
}
.navig2{
 width: 100%;
 height: 500px;
 background: url('http://renjihong.zone:2000/login/专题2.jpg') no-repeat;
 background-size: 100% 100%;
 float: left;
 margin-top: 20px;
}
.navig3{
 width: 100%;
 height: 500px;
 background: url('http://renjihong.zone:2000/login/专题3.jpg') no-repeat;
 background-size: 100% 100%;
float: left;
 margin-top: 20px;
}
.out{
  /* float: left; */
  width: 38.43%;
  height: 223px;
  margin: 0 auto;
  /* margin-top: 50%; */
  /* margin-left: 50%; */
  /* margin-left: -246px; */
  border: 1px solid white;
}
.con{
  float: left;
  width: 96.13%;
  height: 202px;
  margin: 10px 10px;
  border: 1px solid white;
}
</style>
