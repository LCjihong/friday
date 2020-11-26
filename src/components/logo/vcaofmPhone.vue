<template>
  <!-- <div class="registerBox"> -->
     <div class="regcent">
        <div class="regcen-z">
           <span class="logcen-tex1">登录</span>
           <span class="logcen-tex2">
          <router-link to="/login">账号密码登录</router-link>
         <span class="iconfont icon-xiaoren"></span>
         </span>
          <div class="phone">
            <input type="text" placeholder="请输入手机号">
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
             <span class="texzi">自动登录</span>
             <span class="wjPwd">
               <router-link to="/ForgetPwd">忘记密码
               <span class="iconfont icon-wenhao"></span>
               </router-link>
             </span>
          </div>
          <div class="btnlr">
            <button class="loginBtn">
               <router-link to="/Register">注  册</router-link>
            </button>
             <button class="regisBtn">
             登  录
             </button>
         </div>
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
data:{},
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
  /* background-color: pink; */
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
  margin-top: 22px;
  float: left;
  border: 1px solid gray;
}
.phone input{
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
  border: 1px solid gainsboro;
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
  width: 100%;
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
.wjPwd{
  float: right;
  color: #f4a767;
}
.wjPwd a{
   color: #f4a767;
   text-decoration: none;
}
.btnlr{
  width: 100%;
  float: left;
}
.loginBtn{
  width: 43.32%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  outline: none;
  border: 0;
  float: left;
  background-color: #f08200;
  border-radius: 10px;
}
.loginBtn a{
  color: white;
  font-size: 18px;
  text-decoration: none;
}
.regisBtn{
  width: 43.32%;
  height: 45px;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  outline: none;
  border: 0;
  float: right;
  border-radius: 10px;
  background-color: #498e3d;
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
  margin-top: 10px;
}
.qq{text-align: center;
  font-size: 40px;
  float: left;
  margin: 0 auto;
  color: #4dafea;
  margin-left: 20px;
  margin-top: 10px;
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
</style>
