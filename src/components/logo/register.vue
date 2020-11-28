<template>
  <!-- <div class="registerBox"> -->
     <div class="regcent">
        <div class="regcen-z">
          <div class="phone">
            <input type="text" placeholder="请输入手机号">
          </div>
           <div class="pwd">
            <input type="text" placeholder="请输入密码(6-20位号码字符)">
          </div>
           <div class="qrpwd">
            <input type="text" placeholder="请再次输入密码确认">
          </div>
          <div class="vfctNum">
              <input type="text" placeholder="验证码">
          </div>
          <div class="vfctNum-tu">
          </div>
          <div class="phoneVc">
               <input type="text" placeholder="手机验证码">
               <p class="acquire">获取验证码</p>
          </div>
          <div class="read">
             <input type="checkbox">
             <span class="texzi">我已阅读并同意《礼拜五用户协议》</span>
          </div>
          <button class="loginBtn">注  册</button>
          <button class="regisBtn">
             <router-link to="/lr/login">登  录</router-link>
        </button>
        </div>
     </div>
  <!-- </div> -->
</template>

<script>
export default {
data(){
  return {}
  // "uphone":''
},
 beforeMount(){
    this.$emit('tptxe-message','会员注册')
  },
methods:{
  logbnt(){
   this.$axios.post('http://127.0.0.1:3000/Register').then(resp => {
     console.log(resq);
   }).catch(err => {
     console.log(err);
   })
  }
}
}
</script>

<style scoped>
/* .registerBox{
  width: 66.66%;
  height: 100%;
  margin: 0 auto;
} */
.regcent{
  width: 30.23%;
  height: 100%;
  float: right;
  border: 1px solid gainsboro;
  background-color: white;
}
.regcen-z{
  width: 79.32%;
  margin: 0 auto;
  background-color: pink;
}
input{
height: 44px;
border: 0;
outline: none;
text-indent: 14px;
background-color: #f9f9f9;
}
.phone{
  width: 100%;
  height: 44px;
  margin-top: 30px;
  float: left;
  border: 1px solid gray;
}
.pwd{
    width: 100%;
  height: 44px;
  margin-top: 30px;
  float: left;
  border: 1px solid gray;
}
.qrpwd{
  width: 100%;
  height: 44px;
  margin-top: 30px;
  float: left;
  border: 1px solid gray;
}
.phone input{
  width: 100%;
}
.pwd input{
  width: 100%;
}
.qrpwd input{
  width: 100%;
}
.vfctNum{
  width: 29.19%;
  height: 44px;
  margin-top: 30px;
  float: left;
  border: 1px solid gray;
}
.vfctNum input{
   width: 100%;
}
.vfctNum-tu{
  width: 29.19%;
  height: 44px;
  margin-top: 30px;
  float: left;
  margin-left: 20px;
  border: 1px solid red;
}
.phoneVc{
  width: 100%;
  height: 44px;
  margin-top: 30px;
  float: left;
  border: 1px solid gray;
}
.acquire{
  float: right;
  width: 32.57%;
  height: 32px;
  margin-top: 6px;
  color: white;
  text-align: center;
  line-height: 32px;
  margin-right: 6px;
  font-size: 10px;
  background-color: #498e3d;
}
.read{
  float: left;
  font-size: 12px;
  line-height:50px ;
}
.read input{
  float: left;
  border-radius: 50%;
}
.texzi{
  float: left;
  margin-left: 10px;
}
.loginBtn{
  width: 34.36%;
  height: 45px;
  color: white;
  line-height: 45px;
  text-align: center;
  outline: none;
  font-size: 18px;
  border: 0;
  float: left;
  border-radius: 10px;
  background-color: #f08200;
}
.regisBtn{
  width: 34.36%;
  height: 45px;
  outline: none;
  border: 0;
  float: right;
  border-radius: 10px;
  background-color: #498e3d;
  line-height: 45px;
  text-align: center;
}
.regisBtn a{
  color: white;
  font-size: 18px;
  text-decoration: none;
}
</style>
