<template>
  <div id="home-box">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  name: "Home",
  components: {
    TopBar,
  },
};
</script>

<style>
#home-box{
  color: #333333;
  margin-bottom: 20px;
}
</style>
