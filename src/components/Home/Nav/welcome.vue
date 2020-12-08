<template>
  <div id="welcome">
    <swiper :config="SwiperConf"></swiper>
    <div id="main">
      <div class="recommend">
        <div class="item" v-for="(item, index) of Recommend" :key="index">
          <div class="info">
            <p class="title" v-for="(title, idx) of item.wtit" :key="idx">
              {{ title }}
            </p>
            <p class="desc" v-show="item.wdesc">{{ item.wdesc }}</p>
          </div>
          <div class="img-box">
            <img class="img" :src="item.wimgurl" />
          </div>
          <img
            class="tag"
            v-if="item.wtype == 1"
            src="http://renjihong.zone:2000/home/remai.png"
          />
          <img
            class="tag"
            v-if="item.wtype == 2"
            src="http://renjihong.zone:2000/home/xinpin.png"
          />
        </div>
      </div>

      <div class="activity">
        <el-header class="header" height="100px">
          <div class="left">
            <i class="iconfont icon-shizhongnaolingjishixianshi"></i>
            <span>礼拜五</span>
            <em class="desc">Friday</em>
          </div>
          <div class="right">
            <div id="countdown">
              <em>距离开始:</em>
              <span>五天</span>
              <span>15</span>
              <i>:</i>
              <span>25</span>
              <i>:</i>
              <span>20</span>
            </div>
            <router-link to="">更多></router-link>
          </div>
        </el-header>

        <el-main class="main">
          <el-carousel
            height="500px"
            arrow="never"
            ref="carousel"
            indicator-position="none"
            style="position: relative"
            @change="changeIdx"
          >
            <el-carousel-item v-for="(group, index) of fridayInfo" :key="index">
              <ul class="friday">
                <li
                  v-for="(item, index) of group"
                  :key="index"
                  @click="handleClick(item.cid)"
                >
                  <div class="img-box">
                    <img :src="item.fimgurl" />
                  </div>
                  <p class="title">{{ item.cname }}</p>
                  <p class="desc">{{ item.cdesc }}</p>
                  <p class="price">
                    <span>礼拜五价:</span>
                    <em class="iconfont icon-fl-renminbi">{{ item.fprice }}</em>
                  </p>
                </li>
              </ul>
            </el-carousel-item>
            <ul class="changeIdx">
              <li
                v-for="index in fridayInfo.length"
                :key="index"
                @click="changeItem(index - 1)"
                :style="{
                  backgroundColor: index - 1 == Idx ? '#4b943d' : '#b0b0b0',
                  width: index - 1 == Idx ? '10px' : '8px',
                  height: index - 1 == Idx ? '10px' : '8px',
                }"
              ></li>
            </ul>
          </el-carousel>
        </el-main>
      </div>
      <el-row
        class="commodGroup"
        v-for="(item, index) of commodGroupData"
        :key="index"
      >
        <el-header class="header" height="100px">
          <div class="left">
            <i :class="item.class"></i>
            <span>{{ item.title }}</span>
            <em class="desc">{{ item.desc }}</em>
          </div>
          <div class="right">
            <router-link to="">更多></router-link>
          </div>
        </el-header>
        <el-main class="main">
          <commodity :data="item.data" @show-box="showBox(arguments)"></commodity>
        </el-main>
      </el-row>
    </div>
    <el-dialog
      title="请选择产品规格"
      customClass="customWidth"
      :visible.sync="dialogVisible"
      width="600px"
    >
      <div class="asbox1">
        <div class="asbox2">
          <span>现价 : ￥{{ parseFloat(box_cprice[box_choice] * num).toFixed(1) }}</span>
          <span>原价 : ￥{{ parseFloat(box_oprice[box_choice] * num).toFixed(1) }}</span>
        </div>
        <div class="asbox3">
          <!-- <p>请选择充值的金额 : </p> -->
          <span>请选择规格</span>
          <div 
          @click="box_choice = index" 
          v-for="(value, index) of boxData.cspecifications" 
          :key="index"
          :style="{
            backgroundColor:index == box_choice ? '#f4fff2' : 'white',
            border:index == box_choice ? '1px solid #4b943d' : '1px solid #d4d4d4'
          }">{{ value }}</div>
        </div>
        <div>
          <span>数量 : </span>
          <el-input-number
            v-model="num"
            :min="1"
          ></el-input-number>
          <span> 件</span>
        </div>
      </div>
      <!-- 返回和保存 -->
      <span slot="footer" class="dialog-footer">
        <div class="swbox3">
          <el-button :plain="true" class="swbox4" @click="ashandel1">
            <span>添加到购物车</span>
          </el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
import Commodity from "../../Commodity";
export default {
  data() {
    return {
      Idx: 0,
      SwiperConf: {
        height: "500px",
        data: [
          "http://renjihong.zone:2000/home/swiper1.png",
          "http://renjihong.zone:2000/home/swiper1.png",
          "http://renjihong.zone:2000/home/swiper1.png",
          "http://renjihong.zone:2000/home/swiper1.png",
        ],
      },
      Recommend: [],
      fridayInfo: [],
      commodGroupData: [
        {
          class: "iconfont icon-yingtao",
          title: "新鲜水果",
          desc: "采自新疆优质水果生产基地，品质一流",
          data: [],
        },
        {
          class: "iconfont icon-jiweixia",
          title: "水产海鲜",
          desc: "国内外新鲜到港的鱼虾蟹贝，我们全都有",
          data: [],
        },
        {
          class: "iconfont icon-rou",
          title: "肉类禽蛋",
          desc: "采自新疆优质水果生产基地，品质一流",
          data: [],
        },
        {
          class: "iconfont icon-niunairupin",
          title: "蛋奶速食",
          desc: "国内外新鲜到港的鱼虾蟹贝，我们全都有",
          data: [],
        },
      ],
      asmsg1: "20.0", // 商品的现价
      asmsg2: "40.0", // 商品的原价
      num: 1,
      dialogVisible: false,
      boxData:{},
      box_cprice:[],
      box_oprice:[],
      box_choice:0,
      asmes8: "",
      model1: "500g",
      proder: [
        {
          money1: "500g",
          money2: "1000g",
          money3: "2000g",
        },
      ],
    };
  },
  beforeMount() {
    this.$axios.get("/recommend").then((resp) => {
      resp.data.forEach((value, index, arr) => {
        value.forEach((v, i, ar) => {
          ar[i].cprice = parseInt(v.cprice.split(",")[0]).toFixed(1);
          ar[i].oprice = parseInt(v.oprice.split(",")[0]).toFixed(1);
        });
        this.commodGroupData[index].data = value;
      });
    });
    this.$axios.get("/friday").then((resp) => {
      this.fridayInfo = resp.data;
    });
    this.$axios.get("/active").then((resp) => {
      this.Recommend = resp.data;
    });
  },
  components: {
    Swiper,
    Commodity,
  },
  methods: {
    changeIdx(index) {
      this.Idx = index;
    },
    changeItem(index) {
      this.$refs.carousel.setActiveItem(index);
      this.Idx = index;
    },
    handleClick(cid) {
      this.$router.push({
        path: "/commodata",
        query: {
          cid
        },
      });
    },
    showBox(arg){
      if (sessionStorage.getItem('uid')) {
        let cid = arg[1];
        this.$axios.get(`/commodity/sel_id?cid=${cid}`)
        .then(resp => {
          resp.data[0].cprice = resp.data[0].cprice.split(',');
          resp.data[0].oprice = resp.data[0].oprice.split(',');
          resp.data[0].cspecifications = resp.data[0].cspecifications.split(',');
          this.boxData = resp.data[0];
          this.box_cprice = resp.data[0].cprice;
          this.box_oprice = resp.data[0].oprice;
          this.dialogVisible = arg[0];
          console.log(resp.data[0]);
        })
      }else{
        this.$router.push({path:'/lr/login'})
      }
    },
    ashandel1() {
      //  点击添加到购物车
      this.$axios.post('/cart/insert', this.$qs.stringify({
        cid:this.boxData.cid,
        uid:sessionStorage.getItem('uid'),
        c_cspecifications:this.boxData.cspecifications[this.box_choice],
        c_mount:this.num,
        c_price:this.box_cprice[this.box_choice]
      })).then(resp => {
        this.dialogVisible = false;
        this.$message({
          message: "添加购物车成功",
          type: "success",
        });
      })
    },
  },
};
</script>

<style>
#main {
  width: 1280px;
  margin: 0 auto;
}
.recommend {
  height: 180px;
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}
.recommend .item {
  width: 305px;
  height: 100%;
  background-color: #f2f2f2;
  position: relative;
  line-height: 40px;
}
.recommend .tag {
  position: absolute;
  left: 0;
  top: 0;
}
.recommend .info {
  width: 50%;
  display: inline-block;
  padding-top: 32px;
}
.recommend p {
  padding-left: 30px;
}
.recommend .title {
  font-size: 20px;
}
.recommend .desc {
  font-size: 16px;
}
.desc {
  color: #737373;
}
.recommend .img-box {
  width: 50%;
  float: right;
  height: 140px;
  text-align: center;
  line-height: 140px;
}
.recommend .img {
  vertical-align: middle;
}
.header {
  background-color: #ebffe8;
  border-bottom: 1px solid #498e3d;
}
.header .left {
  float: left;
  height: 100%;
  font-weight: 100;
  color: #498e3d;
  line-height: 100px;
}
.header .left span {
  font-size: 30px;
  padding-right: 10px;
}
.header .left i {
  font-size: 36px;
  padding-right: 10px;
}
.header .left em {
  color: #666666;
  font-size: 24px;
  line-height: 110px;
}
.header .right {
  float: right;
  line-height: 100px;
  height: 100px;
  font-size: 18px;
  font-weight: 200;
}
.header .right a {
  color: #666666;
}
.activity .header .right > div {
  float: left;
}
#countdown {
  font-size: 0;
  padding-right: 10px;
}
#countdown em {
  font-size: 24px;
  color: #498e3d;
}
#countdown span {
  display: inline-block;
  width: 60px;
  height: 41px;
  font-size: 20px;
  background-color: #f08200;
  color: #ffffff;
  border-radius: 3px;
  line-height: 41px;
  text-align: center;
  margin: 0 10px;
}
#countdown i {
  font-size: 20px;
  color: #f08200;
}
.activity .main {
  height: 543px;
}
.main {
  padding: 20px 0;
}
.activity .friday {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.activity .friday li {
  width: 305px;
  height: 433px;
  font-size: 18px;
  background-color: #eeeeee;
}
.img-box {
  width: 100%;
  height: 305px;
  text-align: center;
  line-height: 305px;
}
.img-box img {
  vertical-align: middle;
}

.price em {
  font-size: 24px;
  font-weight: 900;
  color: #ff5757;
}
.price em::before {
  padding-right: 5px;
}
.activity .friday p {
  text-align: center;
  padding-bottom: 10px;
}
.activity .friday .desc {
  color: #666666;
}
.activity .friday .price span {
  color: #f08200;
  padding-right: 5px;
}
.changeIdx {
  width: 154px;
  height: 18px;
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translate(-77px);
  z-index: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.changeIdx li {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.commodGroup .main {
  height: 473px;
  overflow: hidden;
}


.asbox{
    font-size: 17px;
    color:#333333;
}
.asbox1{
    color:#666666;
    font-size:18px;
    padding-left:20px;
    box-sizing: border-box;
}
.asbox2>span:nth-child(1){
    color:#ff5757;
    font-size: 28px;
    margin-right:20px;
}
.asbox2>span:nth-child(2){
    text-decoration: line-through;
}
.asbox2{
    margin-bottom:30px;
}

.asbox3{
    margin-bottom:30px;
}
.asbox3>div{
    width:80px;
    height:32px;
    line-height: 32px;
    text-align: center;
    border:1px solid #d4d4d4;
    display:inline-block;
    margin-right:20px;
    cursor: pointer;
}
.asbox3>div:nth-child(2){
    background:#f4fff2;
    border:1px solid #4b943d;
}

.swbox3{
    width:100%;
    height:35px;
    margin-bottom:20px;
}
.swbox4{
    width:191px;
    height:35px;
    background:#f08200;
    color:white;
    font-size: 17px;
    border-radius: 6px;
    float: left;
    margin-left:40px;
}
</style>
