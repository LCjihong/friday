<template>
 <!-- <div class="log"> -->
   <div class="log-box">
     <div class="logcen">
       <span class="logcen-tex1">登录</span>
       <span class="logcen-tex2">
          <router-link to="/Vcaphone">手机验证登录</router-link>
        <span class="iconfont icon-shouji"></span>
       </span>
       <div class="acntNum">
         <input type="text" placeholder="请输入手机号" v-model="phonenum">
       </div>
       <div class="password">
         <input type="text" placeholder="密码" v-model="pwdnum">
       </div>
        <div class="vfctNum">
         <input type="text" placeholder="验证码" v-model="vfcnum">
       </div>
       <div class="vfctNum-tu">
         <img src="http://127.0.0.1:3000/captchas" alt="" ref = "change">
         <a href="#" @click="changes">看不清换一张</a>
       </div>
       <div class="forgetPwd">
            <input type="checkbox">
            <span class="texzi">自动登录</span>
            <span class="wanji">
               <router-link to="/ForgetPwd">忘记密码
               <span class="iconfont icon-wenhao"></span>
               </router-link>
            </span>
       </div>
       <button class="loginBtn">登录</button>
       <button class="regisBtn">
          <router-link to="/Register">会员注册</router-link>
        </button>
       <p class="hint">提示：未注册用户讲直接注册成为礼拜五用户</p>
       <p class="cooperation">------------用合作网站登录------------</p>
       <p class="iconfont icon-weixin weixin"></p>
       <p class="iconfont icon-qq qq"></p>
     </div>
   </div>
 <!-- </div> -->
</template>

<script>
export default {
  beforeMount(){
    this.$emit('tptxe-message','会员登录')
  },
  data(){
        return {
          phonenum:"",
          pwdnum:"",
          vfcnum:"",
        }
  },
  methods:{
   changes(){
     this.$refs.change.src ='http://127.0.0.1:3000/captchas';
   }
  }
}
</script>

<style scoped>
.log-box{
  float: right;
  width:30.23%;
  height: 100%;
  border: 1px solid gainsboro;
  background-color: white;
}
.logcen{
  width: 79.32%;
  /* float: left; */
  margin: 0 auto;
  }
.logcen-tex1{
  font-size: 24px;
  color: #666666;
  float: left;
  margin-top: 25px;
}
.logcen-tex2{
  font-size: 16px;
  color: #498e3d;
  float: right;
  margin-top: 34px;
}
.logcen-tex2 a{
  font-size: 16px;
  color: #498e3d;
  text-decoration: none;
}
.acntNum{
  width: 100%;
  height: 44px;
  margin-top: 22px;
  float: left;
  border: 1px solid gray;
}
.acntNum input{
width: 100%;
height: 44px;
border: 0;
outline: none;
background-color: #f9f9f9;
text-indent: 14px;
}
.password{
  width: 100%;
  height: 44px;
  margin-top: 30px;
  float: left;
  border: 1px solid gray;
}
.password input{
width: 100%;
height: 44px;
border: 0;
outline: none;
text-indent: 14px;
background-color: #f9f9f9;
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
height: 44px;
border: 0;
outline: none;
text-indent: 14px;
background-color: #f9f9f9;
}
.vfctNum-tu{
  width: 60%;
  height: 44px;
  margin-top: 30px;
  float: left;
  margin-left: 20px;
}
.vfctNum-tu img{
  width: 50%;
  height: 40px;
  float: left;
}
.vfctNum-tu a{
  color: #f4a767;
  text-decoration: none;
  font-size: 10px;
  line-height: 44px;
  cursor: pointer;
}
.forgetPwd{
  width: 100%;
  float: left;
  line-height: 54px;
  font-size: 14px;
}
.texzi{
  color: #666666;
}
.wanji{
  float: right;
  color: #f4a767;
}
.wanji a{
  color: #f4a767;
  text-decoration: none;
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
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  outline: none;
  border: 0;
  float: right;
  border-radius: 10px;
  background-color: #498e3d;
}
.regisBtn a{
text-decoration: none;
color: white;
}
.hint{
  font-size: 10px;
  text-indent: 4px;
  color: #b6b6b6;
  float: left;
  line-height: 44px;
}
.cooperation{
  float: left;
  font-size: 14px;
  color: #666666;
}
.weixin{
  float: left;
  font-size: 40px;
  color: #00cd0d;
  margin-left: 27.13%;
  margin-top: 6px;
}
.qq{text-align: center;
  font-size: 40px;
  float: left;
  margin: 0 auto;
  color: #4dafea;
  margin-left: 20px;
  margin-top: 6px;
}
</style>
