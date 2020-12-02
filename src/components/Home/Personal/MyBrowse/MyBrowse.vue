<template>
  <div class="Favor">
     <div class="peach"  v-for="(item , index) of commodity" :key="index">
            <img :src="item.img" alt="">
            <p class="storeText1">{{item.text1}}</p>
            <p class="storeText2">{{item.text2}}</p>
            <span class="inteGral">{{item.integral}}</span> <del class="valUE">{{item.value}}</del>
            <span class="iconfont icon-gouwuche1 che"></span><br>
            <p class="iconfont icon-shanchu delet" ></p>
      </div>
  </div>
</template>

<script>
export default {
 data(){
   return{

      commodity:[
    {
      num:1,
      img:'http://renjihong.zone:2000/login/积分桃子.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'￥28.80',
      value:'￥40.0'
    },
    {
      num:2,
      img:'http://renjihong.zone:2000/particulars/浏览葡萄.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'￥28.80',
      value:'￥40.0'
    },
    {
      num:3,
      img:'http://renjihong.zone:2000/particulars/浏览黄桃.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'￥28.80',
      value:'￥40.0'
    },
    {
      num:4,
      img:'http://renjihong.zone:2000/particulars/浏览葡萄.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'￥28.80',
      value:'￥40.0'
    },
    {
      num:5,
      img:'http://renjihong.zone:2000/login/积分梨.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'￥28.80',
      value:'￥40.0'
    },
    {
      num:6,
      img:'http://renjihong.zone:2000/particulars/浏览葡萄.jpg',
      text1:'新西兰佳沛黄金奇异果',
      text2:'花蜜般的甘甜百吃不厌',
      integral:'￥28.80',
      value:'￥40.0'
    },
      ]
   }
 }
}
</script>

<style scoped>
.Favor{
  width: 1085px;
  height: 960px;
  border: 1px solid gainsboro;
  float: left;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
}
.delet{
  position: absolute;
  color: #4b943d;
  font-size: 30px;
  right: 20px;
  top: 20px;
}
.peach{
  position: relative;
  width: 305px;
  height: 433px;
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
  margin-right: 10px;
}
.btn{
  width: 150px;
  height: 30px;
  color: white;
  border-radius: 15px;
  outline: none;
  background-color: #4b943d;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  border: 0;
  margin-top: 20px;
  cursor: pointer;
}
.valUE{
  color: gainsboro;
}
.btn2{
  width: 150px;
  height: 30px;
  color: white;
  border-radius: 15px;
  outline: none;
  background-color: #999999;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  border: 0;
  margin-top: 20px;
  cursor: pointer;
}
.che{
  font-size: 36px;
  color: #f08200;
  margin-left: 50px;
}
</style>
