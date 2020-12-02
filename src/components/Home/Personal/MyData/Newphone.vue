<template>
   <div class="originalPhone">
      <div class="nav1">1验证原手机号</div>
      <div class="nav2">2.验证新手机号</div>
      <div class="nav3">3.换绑成功</div>
       <div class="Alert">
    <div class="AlertLeft">
      <div class="reset" id="reset">
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
               <img src="http://127.0.0.1:3000/captchas" alt="" ref = "change">
            </div>
            <p class="reset_code1" @click="handleCodel">看不清换一张</p>
        </div>
       <div class="number_code">
            <div class="reset_input">
                <input type="text" placeholder="手机验证码" v-model="CellPoneVerificationCode" @focus="handlefocus" @blur="handleblur">
            </div>
            <div class="number_gain" @click="handleNumber">获取验证码</div>
        </div>
        <div class="reset_button" @click="resetbtn" >
            <router-link to="" class="resettouch">验证提交</router-link>
        </div>
      </form>
     </div>
    </div>
  </div>
   </div>
</template>

<script>
export default {
 methods:{
   resetbtn(){
     this.$router.push('/personal/bindingsuc');
   }
 }
}
</script>

<style scoped>
.originalPhone{
width: 1085px;
height: 568px;
border: 1px solid gainsboro;
}
.nav1{
  width: 236px;
  height: 42px;
  background-color:  gainsboro;
  -webkit-clip-path: polygon(0% 0%, 90% 0, 100% 50%, 90% 99%, 0% 100%);
clip-path: polygon(0% 0%, 90% 0, 100% 50%, 90% 99%, 0% 100%);
 margin-top: 40px;
 margin-left: 40px;
 float: left;
 text-align: center;
 line-height: 42px;
}
.nav2{
   width: 236px;
  height: 42px;
  background-color: green;
  -webkit-clip-path: polygon(90% 0, 100% 50%, 90% 100%, 10% 100%, 25% 50%, 10% 0);
clip-path: polygon(90% 0, 100% 50%, 90% 100%, 10% 100%, 25% 50%, 10% 0);
margin-top: 40px;
/* margin-left: 10px; */
float: left;
 color: white;
text-align: center;
 line-height: 42px;
}
.nav3{
   width: 236px;
  height: 42px;
  background-color: gainsboro;
  -webkit-clip-path: polygon(100% 0, 100% 50%, 100% 100%, 10% 100%, 25% 50%, 10% 0);
clip-path: polygon(100% 0, 100% 50%, 100% 100%, 10% 100%, 25% 50%, 10% 0);
margin-top: 40px;
/* margin-left: 10px; */
float: left;
text-align: center;
 line-height: 42px;
}
.Alert{
  width: 1085px;
  height: 568px;
  border: 1px solid gainsboro;
}
.AlertLeft{
  float: left;
}
.AlertRight{
  float: right;
}
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
    /* border: 1px solid gainsboro; */
    padding-left:40px;
    padding-top:10px;
    padding-right:40px;
    box-sizing: border-box;
    font-size:16px;
    margin-top: 40px;
}
/* 重置密码 字体的样式 */
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
    background-color: #f9f9f9;
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
    width:150px;
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
