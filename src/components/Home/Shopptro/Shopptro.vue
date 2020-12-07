<template>
  <div class="Lineitem">
    <toutop></toutop>
    <div class="nav1">
      <p class="iconfont icon-gouwuche1 topnav"></p>
      <p class="topTexa">购物车</p>
    </div>
    <el-row class="goodRevInfor">
      <shoptro-info 
      v-for="(item, index) in CartInfo" 
      :key="index" :data="item" 
      :MerIndex="index" 
      @change-mer-sum="changeSum(index, $event)"
      ></shoptro-info>
      <div class="btmBtn">
        <span class="btnbTex">全选</span>
        <span class="btnaTex">批量删除</span>
        <div class="aggregate">
          商品总记：<span>￥{{ allMerSum }}</span>
          <button @click="buyNow">立即购买</button>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import toplogo from "@/components/Toplogo";
import toutop from "@/components/Home/Shopptro/ShoppTop";
import ShoptroInfo from './ShoptroInfo.vue';
export default {
  components: {
    toplogo,
    toutop,
    ShoptroInfo,
  },
  data() {
    return {
      tpTex: "确认兑换信息",
      blue: "",
      radio: "",
      MerSum: [],
      allMerSum: 0,
      activeNames: ["1"],
      num: 1,
      site: [
        {
          num: 1,
          textSit:
            "但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589",
        },
        {
          num: 2,
          textSit:
            "但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589",
        },
        {
          num: 3,
          textSit:
            "但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589",
        },
        {
          num: 4,
          textSit:
            "但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589",
        },
      ],
      CartInfo:[]
    }
  },
  beforeMount(){
    this.$axios.get(`/cart?uid=${sessionStorage.getItem('uid')}`)
    .then(resp => {
      this.CartInfo = resp.data;
      this.CartInfo.forEach(element => {
        let sum = 0;
        element.checked = false;
        element.data.forEach(elt => {
          elt.checked = false;
          sum += elt.c_price * elt.c_mount;
        });
        this.MerSum.push(sum);
      });
      this.allMerSum = this.MerSum.reduce((a, b) => a + b);
    })
  },
  methods:{
    changeSum(index, value){
      this.MerSum[index] = value;
      this.allMerSum = this.MerSum.reduce((a, b) => a + b);
    },
    buyNow(){
      let arr = [];
      this.CartInfo.forEach(element => {
        element.data.filter((value) => value.checked == true).map((value)=>'c_id = ' + value.c_id).forEach((value) => {
          arr.push(value);
        })
      });
      this.$axios.post('/cart/to_order', {
        ids:arr.join(' or ')
      })
      .then(resp => {
        console.log(resp);
      })
    }
  }
};
</script>

<style scoped>
.top-log {
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
  margin: 0 auto;
  padding-bottom: 20px;
}
.nav1 {
  width: 1280px;
  margin: 0 auto;
  height: 50px;
  position: relative;
  margin-top: 30px;
}
.topTexa {
  position: absolute;
  left: 50px;
  font-size: 18px;
  line-height: 50px;
}
.topnav {
  font-size: 18px;
  line-height: 50px;
  position: absolute;
  left: 0;
  color: #f08200;
  font-size: 30px;
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
.siteBox {
  width: 1280px;
  height: 40px;
  border-radius: 5px;
  line-height: 40px;
  background-color: #f4fff2;
  float: left;
  margin-top: 10px;
}
.comTop {
  width: 1280px;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  color: #959595;
}
.dwtInteTex {
  position: absolute;
  top: 0;
  right: 320px;
  font-size: 14px;
  color: #959595;
}
.btmBtn {
  width: 100%;
  height: 130px;
  float: left;
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
  line-height: 130px;
}
.aggregate span {
  font-size: 20px;
  color: red;
}
.aggregate button {
  width: 150px;
  height: 50px;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: #f08200;
  outline: none;
  border: 0;
}
</style>
