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
  watch: {
    $route() {
      this.changeLu();
    }
  },
  methods: {
    changeLu() {
      console.log(1);
      switch (this.routers) {
        case '/classify/nav':
        this.navcan = '首页>专题'
        break;
      case '/classify/newreigistrat':
        this.navcan = '您当前的位置：首页>礼拜五商城>新用户注册'
        break;
      case '/classify/friday':
        this.navcan = '您当前的位置：首页>全部商品>苹果>阿克苏'
        break;
       case '/particulars':
        this.navcan = '您当前的位置：首页>全部商品>苹果'
        break;
      default:
        break;
    }
    }
  },
  beforeMount(){

  }
}
</script>

<style scoped>
.topNav{
  width: 1280px;
  height: 94px;
  margin: 0 auto;
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
