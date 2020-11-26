<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import FootBar from '@/components/FootBar';
export default {
  name: 'App',
  components:{
    TopBar,
    FootBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
</style>

