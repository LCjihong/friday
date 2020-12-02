<template>
    <div class="topNav">
      <div class="navCan">{{navcan}}</div>
    </div>
</template>

<script>
export default {
 name:'Breadnav',
 props:['config'],
  data(){
    return {
       navcan:'',
       routers:this.config.routera,
    }
  },
  beforeMount(){
  switch (this.routers) {
    case '/classify/nav':
       this.navcan = '首页>专题'
      break;
     case '/particulars':
       this.navcan = '您当前的位置：首页>全部商品>苹果>阿克苏'
      break;

    default:
      break;
  }
  }
}
</script>

<style scoped>
.topNav{
  width: 100%;
  height: 94px;
  background-color: white;
}
.navCan{
  width: 100%;
  height: 54px;
  margin-top: 20px;
  background-color: #f4f4f4;
  float: left;
  line-height: 54px;
  text-indent: 20px;
  color: gray;
}
</style>
