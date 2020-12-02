<template>
<div class="Lineitem">
    <toutop></toutop>
    <div class="nav1">
       <p class="iconfont icon-gouwuche1 topnav"></p>
       <p class="topTexa">购物车</p>
    </div>
    <div class="goodRevInfor">
     <div class="commodity">
        <div class="conCenter">
           <div class="conNav">
             <span class="conNav1"><input type="checkbox">爱果果水果店</span>
             <span class="conNav2">规格</span>
             <span class="conNav3">单价</span>
             <span class="conNav4">数量</span>
             <span class="conNav5">金额</span>
             <span class="conNav6">操作</span>
           </div>
        </div>
        <div class="commMsg" v-for="(ite,index1) of commMsg" :key="'info1-'+index1">
           <div class="checkBox">
             <input type="checkbox">
           </div>
           <div class="commHead">
              <img :src="ite.commHead" alt="">
           </div>
           <div class="commTex1">{{ite.commTex1}}</div>
           <div class="conmmNum">{{ite.conmmNum}}</div>
           <div class="conmmMone">{{ite.conMone}}</div>
           <div class="numeration">
             <template>
               <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
             </template>
           </div>
           <div class="money">{{ite.integral}}</div>
           <div class="delet">删除</div>
        </div>
        <div class="amoutgood">
          商品金额  <span>￥108.0</span>
        </div>
    </div>
    <div class="commodity">
        <div class="conCenter">
           <div class="conNav">
             <span class="conNav1"><input type="checkbox">爱果果水果店</span>
             <span class="conNav2">规格</span>
             <span class="conNav3">单价</span>
             <span class="conNav4">数量</span>
             <span class="conNav5">金额</span>
             <span class="conNav6">操作</span>
           </div>
        </div>
        <div class="commMsg" v-for="(ite,index1) of commMsg" :key="'info1-'+index1">
           <div class="checkBox">
             <input type="checkbox">
           </div>
           <div class="commHead">
              <img :src="ite.commHead" alt="">
           </div>
           <div class="commTex1">{{ite.commTex1}}</div>
           <div class="conmmNum">{{ite.conmmNum}}</div>
           <div class="conmmMone">{{ite.conMone}}</div>
           <div class="numeration">
             <template>
               <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
             </template>
           </div>
           <div class="money">{{ite.integral}}</div>
           <div class="delet">删除</div>
        </div>
        <div class="amoutgood">
          商品金额  <span>￥108.0</span>
        </div>
    </div>
    <div class="btmBtn">
      <span class="btnbTex">全选</span>
      <span class="btnaTex">批量删除</span>
      <div class="aggregate">
       商品总记：<span>￥2977</span>
        <button>立即购买</button>
      </div>
    </div>
    </div>

</div>
</template>

<script>
import toplogo from '@/components/Toplogo'
import toutop from '@/components/Home/Shopptro/ShoppTop'
export default {
  components:{
    toplogo,
     toutop,
  },
data () {
      return {
        tpTex : '确认兑换信息',
        blue:'',
        radio: '',
        activeNames: ['1'],
        num: 1,
        site:[
          {
            num:1,
            textSit:'但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589',
          },
          {
            num:2,
            textSit:'但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589',
          },
          {
            num:3,
            textSit:'但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589',
          },
          {
            num:4,
            textSit:'但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589',
          },
        ],
        commMsg:[
          {
            num:1,
            commHead:'http://renjihong.zone:2000/particulars/确认订单商品.jpg',
            commTex1:'云南蒙自石榴 8个装',
            conmmNum:'8个装',
            integral:'￥569',
            conMone:'￥569',
          },
          {
            num:2,
            commHead:'http://renjihong.zone:2000/particulars/确认订单商品.jpg',
            commTex1:'云南蒙自石榴 8个装',
            conmmNum:'8个装',
            integral:'￥569',
            conMone:'￥569',

          },
          {
            num:3,
            commHead:'http://renjihong.zone:2000/particulars/确认订单商品.jpg',
            commTex1:'福建琯溪白心蜜柚（大果） 2个装',
            conmmNum:'8个装',
            integral:'￥569',
            conMone:'￥569',

          }
        ]
      };
    },
   methods: {
      handleChange(val) {
        console.log(val);
      }
    }
}
</script>

<style scoped>

.top-log{
  /* float: left; */
  width: 1280px;
  height: 67px;
  margin: 0 auto;
  margin-top: 25px;
}
.logoimg{
  float: left;
  margin-right: 45px;
}
.logoimg img{
  width: 370px;
  height: 67px;
}
.topText{
  height: 38px;
  float: left;
  font-size: 30px;
  color: #959595;
  padding-left:33px;
  margin-top: 30px;
  line-height: 50px;
  border-left: 1px solid  #959595;
}
.goodRevInfor{
  width: 1280px;
  height: 1300px;
  margin: 0 auto;
  /* background-color: pink; */
}
/* .topnavtex{
  width: 1280px;
  float: left;
} */

.nav1{
  width: 1280px;
  margin: 0 auto;
  height: 50px;
  position: relative;
  margin-top: 30px;
  /* background-color: #959595; */
}
.topTexa{
  /* float: left; */
  position: absolute;
  left: 50px;
  /* top: 20px; */
  font-size: 18px;
  line-height: 50px;
}
.topnav{
  font-size: 18px;
  line-height: 50px;
  /* float: left; */
  position: absolute;
  left: 0;
  color: #f08200;
  font-size: 30px;
  /* margin-left: 0; */
}
.topBtn{
  width: 90px;
  height: 30px;
  outline: none;
  border: 0;
  background-color: #f08200;
  border-radius: 5px;
  color: white;
  float: right;
  margin-top: 10px;
}
.siteBox{
  width: 1280px;
  height: 40px;
  border-radius: 5px;
  line-height: 40px;
  background-color: #f4fff2;
  float: left;
  margin-top: 10px;
}
.commodity{
  width: 1280px;
  height: 500px;
  /* background-color: yellow; */
}
.comTop{
  width: 1280px;
  height: 60px;
  /* float: left; */
  line-height: 60px;
  font-size: 18px;
  color: #959595;
}
.commodity{
  width: 1280px;
  height: 500px;
  float: left;
  border: 1px solid gainsboro;
}
.conNav{
  width: 1280px;
  height: 47px;
  line-height: 47px;
  font-size: 16px;
  background-color: #f2f2f2;
}
/* .conNav1{
  margin-left: 58px;
} */
.conNav2{
  margin-left: 320px;
}
.conNav3{
  margin-left: 150px;
}
.conNav4{
  margin-left: 150px;
}
.conNav5{
margin-left: 145px;
}
.conNav6{
margin-left: 145px;

}
.commMsg{
  width: 1280px;
  height: 120px;
  float: left;
  border-bottom: 1px solid gainsboro;
}
.commHead{
  width: 80px;
  height: 80px;
  border: 1px solid gainsboro;
  margin: 20px 20px 20px 10px;
  float: left;
}
.commHead img{
  width: 100%;
  height: 100%;
}
.commTex1{
  width: 290px;
  height: 120px;
  float: left;
  line-height: 120px;
}
.conmmNum{
  width: 60px;
  height: 120px;
  line-height: 120px;
  float: left;
  /* margin-left: 20px; */
}
.conmmMone{
  width: 60px;
  height: 120px;
  line-height: 120px;
  float: left;
  color: gray;
  margin-left: 120px;
}
.numeration{
  float: left;
  margin-top: 45px;
  margin-left: 90px;
}
.money{
  float: left;
  line-height: 120px;
  /* color: red; */
  font-size: 18px;
  margin-left: 90px;
}
.delet{
   float: left;
  line-height: 120px;
  /* color: red; */
  font-size: 18px;
  margin-left: 130px;
  color: green;
  cursor: pointer;
}

.dwtInteTex{
  position: absolute;
  top: 0;
  right: 320px;
  font-size: 14px;
  color: #959595;
}
.checkBox{
  float: left;
  margin-top: 50px;
  margin-left: 20px;
}
.amoutgood{
  float: right;
  line-height: 90px;
}
.amoutgood span{
  font-size: 20px;
  color: red;
  margin-right: 20px;
  margin-left: 20px;
}
.btmBtn{
  width: 100%;
  height: 130px;
  float: left;
  border: 1px solid gainsboro;
}
.btnbTex{
   line-height: 130px;
  color: green;
  cursor: pointer;
}
.btnaTex{
  line-height: 130px;
  color: green;
  cursor: pointer;
  margin-left: 30px;
}
.aggregate{
  float: right;
  line-height: 130px;
}
.aggregate span{
  font-size: 20px;
  color: red;
}
.aggregate button{
  width: 150px;
  height: 50px;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 20px;
  /* margin-right: 30px; */
  background-color: #f08200;
  outline: none;
  border: 0;
}
</style>
