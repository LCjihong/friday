<template>
  <div id="top-bar">
    <div class="box">
      <div class="city">
        <span>所在城市:</span>
        <em>{{ autoLocation }}</em>
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="options">
        <span v-if="phone"
          >您好,<router-link class="phone" to="/personal/maccount">{{
            phone
          }}</router-link>
          <i style="cursor: pointer" @click="Logout">退出</i></span
        >
        <span v-if="!phone"
          ><i @click="toggleLogin = true">登录</i
          ><el-divider direction="vertical"></el-divider
          ><router-link tag="i" to="/lr/register">注册</router-link></span
        >
        <span class="iconfont icon-anjianfengexian"
          ><router-link to="/personal/morder">我的订单</router-link></span
        >
        <span class="iconfont icon-anjianfengexian"
          ><router-link to="/personal/mmessage">我的消息</router-link></span
        >
        <span class="iconfont icon-anjianfengexian"
          ><router-link to="">我是商家</router-link></span
        >
        <i class="iconfont icon-anjianfengexian"></i>
        <span class="iconfont icon-rexiandianhua icon-anjianfengexian"
          >400-800-8200</span
        >
      </div>
    </div>
    <div class="login-box" v-if="toggleLogin" @click.self="toggleLogin = false">
      <div class="small-box">
        <login></login>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Logo/Longin";
export default {
  name: "TopBar",
  data() {
    return {
      phone: "",
      toggleLogin: false,
      autoLocation:''
    };
  },
  components: {
    Login,
  },
  beforeMount() {
    if (sessionStorage.getItem("uid")) {
      this.$axios
        .post("/user/sel_id", `uid=${sessionStorage.getItem("uid")}`)
        .then((resp) => {
          this.phone = resp.data[0].uphone;
        });
    }
  },
  created(){
    setTimeout(() => {
      this.getLocation();
    }, 500);
  },
  methods: {
    Logout() {
      sessionStorage.removeItem("uid");
      window.location.pathname = "/";
    },
    getLocation() {
      const _this = this;
      window.AMap.plugin("AMap.CitySearch", function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            _this.autoLocation = result.province + ' ' + result.city;
          }
        });
      });
    },
  },
};
</script>

<style scoped>
#top-bar {
  height: 36px;
  background-color: #eeeeee;
  font: 14px/36px "";
  line-height: 36px;
  color: #666666;
}
.box {
  width: 1280px;
  height: 100%;
  margin: 0 auto;
}
.city {
  float: left;
}
.options {
  float: right;
}
.options .phone {
  color: #4b943d;
}
.iconfont {
  font-size: 14px;
}
.icon-rexiandianhua {
  font-size: 14px;
  font-weight: 900;
}
.icon-rexiandianhua::before {
  color: #4b943d;
  padding-right: 3px;
}
.options a {
  color: #666666;
}
.login-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.small-box {
  width: 387px;
  height: 528px;
  background-color: #fff;
}
</style>