<template>
  <!-- <div class="log"> -->
  <div class="log-box">
    <div class="logcen">
      <span class="logcen-tex1">登录</span>
      <span class="logcen-tex2">
        <router-link to="/lr/Vcaphone">手机验证登录</router-link>
        <span class="iconfont icon-shouji"></span>
       </span>
       <div class="acntNum">
         <input type="text" placeholder="请输入手机号" v-model ="phonenum"
         @focus="handlefocus"
         @blur="handleblur">
       </div>
       <span class="ze"></span>
       <div class="password">
         <input type="text" placeholder="密码" v-model="pwdnum"
         @focus="handlefocus"
         @blur="handleblur">
       </div>
       <span class="ze"></span>
        <div class="vfctNum">
         <input type="text" placeholder="验证码" v-model="vfcnum" @blur='verification'
         @focus="handlefocus">
       </div>
       <div class="vfctNum-tu">
         <img src="http://renjihong.zone:3000/user/captchas" alt="" ref = "change">
         <a @click="changes">看不清换一张</a>
       </div>
       <div class="forgetPwd">
            <input type="checkbox">
            <span class="texzi">自动登录</span>
            <span class="wanji">
               <router-link to="/lr/ForgetPwd">忘记密码
               <span class="iconfont icon-wenhao"></span>
               </router-link>
            </span>
       </div>
       <button class="loginBtn" @click="logbtn">登录</button>
       <button class="regisBtn">
          <router-link to="/lr/Register">会员注册</router-link>
        </button>
       <p class="hint">提示：未注册用户讲直接注册成为礼拜五用户</p>
       <p class="cooperation">-----------------用合作网站登录-----------------</p>
       <p class="iconfont icon-weixin weixin"></p>
       <p class="iconfont icon-qq qq"></p>
     </div>
   </div>
 <!-- </div> -->
</template>

<script>
export default {
  beforeMount() {
    this.$emit("tptxe-message", "会员登录");
  },
  data() {
    return {
      //手机号
      phonenum: "",
      //密码
      pwdnum: "",
      //验证码
      vfcnum: "",
    };
  },
  methods: {
    changes() {
      this.$refs.change.src = `http://renjihong.zone:3000/user/captchas?time=${new Date()}`;
    },
    //验证码请求
    verification(e) {
      e.path[1].style.border = "1px solid gray";
      e.path[1].style.boxShadow = "0px 0px 0px black";
      this.$axios
        .post("/user/caps", this.$qs.stringify({
            vfcnum: this.vfcnum,
          })
        )
        .then((res) => {
          console.log(res);
          if (res.data.returned == "验证成功") {
            this.$message({
              message:'验证成功',
              type:'success'
            });
          } else if (res.data.returned == "验证失败") {
            this.$message.error('验证失败,请重新验证');
          }
        });
    },
    logbtn() {
      this.$axios.post("/user/loginbtn", this.$qs.stringify({
            uphone: this.phonenum,
            upwd: this.pwdnum,
          })
        )
        .then(function (res) {
          console.log(res);
          if (res.data.returned == "登录成功") {
            alert("登录成功");
            window.sessionStorage.setItem('uid',res.data.uid)
          } else {
            alert("登录失败");
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    //input获取焦点样式
    handlefocus(e) {
      e.path[1].style.border = "1px solid #d3d3d3";
      e.path[1].style.boxShadow = "0px 0px 3px #969696";
    },
    //input失去焦点的样式
    handleblur(e) {
      e.path[1].style.border = "1px solid gray";
      e.path[1].style.boxShadow = "0px 0px 0px black";
    },
  },
};
</script>

<style scoped>
.log-box {
  /* float: right; */
  width: 100%;
  height: 100%;
  border: 1px solid gainsboro;
  background-color: white;
}
.logcen {
  width: 79.32%;
  /* float: left; */
  margin: 0 auto;
}
.logcen-tex1 {
  font-size: 24px;
  color: #666666;
  float: left;
  margin-top: 25px;
}
.logcen-tex2 {
  font-size: 16px;
  color: #498e3d;
  float: right;
  margin-top: 34px;
}
.logcen-tex2 a {
  font-size: 16px;
  color: #498e3d;
  text-decoration: none;
}
.acntNum {
  width: 100%;
  height: 44px;
  margin-top: 22px;
  float: left;
  border: 1px solid gray;
}
.acntNum input {
  width: 100%;
  height: 44px;
  border: 0;
  outline: none;
  background-color: #f9f9f9;
  text-indent: 14px;
}
.password {
  width: 100%;
  height: 44px;
  /* margin-top: 30px; */
  float: left;
  border: 1px solid gray;
}
.password input {
  width: 100%;
  height: 44px;
  border: 0;
  outline: none;
  text-indent: 14px;
  background-color: #f9f9f9;
}
.vfctNum {
  width: 29.19%;
  height: 44px;
  /* margin-top: 30px; */
  float: left;
  border: 1px solid gray;
}
.vfctNum input {
  width: 100%;
  height: 44px;
  border: 0;
  outline: none;
  text-indent: 14px;
  background-color: #f9f9f9;
}
.vfctNum-tu {
  width: 60%;
  height: 44px;
  float: left;
  margin-left: 20px;
}
.vfctNum-tu img {
  background-color: gainsboro;
  width: 50%;
  height: 40px;
  float: left;
}
.vfctNum-tu a {
  color: #f4a767;
  text-decoration: none;
  font-size: 10px;
  line-height: 44px;
  cursor: pointer;
}
.forgetPwd {
  width: 100%;
  float: left;
  line-height: 54px;
  font-size: 14px;
}
.texzi {
  color: #666666;
}
.wanji {
  float: right;
  color: #f4a767;
}
.wanji a {
  color: #f4a767;
  text-decoration: none;
}
.loginBtn {
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
.regisBtn {
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
.regisBtn a {
  text-decoration: none;
  color: white;
}
.hint {
  font-size: 10px;
  text-indent: 30px;
  color: #b6b6b6;
  float: left;
  line-height: 44px;
}
.cooperation {
  float: left;
  font-size: 14px;
  color: #666666;
}
.weixin {
  float: left;
  font-size: 40px;
  color: #00cd0d;
  margin-left: 33%;
  margin-top: 6px;
}
.qq {
  text-align: center;
  font-size: 40px;
  float: left;
  margin: 0 auto;
  color: #4dafea;
  margin-left: 20px;
  margin-top: 6px;
}
.ze {
  width: 100%;
  height: 30px;
  float: left;
  line-height: 30px;
  font-size: 14px;
  color: red;
}
</style>
