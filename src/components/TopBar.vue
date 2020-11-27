<template>
  <el-row id="top-bar">
    <el-row class="search-box" type="flex" justify="space-between">
      <div class="image-box">
        <img src="http://renjihong.zone:2000/home/logo.png" alt="礼拜五">
      </div>
      <div class="search">
        <div class="search-input">
          <div class="input-box">
            <input type="text" v-model="keyword" placeholder="请输入关键字进行搜索">
            <i class="iconfont icon-sousuo"></i>
            <div class="hotword">
              <em>热门:</em>
              <span v-for="(value, index) of hotword" :key="index">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <el-button plain type="info"><i class="iconfont icon-yonghu">个人中心</i></el-button>
        <el-button plain type="info"><i class="iconfont icon-gouwuche">购物车</i></el-button>
      </div>
    </el-row>
    <el-row class="nav-box">
      <li><em>全部分类<i class="iconfont icon-arrow-right"></i></em></li>
      <li><router-link tag="span" to="">首页</router-link></li>
      <li><router-link tag="span" to="">同城</router-link></li>
      <li><router-link tag="span" to="">礼拜五</router-link></li>
      <li><router-link tag="span" to="">积分商城</router-link></li>
      <li><router-link tag="span" to="">导航+</router-link></li>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name:'TopBar',
  data(){
    return {
      keyword:'',
      hotword:['奇异果','牛排','山竹','牛油果']
    }
  }
};
</script>

<style scoped>
#top-bar {
  width: 1280px;
  padding-top: 25px;
  margin: 0 auto;
}
.search-box{
  padding-bottom: 38px;
}
.search-box > *{
  flex: 1;
}
.search{
  flex: 2;
}
.search-input{
  padding-top: 25px;
  padding-left: 100px;
}
.input-box{
  border:2px solid #4b943d;
  height: 36px;
  display: inline-block;
  font-size: 0;
  position: relative;
}
.input-box input{
  line-height: 36px;
  width: 456px;
  font-size: 18px;
  padding-left: 10px;
  box-sizing: border-box;
  border: unset;
  outline: unset;
}
.input-box .iconfont::before{
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  background-color: #4b943d;
  vertical-align: top;
  font-size: 22px;
  text-align: center;
  color: white;
}
.hotword{
  position: absolute;
  left: 0;
  top: 38px;
  font-size: 14px;
  color: #666666;
}
.hotword span{
  padding-left: 10px;
}
.btn-box{
  padding-top: 25px;
  text-align: center;
}
.btn-box button{
  width: 123px;
  line-height: 38px;
  padding: 0;
  border-radius: 0;
}
.btn-box .iconfont::before{
  padding-right: 10px;
}
.nav-box{
  color: #666666;
}
.nav-box li{
  float: left;
  transition: 0.3s;
  margin-right: 1px;
  user-select: none;
}
.nav-box li:hover{
  background-color: #fb9012;
  color: #ffffff;
}
.nav-box span, .nav-box em{
  font: 16px/50px '';
}
.nav-box span{
  padding: 0 60px;
  position: relative;
  border-left: 1px solid #dddddd;
  left: -1px;
}
.nav-box em{
  padding: 0 40px;
}
.nav-box .iconfont{
  padding-left: 10px;
}
</style>