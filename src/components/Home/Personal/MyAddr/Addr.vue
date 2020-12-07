<template>
  <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <i class="header-icon el-icon-info">展开收起其他地址</i>
          </template>
        <div v-for="(item,index) of list" :key="index" class="siteBox">
            <template>
              <el-radio :label="item.num" class="site1">
                {{item.aname}}{{item.aprovince}}{{item.acity}}{{item.acounty}}{{item.adetails}}{{item.aphone}}
             </el-radio>
                 <span class="Obtn" type="text" @click="deletress(item.aid)">删除</span>
                 <span class="Obtn" type="text" >修改</span>
                 <span class="Obtn" type="text" v-if="item.adefault"
                 @click="modiress(item.aid)">设为默认地址</span>
            </template>
        </div>
      </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {
 data(){
   return{
     adio: '',
     num: '',
     list:'',
   }
 },
 beforeMount(){
  this.beMoun()
},
methods:{
  //删除地址
  deletress(ad){
    this.$axios.post('/address/deleress',this.$qs.stringify({
      aid:ad,
    })).then(res => {
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  //修改默认地址
  modiress(ad){
    this.$axios.post('/address/modiress',this.$qs.stringify({
      aid:ad,
      uid:sessionStorage.getItem("uid"),
    })).then(res => {
     this.beMoun()
    }).catch(err=>{
      console.log(err)
    })
  },
  //刷新页面时候显示
  beMoun(){
  this.$axios.post('/address/address',this.$qs.stringify({
    uid:sessionStorage.getItem('uid')
  })).then(res => {
    console.log(res)
    this.list = res.data
    for(var i = 0;i < res.data.length;i++){
      this.num = res.data[i].adefault
    }
  }).catch(function(err){
    console.log(err)
  })
  }
}
}
</script>

<style scoped>
.siteBox{
  width: 1085px;
  height: 40px;
  border-radius: 5px;
  line-height: 40px;
  background-color: #f4fff2;
  float: left;
  /* position: relative; */
  margin-top: 10px;
}
div /deep/ .el-collapse-item__content{
  position: relative;
}
div /deep/.el-button{
  position: absolute;
  right: 0;
}
.Obtn{
  float: right;
  margin: 0 10px;
  color: blue;
  cursor: pointer;
}
</style>
