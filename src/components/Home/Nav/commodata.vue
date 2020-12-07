<template>
  <div class="particulars">
   <!-- <topbar></topbar> -->
   <breadnav :config='routers'></breadnav>
    <div class="single" v-for="(item , index1) of list" :key="index1">
      <div class="detailsleft">
        <div class="detailsTop" >
            <img :src="item.cimgurl" alt="">
        </div>
        <div class="detailsBtm">
          <p class="iconfont icon-goleft-baise leftjt"> </p>
          <div class="centu">
            <p class="smallTu"  v-for="(aimg ,index2 ) of smallimg" :key="'info2-'+index2">
              <img :src="aimg.smaimg" alt="">
            </p>
          </div>
          <p class="iconfont icon-zuoyoujiantou rightjt"></p>
        </div>
      </div>
      <div class="detailsRight"  v-for="(atex , index3) of detailsRight" :key="'info3-'+index3">
      <p class="topTex">{{item.cname}}1200g</p>
      <span class="subtitle1">全国</span>
      <span class="subtitle2">礼拜五</span>
      <span class="subtitle3">次日达</span>
      <span class="subtitle4">自营</span>
      <div class="cenTex">
        <div class="cenTexleft">
          <p class="head">
            <img :src="atex.head" alt="">
          </p>
          <button>资深买家</button>
        </div>
        <div class="cenTexrig">
         {{atex.explain}}
        </div>
      </div>
      <div class="btmTex">
          <div class="btmTextop">
            <span class="textLe">
              现价：{{item.iprice}}
            </span>
            <span class="textRi">
              原价：￥{{item.cprice}}
            </span>
          </div>
          <div class="btmTexA">
             <span>请选择规格</span>
             <p v-for="(spic,index) in speci" :key="index">{{spic}}</p>
          </div>
          <div class="btmTexB">
             <!-- <span>请选择规格</span> <p>500g</p> <p>1000g</p> -->
          </div>
          <div class="btmTexC">
             <span>数 量：</span>
             <div class="btmBtn">
               <template>
               <el-input-number class="btmBtnsss" v-model="num"  :min="1" :max="10" label="描述文字"></el-input-number>
               </template>
             </div>
             <span class="liang">件</span>
             <button class="btmBtns">立即兑换</button>
          </div>
          <div class="share">
               <img :src="atex.evaluate" alt="">
               <span class="share1">收藏此商品</span>
               <span class="share2">分享到</span>
               <img :src="atex.share" alt="" class="shareImg">
          </div>
      </div>
      </div>
    </div>
    <div class="commodityPar">
      <el-tabs type="border-card">
        <el-tab-pane label="商品详情">
          <div class="parTiculars" v-for="(parTcu , index4) of parEva1" :key="'info4-'+index4">
             <p class="teX1">{{parTcu.text1}}</p>
             <p class="teX2">{{parTcu.text2}}</p>
             <p class="teX3">{{parTcu.text3}}</p>
             <p class="teX4">{{parTcu.text4}}</p>
             <p class="parTicuImg">
               <img :src="parTcu.imgpe" alt="">
             </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品评价">
          <div class="evAluate" v-for="(evAlu , index5) of parEva2" :key="'info5-'+index5">
            <div class="headLeft1">
                <p class="headLeft1-img">
                  <img :src="evAlu.head" alt="">
                </p>
                <p class="headLeft1-text2">
                  {{evAlu.text2}}
                </p>
            </div>
             <div class="headRight1">
                <p class="headRight-img1">
                  <el-rate
                   v-model="value"
                    show-text>
                  </el-rate>
                </p>
                <p class="headRight-te1">
                  {{evAlu.text1}}
                </p>
                 <div class="headRight1-im2">
                   <p>
                     <img :src="evAlu.expression1" alt="">
                   </p>
                   <p>
                     <img :src="evAlu.expression2" alt="">
                   </p>
                   <p>
                     <img :src="evAlu.expression3" alt="">
                   </p>
                   <p>
                     <img :src="evAlu.expression4" alt="">
                   </p>
                 </div>
            </div>
          </div>
          <div class="evAluate" v-for="(evAl , index6) of parEva3" :key="'info6-'+index6">
            <div class="headLeft1">
                <p class="headLeft1-img">
                  <img :src="evAl.head" alt="">
                </p>
                <p class="headLeft1-text2">
                  {{evAl.text2}}
                </p>
            </div>
             <div class="headRight1">
                <p class="headRight-img1">
                   <el-rate
                   v-model="value"
                    show-text>
                  </el-rate>
                </p>
                <p class="headRight-te1">
                  {{evAl.text1}}
                </p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import topbar from "@/components/TopBar";
import breadnav from '@/components/breadnav'
export default {
  components:{
    breadnav,
    topbar,
  },
  data(){
    return{
      list:'',
      speci:'',
       num: 1,
        value: null,
        methods: {
      // handleChange(value) {
      //   console.log(value);
      // }
    },
      routers:{
      routera:window.location.pathname
     },
    smallimg:[
      {
      num:1,
      smaimg:'http://renjihong.zone:2000/particulars/详情梨小.jpg',
    },
     {
      num:2,
      smaimg:'http://renjihong.zone:2000/particulars/详情梨小.jpg',
    },
     {
      num:3,
      smaimg:'http://renjihong.zone:2000/particulars/详情梨小.jpg',
    },
     {
      num:4,
      smaimg:'http://renjihong.zone:2000/particulars/详情梨小.jpg',
    },
    ],
    detailsRight:[
      {
        num:1,
        head:"http://renjihong.zone:2000/particulars/详情商家头像.jpg",
        explain:'雀斑石榴持续热卖!云南蒙自石榴，原产波斯（今伊朗）—带，公元前二世纪时传入我国。是中国三大石榴之一，粒大皮薄汁多味甜爽口。雀斑石榴持续热卖!云南蒙自石榴，原产波斯（今伊朗)—带，公元前二世纪时传入我国。是中国三大石溜之一，粒大皮薄，汁多味甜爽口。',
        evaluate:'http://renjihong.zone:2000/particulars/详情评价2星.jpg',
        share:'http://renjihong.zone:2000/particulars/详情分享到.jpg',
      }
    ],
    parEva1:[
      {
        num:1,
        text1:'男士短衬衫',
        text2:'明水礼盒十分优秀，是送朋友，送亲人的不二选择。',
        text3:'什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。',
        text4:'完成交易，如有剩余库存，从新上架产品',
        imgpe:'http://renjihong.zone:2000/particulars/详情大logo.jpg',
      },
        {
        num:2,
        text1:'男士短衬衫',
        text2:'明水礼盒十分优秀，是送朋友，送亲人的不二选择。',
        text3:'什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。',
        text4:'完成交易，如有剩余库存，从新上架产品',
        imgpe:'http://renjihong.zone:2000/particulars/详情大logo.jpg',
      }
    ],
    parEva2:[
      {
        num:1,
        head:'http://renjihong.zone:2000/particulars/详情评价人头像.jpg',
        expression1:'http://renjihong.zone:2000/particulars/详情评价表情.jpg',
        expression2:'http://renjihong.zone:2000/particulars/详情评价表情.jpg',
        expression3:'http://renjihong.zone:2000/particulars/详情评价表情.jpg',
        expression4:'http://renjihong.zone:2000/particulars/详情评价表情.jpg',
        text1:'帮同事买的，很不错，性价比高',
        text2:'158****0203',
      },

       {
        num:2,
        head:'http://renjihong.zone:2000/particulars/详情评价人头像.jpg',
        expression1:'http://renjihong.zone:2000/particulars/详情评价表情.jpg',
        expression2:'http://renjihong.zone:2000/particulars/详情评价表情.jpg',
        expression3:'http://renjihong.zone:2000/particulars/详情评价表情.jpg',
        expression4:'http://renjihong.zone:2000/particulars/详情评价表情.jpg',
        text1:'帮同事买的，很不错，性价比高',
        text2:'158****0203',
      },

    ],
   parEva3:[
       {
        num:1,
        head:'http://renjihong.zone:2000/particulars/详情评价人头像.jpg',
        text1:'帮同事买的，很不错，性价比高',
        text2:'158****0203',
      },
       {
        num:2,
        head:'http://renjihong.zone:2000/particulars/详情评价人头像.jpg',
        text1:'帮同事买的，很不错，性价比高',
        text2:'158****0203',
      }
   ]
    }
  },
  mounted(){
    console.log(this.$route.query.id)
    this.$axios.post('http://renjihong.zone:3000/integeral/partic',this.$qs.stringify({
      id: this.$route.query.id
    })).then((res) => {
      this.list = res.data
      for(var i = 0;i < res.data.length;i++ ){
      this.speci=res.data[i].cspecifications.split(',')
      }
    }).catch(function(err){
      console.log(err)
    })
  },
  methods:{

  }
}
</script>

<style scoped>
.particulars{
  width: 1280px;
  margin: 0 auto;
}
.single{
  width: 100%;
  height: 630px;

}
.commodityPar{
  width: 100%;
  height: 1008px;
  float: left;
  margin-top: 40px;
  margin-bottom: 40px;
  /* background-color: pink; */
}
.detailsleft{
  width: 500px;
  height: 630px;
  float: left;
}
.detailsTop{
  width: 500px;
  height: 500px;
  float: left;
  /* background-color: yellow; */
}
.detailsTop img{
  width: 100%;
  height: 100%;
}
.detailsBtm{
  width: 500px;
  height: 90px;
  float: left;
  margin-top: 40px;
  /* background-color: gainsboro; */
}
.leftjt{
  float: left;
  width: 40px;
  height: 90px;
  text-align: center;
  line-height: 90px;
  font-size: 40px;
  color: #8a8a8a;
  /* background-color: gold; */
  /* color: gainsboro; */
}
.centu{
  float: left;
  width: 420px;
  height: 90px;
  /* background-color: plum; */
  display: flex;
  flex-wrap:nowrap;
    justify-content: space-between;

}
.rightjt{
  float: left;
  width: 40px;
  height: 90px;
  text-align: center;
  line-height: 90px;
  font-size: 40px;
  color: #8a8a8a;
  /* background-color: gold; */
}
.smallTu{
  width: 90px;
  height: 90px;
  float: left;
}
.smallTu img{
  width: 100%;
  height: 100%;
}
.detailsRight{
  width: 740px;
  height: 630px;
  float: left;
  margin-left: 40px;
}
.topTex{
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  float: left;
}
.cenTex{
  width: 100%;
  float: left;
  height: 180px;
  border: 1px solid gainsboro;
}
.cenTexleft{
  width: 123px;
  height: 180px;
  float: left;
}
.head{
  width: 97px;
  height: 97px;
  float: left;
  margin:13px 13px ;
}
.head img{
  width: 100%;
  height: 100%;
}
.cenTexleft button{
  width: 123px;
  height: 34px;
  border-radius: 17px;
  border: 0;
  outline: none;
  background-color: #ffe313;
}
.cenTexrig{
  width: 585px;
  height: 124px;
  float: left;
  margin-left: 30px;
  margin-top: 40px;
  color: #8a8a8a;
}
.btmTex{
  width: 740px;
  height: 385px;
  float: left;
  /* background-color: pink; */
}
.btmTextop{
  width: 100%;
  height: 100px;
  float: left;
  line-height: 100px;
}
.textLe{
  color: red;
  font-size: 30px;
}
.textRi{
  margin-left: 35px;
  text-decoration: line-through;
}
.btmTexA{
  width: 100%;
  height: 34px;
  float: left;
  /* background-color: gold; */
}
.btmTexB{
  width: 100%;
  /* height: 14px; */
  float: left;
  margin-top: 20px;
  /* background-color: gold; */
}
.btmTexA p, .btmTexB p{
 width: 83px;
 height: 34px;
 margin-left: 20px;
 background-color: gainsboro;
 font-size: 14px;
 line-height: 34px;
 text-align: center;
 float: left;
 border: 1px solid gainsboro;
}
.btmTexA span, .btmTexB span{
  float: left;
  line-height: 34px;
}
.btmTexC{
  width: 100%;
  height: 50px;
  float: left;
  margin-top: 20px;
  /* background-color: gold; */
}
.btmTexC .btmBtn{
  width: 135px;
  height: 34px;
  float: left;
  margin-top: 8px;
  line-height: 50px;
}
.btmBtnsss{
  float: left;

}
.btmTexC span{
  float: left;
  line-height: 50px;
}
.liang{
  margin-left: 10px;
}
.btmBtns{
  width: 150px;
  height: 50px;
  background-color: #f08200;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  border: 0;
  float: left;
  cursor: pointer;
  margin-left: 40px;
}
.share{
  width: 100%;
  height: 25px;
  float: left;
  margin-top: 95px;
}
.share2{
  margin-left: 20px;
}
.shareImg{
  margin-top: -10px;
}
.parTiculars{
  width: 1200px;
  height: 420px;
  float: left;
  margin: 25px 25px;
  /* background-color: yellow; */
}
.parTicuImg{
  width: 1200px;
  height: 264px;
  float: left;
}
.parTicuImg img{
  width: 100%;
  height: 100%;
}
.teX1{
  color: red;
  font-size: 18px;
}
.teX2,.teX3,.teX4{
  color: #8c8c8c;
  font-size: 16px;
  margin-top: 20px;
}
.teX4{
  margin-bottom: 30px;
}
.evAluate{
  width: 1240px;
  height: 160px;
  float: left;
  margin: 20px;
  border-bottom: 1px solid gainsboro;
  /* background-color: yellow; */
}
.headLeft1{
  float: left;
  width: 128px;
  height: 160px;
  /* background-color: plum; */
}
.headLeft1-img{
  width: 90px;
  height: 90px;
  /* float: left; */
  margin: 0 18px;
}
.headLeft1-img img{
  width: 100%;
  height: 100%;
}
.headLeft1-text2{
   margin: 10px 20px;
   /* float: left; */
   color: #8c8c8c;
   font-size:14px ;
}
.headRight-img1{
  margin-top: 10px;
  margin-bottom: 10px;
}
.headRight-te1{
  margin-bottom: 20px;
  color: #8c8c8c;
  font-size: 16px;
}
.headRight1-im2 p{
  width: 60px;
  height: 60px;
  float: left;
  border: 1px solid gainsboro;
  margin-left: 10px;
}
.headRight1-im2 p img{
  width: 100%;
  height: 100%;
}
.subtitle1,.subtitle2,.subtitle3,.subtitle4{
  height: 25px;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 20px;
}
.subtitle1{
  width: 65px;
  background-color: green;
  display: inline-block;
}
.subtitle2{
  width: 80px;
  margin-left: 20px;
  background-color: orange;
    display: inline-block;
}
.subtitle3{
  width: 80px;
  margin-left: 20px;
  background-color: green;
    display: inline-block;
}
.subtitle4{
  width: 65px;
  margin-left: 20px;
  background-color: green;
    display: inline-block;
}
</style>
