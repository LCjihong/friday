<template>
  <el-row id="Personal">
    <el-row id="box">
      <sidebar></sidebar>
      <div class="mibox">
        <el-row class="mibox1">
          <span>{{ miboxHeader }}</span>
          <button class="addBtn" v-show="appear" @click="loca">添加新地址</button>
          <span v-show="apintegra" class="miboxText" >当前积分：<p class="miboxTex">{{APintegral}}</p></span>
        </el-row>
        <el-row>
          <router-view @integral = 'APintegral = $event'></router-view>
        </el-row>
      </div>
    </el-row>
  </el-row>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  name: "Personal",
  data() {
    return {
      appear:false,
      apintegra:false,
      miboxHeader: "",
      APintegral:0,
    };
  },
  methods:{
 loca(){
    this.$router.push('/personal/addmesg');
  }
},
  components: {
    Sidebar,
  },
  watch:{
    $route(){
      if(window.location.pathname == '/personal/maddr'){
        this.appear = true;
      }else if(window.location.pathname == '/personal/mybonuspoints' || window.location.pathname == '/personal/integralorder'){
        this. apintegra = true;
      }else{
        this.appear = false;
        this. apintegra = false;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    let header;
    switch (to.path.split("/")[2]) {
      case "maccount":
        header = "我的账户";
        break;
      case "morder":
        header = "我的订单";
        break;
      case "mybonuspoints":
        header = "我的积分";
        break;
      case "integralorder":
        header = "积分订单";
        break;
      case "mwallet":
        header = "我的钱包";
        break;
      case "mdata":
        header = "个人资料";
        break;
      case "maddr":
        header = "地址管理";
        break;
      case "mfavorite":
        header = "我的收藏";
        break;
      case "mbrowse":
        header = "最近浏览";
        break;
      case "alertpwd":
        header = "修改密码";
        break;
      case "mmessage":
        header = "我的消息";
        break;
      case "mopinion":
        header = "意见反馈";
        break;
    }
    next((vm) => {
      vm.miboxHeader = header;
    });
  },
  beforeRouteUpdate(to, from, next) {
    switch (to.path.split("/")[2]) {
      case "maccount":
        this.miboxHeader = "我的账户";
        break;
      case "morder":
        this.miboxHeader = "我的订单";
        break;
      case "mybonuspoints":
        this.miboxHeader = "我的积分";
        break;
      case "integralorder":
        this.miboxHeader = "积分订单";
        break;
      case "mwallet":
        this.miboxHeader = "我的钱包";
        break;
      case "mdata":
        this.miboxHeader = "个人资料";
        break;
      case "maddr":
        this.miboxHeader = "地址管理";
        break;
      case "mfavorite":
        this.miboxHeader = "我的收藏";
        break;
      case "mbrowse":
        this.miboxHeader = "最近浏览";
        break;
      case "alertpwd":
        this.miboxHeader = "修改密码";
        break;
      case "mmessage":
        this.miboxHeader = "我的消息";
        break;
      case "mopinion":
        this.miboxHeader = "意见反馈";
        break;
    }
    next();
  },
};
</script>

<style scoped>
#Personal{
  border-top: 1px solid #e4e4e4;
}
#box {
  margin: 40px 0 20px;
}
.mibox {
  float: left;
  width: 1083px;
  /* height: 625px; */
  border: 1px solid #e7e7e7;
  position: relative;
}
.mibox1 {
  height: 56px;
  line-height: 56px;
  padding-left: 20px;
  border-bottom: 1px solid #e7e7e7;
}
.mibox1 > span:nth-child(1) {
  float: left;
  font-size: 17px;
}
.mibox2 {
  float: left;
  font-size: 17px;
  margin-right: 40px;
  color: #f08200;
}
.addBtn{
  float: right;
  width: 90px;
  height: 30px;
  background-color: #498e3d;
  color: white;
  outline: none;
  border: 0;
  border-radius: 5px;
  margin-top: 10px;
}
.miboxText{
  float: right;
}
.miboxTex{
  float: right;
  color: #f08200;
  font-size: 20px;
  line-height: 56px;
}
</style>

