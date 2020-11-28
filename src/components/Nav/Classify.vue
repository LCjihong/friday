<template>
  <div class="classify">
    <div class="topNav">
      <div class="navCan">{{navcan}}</div>
    </div>
    <div class="navCentent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
       navcan:'111'
    }
  },
  beforeMount(){
  switch (window.location.pathname) {
    case '/classify/city':
       this.navcan = '首页>专题'
      break;

    default:
      break;
  }
  }
}
</script>

<style scoped>
.classify{
  width: 1280px;
  /* height: 1000px; */
  /* float: left; */
  background-color: pink;
  margin: 0 auto;
}
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
