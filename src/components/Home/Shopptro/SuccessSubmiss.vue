<template>
  <div>
    <!-- 成功提交订单 -->
    <toutop></toutop>
    <div class="scbox1">
      <div class="scbox2">
        <img src="http://renjihong.zone:2000/PersonalCenter/12.png" alt="" />
      </div>
      <div class="scbox3">
        <span>订单已提交, 请于24小时完成支付</span>
        <span> ( 逾期订单将被取消 ) </span>
      </div>
      <div class="scbox4">
        <div>
          <img src="http://renjihong.zone:2000/PersonalCenter/13.png" alt="" />
        </div>
        <span>送货至 : {{ uname }} </span>
        <span>{{ `${asheng} ${ashi} ${axian} ${adesc}` }}</span>
        <span>电话{{ aphone }}</span>
      </div>
    </div>
    <!-- <ssbottom></ssbottom> -->
    <div>
      <!-- 扫码的 -->
      <div class="ssbox5">
        <div class="ssbox4">
          <span>应付金额 : </span>
          <span>{{ cost }}</span>
          <span>( 在线支付 )</span>
          <span>订单标号 : {{ oid }}</span>
        </div>
        <div class="ssbox6">
          <span>支付平台</span>
        </div>
      </div>
      <div class="ssbox">
        <form class="ssbox1">
          <input type="radio" name="ssbox" checked />
          <div>
            <img src="http://renjihong.zone:2000/PersonalCenter/8.png" alt="" />
          </div>
          <input type="radio" name="ssbox" />
          <div>
            <img src="http://renjihong.zone:2000/PersonalCenter/9.png" alt="" />
          </div>
          <input type="radio" name="ssbox" />
          <div>
            <img
              src="http://renjihong.zone:2000/PersonalCenter/10.png"
              alt=""
            />
          </div>
          <input type="radio" name="ssbox" />
          <div>
            <img
              src="http://renjihong.zone:2000/PersonalCenter/11.png"
              alt=""
            />
          </div>
        </form>
        <div class="ssbox2">
          <!-- <img src="http://renjihong.zone:2000/PersonalCenter/6.png" alt=""> -->
          <div class="ssbox7">
            <span>使用电脑支付</span>
            <div>
              <img
                src="http://renjihong.zone:2000/PersonalCenter/15.png"
                alt=""
              />
            </div>
            <span @click="sshandle1">立即支付</span>
          </div>
          <div>或</div>
          <div class="ssbox8">
            <span>使用支付宝钱包扫一扫付款</span>
            <div>
              <img
                src="http://renjihong.zone:2000/PersonalCenter/16.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="ssbox3">
          <!-- <img src="http://renjihong.zone:2000/PersonalCenter/7.png" alt=""> -->
          <div>
            <img
              src="http://renjihong.zone:2000/PersonalCenter/17.png"
              alt=""
            />
          </div>
          <div></div>
          <div class="ssbox9">
            <span>使用微信扫一扫付款</span>
            <div>
              <img
                src="http://renjihong.zone:2000/PersonalCenter/18.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toutop from "@/components/Home/Shopptro/ShoppTop";
export default {
  components: {
    toutop,
  },
  data() {
    return {
      scmessage1: "但小兵",
      scmessage2: "北京 北京市 昌平区 天通苑明天第一城4号楼 ",
      scmessage3: "010-21541589",
      ssmessage2: "165.90",
      ssmessage1: "425954156947",
      oid:'',
      cost:0,
      uname:'',
      asheng:'',
      ashi:'',
      axian:'',
      adesc:'',
      aphone:'',
    };
  },
  methods: {
    sshandle1() {
      this.$router.push({ 
        name: "PaySuccess",
        params: {
          oid:this.oid
        }
      });
    },
  },
  beforeMount(){
    let params = this.$route.params;
    console.log(params);
    this.oid = params.oid;
    this.cost = params.cost;
    this.$axios.get(`/address/sel_aid?aid=${params.aid}`)
    .then(resp => {
      let result = resp.data[0];
      console.log(resp);
      this.uname = result.aname;
      this.asheng = result.aprovince;
      this.ashi = result.acity;
      this.axian = result.acounty;
      this.adesc = result.adetails;
      this.aphone = result.aphone;
    })
  }
};
</script>

<style scoped>
.scbox1 {
  width: 1280px;
  text-align: center;
  margin: 0px auto;
  color: #666666;
}
.scbox2 {
  width: 78px;
  height: 78px;
  display: inline-block;
  margin-top: 80px;
  margin-bottom: 60px;
}
.scbox2 > img {
  width: 100%;
}
.scbox3 {
  height: 23px;
  font-size: 22px;
  margin-bottom: 80px;
}
.scbox3 span:nth-child(2) {
  color: #f08200;
}
.scbox4 {
  height: 36px;
  line-height: 38px;
  background: #f4fff2;
  border: 1px solid #e5e5e5;
  padding: 0px 20px;
  box-sizing: border-box;
  text-align: left;
}
.scbox4 > div {
  display: inline-block;
}
.scbox4 > span {
  height: 36px;
}

.ssbox5 {
  width: 1280px;
  margin: 0px auto;
  color: #737373;
  font-size: 17px;
}
.ssbox4 {
  height: 61px;
  line-height: 61px;
}
.ssbox4 span:nth-child(2) {
  color: red;
  font-size: 20px;
}
.ssbox4 span:nth-child(4) {
  float: right;
}
.ssbox6 {
  height: 58px;
  line-height: 58px;
}

.ssbox {
  width: 1280px;
  margin: 0px auto;
  padding: 40px 0px;
  box-sizing: border-box;
  border-top: 1px solid #e9e9e9;
  /* background:#eeeeee; */
}
.ssbox1 {
  height: 40px;
  margin-bottom: 40px;
}
.ssbox1 > div {
  float: left;
  margin-right: 38px;
}
.ssbox1 > input {
  float: left;
  height: 40px;
  line-height: 40px;
  margin: 0px 10px;
}
/* .ssbox2{
    margin-bottom:40px;
} */
.ssbox2 {
  width: 1278px;
  height: 395px;
  border: 1px solid #e8e8e8;
  padding: 61px 0px 61px 272px;
  box-sizing: border-box;
  color: #595959;
  margin-bottom: 40px;
}
.ssbox2 > div {
  float: left;
  width: 216px;
  height: 100%;
  text-align: center;
  font-size: 17px;
}
.ssbox7 > div {
  width: 165px;
  height: 132px;
  margin: 40px 25px;
}
.ssbox7 > span:nth-child(3) {
  width: 170px;
  height: 45px;
  line-height: 45px;
  display: inline-block;
  background: #f08200;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
.ssbox2 > div:nth-child(2) {
  line-height: 275px;
  margin: 0px 32px;
}
.ssbox8 > div {
  width: 216px;
  height: 217px;
  margin-top: 40px;
}

.ssbox3 {
  width: 1278px;
  height: 395px;
  border: 1px solid #e8e8e8;
  padding: 61px 0px 61px 250px;
  box-sizing: border-box;
  color: #595959;
}
.ssbox3 > div {
  float: left;
  width: 216px;
  height: 100%;
  text-align: center;
  font-size: 17px;
}
.ssbox3 > div:nth-child(1) {
  width: 237px;
  height: 277px;
}
.ssbox3 > div:nth-child(2) {
  width: 0px;
  height: 277px;
  border-left: 1px solid #eeeeee;
  margin: 0px 117px 0px 163px;
}
.ssbox9 > div {
  width: 216px;
  height: 217px;
  margin-top: 40px;
}
</style>
