<template>
  <div id="home-box">
    <top-bar></top-bar>
    <welcome></welcome>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import Welcome from "@/components/Nav/Welcome";
export default {
  name: "Home",
  components: {
    TopBar,
    Welcome
  },
};
</script>

<style>
#home-box{
  color: #333333;
  margin-bottom: 20px;
}
</style>
