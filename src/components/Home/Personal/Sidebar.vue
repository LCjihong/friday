<template>
  <!-- 左侧导航  -->
  <div class="aboutfridayleft">
    <div class="aboutfridayleft-left">个人中心</div>

    <p class="aboutfridayleft-box1">交易管理<span>></span></p>
    <router-link to="/personal/maccount">我的账户</router-link>
    <router-link to="/personal/morder">我的订单</router-link>
    <router-link to="/personal/mwallet">我的钱包</router-link>

    <p class="aboutfridayleft-box1">会员资料<span>></span></p>
    <router-link to="/personal/mdata">个人资料</router-link>
    <router-link to="/personal/maddr">地址管理</router-link>
    <router-link to="/personal/mfavorite">我的收藏</router-link>
    <router-link to="/personal/mbrowse">最近浏览</router-link>
    <router-link to="/personal/alertpwd">修改密码</router-link>
    
    <p class="aboutfridayleft-box1">站内信<span>></span></p>
    <router-link to="/personal/mmessage">我的消息</router-link>
    <router-link to="/personal/mopinion">意见反馈</router-link>
  </div>
</template>

<script>
export default {
  name: "NewRegistration",
};
</script>

<style>
.aboutfridayleft a.router-link-active {
  color: #f08200;
  text-decoration: underline;
}

.aboutfridayleft {
  float: left;
  width: 168px;
  height: 625px;
  border: 1px solid #e7e7e7;
  color: #666666;
  margin-right: 25px;
  margin-left: 320px;
}
.aboutfridayleft-left {
  width: 168px;
  height: 57px;
  padding-left: 20px;
  line-height: 57px;
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
  font-size: 18px;
}
.aboutfridayleft > a {
  /* width:100%; */
  color: #999999;
  display: block;
  margin-left: 20px;
  margin-top: 21px;
  text-decoration: none;
  font-size: 14px;
  line-height: 14px;
}
.aboutfridayleft > .aboutfridayleft-box1 {
  color: #666666;
  font-size: 16px;
  line-height: 16px;
  margin-left: 20px;
  margin-top: 21px;
}
.aboutfridayleft-box1 > span {
  float: right;
  margin-right: 48px;
}
.aboutfridayleft a:hover {
  color: #498e3d;
}
/* .aboutfridayleft>.aboutfridayleftclick{
    text-decoration: underline;
    color:#498e3d;
} */
.aboutfridayright {
  float: right;
  width: 1083px;
  height: 1178px;
  border: 1px solid #e7e7e7;
}
.aboutfridayright div:nth-child(1) {
  height: 56px;
  line-height: 56px;
  border-bottom: 1px solid #e7e7e7;
  padding-left: 20px;
  box-sizing: border-box;
  color: #252525;
  font-size: 17px;
  margin-bottom: 20px;
}
.aboutfridayrightbox1 > h3 {
  height: 63px;
  line-height: 63px;
  font-size: 23px;
  color: #498e3d;
  text-align: center;
}
.aboutfridayrightbox2 {
  width: 100%;
  text-align: center;
}
.aboutfridayrightbox2 > p {
  height: 13px;
  line-height: 13px;
  color: #999999;
  font-size: 13px;
  display: inline-block;
  margin: 0px 43px;
  margin-bottom: 21px;
}
.aboutfridayrightbox3 > p {
  margin-left: 38px;
  margin-right: 43px;
  line-height: 30px;
  color: #999999;
  font-size: 14px;
  text-align: left;
}
.aboutfridayrightbox3 > div {
  width: 100%;
  margin: 22px 0px;
}
</style>


