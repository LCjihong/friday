<template>
<div class="Lineitem">
    <toplogo>{{tpTex}}</toplogo>
    <div class="nav1">
       <p class="topnav">收货人信息</p>
       <button class="topBtn">使用新地址</button>
    </div>
    <div class="goodRevInfor">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <i class="header-icon el-icon-info">展开收起其他地址</i>
          </template>
        <div v-for="(item,index) of site" :key="index" class="siteBox">
            <template>
              <el-radio v-model="radio" :label="item.num" class="site1">但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589
                 <el-button type="text"
                 v-if="item.num != radio">设为默认地址</el-button>
                 <el-button type="text" >修改</el-button>
                 <el-button type="text" >删除</el-button>
             </el-radio>
            </template>
        </div>
      </el-collapse-item>
    </el-collapse>
     <div class="commodity">
        <p class="comTop">商品信息</p>
        <div class="conCenter">
           <div class="conNav">
             <span class="conNav1">商品名称</span>
             <span class="conNav2">规格</span>
             <span class="conNav3">数量</span>
             <span class="conNav4">金额</span>
           </div>
        </div>
        <div class="commMsg" v-for="(ite,index1) of commMsg" :key="'info1-'+index1">
           <div class="commHead">
              <img :src="ite.commHead" alt="">
           </div>
           <div class="commTex1">{{ite.commTex1}}</div>
           <div class="conmmNum">{{ite.conmmNum}}</div>
           <div class="numeration">
             <template>
               <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
             </template>
           </div>
           <div class="money">{{ite.integral}}</div>
        </div>
        <div class="addRemark">
         <p class="addRentex">添加订单备注</p>
         <div class="addReninp">
           <input type="text" placeholder="限45个字，请填写有关商品、支付、发票等信息">
         </div>
         <div class="submit">
             <p class="dwtInteTex">限45个字，请填写有关商品、支付、发票等信息</p>
             <p class="dwtInte">应付积分：<span>500积分</span></p>
             <button class="dwtBtn" @click="dwtBtn">确认兑换</button>
         </div>
        </div>
    </div>
    </div>

</div>
</template>

<script>
import toplogo from '@/components/Toplogo'
export default {
  components:{
    toplogo,
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
            integral:'60积分',
          },
          {
            num:2,
            commHead:'http://renjihong.zone:2000/particulars/确认订单商品.jpg',
            commTex1:'云南蒙自石榴 8个装',
            conmmNum:'8个装',
            integral:'60积分',
          },
          {
            num:3,
            commHead:'http://renjihong.zone:2000/particulars/确认订单商品.jpg',
            commTex1:'福建琯溪白心蜜柚（大果） 2个装',
            conmmNum:'8个装',
            integral:'60积分',
          }
        ]
      };
    },
   methods: {
      handleChange(val) {
        console.log(val);
      },
      dwtBtn(){
        window.location='/succeed'
      }
    }
}
</script>

<style scoped>
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
  /* background-color: #959595; */
}
.topnav{
  font-size: 18px;
  line-height: 50px;
  /* float: left; */
  position: absolute;
  left: 0;
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
.conNav1{
  margin-left: 58px;
}
.conNav2{
  margin-left: 370px;
}
.conNav3{
  margin-left: 295px;
}
.conNav4{
  margin-left: 290px;
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
  margin: 20px 20px 20px 45px;
  float: left;
}
.commHead img{
  width: 100%;
  height: 100%;
}
.commTex1{
  width: 330px;
  height: 120px;
  float: left;
  line-height: 120px;
}
.conmmNum{
  width: 60px;
  height: 120px;
  line-height: 120px;
  float: left;
  margin-left: 20px;
}
.numeration{
  float: left;
  margin-top: 45px;
  margin-left: 220px;
}
.money{
  float: left;
  line-height: 120px;
  color: red;
  font-size: 18px;
  margin-left: 250px;
}
.addRemark{
width: 1280px;
height: 300px;
border: 1px solid gainsboro;
float: left;
margin-top: 30px;
}
.addRentex{
  width: 1280px;
  line-height: 60px;
  font-size: 18px;
  color: #959595;
}
.addReninp{
  width: 625px;
  height: 35px;
  border: 1px solid gainsboro;
}
.addReninp input{
  width: 100%;
  height: 35px;
  outline: none;
  border: 0;
  font-size: 14px;
  text-indent: 10px;
  color: #a0a0a0;
}
.submit{
  width: 1280px;
  height: 190px;
  margin-top: 12px;
  position: relative;
  border: 1px solid gainsboro;
}
.dwtInte{
  /* width: ; */
  margin-top: 40px;
  /* float: right; */
  position: absolute;
  right: 0;
}
.dwtInte span{
  color: red;
  font-size: 22px;
}
.dwtBtn{
  width: 150px;
  height: 50px;
  margin-top: 40px;
  border-radius: 5px;
  position: absolute;
  right: 0;
  top: 80px;
  outline: none;
  border: 0;
  color: white;
  font-size: 20px;
  background-color: #f08200;
}
.dwtInteTex{
  position: absolute;
  top: 0;
  right: 320px;
  font-size: 14px;
  color: #959595;
}
/* .siteBtn{
  float:right;
} */
</style>
