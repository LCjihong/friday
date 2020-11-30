<template>
  <div class="pointsmStore">
    <swiper :config="SwiperConf"></swiper>
     <div class="storeType">
        <div class="commodityOne">
          <div class="peach"  v-for="(item , index) of commodity" :key="index">
            <img :src="item.img" alt="">
            <p class="storeText1">{{item.text1}}</p>
            <p class="storeText2">{{item.text2}}</p>
            积分：<span class="inteGral">{{item.integral}}</span> 价值：<span class="valUE">{{item.value}}</span><br>
             <button class="btn">立即兑换</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
export default {
  components:{
    Swiper
  },
  data(){
    return{
       SwiperConf: {
        height: "500px",
        data: [
          "http://renjihong.zone:2000/home/swiper1.png",
          "http://renjihong.zone:2000/home/swiper1.png",
          "http://renjihong.zone:2000/home/swiper1.png",
          "http://renjihong.zone:2000/login/积分商城1.jpg",
        ],
      },
    commodity:[
    {
      num:1,
      img:'http://renjihong.zone:2000/login/积分桃子.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:2,
      img:'http://renjihong.zone:2000/login/积分橘子.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:3,
      img:'http://renjihong.zone:2000/login/积分梨.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:4,
      img:'http://renjihong.zone:2000/login/积分红柚.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
     {
      num:5,
      img:'http://renjihong.zone:2000/login/积分桃子.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:6,
      img:'http://renjihong.zone:2000/login/积分橘子.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:7,
      img:'http://renjihong.zone:2000/login/积分梨.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:8,
      img:'http://renjihong.zone:2000/login/积分红柚.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
     {
      num:9,
      img:'http://renjihong.zone:2000/login/积分桃子.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:10,
      img:'http://renjihong.zone:2000/login/积分橘子.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:11,
      img:'http://renjihong.zone:2000/login/积分梨.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
    {
      num:12,
      img:'http://renjihong.zone:2000/login/积分红柚.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'500',
      value:'￥20.0'
    },
  ]
    }
  },

}
</script>

<style scoped>
.storeType{
  width: 1280px;
  margin: 0 auto;
  height: 1000px;

  /* background-color: pink; */
}
.commodityOne{
  width:1280px;
  height: 1497px;
  float: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-around;
}
.peach{
  width: 305px;
  height: 475px;
  text-align: center;
  /* background-color: pink; */
  border: 1px solid #ececec;
}
.peach img{
  width: 100%;
  height: 304px;
}
.storeText1{
  font-size: 18px;
  color: #333333;
}
.storeText2{
margin-top: 12px;
font-size: 14px;
color: #808080;
margin-bottom: 12px;
}
.inteGral{
  color: red;
  font-size: 24px;
  margin-right: 20px;
}
.btn{
  width: 150px;
  height: 30px;
  color: white;
  border-radius: 15px;
  outline: none;
  background-color: #f08200;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  border: 0;
  margin-top: 20px;
  cursor: pointer;
}
</style>
