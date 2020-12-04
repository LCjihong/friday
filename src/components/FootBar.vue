<template>
  <div id="footbar">
    <hr>
    <el-row type="flex" justify="space-around"   class="options-box">
      <li v-for="(item, index) of optionsInfo" :key="index">
        <img :src="item.img" />
        <span>{{ item.text }}</span>
      </li>
    </el-row>
    <hr>
    <el-row type="flex" justify="space-around" class="footer">
        <div class="left">
          <div class="image-box">
            <img src="http://renjihong.zone:2000/home/logo.png" alt="礼拜五">
            <p>
              <span>服务时间 : 08 : -22:00</span>
              <span class="iconfont icon-rexiandianhua">400-800-8200</span>
            </p>
          </div>
        </div>
        <div class="QR-box">
          <div>
            <img src="http://renjihong.zone:2000/home/QR.png" alt="二维码">
            <p>礼拜五官方微信</p>
          </div>
          <div>
            <img src="http://renjihong.zone:2000/home/QR.png" alt="二维码">
            <p>礼拜五官方微信</p>
          </div>
        </div>
        <div class="right">
          <ul v-for="(item, index) of footerInfo" :key="index">
            <li class="title">{{ item.title }}</li>
            <li><a :href="item.link1.url">{{ item.link1.name }}</a></li>
            <li><a :href="item.link2.url">{{ item.link2.name }}</a></li>
            <li><a :href="item.link3.url">{{ item.link3.name }}</a></li>
          </ul>
        </div>
    </el-row>
    <hr>
    <el-row type="flex" justify="center" class="tail">
      <div class="record">版权所有 © 礼拜五  保留所有权利 | 沪ICP备12042163</div>
      <div class="slogan">礼拜五  纵享品质</div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "FootBar",
  data() {
    return {
      footerInfo: [
        {
          title: "关于礼拜五",
          link1: {
            name: "新用户注册",
            url: "http://127.0.0.1:8080/classify/newreigistrat",
          },
          link2: {
            name: "新用户注册",
            url: "http://127.0.0.1:8080/classify/newreigistrat",
          },
          link3: {
            name: "新用户注册",
            url: "http://127.0.0.1:8080/classify/newreigistrat",
          },
        },
        {
          title: "关于礼拜五",
          link1: {
            name: "新用户注册",
            url: "http://127.0.0.1:8080/classify/newreigistrat",
          },
          link2: {
            name: "新用户注册",
            url: "http://127.0.0.1:8080/classify/newreigistrat",
          },
          link3: {
            name: "新用户注册",
            url: "http://127.0.0.1:8080/classify/newreigistrat",
          },
        },
        {
          title: "关于礼拜五",
          link1: {
            name: "新用户注册",
            url: "http://renjihong.zone",
          },
          link2: {
            name: "新用户注册",
            url: "http://renjihong.zone",
          },
          link3: {
            name: "新用户注册",
            url: "http://renjihong.zone",
          },
        },
        {
          title: "关于礼拜五",
          link1: {
            name: "新用户注册",
            url: "http://renjihong.zone",
          },
          link2: {
            name: "新用户注册",
            url: "http://renjihong.zone",
          },
          link3: {
            name: "新用户注册",
            url: "http://renjihong.zone",
          },
        }
      ],
      optionsInfo: [
        {
          text: "优先保障",
          img: "http://renjihong.zone:2000/home/foot-options1.png",
        },
        {
          text: "全程监控",
          img: "http://renjihong.zone:2000/home/foot-options2.png",
        },
        {
          text: "礼拜五特惠",
          img: "http://renjihong.zone:2000/home/foot-options3.png",
        },
        {
          text: "基地直供",
          img: "http://renjihong.zone:2000/home/foot-options4.png",
        },
        {
          text: "准时送达",
          img: "http://renjihong.zone:2000/home/foot-options5.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
hr{
  border: unset;
  height: 1px;
  background-color: #dddddd;
  width: 100%;
}
#footbar{
  font-family: 'microsoft yahei';
  margin: 0 auto;
}
.options-box{
  height: 104px;
  width: 1280px;
  margin: 0 auto;
  padding: 22px 0;
}
.options-box li{
  flex: 1;
  border-right: 1px solid #dddddd;
  padding: 0 1.5%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.options-box li:last-child{
  border: unset;
}
.options-box li img {
  width: 45px;
  height: 45px;
  padding-right: 5px;
}
.options-box li span{
  font: 200 24px/45px '';
}
.footer{
  width: 1280px;
  margin: 0 auto;
}
.footer {
  height: 200px;
  display: flex;
  padding: 20px;
  font-size: 14px;
  color: #666666;
}
.footer>div{
  flex: 1;
}
.left{
  padding: 10px;
}
.left .image-box{
  display: inline-block;
}
.left img{
  padding-bottom: 25px;
}
.left .iconfont{
  float: right;
  color: #f08200;
  font-weight: 900;
}
.left .iconfont::before{
  color:#498e3d;
  padding-right: 5px;
}
.QR-box{
  text-align: center;
}
.QR-box div{
  display: inline-block;
  padding-right: 20px;
  text-align: center;
}

.QR-box p{
  padding-top: 10px;
}
.right ul{
  float: left;
  padding-right: 20px;
}
.right .title{
  font-weight: 900;
  padding-bottom: 10px;
  padding-top: 0;
}
.right li{
  padding-top: 15px;
}
.right li a{
  color: #666666;
}
.tail{
  height: 82px;
  width: 1280px;
  margin: 0 auto;
}
.tail .record, .tail .slogan{
  text-align: center;
}
.tail .slogan{
  color: #f08200;
}
.tail{
  padding: 18px 0;
  font-size: 14px;
  color: #666666;
  line-height: 24px;
  flex-direction: column;
}
</style>
