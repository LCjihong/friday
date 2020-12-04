<template>
  <div class="reset" id="reset">
      <h3>重置密码</h3>
      <form>
        <div class="reset_input Resetfirst">
            <input type="text" placeholder="请输入手机号" v-model="CellPhoneNumber" @change="handleChange" @focus="handlefocus" @blur="handleblur">
            <div class="resetbox">
                <span></span>
                <p>{{message}}</p>
            </div>
        </div>
        <div class="code">
            <div class="reset_code">
                <input type="text" placeholder="验证码" v-model="VerificationCode" @focus="handlefocus" @blur="verification">
            </div>
            <div class="reset_box2">
               <img src="http://renjihong.zone:3000/user/captchas" alt="" ref = "change">
            </div>
            <p class="reset_code1" @click="handleCodel">看不清换一张</p>
        </div>
        <div class="reset_input">
            <input type="text" placeholder="请输入密码( 6-20位号码字符 )" v-model="passworldOne" @focus="handlefocus" @blur="handleblur">
        </div>
        <div class="reset_input">
            <input type="text" placeholder="请再次输入密码" v-model="passworldTwo" @focus="handlefocus" @blur="handleblur" @change="handlepassworld">
            <p class="passworld1">{{resetpassword}}</p>
        </div>
        <div class="number_code">
            <div class="reset_input">
                <input type="text" placeholder="手机验证码" v-model="CellPoneVerificationCode" @focus="handlefocus" @blur="handleblur">
            </div>
            <div class="number_gain" @click="handleNumber">获取验证码</div>
        </div>
        <div class="reset_button" @click="resetbtn" >
            <router-link to="" class="resettouch">提交</router-link>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name:'ResetPassword',
  beforeMount(){
    this.$emit('tptxe-message','找回密码')
  },
  data(){
      return {
            CellPhoneNumber:'',             // 手机号
            VerificationCode:'',            // 验证码
            passworldOne:'',                // 密码
            passworldTwo:'',                // 确认密码
            CellPoneVerificationCode:'',    // 手机验证码
            message: '',                    // 手机号验证下面的提示信息
            resetpassword:'',               // 密码和确认密码的对比
      }
  },
  methods: {
      handlefocus(e){                                   // input表单获取焦点的样式
        //   console.log(e.target);
        //   console.log(e.path[1])
          e.path[1].style.border="1px solid #d3d3d3"
          e.path[1].style.boxShadow="0px 0px 3px #969696"
      },
      handleChange(e){                                  // 手机号格式的验证
        // console.log(this.message)
        var regex = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
          if(regex.test(e.target.value)){
              this.message = ''
          }else{
              this.message = '手机号码不正确, 请重新输入'
          }
      },
      handleCodel(){         // 验证码
       this.$refs.change.src =`http://renjihong.zone:3000/captchas?time=${new Date()}`;
      },
      handleblur(e){        // 表单失去焦点的样式
          e.path[1].style.border="1px solid #eeeeee"
          e.path[1].style.boxShadow="0px 0px 0px black"
      },
      handlepassworld(){                    // 确认密码和密码的对比及下面的提示信息
          if(this.passworldTwo == this.passworldOne){
              this.resetpassword =''
          }else{
              this.resetpassword ='密码输入错误'
          }
      },
      handleNumber(e){                      // 点击获取验证码 进入倒计时
          console.log(e.target.innerText);
        var t = null;
        // console.log(t)
        var timer = 5;
        t = setInterval(()=>{
            function add(){
                if(timer > 0){
                    e.target.style.background="#eeeeee";
                    e.target.style.color = "#498e3d";
                    e.target.style.pointerEvents = 'none';
                    e.target.innerText = '发送中(' + timer + ')';
                    console.log(timer)
                    timer--;
                }else{
                    clearInterval(t);
                    e.target.style.background="#498e3d";
                    e.target.style.color = "#eeeeee";
                    e.target.style.pointerEvents = 'auto';
                    e.target.innerText = "获取验证码"
                }
            }
            add()
          },1000)
      },
      //验证码请求
      verification(e){
      e.path[1].style.border="1px solid gray";
      e.path[1].style.boxShadow="0px 0px 0px black";
    this.$axios.post('http://renjihong.zone:3000/caps',this.$qs.stringify({
      vfcnum:this.VerificationCode
    })).then(function(res){
     console.log(res)
      if(res.data.returned == '验证成功'){
         alert('验证成功')
       }else if(res.data.returned == '验证失败'){
         alert('验证失败')
       }
    })
   },
   resetbtn(){
     this.$axios.post('http://renjihong.zone:3000',this.$qs.stringify({
       uphone:this.CellPhoneNumber,
       upwd:this.passworldOne,
     })).then(function(res){
       console.log(res)
       if(res.data.returned == '重置成功'){
         alert('重置成功')
         window.location = '/lr/login';
       }else if(res.data.returned == '重置失败'){
         alert('重置失败')
       }else{
         alert('查询不到本机号')
       }
     }).catch(function(err){
       console.log(err)
     })
   },
  }
}

</script>

<style scoped>
/* 验证码 临时占位 */
.reset_box2{
    width:100px;
    height:40px;
    /* border:1px solid red; */
    float: left;
    margin-left:6px;
}
.reset_box2 img{
  background-color: gainsboro;
  width: 100%;
  height: 40px;
  float: left;
}

/* 重置密码大框框的样式 */
.reset{
  float: right;
    width: 388px;
    height:500px;
    background:white;
    border: 1px solid gainsboro;
    padding-left:40px;
    padding-top:10px;
    padding-right:40px;
    box-sizing: border-box;
    font-size:16px;
}
/* 重置密码 字体的样式 */
h3{
    height:61px;
    line-height: 61px;
    font-size:23px;
    font-weight: normal;
    color:#666666;
}
/* 整体表单的间距 */
.reset>form>div{
    margin-bottom: 6%;
}
/* input框的样式 */
input{
    width:100%;
    height:100%;
    border:0px;
    outline: none;
    box-sizing: border-box;
    text-indent:1em;
}
/* 长条input的样式 */
.reset_input{
    width:305px;
    height:42px;
    border:1px solid #d3d3d3;
    display: inline-block;
    box-sizing: border-box;
    transition: 1s;
}
/* 长条input鼠标移入的样式 */
.reset_input:hover{
    border:1px solid #ababab;
}
/* 给 输入手机号 添加固定定位 */
.Resetfirst{
    position: relative;
}
/* 输入手机号/请再次确认密码 下面的提示信息 */
.resetbox,.passworld1{
    color:red;
    font-size:13px;
}
.number{
    color:#dd3e46;
    font-size: 11px;
}
/* 验证码 */
.code{
    height:42px;
}
/* 验证码框框 */
.reset_code{
    width: 111px;
    height:42px;
    border:1px solid #d3d3d3;
    float: left;
    box-sizing: border-box;
    transition: 1s;
}
/* 验证码框框hover事件 */
.reset_code:hover{
    border:1px solid #ababab;
}
/* 看不清换一张 的样式 */
.reset_code1{
    height:42px;
    line-height:42px;
    float: right;
    color:#f18c26;
    font-size:14px;
    cursor: pointer;
}
p{
    margin:0px;
}
/* 手机验证码 */
.number_code{
    position: relative;
}
/* 获取验证码格式 */
.number_gain{
    color:white;
    width:100px;
    height:32px;
    line-height: 32px;
    background:#498e3d;
    text-align: center;
    position: absolute;
    top:5px;
    right:7px;
    font-size:14px;
    cursor: pointer;
}
/* 获取验证码hover样式 */
.number_gain:hover{
    background:#eeeeee;
    color:#498e3d;
}
/* 提交按钮样式 */
.reset_button{
    width:306px;
    height:45px;
    line-height: 45px;
    text-align: center;
    background:#f08200;
    border-radius:4px;
    display: inline-block;
}
/* 提交按钮 */
.resettouch{
    width:100%;
    height:100%;
    border:0px;
    color:white;
    text-decoration: none;
    display: inline-block;
}
/* 提交按钮hover事件 */
.resettouch:hover{
    background:#eeeeee;
    color:#f08200;
}

</style>
