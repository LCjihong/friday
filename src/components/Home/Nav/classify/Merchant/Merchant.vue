<template>
  <el-row id="merchant-box">
    <el-row id="merchant">
      <div class="img-box">
        <img class="bigImg" :src="merchantData.mimgurl" alt="礼拜五旗舰店">
        <div class="changeImg">
          <div class="prev"></div>
          <ul>
            <li><img src="http://renjihong.zone:2000/test/merchant.png" alt="礼拜五商城"></li>
            <li><img src="http://renjihong.zone:2000/test/merchant.png" alt="礼拜五商城"></li>
            <li><img src="http://renjihong.zone:2000/test/merchant.png" alt="礼拜五商城"></li>
            <li><img src="http://renjihong.zone:2000/test/merchant.png" alt="礼拜五商城"></li>
          </ul>
          <div class="next"></div>
        </div>
      </div>
      <div class="info">
        <h2>{{ merchantData.mname }}</h2>
        <div class="desc">
          <p>
            <span class="icon el-icon-odometer">营业时间:</span>
            <em>{{ merchantData.mbusytime == 24 ? '全天24小时' : '每天'+merchantData.mbusytime+'小时' }}</em>
            <i class="iconfont icon-fl-renminbi">{{ merchantData.mprice }}/人</i>
          </p>
          <p>
            <span class="icon el-icon-mobile-phone">{{ merchantData.mphone }}</span>
          </p>
          <p>
            <span class="icon el-icon-location">{{ merchantData.maddr }}</span>
          </p>
        </div>
        <div class="announcement">
          <h3>商家公告</h3>
          <p>本店有最新活动优惠,本店有最新活动优惠,本店有最新活动优惠,本店有最新活动优惠,本店有最新活动优惠</p>
        </div>
      </div>
      <div class="rate">
        <div class="Comprehensive clear">
          <span>综合评分:</span>
          <el-rate
            :value="4.5"
            disabled
            show-score
            :colors="['#f08200','#f08200','#f08200']"
            text-color="#f08200"
            score-template="{value}">
          </el-rate>
        </div>
        <ul class="classify">
          <li>
            <span>描述</span>
            <em>4.5分</em>
          </li>
          <li>
            <span>商品</span>
            <em>4.5分</em>
          </li>
          <li>
            <span>服务</span>
            <em>4.5分</em>
          </li>
        </ul>
        <div class="hezuoshangjia"></div>
        <div class="ziyingshangjia"></div>
      </div>
    </el-row>
    <el-row v-if="infoData.length">
      <city-classify></city-classify>
      <el-row class="merchant-info">
        <commodity :data="infoData"></commodity>
      </el-row>
      <el-row class="changePage">
        <el-pagination
          background
          :page-size="12"
          layout="prev, pager, next"
          :total="infoData.length">
        </el-pagination>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import Commodity from '@/components/Commodity'
import CityClassify from '../City/CityClassify'
export default {
  name:'Search',
  data(){
    return {
      merchantData:{
        mname:'礼拜五旗舰店',
        mbusytime:24,
        mprice:60,
        mphone:'12345678910',
        maddr:'河南省郑州市管城回族区黄河科技学院',
        mimgurl:'http://renjihong.zone:2000/test/merchant.png',
        mselfbusy:true
      },
      infoData:[
        {
          img:'http://renjihong.zone:2000/home/fruit1.png',
          title:'新西兰佳沛黄金奇异果',
          desc:'果肉棉柔、花蜜般的甘甜白吃不厌',
          price:'28.80',
          oPrice:'40.00',
        },
        {
          img:'http://renjihong.zone:2000/home/fruit2.png',
          title:'新西兰佳沛黄金奇异果',
          desc:'果肉棉柔、花蜜般的甘甜白吃不厌',
          price:'28.80',
          oPrice:'40.00',
        },
        {
          img:'http://renjihong.zone:2000/home/fruit3.png',
          title:'新西兰佳沛黄金奇异果',
          desc:'果肉棉柔、花蜜般的甘甜白吃不厌',
          price:'28.80',
          oPrice:'40.00',
        },
        {
          img:'http://renjihong.zone:2000/home/fruit4.png',
          title:'新西兰佳沛黄金奇异果',
          desc:'果肉棉柔、花蜜般的甘甜白吃不厌',
          price:'28.80',
          oPrice:'40.00',
        },
        {
          img:'http://renjihong.zone:2000/home/seafood1.png',
          title:'新西兰佳沛黄金奇异果',
          desc:'果肉棉柔、花蜜般的甘甜白吃不厌',
          price:'28.80',
          oPrice:'40.00',
        },
        {
          img:'http://renjihong.zone:2000/home/seafood2.png',
          title:'新西兰佳沛黄金奇异果',
          desc:'果肉棉柔、花蜜般的甘甜白吃不厌',
          price:'28.80',
          oPrice:'40.00',
        },
        {
          img:'http://renjihong.zone:2000/home/seafood3.png',
          title:'新西兰佳沛黄金奇异果',
          desc:'果肉棉柔、花蜜般的甘甜白吃不厌',
          price:'28.80',
          oPrice:'40.00',
        },
        {
          img:'http://renjihong.zone:2000/home/seafood4.png',
          title:'新西兰佳沛黄金奇异果',
          desc:'果肉棉柔、花蜜般的甘甜白吃不厌',
          price:'28.80',
          oPrice:'40.00',
        }
      ]
    }
  },
  beforeMount(){
    this.$axios.get(`/merchant?mid=${this.$route.query.mid}`)
    .then(resp => {
      this.merchantData = resp.data[0]
    })
    this.$axios.get(`/commodity/sel_mer?mid=${this.$route.query.mid}`)
    .then(resp => {
      resp.data.forEach(element => {
        element.cprice = parseFloat(element.cprice.split(',')[0]).toFixed(1);
        element.oprice = parseFloat(element.oprice.split(',')[0]).toFixed(1);
      })
      this.infoData = resp.data;
    })
  },
  components:{
    CityClassify,
    Commodity
  }
}
</script>

<style scoped>
#merchant-box{
  width: 1280px;
  margin: 0 auto;
}
#merchant{
  display: flex;
  justify-content: flex-start;
  color: #666666;
}
.img-box{
  width: 500px;
}
.img-box .bigImg{
  width: 498px;
  border: 1px solid #e4e4e4; 
  margin-bottom: 20px;
}
.info{
  width: 483px;
}
.rate{
  flex: 1;
  position: relative;
}
.changeImg{
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.changeImg ul{
  width: 454px;
  display: flex;
  justify-content: space-around;
}
.changeImg ul li{
  float: left;
  width: 90px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
}
.changeImg ul li img{
  width: 100%;
  height: 100%;
}
.prev, .next{
  width: 23px;
  height: 50px;
  color: #e4e4e4;
  cursor: pointer;
}
.prev{
  background: center center url("http://renjihong.zone:2000/merchant/jiantou-left.png") no-repeat;
}
.next{
  background: center center url("http://renjihong.zone:2000/merchant/jiantou-right.png") no-repeat;
}
.info{
  box-sizing: border-box;
  padding: 0 40px;
}
.info h2{
  height: 64px;
  line-height: 64px;
  font-size: 24px;
  margin-bottom: 10px;
}
.info .desc{
  height: 157px;
  box-sizing: border-box;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  font: 18px/40px 'microsoft yahei';
  padding: 17px 0;
}
.icon::before{
  padding-right: 8px;
  color: #498e3d;
}
.iconfont{
  color: #f6b062;
}
.announcement{
  box-sizing: border-box;
  padding-top: 20px;
}
.announcement h3{
  font: 24px/40px 'microsoft yahei';
}
.announcement p{
  color: #666666;
  font: 14px/30px 'microsoft yahei';
}
.rate{
  background-color: #f4fff2;
  font-size: 16px;
  box-sizing: border-box;
  padding: 100px 20px 0;
}
.Comprehensive{
  padding-left: 15px;
  margin-bottom: 20px;
}
.Comprehensive div, .Comprehensive span{
  float: left;
}
.rate .classify{
  display: flex;
  justify-content: center;
}
.rate .classify li{
  flex: 1;
  box-sizing: border-box;
  border-right: 2px dotted #dddddd;
  text-align: center;
  display: flex;
  flex-direction: column;
  line-height: 34px;
}
.rate .classify li:last-of-type{
  border: unset;
}
.rate .classify li em{
  font-size: 18px;
  color: #ff6c00;
}
.ziyingshangjia{
  position: absolute;
  width: 49px;
  height: 61px;
  background: url("http://renjihong.zone:2000/merchant/ziyingshangjia.png");
  right: 0;
  top: 0;
}
.merchant-info{
  padding-top: 30px;
}
.changePage{
  text-align: center;
}
</style>