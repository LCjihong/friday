<template>
  <el-row id="search">
    <el-row v-if="commData.length != 0">
      <el-header class="header" height="52px"></el-header>
      <el-row>
        <commodity :data="commData"></commodity>
      </el-row>
    </el-row>
    <el-row v-if="commData.length == 0" class="empty">
      <i class="iconfont icon-sousuo"></i>
      <p>抱歉,暂未找到您要的商品</p>
    </el-row>
  </el-row>
</template>

<script>
import Commodity from '@/components/Commodity'
export default {
  name:'Search',
  components:{
    Commodity
  },
  data(){
    return{
      commData:[]
    }
  },
  beforeMount(){
    this.$axios.get(`/commodity/sel_like?keyword=${this.$route.params.keyword}`)
    .then(resp => {
      resp.data.forEach(element => {
        element.cprice = parseFloat(element.cprice.split(',')[0]).toFixed(1);
        element.oprice = parseFloat(element.oprice.split(',')[0]).toFixed(1);
      });
      this.commData = resp.data;
    })
  }
}
</script>

<style scoped>
#search{
  width: 1280px;
  margin: 0 auto;
}
.header{
  font-size: 16px;
}
.empty{
  height: 557px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f08200;
}
.empty i{
  font-size: 100px;
  margin-bottom: 60px;
}
.empty p{
  font-size: 36px;
}
</style>
