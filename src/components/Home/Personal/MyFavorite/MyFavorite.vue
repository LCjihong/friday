<template>
  <div class="Favor">
     <div class="peach"  v-for="(item , index) of list" :key="index">
            <img :src="item.cimgurl" alt="">
            <p class="storeText1">{{item.cname}}</p>
            <p class="storeText2">{{item.cdesc}}</p>
            <span class="inteGral">￥{{speci}}</span> <del class="valUE">￥{{xianjia}}</del>
            <span class="iconfont icon-gouwuche1 che"></span><br>
             <button class="btn" v-if="item.num != 1" @click="delectColle(item.cid)">取消收藏</button>
             <button class="btn2" v-if="item.num == 1">已失效</button>
          </div>
  </div>
</template>

<script>
export default {
 data(){
   return{
      list:'',
      speci:'',
      xianjia:'',
   }
 },
 beforeMount(){
   this.$axios.post('/collect/collect',this.$qs.stringify({})).
   then((res) => {
     console.log(res)
     this.list = res.data
     for(var i = 0;i < res.data.length;i++ ){
      this.speci = res.data[i].cprice.split(',')[0]
      this.xianjia = res.data[i].oprice.split(',')[0]
      }
   }).catch(err => {
     console.log(err)
   })
 },
methods:{
delectColle(v){
  this.$axios.post('/collect/dececolloe',this.$qs.stringify({
    cid:v,
  })).then((res) => {
    console.log(res)
    this.$router.go(0)
  })
}
 }
}
</script>

<style scoped>
.Favor{
  width: 1085px;
  height: 568px;
  float: left;
  display: flex;
  justify-content: space-around;
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
