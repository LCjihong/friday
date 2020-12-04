<template>
  <div id="top-bar">
    <div class="box">
      <div class="city">
        <span>所在城市:</span>
        <em>北京朝阳区</em>
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="options">
        <span>您好,<a class="phone" href="#">123456789</a> <i>退出</i></span>
        <span class="iconfont icon-anjianfengexian"><router-link to="/personal/morder">我的订单</router-link></span>
        <span class="iconfont icon-anjianfengexian"><router-link to="/personal/mmessage">我的消息</router-link></span>
        <span class="iconfont icon-anjianfengexian"><router-link to="">我是商家</router-link></span>
        <i class="iconfont icon-anjianfengexian"></i>
        <span class="iconfont icon-rexiandianhua icon-anjianfengexian">400-800-8200</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TopBar',
}
</script>

<style scoped>
#top-bar{
  height: 36px;
  background-color: #eeeeee;
  font: 14px/36px '';
  line-height: 36px;
  color: #666666;
}
.box{
  width: 1280px;
  height: 100%;
  margin: 0 auto;
}
.city{
  float: left;
}
.options{
  float: right;
}
.options .phone{
  color: #4b943d;
}
.iconfont{
  font-size: 14px;
}
.icon-rexiandianhua{
  font-size: 14px;
  font-weight: 900;
}
.icon-rexiandianhua::before{
  color: #4b943d;
  padding-right: 3px;
}
.options a{
  color: #666666;
}
</style>