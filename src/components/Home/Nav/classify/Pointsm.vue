<template>
  <div class="pointsmStore">
    <swiper :config="SwiperConf"></swiper>
     <div class="storeType">
        <div class="commodityOne">
          <div class="peach"  v-for="(item , index) of list" :key="index" @click="Tioa(item.cid)">
            <img :src="item.cimgurl" alt="">
            <p class="storeText1">{{item.cname}}</p>
            <p class="storeText2">{{item.cdesc}}</p>
            积分：<span class="inteGral">{{item.iprice}}</span> 价值：<span class="valUE">{{item.oprice}}</span><br>
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
      list:'',
       SwiperConf: {
        height: "500px",
        data: [
          "http://renjihong.zone:2000/home/swiper1.png",
          "http://renjihong.zone:2000/login/积分商城1.jpg",
          "http://renjihong.zone:2000/home/swiper1.png",
          "http://renjihong.zone:2000/login/积分商城1.jpg",
        ],
      },
    }
  },
  methods:{
    Tioa(v){
      // this.$router.push(`/particulars/?${v}`);
      this.$router.push({path:'/particulars',query:{id:v}});
    }
  },
  beforeMount(){
    this.$axios.post('http://renjihong.zone:3000/integeral/integ',this.$qs.stringify({})).then(res => {
      // console.log(res)

      this.list = res.data
      // console.log(this.list)
    }).catch(function(error){
      // console.log(error)
    })
  }
}
</script>

<style scoped>
/* .pointsmStore{
  width: 1920px;
} */
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
