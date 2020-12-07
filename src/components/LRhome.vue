<template>
  <div class="box">
    <div class="top">
      <toplogo>{{tpTex}}</toplogo>
    </div>
    <div class="center">
     <div class="typearae">
        <div class="logoBig">
        <div class="logoSma">
          <span class="logotex">礼拜五会员</span>
          <p class="logotex1">
            <span>免</span>
            <span>费</span>
            <span>注</span>
            <span>册</span>
          </p>
        </div>
      </div>
      <router-view @tptxe-message = 'tpTex = $event'></router-view>
     </div>
    </div>
  </div>
</template>

<script>
import toplogo from '@/components/Toplogo'
export default {
  name:'Home',
  components:{
    toplogo,
  },
  data(){
    return {
      tpTex : ''
    }
  },
  methods:{},
  // beforeMount(){
  //   console.log(this.$route.path)
  //  switch (this.$route.path) {
  //    case "/login":
  //    this.tpTex = '会员登录';
  //      break;
  //    case "/Register":
  //     this.tpTex = '会员注册';
  //      break;
  //    case "/Vcaphone":
  //    this.tpTex = '会员登录';
  //      break;
  //    default:
  //      break;
  //  }
  // }
}
</script>

<style scoped>
.box{
  width: 100%;
  height: 630px;
}
.top{
  width: 100%;
  height: 67px;
  margin-bottom: 30px;
  /* background-color:gainsboro; */
}
.center{
  width: 100%;
  height: 500px;
  background: url('http://renjihong.zone:2000/login/水果蔬菜组合高清背景图片.jpg') no-repeat;
  background-size: 100% 100%;
  /* background:peachpuff; */
}
.typearae{
  width: 1280px;
  height: 100%;
  margin: 0 auto;
}

.logoBig{
  width: 38.43%;
  height: 222px;
  float: left;
  margin-left: 17.18%;
  margin-top: 136px;
  border: 1px solid white;
}
.logoSma{
  width: 96.13%;
  border: 1px solid white;
  height: 200px;
  float: left;
  margin-left: 1.935%;
  margin-top: 11px;
  font-size: 48px;
  color: white;
  font-weight: 20px;
  /* text-align: center; */
}
.logotex{
  float: left;
  margin-top: 40px;
  margin-left: 20%;
}
.logotex1{
  float: left;
  margin-left: 16%;
}
.logotex1 span{
  margin-right: 14px;
}
</style>
