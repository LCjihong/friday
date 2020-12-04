<template>
  <!-- <div class="registerBox"> -->
     <div class="regcent">
        <div class="regcen-z">
          <div class="phone">
            <input type="text" placeholder="请输入手机号" v-model="phonenum"
              @change="handleChange"
              @focus="handlefocus"
              @blur="handleblur">
          </div>
          <span class="ze">{{message}}</span>
           <div class="pwd">
            <input type="text" placeholder="请输入密码(6-20位号码字符)"  v-model="pwdnum"
             @change="pwdChange"
             @focus="handlefocus"
             @blur="handleblur">
          </div>
          <span class="ze">{{pwdmessage}}</span>
           <div class="qrpwd">
            <input type="text" placeholder="请再次输入密码确认"
            v-model=" cfmpwdnum"
             @change="cfmpwdChange"
             @focus="handlefocus"
             @blur="handleblur">
          </div>
          <span class="ze">{{cfmpwdmessage}}</span>
          <div class="vfctNum">
              <input type="text" placeholder="验证码" v-model="vfcnum"
              @focus="handlefocus"
             @blur="handleblur">
          </div>
          <div class="vfctNum-tu">
             <img src="http://renjihong.zone:3000/user/captchas" alt="" ref = "change">
             <a @click="changes">看不清换一张</a>
          </div>
          <div class="phoneVc">
               <input type="text" placeholder="手机验证码"
               @focus="handlefocus"
               @blur="handleblur">
               <p class="acquire">获取验证码</p>
          </div>
          <div class="read">
             <input type="checkbox">
             <span class="texzi">我已阅读并同意《礼拜五用户协议》</span>
          </div>
          <button class="loginBtn" @click="regbtn">注  册</button>
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
  return {
         //手机号
          phonenum:"",
          //密码
          pwdnum:"",
          //确认密码
          cfmpwdnum:"",
          //验证码
          vfcnum:"",
          // 手机号验证下面的提示信息
          message: '',
           // 密码验证下面的提示信息
          pwdmessage: '',
          // 确认密码验证下面的提示信息
          cfmpwdmessage: '',
  }
},
 beforeMount(){
    this.$emit('tptxe-message','会员注册')
  },
methods:{
   changes(){
     this.$refs.change.src =`http://renjihong.zone:3000/captchas?time=${new Date()}`;
   },
  //注册成功数据
  regbtn(){
  this.$axios.post('http://renjihong.zone:3000/Register',this.$qs.stringify({
       uphone:this.phonenum,
       upwd:this.pwdnum,
     })).then(function(res){
       console.log(res)
       if(res.data.message == '添加成功'){
         alert('注册成功')
          window.location = '/lr/login';
       }else{
         alert('注册失败')
       }
     }).catch(function(err){
       console.log(err)
     })
  },
  //input获取焦点样式
 handlefocus(e){
    e.path[1].style.border="1px solid #d3d3d3"
    e.path[1].style.boxShadow="0px 0px 3px #969696"
      },
      //input失去焦点的样式
   handleblur(e){
          e.path[1].style.border="1px solid gray";
          e.path[1].style.boxShadow="0px 0px 0px black";

           this.$axios.post('http://renjihong.zone:3000/caps',this.$qs.stringify({
      vfcnum:this.vfcnum
      })).then(function(res){
     console.log(res)
      if(res.data.returned == '验证成功'){
         alert('验证成功')
       }else if(res.data.returned == '验证失败'){
         alert('验证失败')
       }
    })
      },
    //手机号格式验证
    handleChange(e){
        var regex = /^1[3456789]\d{9}$/
          if(regex.test(e.target.value)){
              var _this = this
               //查询是否存在然后注册
                this.$axios.post('http://renjihong.zone:3000/inquire',this.$qs.stringify({
                    uphone:this.phonenum,
                  })).then(function(res){
                    if(res.data.returned == '已注册过'){
                       _this.message = '已注册过';
                    }else if(res.data.returned == '没注册过'){
                       _this.message = '';
                    }
                    console.log(res)
                  }).catch(function(err){
                    console.log(err)
                  })
          }else{
              this.message = '手机号码不正确, 请重新输入'
          }
      },
      //密码格式验证
       pwdChange(e){
         //至少6个字符，至少1个字母，1个数字和1个特殊字符：
         var regs= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/
           if (regs.test(e.target.value) && e.target.value == '') {
             this.pwdmessage = '请设置正确格式的密码'
          } else if(e.target.value.length < 6){
          this.pwdmessage = '密码长度最小6位'
          }else{
          this.pwdmessage =''
        }
      },
      //确认密码和密码对比
      cfmpwdChange(){
        if(this.pwdnum != this.cfmpwdnum){
          this.cfmpwdmessage = '密码输入错误';
        }else{
          this.cfmpwdmessage = '';
        }
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
  margin-top: 30px;
  float: left;
  border: 1px solid gray;
}
.pwd{
    width: 100%;
  height: 44px;
  /* margin-top: 30px; */
  float: left;
  border: 1px solid gray;
}
.qrpwd{
  width: 100%;
  height: 44px;
  /* margin-top: 30px; */
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
  /* margin-top: 30px; */
  float: left;
  border: 1px solid gray;
}
.vfctNum input{
   width: 100%;
}
.vfctNum-tu{
  width: 60%;
  height: 44px;
  float: left;
  margin-left: 20px;
  /* border: 1px solid red; */
}
.vfctNum-tu img{
  background-color: gainsboro;
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
.phoneVc{
  width: 100%;
  height: 44px;
  margin-top: 30px;
  float: left;
  border: 1px solid gray;
}
.phoneVc input{
  width: 62%;
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
.ze{
  width: 100%;
  height: 30px;
  float: left;
  line-height: 30px;
  font-size: 14px;
  color: red;
}
</style>
