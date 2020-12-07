<template>
  <div class="Lineitem">
    <div class="top-log">
      <toutop></toutop>
    </div>
    <div class="navAa">
      <p class="topnava">收货人信息</p>
      <button class="topBtn">
        <router-link to="/confirmaor/newaddress">使用新地址</router-link>
      </button>
    </div>
    <div class="nav1">
      <router-view></router-view>
    </div>
    <div class="goodRevInfor">
      <div class="commodity" v-for="(item, index) of commData" :key="index">
        <div class="conCenter">
          <div class="conNav">
            <span class="conNav1"><input type="checkbox" />爱果果水果店</span>
            <span class="conNav2">规格</span>
            <span class="conNav3">单价</span>
            <span class="conNav4">数量</span>
            <span class="conNav5">金额</span>
            <span class="conNav6">操作</span>
          </div>
        </div>
        <div
          class="commMsg"
          v-for="(ite, idx) of item.data"
          :key="idx"
        >
          <div class="checkBox">
            <input type="checkbox" />
          </div>
          <div class="commHead">
            <img :src="ite.cimgurl" alt="" />
          </div>
          <div class="commTex1">{{ ite.cname }}</div>
          <div class="conmmNum">{{ ite.c_cspecifications }}</div>
          <div class="conmmMone">{{ ite.c_price }}</div>
          <div class="numeration">
            <template>
              <el-input-number
                v-model="ite.c_mount"
                @change="handleChange"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
            </template>
          </div>
          <div class="money">{{ ite.mount * ite.c_price }}</div>
          <div class="delet" @click="handleDel">删除</div>
        </div>
        <div class="amoutgood">
          <div class="amoutcent">
            运费 <span>￥5.0</span> 商品金额 <span>￥{{ 123 }}</span> 商家合计
            <span>￥108.0</span>
          </div>
        </div>
        <div class="invoIce">
          <span class="Incotex"> 开票信息 </span>
          <div class="invoXuan">
            <template>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="不需要">不需要</el-checkbox>
                <el-checkbox label="个人">个人</el-checkbox>
                <el-checkbox label="单位">单位</el-checkbox>
              </el-checkbox-group>
            </template>
          </div>
          <div class="invoNum">
            <span>发票抬头：</span>
            <div class="invoIn">
              <input type="text" />
            </div>
            <span class="iconfont icon-shanhuxiaerqi invoNumTex"></span>
            <span>请填写后认真核对发票信息</span>
          </div>
        </div>
        <div class="remark">
          <span class="remarkTex">添加订单备注</span>
          <div class="addrema">
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
    <div class="btmBtn">
      <div class="aggregate">
        <div class="aggregate1">
          <span>实付金额：<span class="aggTex1">￥2977</span></span>
        </div>
        <div class="aggregate1">
          <span
            >订单完成后可获得积分：<span class="aggTex2">300积分</span></span
          >
        </div>
        <button>提交订单</button>
      </div>
    </div>
  </div>
</template>

<script>
import toplogo from "@/components/Toplogo";
import toutop from "@/components/Home/Shopptro/ShoppTop";
export default {
  components: {
    toplogo,
    toutop,
  },
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      tpTex: "确认兑换信息",
      blue: "",
      // num:'',
      activeNames: ["1"],
      commData:[]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
  beforeMount(){
    this.$axios.get('/myorder?uid=' + sessionStorage.getItem('uid'))
    .then(resp => {
      console.log(resp);
    })
  }
};
</script>

<style scoped>
.top-log {
  /* float: left; */
  width: 1280px;
  height: 67px;
  margin: 0 auto;
  margin-top: 25px;
}
.logoimg {
  float: left;
  margin-right: 45px;
}
.logoimg img {
  width: 370px;
  height: 67px;
}
.navAa {
  width: 1280px;
  margin: 0 auto;
  height: 50px;
  margin-top: 20px;
  position: relative;
}
.topnava {
  font-size: 18px;
  line-height: 50px;
  /* float: left; */
  position: absolute;
  left: 0;
  top: 20px;
  /* margin-left: 0; */
}
.topBtn {
  width: 90px;
  height: 30px;
  outline: none;
  border: 0;
  background-color: #f08200;
  border-radius: 5px;

  position: absolute;
  right: 0;
  top: 20px;
}
.topBtn a {
  color: white;
}
.topText {
  height: 38px;
  float: left;
  font-size: 30px;
  color: #959595;
  padding-left: 33px;
  margin-top: 30px;
  line-height: 50px;
  border-left: 1px solid #959595;
}
.goodRevInfor {
  width: 1280px;
  /* height: 1300px; */
  margin: 0 auto;
  /* background-color: pink; */
}
.nav1 {
  width: 1280px;
  margin: 0 auto;
  /* height: 50px; */
  position: relative;
  margin-top: 30px;
  /* background-color: #959595; */
}
.topTexa {
  /* float: left; */
  position: absolute;
  left: 50px;
  /* top: 20px; */
  font-size: 18px;
  line-height: 50px;
}
.topnav {
  font-size: 18px;
  line-height: 50px;
  /* float: left; */
  position: absolute;
  left: 0;
  color: #f08200;
  font-size: 30px;
  /* margin-left: 0; */
}
.topBtn {
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

/* .commodity{
  width: 1280px;
  height: 800px;
  /background-color: yellow;
} */
.comTop {
  width: 1280px;
  height: 60px;
  /* float: left; */
  line-height: 60px;
  font-size: 18px;
  color: #959595;
}
.commodity {
  width: 1280px;
  height: 844px;
  margin: 0 auto;
  /* float: left; */
  border: 1px solid gainsboro;
}
.conNav {
  width: 1280px;
  height: 47px;
  line-height: 47px;
  font-size: 16px;
  background-color: #f2f2f2;
}
/* .conNav1{
  margin-left: 58px;
} */
.conNav2 {
  margin-left: 320px;
}
.conNav3 {
  margin-left: 150px;
}
.conNav4 {
  margin-left: 150px;
}
.conNav5 {
  margin-left: 145px;
}
.conNav6 {
  margin-left: 145px;
}
.commMsg {
  width: 1280px;
  height: 140px;
  float: left;
  border-bottom: 1px solid gainsboro;
}
.commHead {
  width: 80px;
  height: 80px;
  border: 1px solid gainsboro;
  margin: 20px 20px 20px 10px;
  float: left;
}
.commHead img {
  width: 100%;
  height: 100%;
}
.commTex1 {
  width: 290px;
  height: 120px;
  float: left;
  line-height: 120px;
}
.conmmNum {
  width: 60px;
  height: 120px;
  line-height: 120px;
  float: left;
  /* margin-left: 20px; */
}
.conmmMone {
  width: 60px;
  height: 120px;
  line-height: 120px;
  float: left;
  color: gray;
  margin-left: 120px;
}
.numeration {
  float: left;
  margin-top: 45px;
  margin-left: 90px;
}
.money {
  float: left;
  line-height: 120px;
  /* color: red; */
  font-size: 18px;
  margin-left: 90px;
}
.delet {
  float: left;
  line-height: 120px;
  /* color: red; */
  font-size: 18px;
  margin-left: 130px;
  color: green;
  cursor: pointer;
}

.dwtInteTex {
  position: absolute;
  top: 0;
  right: 320px;
  font-size: 14px;
  color: #959595;
}
.checkBox {
  float: left;
  margin-top: 50px;
  margin-left: 20px;
}
.amoutgood {
  width: 1280px;
  float: right;
  line-height: 90px;
}
.amoutcent {
  float: right;
}
.amoutgood span {
  font-size: 20px;
  color: red;
  margin-right: 20px;
  margin-left: 20px;
}
.btmBtn {
  width: 1280px;
  height: 160px;
  /* float: left; */
  margin: 0 auto;
  border: 1px solid gainsboro;
}
.btnbTex {
  line-height: 130px;
  color: green;
  cursor: pointer;
}
.btnaTex {
  line-height: 130px;
  color: green;
  cursor: pointer;
  margin-left: 30px;
}
.aggregate {
  float: right;
  /* line-height: 130px; */
}
.aggregate button {
  width: 150px;
  height: 50px;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 20px;
  float: right;
  margin-top: 20px;
  margin-right: 30px;
  background-color: #f08200;
  outline: none;
  border: 0;
}
.invoIce {
  width: 1280px;
  height: 150px;
  float: left;
  border: 1px solid gainsboro;
}
.remark {
  width: 1280px;
  height: 130px;
  float: left;
  border: 1px solid gainsboro;
}
.Incotex {
  margin-top: 10px;
  float: left;
}
.invoXuan {
  width: 1280px;
  height: 40px;
  line-height: 40px;
  /* background-color: red; */
  float: left;
}
.invoNum {
  width: 1280px;
  height: 35px;
  float: left;
}
.invoNum span {
  float: left;
  line-height: 35px;
}
.invoIn {
  float: left;
  width: 370px;
  height: 35px;
  border: 1px solid gray;
}
.invoIn input {
  width: 370px;
  height: 35px;
  outline: none;
  border: 0;
}
.invoNumTex {
  color: red;
  margin-left: 30px;
}
.remarkTex {
  width: 100%;
  /* float: left; */
  margin-top: 20px;
}
.addrema {
  width: 630px;
  height: 35px;
  /* float: left; */
  margin-top: 20px;
  border: 1px solid gray;
}
.addrema input {
  outline: none;
  border: 0;
}
.remarkTex1 {
  margin-top: 20px;
  color: green;
  /* float: left; */
}
.modif {
  margin-top: 10px;
}
.modif span {
  color: green;
  cursor: pointer;
}
.aggregate1 {
  width: 100%;
  height: 20px;
  float: right;
  margin-top: 20px;
}
.aggregate1 span {
  float: right;
}
.aggTex1 {
  color: red;
  font-size: 24px;
}
.aggTex2 {
  font-size: 14px;
  color: #f08200;
}
</style>
